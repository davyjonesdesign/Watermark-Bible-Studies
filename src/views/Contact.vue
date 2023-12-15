<template>
  <div class="about">
    <h1>This is an contact page</h1>
    <SignupForm />
    <Loader />
  </div>
</template>
<script>
import SignupForm from "@/components/SignupForm.vue";
import Loader from "@/components/Loader.vue";

export default {
  name: "Contact",
  components: {
    SignupForm,
    Loader,
  },
};
</script>
