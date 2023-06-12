<template>
    <div style="top: 128px;">
        <Breabcrumb :links="[{bread:'Home', goTo: '/'}, {bread:'Projects', goTo: '/projects'}]"/>
    </div>
    <div>
        <div class="description-title">
            All Projects
        </div>
        <div class="description">
            Discover our amazing projects from here.
        </div>
    </div>
    <div id="card-container">
        <ProjectCard v-for="project in projects" :key="project.id" :title="project.projectTitle" :city="project.city" :mainIdea="project.mainIdea" :area="project.area" :link="'/projects/' + project.id" />
    </div>
</template>

<script setup>
    import Breabcrumb from '~/components/Breadcrumb.vue';
    const { data: projects } = await useFetch('/api/projects')
</script>

<style>
    main
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: flex-start;
        gap: 8px;
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