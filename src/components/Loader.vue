<template>
  <SyncLoader class="loader" />
</template>

<script>
import SyncLoader from "vue-spinner/src/SyncLoader.vue";

export default {
  name: "Loader",
  components: {
    SyncLoader,
  },
};
</script>

<style>
.loader {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  /* margin-top: 100px; */
  justify-content: center;
}
</style>
