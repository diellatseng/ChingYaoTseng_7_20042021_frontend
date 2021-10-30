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
          id="login-form"
          @submit.prevent="login"
          autocomplete="off"
          v-if="currentForm.toLowerCase() === 'login'"
          class="login-form"
        >
          <div class="form-control">
            <label for="email">Email</label>
            <input
              v-model="dataLogin.email"
              type="email"
              id="email"
              name="email"
              placeholder="name@domain.com"
              required
            />
          </div>
          <div class="form-control">
            <label for="password">Password</label>
            <input
              v-model="dataLogin.password"
              type="password"
              name="password"
              placeholder="Your password"
              required
            />
          </div>
          <button type="submit" class="button rounded">Log In</button>
          <p class="message">
            Not registered?
            <a href="#" @click.prevent="toggleForm()">Create an account</a>
          </p>
        </form>

        <!-- Register Form -->
        <form
          v-else
          id="register-form"
          @submit.prevent="register"
          autocomplete="off"
        >
          <div class="form-control">
            <label for="full-name">Full Name</label>
            <input
              v-model="dataResgister.full_name"
              type="text"
              name="full-name"
              placeholder="Tony Stark"
              required
            />
          </div>
          <div class="form-control">
            <label for="email">Email</label>
            <input
              v-model="dataResgister.email"
              type="email"
              id="email"
              name="email"
              placeholder="name@domain.com"
              required
            />
          </div>
          <div class="form-control">
            <label for="password">Password</label>
            <input
              v-model="dataResgister.password"
              type="password"
              name="password"
              placeholder="Your password"
              minlength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              required
            />
            <span class="password__hint"
              >* Must contain at least 1 number and 1 uppercase and 1 lowercase
              letter, and at least 8 or more characters.</span
            >
          </div>
          <button type="submit" class="button rounded">Next</button>
          <p class="message">
            Already registered?
            <a href="#" @click.prevent="toggleForm()">Log In</a>
          </p>
        </form>
      </div>
    </div>

    <img class="img-home img-home__p1" src="../assets/images/1.png" alt="" />
    <img class="img-home img-home__p2" src="../assets/images/2.png" alt="" />
    <img class="img-home img-home__p3" src="../assets/images/3.png" alt="" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      currentForm: "login",
      dataResgister: {
        full_name: "",
        email: "",
        password: "",
      },
      dataLogin: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    toggleForm() {
      this.currentForm = this.currentForm === "login" ? "register" : "login";
    },
    login() {
      axios
        .post("http://localhost:3000/api/user/login", this.dataLogin)
        .then((response) => {
          let log = JSON.parse(response.data);
          localStorage.userId = log.userId;
          localStorage.token = log.token;
          this.$router.push("/postwall");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    register() {
      console.log(this.dataResgister);
      axios
        .post("http://localhost:3000/api/user/register", this.dataResgister)
        .then((response) => {
          let register = JSON.parse(response.data);
          console.log(register);
          this.$router.push("/postwall");
        })
        .catch((error) => {
          console.log(error);
        });
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

/* The style for forms */

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
    padding: 3px 10px;
    border: 3px solid $color-primary-lighten;
    border-radius: 5px;
    font-size: 1.2rem;
    background-color: white;

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

.password__hint {
  color: lighten(black, 40%);
}

/* Page background decoration */

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
