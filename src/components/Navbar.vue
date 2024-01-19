<template>
    <div>
        <div class="flex md:hidden justify-end">
            <div class="w-5 h-5 mr-4 mt-4" @click="toggleGreeting" v-if="!displayHello">
                <img src="../assets/img/app.png" alt="menu" class="w-full h-full" />
            </div>
            <div v-else>

            </div>
        </div>
        <ul class="md:flex justify-end pr-6 md:pr-20 nav"
            :class="{ 'hidden': !displayHello, 'flex flex-col fixed   w-[60%] text-[white] py-6 pl-8 ': displayHello }">
            <div v-if="!displayHello" class="hidden ">

            </div>
            <div class="w-4 h-4 self-end" @click="toggleGreeting" v-else>
                <img src="../assets/img/closed.png" alt="menu" class="w-full h-full self-end" />
            </div>


            <router-link to="/" class="cursor-pointer" active-class="active-link">
                <li class="text-gradient text-sm font-bold cursor-pointer mt-6 md:mt-0">
                    Home
                </li>
            </router-link>
            <router-link to="/about" class="md:ml-8 mt-4 md:mt-0 cursor-pointer" active-class="active-link">
                <li class="text-gradient text-sm font-bold  cursor-pointer">
                    About
                </li>
            </router-link>
            <router-link to="/experience" class="md:ml-8 mt-4 md:mt-0 cursor-pointer" active-class="active-link">
                <li class="text-gradient text-sm font-bold  cursor-pointer">
                    Experience
                </li>
            </router-link>
            <router-link to="/projects" class="md:ml-8 mt-4 md:mt-0 cursor-pointer " active-class="active-link">
                <li class=" text-sm text-gradient font-bold  cursor-pointer">
                    Projects
                </li>
            </router-link>
            <router-link to="/articles" class="md:ml-8 mt-4 md:mt-0 cursor-pointer " active-class="active-link">
                <li class=" text-sm text-gradient font-bold  cursor-pointer">
                    Articles
                </li>
            </router-link>
            <router-link to="/contact" class="md:ml-8 mt-4 md:mt-0 cursor-pointer" active-class="active-link">
                <li class="text-gradient text-sm font-bold  cursor-pointer">
                    Contact
                </li>
            </router-link>
            <router-link to="/resume" class="md:ml-8 mt-4 md:mt-0 cursor-pointer" active-class="active-link">
                <li class="text-gradient text-sm font-bold  cursor-pointer">
                    Resume
                </li>
            </router-link>


        </ul>
    </div>
</template>

<style scoped>
.active-link {

    border-bottom: 4px solid #fff;
    padding-bottom: 4px;
    color: white;
    background: transparent !important;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.active-link .text-gradient {
    color: white !important;
    background: transparent !important;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: white;

}

@media (max-width: 600px) {
    .nav {
        height: 100vh;
        justify-content: flex-start;
        z-index: 50;
        border: 1px solid #FFFFFF60;
        background: linear-gradient(111deg, rgba(255, 255, 255, .14) 1.21%, rgba(196, 196, 196, .02) 100%);
        -webkit-backdrop-filter: blur(15px);
        backdrop-filter: blur(15px);
        animation: openNav 0.5s;
    }

    .text-gradient {
        color: black !important;
        background: transparent !important;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: white;
    }

    .active-link {
        border-bottom: none;
    }

    @keyframes openNav {
        0% {
            transform: translate(-100%);
        }

        100% {
            transform: translate(0);
        }
    }
}
</style>
  
<script>
export default {
    data() {
        return {
            displayHello: false
        };
    },
    methods: {
        toggleGreeting() {
            this.displayHello = !this.displayHello;
        }
    }
};
</script>
