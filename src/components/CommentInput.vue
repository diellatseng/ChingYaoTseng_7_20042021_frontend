<template>
    <div>
        <form @submit.prevent method="post" class="form">

            <label class="form__label" for="comment"></label>
            <textarea
            v-model="dataPost.content"
            name="comment"
            rows="1"
            placeholder="Leave a comment..."
            class="form__input"
            required
            />
            
            <button type="submit" class="button small" @click="submit()">
            <font-awesome-icon icon="fa-solid fa-paper-plane" class="icon" />

        </button>
        </form>
    </div>
</template>

<script>
export default {
    name: "CommentInput",
    data() {
        return {
            userId: Number,
            dataPost: {
                content: '',
                author_id: this.userId,
            },
        }
    },
    created() {
    this.userId = parseInt(localStorage.userId, 10);
    },
    methods: {
        submit(){
            console.log(this.userId)
        }
    }
}
</script>

<style scoped lang="scss">
.form {
  display: flex;
  border-top: 1px solid $color-fade-lighten;
  padding-top: 1rem;

  &__input {
    width: 100%;
    margin-right: 10px;
    padding: 3px 10px;
    background-color: lighten($color-fade-lighten, 5%);
    border: none;
    border-radius: 5px;

    &:focus {
      border: 1px solid $color-primary;
      background-color: white;
      color: $color-primary-darken;
    }

    &:focus-visible {
      outline: none;
    }
  }
}
.small {
  padding: 1rem;
}
</style>