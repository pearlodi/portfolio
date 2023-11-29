<template>
    <div class="flex flex-col justify-center items-center ">
        <div class="flex items-center justify-between w-[1000px]">
            <p class="text-grad font-[700] text-4xl text-white">RESUME</p>
            <a :href="pdfSrc" download="Pearl Resume.pdf" class="portt text-white p-3 text-center cursor-pointer w-[200px]">
                Download My Resume
            </a>
        </div>

        <div class="mt-4">
            <iframe src="pearl.pdf" width="1000px" height="600px" title=""></iframe>
        </div>



    </div>
</template>

<script>
export default {
    data() {
        return {
            pdfSrc: 'pearl.pdf',
        };
    },
};
</script>
<style scoped>
.stack {
    border-radius: 16px;

    backdrop-filter: blur(15px);
    border: 0.8px solid rgba(214, 251, 252, 0.06);
    padding: 4px;

    background: linear-gradient(65deg, #0F1215 4.18%, #181A1A 116.91%);
}

.portt {
    border-radius: 16px;
    background: linear-gradient(111deg, rgba(255, 255, 255, 0.14) 1.21%, rgba(196, 196, 196, 0.02) 100%);
    backdrop-filter: blur(15px);
    border: 0.8px solid rgba(214, 251, 252, 0.06);
}

.text-grad {
    background: linear-gradient(169deg, #505356 8.16%, #fff 150.61%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>