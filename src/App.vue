<template>
  
  <div class="content-wrapper">
    <div id="nav">
      <div class="nav-content">
        <div class="nav-logo">
          <router-link :to="{ name: 'Home' }" class="logo-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path
                d="M12.72632,17.90554l-.11025-.27358L10.253,21.6903l-.03222.05472.00169.00539-.20517.35242a17.1872,17.1872,0,0,1-1.915,2.1822.66851.66851,0,0,0-.17726.7155l.72912,1.85713a.46529.46529,0,0,0,.431.30619l1.28239.01578c.86426.01215,1.44036.01991,2.11126.01789l.21251-.90489a3.04936,3.04936,0,0,1-1.30447-.5987,3.08951,3.08951,0,0,1-.39856-3.13221l1.17485-2.01727.03636-.061-.00207-.00493.89163-1.53129.03636-.061C12.9894,18.55761,12.85508,18.22459,12.72632,17.90554Z"
              />
              <path
                d="M31.67976,26.16531a3.59565,3.59565,0,0,1-1.98568-1.97814,97.28842,97.28842,0,0,1-4.58816-12.29075l-.86528.05077-.0695-.04183-.02769.04755-.00532.00033-.05306.09989L19.38192,20.128C17.262,14.51239,13.80005,5.28353,13.75055,5.15023a.46329.46329,0,0,0-.432-.30619c-1.21319.00013-3.093-.03358-4.25411-.03525l-.12111.91752a3.03257,3.03257,0,0,1,2.06432,1.92186c.04956.10856.48678,1.25612,1.12093,2.933L9.24206,15.53828c-.599-1.47545-1.05857-2.664-1.46779-3.80127L5.1859,5.15234A.46413.46413,0,0,0,4.751,4.84562c-1.33988.005-3.404-.02875-4.6282-.03209L0,5.75367c.96376.17934,1.60759.78692,2.305,2.05915A97.59394,97.59394,0,0,1,6.89213,20.10358l.866-.05083.06883.04136.02737-.047.00562-.00033.05341-.101,4.70281-8.07406c2.1195,5.61553,5.58185,14.8453,5.63135,14.9786a.45944.45944,0,0,0,.433.30619c1.21557-.00046,3.087.03185,4.25313.03473l.12112-.91752a3.02958,3.02958,0,0,1-2.06335-1.92133c-.04981-.10856-.48732-1.25652-1.12182-2.934L22.75645,16.461c.593,1.45874,1.0524,2.64766,1.46732,3.80252l2.5884,6.58362a.46385.46385,0,0,0,.4349.30724c1.35554-.00556,3.37265.02977,4.62822.03157L32,26.24738Z"
              />
              <path
                d="M19.28829,14.135l.09367.23412,2.39637-4.11463-.00163-.00513.21036-.36124a17.34513,17.34513,0,0,1,1.90976-2.17364A.67086.67086,0,0,0,24.07405,7L23.344,5.14181a.46007.46007,0,0,0-.43-.30566l-1.28338-.01578c-.86427-.012-1.44037-.02041-2.11127-.01736l-.2125.90436a3.06993,3.06993,0,0,1,1.30447.5987,3.08642,3.08642,0,0,1,.39857,3.13168L19.835,11.455l-.03636.061.00224.00545-.89181,1.53129-.03638.06155C19.01407,13.45562,19.155,13.80373,19.28829,14.135Z"
              />
            </svg>
            <h1 id="logo-long">Watermark Bible Studies</h1>
            <h1 id="logo-short">WM Studies</h1>
          </router-link>
        </div>
        
        <div class="nav-right">
          <router-link :to="{ name: 'Home' }">Home</router-link>
          <!-- <router-link :to="{ name: 'About' }">About</router-link> -->
          <router-link :to="{ name: 'Resources' }">Resources</router-link>
          <!-- <router-link :to="{ name: 'Contact' }">Contact</router-link> -->
        </div>
        <HamButton />
      </div>
    </div>

    <router-view class="page-wrapper" />
    
  </div>
</template>
<script>
import HamButton from "./components/HamButton.vue";

export default {
  components: { HamButton },
  
};
</script>

<style>
@import url("https://use.typekit.net/tki1qfa.css");
button,
input[type="button"],
input[type="reset"],
input[type="submit"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  margin: 0;
  padding: 0;
  font: inherit;
  outline: none;
  cursor: pointer;
  background: transparent;
}
html {
  --transition: all 0.1s ease-in-out;
  --transition-fast: all 0.05s ease-in-out;
  --transition-longer: all 0.15s ease-in-out;
  --transition-longest: all 0.25s ease-in-out;
  --shadow: 0 0px 8px rgba(0, 0, 0, 0.2);
  --shadow-text: 1px 1px 5px rgba(0, 0, 0, 0.6);
  --shadow-subtle: 0px 2px 8px rgba(0, 0, 0, 0.25);
  --shadow-bold: 0px 5px 10px rgba(0, 0, 0, 0.5);
  --focus-background: rgba(255, 255, 255, 0.85);
  --color-gray-darkest: #2e2e2e;
  --color-gray-darker: #3f3f3f;
  --color-gray-dark: #6a6a6a;
  --color-gray: #878787;
  --color-gray-med: #9b9b9b;
  --color-gray-light: #bdbdbd;
  --color-gray-lighter: #d1d1d1;
  --color-gray-lightest: #eeeeee;

  /* new colors */
  --color-tobacco: #7c352d;
  --color-cognac: #d06a3d;
  --color-leather: #a35c3c;
  --color-champagne: #fbe1c9;
  --color-goldenrod: #d1b02b;
  --color-white: #fff;
  --color-periwinkle-light: #b4dbfe;
  --color-periwinkle: #3d627b;
  --color-periwinkle-dark: #00040a;
  --color-bone: #f6f6eb;
  font-family: urw-form, Arial, Helvetica, sans-serif;
  line-height: 1.5;
  font-size: 18px;
  margin: 0;
  background: var(--color-tobacco);
  overflow-x: hidden;
  overflow-y: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
  scroll-behavior: smooth;
  height: 100vh;
  color: white;
  height: -webkit-fill-available;

}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  min-height: 100vh;
  min-height: -webkit-fill-available;

}
.content-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: -webkit-fill-available;
  justify-content: space-between;
}
.page-wrapper {
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  scroll-behavior: smooth;
  margin: 54px 0 0;
}
/* Hide scrollbar for Chrome, Safari and Opera */

/* width */
.page-wrapper::-webkit-scrollbar {
  width: 10px;
  /* height: calc(100vh - 80px); */
  background: var(--color-gray-med);
}

/* Track */
.page-wrapper::-webkit-scrollbar-track {
  /* box-shadow: inset 0 0 5px black;  */
  border-radius: 16px;
}

/* Handle */
.page-wrapper::-webkit-scrollbar-thumb {
  background: var(--color-gray-lightest);
  box-shadow: 1px 0 1px var(--color-periwinkle-dark);
  border-radius: 16px;
}

/* Handle on hover */
.page-wrapper::-webkit-scrollbar-thumb:hover {
  background: var(--color-periwinkle-light);
  cursor: pointer;
}

body {
  margin: 0;
}
h2 {
  margin: 20px auto;
  text-transform: capitalize;
}
h3,
h4,
h5 {
  text-transform: capitalize;
  margin: 30px 0 10px;
}
p,
ul {
  margin: 15px 0px;
}
ul {
  margin: 0px 0px 15px;
  padding-inline-start: 25px;
}
a {
  text-decoration: none;
  width: 100%;
}
#page-wrapper::-webkit-scrollbar {
  display: none;
}

#nav {
  position: fixed;
  display: block;
  top: 0;
  height: 54px;
  width: 100%;
  background: var(--color-periwinkle);
  /* box-shadow: var(--shadow-text);
  box-shadow: 0px 2px 4px var(--gray-darkest); */
  z-index: 1000;
}
.nav-content {
  padding: 0 20px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  height: 54px;
  /* border-bottom: 2px solid var(--color-periwinkle-dark); */
}
.nav-logo {
  /* flex-grow: 5; */
  /* min-width: 30vw; */
  align-self: center;
  height: 54px;
}
.nav-logo h1 {
  margin: 20px 0;
  font-size: 20px;
  font-weight: 600;
  text-transform: capitalize;
}
.logo-link {
  justify-content: center;
  font-size: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  color: var(--color-white);
  height: 54px;
}
.logo-link svg {
  min-height: 50px;
  max-height: 50px;
  margin-right: 5px;
  fill: var(--color-white);
}
#logo-long {
  margin: 0;
  width: 300px;
}
#logo-short {
  display: none;
  min-width: 125px;
}
#mobileMenu {
  display: none;
}
.nav-right {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-self: flex-end;
  align-items: center;
}

#nav a {
  font-weight: bold;
  text-decoration: none;
  /* border-radius: 4px; */
}
.nav-right a {
  border-radius: 32px;
  margin-left: 5px;
  padding: 2px 16px 1px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  color: var(--color-white);
  border: 2px solid var(--color-periwinkle);
  background: var(--color-periwinkle);
  height: 48px;

  /* border-bottom-color: var(--color-periwinkle); */
}
.nav-right a.router-link-exact-active {
  background: var(--color-periwinkle);
  color: var(--color-white);
  border-color: var(--color-white);
}
.nav-right a:hover, .nav-right a.router-link-exact-active:hover {
  border-color: var(--color-periwinkle-dark);
  color: var(--color-periwinkle-dark);
  text-decoration: var(--color-periwinkle-dark) underline !important;
  background: var(--color-periwinkle-light);
  /* border-bottom-color: var(--color-periwinkle-dark); */
}
/* buttons */

.postCard-btn {
  background-color: var(--color-periwinkle);
  color: var(--color-white);
  padding: 12px 0;
  margin: 0;
  text-align: center;
  text-decoration: none;
  font-weight: 700;
  display: inline-block;
  font-size: 14px;
  border-radius: 24px;
  cursor: pointer;
  width: 100%;
  align-self: center;
  border: 2px solid var(--color-periwinkle);
}
.postCard:hover, .resource-card:hover {
  box-shadow: var(--shadow-bold);
  background: var(--color-white);
  cursor: pointer;
  transform: scale(1.05);
  button {
    border-color: var(--color-periwinkle-dark);
  box-shadow: var(--shadow-bold);
  background: var(--color-periwinkle-light);
  color: var(--color-periwinkle-dark);
  cursor: pointer;
  }
}


@media (max-width: 768px) {
  .nav-content {
    align-items: center;
    padding: 0 10px;
  }
  
  .search-wrapper {
    padding: 10px 10px;
  }
}
input, select {
  border-radius: 30px;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  appearance: none;
  -moz-appearance: none;
  height: 48px;
  font-weight: 600;
  font-size: 15px;
  padding: 0px 16px 0 16px;
  border: none;
  box-shadow: none;
  outline: none;
  cursor: pointer;
  background: var(--color-white);
  border: 2px solid var(--color-white);
  color: var(--color-periwinkle-dark);
  transition: var(--transition);

}

input {
  transition: var(--transition);
  padding: 0px 42px 0 16px;

}

input::placeholder {
  color: var(--color-gray-dark);

}
input:focus {
  border-color: var(--color-periwinkle-dark);
  /* box-shadow: var(--shadow-bold); */
  background: var(--color-white);
  + .input-svg {
    fill: var(--color-periwinkle-white) !important;
  }
}
select {
  /* margin-right: 10px; */
  cursor: pointer;
  z-index: 1;
  
  background-image: linear-gradient(
      45deg,
      transparent 50%,
      var(--color-periwinkle-dark) 50%
    ),
    linear-gradient(135deg, var(--color-periwinkle-dark) 50%, transparent 50%),
    linear-gradient(
      to right,
      var(--color-white),
      var(--color-white)
    );
    
  /* background-position: calc(100% - 19px) calc(100% - 16px),
    calc(100% - 12px) calc(100% - 17px), 100% 0; */
  /* background-size: 8px 8px, 8px 7px, 40px 100%; */
  background-position:    calc(100% - 20px) calc(100% - 16px), 
   calc(100% - 10px) calc(100% - 16px), 0 100%;
  background-size: 10px 10px, 10px 10px, 40px 100%;
  background-repeat: no-repeat;
  transition: var(--transition);
}

select:focus {
  border-color: var(--color-periwinkle-dark);
  background-image: linear-gradient(
      135deg,
      transparent 50%,
      var(--color-periwinkle-dark) 50%
    ),
    linear-gradient(45deg, var(--color-periwinkle-dark) 50%, transparent 50%),
    linear-gradient(
      to right,
      var(--color-white),
      var(--color-white)
    );
  background-position:    calc(100% - 20px) calc(100% - 18px), 
   calc(100% - 10px) calc(100% - 18px), 0 100%;
  /* background: var(--color-white); */
}
@media screen and (-webkit-min-device-pixel-ratio: 0) {
  select {
    padding-right: 25px;
  }
}
@media screen and (max-width: 768px) {
  select {
    padding-right: 25px;
  }
}
option {
  padding: 15px;
  margin: 10px;
  font-size: 16px;
  text-transform: capitalize;
}
.error {
  margin: auto;
  padding: 40vh auto;
  text-align: center;
  width: 100vw;
  height: 100vh;
  margin-top: 16px;
  background: var(--color-cognac);
  color: white;
}
footer {
  background: var(--color-periwinkle-dark);
  padding: 10px 20px 15px;
  text-align: left;
  width: calc(100vw - 50px);
  display: flex;
  flex-direction: row;
  font-size: 14px;
  font-weight: 400;
  justify-content: space-between;
  align-items: baseline;
}
footer p {
  margin: 0;
  padding: 2px 0;
}
.web-credit {
  font-weight: 500;
  color: var(--color-bone);
}
.copyright {
  padding-top: 3px;
  color: var(--color-gray-light);
  text-align: right;
}
.line-break {
  color: var(--color-periwinkle);
  margin: 0 3px;
}
.footer-link {
  color: var(--color-periwinkle-light);
}
.footer-link:visited {
  color: var(--color-periwinkle-light);
}
.footer-link:hover {
  color: var(--color-white);
}
@media screen and (max-width: 768px) {
  footer {
    font-size: 12px;
  }
  .image-credit,
  .copyright {
    /* font-size: 14px; */
  }
  #logo-short {
    display: none;
  }
}
@media (max-width: 600px) {
  .nav-right {
    display: none;
  }
  #mobileMenu {
    display: block;
  }
  .ham {
    display: block;
  }
  #logo-long {
    display: none;
  }
  #logo-short {
    display: block;
  }
}

</style>
