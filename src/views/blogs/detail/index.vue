<template>
    <div>
        <mycard imagePosition="top">
            <template #image>
                <img class="detail-image" src="/src/assets/images/a01.jpg" alt="">
            </template>
            <CardContent :descriptionVisible="descriptionVisible" :data="data" />
            <div class="details-container">
                <MdPreview :id="mdId" :modelValue="data?.Content" />
                <MdCatalog :editorId="mdId" :scrollElement="scrollElement" />
            </div>
        </mycard>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import CardContent from '../components/CardContent.vue';
import { getBlogById, getBlogList, type Blog } from '@/assets/api/blogApi';
import { useRoute } from 'vue-router';
const route = useRoute();
const id = ref(route.params.id);
const data = ref<Blog | null>(null);
import { MdPreview, MdCatalog } from 'md-editor-v3';
import 'md-editor-v3/lib/preview.css';
const descriptionVisible = false;
const mdId = 'preview-only';
const scrollElement = document.documentElement;

const extractDescription = (html: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const textContent = doc.body.textContent || '';
    // 将文本内容按行分割
    const description = textContent.slice(0,50)+'...';
    // 返回 description，确保去掉空格
    return description.trim();

}
onMounted(async () => {
    const blogId = Array.isArray(id.value) ? id.value[0] : id.value;
    const response = await getBlogById(blogId);
    data.value = response.response;
 
})
</script>

<style scoped>
.detail-image {
    max-height: 200px;
}
</style>