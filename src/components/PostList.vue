<template>
  <div>
    <div class="post-head">
      <h2 class="post-head_header">Bible Studies</h2>
      <div class="search-wrapper">
        <button
          @mouseover="showSecondDiv"
          @mouseleave="hideSecondDiv"
          @click="toggleDiv"
          :class="{
            btnActive: isDivVisible,
            srchTextActive: isSecondDivVisible,
          }"
          class="search-btn"
        >
          <svg
            class="search-btn-svg"
            v-if="isDivVisible"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.70698 7.29289C8.31646 6.90237 7.6833 6.90237 7.29277 7.29289C6.90225 7.68342 6.90225 8.31658 7.29277 8.70711L13.5857 15L7.29277 21.2929C6.90225 21.6834 6.90225 22.3166 7.29277 22.7071C7.6833 23.0976 8.31646 23.0976 8.70699 22.7071L14.9999 16.4142L21.2928 22.7071C21.6833 23.0976 22.3165 23.0976 22.707 22.7071C23.0975 22.3166 23.0975 21.6834 22.707 21.2929L16.4141 15L22.707 8.70711C23.0975 8.31658 23.0975 7.68342 22.707 7.29289C22.3165 6.90237 21.6833 6.90237 21.2928 7.29289L14.9999 13.5858L8.70698 7.29289Z"
            />
          </svg>
          <svg
            v-if="!isDivVisible"
            class="search-btn-svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M24 14C24 18.4183 20.4183 22 16 22C14.4087 22 12.9259 21.5354 11.6798 20.7344L7.70711 24.7071C7.31658 25.0976 6.68342 25.0976 6.29289 24.7071C5.90237 24.3166 5.90237 23.6834 6.29289 23.2929L10.1398 19.446C8.81205 18.0179 8 16.1038 8 14C8 9.58172 11.5817 6 16 6C20.4183 6 24 9.58172 24 14ZM22 14C22 17.3137 19.3137 20 16 20C12.6863 20 10 17.3137 10 14C10 10.6863 12.6863 8 16 8C19.3137 8 22 10.6863 22 14Z"
            />
          </svg>
        </button>
        <div class="select-search" v-show="isDivVisible">
          <select v-model="bookSelect" class="book-select">
            <option v-for="book in books" :key="book">{{ book }}</option>
          </select>
          <input
            ref="searchInput"
            type="text"
            v-model="search"
            class="search-input"
            placeholder="Search studies..."
          />

          <svg
            class="search-btn-svg input-svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M24 14C24 18.4183 20.4183 22 16 22C14.4087 22 12.9259 21.5354 11.6798 20.7344L7.70711 24.7071C7.31658 25.0976 6.68342 25.0976 6.29289 24.7071C5.90237 24.3166 5.90237 23.6834 6.29289 23.2929L10.1398 19.446C8.81205 18.0179 8 16.1038 8 14C8 9.58172 11.5817 6 16 6C20.4183 6 24 9.58172 24 14ZM22 14C22 17.3137 19.3137 20 16 20C12.6863 20 10 17.3137 10 14C10 10.6863 12.6863 8 16 8C19.3137 8 22 10.6863 22 14Z"
            />
          </svg>

          <svg
            @click="clearSearchInput"
            class="search-btn-svg input-svg input-close"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.70698 7.29289C8.31646 6.90237 7.6833 6.90237 7.29277 7.29289C6.90225 7.68342 6.90225 8.31658 7.29277 8.70711L13.5857 15L7.29277 21.2929C6.90225 21.6834 6.90225 22.3166 7.29277 22.7071C7.6833 23.0976 8.31646 23.0976 8.70699 22.7071L14.9999 16.4142L21.2928 22.7071C21.6833 23.0976 22.3165 23.0976 22.707 22.7071C23.0975 22.3166 23.0975 21.6834 22.707 21.2929L16.4141 15L22.707 8.70711C23.0975 8.31658 23.0975 7.68342 22.707 7.29289C22.3165 6.90237 21.6833 6.90237 21.2928 7.29289L14.9999 13.5858L8.70698 7.29289Z"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="post-lists">
      <div
        v-for="post in filteredPosts"
        :key="post.id"
        class="post-list_wrapper"
      >
        <SinglePost :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref, watch } from "@vue/runtime-core";
import SinglePost from "./SinglePost.vue";

export default {
  props: ["posts"],
  components: { SinglePost },
  data() {
    return {
      isDivVisible: false,
    };
  },
  methods: {
    toggleDiv() {
      this.isDivVisible = !this.isDivVisible;
      if (this.isDivVisible) {
        this.$nextTick(() => {
          this.$refs.searchInput.focus();
        });
      }
    },
    clearSearchInput() {
      this.search = ""; // Clear the search input
      this.$refs.searchInput.focus(); // Keep the input focused
    },
  },
  setup(props) {
    const search = ref("");
    const bookSelect = ref("Books");
    const books = ref([
      "Books",
      "Jonah",
      "Matthew",
      "Ezra",
      "Nehemiah",
      "Esther",
    ]);
    const tempPosts = ref(props.posts);

    // Define the bookOrder array
    const bookOrder = ["Jonah", "Matthew", "Ezra", "Nehemiah", "Esther"];

    watch(search, () => {
      console.log("watched search");
    });

    watch(bookSelect, () => {
      console.log("watched bookSelect");
    });

    const filteredPosts = computed(() => {
      let tempPostsCopy = [...props.posts];

      // Filtering based on bookSelect
      tempPostsCopy = tempPostsCopy.filter((post) => {
        if (bookSelect.value !== "Books") {
          return post.book
            .toLowerCase()
            .includes(bookSelect.value.toLowerCase());
        } else {
          return true;
        }
      });

      // Filtering based on search
      tempPostsCopy = tempPostsCopy.filter((post) => {
        if (post.verse.toLowerCase().includes(search.value.toLowerCase())) {
          return true;
        } else if (post.content.toLowerCase().includes(search.value.toLowerCase())) {
          return true;
        } else if (
          post.title.toLowerCase().includes(search.value.toLowerCase()) &&
          !["jonah", "matthew", "ezra", "nehemiah", "esther"].includes(
            search.value.toLowerCase()
          )
        ) {
          return true;
        }
        return false;
      });

      // Sorting based on date in descending order
      tempPostsCopy.sort((a, b) => new Date(b.date) - new Date(a.date));

      return tempPostsCopy;
    });
    return { books, bookSelect, search, filteredPosts };
  },
  mounted() {
    console.log("PostList component mounted.");
  },
};
</script>


<style>
.post-head {
  /* background: var(--color-periwinkle-dark); */
  max-width: 960px;
  border-bottom: 1px solid var(--color-leather);
  text-align: left;
  padding: 10px 0 0;
  display: flex;
  justify-content: space-between;
  margin: 20px;
  .post-head_header {
    display: inline;
    margin: 20px 0;
  }
}
.post-lists {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 960px;
  margin: 40px auto;
  padding: 0 20px;
  justify-content: space-around;
  align-content: space-between;
  gap: 20px;
  align-items: stretch;
  min-height: 100vh;
}
.post-list_wrapper {
  width: calc(33% - 11px);
  display: flex;
}
.search-wrapper {
  margin: 0;
  padding: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
}
.search-btn {
  padding: 5px;
  border-radius: 40px;
  background: var(--color-white);
  border: 2px solid var(--color-white);
  font-weight: 600;
  gap: 5px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  & .search-btn-svg {
    fill: var(--color-periwinkle-dark);
  }
  &:hover {
    background: var(--color-periwinkle-light);
    transform: scale(1.1);
    border-color: var(--color-periwinkle-dark);
  }
  &:hover .search-btn-svg {
    fill: var(--color-periwinkle-dark);
  }
}

.select-search {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* background: var(--color-gray-lighter); */
  /* border-radius: 12px; */
  margin: 0 auto;
  width: auto;
  height: 60px;
  position: relative;
  /* top: 0px; */
  transition: ease-in-out 0.5s;
  /* height: 0px; */
  overflow: hidden;
  z-index: 0;
  /* background: var(--color-gray-lighter); */
  .search-input,
  .book-select {
    margin: 10px;
  }
  .search-input {
    width: 235px;
    margin-left: 5px;
  }
  .book-select {
    width: 135px;
    margin-right: 5px;
  }
}
.btnActive {
  background: var(--color-tobacco);
  border-color: var(--color-white);
  transform: scale(1.1);
  & .search-btn-svg {
    fill: var(--color-white);
  }
  + .select-search {
    right: 5px;
  }
}
.search-txt {
  padding: 0px 16px 0 2px;
}
.input-svg {
  fill: var(--color-periwinkle-dark);
  position: absolute;
  right: 18px;
}
.input-close {
  right: 44px;
  width: 24px;
  fill: var(--color-periwinkle-dark);
  cursor: pointer;
  &:hover {
    fill: var(--color-periwinkle);
  }
}
 @media (max-width: 768px) {
  .post-lists {
    margin: 30px 0;
    .post-list_wrapper {
      width: calc(50% - 10px);
    }
  }
  
}
@media (max-width: 600px) {
  .post-head {
    flex-direction: column;
    width: calc(100vw - 50px);
    .post-head_header {
      text-align: center;
    }
  }
  .post-content {
    height: auto;
  }
  .post-snippet {
    margin-bottom: 30px;
  }
  .post-lists {
    margin: 20px 0;
    .post-list_wrapper {
      width: 100%;
    }
  }
  .search-wrapper {
    flex-direction: column;
    padding-bottom: 20px;
    z-index: 0;
  }
  .btnActive {
    + .select-search {
      height: auto;
      width: 100%;
      right: 0px;
      flex-direction: column-reverse;
    }
  }
  .search-btn {
    .search-btn-svg {
      width: 42px;
      height: 42px;
    }
  }

  .select-search {
    .book-select {
      width: 100%;
      margin: 10px 0;
      padding-right: 0;
      height: 60px;
    }
    .search-input {
      width: 100%;
      margin: 20px 0 10px;
      height: 60px;
    }
  }
  .input-svg {
    width: 36px;
    height: 36px;
    top: 32px;
    right: 10px;
  }
  .input-close {
    width: 36px;
    height: 36px;
    top: 32px;
    right: 42px;
  }
  select {
    background-position: calc(100% - 27px) calc(100% - 20px), calc(100% - 14px) calc(100% - 20px), 0 100%;
    background-size: 13px 13px, 13px 13px, 40px 100%;
    &:focus {
      background-position: calc(100% - 27px) calc(100% - 23px), calc(100% - 14px) calc(100% - 23px), 0px 100%;
    }
  }
}
</style>
