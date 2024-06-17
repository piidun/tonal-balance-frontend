<template>
    <div class="w-full flex flex-col">
        <div class="flex flex-1">
            <main class="flex-1 p-8">
                <div class="bg-white shadow-md rounded-lg p-6">
                    <h2 class="text-2xl text-slate-700 font-bold mb-6">About Spectral Audio Shaping</h2>
                    <div class="mb-4">
                        <h3 class="block text-gray-700 font-semibold">What does it do?</h3>
                        <div class="text-slate-500 ml-1">Spectral Audio Shaping tailors your uploaded track to align with the pink noise spectrum. Utilizing Fourier transforms and hamming windows, it analyzes each sample of your audio to match the pink noise profile.</div>
                    </div>
                    <div class="mb-4">
                        <h3 class="block text-gray-700 font-semibold">When do I need it?</h3>
                        <div class="text-slate-500 ml-1">This tool is ideal for fine-tuning your mix before the mastering stage. It can also be effectively used on recordings of individual tracks to ensure optimal EQ adjustments.</div>
                    </div>
                    <div class="mb-4">
                        <h3 class="block text-gray-700 font-semibold">Can other tools do this?</h3>
                        <div class="text-slate-500 ml-1">Yes, you can do it manually, but multiband Compressors, EQs are relative in nature when you apply them. So it can be hard to find the perfect balance. This tool offers an absolute adjustment. Besides, most plugins lack the capability to adjust every point in the audio spectrum, as they attempt to do it in real-time. That's why this is currently an online service requiring a dedicated processing server.</div>
                    </div>
                    <a class="bg-blue-600 text-white px-4 py-2 rounded-md" href="/process">Try it out!</a>
                </div>
            </main>
        </div>
    </div>
</template>
