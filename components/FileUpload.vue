<template>
  <form class="mt-4 flex flex-col space-y-4" @submit.prevent="uploadImage">
    <div class="flex flex-wrap items-center">
      <div class="w-full">
        <label for="process-level" class="text-slate-800 block">Amount of processing</label>
        <select class="w-1/2 h-8 mb-5" v-model="strength" id="process-level">
          <option value="0.3">Weak</option>
          <option value="0.5" selected>Medium</option>
          <option value="0.7">Strong</option>
          <option value="1">Crushing</option>
          <option value="2">Wrecking</option>
        </select>
      </div>
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
import axios from 'axios';
import { getUsernameFromToken } from '@/services/authService';


const files = ref();
let file = null;
const filename = ref();
const success = ref();
const error = ref();
const processedFilePath = ref();
const startedToProcess = ref(false);
const readyToProcess = ref(false);
const strength = ref(0.5);

function onFileChange(e) {
  readyToProcess.value = true;
  file = e.target.files[0];
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
      `api/upload?username=${getUsernameFromToken(useCookie('token').value)}&mixfactor=${strength.value}`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    processedFilePath.value = data.fileName;
    success.value = "File uploaded and processed successfully!";
    startedToProcess.value = false;
  } catch (e) {
    startedToProcess.value = false;
    error.value = e.message;
  }
}

async function downloadFile() {
  try {
    const response = await axios.get(`/api/download?filename=${processedFilePath.value}`, { responseType: 'blob' });
console.log(response)
console.log(processedFilePath.value)
    if (response.status != 200) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const blob = response.data;
    console.log(blob);
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