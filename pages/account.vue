<template>
    <div class="w-full flex flex-col">
      <div class="flex flex-1">
        <main class="flex-1 p-8">
          <div class="bg-white shadow-md rounded-lg p-6">
            <h2 class="text-2xl text-slate-700 font-bold mb-6">Account Information</h2>
            <div class="mb-4">
                <h3 class="block text-gray-700">Username</h3>
                <div class="text-slate-500 ml-1">tonyartn</div>
            </div>
            <div class="mb-4">
              <h3 class="block text-gray-700">Remaining Credits</h3>
              <div class="text-slate-500 ml-1">3</div>
            </div>
            <div class="mb-6">
              <label class="block text-gray-700">Reset Password</label>
              <input type="password" class="mt-1 block w-full border-gray-300 p-2" placeholder="New Password">
            </div>
            <button class="bg-blue-600 text-white px-4 py-2 rounded-md">Update Password</button>
          </div>
        </main>
      </div>
    </div>
  </template>
  