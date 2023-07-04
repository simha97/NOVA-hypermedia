<template>
    <NuxtLink :to="'/areas/' + id">
        <div class="area-button" v-bind:style="{ backgroundImage: 'url(' + img + ')' }">
            <div class="area-name">
                #{{name}}
            </div>
        </div>
    </NuxtLink>
</template>

<style scoped>

     .area-button{
        box-shadow: 0 4px 8px 0 #282E36;
        border-radius: 8px;
        width: 544px;
        height: 296px;
        transition: box-shadow .3s ease-in-out;
    }

    .area-name{
        color: white;
        font-style: 'Myriad-Pro-Regular';
        font-weight: bold;
        font-size: 28px;
        padding-left: 32px;
        padding-top: 232px;
    }

</style>

<script setup>

    const props = defineProps(['id', 'name', 'img']);

</script>

