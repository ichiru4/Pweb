<template>
    <div class="container">
        <MainContainer>
            <mycard>
                <el-autocomplete v-model="state" :fetch-suggestions="querySearchAsync" placeholder="Search"
                    @select="handleSelect" size="large">
                    <template #prefix>
                        <SvgIcon name="search2" />
                    </template>
                </el-autocomplete>
            </mycard>
            <mycard imagePosition="right" v-for="(item, index) in blogList" style="max-height: 350px;">
                <template #image>
                    <img :src="item.image"  alt="" @click="handleSelect(item.id)">
                </template>
                <div class="content">
                    <h1 class="card-text" @click="handleSelect(item.id)">{{ item.title }}</h1>
                    <h4 class="card-text">{{ item.description }}</h4>
                    <div class="bottom-box">
                        <span class="timebox">{{ item.date }}</span>
                        <div class="tags-box">
                            <div class="tags" v-for="tag in item.tags">{{ tag }}</div>
                        </div>
                    </div>
                </div>
            </mycard>
        </MainContainer>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const state = ref('');
const querySearchAsync = ref([{ value: 'no data', link: '' }]);
const router= useRouter();
const handleSelect = (id: number) => { 
    router.push(`/blogs/${id}`)
}
const blogList = [{
    id: 1,
    image: "/src/assets/images/a01.jpg",
    title: 'blog title',
    description: 'this can be a short description',
    date: '2024-02-02',
    tags: ['Test', 'Blog']
},{ id: 2,
    image: "/src/assets/images/a01.jpg",
    title: '如果你是要测试，如何去测试测试是不是测试呢',
    description: '测试是测试，如果测试不是测试，那就不是测试。但是测试还是测试。',
    date: '2024-02-02',
    tags: ['Test', 'Blog']}]
</script>
<style scoped>
.container ::v-deep(.el-input--large) {
    height: 50px;
}


.container ::v-deep(.el-input) {
    --el-input-border-radius: var(--myinput-border-radius);
}


.container ::v-deep(.el-input__inner) {
    height: 100%;
    /* 确保高度生效 */
    font-size: large;
}

.content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding-left: 20px;
    justify-content: space-between;
}

.card-text {
    margin: 8px;
}


h4 {
    font-weight: 350;
}

.bottom-box {
    display: flex;
    margin: 8px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
}

.timebox {
    background-color: rgb(28, 28, 28);
    border-radius: 20px;
    padding: 1px 10px;
    width: auto;
    color: rgb(191, 191, 191);
}
.tags-box{
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
}
.tags {
    background-color: rgb(66, 9, 101);
    border-radius: 13px;
    padding: 2px 10px;
    color: rgb(249, 249, 249);
}

.content h1:hover{
    cursor: pointer;
}
img:hover{
    cursor: pointer;
    transition: 0.3s ease-in-out;
    transform: scale(1.1);
}
</style>