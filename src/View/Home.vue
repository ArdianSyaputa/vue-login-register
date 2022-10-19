<template>
  <div id="home">
    <NavBar />
    <div class="induk" style="background-color: grey">
      <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add
</button>
      <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Form <span v-show="!updateSubmit">Tambah</span>
        <span v-show="updateSubmit">Update</span>
        </h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form id="atas" @submit.prevent="add">
        <div class="jakarta">
          <input type="hidden" v-model="form.id" />
          <div>
            <label for="">Kota/Kabupaten</label>
               <br>
            <input type="text" v-model="form.kota" required />
          </div>
       
          <div>
            <label for="">Luas</label>
            <br>
            <input type="text" v-model="form.ukuran" required />
          </div>
        
          <div>
            <label for="">Jumlah Kecamatan</label>
              <br>
            <input type="text" v-model="form.jumlah" required />
          </div>
         
          <div>
            <label for="">Walikota</label>
             <br>
            <input type="text" v-model="form.iconkota" required />
          </div>
         
          <div>
            <label for="">Monumen</label>
             <br>
            <input type="text" v-model="form.image" required />
          </div>
        </div>
      
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <div class="btn1">
          <button type="submit" v-show="!updateSubmit">Tambahkan</button>
               <button type="button" v-show="updateSubmit" @click="update(form)">
            <i class="fas fa-wrench">Update</i>
          </button>
          <!-- jika tombol edit di klik maka tombol add akan berubah menjadi update -->
        </div>
        </div>
      </form>
      </div>
      
     
      </div>
    </div>
  </div>
      <table class="table" border="1" style="width: 98%">
        <tr class="tr">
          <th>No</th>
          <th>Kabupaten/Kota</th>
          <th>Luas</th>
          <th>Jumlah Kecamatan</th>
          <th>Walikota</th>
          <th>Monumen</th>
          <th>Pemgaturan</th>
        </tr>

        <tr class="tr" v-for="(jakarta,index) in jakartas" :key="jakarta.id">
            <td>
            <span class="bb"> {{ index + 1 }}</span> &#160;
            </td>
          <td>
            <span class="bb"> {{ jakarta.kota }}</span> &#160;
          </td>
          <td>
            <span class="bb">{{ jakarta.ukuran }}</span> &#160;
          </td>
          <td>
            <span class="bb">{{ jakarta.jumlah }}</span> &#160;
          </td>
          <td>
            <span class="bb">{{ jakarta.iconkota }}</span>
            &#160;
          </td>
          <td>
            <span><img :src="jakarta.image" alt="" width="100px" /></span>
            &#160;
          </td>
          <td class="btn2">
            <button class="aa" @click="edit(jakarta)">
              <i class="fas fa-wrench"></i>Edit
            </button>
            <button class="aa" @click="del(jakarta)">
              <i class="fas fa-trash-alt"></i>Delete
            </button>
          </td>
        </tr>
      </table>
      <a href="atas"
        ><div class="kembali"><button>kembali</button></div></a
      >
    </div>
  </div>
</template>
<script>
import axios from "axios";
/* eslint-disable */
import NavBar from "../components/Navbar.vue";

export default {
  name: "HomePage",
  components: {
    NavBar,
  },
  mounted() {
    if (!sessionStorage.getItem("USER_DATA")) {
      this.$router.push("/");
    }
  },

  data() {
    return {
      form: {
        id: "",
        kota: "",
        ukuran: "",
        jumlah: "",
        iconkota: "",
        image: "",
      },
      jakartas: "",
      updateSubmit: false,
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      axios
        .get("http://localhost:3000/jakartas")
        .then((res) => {
          this.jakartas = res.data; //respon dari rest api dimasukan ke users
        })
        .catch((err) => {
          console.log(err);
        });
    },
    add() {
      axios.post("http://localhost:3000/jakartas/", this.form).then((res) => {
        this.load();
        (this.form.kota = ""),
          (this.form.ukuran = ""),
          (this.form.jumlah = ""),
          (this.form.iconkota = ""),
          (this.form.image = "");
      });
    },
    edit(jakarta) {
      this.updateSubmit = true;
      this.form.id = jakarta.id;
      this.form.kota = jakarta.kota;
      this.form.ukuran = jakarta.ukuran;
      this.form.jumlah = jakarta.jumlah;
      this.form.iconkota = jakarta.iconkota;
      this.form.image = jakarta.image;
    },
    update(form) {
      return axios
        .put("http://localhost:3000/jakartas/" + form.id, {
          kota: this.form.kota,
          ukuran: this.form.ukuran,
          jumlah: this.form.jumlah,
          iconkota: this.form.iconkota,
          image: this.form.image,
        })
        .then((res) => {
          this.load();
          this.form.id = "";
          this.form.kota = "";
          this.form.ukuran = "";
          this.form.jumlah = "";
          this.form.iconkota = "";
          this.form.image = "";
          this.updateSubmit = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
   del(jakarta) {
      axios
        .delete("http://localhost:3000/jakartas/" + jakarta.id)
        .then((res) => {
          this.load();
          let index = this.jakartas.indexOf(
            form.name,
            form.bb,
            form.cc,
            form.iconkota,
            form.image
          );
          this.jakartas.splice(index, 1);
        });
    },
    // close
    close() {
      window.location.reload();
    },
  },
};
</script>
<style>
.induk {
  width: auto;
  text-align: center;
  overflow-x: hidden;
}
.jabar img {
  width: auto;
  height: 100px;
}

.jakarta {
  display: block;
  justify-content: space-around;
  font-family: "Bungee Inline", cursive;
  gap: 5px;
  margin-left: 10px;
  width: auto;
}


.btn1 button {
  font-family: "Bungee Inline", cursive;
  color: white;
  background-color: black;
  border-radius: 20px;
  height: 50px;
 
  text-align: center;
  border: 2px solid black;
}
.btn1 :hover {
  background-color: white;
  color: black;
}
.btn2 :hover {
  background-color: white;
  color: black;
}
.table {
  padding-left: 15px;
  padding-right: 20px;
  padding-bottom: 20px;
}
.table th {
  border: 1px solid;
}
.table td {
  border: 1px solid black;
  font-family: sans-serif;
  text-align: center;
}

.aa {
  background-color: white;
  border: none;
}
.bb {
  font-family: "Bungee Inline", cursive;
}
.tr th {
  font-family: "Bungee Inline", cursive;
}
.tr button {
  font-family: "Bungee Inline", cursive;
  width: 100px;
  background-color: black;
  border-radius: 20px;
  height: 50px;
  margin-left: 20px;
  color: white;
}

.table {
  margin-left: 10px;
  margin-right: 10px;
  border: 2px solid;
}
</style>
