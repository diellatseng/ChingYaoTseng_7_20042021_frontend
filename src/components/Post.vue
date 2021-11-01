<template>
  <div class="container">
    <h3 class="post__name">{{ post.author.full_name }}</h3>
    <p class="post__date">{{ post.created_at | dateParse('YYYY.MM.DD HH:mm:ss') | dateFormat('DD MMM HH:mm')}}</p>

    <p>{{ post.content }}</p>
    <div class="actions">
      <div class="actions__like">
        <font-awesome-icon icon="fa-solid fa-heart" />
        <font-awesome-icon icon="fa-regular fa-heart" /> 
        {{ post._count.likes }}
      </div>

      <div v-if="post._count.comments > 0" class="actions__comment">
        <button @click="seen = !seen">
          {{ post._count.comments }}
          <span v-if="post._count.comments == 1">comment</span>
          <span v-else>comments</span>
        </button>
      </div>
    </div>

    <!-- <p>{{ likes }}</p> -->

    <div v-show="seen" class="comments">
      <div :key="comment.id" v-for="comment in post.comments" >
        <div class="comment">
            <p class="comment__content">{{ comment.content }}</p>
            <h4 class="comment__author">By {{ comment.author.full_name }} (User ID)</h4>
        </div>
      </div>
    </div>
        
  </div>
</template>

<script>

import Vue from 'vue';
import VueFilterDateParse from '@vuejs-community/vue-filter-date-parse';
import VueFilterDateFormat from '@vuejs-community/vue-filter-date-format';

Vue.use(VueFilterDateParse);
Vue.use(VueFilterDateFormat);

export default {
  name: "Post",
  props: {
    post: Object,
  },
  
  data(){
    return {
      seen: false,
      userID: '',
      likes: this.post.likes
    }
  },
  beforeCreate() {
    this.userID = localStorage.userID;
  },
};
</script>

<style scoped lang="scss">
.container {
  padding: 20px;
  margin: 15px;
  border: 2px solid $color-fade-lighten;
}

.comments {
  margin-top: 5px;
  padding-top: 5px;
}

.comment {
    margin: 10px 0;
  
  &__content {
    padding: 15px;
    border-radius: 10px;
    background-color: lighten($color-secondary-lighten, 10%); 
  }

  &__author {
    margin: 0;
  }
}

.post {
  &__name {
    margin-bottom: 5px;
  }

  &__date {
    margin-top: 0;
    color: darken($color-fade-darken, 20%);
  }
}

.actions {
  display: flex;
  justify-content: space-between;

  &__like {
    color: $color-danger-darken;
  }
}

</style>
