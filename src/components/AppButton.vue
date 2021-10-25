<template>
  <router-link
    class="button"
    @click.native="$emit('onClick', $event)"
    :to="to"
    :class="[themes[theme], sizes[size], colors[color]]"
  >
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      themes: {
        rounded: "rounded",
        squared: "squared",
      },
      sizes: {
        normal: "",
        small: "small",
      },
      colors: {
        danger: "danger",
      },
    };
  },

  props: {
    theme: {
      required: false,
      type: String,
      default: "primary",
    },
    size: {
      required: false,
      type: String,
      default: "normal",
    },
    to: {
      required: false,
      type: Object,
      default() {
        return {
          name: "PostWall",
        };
      },
    },
    color: {
      required: false,
      type: String,
      default: " ",
    },
  },
};
</script>

<style scoped lang="scss">
.button {
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
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

.squared {
  border-radius: 0;
}

.small {
  width: auto;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  font-size: 1.2rem;
}

.danger {
  background-color: $color-danger;
}
</style>
