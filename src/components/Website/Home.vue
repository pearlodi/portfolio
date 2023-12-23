<template>
    <div class="project-background md:py-10 pb-10">
        <Navbar />
        <div class="flex flex-col justify-center items-center mt-20 px-4">
            <div class="md:flex items-center justify-center md:justify-between w-full max-w-full md:w-[800px]">
                <p class="text-gradient font-[700] text-xl md:text-4xl text-white pb-4">RESUME</p>
                <a href="/pearl.pdf" download="Pearl Resume.pdf"
                    class="portt mt-8 md:mt-0 text-white p-3 text-center cursor-pointer w-[200px]">
                    Download My Resume
                </a>
            </div>

            <div class="mt-4 md:w-[800px] w-full max-w-full">
                <iframe src="/pearl.pdf" class="max-w-full w-full h-full iframe-container" title=""></iframe>
            </div>
        </div>
    </div>
</template>
  
<script>
import Navbar from '../Navbar.vue';

export default {
    components: {
        Navbar
    }
};
</script>
<style scoped>
.portt {
    border-radius: 16px;
    background: linear-gradient(111deg, rgba(255, 255, 255, 0.14) 1.21%, rgba(196, 196, 196, 0.02) 100%);
    backdrop-filter: blur(15px);
    border: 0.8px solid rgba(214, 251, 252, 0.06);
}

.iframe-container {
    /* Adjust styles for iframe container on smaller screens */
    width: 100%;
    height: 500px;
    /* Adjust as needed */
}
</style>