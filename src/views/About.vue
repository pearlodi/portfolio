<template>
    <div class="md:py-10 pb-10 project-background">
        <div>
            <div>
                <Navbar />
            </div>
            <div class="mx-5 md:mx-20 mt-4 md:mt-16">
                <div class="text-[40px] text-white w-full max-w-full md:w-[1200px] flex items-center pb-4">
                    <div>
                        <p class="text-3xl text-white font-[800]">ABOUT ME</p>
                        <div>
                            <div>
                                <div v-if="!isDarkMode"
                                    class="line h-1 w-full max-w-full md:w-[200px] mt-5">
                                </div>
                                <div v-else
                                    class="bg-[black] h-1 w-full max-w-full md:w-[200px] mt-5">

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="md:w-[1000px] w-full max-w-full mt-4 stack rounded-xl"
                    :class="{ 'stack-dark': isDarkMode }">
                    <Vue3Marquee :pause-on-hover="true">
                        <div class="index-a-trusted-companies-img gap-10 py-4 "
                            v-for="avatar in cards"
                            :key="avatar">
                            <div class="img-a flex items-center gap-4">
                                <img :src="avatar.url"
                                    alt="stack Image"
                                    class="comp-img w-8 h-8 gap-18" />
                                <h4 class="text-gradient">{{ avatar.stack }}</h4>
                            </div>
                        </div>
                    </Vue3Marquee>
                </div>
                <div>
                    <p class="text-gradient font-bold text-sm md:text-[16px] leading-8 mt-12 w-full max-w-full md:w-[1000px]"
                        :class="{ '': !isDarkMode, 'dark-mode': isDarkMode }">
                        <strong>HEY THERE  🌟</strong> 
                        <br>
                        Welcome to my space.
                        I'm a software enthusiast with a passion for coding and creating. Over the
                        past two years, I've been getting hands-on with HTML, CSS, JavaScript, and having a blast
                        with React.js and Vue.js.
                        <br>
                        I love turning ideas into real, functional projects. I'm a team player through and through,
                        always ready to pitch in and help out. I pride myself on being reliable and committed,
                        especially when things get busy.
                        <br>
                        I'm eager to keep learning and growing in the software engineering world. So, if you've got a
                        cool project or just want to connect, I'm all ears! Let's chat and see how we can make something
                        awesome together!

                    </p>
                </div>
                <div>
                    <div class="line h-1 w-full max-w-full md:w-[1000px] mt-10">
                    </div>

                    <div class="md:flex">
                        <div>
                            <div class="mt-4 flex">
                                <p class=" font-bold text-white"> Birthday:</p>
                                <p class="text-gradient ml-4"> May 25th</p>
                            </div>
                            <div class="mt-4 flex">
                                <p class=" font-bold text-white">
                                    Age:
                                </p>
                                <p class="text-gradient ml-4"> 24</p>
                            </div>

                        </div>

                        <div class="md:ml-16">
                            <div class="mt-4 flex">
                                <p class=" font-bold text-white">
                                    Phone:
                                </p>
                                <p class="text-gradient ml-4"> +234 9037248116</p>
                            </div>
                            <div class="mt-4 flex">
                                <p class=" font-bold text-white">
                                    Email:
                                </p>
                                <p class="text-gradient ml-4"> pearlodi7@gmail.com</p>
                            </div>

                        </div>

                        <div class="md:ml-16">
                            <div class="mt-4 flex">
                                <p class=" font-bold text-white">
                                    Degree:
                                </p>
                                <p class="text-gradient ml-4"> B.Sc</p>
                            </div>
                            <div class="mt-4 flex">
                                <p class=" font-bold text-white">
                                    Address:
                                </p>
                                <p class=" text-gradient ml-4"> Lagos, Nigeria</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" mt-4">
                    <div class="md:flex w-full max-w-full md:w-[700px] justify-between">
                        <div class="">
                            <p class="text-xl text-white font-[800] mt-10">BASIC SKILLS</p>
                            <div class="line h-1 w-[200px] mt-5">
                            </div>
                            <div class="mt-4 flex items-center">
                                <div>
                                    <div><img src="@/assets/img/black-circle.png"
                                            class="w-2 h-2"
                                            alt="icons" />
                                    </div>
                                </div>
                                <p class="text-gradient  ml-4"> Microsoft Word</p>
                            </div>
                            <div class="mt-4 flex items-center">
                                <div>
                                    <div><img src="@/assets/img/black-circle.png"
                                            class="w-2 h-2"
                                            alt="icons" />
                                    </div>
                                </div>
                                <p class="text-gradient  ml-4"> Microsoft Excel</p>
                            </div>
                            <div class="mt-4 flex items-center">
                                <div>
                                    <div><img src="@/assets/img/black-circle.png"
                                            class="w-2 h-2"
                                            alt="icons" />
                                    </div>
                                </div>
                                <p class="text-gradient  ml-4"> Microsoft PowerPoint</p>
                            </div>
                            <div class="mt-4 flex items-center">
                                <div>
                                    <div><img src="@/assets/img/black-circle.png"
                                            class="w-2 h-2"
                                            alt="icons" />
                                    </div>
                                </div>
                                <p class="text-gradient  ml-4"> Corel Draw</p>
                            </div>
                            <div class="mt-4 flex items-center">
                                <div>
                                    <div><img src="@/assets/img/black-circle.png"
                                            class="w-2 h-2"
                                            alt="icons" />
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
                                    <div><img src="@/assets/img/black-circle.png"
                                            class="w-2 h-2"
                                            alt="icons" />
                                    </div>
                                </div>
                                <p class="text-gradient  ml-4">Front-end Web Development</p>
                            </div>
                            <div class="mt-4 flex items-center">
                                <div>
                                    <div><img src="@/assets/img/black-circle.png"
                                            class="w-2 h-2"
                                            alt="icons" />
                                    </div>
                                </div>
                                <p class="text-gradient  ml-4">Graphic Design</p>
                            </div>
                            <div class="mt-4 flex items-center">
                                <div>
                                    <div><img src="@/assets/img/black-circle.png"
                                            class="w-2 h-2"
                                            alt="icons" />
                                    </div>
                                </div>
                                <p class="text-gradient  ml-4">Transcription</p>
                            </div>
                            <div class="mt-4 flex items-center">
                                <div>
                                    <div><img src="@/assets/img/black-circle.png"
                                            class="w-2 h-2"
                                            alt="icons" />
                                    </div>
                                </div>
                                <p class="text-gradient  ml-4"> Technical Writing</p>
                            </div>


                        </div>

                        <div class="">
                            <p class="text-xl text-white font-[800] mt-10">Hobbies</p>
                            <div class="line h-1 w-[200px] mt-5">
                            </div>
                            <div class="mt-4 flex items-center">
                                <div>
                                    <div><img src="@/assets/img/black-circle.png"
                                            class="w-2 h-2"
                                            alt="icons" />
                                    </div>
                                </div>
                                <p class="text-gradient  ml-4">Reading (Fantansy Novels 100%)</p>
                            </div>
                            <div class="mt-4 flex items-center">
                                <div>
                                    <div><img src="@/assets/img/black-circle.png"
                                            class="w-2 h-2"
                                            alt="icons" />
                                    </div>
                                </div>
                                <p class="text-gradient  ml-4">Drawing</p>
                            </div>
                            <div class="mt-4 flex items-center">
                                <div>
                                    <div><img src="@/assets/img/black-circle.png"
                                            class="w-2 h-2"
                                            alt="icons" />
                                    </div>
                                </div>
                                <p class="text-gradient  ml-4">Watching movies</p>
                            </div>
                            <div class="mt-4 flex items-center">
                                <div>
                                    <div><img src="@/assets/img/black-circle.png"
                                            class="w-2 h-2"
                                            alt="icons" />
                                    </div>
                                </div>
                                <p class="text-gradient  ml-4"> Travel</p>
                            </div>


                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>
<style>
.index-a-trusted-companies-img img {
    margin-top: 2px;
    margin-left: 80px;
}

.stack {
    background: linear-gradient(111deg, #ffffff1a 1.21%, transparent 100%);
}
</style>


<script>
import { Vue3Marquee } from 'vue3-marquee'
import companies4 from "@/assets/img/figma.svg"
import companies1 from "@/assets/img/react.svg"
import companies2 from "@/assets/img/vue.svg"
import companies6 from "@/assets/img/java.svg"
import companies3 from "@/assets/img/git.svg"
import companies7 from "@/assets/img/docker.svg"
import Navbar from '@/components/Navbar.vue'

export default {
    components: {
        Vue3Marquee,
        Navbar,
    },

    data() {
        return {
            cards: [
                {
                    url: companies1,
                    stack: "React",
                },
                {
                    url: companies2,
                    stack: "Vue",
                },
                {
                    url: companies4,
                    stack: "Figma",
                },

                {
                    url: companies7,
                    stack: "Docker",
                }, {
                    url: companies6,
                    stack: "JavaScript",
                }, {
                    url: companies3,
                    stack: "Github",
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