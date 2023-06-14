<template>
    <div>
        <Breadcrumb :links="[{bread:'Home', goTo: '/'}, {bread:'Projects', goTo: '/projects'}, {bread:'MainProjects', goTo: '/projects/main-projects'}]"/>
    </div>
    <div>
        <h2>Main Projects</h2>        
        <h3>Discover our main projects.</h3>
    </div>
    <div class="card-container">
        <div v-for="project in projects">
            <BigProjectCard  :key="project.id" :title="project.projectTitle" :city="project.city" :mainIdea="project.mainIdea" :area="project.area" :link="'/projects/' + project.id" />            
        </div>
    </div>
</template>

<script setup>

    const { data: projects } = await useFetch('/api/projects/main-projects')
    
</script>