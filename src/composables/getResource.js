import { ref } from 'vue';

const getResource = (id) => {
  const resource = ref(null);
  const errorR = ref(null);

  const loadR = async () => {
    try {
      // eslint-disable-next-line no-undef
      const data = await fetch(
        'https://api.npoint.io/b7585bd7cfa104aceca3/resources/' + id
      );
      if (!data.ok) {
        throw Error('that resource does not exist');
      }
      resource.value = await data.json();
    } catch (err) {
      errorR.value = err.message;
      console.log(errorR.value);
    }
  };

  return { resource, errorR, loadR };
};

export default getResource;
