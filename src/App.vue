<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div>
    <!-- <a-button>这是一个按钮</a-button>
    <a-button type="danger"> Danger </a-button>
    <a-config-provider :auto-insert-space-in-button="false">
      <a-button type="primary"> 按钮 </a-button>
    </a-config-provider> -->
    <!-- <div class="icons-list">
      <HomeOutlined />
      <SettingFilled />
      <SmileOutlined />
      <SyncOutlined spin />
      <SmileOutlined :rotate="180" />
      <LoadingOutlined />
    </div> -->
    <!-- <router-link to="/">
      <a-button type="default">首页</a-button>
    </router-link>
    <router-link to="/home">
      <a-button type="primary">Home</a-button>
    </router-link>

    <router-view></router-view> -->

    <a-menu v-model:selectedKeys="current" mode="horizontal">
       <a-menu-item key="mail"> <mail-outlined /><router-link to="/">首页</router-link></a-menu-item>
      <a-menu-item key="app" disabled>
        <appstore-outlined />不能点击
      </a-menu-item>
      <a-sub-menu>
        <template #title>
          <span class="submenu-title-wrapper">
            <setting-outlined />
            Navigation Three - Submenu
          </span>
        </template>
        <a-menu-item-group title="Item 1">
          <a-menu-item key="setting:1"> Option 1 </a-menu-item>
          <a-menu-item key="setting:2"> Option 2 </a-menu-item>
        </a-menu-item-group>
        <a-menu-item-group title="Item 2">
          <a-menu-item key="setting:3"> Option 3 </a-menu-item>
          <a-menu-item key="setting:4"> Option 4 </a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
      <a-menu-item key="alipay">
        <router-link to="/home">
        <a>Home</a>
        </router-link>
      </a-menu-item>
    </a-menu>
     <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import Ant from "ant-design-vue";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";

// import {
//   HomeOutlined,
//   SettingFilled,
//   SmileOutlined,
//   SyncOutlined,
//   LoadingOutlined,
// } from "@ant-design/icons-vue";

export default {
  name: "App",
  components: {
    // HelloWorld
    [Ant.name]: Ant,
    // HomeOutlined,
    // SettingFilled,
    // SmileOutlined,
    // SyncOutlined,
    // LoadingOutlined,
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
  },
  data() {
    return {
      current: ["mail"],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
