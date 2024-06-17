<!-- pages/login.vue -->
<template>
  <div class="flex flex-row justify-center w-full">
    <div class="login-container h-80 mt-20 w-1/2">
      <h1>Login</h1>
      <form @submit.prevent="handleLogin">
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const username = ref<string>("");
const password = ref<string>("");
const errorMessage = ref<string>("");

import axios from 'axios';

const handleLogin = async () => {
  try {
    const response = await axios.post("/api/login", {
      username: username.value,
      password: password.value,
    });

    // Check if the response status is not 200
    if (response.status !== 200) {
      throw new Error("Invalid username or password");
    }

    // Handle successful login here
    const token = useCookie('token');
    token.value = response.data.token;

    if (response.data.token) {
      window.location.href = '/';
    }
  } catch (error: any) {
    errorMessage.value = (error as Error).message;
  }
};
</script>

<style scoped>
.login-container {
  max-width: 500px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
}

form div {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  text-align: center;
}
</style>
