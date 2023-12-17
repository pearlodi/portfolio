<template>
    <div class="md:py-10 pb-10 project-background">
        <Navbar />
        <div class=" mx-5 md:mx-20">
            <div class="text-[40px] text-white w-full max-w-full md:w-[1200px] flex items-center pb-4">
                <div class="mt-8 md:mt-16">
                    <p class="text-2xl md:text-3xl text-white font-[800]">EXPERIENCE</p>
                    <div class="line h-1 w-[200px] mt-3 md:mt-5">
                    </div>
                </div>
            </div>
            <div>
                <div class="experience-bg flex justify-between w-full max-w-full  md:w-[700px] cursor-pointer mt-4">
                    <div v-for="category in  categories " :key="category" @click="filterStack(category)"
                        :class="{ active: selectedCategory === category }"
                        class="experience cursor-pointer flex py-3 text-[white] text-[12px] md:text-[18px] w-[50%] text-center px-2 md:px-4 justify-center ">
                        {{ category }}
                    </div>
                </div>
            </div>
            <div class="tech-list mt-8 experience-li">
                <div class="experience-ul experience-li">
                    <div v-for=" stack  in  filteredStack " :key="stack.id" class="experience-li  experiences">
                        <h5 class="font-bold text-2xl md:text-[40px] mb-4 text-white">{{
                            stack.year }}</h5>
                        <p class=" text-white font-extrabold">{{ stack.company }}</p>
                        <p class=" mb-6 text-gradient">{{
                            stack.jobDescription }}</p>
                        <div v-for="(job, index) in stack.jobs" :key="index" class="">
                            <div class="flex items-center">
                                <div>
                                    <div class="flex flex-col items-center w-[12px]">
                                        <img src="@/assets/img/black-circle.png" class="w-full md:h-[10px]" alt="circle" />
                                        <div class="h-[30px] bg-[#ffffff1a] w-[0.5px]"></div>
                                    </div>
                                </div>
                                <div>
                                    <p class="text-gradient ml-4 leading-[30px] font-medium text-[12px] md:text-[16px]">
                                        {{
                                            job
                                        }} </p>
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

import Navbar from '../Navbar.vue';
export default {
    components: {
        Navbar
    },
    data() {
        return {
            stacks: [
                {
                    id: 2,
                    name: 'I am a natural team worker and adaptable to all challenging situations categorySoftware Engineering',
                    category: 'Software Engineering',
                    year: '2023',
                    company: 'Ownage Fidletech',
                    jobDescription: 'Web developer (Intern)', jobWork: 'Create files for individuals thhat needs creating of the files needed',
                    jobs: [
                        'Collaborated with professionals to the design and implementation of user-centric web interfaces leveraging HTML, CSS, and JavaScript, Vue and React.', 'Executed responsive web design techniques, ensuring compatibility across various devices and browsers for optimal user accessibility', ' Demonstrated adeptness in front-end frameworks such as React.js and Vue.js, applying these technologies to enhance user interactions and functionality'
                    ]
                },
                {
                    id: 2,
                    name: 'I am a natural team worker and adaptable to all challenging situations categorySoftware Engineering',
                    category: 'Software Engineering',
                    year: '2023',
                    company: 'WeTech Mentorship',
                    jobDescription: 'Web developer (Contract)', jobWork: 'Create files for individuals thhat needs creating of the files needed',
                    jobs: [
                        'Actively collaborated with  teams members to deliver solutions, integrating designs into responsive and optimized web applications.', 'Contributed to the creation of intuitive and visually appealing user interfaces, ensuring seamless user experiences across platforms', 'Actively pursued ongoing learning opportunities to stay updated with emerging front-end technologies and industry best practices.'
                    ]
                },
                {
                    id: 3,
                    name: 'I am a natural team worker and adaptable to all challenging situations categorySoftware Engineering',
                    category: 'Software Engineering',
                    year: '2022',
                    company: 'Sirinu Token',
                    jobDescription: 'Web developer (Contract)',
                    jobWork: 'Create files for individuals thhat needs creating of the files needed',
                    jobs: ['Played a part in developing and refining front-end architecture, optimizing performance and scalability of web applications.', 'Participated in performance optimization efforts, analyzing and refining code for faster load times and improved user interactivity.', ' Developed responsive and mobile-first web applications, ensuring adaptability to various screen sizes']
                },
                {
                    id: 4,
                    name: 'I am a natural team worker and adaptable to all challenging situations categorySoftware Engineering',
                    category: 'Software Engineering',
                    year: '2023',
                    company: 'Personal Projects',
                    jobDescription: 'Web developer', jobWork: 'Create files for individuals thhat needs creating of the files needed',
                    jobs: ['Led the conceptualization, design, and implementation of a personal portfolio website using HTML, CSS, and JavaScript', 'Designed and developed a responsive web application leveraging React.js, focusing on intuitive user interfaces and seamless navigation.', 'Solely engineered a project UI utilizing Vue.js, ensuring optimal front-end functionality and performance']
                },




                {
                    id: 5,
                    name: 'I am a natural team worker and adaptable to all challenging situations categoryOther Professional Experiences',
                    category: 'Other Experiences',
                    year: '2022',
                    company: 'Dumo Skills Acquisition',
                    jobDescription: 'Computer Instructor',
                    jobWork: 'Create files for individuals thhat needs creating', jobs: ['Taught courses on microsoft word, microsoft excel, microsoft powerpoint, microsoft publisher, corel draw and photoshop', 'Listened and observed students to pick up signs that students may be failing to grasp', 'Answered questions from students and provided support to help them understand completely']
                },
                {
                    id: 6,
                    category: 'Other Experiences',
                    year: '2022',
                    company: 'Abitto Global Services',
                    jobDescription: 'Accountant & Website Administrator',
                    jobWork: 'Create files for individuals thhat needs creating',
                    jobs: ['Oversaw the maintenance and updates of the companys website, ensuring accurate and uptodate information.', 'Integrated financial data onto the website, providing insights and analysis for stakeholders.', 'Managed and coordinated content updates, ensuring consistency and relevance across all web pages.']
                },
                {
                    id: 7,
                    name: 'I am a natural team worker and adaptable to all challenging situations categoryOther Professional Experiences',
                    category: 'Other Experiences',
                    year: '2020',
                    company: 'Royale Concept',
                    jobDescription: 'Web developer',
                    jobWork: 'Create files for individuals thhat needs creating',
                    jobs: ['Transferred data from paper formats into computer files or database systems and Updated existing databases.', 'Created, Compiled, verified, and sorted information into spreadsheets with large number of figures.', 'Designed various graphics such as fliers, banners, brochure, event booklets etc. Using design tools like Corel draw, Photoshop etc']
                },
                {
                    id: 8,
                    name: 'I am a natural team worker and adaptable to all challenging situations categoryOther Professional Experiences',
                    category: 'Other Experiences',
                    year: '2021',
                    company: 'Dumo Skills Acquisition',
                    jobDescription: 'Computer Instructor',
                    jobWork: 'Create files for individuals thhat needs creating', jobs: ['Established key objectives for classes and Created curriculum to accomplish set objectives', 'Organized lectures for both practical classes and oral classes and also gave assesments to test the students', 'Taught courses on microsoft word, microsoft excel, microsoft powerpoint, microsoft publisher, corel draw and photoshop']
                },
            ],
            selectedCategory: 'Software Engineering',
            categories: ['Software Engineering', 'Other Experiences'],
        };
    },
    computed: {
        filteredStack() {
            return this.stacks.filter(stack => stack.category === this.selectedCategory);
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

.experience-li {
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