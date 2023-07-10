<template>
    <Breadcrumb breadcrumb = 'Home / Areas'/>
    <h2>Areas</h2>        
    <h3>Our concern in the world.</h3>
    <div class="areas-container">
        <AreaCard v-for="area in areas" :key="area.id" :id="area.id" :name="area.name" :img="'/Areas/' + area.name + '.png'" :description="area.description" :link="'/areas/' + area.id"></AreaCard>
    </div>
</template>

<style scoped>

    .areas-container{
        margin-top: 112px;
        display: flex;
        flex-wrap: wrap;
        column-gap: 32px;
        row-gap: 48px;
        width: 1440px;
    }
    @media (max-width: 768px) {
        .areas-container{
            max-width: 600px;
        }
    }
</style>

<script setup>

    const { data: areas } = await useFetch('/api/areas')
    
</script>