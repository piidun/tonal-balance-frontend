<template>
  <div>
    <Header></Header>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import '~/assets/css/main.css'
definePageMeta({
  middleware: 'auth'
});
</script>

