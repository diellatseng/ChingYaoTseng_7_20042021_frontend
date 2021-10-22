<template>
  <button class="button rounded">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.button {
  transition-duration: 0.4s;
  width: 200px;
  background-color: var(--color-primary);
  border: none;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  color: white;

  &:hover {
    background-color: black;
    color: white;
  }
}
.rounded {
  border-radius: 3rem;
}
</style>

