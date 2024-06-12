<template>
    <p>Bye</p>
</template>

<script setup lang="ts">
const cookie = useCookie('token');
cookie.value = '';
location.reload();
</script>