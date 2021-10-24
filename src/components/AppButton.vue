<template>
  <router-link 
    class="button"
    @click.native="$emit('onClick', $event)"
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
        normal: '',
        small: 'small'
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
          name: 'Home'
        } 
      }
    }
  }
};
</script>

<style scoped lang="scss">
.button {
  width:150px;
  display:flex;
  justify-content:center;
  align-items:center;
  margin: auto;
  padding: 1rem 2rem;
  border-radius: 5px;
  transition-duration: 0.4s;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: white;
  background-color: $color-primary;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
}
.rounded {
  border-radius: 3rem;
}

.small {
  width: auto;
  padding-top: .3rem;
  padding-bottom: .3rem;
  font-size: 1.2rem;
}
</style>
