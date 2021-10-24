<template>
  <div class="container">
    <form action="post">
      <div class="form-control">
        <label for="post"><slot></slot></label>
        <textarea name="post" rows="4" cols="25" placeholder="Say something..." />
      </div>
      <AppButton size="small">
        Publish
        <font-awesome-icon icon="fa-solid fa-paper-plane" class="icon" />
      </AppButton>
    </form>
  </div>
</template>

<script>
import AppButton from "@/components/AppButton.vue";

export default {
  components: {
    AppButton,
  },
};
</script>

<style scoped lang="scss">
.container {
  padding: 20px;
  margin: 15px;
  border: 2px solid $color-fade-lighten;
}
.form-control {
  position: relative;
  display: flex;
  flex-direction: column;

  label {
    display: block;
    font-size: 1.2rem;
    font-weight: bold;
  }

  textarea {
    margin: 10px 0;
    padding: 3px 10px;
    background-color: lighten($color-fade-lighten, 5%);
    border: none;
    border-radius: 5px;

    &:focus {
      border: 2px solid $color-primary;
      background-color: white;
    }

    &:focus + label {
      color: $color-primary-darken;
    }

    &:focus-visible {
      outline: none;
    }
  }
}
.icon {
  margin-left: 1em;
}

h1 {
  font-size: 1rem;
}
</style>