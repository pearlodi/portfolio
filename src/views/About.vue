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
                <div class="line h-1  max-w-full md w-full max-w-full:md:w-[200px] mt-5"></div>
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
            <br><br>
            Hi, I'm Odi Pearl. I'm a frontend developer based in Nigeria with over two years of experience in creating beautiful and functional web applications. I have a strong foundation in HTML, CSS, JavaScript, React, and Vue, focusing on building scalable and user-friendly experiences. My journey into web development started with genuine curiosity and has evolved into a deep passion for turning ideas and mockups into reality. I love the challenge of bringing designs to life and consistently strive to enhance my skills.
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

        <div class="mt-4">
          <div class="w-full max-w-full md:w-[900px]">
            <div class="md:flex w-full max-w-full justify-between mt-4">
              <div data-aos="zoom-in" data-aos-duration="3000">
                <div class="flex flex-col items-center md:items-start">
                  <p class="text-xl text-white font-[800] mt-10 text-center md:text-left">
                  Programming Languages
                </p>
                <div class="line h-1 w-[70%] md:w-[200px] max-w-full mt-2"></div>
                </div>
                <div class="mt-6 grid grid-cols-2 md:grid-cols-4 ">
                  <div class="flex flex-col items-center">
                    <div class="stack rounded-lg h-full flex justify-center">
                      <div
                        class="w-11 md:w-12 flex justify-center items-center"
                      >
                        <img
                          src="@/assets/img/htmls.png"
                          class="p-3 w-full"
                          alt="contact"
                        />
                      </div>
                    </div>
                    <div>
                      <p class="text-grad font-bold">HTML</p>
                    </div>
                  </div>
                  <div class="md:ml-5 flex flex-col items-center">
                    <div class="stack rounded-lg flex justify-center">
                      <div
                        class="w-11 md:w-12 flex justify-center items-center"
                      >
                        <img
                          src="@/assets/img/csss.png"
                          class="p-3 w-full"
                          alt="contact"
                        />
                      </div>
                    </div>
                    <div>
                      <p class="text-grad font-bold">CSS</p>
                    </div>
                  </div>
                  <div class="md:ml-5 mt-4 md:mt-0 flex flex-col items-center">
                    <div class="stack rounded-lg flex justify-center">
                      <div
                        class="w-11 md:w-12 flex justify-center items-center"
                      >
                        <img
                          src="@/assets/img/java.png"
                          class="p-3 w-full"
                          alt="contact"
                        />
                      </div>
                    </div>
                    <div>
                      <p class="text-grad font-bold">Javascript</p>
                    </div>
                  </div>
                  <div class="md:ml-5 mt-4 md:mt-0 flex flex-col items-center">
                    <div class="stack rounded-lg h-full flex justify-center">
                      <div
                        class="w-11 md:w-12 flex justify-center items-center"
                      >
                        <img
                          src="@/assets/img/ts.png"
                          class="p-3 w-full"
                          alt="contact"
                        />
                      </div>
                    </div>
                    <div>
                      <p class="text-grad font-bold">Typescript</p>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="zoom-in" data-aos-duration="2000">
                <div class="flex flex-col items-center md:items-start">
                  <p class="text-xl text-white font-[800] mt-10 text-center md:text-left">
                  Frameworks/Libraries
                </p>
                <div class="line h-1 w-[70%] md:w-[200px] max-w-full mt-2"></div>
                </div>
                <div class="mt-6 grid grid-cols-2 md:grid-cols-1 md:flex">
                  <div class="flex flex-col items-center">
                    <div class="stack rounded-lg h-full flex justify-center">
                      <div class="w-11 md:w-12 flex flex-col items-center">
                        <img
                          src="@/assets/img/react.png"
                          class="p-3 w-full"
                          alt="contact"
                        />
                      </div>
                    </div>
                    <div>
                      <p class="text-grad font-bold">React</p>
                    </div>
                  </div>
                  <div class="ml-5 flex flex-col items-center">
                    <div class="stack rounded-lg h-full flex justify-center">
                      <div class="w-11 md:w-12 flex flex-col items-center">
                        <img
                          src="@/assets/img/vue.png"
                          class="p-3 w-full"
                          alt="contact"
                        />
                      </div>
                    </div>
                    <div>
                      <p class="text-grad font-bold">Vue</p>
                    </div>
                  </div>
                  <div class="md:ml-5 mt-4 md:mt-0 flex flex-col items-center">
                    <div class="stack rounded-lg h-full flex justify-center">
                      <div
                        class="w-11 md:w-12 flex justify-center items-center"
                      >
                        <img
                          src="@/assets/img/nuxtw.png"
                          class="p-3 w-full"
                          alt="contact"
                        />
                      </div>
                    </div>
                    <div>
                      <p class="text-grad font-bold">Nuxt</p>
                    </div>
                  </div>
                  <div class="ml-5 mt-4 md:mt-0 flex flex-col items-center">
                    <div class="stack rounded-lg h-full flex justify-center">
                      <div
                        class="w-11 md:w-12 flex justify-center items-center"
                      >
                        <img
                          src="@/assets/img/wordpress.png"
                          class="p-3 w-full"
                          alt="contact"
                        />
                      </div>
                    </div>
                    <div>
                      <p class="text-grad font-bold">Wordpress</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>



          </div>
        </div> 

        <div class="mt-4">
          <div class="w-full max-w-full md:w-[900px]">
            <div class="md:flex w-full max-w-full justify-between mt-4">
             
              <div data-aos="zoom-in" data-aos-duration="3000">
                <div class="flex flex-col items-center md:items-start">
                  <p class="text-xl text-white font-[800] mt-10 text-center md:text-left">
                  Design
                </p>
                <div class="line h-1 w-[70%] md:w-[200px] max-w-full mt-2"></div>
                </div>
                <div class="mt-6  grid grid-cols-2 md:grid-cols-4">
                  <div class="flex flex-col items-center">
                    <div class="stack rounded-lg flex justify-center">
                      <div
                        class="w-11 md:w-12 flex justify-center items-center"
                      >
                        <img
                          src="@/assets/img/tail.png"
                          class="p-3 w-full"
                          alt="contact"
                        />
                      </div>
                    </div>
                    <div>
                      <p class="text-grad font-bold">Tailwind</p>
                    </div>
                  </div>
                  <div class="ml-5 flex flex-col items-center">
                    <div class="stack rounded-lg flex justify-center">
                      <div
                        class="w-11 md:w-12 flex justify-center items-center"
                      >
                        <img
                          src="@/assets/img/boot.png"
                          class="p-3 w-full"
                          alt="contact"
                        />
                      </div>
                    </div>
                    <div>
                      <p class="text-grad font-bold">Bootstrap</p>
                    </div>
                  </div>
                  <div class="md:ml-5 mt-4 md:mt-0 flex flex-col items-center">
                    <div class="stack rounded-lg h-full flex justify-center">
                      <div
                        class="w-11 md:w-12 flex justify-center items-center"
                      >
                        <img
                          src="@/assets/img/material-ui.png"
                          class="p-3 w-full"
                          alt="contact"
                        />
                      </div>
                    </div>
                    <div>
                      <p class="text-grad font-bold">Material</p>
                    </div>
                  </div>
                  <div class="ml-5 mt-4 md:mt-0 flex flex-col items-center">
                    <div class="stack rounded-lg h-full flex justify-center">
                      <div
                        class="w-11 md:w-12 flex justify-center items-center"
                      >
                        <img
                          src="@/assets/img/element.png"
                          class="p-3 w-full"
                          alt="contact"
                        />
                      </div>
                    </div>
                    <div>
                      <p class="text-grad font-bold">Elementplus</p>
                    </div>
                  </div>
                </div>
              </div>
              

              <div data-aos="zoom-in" data-aos-duration="2000" class="pb-20">
                <div class="flex flex-col items-center md:items-start">
                  <p class="text-xl text-white font-[800] mt-10 text-center md:text-left">
                  State Management
                </p>
                <div class="line h-1 w-[70%] md:w-[200px] max-w-full mt-2"></div>
                </div>
                <div class="mt-6 grid grid-cols-2 md:grid-cols-4">
                  <div class="flex flex-col items-center">
                    <div class="stack rounded-lg h-full flex justify-center">
                      <div class="w-11 md:w-12 flex flex-col items-center">
                        <img
                          src="@/assets/img/rredux.png"
                          class="p-3 w-full"
                          alt="contact"
                        />
                      </div>
                    </div>
                    <div>
                      <p class="text-grad font-bold">Redux</p>
                    </div>
                  </div>
                  <div class="ml-5 flex flex-col items-center">
                    <div class="stack rounded-lg h-full flex justify-center">
                      <div class="w-11 md:w-12 flex flex-col items-center">
                        <img
                          src="@/assets/img/letter-c.png"
                          class="p-3 w-full"
                          alt="contact"
                        />
                      </div>
                    </div>
                    <div>
                      <p class="text-grad font-bold">Context</p>
                    </div>
                  </div>
                  <div class="md:ml-5 mt-4 md:mt-0 flex flex-col items-center">
                    <div class="stack rounded-lg h-full flex justify-center">
                      <div
                        class="w-11  flex justify-center items-center"
                      >
                        <img
                          src="@/assets/img/pinia.png"
                          class="p-3 w-full"
                          alt="contact"
                        />
                      </div>
                    </div>
                    <div>
                      <p class="text-grad font-bold">Pinia</p>
                    </div>
                  </div>
                  <div class="ml-5 mt-4 md:mt-0 flex flex-col items-center">
                    <div class="stack rounded-lg h-full flex justify-center">
                      <div
                        class="w-11 md:w-12 flex justify-center items-center"
                      >
                        <img
                          src="@/assets/img/vue.svg"
                          class="p-3 w-full"
                          alt="contact"
                        />
                      </div>
                    </div>
                    <div>
                      <p class="text-grad font-bold">VueX</p>
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
    };
  },
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
  width: 50px;
  height: 40px;
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
