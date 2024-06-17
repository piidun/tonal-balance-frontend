<template>
  <div class="layout">
    <Header v-if="loggedIn" class="header"></Header>
    <div class="main-content">
      <Sidebar v-if="loggedIn" class="sidebar bg-slate-800"></Sidebar>
      <NuxtPage class="page-content" />
    </div>
  </div>
</template>

<script setup lang="ts">
import '~/assets/css/main.css'
import { getUsernameFromToken } from '@/services/authService';
import { useCookie } from '#imports';
definePageMeta({
  middleware: 'auth'
});
    const userName = ref('');
    const token = useCookie("token");
    const tokenValue = token.value || '';
    userName.value = getUsernameFromToken(tokenValue) ?? '';
    const loggedIn = ref(false);
    if (token.value) {
        loggedIn.value = true;
    }
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
