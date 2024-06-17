<template>
    <header class="w-full p-5 bg-slate-600 flex justify-between">
        <div class="w-1/3 text-pink-400">
            <img src="assets/img/logosmall.png" class="w-12 mx-4 inline">AudioSmasher
        </div>
        <div v-if="!loggedIn" class="w-100">
            <a href="login">Login</a>
            <i> | </i>
            <a href="register-account">Register</a>
        </div>

        <div v-if="loggedIn">
            Welcome, {{ userName }}
        </div>
    </header>
</template>

<script setup lang="ts">
import { getUsernameFromToken } from '@/services/authService';
import { useCookie } from '#imports';
    const userName = ref('');
    const token = useCookie("token");
    const tokenValue = token.value || ''; // Default to an empty string if token.value is undefined or null
    userName.value = getUsernameFromToken(tokenValue) ?? '';
    const loggedIn = ref(false);
    if (token.value) {
        loggedIn.value = true;
    }
</script>

<style scoped>

</style>