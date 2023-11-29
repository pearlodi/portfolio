<template>
    <div class="port flex flex-col  md:h-[100%] items-center p-8 ">
        <div class="flex flex-col  md:h-[100%] items-center w-[90%]">
            <div class="text-[40px] text-white w-[100%] max-w-full mx-auto mt-12 flex items-center pb-4">
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
            <!-- <div class="flex justify-end w-full px-0 pr-8" @click="toggle">
            <div v-if="isToggled" class="text-white"> hi</div>
            <div v-else  class="text-white"> ho</div>
             </div> -->
            <div class="card-details bg-opacity-90 max-w-full w-full pb-1 mt-12">
                <!-- Glass-like Content -->

                <div @click="setContent('About')"
                    class="portt flex h-[132px] md:h-48 card   rounded-lg   text-[#FFF] p-12 text-xl md:text-2xl font-[700] gap-4">
                    <img src="@/assets/img/about.png" class="w-10 h-10" alt="" />
                    <p>
                        ABOUT ME
                    </p>
                </div>
                <div @click="setContent('experience')"
                    class="portt flex h-[132px] md:h-48 card   rounded-lg   text-[#FFF] p-12 text-xl md:text-2xl font-[700] gap-4">
                    <img src="@/assets/img/quality.png" class="w-10 h-10" alt="" />
                    <p>
                        EXPERIENCE
                    </p>
                </div>
                <div @click="setContent('projects')"
                    class="portt flex h-[132px] md:h-48 card   rounded-lg   text-[#FFF] p-12 text-xl md:text-2xl font-[700] gap-4">
                    <img src="@/assets/img/project-management.png" class="w-10 h-10" alt="" />
                    <p>
                        PROJECTS
                    </p>
                </div>
                <!-- Glass-like Content -->

                <div @click="setContent('services')"
                    class="portt flex h-[132px] md:h-48 card   rounded-lg  text-[#FFF] p-12 text-xl md:text-2xl font-[700] gap-4">
                    <img src="@/assets/img/technical-support.png" class="w-10 h-10" alt="" />
                    <p>
                        SERVICES
                    </p>
                </div>
                <div @click="setContent('contact')"
                    class="portt flex h-[132px] md:h-48 card   rounded-lg   text-[#FFF] p-12 text-xl md:text-2xl font-[700] gap-4">
                    <img src="@/assets/img/customer-service.png" class="w-10 h-10" alt="" />
                    <p>
                        CONTACT ME
                    </p>
                </div>
                <div @click="setContent('Home')"
                    class="flex h-[132px] md:h-48 card   rounded-lg bg-opacity-30 bg-[#00000013] backdrop-blur-lg shadow-xl  text-[#FFF] p-12 text-xl md:text-2xl font-[700] gap-4">
                    <img src="@/assets/img/homes.png" class="w-10 h-10" alt="" />
                    <p>
                        MY RESUME
                    </p>
                </div>
            </div>

        </div>
    </div>

    <div class="port fixed top-0 left-0 h-screen w-screen  z-50 overflow-y-scroll pb-20  transform transition-transform ease-in-out duration-300"
        :class="{ 'translate-y-full': !isToggled, 'translate-y-0': isToggled }">
        <div :class="{ '-translate-x-full': !isToggled, 'translate-x-0': isToggled }">
            <div class="flex justify-end w-full px-0 pr-8" @click="toggleOverlay">
                <div v-if="isToggled" class="text-white flex gap-2 p-4"><img src="@/assets/img/back.png" />
                    <p>Go Back</p>
                </div>
                <div v-else class="text-white"></div>
            </div>


            <div class=":ml-[18px]">
                <component :is="overlayContent" />
            </div>

        </div>
    </div>
</template>

<style>
.card-details {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.portt {
    border-radius: 16px;
    background: linear-gradient(111deg, rgba(255, 255, 255, 0.14) 1.21%, rgba(196, 196, 196, 0.02) 100%);
    backdrop-filter: blur(15px);
    border: 0.8px solid rgba(214, 251, 252, 0.06);
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
import ProjectModal from "../components/Modal/ProjectModal.vue";

export default {
    components: {
        About,
        Typewriter,
        Experience,
        Projects,
        Services,
        Contact,
        Home,
        ProjectModal
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