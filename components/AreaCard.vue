<template>
    <div><NuxtLink :to="'/areas/'+name">{{ name }}</NuxtLink></div>
</template>

<style scoped>

    div.area-button{
        border: 1px solid #F26225;
        background: #FFFFFF;
        border-radius: 8px;
        width: 176px;
        height: 64px;
        transition: box-shadow .3s ease-in-out;
        margin-top: 240px;
    }
</style>

<script setup>
    const props = defineProps(['name']);
</script>

