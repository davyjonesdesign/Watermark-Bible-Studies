<template>
    <a v-bind:href="resource.bookLink" target="_blank">
      <p class="book-label">{{ resource.label }}</p>
      <div class="book-jacket">
        <img v-bind:src="resource.bookImg" v-bind:alt="resource.title" />
      </div>
      <div class="resource-card_content">
        <div class="resource_content">
          <h4>"{{ titleSnippet }}"</h4>
          <p class="resource-author">
            Author / Editor :
            <span class="resource-authorName">{{ resource.author }}</span>
          </p>
          <!-- <p class="resource-description">{{ snippet }}</p> -->
        </div>
        <button class="postCard-btn">Resource Link</button>
      </div>
    </a>
</template>

<script>
import { computed } from "vue";

export default {
  props: ["resource"],
  setup(props) {
    const snippet = computed(() => {
      return props.resource.bookDescription.substring(0, 125) + "...";
    });
    const titleSnippet = computed(() => {
      return props.resource.title.substring(0, 45) + "...";
    });
    return { snippet, titleSnippet };
  },
};
</script>

<style>
.resource_content h4 {
  margin: 20px 0 10px;
  font-size: 16px;
}
.book-jacket {
  width: 100%;
  background: var(--color-gray-lighter);
  overflow: hidden;
  border-radius: 0;
  align-items: center;
  display: flex;
  min-height: 250px;
  justify-content: center;
}
.book-jacket img {
  margin: 20px;
  height: 225px;
  box-shadow: var(--shadow-subtle);
  width: auto;
  transform: scale(1);
  transition: var(--transition-longer);
}
.book-label {
  /* position: absolute; */

  z-index: 100;
  margin: 0px;
  padding: 6px 0 5px;
  border-radius: 20px 20px 0 0;
  width: 100%;
  text-align: center;
  background: var(--color-gray-lightest);
  /* border-bottom: 2px solid var(--color-gray); */
  color: var(--color-gray-dark);
  font-weight: 600;
  display: flex;
  justify-content: center;
}
.resource-card_content {
  padding: 0px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.resource-description {
  font-size: 14px;
  margin: 0px 0 40px;
}
.resource-author {
  font-size: 12px;
  margin: 0px 0 10px;
}
.resource-card:hover {
  background: white;
  /* border: 1px solid var(--periwinkle-light); */
  box-shadow: var(--shadow-bold);
  transform: scale(1.025);
}
/* .resource-card:hover .postCard-btn {
  border-color: var(--color-periwinkle-dark);
  background: var(--color-periwinkle-light);
  color: var(--color-periwinkle-dark);
} */

.resource-card:hover img {
  transform: scale(1.1);
  opacity: 0.85;
}
</style>
