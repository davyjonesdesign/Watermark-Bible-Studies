import { ref } from 'vue';

const getResources = () => {
  const resources = ref([]);
  const errorR = ref(null);

  const loadR = async () => {
    try {
      // eslint-disable-next-line no-undef
      const data = await fetch(
        'https://api.npoint.io/b7585bd7cfa104aceca3/resources'
      );
      if (!data.ok) {
        throw Error('no data available');
      }
      resources.value = await data.json();
    } catch (err) {
      errorR.value = err.message;
      console.log(errorR.value);
    }
  };

  return { resources, errorR, loadR };
};

export default getResources;
