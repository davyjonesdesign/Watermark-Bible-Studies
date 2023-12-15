<template>
  <div>
    {{ console.log(post.path) }}
    <router-link
      :to="{ name: 'Details', params: { book: post.book, path: post.path } }"
      class="postCard"
    >
      <div class="card-img">
        <img :src="post.image" alt="post.verse" />
        <div class="post-date">{{ formatDate(post.date) }}</div>
      </div>
      <div class="post-content">
        <div class="post-content-text">
          <h2 class="post-title">{{ post.verse }}</h2>
          <h4 class="post-verse">{{ post.title }}</h4>
          <!-- <p class="post-snippet">{{ snippet }}</p> -->
          <p class="post-snippet" ref="snippetRef">{{ post.content }}<span>...</span></p>
        </div>

        <button class="postCard-btn">{{ post.verse }}</button>
      </div>
    </router-link>

    <span v-for="tag in post.tags" :key="tag"> #{{ tag }} </span>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
    showDescription: {
      type: Boolean,
      default: true, // Display description by default, change to false if you want to hide it
    },
  },
  setup(props) {
    const snippetRef = ref(null);

    onMounted(() => {
      // Adjust the number of lines based on your design
      const maxLines = 3;
      truncateSnippet(maxLines);
    });

    const truncateSnippet = (maxLines) => {
      const snippetElement = snippetRef.value;
      if (snippetElement) {
        const lineHeight = parseInt(window.getComputedStyle(snippetElement).lineHeight);
        const maxHeight = lineHeight * maxLines;
        snippetElement.style.maxHeight = `${maxHeight}px`;
        snippetElement.style.overflow = "hidden";
      }
    };
    const formatDate = (dateString) => {
      const options = { year: 'numeric', month: 'short' };
      const formattedDate = new Date(dateString).toLocaleString('en-US', options);
      return formattedDate;
    };

    return { snippetRef, formatDate };
  },
};
</script>

<style>
.postCard {
  background: var(--color-gray-lightest);
  display: flex;
  flex-direction: column;
  border-radius: 20px 20px 36px 36px;
  width: 100%;
  box-shadow: var(--shadow-subtle);
  overflow: hidden;
  /* max-width: 960px; */
  height: 100%;
  transition: var(--transition-longer);

}
.postCard img {
  display: block;
  height: 300px;
  width: 100%;
  object-position: top;
  overflow: hidden;
  object-fit: cover;
  transition: var(--transition-longer);
  transform: scale(1.25);
}
.card-img {
  background-color: var(--color-periwinkle-dark);
  overflow: hidden;
  /* width: 600px; */
  height: 200px;
  position: relative;
  & .post-date {
    position: absolute;
    top: 16px;
    right: 16px;
    font-weight: 500;
    font-size: 14px;
    color: var(--color-periwinkle-dark);
    background: #ffffffa8;
    padding: 3px 10px 2px;
    border-radius: 30px;
    /* opacity: .5; */
  }
}
.post-content {
  margin: 10px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-height: 300px;
}
.post-verse {
  font-size: 18px;
  margin: 5px 0;
  align-self: flex-start;
  color: var(--color-periwinkle);
  /* position: absolute; */
}
.post-title {
  margin: 5px 0;
  font-size: 26px;
  text-decoration: none;
  color: var(--color-gray-darkest);
}
.post-snippet {
  margin: 10px 0 5px;
  color: var(--color-gray-dark);
  width: 90%;
  font-size: 16px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Adjust the number of lines */
  -webkit-box-orient: vertical;
  max-height: 3em; /* Adjust the max height */
  line-height: 1.5em;
}
.post-snippet::after {
  content: '...';
  display: inline-block;
}
.postCard:hover img {
  transform: scale(1);
  opacity: 0.65;
}
</style>
