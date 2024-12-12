<template>
    <div class="main-container">
        <slot></slot>
    </div>
</template>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 30px;
  width: 100%;
}
</style>