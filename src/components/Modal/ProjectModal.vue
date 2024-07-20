<template>
    <el-button text @click="centerDialogVisible = true" class="cursor-pointer text-white ">
        Project Details<el-icon >
      <!-- <Edit /> -->
    </el-icon>
    </el-button>

    <el-dialog v-model="centerDialogVisible" :open-delay="9" width="30%" align-center class="pb-10">
        <div>
            <a :href="itemLinks" target="_blank" class="proj-link">
                <h1 class="text-2xl text-[black] font-bold">{{ itemProps }}</h1>
            </a>
            <p class="w-full  text-base text-[black] mt-4">{{ itemDescription }}</p>
            <div class="md:flex ">
                <div>
                    <h1 class="text-[black] text-base font-bold mt-4">Technologies</h1>
                    <ul>
                        <li v-for="(tech, index) in itemTechnologies" :key="String(index)" class="text-[black]">{{ tech }}
                        </li>
                    </ul>
                </div>
                <div class="md:ml-16">
                    <h1 class="text-[black] text-base font-bold mt-4">Libraries</h1>
                    <ul>
                        <li v-for="(libraries, index) in itemLibraries" :key="String(index)">
                            {{ libraries }}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="mt-8">
                <Carousel :itemsToShow="isMobile ? 0.7 : 3" :wrap-around="true">
                    <Slide v-for="(slide, index) in itemImages" :key="String(index)">
                        <div class="carousel__item"><img :src="slide" alt="" /></div>
                    </Slide>

                    <template #addons>
                        <Navigation />
                    </template>
                </Carousel>

            </div>
        </div>
        <template #footer>
        </template>
    </el-dialog>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'


const centerDialogVisible = ref(false)
</script>

<script lang="ts">
export default defineComponent({

    name: 'WrapAround',
    components: {
        Carousel,
        Slide,
        Navigation,
    },

    props: {
        itemProps: {
            type: String,
            required: true,
        },
        itemDescription: {
            type: String,
            required: true,
        },
        itemTechnologies: {
            type: Array,
            required: true,
        },
        itemLibraries: {
            type: Array,
            required: true
        },
        itemImages: {
            type: Array,
            required: true
        },
        itemLinks: {
            type: String,
            required: true
        }
    },
    computed: {
        isMobile() {
            return window.innerWidth < 768; // Adjust the breakpoint as needed
        }
    }


});



</script>
<style scoped>
.dialog-footer button:first-child {
    margin-right: 10px;
}

.el-dialog {
    background-color: red !important;
    --el-dialog-title-font-size: 50px !important;
    width: 90% !important;

}

.el-dialog__title {
    font-style: 50px !important;
}

.el-overlay-dialog {
    background: black !important;
}

.carousel__track {
    gap: 10px !important;
}


image {
    width: 60% !important;
}
</style>
