<template>
  <div>

    <router-view :class="{ 'dark-mode': isDarkMode }" :isDarkMode="isDarkMode" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isDarkMode: false
    };
  },
  // created() {
  //   const storedPreference = localStorage.getItem('isDarkMode');
  //   if (storedPreference) {
  //     this.isDarkMode = JSON.parse(storedPreference);
  //   }
  // },
  // methods: {
  //   toggleDarkMode() {
  //     this.isDarkMode = !this.isDarkMode;
  //     localStorage.setItem('isDarkMode', JSON.stringify(this.isDarkMode)); // Save preference
  //   }
  // }
};
</script>

