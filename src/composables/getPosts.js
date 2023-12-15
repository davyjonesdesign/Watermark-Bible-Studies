import { ref } from 'vue';
import studiesData from '../data/studies.js'; // Import local data

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);
  const load = () => {
    try {
      // Assuming studiesData is an array containing your studies
      posts.value = studiesData;
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { posts, error, load };
};

export default getPosts;
