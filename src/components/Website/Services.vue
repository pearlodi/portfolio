<template>
    <div class="project-background py-10">
        <Navbar />
        <div class="mx-5 lg:mx-20">
            <div class="text-[40px] text-white w-full max-w-full md:w-[1200px] mt-4 flex items-center pb-4">
                <div class=" mt-16">
                    <p class="text-3xl text-white font-[800]">SERVICES</p>
                    <div class="line h-1 w-[200px] mt-5">
                    </div>
                </div>
            </div>
            <div class="md:flex  justify-center mt-8">
                <div
                    class="project-card hidden md:flex flex-col justify-around  w-full max-w-full md:w-[1200px] cursor-pointer ">
                    <div v-for="stack in   stacks  " :key="stack.id" class="">
                        <h1 class="text-grad text-white text-3xl text-center font-extrabold ">{{ stack.year }}</h1>
                    </div>
                </div>
                <div class="tech-list stack-tech-li md:ml-8 mt-5">
                    <ul class="stack-tech-ul stack-tech-li">
                        <li v-for="stack in   stacks  " :key="stack.id" class="stack-tech-li  project-card">
                            <p class="text-grad text-white text-[40px] font-extrabold">{{ stack.year }}</p>
                            <p class="text-[#cfcfcf]">{{ stack.serve }}</p>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
</template>
  
<script>
import Navbar from '../Navbar.vue'


export default {
    components: {
        Navbar
    },
    data() {
        return {
            stacks: [
                { id: 1, year: 'Web Design', serve: 'As an aspiring front-end web developer, I bring a strong foundation in React, Vue, and JavaScript, HTML and CSS to create engaging user interfaces. With a focus on responsive design principles, I craft intuitive and visually appealing websites that prioritize user experience. Proficient in front-end development, I am dedicated to honing my skills and contributing fresh perspectives to deliver dynamic and accessible web applications.' },
                { id: 1, year: 'Transcription', serve: 'Offering precise transcription services, I transform audio and video content into accurate, readable text. With a keen ear for detail and advanced transcription tools, I ensure high-quality transcripts for interviews, meetings, podcasts, and various media formats. My commitment to confidentiality and quick turnaround times guarantees efficient delivery, tailored to meet your specific transcription needs.' },
                { id: 1, year: 'Editing', serve: 'Proficient in editing and optimizing documents and spreadsheets using tools like Microsoft Word and Excel, I offer meticulous attention to detail to elevate the quality of your content. From formatting and proofreading to data organization and presentation design, I ensure documents and spreadsheets are polished, error-free, and structured for clarity and effectiveness. Let me enhance your materials to achieve professional and impactful results.' },
                { id: 1, year: 'Design', serve: 'Specializing in graphic design with expertise in CorelDRAW, Photoshop, and other design tools, I bring creativity and precision to visual storytelling. From logo creation to marketing materials, I craft captivating designs tailored to your brands identity and vision. Whether it is digital illustrations, photo editing, or print design, I ensure each element is thoughtfully curated to leave a lasting impression and resonate with your audience.' },
            ],
            selectedCategories: 'Personl projects',
            categories: ['Colab', 'Personl projects'],
        };
    },
};
</script>
  
<style scoped>
.serve-text {
    background: linear-gradient(180deg, #FFF 0%, #505356 298.75%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.stack-tech-ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
}

.project-card {
    padding: 40px;
}


@media (max-width: 700px) {
    .stack-tech-ul {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 30px;
    }

    .stackssa {
        padding: 12px;
    }

}
</style>