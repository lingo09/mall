<template>
  <div id="app">
    <!-- <div id="nav"> -->
    <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    <!-- </div> -->
    <router-view />
    <maintabbar></maintabbar>
  </div>
</template>

<script>
import maintabbar from "./components/content/maintabbar/maintabbar.vue";

export default {
  name: "app",
  components: {
    maintabbar
  }
};
</script>

<style>
@import "./assets/css/base.css";
</style>