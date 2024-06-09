<template>
    <div class="flex items-center">
<div class="container flex items-center">
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
</div>
</div>
</template>

<style scoped>
.container {
    gap: 10px;
}

.square {
    width: 30px;
    height: 30px;
    background-color: #3498db;
    animation: scaleUpDown 1.5s infinite;
}

.square:nth-child(2) {
    animation-delay: 0.3s;
}

.square:nth-child(3) {
    animation-delay: 0.6s;
}

.square:nth-child(4) {
    animation-delay: 0.9s;
}

@keyframes scaleUpDown {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.5);
    }
}
</style>