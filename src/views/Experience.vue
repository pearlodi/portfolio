<template>
  <div class="md:pt-4 md:pb-20 pb-10 project-background">
    <Navbar />
    <div class="w-full flex justify-center">
      <div class="w-full max-w-full md:w-[1500px]">
        <div class="mx-5 md:mx-12">
          <div
            class="text-[40px] text-white w-full max-w-full md:w-[1200px] flex items-center pb-4"
          >
            <div class="mt-8 md:mt-16">
              <p class="text-2xl md:text-3xl text-white font-[800]">
                EXPERIENCE
              </p>
              <div class="line h-1 w-[200px] mt-3 md:mt-5"></div>
            </div>
          </div>
          <div>
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
          </div>

          <div class="tech-list mt-8 experience-li">
            <div class="experience-ul experience-li">
              <div
                v-for="stack in filteredStack"
                :key="stack.id"
                class="experience-li experiences h-full overflow-scroll"
              >
                <el-skeleton v-if="isLoading" style="width: 100%" animated>
                  <template #template>
                    <el-skeleton :rows="5" />
                  </template>
                </el-skeleton>
                <div v-else>
                  <h5
                    class="font-extrabold text-2xl md:text-[25px] mb-3 text-white"
                  >
                    {{ stack.company }}
                  </h5>
                  <p class="text-[#dededec9] font-extrabold">
                    {{ stack.year }}
                  </p>
                  <p class="mb-6 text-[#dededec9] font-medium">
                    {{ stack.jobDescription }}
                  </p>

                  <div v-if="stack.imgs" class="flex items-center gap-4">
                    <div
                      v-for="(img, imgIndex) in stack.imgs"
                      :key="imgIndex"
                      class="stack p-2 rounded-lg"
                    >
                      <img
                        :src="img.url"
                        alt="stack"
                        class="comp-img w-6 gap-12"
                      />
                    </div>
                  </div>
                  <div class="mt-6">
                    <div
                      v-for="(job, index) in stack.jobs"
                      :key="index"
                      class=""
                    >
                      <div class="flex items-center">
                        <div>
                          <div class="flex flex-col items-center w-[12px]">
                            <img
                              src="@/assets/img/black-circle.png"
                              class="w-full md:h-[10px]"
                              alt="circle"
                            />
                            <div
                              class="h-[30px] bg-[#ffffff1a] w-[0.5px]"
                            ></div>
                          </div>
                        </div>
                        <div>
                          <p
                            class="text-[#dededec9] ml-4 leading-[30px] font-normal text-[12px] md:text-[15px]"
                          >
                            {{ job }}
                          </p>
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


<script>
import Navbar from "@/components/Navbar.vue";
import figma from "@/assets/img/figma.png";
import react from "@/assets/img/react.png";
import vue from "@/assets/img/vue.png";
import java from "@/assets/img/java.png";
import git from "@/assets/img/git.svg";
import docker from "@/assets/img/dock.png";
export default {
  components: {
    Navbar,
  },
  mounted() {
    setTimeout(() => {
      this.filteredStack = [];
      this.isLoading = false;
    }, 500);
  },

  data() {
    return {
      isLoading: true,
      stacks: [
        {
          id: 2,
          name: "I am a natural team worker and adaptable to all challenging situations categorySoftware Engineering",
          category: "Software Engineering",
          year: "July 2023 - Mar 2024",
          company: "Ownage Fiditech",
          jobDescription: "Web developer",
          jobWork:
            "Create files for individuals thhat needs creating of the files needed",
          jobs: [
            "Developed and optimized web applications by 20% using React.js and Vue.js to ensure seamless user experiences across devices.",
            "Collaborated with UX designers and back-end developers to integrate front-end components with server-side logic via RESTful APIs.",
            "Enhanced performance through implementation of asynchronous JavaScript loading techniques, lazy-loading images, and browser caching.",
          ],
          imgs: [
            {
              url: figma,
            },
            {
              url: java,
            },
            {
              url: vue,
            },

            {
              url: react,
            },
            {
              url: git,
            },
            {
              url: docker,
            },
          ],
        },
        {
          id: 2,
          name: "I am a natural team worker and adaptable to all challenging situations categorySoftware Engineering",
          category: "Software Engineering",
          year: "May 2023 - July 2023",
          company: "WeTech Mentorship",
          jobDescription: "Web developer (Contract)",
          jobWork:
            "Create files for individuals thhat needs creating of the files needed",
          jobs: [
            "Developed responsive and optimized web applications using React.js, HTML, and CSS, contributing to a 40% improvement in user experience.",
            "Adapted quickly to new tools and frameworks, reducing development time by 20% and demonstrating a commitment to continuous learning.",
            "Incorporated mentor feedback to refine code quality and enhance user experience while actively keeping up to date with new technologies.",
          ],
          imgs: [
            {
              url: figma,
            },
            {
              url: java,
            },

            {
              url: react,
            },
            {
              url: git,
            },
          ],
        },
        {
          id: 3,
          name: "I am a natural team worker and adaptable to all challenging situations categorySoftware Engineering",
          category: "Software Engineering",
          year: "2022",
          company: "Sirinu Token",
          jobDescription: "Web developer (Contract)",
          jobWork:
            "Create files for individuals thhat needs creating of the files needed",
          jobs: [
            "Participated in performance optimization efforts, analyzing and refining code for faster load times and improved user interactivity.",
            " Developed responsive and mobile-first web applications, ensuring adaptability to various screen sizes",
          ],
          imgs: [
            {
              url: figma,
            },
            {
              url: java,
            },

            {
              url: react,
            },
            {
              url: git,
            },
          ],
        },
        {
          id: 4,
          name: "I am a natural team worker and adaptable to all challenging situations categorySoftware Engineering",
          category: "Software Engineering",
          year: "2022",
          company: "IJI Technologies",
          jobDescription: "Web developer",
          jobWork:
            "Create files for individuals thhat needs creating of the files needed",
          jobs: [
            "Designed and developed a responsive web application leveraging React.js, focusing on intuitive user interfaces and seamless navigation.",
            "Solely engineered a project UI utilizing Vue.js, ensuring optimal front-end functionality and performance",
          ],
          imgs: [
            {
              url: figma,
            },
            {
              url: java,
            },

            {
              url: git,
            },
          ],
        },

        {
          id: 5,
          name: "I am a natural team worker and adaptable to all challenging situations categoryOther Professional Experiences",
          category: "Other Experiences",
          year: "2022",
          company: "Dumo Skills Acquisition",
          jobDescription: "Computer Instructor",
          jobWork: "Create files for individuals thhat needs creating",
          jobs: [
            "Taught courses on microsoft word, microsoft excel, microsoft powerpoint, microsoft publisher, corel draw and photoshop",
            "Listened and observed students to pick up signs that students may be failing to grasp",
            "Answered questions from students and provided support to help them understand completely",
          ],
        },
        {
          id: 6,
          category: "Other Experiences",
          year: "2022",
          company: "Abitto Global Services",
          jobDescription: "Accountant & Website Administrator",
          jobWork: "Create files for individuals thhat needs creating",
          jobs: [
            "Oversaw the maintenance and updates of the companys website, ensuring accurate and uptodate information.",
            "Integrated financial data onto the website, providing insights and analysis for stakeholders.",
            "Managed and coordinated content updates, ensuring consistency and relevance across all web pages.",
          ],
        },
        {
          id: 7,
          name: "I am a natural team worker and adaptable to all challenging situations categoryOther Professional Experiences",
          category: "Other Experiences",
          year: "2020",
          company: "Royale Concept",
          jobDescription: "Computer Operatot",
          jobWork: "Create files for individuals thhat needs creating",
          jobs: [
            "Transferred data from paper formats into computer files or database systems and Updated existing databases.",
            "Created, Compiled, verified, and sorted information into spreadsheets with large number of figures.",
            "Designed various graphics such as fliers, banners, brochure, event booklets etc. Using design tools like Corel draw, Photoshop etc",
          ],
        },
        // {
        //     id: 8,
        //     name: 'I am a natural team worker and adaptable to all challenging situations categoryOther Professional Experiences',
        //     category: 'Other Experiences',
        //     year: '2021',
        //     company: 'Dumo Skills Acquisition',
        //     jobDescription: 'Computer Instructor',
        //     jobWork: 'Create files for individuals thhat needs creating', jobs: ['Established key objectives for classes and Created curriculum to accomplish set objectives', 'Organized lectures for both practical classes and oral classes and also gave assesments to test the students', 'Taught courses on microsoft word, microsoft excel, microsoft powerpoint, microsoft publisher, corel draw and photoshop']
        // },
      ],
      selectedCategory: "Software Engineering",
      categories: ["Software Engineering", "Other Experiences"],
    };
  },
  computed: {
    filteredStack() {
      return this.stacks.filter(
        (stack) => stack.category === this.selectedCategory
      );
    },
  },
  methods: {
    filterStack(category) {
      this.selectedCategory = category;
    },
  },
};
</script>

<style scoped>
#tabs {
  padding: 8px !important;
}

.active {
  background: linear-gradient(122deg, #fff 30.71%, #505356 153.64%);
  color: black;
  border-radius: 16px;
  text-align: center;
  padding: 6px;
  font-weight: 600;
}

.experience-li {
  align-items: center;
}

.stack {
  background: linear-gradient(111deg, #ffffff1a 1.21%, transparent 100%);
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
  color: #fbfbfb55;
}

.experience-ul {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.experiences {
  border-radius: 16px;
  border: 0.8px solid rgba(255, 255, 255, 0.089);
  background: linear-gradient(65deg, #181818 4.18% #181818 116.91%);
  padding: 20px;
  max-height: 100%;
}

.text-grad {
  background: linear-gradient(169deg, #505356 8.16%, #fff 150.61%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media (max-width: 600px) {
  .experience-ul {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 30px;
  }

  .active {
    font-size: 12px;
  }
}
</style>