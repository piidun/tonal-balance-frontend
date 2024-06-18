<template>
  <div class="flex flex-col w-full items-center">
    <div class="w-full flex justify-between h-8 p-2 bg-blue-500 text-white fixed">
      <Icon size="1.5em" class="mb-1" name="i-heroicons-information-circle"></Icon> 
      <div>Earn 3 free credits upon registering!</div>
      <div><Icon class="mb-1" size="1.5em" name="i-heroicons-x-mark"></Icon></div>
    </div>
    <div @click="goToFrontPage()" class="w-full pl-12 h-8 p-2 text-white bg fixed top-8 cursor-pointer">AUDIO SMASHER</div>
<div class="flex flex-col h-full items-center w-full img">
    <p class="text-2xl p-20 mt-20 shadow-text">Adjust your audio to a pleasant frequency range.</p>
  
    <div class="w-1/4 mb-20 flex items-center justify-between">
      <button @click="goToLogin()" class="bg-teal-400 text-black rounded-md w-40 p-4 mr-2">LOGIN</button>
      <button @click="goToRegistry()" class="bg-slate-800 rounded-md w-40 p-4">REGISTER</button>
    </div>
  </div>
  
  <div class="p-4">
    <h2 class="pl-20">Spectral shaping</h2>
    <p class="pl-20 pr-20">Our algorithm adjusts your audio to match the pink noise spectrum.</p>
    <img class="mt-10" src="../assets/img/pinknoise.png">
  </div>
  
  <div class="flex flex-col h-full items-center w-full img-2 mt-4 mb-20 pb-80">
    <p class="text-2xl p-20 shadow-text">Perfect for a balanced, saturated sound.</p>
    <p class="text-2xl p-20 shadow-text">Simply upload your file, and download the result.</p>
    <p class="pb-4"><a href="/register-account"><strong>Sign up</strong></a> and get 3 free credits!</p>
  </div>
  </div>
</template>

<script setup lang="ts">

const goToFrontPage = () => {
    window.location.href="/";
}

const goToLogin = () => {
    window.location.href="/login";
}


const goToRegistry = () => {
    window.location.href="/register-account";
}
</script>

<style scoped>
.img {
    background-image: url('../assets/img/mixer.jpg');
    background-size: 100%;
    background-repeat: no-repeat;
}

.img-2 {
    background-image: url('../assets/img/headphones.jpg');
    background-size: 100%;
    background-repeat: no-repeat;
}

.shadow-text {
    text-shadow: black 1px 2px;
}
</style>
