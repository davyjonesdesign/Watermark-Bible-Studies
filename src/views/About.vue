<template>
  <div class="about">
    <div class="about-page">
      <div class="about-img">
        <img src="https://mdl.artvee.com/sftb/601977sl.jpg" alt="bible" />
      </div>
      <div class="img-overlay"></div>

      <div class="about-content">
        <h2>About</h2>
        <p>
          Watemark Bible Studies is dedicated to supplying God's people with
          in-depth, exegetical biblical studies so that they might "become
          mature, attaining to the whole measure of the fullness of Christ."
        </p>
        <p>Ephesisans 4:13 — 41</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.about-page {
  display: flex;
  padding: 40px 60px 40px;
  max-width: 960px;
  margin: 80px auto 40px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: var(--color-bone);
  border-radius: 15px;
  box-shadow: var(--shadow-subtle);
  color: var(--color-periwinkle-dark);
}
.about-img img {
  border-radius: 100%;
  overflow: hidden;
  max-width: 250px;
  object-fit: cover;
  height: 250px;
}
.about-content {
  max-width: 75%;
  margin-left: 30px;
  /* height: 190px; */
}
.about-content h2 {
  margin: 0;
}
 @media (max-width: 768px) {
  .about-page {
    padding: 20px;
    margin: 80px 10px 40px;
  }
}
@media (max-width: 600px) {
  .about-page {
    display: flex;
    padding: 20px;
    margin: 80px 10px 40px;
    flex-direction: column;
  }
  .about-img img {
    display: none;
    width: 100%;
    border-radius: 0;
    /* height: 150px; */
  }
  .about-content h2 {
    text-align: center;
  }
  .about-content {
    text-align: center;
    margin: 0;
    max-width: 100%;
  }
}
</style>
