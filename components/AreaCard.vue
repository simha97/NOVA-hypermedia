<template>
    <NuxtLink :to="'/areas/'+name">
        <div class="area-button">{{ name }}</div>
    </NuxtLink>
</template>

<style scoped>

     .area-button{
        border: 1px solid #F26225;
        background: white;
        border-radius: 8px;
        width: 400px;
        height: 400px;
        transition: box-shadow .3s ease-in-out;
        align-items: center;
    }

</style>

<script setup>
    const props = defineProps(['name']);
</script>

