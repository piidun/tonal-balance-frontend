<template>
    <div class="w-full flex flex-col">
      <div class="flex flex-1">
        <main class="flex-1 p-8">
          <div class="bg-white shadow-md rounded-lg p-6">
            <h2 class="text-2xl text-slate-700 font-bold mb-6">Account Information</h2>
            <div class="mb-4">
                <h3 class="block text-gray-700">Username</h3>
                <div class="text-slate-500 ml-1">{{ userName }}</div>
            </div>
            <div class="mb-4">
              <h3 class="block text-gray-700">Remaining Credits</h3>
              <div class="text-slate-500 ml-1">{{ creditsRemaining }}</div>
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

  <script setup lang="ts">

import { getUsernameFromToken } from '@/services/authService';
    const userName = ref('');
    const token = useCookie("token");

    userName.value = getUsernameFromToken(token.value) ?? ''

const creditsRemaining = ref(0);

const getCredits = async () => {
    try {
        const response = await fetch('/api/credits', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Invalid username');
        }

        const data = await response.json();
        creditsRemaining.value = data.credits;
        console.log(data.credits + "asd");
        // Redirect to the desired page
    } catch (error) {

    }
}
getCredits();
</script>
  