<template>
    <main>
        <div id="card-container">
            <ProjectCard v-for="project in projects" :key="project.id" :title="project.projectTitle" :city="project.city" :mainIdea="project.mainIdea" :area="project.area" :link="'/projects/' + project.id" />
        </div>
    </main>
</template>

<script setup>
    const { data: projects } = await useFetch('/api/projects')
</script>

<style>

    #card-container{
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-content: flex-start;
        gap: 16px;
        margin-top: 16px;
    }

    main
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: flex-start;
        gap: 8px;
    }

    main #card-container{
        gap: 32px;
        margin: 0px 160px;
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

    @media screen and (max-width: 830px) {

        main #card-container{
            margin: 0 10px;
            gap: 32px;
        }

    }

</style>