<template>
  <div>
    <!-- <router-link to="http://127.0.0.1:9000/ch11/api_axios">显示</router-link> -->
    <!-- <router-view></router-view> -->
    <a-button @click="display">显示</a-button>
    <a-button @click="hide">隐藏</a-button>
    <br />
    <span>code:{{ code }}</span
    ><br />
    <span>msg:{{ msg }}</span
    ><br />
    <span>ID:{{ user.id }}</span
    ><br />
    <span>用户名:{{ user.name }}</span
    ><br />
    <span>年龄:{{ user.age }}</span
    ><br />
    <span>数组:{{ array1 }}</span
    ><br />
    <span v-for="(arr, idx) in array1" :key="arr">
      {{ idx }}: <span>{{ arr }},</span> </span
    ><br />
    <span>{{ arrayStruct }}</span
    ><br />
    <span>{{ mapStruct }}</span
    ><br />
    <span v-for="arr in arrayStruct" :key="arr">
      {{ arr.id }}
      {{ arr.name }}
      {{ arr.age }}
      <br /> </span
    ><br />
    <span v-for="(v, k) in mapStruct" :key="k">
      {{k}}:
      {{ v.id }}
      {{ v.name }}
      {{ v.age }} 
    </span><br />
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
      user: {
        // id: "",
        // name: "",
        // age: "",
      },
      array1: [],
      arrayStruct: [],
      mapStruct: {},
    };
  },
  //   created() {
  //     this.display();
  //   },
  methods: {
    display() {
      //   axios
      this.$axios
        .get("/ch11/api_axios")
        .then((res) => {
          // console.log(res);
          console.log(res.data);
          this.code = res.data.code;
          this.msg = res.data.msg;
          this.user = res.data.user;
          this.array1 = res.data.array1;
          this.arrayStruct = res.data.arrayStruct;
          this.mapStruct = res.data.mapStruct;
          //   this.$router.push("/home");
          // window.location.href = "/home";
        })
        .catch((res) => {
          console.log(res);
        });
    },
    hide() {
      //   axios
      this.$axios
        .get("/ch11/api_axios")
        .then((res) => {
          // console.log(res);
          console.log(res.data);
          this.code = "";
          this.msg = "";
          this.user = "";
          this.array1 = [];
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