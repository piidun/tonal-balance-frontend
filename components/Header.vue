<template>
<header class="w-full p-5 bg-slate-600 flex justify-between">
    <div class="w-1/3">
    spectral<img src="assets/img/logosmall.png" class="w-12 mx-4 inline">shaper
    </div>
    <div v-if="!loggedIn" class="w-100">
        <a>Login</a>
        <i> | </i>
        <a>Register</a>
    </div>

    <div v-if="loggedIn">
        <div>
        My account<Icon name="uil:user"/>
    </div>
    <div>
        Credits: 4 <Icon name="uil:coins"/>
    </div>
        
    </div>
</header>
</template>

<script setup lang="ts">
const loggedIn = ref(false);
const token = useCookie("token");
console.log(token.value);
if (token.value.length > 0) {
    loggedIn.value = true;
}
</script>