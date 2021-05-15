<template>
  <div class="book">
    <div>
      <router-link to="/music">
        <div class="button">
          <img class="img" :src="bookInfo.src" />
          <p>{{ bookInfo.title }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
//import { defineComponent } from '@vue/composition-api'

export default {
  name: "Book",
  components: [],
  props: {
    bookInfo: {
      type: Object,
      default: () => {
        return {
          title: "",
          src: "",
          res: "",
        };
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.img {
  width: 160px;
  height: 190px;
}

.button {
  background-color: white;
  border: 1px solid black;
}

.router-link-active {
  color: blue;
}
</style>
