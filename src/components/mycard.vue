<template>
  <div class="mycard">
    <div class="image-wrapper">
      <slot name="image"></slot> <!-- 使用插槽插入图片 -->
    </div>
    <div class="content">
      <slot></slot> <!-- 使用插槽插入内容 -->
    </div>
</div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.mycard {
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  /* 防止内容溢出 */
}

.image-wrapper {
  overflow: hidden;
  /* 确保内容不会溢出 */
}

.content {
  padding: 20px;
}
</style>