<template>
  <router-link 
    class="button"
    :to="to"
    :class="[
      themes[theme], sizes[size]
    ]" 
  >
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      themes: {
        rounded: 'rounded'
      },
      sizes: {
        normal: ''
      }
    }
  },

  props: {
    theme: {
      required: false,
      type: String,
      default: 'primary'
    },
    size: {
      required: false,
      type: String,
      default: 'normal'
    },
    to: {
      required: false,
      type: Object,
      default() {
        return {
          name: 'home'
        } 
      }
    }
  }
};
</script>

<style scoped lang="scss">
.button {
  display:flex;
  width:150px;
  justify-content:center;
  align-items:center;
  transition-duration: 0.4s;
  background-color: $color-primary;
  margin: auto;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
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
