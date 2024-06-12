<script setup lang="ts">
const creditsRemaining = ref(0);

const getCredits = async () => {
    try {
        const response = await fetch('/api/credits', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Invalid username');
        }

        const data = await response.json();
        creditsRemaining.value = data.credits;
        console.log(data.credits + "asd");
        // Redirect to the desired page
    } catch (error) {

    }
}

getCredits();

const route = useRoute()
console.log(creditsRemaining);
const links = computed(() => [{
  label: 'Account',
  avatar: {
    src: 'https://avatars.githubusercontent.com/u/739984?v=4'
  },
  badge: `Credits: ${creditsRemaining.value}`,
  to: '/account'
}, {
  label: 'Process audio',
  icon: 'i-heroicons-speaker-wave',
  to: '/process'
}, {
  label: 'About',
  icon: 'i-heroicons-information-circle',
  to: '/'
}, {
  label: 'Purchase credits',
  icon: 'i-heroicons-credit-card',
  to: '/components/command-palette'
}])
</script>

<template>
<UVerticalNavigation :links="links" />
</template>


