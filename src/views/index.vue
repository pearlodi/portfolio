<template>
    <div class="project-background flex flex-col  md:h-full items-center">
        <div class="flex flex-col  md:h-[100%] items-center w-[90%]">
            <div class="text-[40px] text-white w-[100%] max-w-full mx-auto mt-12 flex items-center">
                <div class="line h-40 md:h-52 w-1">
                </div>
                <div class="ml-4 mt-4">
                    <p class="text-xl md:text-3xl text-white font-[800]">ODI PEARL
                    </p>
                    <div class="mt-4 md:mt-8 typewriter flex">
                        <Typewriter />
                    </div>
                </div>
            </div>


            <div class="card-details bg-opacity-90 max-w-full w-full pb-1 mt-12">
                <router-link to="/about">
                    <div
                        class="cards-background cursor-pointer flex h-[132px] md:h-44 card  items-center rounded-lg   text-[#FFF] p-12 text-xl md:text-2xl font-[700] gap-4"
                        data-aos="fade-down"
                        
                        data-aos-duration="2000"
                        >
                        <div class="w-10 md:w-14">
                            <img src="@/assets/img/about-img.png"
                            class="w-full h-full"
                            alt="" />
                        </div>
                       
                        <p>
                            ABOUT ME
                        </p>
                    </div>
                </router-link>
                <router-link to="/experience">
                    <div
                        class="cards-background cursor-pointer flex h-[132px] md:h-44 card items-center   rounded-lg   text-[#FFF] p-12 text-xl md:text-2xl font-[700] gap-4"
                        data-aos="fade-down"
                        data-aos-duration="2000"
                        >
                        <div class="w-10 md:w-14">
                            <img src="@/assets/img/experience-img.png"
                            class="w-full h-full"
                            alt="" />
                        </div>
                        <p>
                            EXPERIENCE
                        </p>
                    </div>
                </router-link>
                <router-link to="/projects">
                    <div
                        class="cards-background cursor-pointer flex h-[132px] md:h-44 card items-center  rounded-lg   text-[#FFF] p-12 text-xl md:text-2xl font-[700] gap-4"
                        data-aos="fade-down"
                        data-aos-duration="2000"
                        >
                       <div class="w-10 md:w-14">
                        <img src="@/assets/img/idea.png"
                            class="w-full h-full"
                            alt="" />
                       </div>
                        <p>
                            PROJECTS
                        </p>
                    </div>
                </router-link>

                <router-link to="/articles">
                    <div
                        class="cards-background cursor-pointer flex h-[132px] md:h-44 card items-center  rounded-lg   text-[#FFF] p-12 text-xl md:text-2xl font-[700] gap-4"
                        data-aos="fade-down"
                        data-aos-duration="2500"
                        >
                       <div  class="w-10 md:w-14 ">
                        <img src="@/assets/img/articles-img.png"
                            class="w-full h-full"
                            alt="" />
                       </div>
                        <p>
                            ARTICLES
                        </p>
                    </div>
                </router-link>
                <router-link to="/contact">
                    <div
                        class="cards-background cursor-pointer flex h-[132px] md:h-44 card items-center  rounded-lg   text-[#FFF] p-12 text-xl md:text-2xl font-[700] gap-4"
                        data-aos="fade-down"
                        data-aos-duration="2500"
                        >
                        <div  class="w-10 md:w-14 " >
                            <img src="@/assets/img/contacts-img.png"
                            class="w-full h-full"
                            alt="" />
                        </div>
                        <p>
                            CONTACT ME
                        </p>
                    </div>
                </router-link>
                <router-link to="/resume">
                    <div
                        class="flex cursor-pointer h-[132px] md:h-44 card items-center   rounded-lg bg-opacity-30 bg-[#00000013] backdrop-blur-lg shadow-xl  text-[#FFF] p-12 text-xl md:text-2xl font-[700] gap-4"
                        data-aos="fade-down"
                        data-aos-duration="2500"
                        
                        >
                       <div  class="w-10 md:w-14 ">
                        <img src="@/assets/img/resume-img.png"
                            class="w-full h-full"
                            alt="" />
                       </div>
                        <p>
                            MY RESUME
                        </p>
                    </div>
                </router-link>
            </div>

        </div>
    </div>
</template>


<script>
import Typewriter from "@/components/Typewriter.vue";
import ProjectModal from "@/components/Modal/ProjectModal.vue";

export default {
    components: {
        Typewriter,
        ProjectModal
    },
};
</script>

<style>
.card-details {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.cards-background {
    border-radius: 16px;
    background: linear-gradient(111deg, rgba(255, 255, 255, 0.14) 1.21%, rgba(196, 196, 196, 0.02) 100%);
    backdrop-filter: blur(15px);
    border: 0.8px solid rgba(255, 255, 255, 0.167);
}

.typewriter,
.category {
    background: linear-gradient(169deg, #505356 8.16%, #fff 150.61%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.line {
    border-radius: 16px;
    background: linear-gradient(111deg, rgba(255, 255, 255, 0.14) 1.21%, rgba(196, 196, 196, 0.02) 100%);
    backdrop-filter: blur(15px);
    border: 0.8px solid rgba(214, 251, 252, 0.06);
}

.card {
    background: url('');
    background-size: cover;
    box-shadow: 0 2px 2px 0px black;
}

@media (max-width: 950px) {
    .card-details {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }
}

@media (max-width: 600px) {
    .card-details {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 20px;

    }

    .card {
        box-shadow: 0 1px 1px 0px rgba(0, 0, 0, 0.449);
    }

}</style>
