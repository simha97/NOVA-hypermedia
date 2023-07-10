<template>
    <div class="content-container">
        <Breadcrumb breadcrumb = 'Home / Projects / Main Projects'/>
        <h2>Main Projects</h2>        
        <h3>Discover our main projects.</h3>
        <div class="card-container">
            <div v-for="project in projects" :key="project.id">
                <BigProjectCard  :key="project.id" :title="project.projectTitle" :city="project.city" :slogan="project.slogan" :area="project.areas.name" :mainIdea="project.mainIdea" :date="project.date" :link="'/projects/' + project.id" />            
            </div>
        </div>
    </div>
</template>

<script setup>

    const { data: projects } = await useFetch('/api/projects/mainProjects')
    
</script>