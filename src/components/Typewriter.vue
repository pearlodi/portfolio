<template>
  <div class="typewriter">
    <div class="text-2xl md:text-5xl font-semibold mb-4">
      I'M A {{ currentText }} |
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      texts: ["Frontend Developer", "Technical Writer"],
      currentText: "",
    };
  },
  created() {
    this.typewriter(0);
  },
  methods: {
    typewriter(index) {
      const text = this.texts[index];
      let i = 0;
      const speed = 50; // Adjust typing speed here

      const type = () => {
        if (i < text.length) {
          this.currentText += text.charAt(i);
          i++;
          setTimeout(type, speed);
        } else {
          setTimeout(() => this.backspace(index), 2000);
        }
      };

      type();
    },
    backspace(index) {
      let i = this.currentText.length;
      const speed = 30; // Adjust backspacing speed here

      const erase = () => {
        if (i > 0) {
          this.currentText = this.currentText.slice(0, i - 1);
          i--;
          setTimeout(erase, speed);
        } else {
          index = (index + 1) % this.texts.length;
          setTimeout(() => this.typewriter(index), 50);
        }
      };

      erase();
    },
  },
};
</script>
  
<style scoped>
/* Add any additional styling here */
@keyframes blink {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}


/* Apply the animation to the cursor */
.blinking-cursor {
  font-weight: bold;
  animation: blink 1s step-end infinite;
}
</style>
  
