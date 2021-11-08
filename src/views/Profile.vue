<template>
  <div id="profile">
    <TheHeader />
    <div class="container">
      <div class="profile__card">
        <div class="profile__image">
          <img :src="user.img_url" />
        </div>
        <div class="profile__content">
          <p>Change Profile Image</p>
          <p class="greeting">Hello</p>
          <h2 class="greeting__user">{{user.full_name}}</h2>
        </div>
      </div>
      <AppButton @click.native="logout" theme="rounded">Log Out</AppButton>
    </div>
    <AppButton v-if="user.role !== 'ADMIN'" @click.native="deleteUser" theme="squared" size="small" color="danger" id="btnDelete"
      >Delete Account</AppButton
    >
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import AppButton from "@/components/AppButton.vue";

import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

export default {
  name: "Profile",
  components: {
    TheHeader,
    AppButton,
  },

  data() {
    return {
      user: Array
    }
  },

  methods: {
    logout: function() {
      localStorage.clear();
      console.log("logged out");
      alert('You have logged out.');
      this.$router.push("/");
    },

    deleteUser: function() {
      axios.delete("http://localhost:3000/api/user/", {headers: {Authorization: 'Bearer ' + localStorage.token}})
      .then(response => {
        localStorage.clear();
        alert(response.data.message);
        this.$router.push('/');  
      })
      .catch(error => {
          console.log(error);
      })
},
  },

  beforeCreate() {
    axios
      .get('http://localhost:3000/api/user/', {headers: {Authorization: 'Bearer ' + localStorage.token}})
      .then(response => {
        this.user = response.data[0];
        console.log(this.user);
      })
      .catch (error => {
        alert ('You are not loggin in!')
        console.log(error.response);
      })
  },
};
</script>

<style lang="scss" scoped>
.profile {
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  &__card {
    min-height: 55vh;
  }
  &__image {
    width: 200px;
    height: 200px;
    margin: 30px auto;
    flex: 1;
    img {
      max-width: 100%;
      max-height: 100%;
      border-radius: 50%;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    }
  }
  &__content {
    width: 100%;
    text-align: center;
    flex: 2;
  }
}

#btnDelete {
  position: absolute;
  bottom: 0;
  left: -2px;
  right: -2px;
}

.greeting {
  font-size: 1.5rem;

  &__user{
    padding-bottom: 2rem;
  }
}
</style>