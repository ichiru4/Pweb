<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ProfileCard from './components/ProfileCard.vue';
import topNav from './components/TopNav.vue';
const keepAliveName = ['blog']

</script>

<template>
  <div class="app">
    <el-header class="desktop-header" style="margin-top: 20px;">
      <ProfileCard />
    </el-header>
    <el-header class="mobile-header" style="padding: 0;">
      <top-nav />
    </el-header>
    <el-main style="overflow: hidden;">
      <transition appear name="slide-up" mode="out-in">
        <KeepAlive :include="keepAliveName">
          <router-view>
          </router-view>
        </KeepAlive>
      </transition>
    </el-main>
  </div>

</template>

<style scoped>
.app {
  display: flex;
  min-height: 100vh;
  max-width: 1180px;
  margin: auto;
}

/* 
.fade-transform-enter-active,
.fade-transform-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.fade-transform-enter-from,
.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.fade-transform-enter-to,
.fade-transform-leave-from {
  opacity: 1;
  transform: translateX(0);
} */

.mobile-header {
  display: none;
}

/* 定义从下往上的过渡效果的CSS类 */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(30px);
  /* 从下往上平移 */
}

.slide-up-enter-to,
.slide-up-leave-from {
  opacity: 1;
  transform: translateY(0);
  /* 回到原始位置 */
}

.slide-up-enter-active {
  transition-delay: 0.2s;
}

/* 添加渐入动画 */
@media (max-width: 768px) {
  .mobile-header {
    display: block;
  }

  .desktop-header {
    display: none;
  }

  .app {
    flex-direction: column;
  }

}

@media (min-width: 769px) and (max-width: 1024px) {}

@media (min-width: 901px) and (max-width: 1200px) {}
</style>
