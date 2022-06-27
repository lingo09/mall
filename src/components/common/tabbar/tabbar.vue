<template>
    <div class="tabbar-class">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'tabbar'
    }
</script>
<style>
    .tabbar-class {
        height: 55px;
        width: 100%;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgb(238, 238, 238);
        box-shadow: 0px -6px 15px rgba(156, 156, 156, 0.5);
        display: flex;
        /* 决定容器怎么排序,row 从左向右,相反就是 row-reverse,column,从上到下,相反column-reverse  */
        /* flex-direction: row; */

        /* flex-wrap: nowrap | wrap | wrap-reverse; */
        /* 决定容器换行,第几行在下面,不换行 | 第一行在上面 | 第一行在下面 */
        /* flex-wrap: nowrap; */

        /* 简写flex-flow: <flex-direction> <flex-wrap>; */
        flex-flow: row nowrap;

        /* justify-content: flex-start | flex-end | center | space-between | space-around; */
        /* 左对齐,右对齐,居中,两端对齐,每个容器间隔相等 */
        justify-content: space-around;

        /* align-items: flex-start | flex-end | center | baseline | stretch; */
        align-items: flex-end;

        /*  */
        flex: auto;
    }
</style>