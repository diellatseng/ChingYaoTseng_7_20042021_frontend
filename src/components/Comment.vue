<template>
    <div v-show="seen" class="comments">
      <div :key="comment.id" v-for="comment in post.comments" >
        <div class="comment">
            <p class="comment__content">{{ comment.content }}</p>
            <h4 class="comment__author">By {{ comment.author_id }} (User ID)</h4>
            <!-- <p class="comment_date">Commented at: {{ comment.created_at }}</p> -->
        </div>
      </div>
    </div>
</template>

<script>

export default {
    name: "Comment",
    props: {
        comment: Object,
  },
}
</script>
