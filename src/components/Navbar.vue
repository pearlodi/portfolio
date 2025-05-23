
<script >
import { House, BadgeInfo, Sparkles ,FolderOpenDot,NotebookPen,PhoneIncoming, FileText} from 'lucide-vue-next';

export default {
  components: {
    House,
    BadgeInfo,
    Sparkles,
    FolderOpenDot,
    NotebookPen,
    PhoneIncoming,
    FileText,
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

<template>
  <div>
    <div class="flex md:hidden justify-end">
      <div
        class="w-5 h-5 mr-4 mt-4"
        @click="toggleGreeting"
        v-if="!displayHello"
      >
        <img src="../assets/img/app.png" alt="menu" class="w-full h-full" />
      </div>
      <div v-else class=""></div>
    </div>
    <ul
      class="md:flex justify-center  p-5 nav navbar w-[90%] md:w-full"
      :class="{
        hidden: !displayHello,
        'flex flex-col fixed   text-[white] px-5': displayHello,
      }"
    >
      <div v-if="!displayHello" class="hidden"></div>
      <div class="w-3 h-3 self-end mt-8" @click="toggleGreeting" v-else>
        <img
          src="../assets/img/closed.png"
          alt="menu"
          class="w-full h-full "
        />
      </div>

      <div class="max-w-[1400px] w-[90%]">
        <div class="flex flex-col gap-3 md:gap-0 md:flex-row items-start lg:items-center justify-between cursor-pointer px-4">
          <router-link to="/" class="cursor-pointer" active-class="active-link">
            <li class="text text-md font-bold cursor-pointer mt-6 md:mt-0 flex items-center gap-1">
              <House :size="16" class="text-[white]"/>   Home
            </li>
          </router-link>
          <router-link
            to="/about"
            class="mt-4 md:mt-0 cursor-pointer"
            active-class="active-link"
          >
         <li class="text text-md font-bold cursor-pointer flex items-center gap-1">  <BadgeInfo :size="16" class="text-[white]"/> About</li>
          </router-link>
          <router-link
            to="/experience"
            class="mt-4 md:mt-0 cursor-pointer"
            active-class="active-link"
          >
            <li class="text text-md font-bold cursor-pointer flex items-center gap-1"> <Sparkles :size="16" class="text-[white]"/>Experience</li>
          </router-link>
          <router-link
            to="/projects"
            class="md:ml-8 mt-4 md:mt-0 cursor-pointer"
            active-class="active-link"
          >
            <li class="text-md text font-bold cursor-pointer flex items-center gap-1"> <FolderOpenDot :size="16" class="text-[white]"/>Projects</li>
          </router-link>
          <router-link
            to="/articles"
            class="md:ml-8 mt-4 md:mt-0 cursor-pointer"
            active-class="active-link"
          >
            <li class="text-md text font-bold cursor-pointer  flex items-center gap-1"> <NotebookPen :size="16" class="text-[white]"/>Articles</li>
          </router-link>
          <router-link
            to="/contact"
            class="md:ml-8 mt-4 md:mt-0 cursor-pointer"
            active-class="active-link"
          >
            <li class="text text-md font-bold cursor-pointer  flex items-center gap-1"> <PhoneIncoming :size="16" class="text-[white]"/>Contact</li>
          </router-link>
          <router-link
            to="/resume"
            class="md:ml-8 mt-4 md:mt-0 cursor-pointer"
            active-class="active-link"
          >
            <li class="text text-md font-bold cursor-pointer flex items-center gap-1"> <FileText :size="16" class="text-[white]"/>Resume</li>
          </router-link>
        </div>
      </div>
    </ul>
  </div>
</template>

<style scoped>
.active-link {
  position: relative;
  color: white;
  background: transparent !important;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-bottom: 5px;
  width: fit-content;
}

.text {
  background: linear-gradient(169deg, #d3d4d559 8.16%, #fff 150.61%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.navbar {
  bottom: 0;
  position: fixed;
  z-index: 50;
  border: 1px solid #ffffff60;
  background: linear-gradient(
    111deg,
    rgba(255, 255, 255, 0.14) 1.21%,
    rgba(196, 196, 196, 0.02) 100%
  );
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
  animation: openNav-4d808a77 0.5s;
  /* width:100%; */
  padding: 16px 0px 16px 0px;
}

.active-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px; /* Adjust position if needed */
  width: 100%;
  height: 4px;
  border-bottom: 4px solid #fff;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.7),
    0 0 20px rgba(255, 255, 255, 0.5);
  filter: blur(2px);
}

.active-link .text {
  color: white !important;
  background: transparent !important;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: white;
}

@media (max-width: 600px) {
  .nav {
    height: 100vh;
    justify-content: flex-start;
    z-index: 50;
    border: 1px solid #ffffff60;
    background: linear-gradient(
      111deg,
      rgba(255, 255, 255, 0.14) 1.21%,
      rgba(196, 196, 196, 0.02) 100%
    );
    -webkit-backdrop-filter: blur(15px);
    backdrop-filter: blur(15px);
    animation: openNav 0.5s;
    padding: 10px;
    padding-top: 30px;
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

  @keyframes openNav {
    0% {
      transform: translate(-100%);
    }

    100% {
      transform: translate(0);
    }
  }
}
</style>

