<template>
    <div class="content">
        <h1 class="card-text">{{ props.data?.Title }}</h1>
        <h4 class="card-text" v-if="props.descriptionVisible">{{ props.data?.Description }}</h4>
        <div class="bottom-box">
            <span class="timebox">{{ props.data?.PublishTime }}</span>
            <div class="tags-box">
                <div class="tags" v-for="tag in props.data?.tags">{{ tag }}</div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

//data的格式如下
// interface data {
//     title: string,
//     description: string,
//     date: string,
//     tags: string[]
// }
const props = defineProps({
    data: {
        type: [Object,null],
        default: null
    },
    descriptionVisible:{
        type: Boolean,
        default: true
    }
});


</script>

<style scoped>
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
</style>