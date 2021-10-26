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
          @submit.prevent="submitLoginForm"
          autocomplete="off"
          v-if="currentForm.toLowerCase() === 'login'"
          class="login-form"
          novalidate
        >
          <div class="form-control">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="name@domain.com"
              required
            />
            <span class="error" aria-live="polite"></span>
          </div>
          <div class="form-control">
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Your password"
              minlength="8"
              maxlength="255"
              pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])$"
              required
            />
            <span class="error" aria-live="polite"></span>
          </div>
          <button class="button rounded">Log In</button>
          <p class="message">
            Not registered?
            <a href="#" @click.prevent="toggleForm()">Create an account</a>
          </p>
        </form>

        <!-- Register Form -->
        <form v-else id="register-form">
          <div class="form-control">
            <input type="text" name="full-name" placeholder="Tony Stark" />
            <label for="full-name">Full Name</label>
          </div>
          <div class="form-control">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="name@domain.com"
            />
            <label for="email">Email</label>
          </div>
          <div class="form-control">
            <input type="text" name="password" placeholder="Your password" />
            <label for="password">Password</label>
          </div>
          <AppButton @click.native="onClick" theme="rounded">Next</AppButton>
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
      this.$router.push("/postwall"); //Add authorization
    },
    toggleForm() {
      this.currentForm = this.currentForm === "login" ? "register" : "login";
    },
    submitLoginForm() {
      const form = document.getElementById("login-form");
      const email = document.getElementById("email");
      const emailError = document.querySelector("#email + span.error");

      email.addEventListener("input", function () {
        if (email.validity.valid) {
          emailError.textContent = "";
          emailError.className = "error";
          console.log("email validated");
        } else {
          console.log("email not validated");
          showError();
        }
      });

      form.addEventListener("submit", function (event) {
        console.log(`Form submitted`); //put submit function here
        if (!email.validity.valid) {
          showError();
          event.preventDefault();
        }
      });

      function showError() {
        const email = document.getElementById("email");
        if (email.validity.valueMissing) {
          emailError.textContent = "You need to enter an e-mail address.";
        } else if (email.validity.typeMismatch) {
          emailError.textContent =
            "Entered value needs to be an e-mail address. For example: yourname@domain.com";
        }
        emailError.className = "error active";
      }
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

/* This is our style for the forms */

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

/* This is our style for the invalid fields */

input:focus:invalid {
  border-color: white;
}

input:focus:required:invalid {
  border-color: $color-danger;
  background-color: lighten($color-danger-lighten, 25%);
}

/* This is the style of our error messages */

.error {
  width: 100%;
  padding: 0;
  font-size: 80%;
  color: $color-danger-darken;
  background-color: white;
}

.error.active {
  padding: 0.3em;
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
