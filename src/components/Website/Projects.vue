<template>
    <div class="project-background md:py-10 pb-10">
        <div class="">
            <Navbar />

        </div>
        <div class=" mx-5 md:mx-20">
            <div class="text-[40px] text-white w-full max-w-full md:w-[1200px] flex items-center pb-4">
                <div class=" mt-12">
                    <p class="text-2xl md:text-3xl text-white font-[800]">PROJECTS</p>
                    <div class="line h-1 w-[200px] mt-3 md:mt-5">
                    </div>

                </div>
            </div>
            <div>
                <div class="experience-bg flex justify-between w-full max-w-full  md:w-[700px] cursor-pointer mt-4">
                    <div v-for="category in  categories " :key="category" @click="filterStack(category)"
                        :class="{ active: selectedCategory === category }"
                        class="experience cursor-pointer flex py-3 text-[white] text-[12px] md:text-[18px] w-[50%] text-center px-4 justify-center ">
                        {{ category }}
                    </div>
                </div>
            </div>
            <div class="tech-list mt-8 stack-tech-li">
                <div class="stack-tech-ul stack-tech-li">
                    <div v-for="stack in filteredStack" :key="stack.id" class="stack-tech-li  stackssa">
                        <h5 class="font-bold text-xl md:text-[40px] text-white">{{
                            stack.year }}</h5>
                        <img :src="stack.url" alt="image" class="h-full  md:h-[270px] max-h-full w-full rounded-xl mt-5" />
                        <div class="pt-4 flex justify-between items-center">
                            <a :href="stack.link" target="_blank">
                                <p class="text-[white] font-bold text-[12px] md:text-lg">Visit {{ stack.company }}</p>

                            </a>
                            <p class="about-text mb-2 cursor-pointer">
                                <ProjectModal :itemProps="stack.company" :itemDescription="stack.description"
                                    :itemTechnologies="stack.technologies" :itemLibraries="stack.libraries"
                                    :itemImages="stack.images" :itemLinks="stack.link" />
                            </p>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

  
<script>

import ownage from '@/assets/img/ownage.png'
import hmgls from '@/assets/img/hmgls.png'
import abitto from '@/assets/img/abitto.png'
import movie from '@/assets/img/movie.png'
import ecomm from '@/assets/img/ecomm.png'
import pods from '@/assets/img/pods1.png'
import tfs from '@/assets/img/tfs.png'
import ProjectModal from '../Modal/ProjectModal.vue'
import Navbar from '../Navbar.vue'
import home from '../../assets/img/port/home.png'
import contact from '../../assets/img/port/contact.png'
import about from '../../assets/img/port/about.png'
import experience from '../../assets/img/port/experience.png'
import resume from '../../assets/img/port/resume.png'
import ssv1 from '../../assets/img/ssv/ssv1.png'
import ssv2 from '../../assets/img/ssv/ssv2.png'
import ssv3 from '../../assets/img/ssv/ssv3.png'
import ssv4 from '../../assets/img/ssv/ssv4.png'
import ssv5 from '../../assets/img/ssv/ssv5.png'
import ownage1 from '../../assets/img/ownage/ownage1.png'
import ownage2 from '../../assets/img/ownage/ownage2.png'
import ownage3 from '../../assets/img/ownage/ownage3.png'
import ownage4 from '../../assets/img/ownage/ownage4.png'
import ownage5 from '../../assets/img/ownage/ownage5.png'
import tfs1 from '../../assets/img/tfs/tfs1.png'
import tfs2 from '../../assets/img/tfs/tfs2.png'
import tfs3 from '../../assets/img/tfs/tfs3.png'
import tfs4 from '../../assets/img/tfs/tfs4.png'
import tfs5 from '../../assets/img/tfs/tfs5.png'
import hmgl1 from '../../assets/img/hmgl/hmgl1.png'
import hmgl2 from '../../assets/img/hmgl/hmgl2.png'
import hmgl3 from '../../assets/img/hmgl/hmgl3.png'
import hmgl4 from '../../assets/img/hmgl/hmgl4.png'
import hmgl5 from '../../assets/img/hmgl/hmgl5.png'
import ecomm1 from '../../assets/img/ecomm/ecomm1.png'
import ecomm2 from '../../assets/img/ecomm/ecomm2.png'
import ecomm3 from '../../assets/img/ecomm/ecomm3.png'
import ecomm4 from '../../assets/img/ecomm/ecomm4.png'
import ecomm5 from '../../assets/img/ecomm/ecomm5.png'
import ecomm6 from '../../assets/img/ecomm/ecomm6.png'
import movie1 from '../../assets/img/movie/movie1.png'
import movie2 from '../../assets/img/movie/movie2.png'
import movie3 from '../../assets/img/movie/movie3.png'
import movie4 from '../../assets/img/movie/movie4.png'
import movie5 from '../../assets/img/movie/movie5.png'
import pods1 from '../../assets/img/pods/pods1.png'
import pods2 from '../../assets/img/pods/pods2.png'
import pods3 from '../../assets/img/pods/pods3.png'
import pods4 from '../../assets/img/pods/pods4.png'
import pods5 from '../../assets/img/pods/pods5.png'




export default {
    components: {
        ProjectModal,
        Navbar
    },

    data() {
        return {
            stacks: [
                {
                    id: 1,
                    name: 'I am a natural team worker and adaptable to all challenging situations categoryOther Professional Experiences', category: 'Professional Projects',
                    year: '2023',
                    company: 'Ownage Fiditech',
                    jobDescription: 'Web developer',
                    url: ownage,
                    description: 'Designed the official website for Ownage Fiditech web development company. Designed and built a modern, responsive online platform showcasing our services and expertise. Utilized current web technologies to create a user-friendly interface that effectively communicated our brand identity and capabilities and also ensuring SEO for the website',
                    link: 'https://ownagefiditech.com/',
                    technologies:
                        [
                            "HTML",
                            "CSS",
                            "Vue.js",
                            "Vite",
                            "Sitemap"
                        ],
                    libraries: [
                        "Element Plus",
                        "Animate on scroll",
                        "Vue3 marquee",
                        "Vue3 carousel"
                    ], images: [
                        ownage5, ownage1, ownage2, ownage3, ownage4
                    ],
                },
                {
                    id: 1,
                    name: 'I am a natural team worker and adaptable to all challenging situations categoryProfessional Projects',
                    category: 'Professional Projects',
                    year: '2023',
                    company: 'Secret Share Vault',
                    jobDescription: 'Web developer',
                    url: abitto, description: 'I  constructed the complete website using Vue.js, Element plus, Tailwind css etc. ensuring responsiveness on all screens and a smooth user experience. Additionally, I collaborated with experienced front-end engineers in the development of the web application segment, ensuring its integration for secure information sharing. ',
                    link: "https://ssv-client-pyuam.ondigitalocean.app/",
                    technologies:
                        [
                            "HTML",
                            "CSS",
                            "Tailwind css",
                            "Vue.js",
                            "Vite",
                            "TypeScript",
                            "Vue Composition Api"
                        ],
                    libraries: [
                        "Element plus",
                        "Vue3 Google Signin",
                        "Pinia Stores",
                        'Github Signing'
                    ], images: [
                        ssv2, ssv1, ssv3, ssv4, ssv5
                    ]

                },
                {
                    id: 1,
                    name: '.',
                    category: 'Professional Projects',
                    year: '2023',
                    company: 'TRY TFS',
                    jobDescription: 'Web developer',
                    url: tfs,
                    description: 'I  contributed in the development of the website using Vue.js ensuring responsiveness on all screens and a smooth user experience. Additionally, I collaborated with experienced front-end engineers in the development of the web application segment, ensuring its integration for smooth sharing of files and documents.',
                    link: 'https://trytfs.com/',

                    technologies:
                        [
                            "HTML",
                            "CSS",
                            "Tailwind css",
                            "Vue.js",
                            "Vite",
                            "Typescript"
                        ],
                    libraries: [
                        "Element plus",
                        "libphonenumber-js",
                        "Google Signing",
                        "CryptoJs",
                        "MaxUi"

                    ], images: [
                        tfs2, tfs1, tfs3, tfs4, tfs5

                    ]

                },
                {
                    id: 1,
                    name: 'I am a natural team worker and adaptable to all challenging situations categoryProfessional Projects', category: 'Professional Projects', year: '2023',
                    company: 'HMGL Global',
                    jobDescription: 'Web developer',
                    url: hmgls,
                    description: 'Championed the development and launch of a study-abroad platform. Led a complete project by conceptualizing and executing a user-centric website, facilitating seamless access to study abroad opportunities. Employed strategic design and technology integration. ',
                    link: "https://hosematchless.com/",
                    technologies:
                        [
                            "HTML",
                            "CSS",
                            "Tailwind css",
                            "Vue.js",
                            "Vite"
                        ],
                    libraries: [
                        "Element plus",
                        "Animate on scroll",
                        "Vue3 marquee",
                        "Vue3 carousel"
                    ], images: [
                        hmgl2, hmgl1, hmgl3, hmgl4, hmgl5

                    ]

                },




                {
                    id: 6,
                    name: 'I am a natural team worker and adaptable to all challenging situations categoryOther Professional Experiences', category: 'Personal Projects',
                    year: '2023',
                    company: 'Pearl',
                    jobDescription: 'Ecomm Project',
                    url: ecomm,
                    description: 'Developed a comprehensive e-commerce clothing application featuring a user-friendly interface and seamless browsing experience. Implemented essential functionalities such as product browsing, selection, and shopping cart management. Employed  technologies to ensure optimal performance and scalability."',
                    technologies:
                        [
                            "HTML",
                            "CSS",
                            "Tailwind css",
                            "React",

                        ],
                    libraries: [
                        "Material ui",
                        "Animate on scroll",
                        "Vue3 marquee",
                        "Vue3 carousel"
                    ], images: [
                        ecomm2, ecomm1, ecomm3, ecomm4, ecomm5, ecomm6

                    ]

                },
                {
                    id: 1,
                    name: 'I am a natural team worker and adaptable to all challenging situations categoryPersonal Projects',
                    category: 'Personal Projects',
                    year: '2023',
                    company: 'Movie App',
                    jobDescription: 'Movie App',
                    url: movie, description: 'Engineered a comprehensive movie details application providing users with access to a vast database of films. Implemented functionalities for users to browse, search, and explore detailed information about movies, including cast, crew, synopses, and reviews. Utilized intuitive design principles to enhance user experience and integrated APIs to fetch real-time data. Ensured seamless navigation and efficient data presentation to deliver an engaging movie exploration platform.',
                    technologies:
                        [
                            "HTML",
                            "CSS",
                            "Tailwind css",
                            "React.js",
                            "Pagination",
                            "Moive APi",
                            "SearchBox"
                        ],
                    libraries: [
                        "Material UI",
                        "Loader",

                    ], images: [
                        movie2, movie1, movie3, movie4, movie5

                    ]

                },
                {
                    id: 1,
                    name: 'I am a natural team worker and adaptable to all challenging situations categoryPersonal Projects',
                    category: 'Personal Projects',
                    year: '2023',
                    company: 'Portfolio',
                    jobDescription: 'Web developer',
                    url: home,
                    description: 'This is where design meets functionality. Welcome to my portfolio—a showcase of carefully crafted web designs aimed at enhancing user experiences. Each project represents a blend of creativity and practicality, meticulously designed to engage and delight visitors. Explore a collection of projects that prioritize intuitive interfaces and seamless navigation. From concept to execution, my focus remains on delivering web experiences that are not just visually appealing but also user-friendly.',
                    technologies:
                        [
                            "HTML",
                            "CSS",
                            "Tailwind css",
                            "Vue.js",
                            "Vite"
                        ],
                    libraries: [
                        "Element plus",
                    ], images: [
                        home, contact, about, experience, resume
                    ]

                },
                {
                    id: 1,
                    name: 'I am a natural team worker and adaptable to all challenging situations categoryPersonal Projects',
                    category: 'Personal Projects',
                    year: '2023',
                    company: 'Pod Arts',
                    jobDescription: 'Web developer',
                    url: pods,
                    description: 'Crafted a compelling landing page tailored for podcast transcribers, providing a streamlined gateway to transcription services. Designed an impactful and concise interface that immediately communicates the benefits and services offered to potential users. Implemented a user-centric design, focusing on clear call-to-action elements to encourage engagement and conversion.',
                    technologies:
                        [
                            "HTML",
                            "CSS",
                            "Tailwind css",
                            "Vue.js",
                            "Vite"
                        ],
                    libraries: [
                        "Element plus",
                        "Animate on scroll",

                    ], images: [
                        pods2, pods1, pods3, pods4, pods5

                    ]

                },
            ],
            selectedCategory: 'Professional Projects',
            categories: ['Professional Projects', 'Personal Projects'],
        };
    },
    computed: {
        filteredStack() {
            if (this.selectedCategory === 'all') {
                return this.stacks;
            } else {
                return this.stacks.filter(stack => stack.category === this.selectedCategory);
            }
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
.active {
    background: linear-gradient(122deg, #FFF 30.71%, #505356 153.64%);
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
    background: linear-gradient(111deg, #ffffff00 1.21%, rgba(19, 0, 0, 0.02) 100%);
    backdrop-filter: blur(15px);
    border: 0.8px solid rgba(214, 251, 252, 0.06);
    padding: 0 12px;
    align-items: center;
}

.stack-tech-ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
}

.stackssa {
    border-radius: 16px;
    border: 3px solid rgba(62, 62, 62, 0.086);
    background: linear-gradient(65deg, #181818 4.18% #181818 116.91%);
    padding: 10px 20px;
}

.text-grad {
    background: linear-gradient(169deg, #505356 8.16%, #fff 150.61%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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