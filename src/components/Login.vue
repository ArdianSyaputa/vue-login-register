<template>
  <div class="kotak_login">
 <h1 style="color:black">LOGIN</h1>
    <form @submit="login">
      <label>username</label>
      <input
        type="text"
        required
        name="username"
        v-model="form.username"
        class="form_login"
        placeholder="Username"
      />
      <label>password</label>
      <input
        type="password"
        name="password"
        v-model="form.password"
        required
        class="form_login"
        placeholder="Password..."
      />
      <button type="submit">
        Login
      </button>

    <center>
    <p class="f00ter">
      <a href="/register" class="registerdonk">Register</a>
      <span class="notReg">Jika Belum Memiliki Akun</span>
    </p>
      </center>
      </form>
  </div>
</template>

<script> 
// import Axios 
import axios from "axios"; 
export default { 
  name: "LoginPage", 
  data() { 
    return { 
      form: { 
        username: "", 
        password: "", 
        useres: {}, 
      }, 
    }; 
  }, 
 
  methods: { 
    // menjalankan 2 fungsi mengambil data pada json dan mencari data yg sama diinputkan 
    async getUser() { 
      const user = await axios.get("http://localhost:3000/akuns"); 
      this.useres = user.data; 
    }, 
    // fungsi tombol login 
    login(e) { 
      e.preventDefault(); 
      const login = this.useres.find( 
        (data) => 
          data.username === this.form.username && 
          data.password === this.form.password 
      ); 
      //   kondisi jika akun benar akan langsung masuk ke page home kalo salah muncul alert 
      if (login === undefined) { 
        alert("Username Or Password Not Found"); 
      } else { 
        var convertToString = JSON.stringify(login); 
        sessionStorage.setItem("USER_DATA", convertToString);
          sessionStorage.setItem("USER",login.role);  
        this.$router.push("/home"); 
        window.location.reload(); 
      } 
    }, 
  }, 
  mounted() { 
    this.getUser(); 
    // fungsi toggle pada app.vue 
    this.$emit("toggleBar"); 
  }, 
}; 
</script>