<template>
  <div class="mycard">
    <div class="card-wrapper" :class="{
      'has-image': $slots.image,
      'image-position-right': props.imagePosition === 'right',
    }">
      <div class="image-wrapper" v-if="$slots.image">
        <slot name="image">
        </slot> <!-- 使用插槽插入图片 -->
      </div>
      <div class="mycard-content">
        <slot></slot> <!-- 使用插槽插入内容 -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  imagePosition: {
    type: String,
    default: 'top'
  }
});

</script>

<style scoped>
.has-image {
  flex-direction: column;
}

.image-position-right {
  flex-direction: row;
}

.image-position-right .image-wrapper {
  order: 1;
  flex: 2; /* 图片占据1份空间 */
  max-width: 40%; /* 确保图片宽度不超过30% */
}

.image-position-right .mycard-content {
  order: 0; /* 内容在图片之前 */
  flex: 3; /* 内容占据2份空间 */
  max-width: 60%; /* 确保内容宽度不超过70% */
}

.card-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0;
  flex: 1;
}

.mycard {
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  /* 防止内容溢出 */
}

.image-wrapper {
  overflow: hidden;
  /* 确保内容不会溢出 */
}

::v-deep( .image-wrapper img) {
  width: 100%;
  display: block; /* 去除可能的默认内边距 */
  height: 100%;
  object-fit: cover;
}
.mycard-content {
  padding: 20px;
  width: 100%;
  flex:1;
}
</style>