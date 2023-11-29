<template>
    <div class="port h-screen ">
        <div class="flex flex-col justify-between h-screen ">
            <div class="text-[40px] text-white w-[1200px] mx-auto mt-12 flex pb-4">
                <div class="bg-[#FFF] h-52 w-1">

                </div>
                <div class="ml-4 mt-4">
                    <p class="text-xl text-[purple] font-[800]">ODI PEARL</p>


                    <div class="mt-8">
                        <Typewriter />
                    </div>
                </div>
            </div>
            <!-- <div class="flex justify-end w-full px-0 pr-8" @click="toggle">
        <div v-if="isToggled" class="text-white"> hi</div>
          <div v-else  class="text-white"> ho</div>
      </div> -->
            <div>
                <div class="bg-opacity-90  flex  w-[1200px] mx-auto gap-2 pb-1">
                    <!-- Glass-like Content -->

                    <div @click="setContent('About')"
                        class="portt flex h-48 card   rounded-lg  w-1/3 text-[#FFF] p-12 text-2xl font-[700] gap-4">
                        <img src="@/assets/img/about.png" class="w-10 h-10" />
                        <p class=" " style="">
                            ABOUT ME
                        </p>
                    </div>
                    <div @click="setContent('experience')"
                        class="portt flex h-48 card   rounded-lg  w-1/3 text-[#FFF] p-12 text-2xl font-[700] gap-4">
                        <img src="@/assets/img/quality.png" class="w-10 h-10" />
                        <p class=" " style="">
                            EXPERIENCE
                        </p>
                    </div>
                    <div @click="setContent('projects')"
                        class="portt flex h-48 card   rounded-lg  w-1/3 text-[#FFF] p-12 text-2xl font-[700] gap-4">
                        <img src="@/assets/img/project-management.png" class="w-10 h-10" />
                        <p class=" " style="">
                            PROJECTS
                        </p>
                    </div>
                </div>
                <div class="bg-opacity-80  flex  w-[1200px] mx-auto gap-2 mt-2">
                    <!-- Glass-like Content -->

                    <div @click="setContent('services')"
                        class="portt flex h-48 card   rounded-lg  w-1/3 text-[#FFF] p-12 text-2xl font-[700] gap-4">
                        <img src="@/assets/img/technical-support.png" class="w-10 h-10" />
                        <p class=" " style="">
                            SERVICES
                        </p>
                    </div>
                    <div @click="setContent('contact')"
                        class="portt flex h-48 card   rounded-lg  w-1/3 text-[#FFF] p-12 text-2xl font-[700] gap-4">
                        <img src="@/assets/img/customer-service.png" class="w-10 h-10" />
                        <p class=" " style="">
                            CONTACT ME
                        </p>
                    </div>
                    <div @click="setContent('Home')"
                        class="flex h-48 card   rounded-lg bg-opacity-30 bg-[#00000013] backdrop-blur-lg shadow-xl w-1/3 text-[#FFF] p-12 text-2xl font-[700] gap-4">
                        <img src="@/assets/img/homes.png" class="w-10 h-10" />
                        <p class=" " style="">
                            MY RESUME
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div class="port fixed top-0 left-0 h-screen w-screen  transform transition-transform ease-in-out duration-300 z-50"
        :class="{ 'translate-y-full': !isToggled, 'translate-y-0': isToggled }">
        <div :class="{ '-translate-x-full': !isToggled, 'translate-x-0': isToggled }">
            <div class="flex justify-end w-full px-0 pr-8" @click="toggleOverlay">
                <div v-if="isToggled" class="text-white flex gap-2 p-4"><img src="@/assets/img/back.png" />
                    <p>Go Back</p>
                </div>
                <div v-else class="text-white"></div>
            </div>

            <div class=" flex w-[1200px]  mx-auto ">
                <div class="text-[purple] ">
                    <div
                        class="portt flex h-12 card w-60 rounded-lg bg-opacity-20 bg-[#00000005] backdrop-blur-lg shadow-sm  text-[#FFF] p-2 text-[14px] font-[700] gap-4 mt-8">
                        <img src="@/assets/img/homes.png" class="w-6 h-6" />
                        <p class=" " style="">
                            HOME
                        </p>
                    </div>
                    <div
                        class="portt flex h-12 card w-60 rounded-lg bg-opacity-40  backdrop-blur-lg shadow-sm  text-[#FFF] p-2 text-[14px] font-[700] gap-4 mt-8">
                        <img src="@/assets/img/about.png" class="w-6 h-6" />
                        <p class=" " style="">
                            ABOUT ME
                        </p>
                    </div>
                    <div
                        class="portt flex h-12 card w-60 rounded-lg bg-opacity-40  backdrop-blur-lg shadow-sm  text-[#FFF] p-2 text-[14px] font-[700] gap-4 mt-8">
                        <img src="@/assets/img/quality.png" class="w-6 h-6" />
                        <p class=" " style="">
                            EXPERIENCE
                        </p>
                    </div>
                    <div
                        class="portt flex h-12 card w-60 rounded-lg bg-opacity-40  backdrop-blur-lg shadow-sm  text-[#FFF] p-2 text-[14px] font-[700] gap-4 mt-8">
                        <img src="@/assets/img/project-management.png" class="w-6 h-6" />
                        <p class=" " style="">
                            PROJECTS
                        </p>
                    </div>
                    <div
                        class="portt flex h-12 card w-60 rounded-lg bg-opacity-40  backdrop-blur-lg shadow-sm  text-[#FFF] p-2 text-[14px] font-[700] gap-4 mt-8">
                        <img src="@/assets/img/technical-support.png" class="w-6 h-6" />
                        <p class=" " style="">
                            SERVICES
                        </p>
                    </div>
                    <div
                        class="portt flex h-12 card w-60 rounded-lg bg-opacity-40  backdrop-blur-lg shadow-sm  text-[#FFF] p-2 text-[14px] font-[700] gap-4 mt-8">
                        <img src="@/assets/img/customer-service.png" class="w-6 h-6" />
                        <p class=" " style="">
                            CONTACT M
                        </p>
                    </div>
                </div>

                <div class="h-[500px] w-1 bg-[#fff] ml-8"></div>

                <div class="ml-[18px]">
                    <component :is="overlayContent" />
                </div>

            </div>
        </div>
    </div>
</template>

<style>
.portt {
    border-radius: 16px;
    background: linear-gradient(111deg, rgba(255, 255, 255, 0.14) 1.21%, rgba(196, 196, 196, 0.02) 100%);
    backdrop-filter: blur(15px);
    border: 0.8px solid rgba(214, 251, 252, 0.06);
}

.port {
    background: url('@/assets/img/background.png');
    background-size: cover;
}

.card {
    background: url('');
    background-size: cover;
}


.card {
    box-shadow: 0 2px 2px 0px black;
}
</style>

<script>
import Typewriter from "@/components/Typewriter.vue"; // Adjust the path as needed
import About from "@/components/About.vue"; // Adjust the path as needed
import Experience from "@/components/Experience.vue"; // Adjust the path as needed
import Projects from "@/components/Projects.vue"; // Adjust the path as needed
import Services from "@/components/Services.vue"; // Adjust the path as needed
import Contact from "@/components/Contact.vue"; // Adjust the path as needed
import Home from "@/components/Home.vue"; // Adjust the path as needed

export default {
    components: {
        About,
        Typewriter,
        Experience,
        Projects,
        Services,
        Contact,
        Home,
    },

    data() {
        return {
            isToggled: false,
            overlayContent: null, // Initialize to null
        };
    },
    methods: {
        toggleOverlay() {
            this.isToggled = !this.isToggled;
        },
        setContent(component) {
            this.overlayContent = component;
            this.toggleOverlay();
        },
    },
};
</script>