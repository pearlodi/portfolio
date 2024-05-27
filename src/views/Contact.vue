<template>
    <div class="pb-10 md:py-10 project-background">
      <Navbar />
      <div class="lg:flex flex-col justify-center items-center px-4 md:px-12 lg:px-12">
        <div class="md:mx-5 lg:mx-20 lg:w-[1200px] w-full max-w-full">
          <div class="text-[40px] text-white flex items-center pb-4">
            <div class="mt-8 md:mt-16">
              <p class="text-2xl md:text-3xl text-white font-[800]">CONTACT</p>
              <div class="line h-1 w-full max-w-full md:w-[200px] mt-5"></div>
            </div>
          </div>
          <div class="flex items-center flex-col-reverse md:flex-row lg:justify-center">
            <div class="mt-8">
              <h1 class="contact-text text-white text-2xl font-bold">Contact info</h1>
              <div class="mt-8">
                <div class="flex items-center">
                  <div class="stack p-40">
                    <div class="w-[50px] h-[50px] flex justify-center items-center">
                      <img src="@/assets/img/communication.png" class="p-3 w-full h-full" alt="contact" />
                    </div>
                  </div>
                  <div class="ml-8">
                    <h1 class="text-grad font-bold">E-Mail</h1>
                    <p class="text-white">pearlodi7@gmail.com</p>
                  </div>
                </div>
                <div class="flex items-center mt-8">
                  <div class="stack p-40">
                    <div class="w-[50px] h-[50px] flex justify-center items-center">
                      <img src="@/assets/img/phonez.png" class="p-3 w-full h-full" alt="contact" />
                    </div>
                  </div>
                  <div class="ml-8">
                    <h1 class="text-grad font-bold">Contact</h1>
                    <p class="text-white">+234 9037248116</p>
                  </div>
                </div>
                <div class="flex items-center mt-8">
                  <div class="stack p-40">
                    <div class="w-[50px] h-[50px] flex justify-center items-center">
                      <img src="@/assets/img/map.png" class="p-3 w-full h-full" alt="contact" />
                    </div>
                  </div>
                  <div class="ml-8">
                    <h1 class="text-grad font-bold">Location</h1>
                    <p class="text-white">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
              <div class="mt-6">
                <h1 class="contact-text text-2xl font-bold text-white">Social info</h1>
                <div class="flex mt-8">
                  <div class="stack p-40 cursor-pointer">
                    <a href="https://www.linkedin.com/in/odipearl/" target="_blank">
                      <div class="w-[50px] h-[50px] flex justify-center items-center">
                        <img src="@/assets/img/linkedinz.png" class="p-3 w-full h-full cursor-pointer" alt="contact" />
                      </div>
                    </a>
                  </div>
                  <a href="https://github.com/pearlodi" target="_blank">
                    <div class="stack p- ml-8 cursor-pointer">
                      <div class="w-[50px] h-[50px] flex justify-center items-center">
                        <img src="@/assets/img/github.png" class="p-3 w-full h-full cursor-pointer" alt="contact" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="lg:ml-32 mt-10 project-card w-full max-w-full lg:w-[800px]">
              <form @submit.prevent="validateForm" class="flex flex-col bg-[#ffffff14] rounded-md p-4 lg:p-10">
                <div class="mb-4 flex flex-col">
                  <input type="text" name="name" v-model="form.name" placeholder="Your Name" class="portt p-2 text-[gray] w-full" />
                  <span v-if="errors.name" class="text-red-500 text-[10px]">{{ errors.name }}</span>
                </div>
                <div class="mb-4 flex flex-col">
                  <input type="email" name="email" v-model="form.email" placeholder="Your Email" class="portt p-2 text-[gray] w-full" />
                  <span v-if="errors.email" class="text-red-500 text-[10px]">{{ errors.email }}</span>
                </div>
                <div class="mb-4 flex flex-col">
                  <input type="text" name="subject" v-model="form.subject" placeholder="Your Subject" class="portt p-2 text-[gray] w-full" />
                  <span v-if="errors.subject" class="text-red-500 text-[10px]">{{ errors.subject }}</span>
                </div>
                <div class="mb-4 flex flex-col">
                  <textarea name="message" v-model="form.message" placeholder="Your Message" class="portt p-2 text-[gray] w-full h-[120px]"></textarea>
                  <span v-if="errors.message" class="text-red-500 text-[10px]">{{ errors.message }}</span>
                </div>
                <div>
                  <button type="submit" class="mt-4 stack p-2 w-[200px] h-full text-[gray] contact-button">Send</button>
                  <p v-if="submitted" class="text-green-500 text-[10px]">Form submitted successfully!</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      errors: {},
      submitted: false
    };
  },
  watch: {
    'form.name': function (newVal) {
      this.validateName();
    },
    'form.email': function (newVal) {
      this.validateEmail();
    },
    'form.subject': function (newVal) {
      this.validateSubject();
    },
    'form.message': function (newVal) {
      this.validateMessage();
    }
  },
  methods: {
    validateName() {
      this.errors.name = this.form.name ? '' : 'Please input your name';
    },
    validateEmail() {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
      if (!this.form.email) {
        this.errors.email = 'Please input your email';
      } else if (!re.test(this.form.email)) {
        this.errors.email = 'Please input a valid email address';
      } else {
        this.errors.email = '';
      }
    },
    validateSubject() {
      this.errors.subject = this.form.subject ? '' : 'Please input the subject';
    },
    validateMessage() {
      this.errors.message = this.form.message ? '' : 'Please input your message';
    },
    validateForm() {
      this.validateName();
      this.validateEmail();
      this.validateSubject();
      this.validateMessage();

      if (!this.errors.name && !this.errors.email && !this.errors.subject && !this.errors.message) {
        this.submitForm();
      }
    },
    submitForm() {
      this.submitted = true;
      this.errors = {}; // Reset errors object
      this.clearSuccessMessageAfterDelay();
      this.clearFormFields();
    },
    // clearFormFields() {
    //   this.form.name = '';
    //   this.form.email = '';
    //   this.form.subject = '';
    //   this.form.message = '';
    // },
    clearSuccessMessageAfterDelay() {
      setTimeout(() => {
        this.submitted = false; // Reset submitted flag after 5 seconds
      }, 2000); // 5000 milliseconds = 5 seconds
    }
  }
};
</script>

  <style scoped>
  .stack {
    border-radius: 16px;
    backdrop-filter: blur(15px);
    border: 0.8px solid rgba(214, 251, 252, 0.06);
    padding: 4px;
    background: linear-gradient(65deg, #0f1215 4.18%, #181a1a 116.91%);
  }
  
  .portt {
    border-radius: 10px;
    backdrop-filter: blur(15px);
    border: 0.8px solid gray;
    background: transparent;
  }
  
  .text-grad {
    background: linear-gradient(169deg, #505356 8.16%, #fff 150.61%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .portt::placeholder {
    background: linear-gradient(169deg, #505356 8.16%, #fff 150.61%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .text-red-500 {
    color: #f56565;
  }
  </style>
  