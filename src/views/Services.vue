<template>
  <div class="project-background md:py-10 pb-10">
    <div class="">
      <Navbar />
    </div>
    <div class="w-full flex flex-col items-center justify-center">
      <div class="w-full max-w-full md:w-[1500px]">
        <div class="mx-5 md:mx-20">
          <div
            class="text-[40px] text-white w-full max-w-full md:w-[1200px] flex items-center pb-4"
          >
            <div class="mt-12">
              <p class="text-2xl md:text-3xl text-white font-[800]">ARTICLES</p>
              <div class="line h-1 w-[200px] mt-3 md:mt-5"></div>
            </div>
          </div>

          <div class="tech-list mt-8 stack-tech-li w-full">
            <div class="stack-tech-ul stack-tech-li">
              <div
                v-for="stack in stacks"
                :key="stack.id"
                class="stack-tech-li project-card p-10"
              >
                <el-skeleton v-if="isLoading" style="width: 100%" animated>
                  <template #template>
                    <el-skeleton-item variant="text" style="width: 30%" />
                    <el-skeleton-item
                      variant="image"
                      style="
                        width: 100%;
                        height: 250px;
                        margin-top: 8px;
                        border-radius: 12px;
                      "
                    />
                    <div style="margin-top: 14px">
                      <el-skeleton-item variant="text" style="width: 60%" />
                      <div
                        style="
                          display: flex;
                          align-items: center;
                          justify-content: space-between;
                        "
                      >
                        <el-skeleton-item variant="text" style="width: 30%" />
                      </div>
                    </div>
                  </template>
                </el-skeleton>
                <div v-else>
                  <p
                    class="text-[white] font-[900] text-sm md:text-xl text-grad"
                  >
                    {{ stack.article }}
                  </p>
                  <div class="w-full h-fit">
                    <img
                      :src="stack.url"
                      alt="stack"
                      class="h-full w-full max-h-full rounded-xl mt-5"
                    />
                  </div>

                  <div class="pt-2 flex justify-between items-center">
                    <a :href="stack.link" target="_blank">
                      <p
                        class="text-[white] font-bold text-[10px] md:text-lg cursor-pointer"
                      >
                        Read article
                      </p>
                    </a>
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
import hooks from "@/assets/img/articles/react-hooks.png";
import com from "@/assets/img/articles/coms.png";
import fingerprint from "@/assets/img/articles/fingerprint.jpg";
import aos from "@/assets/img/articles/aos.png";
import jsx from "@/assets/img/articles/jsx.jpg";
import dom from "@/assets/img/articles/dom.png";
import table from "@/assets/img/articles/table.png";

export default {
  components: {
    Navbar,
  },
  mounted() {
    setTimeout(() => {
      this.filteredStack = [];
      this.isLoading = false;
    }, 2500);
  },

  data() {
    return {
      isLoading: true,
      filteredStack: [],
      stacks: [
        {
          id: 1,
          url: dom,
          link: "/dom.pdf",
          article: "Dom Demystified (PDF)",
          summary:
            "In this grand expedition, we will unravel the enigmatic world of Document Object Model (DOM)...",
        },
        {
          id: 2,
          url: jsx,
          link: "https://dev.to/pearlodi/the-html-jsx-fusion-1dmc",
          article: "The HTML - JSX Fusion",
          summary:
            "JavaScript Extensible Markup Language (JSX) is the fusion point where HTMLs structure collides with JavaScript dynamic capabilities.",
        },
        {
          id: 3,
          url: hooks,
          link: "https://dev.to/pearlodi/react-hooks-hal/edit",
          article: "React Hooks",
          summary:
            "Okay, so you know how in React, we previously talked about these things called components right? They are like building blocks for our website. Now, think of React Hooks as special tools that make it easier to do certain things with these components. ",
        },

        {
          id: 4,
          url: com,
          link: "https://dev.to/pearlodi/react-components-3oa2",
          article: "React Components",
          summary:
            "In React, components are like building blocks of a webpage. They are small, reusable pieces of code that handle specific tasks.",
        },
        {
          id: 5,
          url: fingerprint,
          link: "https://hackmd.io/@df7sz_q6Qq-knDEpnb3K_Q/S1f1pjChp",
          article: "Browser Fingerprinting",
          summary:
            "Think of browser fingerprinting as cookies, but on steriods – it is like the upgraded, super version! While cookies are the old school way of tracking you",
        },
        {
          id: 6,
          url: table,
          link: "https://pearlblogs.hashnode.dev/preview/65d47339394d92f7e4b39b51",
          article: "Crafting dynamic tables",
          summary:
            "Tables are the backbone of web development, organizing data for seamless user interaction. Yet, creating feature-rich tables with can be daunting, especially for newcomers.",
        },
        {
          id: 7,
          url: aos,
          link: "https://hackmd.io/@df7sz_q6Qq-knDEpnb3K_Q/Sk26-Fynp",
          article: "Animate on scoll",
          summary:
            "User experience plays a crucial role in web development today. One way to make your web applications more visually appealing is through the use of animations which can enhance user engagement.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.active {
  background: linear-gradient(122deg, #fff 30.71%, #505356 153.64%);
  color: black;
  border-radius: 16px;
  text-align: center;
  padding: 6px;
  font-weight: 600;
}
.stack-tech-li {
  align-items: center;
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
}
.stack-tech-ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
