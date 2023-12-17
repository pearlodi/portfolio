<template>
    <div class="pb-10 md:py-10 project-background">
        <Navbar />

        <div class="lg:flex flex-col justify-center items-center px-4 md:px-12 lg:px-12 ">
            <div class=" md:mx-5 lg:mx-20 lg:w-[1200px] w-full max-w-full">
                <div class="text-[40px] text-white  flex items-center pb-4">
                    <div class="mt-8 md:mt-16">
                        <p class="text-2xl md:text-3xl text-white font-[800]">CONTACT</p>
                        <div class="line h-1 w-full max-w-full md:w-[200px] mt-5">
                        </div>
                    </div>
                </div>

                <div class="flex  flex-col-reverse md:flex-row lg:justify-center ">
                    <div class="mt-8">
                        <h1 class="contact-text text-white text-2xl font-bold">Contact
                            info</h1>
                        <div class="mt-8">
                            <div class="flex items-center">
                                <div class="stack p-40">
                                    <div class=" w-[50px] h-[50px] flex justify-center items-center">
                                        <img src="@/assets/img/gmail.png" class="p-3 w-full h-full" alt="contact" />
                                    </div>
                                </div>
                                <div class="ml-8">
                                    <h1 class="text-grad font-bold">E-Mail</h1>
                                    <p class="text-white">pearlodi7@gmail.com</p>
                                </div>
                            </div>

                            <div class="flex items-center mt-8">
                                <div class="stack p-40">
                                    <div class=" w-[50px] h-[50px] flex justify-center items-center">
                                        <img src="@/assets/img/phone.png" class="p-3 w-full h-full" alt="contact" />
                                    </div>
                                </div>
                                <div class="ml-8">
                                    <h1 class="text-grad font-bold">Contact</h1>
                                    <p class="text-white">+234 9037248116</p>
                                </div>
                            </div>

                            <div class="flex items-center mt-8">
                                <div class="stack p-40">
                                    <div class=" w-[50px] h-[50px] flex justify-center items-center">
                                        <img src="@/assets/img/location.png" class="p-3 w-full h-full" alt="contact" />
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
                                <div class="stack p-40">
                                    <div class=" w-[50px] h-[50px] flex justify-center items-center">
                                        <img src="@/assets/img/github.png" class="p-3 w-full h-full" alt="contact" />
                                    </div>
                                </div>
                                <div class="stack p- ml-8">
                                    <div class=" w-[50px] h-[50px] flex justify-center items-center">
                                        <img src="@/assets/img/linkedin.png" class="p-3 w-full h-full" alt="contact" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="lg:ml-32 mt-10 stack w-full max-w-full lg:w-[800px]">
                        <form name="contact" method="POST" data-netlify="true"
                            class="flex flex-col bg-transparent p-4 lg:p-10">
                            <input type="text" name="name" placeholder="Your Name" required class="portt p-2 text-white ">
                            <input type="email" name="email" placeholder="Your Email" required
                                class="portt p-2  mt-6 text-white">
                            <input type="text" name="subject" placeholder="Your Subject" required
                                class="portt p-2  mt-6 text-white">
                            <textarea name="message" placeholder="Your Message" required
                                class="portt p-2  mt-6 text-white h-[120px]"></textarea>
                            <div>
                                <button type="submit"
                                    class="mt-4 portt p-2 w-[200px] h-full text-white contact-button">Send</button>
                            </div>
                        </form>

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

}
</script>
<style scoped>
.stack {
    border-radius: 16px;
    backdrop-filter: blur(15px);
    border: 0.8px solid rgba(214, 251, 252, 0.06);
    padding: 4px;

    background: linear-gradient(65deg, #0F1215 4.18%, #181A1A 116.91%);
}

.portt {
    border-radius: 16px;
    backdrop-filter: blur(15px);
    border: 0.8px solid rgba(214, 251, 252, 0.06);
    background: linear-gradient(169deg, black 8.16%, black 150.61%);
    background-clip: text;
    -webkit-background-clip: text;
}

.text-grad {
    background: linear-gradient(169deg, #505356 8.16%, #fff 150.61%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.portt::placeholder {
    background: linear-gradient(169deg, white 8.16%, white 150.61%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: white;
}
</style>