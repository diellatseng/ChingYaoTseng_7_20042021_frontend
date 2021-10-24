<template>
  <div class="container">
    <h1>hello world</h1>
    <AppButton size="small"
      >Publish<font-awesome-icon icon="fa-solid fa-paper-plane" class="icon"
    /></AppButton>
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
  border: 2px solid $color-fade;
}
.icon {
  margin-left: 0.5em;
}
</style>