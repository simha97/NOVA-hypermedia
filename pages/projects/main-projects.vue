<template>
    <div>
        <Breabcrumb :links="[{bread:'Home', goTo: '/'}, {bread:'Projects', goTo: '/projects'}, {bread:'MainProjects', goTo: '/projects/main-projects'}]"/>
    </div>
    <div id="card-container">
        <div v-for="project in projects">
            <ProjectCard  :key="project.id" :title="project.projectTitle" :city="project.city" :mainIdea="project.mainIdea" :area="project.area" :link="'/projects/' + project.id" />            
        </div>
    </div>
</template>

<script setup>
    import Breabcrumb from '~/components/Breadcrumb.vue';
    const { data: projects } = await useFetch('/api/projects/main-projects')
</script>

<style>
    main
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: flex-start;
    }
</style>