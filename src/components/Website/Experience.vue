<template>
    <div class="py-10 project-background" :class="{ ' ': isDarkMode ? ' project-background' : !isDarkMode }">
        <Navbar />
        <div class=" mx-5 md:mx-20">
            <div class="text-[40px] text-white w-full max-w-full md:w-[1200px] flex items-center pb-4">
                <div class=" mt-16">
                    <p class="text-3xl text-white font-[800]">EXPERIENCE</p>
                    <div class="line h-1 w-[200px] mt-5">
                    </div>

                </div>
            </div>

            <div v-if="!isDarkMode">
                <div class="experience-bg flex justify-between w-full max-w-full  md:w-[700px] cursor-pointer mt-4">
                    <div v-for="category in  categories " :key="category" @click="filterStack(category)"
                        :class="{ active: selectedCategory === category }"
                        class="experience cursor-pointer flex py-3 text-[white] text-base md:text-[18px] w-[50%] text-center px-4 justify-center ">
                        {{ category }}
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="experience-bg-black flex justify-between w-full max-w-full  md:w-[700px] cursor-pointer mt-4">
                    <div v-for="category in  categories " :key="category" @click="filterStack(category)"
                        :class="{ activeDark: selectedCategory === category }"
                        class="experience-dark text-[black] cursor-pointer flex py-3 text-base md:text-[18px] w-[50%] text-center px-4 justify-center">
                        {{ category }}
                    </div>
                </div>
            </div>
            <div class="tech-list mt-8 stack-tech-li">
                <div class="stack-tech-ul stack-tech-li">
                    <div v-for=" stack  in  filteredStack " :key="stack.id" class="stack-tech-li  stackssa">

                        <h5 class="font-bold text-[40px] text-black texting-black" :class="{ 'texting': !isDarkMode }">{{
                            stack.year }}</h5>
                        <p class=" text-white font-extrabold"
                            :class="{ 'dark-mode': isDarkMode ? ' text-grad' : !isDarkMode }">{{ stack.company }}</p>
                        <p class=" mb-8" :class="{ 'dark-mode': isDarkMode ? ' text-gradient' : !isDarkMode }">{{
                            stack.jobDescription }}</p>

                        <div v-for="( jobs, index ) in  stack.jobs " :key="index" class="">
                            <div class="flex ">
                                <div v-if="!isDarkMode">
                                    <div class="flex flex-col items-center ">
                                        <img src="@/assets/img/black-circle.png" class="md:w-[10px] md:h-[10px]"
                                            alt="circle" />
                                        <div class="h-[30px] bg-[#ffffff1a] w-[0.5px]"></div>
                                    </div>
                                </div>
                                <div v-else>
                                    <div class="flex flex-col items-center ">
                                        <div class="md:w-[10px] md:h-[10px] bg-black rounded-full"></div>
                                        <div class="h-[30px] bg-[#000] w-[0.5px]"></div>
                                    </div>
                                </div>
                                <div>
                                    <p class="text-white  ml-4"
                                        :class="{ 'dark-mode': isDarkMode ? ' text-grads' : !isDarkMode }"> {{
                                            stack.jobWork
                                        }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

  
<script>

import Navbar from '../Navbar.vue';
export default {
    components: {
        Navbar
    }, props: {
        isDarkMode: Boolean // Receive isDarkMode as a prop
    },

    data() {
        return {
            stacks: [
                { id: 1, name: 'I am a natural team worker and adaptable to all challenging situations categoryOther Professional Experiences', category: 'Software Engineering', year: '2020', company: 'Abitto Global', jobDescription: 'Web developer', jobWork: 'Create files for individuals thhat needs creating of the files that are needed', jobs: ['Create files for individuals thhat needs creating of the files that are needed', 'Create files for individuals thhat needs creating of the files that are needed', 'Create files for individuals thhat needs creating of the files that are needed of the files needed'] },
                { id: 1, name: 'I am a natural team worker and adaptable to all challenging situations categorySoftware Engineering', category: 'Software Engineering', year: '2020', company: 'Abitto Global', jobDescription: 'Web developer', jobWork: 'Create files for individuals thhat needs creating of the files needed', jobs: ['Create files for individuals thhat needs creating of the files needed', 'Create files for individuals thhat needs creating of the files needed', 'Create files for individuals thhat needs creating of the files needed'] },
                { id: 1, name: 'I am a natural team worker and adaptable to all challenging situations categorySoftware Engineering', category: 'Software Engineering', year: '2020', company: 'Abitto Global', jobDescription: 'Web developer', jobWork: 'Create files for individuals thhat needs creating of the files needed', jobs: ['Create files for individuals thhat needs creating of the files needed', 'Create files for individuals thhat needs creating of the files needed', 'Create files for individuals thhat needs creating of the files needed'] },
                { id: 1, name: 'I am a natural team worker and adaptable to all challenging situations categorySoftware Engineering', category: 'Software Engineering', year: '2020', company: 'Abitto Global', jobDescription: 'Web developer', jobWork: 'Create files for individuals thhat needs creating of the files needed', jobs: ['Create files for individuals thhat needs creating of the files needed', 'Create files for individuals thhat needs creating of the files needed', 'Create files for individuals thhat needs creating of the files needed'] },




                { id: 1, name: 'I am a natural team worker and adaptable to all challenging situations categoryOther Professional Experiences', category: 'Other Professional Experiences', year: '2000', company: 'Royale Concept', jobDescription: 'Web developer', jobWork: 'Create files for individuals thhat needs creating', jobs: ['Create files for individuals thhat needs creating', 'Create files for individuals thhat needs creating', 'Create files for individuals thhat needs creating'] },
                { id: 1, name: 'I am a natural team worker and adaptable to all challenging situations categoryOther Professional Experiences', category: 'Other Professional Experiences', year: '2000', company: 'Royale Concept', jobDescription: 'Web developer', jobWork: 'Create files for individuals thhat needs creating', jobs: ['Create files for individuals thhat needs creating', 'Create files for individuals thhat needs creating', 'Create files for individuals thhat needs creating'] },
                { id: 1, name: 'I am a natural team worker and adaptable to all challenging situations categoryOther Professional Experiences', category: 'Other Professional Experiences', year: '2000', company: 'Royale Concept', jobDescription: 'Web developer', jobWork: 'Create files for individuals thhat needs creating', jobs: ['Create files for individuals thhat needs creating', 'Create files for individuals thhat needs creating', 'Create files for individuals thhat needs creating'] },
                { id: 1, name: 'I am a natural team worker and adaptable to all challenging situations categoryOther Professional Experiences', category: 'Other Professional Experiences', year: '2000', company: 'Royale Concept', jobDescription: 'Web developer', jobWork: 'Create files for individuals thhat needs creating', jobs: ['Create files for individuals thhat needs creating', 'Create files for individuals thhat needs creating', 'Create files for individuals thhat needs creating'] },
            ],
            selectedCategory: 'Software Engineering',
            categories: ['Software Engineering', 'Other Professional Experiences'],
        };
    },
    computed: {
        filteredStack() {
            if (this.selectedCategory === 'all') {
                return this.stacks;
            } else {
                return this.stacks.filter(stack => stack.category === this.selectedCategory);
            }
        },
    },
    methods: {
        filterStack(category) {
            this.selectedCategory = category;
        },
    },
};
</script>
  
<style scoped>
.active {
    background: linear-gradient(122deg, #FFF 30.71%, #505356 153.64%);
    color: black;
    border-radius: 16px;
    text-align: center;
    padding: 6px;
    font-weight: 600;

}

.dark-mode .activeDark {
    background: linear-gradient(122deg, #000 30.71%, #000 153.64%);
    color: black;
    border-radius: 16px;
    text-align: center;
    padding: 6px;
    font-weight: 600;
    -webkit-text-fill-color: white;

}

.texting {
    color: white !important;
}

.dark-mode .texting-black {
    background: linear-gradient(169deg, black 8.16%, black 150.61%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-color: black;

}

.dark-mode .texting {
    color: orange;
    -webkit-text-fill-color: orange;
}

.experience-dark {
    color: black;
    -webkit-text-fill-color: black;
}


.stack-tech-li {
    align-items: center;

}

.experience-bg {
    border-radius: 16px;
    background: linear-gradient(111deg, #ffffff00 1.21%, rgba(19, 0, 0, 0.02) 100%);
    backdrop-filter: blur(15px);
    border: 0.8px solid rgba(214, 251, 252, 0.06);
    padding: 0 12px;
    align-items: center;
}

.experience-bg-black {
    border-radius: 16px;
    background: linear-gradient(111deg, #000 1.21%, 000 100%);
    backdrop-filter: blur(15px);
    border: 0.8px solid black;
    padding: 0 12px;
    align-items: center;
}

.stack-tech-ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
}

.stackssa {
    border-radius: 16px;
    border: 3px solid rgba(62, 62, 62, 0.086);
    background: linear-gradient(65deg, #181818 4.18% #181818 116.91%);
    /* background-color: #18181881; */
    padding: 20px;


}


.text-grad {
    background: linear-gradient(169deg, #505356 8.16%, #fff 150.61%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.text-grads {
    background: linear-gradient(169deg, #FFF 8.16%, #505356 150.61%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

/* Add AOS animation styles */
[data-aos] {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s, transform 0.5s;
}

[data-aos].aos-animate {
    opacity: 1;
    transform: translateY(0);
}

@media (max-width: 600px) {
    .stack-tech-ul {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 30px;
    }

}
</style>