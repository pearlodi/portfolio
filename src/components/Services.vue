<template>
    <div class="mx-5 lg:mx-20">
        <div class="text-[40px] text-white w-full max-w-full md:w-[1200px] mt-4 flex items-center pb-4">
            <!-- <div class="line h-32 w-1">

            </div> -->
            <div class=" mt-4">
                <p class="text-3xl text-white font-[800]">SERVICES</p>
                <div class="line h-1 w-[200px] mt-5">
                </div>

            </div>
        </div>
        <div class="md:flex justify-center">

            <div class="stack hidden md:flex flex-col justify-around  w-full max-w-full md:w-[1200px] cursor-pointer ">
                <div v-for="stack in   stacks  " :key="stack.id" class="">
                    <!-- <img :src="stack.url" class="rounded-2xl" /> -->
                    <h1 class="text-grad text-white text-[20px] text-center font-extrabold ">{{ stack.year }}</h1>





                </div>
            </div>
            <div class="tech-list stack-tech-li md:ml-8">
                <ul class="stack-tech-ul stack-tech-li">
                    <li v-for="stack in   stacks  " :key="stack.id" class="stack-tech-li  stackssa">
                        <!-- <img :src="stack.url" class="rounded-2xl" /> -->
                        <p class="text-grad text-white text-[40px] font-extrabold">{{ stack.year }}</p>
                        <p class="serve-text">{{ stack.serve }}</p>





                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>
  
<script>
import ownage from '@/assets/img/ownage.png'
import hmgls from '@/assets/img/hmgls.png'
import abitto from '@/assets/img/abitto.png'
import bhit from '@/assets/img/bhit.png'
import tfs from '@/assets/img/tfs.png'


export default {
    data() {
        return {
            stacks: [
                { id: 1, year: 'Web Design', serve: 'Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.' },

                { id: 1, year: 'Transcription', serve: 'Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.' },
                { id: 1, year: 'Content Creation', serve: 'Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.' },
                { id: 1, year: 'Graphic Design', serve: 'Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.' },




            ],
            selectedCategories: 'Personl projects',
            categories: ['Colab', 'Personl projects'],
        };
    },
    // computed: {
    //     filteredStack() {
    //         if (this.selectedCategory === 'all') {
    //             return this.stacks;
    //         } else {
    //             return this.stacks.filter(stack => stack.category === this.selectedCategory);
    //         }
    //     },
    // },
    // methods: {
    //     filterStack(category) {
    //         this.selectedCategory = category;
    //     },
    // },
};
</script>
  
<style scoped>
.serve-text {
    background: linear-gradient(180deg, #FFF 0%, #505356 298.75%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.active {
    color: black;
    border-radius: 16px;
    text-align: center;
    padding: 4px;
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
    padding: 4px;


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
    padding: 40px;


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

@media (max-width: 700px) {
    .stack-tech-ul {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 30px;
    }

    .stackssa {
        padding: 12px;
    }

}
</style>