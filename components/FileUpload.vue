<template>
  <form class="mt-4 flex flex-col space-y-4" @submit.prevent="uploadImage">
    <div class="flex flex-wrap items-center">
      <div class="flex items-center justify-center h-12 w-40">
        <label
          for="dropzone-file"
          class="flex flex-col items-center justify-center border-2 h-10 w-40 border-gray-300 border-solid cursor-pointer bg-gray-50 hover:bg-gray-100"
        >
          <div
            v-if="!filename"
            class="flex flex-col items-center justify-center pt-8 pb-6"
          >
            <p class="mb-2 p-2 rounded-sm text-sm text-gray-500">
              Click to upload
            </p>
          </div>

          <div
            v-else
            class="flex flex-col items-center text-slate-900 justify-center pt-8 pb-8"
          >
            {{ filename }}
          </div>
          <input
            ref="files"
            id="dropzone-file"
            type="file"
            class="hidden"
            @change="onFileChange"
          />
        </label>
      </div>

      <div v-if="success" class="text-green-600 w-full font-medium">{{
        success
      }}</div>
      <div v-if="error" class="text-red-600 w-full font-medium">{{ error }}</div>
    </div>

    <button
      v-if="readyToProcess && !startedToProcess && !success"
      class="ml-auto mr-4 max-w-fit bg-blue-600 text-white rounded px-4 py-2 font-medium"
    >
      Process audio
    </button>
    <FileProcessing v-if="startedToProcess" />

    <div class="w-full flex items-center">
      <button
        v-if="success"
        @click="downloadFile"
        class="bg-green-600 text-white rounded px-4 py-2 font-medium"
      >
        Download Processed File
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";

const files = ref();
const filename = ref();
const success = ref();
const error = ref();
const processedFilePath = ref();
const startedToProcess = ref(false);
const readyToProcess = ref(false);

function onFileChange(e) {
  readyToProcess.value = true;
  const file = e.target.files[0];
  filename.value = file.name;
}

async function uploadImage() {
  try {
    startedToProcess.value = true;
    error.value = null;
    success.value = null;
    const formData = new FormData();
    formData.append("file", files.value.files[0]);

    const response = await fetch(
      "http://localhost:5179/api/fileupload/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    processedFilePath.value = data.filePath;
    success.value = "File uploaded and processed successfully!";
    startedToProcess.value = false;
  } catch (e) {
    startedToProcess.value = false;
    error.value = e.message;
  }
}

async function downloadFile() {
  try {
    const response = await fetch(
      `http://localhost:5179/api/fileupload/download/${processedFilePath.value
        .split("/")
        .pop()}`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = processedFilePath.value.split("/").pop();
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  } catch (e) {
    error.value = e.message;
  }
}
</script>
