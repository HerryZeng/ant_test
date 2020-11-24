<template>
  <div>
      <!-- 这是书籍详情页面{{ this.$route.params.id }} -->
      <span>{{book}}</span>
  </div>
</template>

<script>
export default {
  name: "BookDetail",
  data(){
      return {
          book:{},
      };
  },
  mounted() {
    this.get_book_detail();
  },
  methods: {
    get_book_detail() {
      this.$axios
        .get("/ch11/book_detail", {
          params: {
            id: this.$route.params.id,
          },
        })
        .then((res) => {
          console.log(res);
          this.books = res.data.books;
          this.book = res.data.book;
        })
        .catch((res) => {
          console.log(res);
        });
    },
  },
};
</script>

<style scoped>
</style>