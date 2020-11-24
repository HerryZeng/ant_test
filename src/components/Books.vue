<template>
  <div id="book">
    <!-- 这里是Book页面 -->
    <table>
      <thead>
        <th>书籍ID</th>
        <th>书籍名称</th>
        <th>书籍作者</th>
      </thead>
      <tbody >
        <tr v-for="book in books" :key="book">
          <td>{{ book.id }}</td>
          <td><router-link :to="{name:'BookDetail',params:{id:book.id}}">{{book.name}}</router-link></td>
          <td>{{ book.author }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Book",
  data() {
    return {
      books: [],
    };
  },
  created() {
    this.getBooks();
  },
  methods: {
    getBooks() {
      this.$axios
        .get("/ch11/get_books")
        .then((res) => {
          console.log(res);
          this.books = res.data.books;
        })
        .catch((res) => {
          console.log(res);
        });
    },
  },
};
</script>

<style scoped>
#book {
    margin-left: 45%;
    margin-top: 20px;
    padding: 20px;
}
</style>