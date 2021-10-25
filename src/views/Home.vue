<template>
  <div class="home">
    <img
      class="logo"
      alt="Groupmania logo"
      src="../assets/logo/icon-left-font-monochrome-black.svg"
    />

    <div class="forms">
      <div class="container">
        <!-- Log In Form -->
        <form
          id="login-page"
          v-if="currentForm.toLowerCase() === 'login'"
          class="login-form"
        >
          <div class="form-control">
            <input type="text" name="email" placeholder="name@domain.com" />
            <label for="email">Email</label>
          </div>
          <div class="form-control">
            <input type="text" name="password" placeholder="Your password" />
            <label for="password">Password</label>
          </div>
          <AppButton :to="{ name: 'PostWall' }" theme="rounded" id="logIn"
            >Log In</AppButton
          >
          <p class="message">
            Not registered?
            <a href="#" @click.prevent="toggleForm()">Create an account</a>
          </p>
        </form>

        <!-- Register Form -->
        <form v-else class="register-form">
          <div class="form-control">
            <input type="text" name="full-name" placeholder="Tony Stark" />
            <label for="full-name">Full Name</label>
          </div>
          <div class="form-control">
            <input type="text" name="email" placeholder="name@domain.com" />
            <label for="email">Email</label>
          </div>
          <div class="form-control">
            <input type="text" name="password" placeholder="Your password" />
            <label for="password">Password</label>
          </div>
          <AppButton @click="onClick" theme="rounded">Next</AppButton>
          <p class="message">Already registered?
          <a href="#" @click.prevent="toggleForm()">Log In</a></p>
        </form>
      </div>
    </div>

    <img class="img-home img-home__p1" src="../assets/images/1.png" alt="" />
    <img class="img-home img-home__p2" src="../assets/images/2.png" alt="" />
    <img class="img-home img-home__p3" src="../assets/images/3.png" alt="" />
  </div>
</template>

<script>
import AppButton from "@/components/AppButton.vue";

export default {
  name: "Home",
  data() {
    return {
      currentForm: "login",
    };
  },
  components: {
    AppButton,
  },
  methods: {
    onClick() {
      this.$router.push("/postwall");
    },
    toggleForm() {
      this.currentForm = this.currentForm === "login" ? "register" : "login";
    },
  },
};
</script>

<style scoped lang="scss">
body {
  display: flex;
  justify-content: center;
  align-items: center;
}

.home {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}

.logo {
  align-self: start;
  width: 200px;
  padding: 20px;
}

.forms {
  width: 100%;
  margin: auto;
  padding-bottom: 120px;
}

.form-control {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 30px 0;

  label {
    position: absolute;
    display: block;
    left: 0;
    top: 0;
    padding: 0 0.3rem;
    margin: 0 0.5rem;
    transform: translateY(-50%);
    background-color: white;
    color: $color-primary-lighten;
  }

  input {
    height: 50px;
    margin: 5px;
    padding: 3px 10px;
    border: 3px solid $color-primary-lighten;
    border-radius: 5px;
    font-size: 1.2rem;

    &:focus {
      border: 3px solid $color-primary-darken;
    }

    &:focus + label {
      color: $color-primary-darken;
    }

    &:focus-visible {
      outline: none;
    }
  }
}

.container-image {
  position: relative;
}

.img-home {
  position: absolute;

  &__p1 {
    top: 80px;
    right: -100px;
    width: 150px;
    transform: rotate(-40deg);
    z-index: -1;
  }

  &__p2 {
    top: 470px;
    left: -50px;
    width: 220px;
    z-index: -1;
  }

  &__p3 {
    top: 470px;
    right: -50px;
    width: 220px;
    z-index: -1;
  }
}

.link {
  margin: 1rem;
  font-size: 1.5rem;
}

p {
  text-align: center;
  margin-top: 20px;
  font-size: 1.1rem;
}

#btnSignUp {
  width: 120px;
}
</style>
