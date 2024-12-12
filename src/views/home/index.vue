<template>
  <div class="container">
    <mycard>
      <div class="top-card-content">
        <h1>Hello!</h1>
        <h4>Built like a spreadsheet, project tables give you a live canvas to filter</h4>
        <h4>sort, and group issues and pull requests</h4>
      </div>
    </mycard>
    <mycard>
      <template #image>
        <img class="card-image" src="@/assets/images/a01.jpg">
      </template>
      <div class="top-card-content">
        <h1>How to Start?</h1>
      </div>
    </mycard>
  </div>

</template>

<script setup lang="ts">
import Mycard from '@/components/mycard.vue';

</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 40px;
  width: 100%;
  /* height: 100%; */
  color: #d2d2d2;
}




.top-card-content {
  display: flex;
  gap: 10px;
  flex-direction: column;
  padding: 1.5rem;
}

.card-image {
  width: 100%;
  object-fit: cover;
  max-height: 300px;
}

h1 {
  padding-top: 1.75rem;
  font-size: 3rem;
  line-height: 1.25;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: .5rem;
  margin-bottom: .25rem;
  font-weight: 600;
}
</style>