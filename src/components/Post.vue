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

      <div v-if="post._count.comments > 0">
        <button @click="seen = !seen" class="actions__comment">
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
            <div class="comment__author">
              <p class="comment__name">By <b>{{ comment.author.full_name }}</b></p>
              <p class="comment__date">{{ comment.created_at | dateParse('YYYY.MM.DD HH:mm:ss') | dateFormat('DD MMM HH:mm') }}</p>
            </div>
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

.post {
  &__name {
    margin-bottom: 5px;
  }

  &__date {
    margin-top: 0;
  }
}

.actions {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;

  &__like {
    color: $color-danger-darken;
  }

  &__comment {
    background-color: white;
    color: $color-primary;
    border: 0;
    text-decoration: underline;
  }
}

.comments {
  margin-top: 5px;
  padding: 0 15px;
  background-color: lighten($color-secondary-lighten, 10%);
  border-radius: 10px;
}

.comment {
    padding: 10px;
  
  &__content {
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 10px;
    background-color: white; 
  }

  &__author {
    display: flex;
    justify-content: end;
    margin: 0;
  }

  &__date, &__name {
      margin: 0;
    }

  &__date {
    margin-left: 1rem;
  }
}

</style>
