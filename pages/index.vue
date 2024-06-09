<template>
    <div class="flex items-center justify-center">
        <div class="mr-4">TONAL</div>
        <img src="assets/img/logotb.png" class="w-1/6 mx-4">
        <div class="ml-4">BALANCE</div>
    </div>

    <section class="flex items-center justify-center">
        <div class="p-10 w-1/2">
        <h2>Pink noise spectral shaper</h2>
        <p>Achieve more tonal balance using the pink noise compressor. This online tool goes through your audio file and pushes every bit of sound closer to the pink noise spectrum.</p>
        <h3>What is the pink noise spectrum?</h3>
        <p>Pink noise in itself is perfect tonal balance and it relates to how our ears perceive loudness across the EQ spectrum. A perfect mix would approach pink noise. The low end is typically higher as it is <i>perceived</i> as lower, and vice versa for the high end.</p>
            <a>Read more</a>
    </div>
    </section>

    <section class="flex items-center justify-center">
        <FileUpload/>
    </section>
</template>