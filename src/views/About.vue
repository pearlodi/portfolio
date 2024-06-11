<template>
  <div class="md:py-10 pb-10 project-background">
    <div>
      <div>
        <Navbar />
      </div>
      <div class="mx-5 md:mx-20 mt-4 md:mt-16">
        <div class="text-[40px] text-white flex items-center pb-4">
          <div>
            <p class="text-3xl text-white font-[800]">ABOUT ME</p>
            <div>
              <div>
                <div
                  class="line h-1 max-w-full md w-full max-w-full:md:w-[200px] mt-5"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p
            class="text-gradient font-bold text-sm md:text-[16px] leading-8 mt-5 w-full max-w-full md:w-[1000px]"
            data-aos="fade-zoom-in"
            data-aos-duration="3000"
          >
            <strong class="text-2xl font-bold md:text-5xl gradient-text"
              >I’m a Frontend Developer. <br />I build interactive and
              user-friendly applications.</strong
            >
            <br /><br />
            Hi, I'm Odi Pearl. I'm a frontend developer based in Nigeria with
            over two years of experience in creating beautiful and functional
            web applications. I have a strong foundation in HTML, CSS,
            JavaScript, React, and Vue, focusing on building scalable and
            user-friendly experiences. My journey into web development started
            with genuine curiosity and has evolved into a deep passion for
            turning ideas and mockups into reality. I love the challenge of
            bringing designs to life and consistently strive to enhance my
            skills.
          </p>
        </div>
        <div>
          <div class="line h-1 w-full max-w-full md:w-[1000px] mt-10"></div>

          <div class="md:flex">
            <div>
              <div class="mt-4 flex">
                <p class="font-bold text-white">Phone:</p>
                <p class="text-gradient ml-4">+234 9037248116</p>
              </div>
              <div class="mt-4 flex">
                <p class="font-bold text-white">Email:</p>
                <p class="text-gradient ml-4">pearlodi7@gmail.com</p>
              </div>
            </div>

            <div class="md:ml-16">
              <div class="mt-4 flex">
                <p class="font-bold text-white">Degree:</p>
                <p class="text-gradient ml-4">B.Sc</p>
              </div>
              <div class="mt-4 flex">
                <p class="font-bold text-white">Address:</p>
                <p class="text-gradient ml-4">Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 w-full max-w-full md:w-[900px]">
          <div
            v-for="category in categories"
            :key="category.title"
            class="mt-4"
          >
            <div class=" ">
              <div class="md:flex w-full max-w-full justify-between mt-4">
                <div  data-aos="zoom-in" :data-aos-duration="category.duration">
                  <div class="">
                    <p
                      class="text-xl text-white font-[800] mt-10"
                    >
                      {{ category.title }}
                    </p>
                    <div
                      class="line h-1 w-[40%] md:w-[200px] max-w-full mt-2"
                    ></div>
                  </div>
                 <div >
                  <div class="mt-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 overflow-scroll" >
                    <div
                      v-for="item in category.items"
                      :key="item.name"
                      class=""
                    >
                      <div class="stack  rounded-lg h-full flex justify-center">
                        <div
                          class="w-11 md:w-12 flex justify-center items-center"
                        >
                          <img
                            :src="item.img"
                            class="p-2 md:p-3 w-full"
                            :alt="item.name"
                          />
                        </div>
                      </div>
                      <div>
                      </div>
                    </div>
                  </div>
                 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
</style>


<script>
import { Vue3Marquee } from "vue3-marquee";
import companies4 from "@/assets/img/figma.svg";
import companies1 from "@/assets/img/react.svg";
import companies2 from "@/assets/img/vue.svg";
import companies6 from "@/assets/img/java.svg";
import companies3 from "@/assets/img/git.svg";
import companies7 from "@/assets/img/docker.svg";
import Navbar from "@/components/Navbar.vue";
import html from "../assets/img/htmls.png";
import css from "../assets/img/csss.png";
import javascript from "../assets/img/java.png";
import typescript from "../assets/img/ts.png";
import react from "../assets/img/react.png";
import vue from "../assets/img/vue.png";
import nuxt from "../assets/img/nuxtw.png";
import wordpress from "../assets/img/wordpress.png";
import tailwind from "../assets/img/tail.png";
import bootstrap from "../assets/img/boot.png";
import material from "../assets/img/material-ui.png";
import elementplus from "../assets/img/element.png";
import redux from "../assets/img/rredux.png";
import context from "../assets/img/letter-c.png";
import pinia from "../assets/img/pinia.png";
import vuex from "../assets/img/vue.svg";

export default {
  components: {
    Vue3Marquee,
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

        {
          url: companies7,
          stack: "Docker",
        },
        {
          url: companies6,
          stack: "JavaScript",
        },
        {
          url: companies3,
          stack: "Github",
        },
      ],
      categories: [
        {
          title: "Programming Languages",
          duration: "3000",
          items: [
            { name: "HTML", img: html },
            { name: "CSS", img: css },
            { name: "JavaScript", img: javascript },
            { name: "TypeScript", img: typescript },
          ],
        },
        {
          title: "Frameworks/Libraries",
          duration: "2000",
          items: [
            { name: "React", img: react },
            { name: "Vue", img: vue },
            { name: "Nuxt", img: nuxt },
            { name: "Wordpress", img: wordpress },
          ],
        },
        {
          title: "Design",
          duration: "3000",
          items: [
            { name: "Tailwind", img: tailwind },
            { name: "Bootstrap", img: bootstrap },
            { name: "Material", img: material },
            { name: "Elementplus", img: elementplus },
          ],
        },
        {
          title: "State Management",
          duration: "2000",
          items: [
            { name: "Redux", img: redux },
            { name: "Context", img: context },
            { name: "Pinia", img: pinia },
            { name: "VueX", img: vuex },
          ],
        },
      ],
    };
  },
  mounted() {
    AOS.init({
      once: true
    });
  }
};
</script>

<style scoped>
.vue3-marquee.horizontal {
  --duration: 14s !important;
}

.vue3-marquee.horizontal > .marquee {
  gap: 32px !important;
}

.img-a {
  margin-left: 20px;
}

.index-a-trusted-companies-img img {
  margin-top: 2px;
  margin-left: 80px;
}

.stack {
  background: linear-gradient(111deg, #ffffff1a 1.21%, transparent 100%);
}
.gradient-text {
  background: linear-gradient(
    90deg,
    #5d5d5d91 0%,
    rgb(242, 242, 242) 25%,
    #5d5d5d91 50%,
    #353535a1 75%,
    #fcfcfc91 100%
  );
  background-size: 400% 100%;
  animation: move-gradient 0.9s linear infinite;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

@keyframes move-gradient {
  0% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>
