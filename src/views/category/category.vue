<template>
  <div id="category">
    <navbar>
      <template v-slot:left>
        <div>返回</div>
      </template>
      <template v-slot:center>
        <h2>分类</h2>
      </template>
    </navbar>
  </div>
</template>
<script>
import navbar from "../../components/common/navbar/navbar.vue";

export default {
  name: "about",
  components: {
    navbar
  }
};
</script>
<style scoped>
</style>