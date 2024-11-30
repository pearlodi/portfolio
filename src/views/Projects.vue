<template>
  <div class="project-background md:pt-4 md:pb-20 pb-10">
    <div class="">
      <Navbar />
    </div>
    <div class="w-full max-w-full flex flex-col items-center justify-center">
      <div class="w-full max-w-full md:w-[1600px]">
        <div class="mx-5 md:mx-20">
          <div
            class="text-[40px] text-white w-full max-w-full md:w-[1200px] flex items-center pb-4"
          >
            <div class="mt-12">
              <p class="text-2xl md:text-3xl text-white font-[800]">PROJECTS</p>
              <div class="line h-1 w-[200px] mt-3 md:mt-5"></div>
            </div>
          </div>
          <el-tabs
            v-model="selectedCategory"
            id="tabs"
            class="experience-bg flex justify-between w-full max-w-full md:w-[700px] cursor-pointer mt-4"
          >
            <el-tab-pane
              v-for="category in categories"
              :key="category"
              :label="category"
              :name="category"
              class="experience cursor-pointer flex py-3 text-[12px] md:text-[18px] w-[50%] text-center justify-center"
            >
            </el-tab-pane>
          </el-tabs>

          <div class="tech-list mt-8 stack-tech-li">
            <div class="stack-tech-ul stack-tech-li">
              <div
                v-for="stack in filteredStack"
                :key="stack.id"
                class="stack-tech-li project-card p-10"
              >
                <el-skeleton v-if="isLoading" style="width: 100%" animated>
                  <template #template>
                    <el-skeleton-item
                      variant="image"
                      style="width: 100%; height: 250px; border-radius: 12px"
                    />
                    <div style="margin-top: 14px">
                      <div
                        style="
                          display: flex;
                          align-items: center;
                          justify-content: space-between;
                        "
                      >
                        <el-skeleton-item variant="text" style="width: 30%" />
                        <el-skeleton-item variant="text" style="width: 30%" />
                      </div>
                    </div>
                  </template>
                </el-skeleton>
                <div v-else>
                  <a :href="stack.link" target="_blank">
                    <img
                      :src="stack.url"
                      alt="stack"
                      class="h-full w-full rounded-xl mt-5"
                      loading="lazy"
                  /></a>
                  <div class="pt-4 flex justify-between items-center">
                    <a :href="stack.link" target="_blank">
                      <p
                        class="text-[white] font-bold text-[12px] md:text-lg cursor-pointer"
                      >
                        Visit {{ stack.company }}
                      </p>
                    </a>
                    <div class="flex items-center">
                      <p class="about-text mb-2 cursor-pointer">
                        <ProjectModal
                          :itemProps="stack.company"
                          :itemDescription="stack.description"
                          :itemTechnologies="stack.technologies"
                          :itemLibraries="stack.libraries"
                          :itemImages="stack.images"
                          :itemLinks="stack.link"
                        />
                      </p>
                      <div class="w-5">
                        <img
                          src="../assets/img/bells.png"
                          class="bell w-full"
                          alt="bell"
                        />
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

<script>
import ownage from "@/assets/img/ownage/ownage4.jpg";
import hmgls from "@/assets/img/hmgls.png";
import abitto from "@/assets/img/ssv/ssv3.png";
import movie from "@/assets/img/movie.png";
import ecomm from "@/assets/img/ecomm.png";
import pods from "@/assets/img/pods1.png";
import tfs from "@/assets/img/tfs/tfs9w.png";
import ProjectModal from "@/components/Modal/ProjectModal.vue";
import Navbar from "@/components/Navbar.vue";
import home from "@/assets/img/port/home.png";
import contact from "@/assets/img/port/contact.png";
import about from "@/assets/img/port/about.png";
import experience from "@/assets/img/port/experience.png";
import resume from "@/assets/img/port/resume.png";
import ssv1 from "@/assets/img/ssv/ssv1.png";
import ssv2 from "@/assets/img/ssv/ssv2.png";
import ssv3 from "@/assets/img/ssv/ssv3.png";
import ssv4 from "@/assets/img/ssv/ssv4.png";
import ssv5 from "@/assets/img/ssv/ssv5.png";
import ssv6 from "@/assets/img/ssv/ssv6.png";
import ownage1 from "@/assets/img/ownage/ownage1.png";
import ownage2 from "@/assets/img/ownage/ownage2.png";
import ownage3 from "@/assets/img/ownage/ownage3.png";
import ownage4 from "@/assets/img/ownage/ownage4.jpg";
import ownage5 from "@/assets/img/ownage/ownage5.png";
import tfs1 from "@/assets/img/tfs/tfs1.png";
import tfs2 from "@/assets/img/tfs/tfs2.png";
import tfs3 from "@/assets/img/tfs/tfs3.png";
import tfs4 from "@/assets/img/tfs/tfs4.png";
import tfs5 from "@/assets/img/tfs/tfs5.png";
import hmgl1 from "@/assets/img/hmgl/hmgl1.png";
import hmgl2 from "@/assets/img/hmgl/hmgl2.png";
import hmgl3 from "@/assets/img/hmgl/hmgl3.png";
import hmgl4 from "@/assets/img/hmgl/hmgl4.png";
import hmgl5 from "@/assets/img/hmgl/hmgl5.png";
import ecomm1 from "@/assets/img/ecomm/ecomm1.png";
import ecomm2 from "@/assets/img/ecomm/ecomm2.png";
import ecomm3 from "@/assets/img/ecomm/ecomm3.png";
import ecomm4 from "@/assets/img/ecomm/ecomm4.png";
import ecomm5 from "@/assets/img/ecomm/ecomm5.png";
import ecomm6 from "@/assets/img/ecomm/ecomm6.png";
import movie1 from "@/assets/img/movie/movie1.png";
import movie2 from "@/assets/img/movie/movie2.png";
import movie3 from "@/assets/img/movie/movie3.png";
import movie4 from "@/assets/img/movie/movie4.png";
import movie5 from "@/assets/img/movie/movie5.png";
import zeta1 from "@/assets/img/zeta/zeta1.png";
import zeta2 from "@/assets/img/zeta/zeta2.png";
import zeta3 from "@/assets/img/zeta/zeta3.png";
import zeta4 from "@/assets/img/zeta/zeat4.png";
import zeta5 from "@/assets/img/zeta/zeta5.png";

export default {
  components: {
    ProjectModal,
    Navbar,
  },

  data() {
    return {
      isLoading: true,
      stacks: [
   
       
        {
          id: 1,
          name: "I am a natural team worker and adaptable to all challenging situations categoryReact Projects",
          category: "React Projects",
          year: "2023",
          company: "Data hub",
          jobDescription: "Web developer",
          url: abitto,
          description:
            "I developed the data visualization and Analysis application using React and TypeScript, enabling users to upload, edit, and delete Excel files. The Application also allows users to Visualize data using charts and also analyse data using An AI data analysis tool. Additionally, users can create new tables, manually enter data for visualization, and use settings to customize their chart results. The application ensures a seamless and responsive user experience across all devices, with features for real-time data manipulation, Analysis and visualization.",
          link: "https://data-hubz.netlify.app/",
          technologies: [
            "HTML",
            "CSS",
            "Tailwind css",
            "React",
            "TypeScript",
            "Redux",
          ],
          libraries: [
            "Chart.js",
            "Material ui",
            "groq SDK",
            "XLSX",
            "UUID",
            "React DnD",
            "Echarts for react",
          ],
          images: [ssv2,ssv6, ssv1, ssv3, ssv4, ssv5],
        },
        {
          id: 1,
          name: ".",
          category: "React Projects",
          year: "2023",
          company: "Task Buddy",
          jobDescription: "Web developer",
          url: tfs,
          description:
            "I developed the task management application using React, featuring a calendar for task scheduling, real-time task visualization using Chart js, a color picker for design enhancement, and moveable cards for easy task organization. Additionally, I ensured the application's responsiveness across all devices.",
          link: "https://task-budy.netlify.app/",

          technologies: [
            "HTML",
            "CSS",
            "Tailwind css",
            "React",
            "Redux",
            "Typescript",
            
          ],
          libraries: [
            "Material UI",
            "Chart Js",
            "React Beautiful DnD",
            "React big calendar",
            "MaxUi",
          ],
          images: [tfs2, tfs1, tfs3, tfs4, tfs5],
        },
       
        {
          id: 1,
          name: ".",
          category: "React Projects",
          year: "2023",
          company: "Zetabrent",
          jobDescription: "Web developer",
          url: zeta2,
          description:
            "I created the Zetabrent Education website for a client to showcase their educational products on a global scale. Using React, JavaScript, Material UI, and Tailwind CSS, I built a responsive and easy-to-navigate platform that offers a great user experience across devices. This project allowed me to blend modern design with practical functionality, and I'm proud of how it came together to meet the client's needs",
          link: "https://zetabrenteducation.com/",

          technologies: [
            "HTML",
            "CSS",
            "Tailwind css",
            "React",
            "Redux",
            
          ],
          libraries: [
            "Material UI",
            "Formik",
            "Framer Motion",
            "React fast marquee",
            "React slick",
            "Yup",
          ],
          images: [zeta2, zeta1, zeta3, zeta4, zeta5],
        },

        {
          id: 6,
          name: "I am a natural team worker and adaptable to all challenging situations categoryOther React Experiences",
          category: "React Projects",
          year: "2023",
          company: "Pearlline",
          jobDescription: "Ecomm Project",
          url: ecomm,
          link: "https://pearlline.netlify.app/",
          description:
            'Developed a comprehensive e-commerce clothing application featuring a user-friendly interface and seamless browsing experience. Implemented essential functionalities such as product browsing, selection, and shopping cart management. Employed  technologies to ensure optimal performance and scalability."',
          technologies: ["HTML", "CSS", "Tailwind css", "React"],
          libraries: [
            "Material ui",
            "Animate on scroll",
            "Vue3 marquee",
            "Vue3 carousel",
          ],
          images: [ecomm2, ecomm1, ecomm3, ecomm4, ecomm5, ecomm6],
        },

        {
          id: 1,
          name: "I am a natural team worker and adaptable to all challenging situations categoryReact Projects",
          category: "Vue Projects",
          year: "2023",
          company: "HMGL Global",
          jobDescription: "Web developer",
          url: hmgls,
          description:
            "Championed the development and launch of a study-abroad platform. Led a complete project by conceptualizing and executing a user-centric website, facilitating seamless access to study abroad opportunities. Employed strategic design and technology integration. ",
          link: "https://hosematchless.com/",
          technologies: ["HTML", "CSS", "Tailwind css", "Vue.js", "Vite"],
          libraries: [
            "Element plus",
            "Animate on scroll",
            "Vue3 marquee",
            "Vue3 carousel",
          ],
          images: [hmgl2, hmgl1, hmgl3, hmgl4, hmgl5],
        },
        {
          id: 1,
          name: "I am a natural team worker and adaptable to all challenging situations categoryVue Projects",
          category: "Vue Projects",
          year: "2023",
          company: "Movie App",
          jobDescription: "Movie App",
          link: "https://moviefusion.netlify.app/",
          url: movie,
          description:
            "Engineered a comprehensive movie details application providing users with access to a vast database of films. Implemented functionalities for users to browse, search, and explore detailed information about movies, including cast, crew, synopses, and reviews. Utilized intuitive design principles to enhance user experience and integrated APIs to fetch real-time data. Ensured seamless navigation and efficient data presentation to deliver an engaging movie exploration platform.",
          technologies: [
            "HTML",
            "CSS",
            "Tailwind css",
            "React.js",
            "Pagination",
            "Moive APi",
            "SearchBox",
          ],
          libraries: ["Material UI", "Loader"],
          images: [movie2, movie1, movie3, movie4, movie5],
        },
        {
          id: 1,
          name: "I am a natural team worker and adaptable to all challenging situations categoryVue Projects",
          category: "Vue Projects",
          year: "2023",
          company: "Portfolio",
          jobDescription: "Web developer",
          url: home,
          link: "https://pearlportfolio.netlify.app/",
          description:
            "This is where design meets functionality. Welcome to my portfolio—a showcase of carefully crafted web designs aimed at enhancing user experiences. Each project represents a blend of creativity and practicality, meticulously designed to engage and delight visitors. Explore a collection of projects that prioritize intuitive interfaces and seamless navigation. From concept to execution, my focus remains on delivering web experiences that are not just visually appealing but also user-friendly.",
          technologies: ["HTML", "CSS", "Tailwind css", "Vue.js", "Vite"],
          libraries: ["Element plus"],
          images: [home, contact, about, experience, resume],
        },
        
        {
          id: 1,
          name: "I am a natural team worker and adaptable to all challenging situations categoryOther React Experiences",
          category: "Vue Projects",
          year: "2023",
          company: "Abitto Global",
          jobDescription: "Web developer",
          url: ownage,
          description:
            "Designed the official website for Abitto Global company. Designed and built a modern, responsive online platform showcasing our services and expertise. Utilized current web technologies to create a user-friendly interface that effectively communicated our brand identity and capabilities and also ensuring SEO for the website",
          link: "https://www.abittoglobal.com/",
          technologies: ["HTML", "CSS", "javascript"],
          libraries: [
            "Bootstrap",
            "Rev slider",
            
          ],
          images: [ownage5, ownage1, ownage2, ownage3, ownage4],
        },

        // {
        //   id: 1,
        //   name: "I am a natural team worker and adaptable to all challenging situations categoryVue Projects",
        //   category: "Vue Projects",
        //   year: "2023",
        //   company: "Pod Arts",
        //   jobDescription: "Web developer",
        //   url: pods,
        //   link: "https://podarts.netlify.app/",
        //   description:
        //     "Crafted a compelling landing page tailored for podcast transcribers, providing a streamlined gateway to transcription services. Designed an impactful and concise interface that immediately communicates the benefits and services offered to potential users. Implemented a user-centric design, focusing on clear call-to-action elements to encourage engagement and conversion.",
        //   technologies: ["HTML", "CSS", "Tailwind css", "Vue.js", "Vite"],
        //   libraries: ["Element plus", "Animate on scroll"],
        //   images: [pods2, pods1, pods3, pods4, pods5],
        // },
      ],
      selectedCategory: "React Projects",
      categories: ["React Projects", "Vue Projects"],
    };
  },
  computed: {
    filteredStack() {
      if (this.selectedCategory === "all") {
        return this.stacks;
      } else {
        return this.stacks.filter(
          (stack) => stack.category === this.selectedCategory
        );
      }
    },
  },
  methods: {
    filterStack(category) {
      this.selectedCategory = category;
    },
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 800);
  },
};
</script>

<style scoped>
#tabs {
  padding: 8px;
}
.active {
  background: linear-gradient(122deg, #fff 30.71%, #505356 153.64%);
  color: black;
  border-radius: 16px;
  text-align: center;
  padding: 6px;
  font-weight: 600;
}
@keyframes ring {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(15deg);
  }
  30% {
    transform: rotate(-15deg);
  }
  40% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(-10deg);
  }
  70% {
    transform: rotate(5deg);
  }
  90% {
    transform: rotate(-5deg);
  }
}
.stack-tech-li {
  align-items: center;
}
.bell {
  animation: ring 2s infinite;
}
.experience-bg {
  border-radius: 16px;
  background: linear-gradient(
    111deg,
    #ffffff00 1.21%,
    rgba(19, 0, 0, 0.02) 100%
  );
  backdrop-filter: blur(15px);
  border: 0.8px solid rgba(214, 251, 252, 0.06);
  padding: 0 12px;
  align-items: center;
  box-shadow: 0 2px 2px 0px black;
}

.stack-tech-ul {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
}

@media (max-width: 600px) {
  .stack-tech-ul {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 30px;
  }

  .active {
    font-size: 12px;
  }
}
</style>
