<template>
  <div class="all">
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item" v-if="AdminAccess">
              <router-link to="/home">Home</router-link>
            </li>
            <li v-if="AdminAccess">
              <router-link to="/about">About</router-link>
            </li>
            <li v-if="AdminAccess">
              <router-link to="/contact">Contact</router-link>
            </li>
            <li><router-link to="/produk">Produk</router-link></li>
            <li><router-link to="/detail">Detail</router-link></li>
          </ul>
          <form style="margin-left: 85%" class="d-flex" role="search">
            <a
              class="btn btn-outline-success"
              type="submit"
              @click="out"
              href="/"
              >Log-Out</a
            >
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavComp",

  computed: {
    AdminAccess() {
      return sessionStorage.getItem("USER") === 'admin';
    },
  },
  methods: {
    out() {
      sessionStorage.clear();
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
ul {
  width: 200px;
  list-style-type: none;
  border: 1px solid;
  margin: 0;
  padding: 0;
  text-align: center;
  position: fixed;
  padding-left: 10px;
  border: none;
}
li {
  /* line-height: 2; */
  padding: 12px 16px;
}
li a {
  color: black;
  text-decoration: none;
}
</style>
