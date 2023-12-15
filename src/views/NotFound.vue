<template>
  <div class="notFound-container">
    <h2>Page Not Found - 404 Error</h2>
    <p>
      Oopsies! Looks like this page does not exist. No worries. Click the button
      below to return to our home page.
    </p>
    <router-link class="postCard-btn notFound-btn" :to="{ name: 'Home' }"
      >Home</router-link
    >
  </div>
</template>

<style scoped>
.notFound-container {
  background: white;
  max-width: 960px;
  border-radius: 10px;
  box-shadow: var(--shadow-subtle);
  margin: 60px auto;
  color: var(--color-periwinkle-dark);
  padding: 20px 40px;
}
.notFound-container h2,
.notFound-container p {
  margin: 10px 0;
}
.notFound-btn {
  width: auto;
}
</style>
