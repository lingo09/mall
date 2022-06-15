<template>
  <div id="maintabbar">
    <tapbar>
      <tapbaritem path="/home">
        <img
          src="../../../assets/img/3138899_shadow_blue_google maps_google_maps_square_google map.svg"
          alt=""
        />
        <div>首页</div>
      </tapbaritem>
      <tapbaritem path="/category">
        <img
          src="../../../assets/img/3138895_shadow_blue_social_facebook_book_media_f.svg"
          alt=""
        />
        <div>购物</div>
      </tapbaritem>
      <tapbaritem path="/cart">
        <img
          src="../../../assets/img/3138903_play_red_you_shadow_youtube_tube_square.svg"
          alt=""
        />
        <div>分类</div>
      </tapbaritem>
      <tapbaritem path="/profile">
        <img
          src="../../../assets/img/3138902_twitter_shadow_social_tweet_media_square_blue.svg"
          alt=""
        />
        <div>我的</div>
      </tapbaritem>
    </tapbar>
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
import tapbar from "../../common/tapbar/tapbar.vue";
import tapbaritem from "../../common/tapbar/tapbaritem.vue";

export default {
  name: "maintabbar",
  components: {
    tapbar,
    tapbaritem,
  },
};
</script>
<style>
@import "../../../assets/css/base.css";
</style>