<template>
  <div>
    <!-- <router-link to="http://127.0.0.1:9000/ch11/api_axios">显示</router-link> -->
    <!-- <router-view></router-view> -->
    <a-button @click="display">显示</a-button>
    <br />
    <span>code:{{ code }}</span
    ><br />
    <span>msg:{{ msg }}</span>
  </div>
</template>

<script>
import ant from "ant-design-vue";
// import axios from "axios";

export default {
  name: "Index",
  components: {
    [ant.name]: ant,
  },
  data() {
    return {
      code: "",
      msg: "",
    };
  },
  //   created() {
  //     this.display();
  //   },
  methods: {
    display() {
      //   axios
      this.$ajax
        .get("/ch11/api_axios")
        .then((res) => {
          console.log(res);
          console.log(res.data);
          this.code = res.data.code;
          this.msg = res.data.msg;
        //   this.$router.push("/home");
          window.location.href = "/home";
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