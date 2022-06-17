<template>
  <div class="home">
    <navbar>
      <template v-slot:center>
        <h2>首页</h2>
      </template>
    </navbar>
  </div>
</template>

<script>
import navbar from "../../components/common/navbar/navbar.vue";

export default {
  name: "home",
  components: {
    navbar
  }
};
</script>
<style>
.navbar {
  background-color: rgb(255, 203, 203);
}
</style>