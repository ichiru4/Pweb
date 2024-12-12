<template>
    <svg :style="iconStyle" style="align-items: center;" aria-hidden="true">
        <use :xlink:href="iconUrl" :fill="color" />
    </svg>
</template>
<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
    name: {
        type: String,
        default: '',
    },
    size: {
        type: String,
        default: '20',
    },
    color: {
        type: String,
        default: 'var(--my-color)'
    },
})
const iconUrl = `#icon-${props.name}`;
const iconStyle = computed(() => {
    return {
        height: `${props.size}px`,
        width: `${props.size}px`,
    
    };
})
</script>
<style scoped>
</style>