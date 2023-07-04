<template>
    <h1>Our concerns in the world</h1>
    <div class="areas-container">
        <AreaCard v-for="area in areas" :key="area.id" :name="area.name"></AreaCard>
    </div>
</template>

<style scoped>
    h1{
        position: relative;
        margin-top: 100px;
    }
    div.areas-container{
        display: flex;
        flex-direction: column;
        gap: 30px;

    }
    div.areas-container a{
        position: relative;
        background-color: white;
        border: 1px goldenrod;
    }
</style>

<script setup>
    const { data: areas } = await useFetch('/api/areas')
    
</script>