<template>
    <div style="top: 128px;">
        <Breabcrumb :links="[{bread:'Home', goTo: '/'}, {bread:'Projects', goTo: '/projects'}]"/>
    </div>
    <div>
        <h2>All Projects</h2>        
        <h3>Discover our amazing projects from here.</h3>
    </div>
    <div class="card-container">
        <ProjectCard v-for="project in projects" :key="project.id" :title="project.projectTitle" :city="project.city" :mainIdea="project.mainIdea" :area="project.area" :link="'/projects/' + project.id" />
    </div>
</template>

<script setup>
    import Breabcrumb from '~/components/Breadcrumb.vue';
    const { data: projects } = await useFetch('/api/projects')
</script>

<style>

    @media screen and (max-width: 830px) {

        main #card-container{
            margin: 0 10px;
            gap: 32px;
        }

    }

</style>