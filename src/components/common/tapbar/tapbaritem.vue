<template>
    <div class="tapbar-item" @click="changroute" :class="{active:isActive}">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'tapbaritem',
        props: {
            path: String
        },
        computed: {
            isActive() {
                return this.$route.path.includes(this.path); // 当前路径 this.$route.path 相同的 path变红
                // 只有path和this.$route.path相同的tapbaritem,才会添加active属性,变红
            }
        },
        methods: {
            changroute() {
                if (this.$route.path !== this.path) { // 这个判断是为了解决重复跳转相同路由的报错问题
                    this.$router.push(this.path)
                }
            }
        },
    }
</script>
<style>
    .tapbar-item {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        text-align: center;
    }

    .tapbar-item img {
        width: 30px;
        height: 30px;
    }

    .active {
        color: aquamarine;
    }
</style>