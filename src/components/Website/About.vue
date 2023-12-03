
<template>
    <div class="py-10" :class="{ 'project-background': !isDarkMode ? 'light-project-background' : isDarkMode }">
        <div>
            <div>
                <Navbar />
            </div>

            <div class="mx-5 md:mx-20 mt-16">

                <div class="text-[40px] text-white w-full max-w-full md:w-[1200px] flex items-center pb-4">

                    <div>
                        <p class="text-3xl text-white font-[800]">ABOUT ME</p>
                        <div>
                            <div>
                                <div v-if="!isDarkMode" class="line h-1 w-full max-w-full md:w-[200px] mt-5">
                                </div>
                                <div v-else class="bg-[black] h-1 w-full max-w-full md:w-[200px] mt-5">

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="md:w-[1000px] w-full max-w-full mt-4 stack rounded-xl" :class="{ 'stack-dark': isDarkMode }">
                    <Vue3Marquee :pause-on-hover="true">
                        <div class="index-a-trusted-companies-img gap-10 py-4 " v-for="avatar in cards" :key="avatar">
                            <div class="img-a flex items-center gap-4">
                                <img :src="avatar.url" alt="stack Image" class="comp-img w-8 h-8 gap-18" />
                                <h4 class="text-gradient">{{ avatar.stack }}</h4>
                            </div>
                        </div>
                    </Vue3Marquee>
                </div>
                <div>
                    <p class="text-gradient font-bold text-sm md:text-[18px] leading-8 mt-12 w-full max-w-full md:w-[1000px]"
                        :class="{ '': !isDarkMode, 'dark-mode': isDarkMode }">
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
                                <p class=" font-bold" :class="{
                                    'about-dark-mode': !isDarkMode ? 'about-light-mode' :
                                        isDarkMode
                                }"> Birthday:</p>
                                <p class="text-gradient ml-4"> May 25th</p>
                            </div>
                            <div class="mt-4 flex">
                                <p class=" font-bold " :class="{
                                    'lights-mode': !isDarkMode ? 'darks-mode' :
                                        isDarkMode
                                }">
                                    Age:
                                </p>
                                <p class="text-gradient ml-4"> 24</p>
                            </div>

                        </div>

                        <div class="md:ml-16">
                            <div class="mt-4 flex">
                                <p class=" font-bold " :class="{
                                    'lights-mode': !isDarkMode ? 'darks-mode' :
                                        isDarkMode
                                }">
                                    Phone:
                                </p>
                                <p class="text-gradient ml-4"> +234 9037248116</p>
                            </div>
                            <div class="mt-4 flex">
                                <p class=" font-bold " :class="{
                                    'lights-mode': !isDarkMode ? 'darks-mode' :
                                        isDarkMode
                                }">
                                    Email:
                                </p>
                                <p class="text-gradient ml-4"> pearlodi7@gmail.com</p>
                            </div>

                        </div>

                        <div class="md:ml-16">
                            <div class="mt-4 flex">
                                <p class=" font-bold " :class="{
                                    'lights-mode': !isDarkMode ? 'darks-mode' :
                                        isDarkMode
                                }">
                                    Degree:
                                </p>
                                <p class="text-gradient ml-4"> B.Sc</p>
                            </div>
                            <div class="mt-4 flex">
                                <p class=" font-bold " :class="{
                                    'lights-mode': !isDarkMode ? 'darks-mode' :
                                        isDarkMode
                                }">
                                    Address:
                                </p>
                                <p class="text-gradient ml-4"> Lagos, Nigeria</p>
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
                                <div>
                                    <div v-if="isDarkMode" class="w-2 h-2 rounded-full bg-[black]"></div>
                                    <div v-else><img src="@/assets/img/black-circle.png" class="w-2 h-2" alt="icons" />
                                    </div>
                                </div>
                                <p class="text-gradient  ml-4"> Microsoft Word</p>
                            </div>
                            <div class="mt-4 flex items-center">
                                <div>
                                    <div v-if="isDarkMode" class="w-2 h-2 rounded-full bg-[black]"></div>
                                    <div v-else><img src="@/assets/img/black-circle.png" class="w-2 h-2" alt="icons" />
                                    </div>
                                </div>
                                <p class="text-gradient  ml-4"> Microsoft Excel</p>
                            </div>
                            <div class="mt-4 flex items-center">
                                <div>
                                    <div v-if="isDarkMode" class="w-2 h-2 rounded-full bg-[black]"></div>
                                    <div v-else><img src="@/assets/img/black-circle.png" class="w-2 h-2" alt="icons" />
                                    </div>
                                </div>
                                <p class="text-gradient  ml-4"> Microsoft PowerPoint</p>
                            </div>
                            <div class="mt-4 flex items-center">
                                <div>
                                    <div v-if="isDarkMode" class="w-2 h-2 rounded-full bg-[black]"></div>
                                    <div v-else><img src="@/assets/img/black-circle.png" class="w-2 h-2" alt="icons" />
                                    </div>
                                </div>
                                <p class="text-gradient  ml-4"> Corel Draw</p>
                            </div>
                            <div class="mt-4 flex items-center">
                                <div>
                                    <div v-if="isDarkMode" class="w-2 h-2 rounded-full bg-[black]"></div>
                                    <div v-else><img src="@/assets/img/black-circle.png" class="w-2 h-2" alt="icons" />
                                    </div>
                                </div>
                                <p class="text-gradient  ml-4">Microsoft Publisher</p>
                            </div>


                        </div>

                        <div class="">
                            <p class="text-xl text-white font-[800] mt-10">CAREER PATHS</p>
                            <div class="line h-1 w-[200px] mt-5">
                            </div>
                            <div class="mt-4 flex items-center">
                                <div>
                                    <div v-if="isDarkMode" class="w-2 h-2 rounded-full bg-[black]"></div>
                                    <div v-else><img src="@/assets/img/black-circle.png" class="w-2 h-2" alt="icons" />
                                    </div>
                                </div>
                                <p class="text-gradient  ml-4">Web Development</p>
                            </div>
                            <div class="mt-4 flex items-center">
                                <div>
                                    <div v-if="isDarkMode" class="w-2 h-2 rounded-full bg-[black]"></div>
                                    <div v-else><img src="@/assets/img/black-circle.png" class="w-2 h-2" alt="icons" />
                                    </div>
                                </div>
                                <p class="text-gradient  ml-4">Graphic Design</p>
                            </div>
                            <div class="mt-4 flex items-center">
                                <div>
                                    <div v-if="isDarkMode" class="w-2 h-2 rounded-full bg-[black]"></div>
                                    <div v-else><img src="@/assets/img/black-circle.png" class="w-2 h-2" alt="icons" />
                                    </div>
                                </div>
                                <p class="text-gradient  ml-4">Transcription</p>
                            </div>
                            <div class="mt-4 flex items-center">
                                <div>
                                    <div v-if="isDarkMode" class="w-2 h-2 rounded-full bg-[black]"></div>
                                    <div v-else><img src="@/assets/img/black-circle.png" class="w-2 h-2" alt="icons" />
                                    </div>
                                </div>
                                <p class="text-gradient  ml-4"> Content Writing</p>
                            </div>
                            <div class="mt-4 flex items-center">
                                <div>
                                    <div v-if="isDarkMode" class="w-2 h-2 rounded-full bg-[black]"></div>
                                    <div v-else><img src="@/assets/img/black-circle.png" class="w-2 h-2" alt="icons" />
                                    </div>
                                </div>
                                <p class="text-gradient  ml-4"> Wordpress Developer</p>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>
<style>
.lights-mode {
    color: white;
}

.darks-mode {
    background: linear-gradient(169deg, black 8.16%, red 150.61%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.index-a-trusted-companies-img img {
    margin-top: 2px;
    margin-left: 80px;
}


.stack {
    background: linear-gradient(111deg, #ffffff1a 1.21%, white 100%);

}

.stack-dark {
    background: linear-gradient(111deg, green 1.21%, black 100%);

}
</style>


<script>
import { Vue3Marquee } from 'vue3-marquee'
import companies3 from "@/assets/img/react.svg"
import companies4 from "@/assets/img/figma.svg"
import companies5 from "@/assets/img/react.svg"
import companies1 from "@/assets/img/java.svg"
import companies2 from "@/assets/img/docker.svg"
import Navbar from '../Navbar.vue'

export default {
    components: {
        Vue3Marquee,
        Navbar,
    }, props: {
        isDarkMode: Boolean,
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