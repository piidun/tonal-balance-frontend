<template>
  <div class="flex flex-col w-full items-center">
    <div class="w-full flex justify-between h-8 p-2 bg-blue-500 text-white">
      <Icon size="1.5em" class="mb-1" name="i-heroicons-information-circle"></Icon> 
      <div>3 free credits upon registering, pay
      per use - no subscriptions!</div>
      <div><Icon class="mb-1" size="1.5em" name="i-heroicons-x-mark"></Icon></div>
</div>
    <div class="w-full pl-12 h-8 p-2 bg-slate-800 text-white bg">
        AUDIO SMASHER
      </div>
    <div class="flex flex-col h-full items-center w-full img">
      <p class="text-2xl p-20 w-1/2 shadow-text">
        Force your audio spectrum to conform to the universally accepted range
      </p>

      <div class="w-1/3 flex items-center justify-between">
        <button @click="goToLogin()" class="bg-slate-800 rounded-md w-40 p-4">LOGIN</button>
        <button @click="goToRegistry()"  class="bg-slate-800 rounded-md w-40 p-4">REGISTER</button>
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">

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
}

.bg {
    background-image: url('../assets/img/logosmall.png');
    background-repeat: no-repeat;
    background-size: 50px;
    background-position-y: 4px;
}

.shadow-text {
    text-shadow: black 1px 2px;
}
</style>
