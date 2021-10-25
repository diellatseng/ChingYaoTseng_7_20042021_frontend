<template>
  <div id="profile">
    <TheHeader />
    <div class="container">
      <div class="profile__card">
        <div class="profile__image">
          <img src="../assets/images/user/1-crop.jpg" />
        </div>
        <div class="profile__content">
          <p>Change Profile Image</p>
          <h2>Mary Jane</h2>
        </div>
      </div>
      <AppButton @click.native="logout" theme="rounded">Log Out</AppButton>
    </div>
    <AppButton theme="squared" size="small" color="danger" id="btnDelete"
      >Delete Account</AppButton
    >
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import AppButton from "@/components/AppButton.vue";

export default {
  name: "Profile",
  components: {
    TheHeader,
    AppButton,
  },
  methods: {
    logout: function() {
      console.log("logged out");
      this.$router.push("/");
    },
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
      border-radius: 10px;
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
</style>