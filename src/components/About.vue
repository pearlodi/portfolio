
<template>
    <div class="mx-5 md:mx-20">

        <div class="text-[40px] text-white w-full max-w-full md:w-[1200px] mt-4 flex items-center pb-4">
            <!-- <div class="line h-32 w-1">

            </div> -->
            <div class=" mt-4">
                <p class="text-3xl text-white font-[800]">ABOUT ME</p>
                <div class="line h-1 w-full max-w-full md:w-[200px] mt-5">
                </div>

            </div>
        </div>

        <div class="md:w-[1000px] w-full max-w-full mt-4 stack">
            <Vue3Marquee :pause-on-hover="true">
                <div class="index-a-trusted-companies-img gap-10 py-4" v-for="avatar in cards" :key="avatar">
                    <div class="img-a flex items-center gap-4">
                        <img :src="avatar.url" alt="stack Image" class="comp-img w-8 h-8 gap-18" />
                        <p class="about-text">{{ avatar.stack }}</p>
                    </div>
                </div>
            </Vue3Marquee>
        </div>
        <div>
            <p class="about-text font-bold text-sm md:text-[18px] leading-8 mt-12 w-full max-w-full md:w-[1000px]">
                I am an enthusiastic, self-motivated, reliable, responsible and hardworking individual. With
                over 5 years in the technology industry and having mastered various skills ranging from
                Graphic design with applications like CorelDraw and PhotoShop to proficiency in Microsoft
                applications like Microsoft word, Microsoft Excel, Microsoft PowerPoint, microsoft publisher
                then to Backend and Front end Software Engineering using PHP, SQL and AJAX with a little
                knowledge on Laravel for backend functionalities and HTML, CSS, javaScript and VUE.js for
                frontend functionalities while using frameworks, API’s. I am a natural team worker and
                adaptable to all challenging situations.

            </p>
        </div>



        <div>
            <div class="line h-1 w-full max-w-full md:w-[1000px] mt-10">
            </div>

            <div class="md:flex">
                <div>
                    <div class="mt-4 flex">
                        <h1 class="text-white font-bold ">Birthday:</h1>
                        <p class="about-text ml-4"> May 25th</p>
                    </div>
                    <div class="mt-4 flex">
                        <h1 class="text-white font-bold ">Age:</h1>
                        <p class="about-text ml-4"> 24</p>
                    </div>

                </div>

                <div class="md:ml-16">
                    <div class="mt-4 flex">
                        <h1 class="text-white font-bold ">phone:</h1>
                        <p class="about-text ml-4"> +234 9037248116</p>
                    </div>
                    <div class="mt-4 flex">
                        <h1 class="text-white font-bold ">Email:</h1>
                        <p class="about-text ml-4"> pearlodi7@gmail.com</p>
                    </div>

                </div>

                <div class="md:ml-16">
                    <div class="mt-4 flex">
                        <h1 class="text-white font-bold ">Degree:</h1>
                        <p class="about-text ml-4"> B.Sc</p>
                    </div>
                    <div class="mt-4 flex">
                        <h1 class="text-white font-bold ">Address:</h1>
                        <p class="about-text ml-4"> Lagos, Nigeria</p>
                    </div>
                </div>
            </div>
        </div>

        <div class=" mt-4">


            <div class="md:flex w-full mx-w-full md:w-[700px] justify-between">
                <div class="">
                    <p class="text-xl text-white font-[800] mt-10">BASIC SKILLS</p>
                    <div class="line h-1 w-[200px] mt-5">
                    </div>
                    <div class="mt-4 flex items-center">
                        <img src="@/assets/img/black-circle.png" class="w-2 h-2" />
                        <p class="about-text  ml-4"> Microsoft Word</p>
                    </div>
                    <div class="mt-4 flex items-center">
                        <img src="@/assets/img/black-circle.png" class="w-2 h-2" />
                        <p class="about-text  ml-4"> Microsoft Excel</p>
                    </div>
                    <div class="mt-4 flex items-center">
                        <img src="@/assets/img/black-circle.png" class="w-2 h-2" />
                        <p class="about-text  ml-4"> Microsoft PowerPoint</p>
                    </div>
                    <div class="mt-4 flex items-center">
                        <img src="@/assets/img/black-circle.png" class="w-2 h-2" />
                        <p class="about-text  ml-4"> Corel Draw</p>
                    </div>
                    <div class="mt-4 flex items-center">
                        <img src="@/assets/img/black-circle.png" class="w-2 h-2" />
                        <p class="about-text  ml-4">Microsoft Publisher</p>
                    </div>


                </div>

                <div class="">
                    <p class="text-xl text-white font-[800] mt-10">CAREER PATHS</p>
                    <div class="line h-1 w-[200px] mt-5">
                    </div>
                    <div class="mt-4 flex items-center">
                        <img src="@/assets/img/black-circle.png" class="w-2 h-2" />
                        <p class="about-text  ml-4">Web Development</p>
                    </div>
                    <div class="mt-4 flex items-center">
                        <img src="@/assets/img/black-circle.png" class="w-2 h-2" />
                        <p class="about-text  ml-4">Graphic Design</p>
                    </div>
                    <div class="mt-4 flex items-center">
                        <img src="@/assets/img/black-circle.png" class="w-2 h-2" />
                        <p class="about-text  ml-4">Transcription</p>
                    </div>
                    <div class="mt-4 flex items-center">
                        <img src="@/assets/img/black-circle.png" class="w-2 h-2" />
                        <p class="about-text  ml-4"> Content Writing</p>
                    </div>
                    <div class="mt-4 flex items-center">
                        <img src="@/assets/img/black-circle.png" class="w-2 h-2" />
                        <p class="about-text  ml-4"> Wordpress Developer</p>
                    </div>

                </div>
            </div>

        </div>

    </div>
</template>
<style>
.about-text {
    background: linear-gradient(169deg, #505356 8.16%, #fff 150.61%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.index-a-trusted-companies-img img {
    margin-top: 2px;
    margin-left: 80px;
}

.stack {
    border-radius: 16px;
    background: linear-gradient(111deg, #ffffff00 1.21%, rgba(19, 0, 0, 0.02) 100%);
    backdrop-filter: blur(15px);
    border: 0.8px solid rgba(214, 251, 252, 0.06);
}
</style>


<script>
import { Vue3Marquee } from 'vue3-marquee'
import companies3 from "@/assets/img/react.svg"
import companies4 from "@/assets/img/figma.svg"
import companies5 from "@/assets/img/react.svg"
import companies1 from "@/assets/img/java.svg"
import companies2 from "@/assets/img/docker.svg"

export default {
    components: {
        Vue3Marquee,
    },
    data() {
        return {
            cards: [
                {
                    url: companies1,
                    stack: "react",
                },
                {
                    url: companies2,
                    stack: "figma",
                },
                {
                    url: companies3,
                    stack: "react",
                },
                {
                    url: companies4,
                    stack: "java",
                },
                {
                    url: companies5,
                    stack: "docker",
                },

            ],
        }
    },
}
</script>
  
<style scoped>
.vue3-marquee.horizontal {
    --duration: 14s !important;
}

.vue3-marquee.horizontal>.marquee {
    gap: 32px !important;
}

.img-a {
    margin-left: 20px;
}
</style>