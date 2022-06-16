<template>
  <div class="navbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style>
.navbar {
  /* width: 60px; */
  height: 44px;
  line-height: 44px;
  display: flex;
  box-shadow: 0px 2px 2px rgba(145, 145, 145, 0.5);
}

.left,
.right {
  width: 44px;
  height: 44px;
  line-height: 44px;
  text-align: center;
}

.center {
  flex: 1;
  height: 44px;
  line-height: 44px;
  text-align: center;
}
</style>