<template>
    <div>
        <ul class="flex justify-end pr-20">
            <router-link to="/" class="cursor-pointer" active-class="active-link">
                <li class="text-gradient text-sm font-bold cursor-pointer">
                    Home
                </li>
            </router-link>
            <router-link to="/about" class="ml-8 cursor-pointer" active-class="active-link">
                <li class="text-gradient text-sm font-bold  cursor-pointer">
                    About
                </li>
            </router-link>
            <router-link to="/experience" class="ml-8 cursor-pointer" active-class="active-link">
                <li class="text-gradient text-sm font-bold  cursor-pointer">
                    Experience
                </li>
            </router-link>
            <router-link to="/projects" class="ml-8 cursor-pointer " active-class="active-link">
                <li class=" text-sm text-gradient font-bold  cursor-pointer">
                    Projects
                </li>
            </router-link>
            <router-link to="/contact" class="ml-8 cursor-pointer" active-class="active-link">
                <li class="text-gradient text-sm font-bold  cursor-pointer">
                    Contact
                </li>
            </router-link>
            <router-link to="/resume" class="ml-8 cursor-pointer" active-class="active-link">
                <li class="text-gradient text-sm font-bold  cursor-pointer">
                    Resume
                </li>
            </router-link>
            <p @click="toggleDarkMode" class="cursor-pointer">Toggle</p>


        </ul>
    </div>
</template>


<style scoped>
.active-link {

    border-bottom: 4px solid #fff;
    padding-bottom: 4px;
    background: linear-gradient(169deg, #fff 8.16%, #fff 150.61%);
    color: white;
    background: transparent !important;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.active-link .text-gradient {
    background: linear-gradient(169deg, #fff 8.16%, #fff 150.61%) !important;
    color: white !important;
    background: transparent !important;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: white;

}

.dark-mode.active-link .text-gradient {
    background: linear-gradient(169deg, #000 8.16%, #000 150.61%) !important;
    color: black !important;
    background: transparent !important;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: black;

}

.dark-mode .active-link {
    border-bottom: 4px solid black
}
</style>
  
<script>
import App from '../App.vue';
export default {

    data() {
        return {
            isDarkMode: false // Initially, dark mode is off
        };
    },
    created() {
        const storedPreference = localStorage.getItem('isDarkMode');
        if (storedPreference) {
            this.isDarkMode = JSON.parse(storedPreference);
        }
    },
    methods: {
        toggleDarkMode() {
            this.isDarkMode = !this.isDarkMode;
            localStorage.setItem('isDarkMode', JSON.stringify(this.isDarkMode)); // Save preference
        }
    }
};
</script>
