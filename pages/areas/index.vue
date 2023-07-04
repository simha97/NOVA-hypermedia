<template>
    <Breadcrumb breadcrumb = 'Home / Areas'/>
    <h2>All Areas</h2>        
    <h3>Our concern in the world.</h3>
    <div class="areas-container">
        <AreaCard v-for="area in areas" :key="area.id" :name="area.name"></AreaCard>
    </div>
</template>

<style scoped>

    .areas-container{
        margin-top: 32px;
        display: flex;
        flex-wrap: wrap;
        column-gap: 64px;
        row-gap: 64px;
    }
    
</style>

<script setup>

    const { data: areas } = await useFetch('/api/areas')
    
</script>