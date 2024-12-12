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
            <mycard>
                <h1>Blogs</h1>
            </mycard>
        </MainContainer>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const state = ref('');
const querySearchAsync = ref([{ value: 'no data', link: '' }]);
const handleSelect = () => { }
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
</style>