<template>
  <button class="button rounded">
    <slot></slot>
  </button>
</template>

<script>
  export default {};
</script>

<style scoped>
.button {
  transition-duration: 0.4s;
  width: 200px;
  background-color: var(--primary);
  border: none;
	padding: 1rem 2rem;
  font-size: 1.5rem;
  color: white;
}

.button:hover {
  background-color: #212921; /* Green */
  color: white;
}

.rounded {
    border-radius: 3rem;
}
</style>

