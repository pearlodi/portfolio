<template>
    <Carousel :items-to-show="3" :wrap-around="true">
        <Slide v-for="slide in images" :key="slide">
            <div class="carousel__item"><img :src='slide' alt="" /></div>
        </Slide>
        <template #addons>
            <Navigation />
        </template>
    </Carousel>
</template>
  
<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import home from '../../assets/img/portfolio/home.png'
import contact from '../../assets/img/portfolio/contact.png'
import about from '../../assets/img/portfolio/about.png'
import experience from '../../assets/img/portfolio/experience.png'
import resume from '../../assets/img/portfolio/resume.png'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
    name: 'WrapAround',
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    data() {
        return {
            images: [
                home, contact, about, experience, resume
            ]
        }
    }
})
</script>
  