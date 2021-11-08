<template>
    <div class="comments" v-show="seen">
      <div :key="comment.id" v-for="comment in this.comments">
        <div class="comment">
          <p class="comment__name">
            <b>{{ comment.full_name }}</b>
          </p>

          <div class="comment__content">
            <p>{{ comment.content }}</p>
            <p class="comment__footer">
              {{
                comment.created_at
                  | dateParse("YYYY.MM.DD HH:mm:ss")
                  | dateFormat("DD MMM HH:mm")
              }}

              <!-- Button Delete -->
              <button
                @click="btnDeleteComment(comment.post_id, comment.id)"
                v-if="comment.author_id == userId || userRole == 'ADMIN'"
                class="btn btn__delete__comment"
              >
                <font-awesome-icon icon="fa-regular fa-trash-can" size="lg" />
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

import axios from "axios";

export default {
    name: "Post",
    props: {
        seen: Boolean,
        comments: {
            type: Array
        },
        userId: Number,
        userRole: String,
    },
    methods:{
        btnDeleteComment(PostId, CommentId) {
            console.log("PostId: " + PostId);
            console.log("CommentId: " + CommentId);
            axios
                .delete(
                "http://localhost:3000/api/post/" + PostId + "/comment/" + CommentId,
                {
                    headers: { Authorization: "Bearer " + localStorage.token },
                }
                )
                .then((response) => {
                console.log(response.data);
                window.location.assign("http://localhost:8080/postwall");
                })
                .catch((error) => {
                console.log(error);
                });
    },
    }
}


</script>

<style lang="scss" scoped>
.comments {
  margin-top: 5px;
  border-top: 1px solid $color-fade-lighten;
  background-color: white;
}

.comment {
  padding: 10px;

  &__name {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  &__content {
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 10px;
    background-color: $color-secondary-lightenMax;

    & p {
      margin: 0;
    }
  }

  &__footer {
    margin: 0;
    color: $color-fade-darken;
    font-size: 0.9rem;
    text-align: end;
  }
}

</style>