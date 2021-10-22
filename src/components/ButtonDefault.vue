<template>
  <button @click="onClick()" class="button rounded">
    <slot></slot>
  </button>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$emit('btn-click')
    }
  }
};
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
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
}
.rounded {
  border-radius: 3rem;
}
</style>

