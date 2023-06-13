<template>
    <div class="card">
        <span class="title">{{ title }}</span>
        <span class="subtitle">{{ subtitle }}</span>
        <NuxtLink :to = "link" ><button>Open description</button></NuxtLink>
    </div>
</template>

<script>
    export default {
        props: [
            'title',
            'subtitle',
            'link'
        ]
    }
</script>

<style>
    .image-container
    {
        display: flex;
        justify-content: center;
        border: 2px dashed red;
        border-radius: 10px;
        padding: 2px;
        width: 250px;
        height: 250px;
    }

    .card
    {
        display: flex;
        flex-flow: column;
        padding: 20px;
        border: 2px solid black;
        border-radius: 20px;
        width: fit-content;
        height: fit-content;
    }

    .title
    {
        font-size: 2em;
        font-weight: bold;
    }
</style>