<template>
  <div class="layout">
    <Header class="header"></Header>
    <div class="main-content">
      <Sidebar class="sidebar bg-slate-800"></Sidebar>
      <NuxtPage class="page-content" />
    </div>
  </div>
</template>

<script setup lang="ts">
import '~/assets/css/main.css'
definePageMeta({
  middleware: 'auth'
});
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header {
  flex-shrink: 0;
}

.main-content {
  display: flex;
  flex: 1;
}

.sidebar {
  flex-shrink: 0;
  width: 250px; /* Adjust the width as needed */
}

.page-content {
  flex: 1;
  padding: 20px; /* Adjust the padding as needed */
  overflow-y: auto;
}
</style>
