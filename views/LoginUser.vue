<template>
  <div class="login-container">
    <div class="login-box">
      <h2>Dastur sahifasiga kirish</h2>
      <p>Xodim tomonidan berilgan login va parol orqali dasturga kirib va undan foydalanishingiz mumkin</p>
      <form @submit.prevent="submitLogin">
        <div class="input-group">
          <label for="login">Loginni kiriting</label>
          <input
            type="text"
            id="login"
            v-model="login"
            placeholder="Telefon raqam yoki maxsus nom"
            required
          />
        </div>
        <div class="input-group">
          <label for="password">Parolni kiriting</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Parolni kiriting"
            required
          />

        </div>
        <button type="submit" class="login-button">
          <b-spinner variant="white" v-if="is_login"></b-spinner>
        <span v-if="!is_login">Dasturga kirish</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: '',
      is_login:false,
      password: ''
    };
  },
  methods: {
    submitLogin() {
      this.is_login=true
      this.$axios.post('/account/psychologists/login/',{
        "username":this.login,
        "password":this.password
      })
          .then(res=>{
            console.log(res.data.access)
            localStorage.setItem('token',res.data.access)
            if(res.data.user_type=="regionpsychologist"){
               this.$router.push(`/regionpsychologist/${res.data.result.region_id}`)
            }
            if(res.data.user_type=="districtpsychologist"){
               this.$router.push(`/districtpsychologist/${res.data.result.district_id}?region_id=${res.data.result.region_id}`)
            }
             if(res.data.user_type=="mainpsychologist"){
               this.$router.push(`/`)
            }
            this.is_login=false
          })
          .catch(error=>{
            console.log(error)
      this.is_login=false
          })
    }
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.login-box {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
}

p {
  font-size: 0.9rem;
  margin-bottom: 2rem;
  color: #666;
}

.input-group {
  margin-bottom: 1.5rem;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #555;
}

input {
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 3px rgba(0, 123, 255, 0.25);
}

.forgot-password {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: #007bff;
  text-decoration: none;
}

.forgot-password:hover {
  text-decoration: underline;
}

.login-button {
  background: #007bff;
  color: #fff;
  border: none;
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}

.login-button:hover {
  background: #0056b3;
}
</style>
