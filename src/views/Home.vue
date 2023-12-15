<template>
  <div class="home">
    <div class="splash-txt">
      <h2>
        Watermark Bible Studies is a bible study web app that archives and serves the Watermark class at Liberty Bible Church in Chesterton, IN. <br> <br>This site is dedicated to supplying God's people with in-depth, exegetical biblical studies so that they might "become mature, attaining to the whole measure of the fullness of Christ."
      </h2>
      <p>Ephesians 4:13</p>
    </div>
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else class="spinner">
      <Loader />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import getPosts from "../composables/getPosts";
import getResources from "../composables/getResources";
import Loader from "../components/Loader.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: { PostList, Loader, Footer },
  setup() {
    const { posts, error, load } = getPosts();
    const { resources, errorR, loadR } = getResources();

    load();
    loadR();

    return { posts, error, resources, errorR };
  },
};
</script>
<style scoped>
.home {
  /* margin: 0px 0px 20px; */
  display: flex;
  flex-direction: column;
  align-items: center;
}
.study-page_img {
  position: absolute;
  top: 0;
  z-index: -10;
}
.splash-txt {
  color: #fff;
  flex-direction: column;
  position: relative;
  align-items: center;
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  font-size: 16px;
  z-index: -7;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.25),
      rgba(0, 0, 0, 0.75)
    ),
    url(https://davyjonesdesign.github.io/data-for-axios/assets/wmstudies/church.jpg);
  background-position: 50%;
  filter: grayscale(100%);
  padding: 40px 10px 40px;
  min-height: 40vh;
  width: calc(100% - 20px);
}
.splash-txt h2 {
  max-width: 960px;
  text-transform: none;
  /* margin: 0 60px; */
  font-weight: 500;
  margin-bottom: 0;
  text-shadow: 1px 1px 6px black;
}
.splash-txt p {
  margin: 5px 0 0 0;
}
 @media (max-width: 768px) {
  .splash-txt h2 {
    margin: 10px;
    font-size: 18px;
  }
}
</style>
