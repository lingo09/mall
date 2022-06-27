<template>
  <div id="maintabbar">
    <tabbar>
      <tabbaritem path="/home">
        <img src="../../../assets/img/商城.png" alt="" />
        <div>首页</div>
      </tabbaritem>
      <tabbaritem path="/category">
        <img
          src="../../../assets/img/购物车空.png"
          alt=""
        />
        <div>购物</div>
      </tabbaritem>
      <tabbaritem path="/cart">
        <img
          src="../../../assets/img/分类.png"
          alt=""
        />
        <div>分类</div>
      </tabbaritem>
      <tabbaritem path="/profile">
        <img
          src="../../../assets/img/用户-圆.png"
          alt=""
        />
        <div>我的</div>
      </tabbaritem>
    </tabbar>
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
import tabbar from "../../common/tabbar/tabbar.vue";
import tabbaritem from "../../common/tabbar/tabbaritem.vue";

export default {
  name: "maintabbar",
  components: {
    tabbar,
    tabbaritem
  }
};
</script>
<style>
@import "../../../assets/css/base.css";
</style>