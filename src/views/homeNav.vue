<!-- <template>
  <div class="project-background flex flex-col  md:h-full items-center">
      <div class="flex flex-col  md:h-[100%] items-center w-[90%]">
          <div class="text-[40px] text-white w-[100%] max-w-full mx-auto mt-10 md:mt-12 flex items-center">
              <div class="line h-40 md:h-52 w-1">
              </div>
              <div class="ml-4 mt-4">
                  <p class="text-xl md:text-3xl text-white font-[800]">ODI PEARL
                  </p>
                  <div class="mt-4 md:mt-8 typewriter flex">
                      <Typewriter />
                  </div>
              </div>
          </div>


          <div class="card-details bg-opacity-90 max-w-full w-full pb-1 mt-6 md:mt-12">
              <router-link to="/about">
                  <div class="cards-background cursor-pointer flex h-[132px] md:h-44 card  items-center rounded-lg   text-[#FFF] p-12 text-xl md:text-2xl font-[700] gap-4"
                      data-aos="fade-down"
                      data-aos-duration="2000">
                      <div class="w-10 md:w-14">
                          <img src="@/assets/img/about-img.png"
                              class="w-full h-full"
                              alt="" />
                      </div>

                      <p>
                          ABOUT ME
                      </p>
                  </div>
              </router-link>
              <router-link to="/experience">
                  <div class="cards-background cursor-pointer flex h-[132px] md:h-44 card items-center   rounded-lg   text-[#FFF] p-12 text-xl md:text-2xl font-[700] gap-4"
                      data-aos="fade-down"
                      data-aos-duration="2000">
                      <div class="w-10 md:w-14">
                          <img src="@/assets/img/stars.png"
                              class="w-full h-full"
                              alt="" />
                      </div>
                      <p>
                          EXPERIENCE
                      </p>
                  </div>
              </router-link>
              <router-link to="/projects">
                  <div class="cards-background cursor-pointer flex h-[132px] md:h-44 card items-center  rounded-lg   text-[#FFF] p-12 text-xl md:text-2xl font-[700] gap-4"
                      data-aos="fade-down"
                      data-aos-duration="2000">
                      <div class="w-10 md:w-14">
                          <img src="@/assets/img/idea.png"
                              class="w-full h-full"
                              alt="" />
                      </div>
                      <p>
                          PROJECTS
                      </p>
                  </div>
              </router-link>

              <router-link to="/articles">
                  <div class="cards-background cursor-pointer flex h-[132px] md:h-44 card items-center  rounded-lg   text-[#FFF] p-12 text-xl md:text-2xl font-[700] gap-4"
                      data-aos="fade-down"
                      data-aos-duration="2500">
                      <div class="w-10 md:w-14 ">
                          <img src="@/assets/img/note.png"
                              class="w-full h-full"
                              alt="" />
                      </div>
                      <p>
                          ARTICLES
                      </p>
                  </div>
              </router-link>
              <router-link to="/contact">
                  <div class="cards-background cursor-pointer flex h-[132px] md:h-44 card items-center  rounded-lg   text-[#FFF] p-12 text-xl md:text-2xl font-[700] gap-4"
                      data-aos="fade-down"
                      data-aos-duration="2500">
                      <div class="w-10 md:w-14 ">
                          <img src="@/assets/img/contacts.png"
                              class="w-full h-full"
                              alt="" />
                      </div>
                      <p>
                          CONTACT ME
                      </p>
                  </div>
              </router-link>
              <router-link to="/resume">
                  <div class="flex cursor-pointer h-[132px] md:h-44 card items-center   rounded-lg bg-opacity-30 bg-[#00000013] backdrop-blur-lg shadow-xl  text-[#FFF] p-12 text-xl md:text-2xl font-[700] gap-4"
                      data-aos="fade-down"
                      data-aos-duration="2500">
                      <div class="w-10 md:w-14 ">
                          <img src="@/assets/img/resume-img.png"
                              class="w-full h-full"
                              alt="" />
                      </div>
                      <p>
                          MY RESUME
                      </p>
                  </div>
              </router-link>
          </div>

      </div>
  </div>
</template>


<script>
import Typewriter from "@/components/Typewriter.vue";
import ProjectModal from "@/components/Modal/ProjectModal.vue";

export default {
  components: {
      Typewriter,
      ProjectModal
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
  background: linear-gradient(111deg, rgba(255, 255, 255, 0.14) 1.21%, rgba(196, 196, 196, 0.02) 100%);
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
  background: linear-gradient(111deg, rgba(255, 255, 255, 0.14) 1.21%, rgba(196, 196, 196, 0.02) 100%);
  backdrop-filter: blur(15px);
  border: 0.8px solid rgba(214, 251, 252, 0.06);
}

.card {
  background: url('');
  background-size: cover;
  box-shadow: 0 2px 2px 0px black;
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
</style> -->

<template>
  <div>
    <div class="flex w-full justify-end">
      <div
        class="w-6 mr-8 mt-6 flex justify-end cursor-pointer"
        @click="toggleGreeting"
        v-if="!displayHello"
      >
        <img src="../assets/img/app.png" alt="menu" class="w-full h-full" />
      </div>
    </div>
    <ul
      class="nav"
      :class="{
        hidden: !displayHello,
        'flex flex-col fixed  cursor-pointer text-[white] py-6 px-8 md:px-14 z-[100] ': displayHello,
      }"
    >
      <div v-if="!displayHello" class="hidden"></div>
      <div
        class="w-4 h-4 self-end cursor-pointer"
        @click="toggleGreeting"
        v-else
      >
        <img
          src="../assets/img/closed.png"
          alt="menu"
          class="w-full h-full self-end rotate"
        />
      </div>

     <div class="w-full flex flex-col items-center">
        <div class="md:w-[1300px] max-w-full">
        <div class="hidden md:flex mt-4 md:mt-16 ">
        <div class="w-full -rotate-6">
          <img
            src="../assets/img/articles/fingerprint.jpg"
            alt="menu"
            class="w-full h-full"
          />
        </div>
        <div class="w-full ml-8 rotate-3">
          <img
            src="../assets/img/ecomm/ecomm1.png"
            alt="menu"
            class="w-full h-full"
          />
        </div>
        <div class="w-full -rotate-6">
          <img
            src="../assets/img/ownage/ownage3.png"
            alt="menu"
            class="w-full h-full"
          />
        </div>
        <div class="w-full ml-8 rotate-3">
          <img
            src="../assets/img/tfs/tfs4.png"
            alt="menu"
            class="w-full h-full"
          />
        </div>
      </div>

      <div
        class="card-details bg-opacity-90 max-w-full w-full pb-1 mt-6 md:mt-12"
      >
        <router-link to="/about">
          <div
            class="cards-background cursor-pointer flex h-[132px] md:h-44 card items-center rounded-lg text-[#FFF] p-12 text-xl md:text-2xl font-[700] gap-4"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <div class="w-10 md:w-14">
              <img
                src="@/assets/img/about-img.png"
                class="w-full h-full"
                alt=""
              />
            </div>

            <p>ABOUT ME</p>
          </div>
        </router-link>
        <router-link to="/experience">
          <div
            class="cards-background cursor-pointer flex h-[132px] md:h-44 card items-center rounded-lg text-[#FFF] p-12 text-xl md:text-2xl font-[700] gap-4"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <div class="w-10 md:w-14">
              <img src="@/assets/img/stars.png" class="w-full h-full" alt="" />
            </div>
            <p>EXPERIENCE</p>
          </div>
        </router-link>
        <router-link to="/projects">
          <div
            class="cards-background cursor-pointer flex h-[132px] md:h-44 card items-center rounded-lg text-[#FFF] p-12 text-xl md:text-2xl font-[700] gap-4"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <div class="w-10 md:w-14">
              <img src="@/assets/img/idea.png" class="w-full h-full" alt="" />
            </div>
            <p>PROJECTS</p>
          </div>
        </router-link>

        <router-link to="/articles">
          <div
            class="cards-background cursor-pointer flex h-[132px] md:h-44 card items-center rounded-lg text-[#FFF] p-12 text-xl md:text-2xl font-[700] gap-4"
            data-aos="fade-down"
            data-aos-duration="2500"
          >
            <div class="w-10 md:w-14">
              <img src="@/assets/img/note.png" class="w-full h-full" alt="" />
            </div>
            <p>ARTICLES</p>
          </div>
        </router-link>
        <router-link to="/contact">
          <div
            class="cards-background cursor-pointer flex h-[132px] md:h-44 card items-center rounded-lg text-[#FFF] p-12 text-xl md:text-2xl font-[700] gap-4"
            data-aos="fade-down"
            data-aos-duration="2500"
          >
            <div class="w-10 md:w-14">
              <img
                src="@/assets/img/contacts.png"
                class="w-full h-full"
                alt=""
              />
            </div>
            <p>CONTACT ME</p>
          </div>
        </router-link>
        <router-link to="/resume">
          <div
            class="flex cursor-pointer h-[132px] md:h-44 card items-center rounded-lg bg-opacity-30 bg-[#00000013] backdrop-blur-lg shadow-xl text-[#FFF] p-12 text-xl md:text-2xl font-[700] gap-4"
            data-aos="fade-down"
            data-aos-duration="2500"
          >
            <div class="w-10 md:w-14">
              <img
                src="@/assets/img/resume-img.png"
                class="w-full h-full"
                alt=""
              />
            </div>
            <p>MY RESUME</p>
          </div>
        </router-link>
      </div>
      </div>
     </div>
    </ul>
  </div>
</template>

<style scoped>
.active-link {
  border-bottom: 4px solid #fff;
  padding-bottom: 4px;
  color: white;
  background: transparent !important;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.active-link .text-gradient {
  color: white !important;
  background: transparent !important;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: white;
}
.nav {
  height: 100vh;
  width: 100%;
  justify-content: flex-start;
  z-index: 1000;
  border: 1px solid #ffffff60;
  /* background: linear-gradient(111deg, rgb(0 0 0) 1.21%, rgba(0, 0, 0, 0.02) 100%); */
  -webkit-backdrop-filter: blur(35px);
  background-size: cover;
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  animation: openNav 0.7s;
  background: #101011b0;
  overflow: scroll;
}

.text-gradient {
  color: black !important;
  background: transparent !important;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: white;
}

.active-link {
  border-bottom: none;
}
.card-details {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
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

.card {
  background: url("");
  background-size: cover;
  box-shadow: 0 2px 2px 0px black;
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
@keyframes openNav {
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0);
  }
}
</style>

<script>
import AboutCarousel from "../components/Carousel/AboutCarousel.vue";

export default {
  components: {
    AboutCarousel,
  },
  data() {
    return {
      displayHello: false,
    };
  },
  methods: {
    toggleGreeting() {
      this.displayHello = !this.displayHello;
    },
  },
};
</script>
