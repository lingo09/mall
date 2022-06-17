<template>
  <div id="profile">
    <navbar>
      <template v-slot:center>
        <h2>用户界面</h2>
      </template>
    </navbar>
  </div>
</template>

<script>
import navbar from "../../components/common/navbar/navbar.vue";

export default {
  name: "profile",
  components: {
    navbar
  }
};
</script>

<style scoped>
</style>