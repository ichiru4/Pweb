<template>
    <div >
        <!-- <h1> nothing here yet.</h1> -->
        <mycard>
            <div class="grid">
                <mycard v-for="item in 4" style="box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);">
                <div style="display: flex;gap: 30px;align-items: center;">
                    <img class="avatar" src="@/assets/logo.svg" alt="">
                    <div>
                        <h1>nothing here yet.</h1>
                        <h4>yes,here is nothing too!</h4>
                    </div>
                </div>
            </mycard>
            </div>
        </mycard>
    </div>x
</template>

<script setup lang="ts">

</script>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px 30px;
    grid-row: auto;
}

.avatar {
    width: 100px;
    height: 100px;
    border-radius: 20px;
    object-fit: cover;
}

div h1 {
    margin-top: 0;
}

div h4 {
    margin-bottom: 0;
}
</style>