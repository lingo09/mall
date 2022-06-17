<template>
  <div id="cart">
    <navbar>
      <template v-slot:center>
        <h2>详情</h2>
      </template>
    </navbar>
  </div>
</template>
<script>
import navbar from "../../components/common/navbar/navbar.vue";

export default {
  name: "cart",
  components: {
    navbar
  }
};
</script>
<style scoped>
</style>