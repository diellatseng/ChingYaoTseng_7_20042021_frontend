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

    <input type="submit" value="Next">
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
    #sign-up {
        margin: auto;
    }

    .form-control {
        position: relative;
        margin: 20px 0;

        label {
            position: absolute;
            display: block;
            left: 0;
            top: 0;
            padding: 0 0.3rem;
            margin: 0 0.5rem;
            transform: translateY(-50%);
            background-color: white;
            color: gray;
        }

        input {
            height: 40px;
            margin: 5px;
            padding: 3px 7px;
            border: 2px solid ;
           
            font-size: 1.5rem;
        }
    }
</style>