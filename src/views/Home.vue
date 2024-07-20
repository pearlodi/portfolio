<template>
    <div class="project-background md:pt-4 md:pb-20 pb-10">
        <Navbar />
        <div class="flex flex-col justify-center items-center mt-10 px-4">
             <div class="md:flex items-center justify-center md:justify-end w-full max-w-full w-full  md:w-[60%]">
                <a href="/resum.pdf" download="Pearl Resume.pdf"
                    class="portt mt-8 md:mt-0 text-white p-3 text-center cursor-pointer w-[200px]">
                    Download My Resume
                </a>
            </div>         
            <div class="flex items-start h-screen w-full md:w-[60%] mt-4">
    <embed src="/resum.pdf" type="application/pdf" class="w-full h-[70vh]" controls="false" />
    
  </div>
        </div>
    </div>
</template>
  
<script>
import Navbar from '@/components/Navbar.vue';

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
    width: 100%;
    height: 500px;
}
</style>
