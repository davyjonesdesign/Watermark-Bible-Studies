<template>
  <div>
    <div class="resource-head">
      <h2>Resources</h2>
      <select v-model="bookSelect" class="book-select">
        <option v-for="book in books" :key="book">{{ book }}</option>
      </select>
    </div>
 <div class="resource-cards">
      <div
        v-for="resource in bookFilter"
        :key="resource.id"
        class="resource-card"
      >
        <SingleResource :resource="resource" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch, computed } from "@vue/runtime-core";
import SingleResource from "./SingleResource.vue";

export default {
  props: ["resources"],
  components: { SingleResource },
  setup(props) {
    const bookSelect = ref("All Books");
    const books = ref(["All Books", "Ezra", "Nehemiah", "Esther", "Matthew"]);
    const tempResources = ref(props.resources);
    console.log(tempResources);
    watch(bookSelect, () => {
      console.log("watched bookSelect");
    });
    const bookFilter = computed(() => {
      var tempResources = props.resources;

      tempResources = tempResources.filter((resource) => {
        if (bookSelect.value !== "All Books") {
          return resource.label.includes(bookSelect.value);
        } else {
          return props.resources;
        }
      });

      tempResources = tempResources.reduce(
        (acc, x) => acc.concat(acc.find((y) => y.title === x.title) ? [] : [x]),
        []
      );
      return tempResources;
    });
    return { tempResources, books, bookSelect, bookFilter };
  },
};
</script>

<style>
.resource-head {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid var(--color-leather);
  margin: 0 0 40px;
}
.resource-head h2 {
  margin: 0;
  padding: 0;
  color: var(--color-white);
}
.resource-head select {
  margin: 20px 0;
  border-radius: 30px;
  width: 150px;
}
.resource-cards {
  /* margin: 20px auto 40px; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  justify-content: space-between;
  align-content: space-between;
  min-height: 100vh;
  gap: 20px;
}
.resource-card {
  background: var(--color-gray-lightest);
  border-radius: 36px;
  width: calc(33% - 11px);
  display: flex;
  transition: var(--transition);
  /* border: 1px solid rgba(0, 0, 0, 0); */
}
.resource-card a {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
  color: var(--color-gray-darkest);
}
 @media (max-width: 840px) {
  .resource-card {
    width: calc(50% - 10px);
  }
}
@media (max-width: 600px) {
  .resource-card {
    width: 100%;
  }
  .resource-head select {
    height: 60px;
  }
}
</style>
