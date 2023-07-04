<template>
    <Breadcrumb breadcrumb = 'Home / Projects'/>
    <h2>All Projects</h2>        
    <h3>Discover our amazing projects from here.</h3>
    <div class="card-container">
        <ProjectCard v-for="project in projects" :key="project.id" :title="project.projectTitle" :city="project.city" :mainIdea="project.mainIdea" :area="project.areas.name" :link="'/projects/' + project.id" />
    </div>
</template>

<style>

    @media screen and (max-width: 830px) {

        main #card-container{
            margin: 0 10px;
            gap: 32px;
        }

    }

</style>

<script setup>

    const { data: projects } = await useFetch('/api/projects')
    
</script>