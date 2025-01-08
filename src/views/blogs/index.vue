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
            <mycard imagePosition="right" v-if="isLoading" v-for="(item, index) in blogList">
                <template #image>
                    <img :src="item.Image ? item.Image : defaultImage" alt="" @click="handleSelect(item.Id)">
                </template>
                <div class="content">
                    <h1 class="card-text" @click="handleSelect(item.Id)">{{ item.Title }}</h1>
                    <h4 class="card-text">{{ item.Description }}</h4>
                    <div class="bottom-box">
                        <!-- <span class="timebox">{{ item.PublishTime }}</span> -->
                        <div class="tags-box">
                            <div class="tags" v-for="tag in item.Tags">{{ tag }}</div>
                        </div>
                    </div>
                </div>
            </mycard>
            <div style="display: flex;justify-content: flex-end;gap: 20px;">
                <Mycard class="pagination">
                    <SvgIcon name="arrow-left-circle-line" size="40"></SvgIcon>
                </Mycard>
                <Mycard class="pagination">
                    <SvgIcon name="arrow-right-circle-line" size="40"></SvgIcon>
                </Mycard>

            </div>

        </MainContainer>
    </div>
</template>

<script setup lang="ts">
import { getBlogList, type blogRequest, type pageHelper } from '@/assets/api/blogApi';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import defaultImage from '@/assets/images/a01.jpg';
const state = ref('');
const querySearchAsync = ref([{ value: 'no data', link: '' }]);
const router = useRouter();
const currentPage = ref(1);
const pageSize = ref(5);
const total = ref(0);
const isLoading = ref(false)
const handleSelect = (id: string) => {
    router.push(`/blogs/${id}`)
}
const blogList = ref([{
    Id: "1",
    Image: "/src/assets/images/a01.jpg",
    Title: 'Blog title',
    Description: '暂未找到blog,请发布你的Blog,如果未正常显示请刷新页面或检查服务器是否正常',
    PublishTime: '2024-02-02',
    Tags: ['Test', 'Blog']
},])

onMounted(async () => {
    try {
        const params: pageHelper = {
            page: currentPage.value,
            size: pageSize.value
        }
        const response = await getBlogList(params)
        blogList.value = response.response
    }
    finally {
        isLoading.value = true
    }
})



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

.tags-box {
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

.content h1:hover {
    cursor: pointer;
}

img:hover {
    cursor: pointer;
    transition: 0.3s ease-in-out;
    transform: scale(1.1);
}

.pagination ::v-deep(.mycard-content) {
    padding: 5px;
    display: flex;
    align-items: center;

}
</style>