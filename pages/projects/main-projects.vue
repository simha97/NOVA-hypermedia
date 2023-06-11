<template>
    <main>
        <div id="card-container">
            <div v-for="project in projects">
                <div v-if="project.isMain == true">
                    <ProjectCard  :key="project.id" :title="project.projectTitle" :city="project.city" :mainIdea="project.mainIdea" :area="project.area" :link="'/projects/' + project.id" />            
                </div>
            </div>
        </div> 
    </main>
</template>

<script setup>
    const { data: projects } = await useFetch('/api/projects')
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