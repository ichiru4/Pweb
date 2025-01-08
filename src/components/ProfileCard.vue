<template>
    <mycard style="width: 250px;">
        <div class="card-container">
            <img src="@/assets/avatar.jpg">
            <div v-for="(link, index) in links" :key="index" class="link">
                <SvgIcon :name="link.icon" size="17" ></SvgIcon>
                <RouterLink :to="link.path">{{ link.name }}</RouterLink>
            </div>
            <div class="external-link">
                <svg-icon name="qq" size="25"></svg-icon>
                <svg-icon name="github" size="25"></svg-icon>
                <svg-icon name="bilibili" size="25"></svg-icon>
                <svg-icon name="twitter-x-line" size="25"></svg-icon>
            </div>
        </div>
    </mycard>
</template>

<script setup lang="ts">
import mycard from './mycard.vue';
// 定义路由链接的数据
const links = [
    { name: 'Home', path: '/', icon: 'home' },
    { name: 'About', path: '/about',icon: 'info' },
    { name: 'Blogs', path: '/blogs',icon: 'book3'},
    { name: 'Friends', path: '/friends',icon: 'group-line' },
    { name: 'Contact', path: '/contact',icon: 'links-line'}
];

</script>

<style scoped>
.card-container {
    display: flex;
    flex-direction: column;
    gap: 20px;

}

.card-container img {
    border-radius: 30px;
    padding: 10px;
}

.link {
    display: flex;
    padding: 10px;
    padding-left: 15%;
    gap: 20px;
    align-items: center;
}


.link a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #3b4e68;
    line-height:17px;
    font-size:larger;
    font-weight: 700;
    font-family: "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
}
.external-link {
    background-color: aliceblue;
    border-radius: 10px;
    width: 100%;
    padding: 15px;
    display: flex;
    justify-content: center;
    gap: 10px;
}
</style>
