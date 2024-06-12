<template>
    <header class="w-full p-5 bg-slate-600 flex justify-between">
        <div class="w-1/3">
            spectral<img src="assets/img/logosmall.png" class="w-12 mx-4 inline">shaper
        </div>
        <div v-if="!loggedIn" class="w-100">
            <a href="login">Login</a>
            <i> | </i>
            <a href="register-account">Register</a>
        </div>

        <div v-if="loggedIn">
            Welcome, user!
        </div>
    </header>
</template>

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
        // Redirect to the desired page
    } catch (error) {

    }
}

getCredits();
    const token = useCookie("token");
    const loggedIn = ref(false);
    console.log(token.value);
    if (token.value) {
        loggedIn.value = true;
    }
</script>