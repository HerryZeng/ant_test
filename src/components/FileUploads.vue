<template>
  <a-form :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="用户名">
      <a-input v-model:value="form.name" />
    </a-form-item>

    <a-form-item label="密码">
      <a-input v-model:value="form.password" type="password" />
    </a-form-item>

    <a-form-item label="上传文件">
      <a-input type="file" class="files" />
    </a-form-item>

    <a-form-item label="上传文件">
      <a-input type="file" class="files" />
    </a-form-item>

    <a-form-item label="上传文件">
      <a-input type="file" class="files" />
    </a-form-item>

    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit"> 提交 </a-button>
      <a-button style="margin-left: 10px"> 返回 </a-button>
    </a-form-item>
  </a-form>
</template>
<script>
// import qs from "qs"

export default {
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        name: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit() {
      const formData = new FormData();
      formData.append("name", this.form.name);
      formData.append("password", this.form.password);
      const files = document.getElementsByClassName("files");
      // console.log(document.getElementsByClassName("files")[0].files[0].name);
      for (let i = 0; i < files.length; i++) {
        console.log(files[i].files[0]);
        console.log("before append");
        formData.append("upload_files", files[i].files[0]);
         console.log("after append");
      }
      this.$axios
        .post("/ch11/upload_files", formData)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>