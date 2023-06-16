<template>
    <Breadcrumb :links="[{bread:'Home', goTo: '/'}, {bread:'Projects', goTo: '/projects'}, {bread:'Main Projects', goTo: '/projects/mainProjects'}]"/>
    <h2>Main Projects</h2>        
    <h3>Discover our main projects.</h3>
    <div class="card-container">
        <div v-for="project in projects">
            <BigProjectCard  :key="project.id" :title="project.projectTitle" :city="project.city" :slogan="project.slogan" :area="project.area" :mainIdea="project.mainIdea" :date="project.date" :link="'/projects/' + project.id" />            
        </div>
    </div>
</template>

<script setup>

    const { data: projects } = await useFetch('/api/projects/mainProjects')
    
</script>