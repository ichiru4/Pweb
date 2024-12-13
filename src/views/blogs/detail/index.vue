<template>
    <div>
        <mycard imagePosition="top">
            <template #image>
                <img class="detail-image" :src="data.image" alt="">
            </template>
            <CardContent :data="data" />
            <div class="details-container">
                markdown content goes here
            </div>
        </mycard>
    </div>
</template>

<script setup lang="ts">
import CardContent from '../components/CardContent.vue';

const data = {
    id: 1,
    image: "/src/assets/images/a01.jpg",
    title: 'blog title',
    description: 'this can be a short description',
    date: '2024-02-02',
    tags: ['Test', 'Blog']
}
</script>

<style scoped>
.detail-image {
    max-height: 200px;
}
</style>