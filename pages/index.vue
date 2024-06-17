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
      <p class="text-2xl p-20 shadow-text">
        Force your audio spectrum to conform to a pleasant range of frequencies.
      </p>

      <div class="w-1/3 mb-20 flex items-center justify-between">
        <button @click="goToLogin()" class="bg-slate-800 rounded-md w-40 p-4">LOGIN</button>
        <button @click="goToRegistry()"  class="bg-slate-800 rounded-md w-40 p-4">REGISTER</button>
    </div>
    </div>
    <div class="p-4">
        <h2 class="mt-20">Pink noise spectrum</h2>
        <p>The pink noise spectrum is pleasant to the ears. Let's force your EQ into that!</p>
        <p>Our processing does bit by bit, sample by sample to <i>smash</i> your audio into range of the pink noise spectrum.</p>
    <img src="../assets/img/pinknoise.jpeg">
    </div>

    <div class="flex flex-col h-full items-center w-full img-2 mt-20 mb-20">
        <p class="text-2xl p-20 shadow-text">
          Excellent post mix, pre mastering step for a tight, balanced sound
        </p>

            <p class="text-2xl p-20 shadow-text">
            Upload file, let the server work on it and download the processed version.
          </p>

        <p class="text-2xl p-20 shadow-text">
            Perfect for adding saturation.
        </p>
        <p class="pb-4"><a href="/register-account"><strong>Sign up</strong></a> and give it a go with 3 free credits!</p>
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

.img-2 {
    background-image: url('../assets/img/headphones.jpg');
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
