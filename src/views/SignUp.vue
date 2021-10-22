<template>
  <form id="sign-up">
    <div class="form-control">
      <input type="text" name="full-name" placeholder="Tony Stark" />
      <label for="full-name">Full Name</label>
    </div>
    <div class="form-control">
      <input type="text" name="email" placeholder="name@domain.com" />
      <label for="email">Email</label>
    </div>
    <div class="form-control">
      <input type="text" name="password" placeholder="Your password" />
      <label for="password">Password</label>
    </div>

    <input type="submit" value="Next" />
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#sign-up {
    width: 100%;
    margin: auto 1.5rem;
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
</style>