<template>
    <div class="area-button" v-bind:style="{ backgroundImage: 'url(' + img + ')'}">
        <img class="shadow" src="~\assets\img\bigProjectHoverShadow.png">
        <div class="data-container">
            <div class="area-name">
                #{{name}}
            </div>
            <div class="hidden">
                <div class="area-description">
                    {{description}}
                </div>
                <NuxtLink :to = link>Show me more</NuxtLink>
            </div>
        </div>
    </div>
</template>

<style scoped>

    .area-button{
        box-shadow: 0 4px 8px 0 #E7E7E7;
        border-radius: 8px;
        width: 544px;
        height: 296px;
    }

    .data-container{
        color: white;
        margin-left: 32px;
        margin-top: 232px;
        position: absolute;
        transition: .5s ease-in-out;
        font-style: 'Myriad-Pro-Regular';
        pointer-events: none;
    }

    .area-name{
        font-size: 24px;
        font-weight: bold;
    }
    
    .area-name{
        font-size: 24px;
        font-weight: bold;
    }

    .area-button:hover .data-container{
        margin-top: 32px;
    }

    .shadow{
        opacity: 0;
        width: 544px;
        height: 296px;
        transition: opacity .5s ease-in-out;
    }

    .area-button:hover .shadow{
        opacity: 100%;
    }

    .hidden{
        font-size: 24px;
        margin-top: 48px;
        opacity: 0;
        transition: opacity .3s ease;
    }

    .hidden .area-description{
        max-width: 480px;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .area-button:hover .hidden{
        opacity: 100%;
        transition: opacity .9s ease-in;
        pointer-events: auto;
    }

    .hidden a{
        font-family: "Myriad-Pro-Bold";
        color: #F26225;
        font-style: italic;
        position: absolute;
        margin-top: 16px;
        margin-left: 320px;
    }

    .area-button:hover .hidden a:hover{
        color: #F26225;
        text-decoration: underline;
    }


</style>

<script setup>

    const props = defineProps(['id', 'name', 'img', 'description', 'link']);

</script>

