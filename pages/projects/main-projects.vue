<template>
    <div>
        <Breabcrumb :links="[{bread:'Home', goTo: '/'}, {bread:'Projects', goTo: '/projects'}, {bread:'MainProjects', goTo: '/projects/main-projects'}]"/>
    </div>
    <div>
        <h2>Main Projects</h2>        
        <h3>This are the projects we believe in most.</h3>
    </div>
    <div class="card-container">
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