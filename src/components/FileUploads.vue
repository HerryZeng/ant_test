<template>
  <a-form
    ref="ruleForm"
    :model="form"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <a-form-item ref="name" label="用户名" name="name">
      <a-input v-model:value="form.name" />
    </a-form-item>
    <a-form-item ref="password" label="密码" name="password">
      <a-input v-model:value="form.password" type="password" />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit"> 提交 </a-button>
      <a-button style="margin-left: 10px" @click="resetForm"> 清空 </a-button>
    </a-form-item>
  </a-form>
</template>
<script>
import qs from "qs";
export default {
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      other: "",
      form: {
        name: "",
        password: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 15, message: "3-5字符之间", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 8, max: 20, message: "8-20字符之间", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm
        .validate()
        .then(() => {
          console.log("values", this.form);
          console.log(this.form.name);
          console.log(this.form.password);
          this.$axios
            .post("/ch11/post_test", qs.stringify({
              name: this.form.name,
              password: this.form.password,
            }))
            .then((res) => {
              console.log(res);
            })
            .catch((res) => {
              console.log(res);
            });
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
  },
};
</script>
