<template>
    <div class="project-background h-fit pb-8 md:pb-24">
      <homeNavVue />
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
            <h1 class="contact-text text-white text-2xl font-bold">Contact Info</h1>
            <div class="mt-8">
              <div class="flex items-center">
                <div class="stack p-40">
                  <div class="w-[50px] h-[50px] flex justify-center items-center">
                    <img src="@/assets/img/communication.png" class="p-3 w-full h-full" alt="communication" />
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
                    <img src="@/assets/img/phonez.png" class="p-3 w-full h-full" alt="phone" />
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
                    <img src="@/assets/img/map.png" class="p-3 w-full h-full" alt="location" />
                  </div>
                </div>
                <div class="ml-8">
                  <h1 class="text-grad font-bold">Location</h1>
                  <p class="text-white">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
            <div class="mt-6">
              <h1 class="contact-text text-2xl font-bold text-white">Social Info</h1>
              <div class="flex mt-8">
                <div class="stack p-40 cursor-pointer">
                  <a href="https://www.linkedin.com/in/odipearl/" target="_blank" rel="noopener noreferrer">
                    <div class="w-[50px] h-[50px] flex justify-center items-center">
                      <img src="@/assets/img/linkedinz.png" class="p-3 w-full h-full" alt="LinkedIn" />
                    </div>
                  </a>
                </div>
                <div class="stack p-40 ml-8 cursor-pointer">
                  <a href="https://github.com/pearlodi" target="_blank" rel="noopener noreferrer">
                    <div class="w-[50px] h-[50px] flex justify-center items-center">
                      <img src="@/assets/img/github.png" class="p-3 w-full h-full" alt="GitHub" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:ml-32 mt-10 project-card w-full max-w-full lg:w-[800px]">
            <form @submit.prevent="handleSubmit" class="flex flex-col bg-[#ffffff14] rounded-md p-4 lg:p-10">
              <div class="mb-4 flex flex-col">
                <input
                  type="text"
                  v-model="form.name"
                  placeholder="Name"
                  class="portt p-2 text-[gray] w-full"
                  @blur="validateName"
                  
                />
                <span v-if="errors.name" class="text-[white]  text-[10px]">{{ errors.name }}</span>
              </div>
              <div class="mb-4 flex flex-col">
                <input
                  type="email"
                  v-model="form.email"
                  placeholder="Email"
                  class="portt p-2 text-[gray] w-full"
                  @blur="validateEmail"
                  
                />
                <span v-if="errors.email" class="text-[white]  text-[10px]">{{ errors.email }}</span>
              </div>
              <div class="mb-4 flex flex-col">
                <input
                  type="text"
                  v-model="form.subject"
                  placeholder="Subject"
                  class="portt p-2 text-[gray] w-full"
                  @blur="validateSubject"
                  
                />
                <span v-if="errors.subject" class="text-[white]  text-[10px]">{{ errors.subject }}</span>
              </div>
              <div class="mb-4 flex flex-col">
                <textarea
                  v-model="form.message"
                  placeholder="Message"
                  class="portt p-2 text-[gray] w-full h-[120px]"
                  @blur="validateMessage"
                  
                ></textarea>
                <span v-if="errors.message" class="text-[white]  text-[10px]">{{ errors.message }}</span>
              </div>
              <div>
                <div v-if="showPopup">
                  <p class="popup-message">Thanks for reaching out, I will get back to you shortly ❤️.</p>
                </div>
                <button v-else type="submit" class="mt-4 button-stack p-2 w-[200px] h-full text-[gray] contact-button" :disabled="loading">
                  <span v-if="loading" class="spinners"></span>
                  <span v-else>Send</span>
                </button>
                <p v-if="errorMessage" class="text-red-500 mt-4">{{ errorMessage }}</p>
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
import axios from 'axios';
import ContactModal from '@/components/Modal/ContactModal.vue';
import homeNavVue from "./homeNav.vue";

export default {
  components: {
    Navbar,
    homeNavVue,
    ContactModal,
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
      showPopup: false,
      loading: false,
      errorMessage: '',
      errors: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
    };
  },
  methods: {
    validateName() {
      this.errors.name = this.form.name ? '' : 'Please input your name';
    },
    validateEmail() {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
    async handleSubmit() {
      if (this.validateForm()) {
        this.loading = true;
        this.errorMessage = '';
        const formData = new FormData();
        formData.append('name', this.form.name);
        formData.append('email', this.form.email);
        formData.append('subject', this.form.subject);
        formData.append('message', this.form.message);

        try {
          await axios.post('https://formspree.io/f/movajqpq', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          this.showPopup = true;
          setTimeout(() => {
            this.showPopup = false;
          }, 6000);
          this.resetForm();
        } catch (error) {
          console.error('Form submission error:', error);
          this.errorMessage = 'There was an error submitting the form. Please try again later.';
        } finally {
          this.loading = false;
        }
      }
    },
    validateForm() {
      this.validateName();
      this.validateEmail();
      this.validateSubject();
      this.validateMessage();
      return !this.errors.name && !this.errors.email && !this.errors.subject && !this.errors.message;
    },
    resetForm() {
      this.form.name = '';
      this.form.email = '';
      this.form.subject = '';
      this.form.message = '';
    },
  },
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
.button-stack {
  justify-content: center;
  display: flex;
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
.popup-message {
  margin: 0;
  color: gray;
  font-style: italic;
}
.spinners {
  border: 5px solid gray;
  border-left-color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
 
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
