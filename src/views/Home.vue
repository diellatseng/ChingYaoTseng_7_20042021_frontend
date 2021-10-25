<template>
  <div class="home">
    <img
      class="logo"
      alt="Groupmania logo"
      src="../assets/logo/icon-left-font-monochrome-black.svg"
    />
    <div class="container-home">
      <div class="container">
        <form id="log-in">
          <div class="form-control">
            <input type="text" name="email" placeholder="name@domain.com" />
            <label for="email">Email</label>
          </div>
          <div class="form-control">
            <input type="text" name="password" placeholder="Your password" />
            <label for="password">Password</label>
          </div>
          <AppButton :to="{ name: 'PostsWall' }" theme="rounded" id="logIn"
            >Log In</AppButton
          >
        </form>
      </div>
      <AppButton
        :to="{ name: 'signup' }"
        size="small"
        color="accent"
        id="btnSignUp"
        >New Account</AppButton
      >
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
  components: {
    AppButton,
  },
  methods: {
    onClick() {
      this.$router.push("/postswall");
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

.container-home {
  width: 100%;
  margin: auto;
  padding-bottom: 120px;
}

#sign-up {
  width: 100%;
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

#logIn {
  width: auto;
  margin-bottom: 50px;
}

#btnSignUp {
  width: 120px;
}
</style>
