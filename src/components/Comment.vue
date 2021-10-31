<template>
    <div class="container">
        <p class="post__date">{{ comment.created_at }}</p>
        <p class="post__date">{{ comment.content }}</p>
        <p class="post__date">{{ comment.author.full_name }}</p>
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
