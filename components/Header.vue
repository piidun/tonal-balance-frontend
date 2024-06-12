<template>
    <header class="w-full p-5 bg-slate-600 flex justify-between">
        <div class="w-1/3">
            spectral<img src="assets/img/logosmall.png" class="w-12 mx-4 inline">shaper
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
    const userName = ref('');
    const token = useCookie("token");

    userName.value = getUsernameFromToken(token.value) ?? ''
    const loggedIn = ref(false);
    console.log(token.value);
    if (token.value) {
        loggedIn.value = true;
    }
</script>