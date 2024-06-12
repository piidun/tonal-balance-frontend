<script setup lang="ts">
const route = useRoute()

const links = [{
  label: 'Account',
  avatar: {
    src: 'https://avatars.githubusercontent.com/u/739984?v=4'
  },
  badge: 'Credits: 4',
  to: '/account'
}, {
  label: 'Process audio',
  icon: 'i-heroicons-speaker-wave',
  to: '/process'
}, {
  label: 'About',
  icon: 'i-heroicons-information-circle',
  to: `${route.path.startsWith('/dev') ? '/dev' : ''}/components/vertical-navigation`
}, {
  label: 'Purchase credits',
  icon: 'i-heroicons-credit-card',
  to: '/components/command-palette'
}]
</script>

<template>
<UVerticalNavigation :links="links" />
</template>


