<template>
    <div class="w-full flex flex-col">
      <div class="flex flex-1">
        <main class="flex-1 p-8">
          <div class="bg-white shadow-md rounded-lg p-6">
            <h2 class="text-2xl text-slate-700 font-bold mb-6">New Account</h2>
            <div class="mb-4">
              <label class="block text-gray-700">E-mail</label>
              <input v-model="email" type="email" class="mt-1 block w-full border-gray-300 p-2" placeholder="user@site.com">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700">Password</label>
              <input v-model="password" type="password" class="mt-1 block w-full border-gray-300 p-2" placeholder="New Password">
            </div>
            <div class="mb-6">
              <label class="block text-gray-700">Repeat Password</label>
              <input v-model="repeatPassword" type="password" class="mt-1 block w-full border-gray-300 p-2" placeholder="New Password">
            </div>
            <button @click="createUser" class="bg-blue-600 text-white px-4 py-2 rounded-md">Create user</button>
          </div>
        </main>
      </div>
    </div>
  </template>
  

  <script setup lang="ts">
  import axios from 'axios';
  
  const email = ref('');
  const password = ref('');
  const repeatPassword = ref('');
  const router = useRouter();
  
  const createUser = async () => {
    if (password.value !== repeatPassword.value) {
      alert("Passwords do not match!");
      return;
    }
  
    try {
      const response = await axios.post('/api/register', {
        username: email.value,
        password: password.value,
      });
  
      if (response.status === 200) {
        alert("User created successfully!");
        // Redirect to login or another page
        router.push('/login');
      }
    } catch (error) {
      console.log("Failed to create user: " + (error.response?.data?.message || error.message));
    }
  };
  </script>
  