<template>
    <div class=" mx-5 md:mx-20">
        <div class="text-[40px] text-white w-full max-w-full md:w-[1200px] mt-4 flex items-center pb-4">
            <div class=" mt-4">
                <p class="text-3xl text-white font-[800]">PROJECTsS</p>
                <div class="line h-1 w-[200px] mt-5">
                </div>

            </div>
        </div>

        <div class="stack flex justify-between w-full max-w-full  md:w-[700px] cursor-pointer mt-4">
            <h1 v-for="category in categories" :key="category" @click="filterStack(category)"
                :class="{ active: selectedCategory === category }"
                class=" cursor-pointer flex py-3 text-white text-base md:text-[22px] w-[50%] text-center px-4 justify-center">
                {{ category }}
            </h1>
        </div>
        <div class="tech-list mt-8 stack-tech-li">
            <ul class="stack-tech-ul stack-tech-li">
                <li v-for="stack in filteredStack" :key="stack.id" class="stack-tech-li  stackssa">
                    <p class="text-grad text-white text-[20px] font-extrabold">{{ stack.year }}</p>
                    <img :src="stack.url" alt="image" class="h-full md:h-full max-h-full w-full" />
                    <div class="mt-3 flex justify-between">
                        <p class="text-[white] font-bold">{{ stack.company }}</p>
                        <p class="about-text mb-2 cursor-pointer">
                            <ProjectModal />
                        </p>
                    </div>

                </li>

            </ul>
        </div>

    </div>
</template>

  
<script>

import ownage from '@/assets/img/ownage.png'
import hmgls from '@/assets/img/hmgls.png'
import abitto from '@/assets/img/abitto.png'
import bhit from '@/assets/img/bhit.png'
import tfs from '@/assets/img/tfs.png'
import ProjectModal from './Modal/ProjectModal.vue'
export default {
    components: {
        ProjectModal
    },
    data() {
        return {
            stacks: [
                { id: 1, name: 'I am a natural team worker and adaptable to all challenging situations categoryOther Professional Experiences', category: 'Colab', year: '2020', company: 'Abitto Global', jobDescription: 'Web developer', url: ownage },
                { id: 1, name: 'I am a natural team worker and adaptable to all challenging situations categoryColab', category: 'Colab', year: '2020', company: 'Abitto Global', jobDescription: 'Web developer', url: abitto },
                { id: 1, name: 'I am a natural team worker and adaptable to all challenging situations categoryColab', category: 'Colab', year: '2020', company: 'Abitto Global', jobDescription: 'Web developer', url: tfs },
                { id: 1, name: 'I am a natural team worker and adaptable to all challenging situations categoryColab', category: 'Colab', year: '2020', company: 'Abitto Global', jobDescription: 'Web developer', url: hmgls },




                {
                    id: 1, name: 'I am a natural team worker and adaptable to all challenging situations categoryOther Professional Experiences', category: 'Personal Projects', year: '2000', company: 'Royale Concept', jobDescription: 'Web developer', url: hmgls
                },
                {
                    id: 1, name: 'I am a natural team worker and adaptable to all challenging situations categoryPersonal Projects', category: 'Personal Projects', year: '2000', company: 'Royale Concept', jobDescription: 'Web developer', url: bhit
                },
                {
                    id: 1, name: 'I am a natural team worker and adaptable to all challenging situations categoryPersonal Projects', category: 'Personal Projects', year: '2000', company: 'Royale Concept', jobDescription: 'Web developer', url: ownage
                },
                {
                    id: 1, name: 'I am a natural team worker and adaptable to all challenging situations categoryPersonal Projects', category: 'Personal Projects', year: '2000', company: 'Royale Concept', jobDescription: 'Web developer', url: ownage
                },
            ],
            selectedCategory: 'Personal Projects',
            categories: ['Colab', 'Personal Projects'],
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


.stack-tech-li {
    align-items: center;

}

.stack {
    border-radius: 16px;
    background: linear-gradient(111deg, #ffffff00 1.21%, rgba(19, 0, 0, 0.02) 100%);
    backdrop-filter: blur(15px);
    border: 0.8px solid rgba(214, 251, 252, 0.06);
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
    background-color: #18181881;
    padding: 0 20px;


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