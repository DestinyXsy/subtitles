<template>
  <div class="book">
    <ul v-for="(item, index) in bookList" :key="index">
      <li class="aBook">
        <div>
          <Book :bookInfo="item" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Book from "../components/Book.vue";

export default {
  name: "Pbook",
  components: { Book },
  data() {
    return {
      bookList: [
        {
          title: "1",
          src:
            require('../assets/image/imagebook.jpg'),
          res: "1",
        },
        {
          title: "2",
          src:
            require('../assets/image/imagebook.jpg'),
          res: "2",
        },
      ],
    };
  },
};
</script>


<style scoped>
.book {
  overflow: auto;
}

.aBook {
  float: left;
  margin: 20px;
}
</style>

