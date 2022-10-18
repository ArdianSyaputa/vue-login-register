<template>
  <div id="home">
      <Navbar />
        <marquee direction="up" >
          <h1>Ini harapan In Page</h1>
          <h1>Ini harapan In Page</h1>
          <h1>Ini harapan In Page</h1>
          <h1>Ini harapan In Page</h1>
        </marquee>  
        <h1>Ini harapan In Page</h1>
        <marquee direction="down" >
          <h1>Ini harapan In Page</h1>
          <h1>Ini harapan In Page</h1>
          <h1>Ini harapan In Page</h1>
          <h1>Ini harapan In Page</h1>
        </marquee>  
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue"

export default {
  name: 'HomePage',
  components: {
    Navbar,
  },
  mounted() {
    if (!sessionStorage.getItem("USER_DATA")) {
      this.$router.push("/");
    }
  },
};
</script>