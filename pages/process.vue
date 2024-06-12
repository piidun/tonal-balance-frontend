<template>
    <div class="w-full flex flex-col">
      <div class="flex flex-1">
        <main class="flex-1 p-8">
          <div class="bg-white shadow-md rounded-lg p-6">
            <h2 class="text-2xl text-slate-700 font-bold mb-6">Process audio</h2>
            <div class="mb-4">
                <h3 class="block text-gray-700">Supported format</h3>
                <div class="text-slate-500 ml-1">.wav</div>
            </div>
            <div class="mb-4">
              <h3 class="block text-gray-700">Max file size</h3>
              <div class="text-slate-500 ml-1">200mb</div>
            </div>
            <div class="mb-6">
                <section class="flex items-center justify-center">
                    <FileUpload/>
                </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  </template>