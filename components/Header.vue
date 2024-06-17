<template>
    <header class="w-full p-2 bg-slate-600 flex justify-between">
        <div class="w-1/3 text-white bg">
<div class="pl-12">AUDIO SMASHER</div>
        </div>
        <div v-if="!loggedIn" class="w-100">
            <a href="login">Login</a>
            <i> | </i>
            <a href="register-account">Register</a>
        </div>

        <div v-if="loggedIn">
            <button @click="signOut">Sign out</button>
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

    const signOut = () => {
        token.value = '';
        window.location.reload()
    }

    if (token.value) {
        loggedIn.value = true;
    }
</script>

<style scoped>
.bg {
    background-image: url('../assets/img/logosmall.png');
    background-repeat: no-repeat;
    background-size: 40px;
}
</style>