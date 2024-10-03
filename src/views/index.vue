<template>
  <div class="project-background h-fit pb-8 md:pb-24">
    <homeNavVue />
    <div class="">
      <Navbar />
    </div>
    <div class="project-background flex flex-col md:h-full items-center">
      <div class="flex flex-col md:h-[100%] w-[90%]">
        <div class="flex">
          <div
            class="text-[40px] text-white w-[100%] max-w-full mx-auto mt-10 md:mt-12 flex items-center"
          >
            <div class="line h-32 md:h-44 w-1"></div>
            <div class="ml-4 mt-4">
              <p class="text-xl md:text-3xl text-white font-[800]">ODI PEARL</p>
              <div class="mt-4 md:mt-6 flex">
                <Typewriter />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="md:w-[1100px] w-full max-w-full mt-6 md:mt-7 rounded-xl">
            <Vue3Marquee :pause-on-hover="true">
              <div
                class="index-a-trusted-companies-img gap-10 py-4"
                v-for="avatar in cards"
                :key="avatar"
              >
                <div class="img-a flex items-center gap-4">
                  <img
                    :src="avatar.url"
                    alt="stack"
                    class="comp-img w-8 h-8 gap-12"
                  />
                  <h4 class="text-white">{{ avatar.stack }}</h4>
                </div>
              </div>
            </Vue3Marquee>
          </div>
        </div>

        <div
          class="about-background w-full max-w-full md:w-[1100px] h-[350px] md:h-full overflow-scroll"
        >
          <div
            class="text-gradient font-bold text-sm md:text-[16px] leading-8 w-full max-w-full md:w-[1000px]"
          >
            <strong class="text-[24px] text-gradient">HEY THERE 🌟</strong>
            <br />
            <p class="mt-3 text-gradient">
              Welcome to my space. I'm Odi Pearl. A frontend developer who loves
              creating things on the web. I have a strong foundation in HTML,
              CSS, JavaScript, TypeScript, React, Vue, Nuxt and Next and I build responsive,
              user-friendly applications that scale. My journey into web
              development started with a simple curiosity, which quickly grew
              into a passion for crafting beautiful and functional user
              interfaces. I love turning ideas and mockups into reality and am
              always looking to learn and improve.
            </p>
          </div>
        </div>

        <div class="mt-14 flex gap-3">
          <a href="https://github.com/pearlodi" target="_blank">
            <div class="flex flex-col md:items-center md:flex-row">
              <div class="stack rounded-lg inline-block w-fit">
                <div class="w-11 md:w-12 inline-block flex justify-center items-center">
                  <img
                    src="@/assets/img/github.png"
                    class="p-3 w-full h-full"
                    alt="contact"
                  />
                </div>
              </div>
              <div class="md:ml-6 hidden md:block">
                <p class="text-grad font-bold ">Checkout</p>
                <p class="text-white text-sm md:text-base ">Github</p>
              </div>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/odipearl/" target="_blank">
            <div class="md:mt-0  md:ml-10 flex flex-col md:items-center md:flex-row">
              <div class="stack rounded-lg inline-block w-fit">
                <div class="w-11 md:w-12 inline-block flex justify-center items-center">
                  <img
                    src="@/assets/img/linkedin.png"
                    class="p-3 w-full h-full"
                    alt="contact"
                  />
                </div>
              </div>
              <div class="md:ml-6 hidden md:block">
                <p class="text-grad font-bold">Connect</p>
                <p class="text-white text-sm  md:text-left">Linkedin</p>
              </div>
            </div>
          </a>
          <div class=" md:items-center md:mt-0 md:ml-10 hidden md:flex flex-col  md:flex-row">
            <div class="stack rounded-lg w-fit inline-block">
              <div class="w-11 md:w-12 flex justify-center items-center">
                <img
                  src="@/assets/img/location.png"
                  class="p-3 w-full h-full"
                  alt="contact"
                />
              </div>
            </div>
            <div class="md:ml-6 hidden md:block">
              <p class="text-grad font-bold ">Location</p>
              <p class="text-white text-sm md:text-base">Nigeria</p>
            </div>
          </div>

          <a href="mailto:pearlodi7@gmail.com">
          <div class="md:mt-0 md:ml-10 flex flex-col md:items-center md:flex-row">
            <div class="stack rounded-lg inline-block w-fit">
              <div class="w-11 md:w-12 flex justify-center items-center">
                <img
                  src="@/assets/img/gmail.png"
                  class="p-3 w-full h-full"
                  alt="contact"
                />
              </div>
            </div>
            <div class=" md:ml-6 hidden md:block" >
              <p class="text-grad font-bold">E-Mail</p>
              <p class="text-white text-sm md:text-base">pearlodi7@gmail.com</p>
            </div>
          </div>
            </a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { Vue3Marquee } from "vue3-marquee";
import companies4 from "@/assets/img/figma.png";
import companies1 from "@/assets/img/react.png";
import companies2 from "@/assets/img/vue.png";
import companies6 from "@/assets/img/java.png";
import companies3 from "@/assets/img/git.svg";
import companies7 from "@/assets/img/dock.png";
import companies8 from "@/assets/img/typescript.png";
import Navbar from "@/components/Navbar.vue";
import Typewriter from "@/components/Typewriter.vue";
import ProjectModal from "@/components/Modal/ProjectModal.vue";
import homeNavVue from "./homeNav.vue";

export default {
  components: {
    Typewriter,
    ProjectModal,
    Vue3Marquee,
    homeNavVue,
    Navbar,
  },
  data() {
    return {
      cards: [
        {
          url: companies1,
          stack: "React",
        },
        {
          url: companies2,
          stack: "Vue",
        },
        {
          url: companies4,
          stack: "Figma",
        },

        // {
        //   url: companies7,
        //   stack: "Docker",
        // },
        {
          url: companies6,
          stack: "JavaScript",
        },
        {
          url: companies3,
          stack: "Github",
        },
        {
          url: companies6,
          stack: "Typescript",
        },
      ],
    };
  },
};
</script>

<style>
.card-details {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.cards-background {
  border-radius: 16px;
  background: linear-gradient(
    111deg,
    rgba(255, 255, 255, 0.14) 1.21%,
    rgba(196, 196, 196, 0.02) 100%
  );
  backdrop-filter: blur(15px);
  border: 0.8px solid rgba(255, 255, 255, 0.167);
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
  background: linear-gradient(
    111deg,
    rgba(255, 255, 255, 0.14) 1.21%,
    rgba(196, 196, 196, 0.02) 100%
  );
  backdrop-filter: blur(15px);
  border: 0.8px solid rgba(214, 251, 252, 0.06);
}
.stack {
  background: linear-gradient(111deg, #ffffff1a 1.21%, transparent 100%);
}
.card {
  background: url("");
  background-size: cover;
  box-shadow: 0 2px 2px 0px black;
}
.vue3-marquee.horizontal {
  --duration: 14s !important;
}

.vue3-marquee.horizontal > .marquee {
  gap: 42px !important;
}

.img-a {
  margin-left: 32px;
}

.cards-background {
  border-radius: 16px;
  background: linear-gradient(
    111deg,
    rgba(255, 255, 255, 0.072) 1.21%,
    rgba(196, 196, 196, 0) 100%
  );
  backdrop-filter: blur(15px);
  border: 0.8px solid rgba(255, 255, 255, 0.167);
  padding: 24px;
}
.about-background {
  border-radius: 16px;
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
  border: 0.8px solid rgba(255, 255, 255, 0.167);
  padding: 24px;
  background: #151515;
  box-shadow: -1px -1px 1px #efede3, 0px 1px 0 #161616, 0px 2px 0 #2c2c2c,
    0px 3px 0 #2a2a2a, 0px 4px 0 #282828, 0px 5px 0 #262626, 0px 6px 0 #242424,
    0px 7px 0 #222, 0px 8px 0 #202020, 0px 9px 0 #1e1e1e, 0px 10px 0 #1c1c1c,
    0px 11px 0 #1a1a1a,
    /* 0px 12px 0 #181818, 
      0px 13px 0 #161616, 
      0px 14px 0 #141414, 
      0px 15px 0 #121212, */
      /* 2px 20px 5px rgba(0, 0, 0, 0.9), */
      /* 5px 23px 5px rgba(0, 0, 0, 0.3),
      8px 27px 8px rgba(0, 0, 0, 0.5), */
      8px 15px 25px rgba(0, 0, 0, 0.9);
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
