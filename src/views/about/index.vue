<template>
    <div>
        <mycard>
            <h1>About</h1>
            <el-timeline style="max-width: 500px;">
                <el-timeline-item class="select-card" v-for="(activity, index) in activities" :key="index" :icon="activity.icon"
                    :type="activity.type" :color="activity.color" :size="activity.size" :hollow="activity.hollow"
                    :timestamp="activity.timestamp" placement="top" >
                    <el-card style="border-radius:25px;display: inline-flex; box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);" >
                        <h2 class="timeline-item-text">{{ activity.content }}</h2>
                    </el-card>
                </el-timeline-item>
            </el-timeline>
        </mycard>
    </div>
</template>

<script setup lang="ts">
import { MoreFilled } from '@element-plus/icons-vue'

const activities = [
    {
        content: 'project first build',
        timestamp: '2024-12-13',
        size: 'large',
        type: 'primary',
        icon: MoreFilled,
    },
    {
        content: 'Custom color',
        timestamp: '2018-04-03 20:46',
        color: '#0bbd87',
    },
    {
        content: 'Custom size',
        timestamp: '2018-04-03 20:46',
        size: 'large',
    },
    {
        content: 'Custom hollow',
        timestamp: '2018-04-03 20:46',
        type: 'primary',
        hollow: true,
    },
    {
        content: 'Default node',
        timestamp: '2018-04-03 20:46',
    },
]

</script>

<style scoped>
.timeline-item-text {
    font-weight: 300;
    line-height: 1.5;
    margin: 0;
}
.select-card ::v-deep(.el-card__body) {
    padding:10px 20px;
}
</style>