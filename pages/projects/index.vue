<template>
    <main>
        <h1>Projects</h1>
        <div id="card-container">
            <Card v-for="project in projects" :key="project.id" :title="project.projectTitle" :subtitle="project.city" :link="'/projects/' + project.id" />
        </div>
    </main>
</template>

<script setup>

    const { data: projects } = await useFetch('/api/projects')



</script>

<style>
    #card-container
    {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-content: flex-start;
        gap: 20px;
    }

    main
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: flex-start;
        gap: 10px;
    }

    .form-container {
        width: 90%;
        border-radius: 10px;
        border: 2px solid brown;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-content: flex-start;
        gap: 20px;

        background-color: burlywood;
        padding: 20px;
    }

</style>