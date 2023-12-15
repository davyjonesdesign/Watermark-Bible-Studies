<template>
  <div>
    <div class="resources-wrapper">
      <div v-if="errorR">
        {{ error }}
      </div>

      <div v-if="resources.length">
        <ResourceList :resources="resources" />
      </div>
      <div v-else class="spinner">
        <Loader />
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import ResourceList from "../components/ResourceList.vue";
import getResources from "../composables/getResources";
import Footer from "@/components/Footer.vue";
import Loader from "../components/Loader.vue";

export default {
  name: "Home",
  components: { ResourceList, Loader, Footer },
  setup() {
    const { resources, errorR, loadR } = getResources();
    loadR();
    return { resources, errorR };
  },
};
</script>

<style scoped>
.resources-wrapper {
  padding: 20px 60px;
  max-width: 960px;
  margin: auto;
}
 @media (max-width: 768px) {
  .resources-wrapper {
    padding: 20px 20px;
  }
}
</style>
