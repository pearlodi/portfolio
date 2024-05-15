<template>
  <div class="w-full flex flex-col items-center">
    <div class="md:w-[1300px] max-w-full">
      <div class="hidden md:flex mt-4 md:mt-16 transition-opacity">
        <div v-for="(image, index) in currentImages" :key="index" :class="['image-container', image.classes]" class="transition-opacity  duration-1000 image-container">
          <img :src="image.src" :alt="image.alt" class="w-full h-full transition-opacity duration-1000" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "../../assets/img/ownage/ownage1.png";
import img2 from "../../assets/img/ownage/ownage3.png";
import img3 from "../../assets/img/ownage/ownage2.png";
import img4 from "../../assets/img/ownage/ownage4.png";
import ssv1 from "../../assets/img/ssv/ssv1.png";
import ssv2 from "../../assets/img/ssv/ssv3.png";
import ssv3 from "../../assets/img/ssv/ssv2.png";
import ssv4 from "../../assets/img/ssv/ssv4.png";

export default {
  data() {
    return {
      images: [
        { src: img1, alt: "menu", classes: "w-full -rotate-6 transition-opacity" },
        { src: img2, alt: "menu", classes: "w-full ml-8 rotate-3 transition-opacity" },
        { src: img3, alt: "menu", classes: "w-full -rotate-3 transition-opacity" },
        { src: img4, alt: "menu", classes: "w-full ml-8 rotate-6 transition-opacity" },
        { src: ssv1, alt: "menu", classes: "w-full -rotate-6 transition-opacity" },
        { src: ssv2, alt: "menu", classes: "w-full ml-8 rotate-3 transition-opacity" },
        { src: ssv3, alt: "menu", classes: "w-full -rotate-6 transition-opacity" },
        { src: ssv4, alt: "menu", classes: "w-full ml-8 rotate-3 transition-opacity" }
      ],
      currentIndex: 4,
      currentImages: []
    };
  },
  created() {
  this.showNextImages();
},

  methods: {
    showNextImages() {
      const interval = 2000; // Change interval duration as needed
      this.currentImages = this.getNextImages();
      setInterval(() => {
        this.currentImages = this.getNextImages();
      }, interval);
    },
    getNextImages() {
      const nextIndex = (this.currentIndex + 4) % this.images.length;
      const nextImages = this.images.slice(nextIndex, nextIndex + 4);
      this.currentIndex = nextIndex;
      return nextImages;
    }
  }
};
</script>

<style scoped>
/* Add your custom styles here */
.image-container {
  transition: mymove 1s infinite;
}

.opacity-animation {
  opacity: 0;
}

@keyframes mymove {
  from {opacity: 0;}
  to {opacity: 1;}
}
</style>
