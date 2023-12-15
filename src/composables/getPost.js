import { ref } from 'vue';

const getPost = (path) => { // Change the parameter name to path
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      // eslint-disable-next-line no-undef
      const data = await fetch(
        `https://api.npoint.io/b7585bd7cfa104aceca3/studies/${path}`
      );
      console.log('URL:', `https://api.npoint.io/b7585bd7cfa104aceca3/studies/${path}`);

      if (!data.ok) {
        throw Error('that post does not exist');
      }
      post.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { post, error, load };
};

export default getPost;
