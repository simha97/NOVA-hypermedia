<template>
    <div class="intro">
        <img class="shadow" src="~\assets\img\pageShadow.png">
        <img v-bind:src="'/_nuxt/LogoPng/' + project.projectTitle + '_Ultra.png'" id="project-img">
        <div class="intro-description">
            <h1>{{project.projectTitle}}</h1>
            <h3>{{ project.slogan}}</h3>
        </div>
    </div>
    <Breadcrumb :links="[{bread:'Home', goTo: '/'}, {bread:'Project', goTo: '/projects'}, {bread:project.projectTitle, goTo: '/projects/' + project.id}]"/>
    <div class="project-info">
        <h2>{{project.projectTitle}}</h2>
        <PersonInfo :infos="[{title:'Main Ideas', description: project.mainIdea}, 
            {title:'Area', description: project.area}, 
            {title:'Supervisor', description: project.persons.name + ' ' + project.persons.surname}]"/>
    </div>    
    <h2>How it works</h2>    
    <div class="scroll-container" @wheel="ScrollPictures($event)" >
        <img src="~\assets\img\AboutUsScroll.png">
        <img src="~\assets\img\AboutUsScroll.png">
        <img src="~\assets\img\AboutUsScroll.png">
        <img src="~\assets\img\AboutUsScroll.png">
    </div>
    <div class="goBack-container">
        <NuxtLink to="/projects"><backbutton text="All Projects"></backbutton></NuxtLink>
    </div>
</template>

<style>

    #project-img {
        margin-top: 0;
    }

    .project-info{
        margin-bottom: 216px;
    }

</style>

<script setup>

    const route = useRoute()
    const id = route.params.id
    const { data: project } = await useFetch('/api/projects/' + id)

</script>

<script>

    export default {
        methods: {
            ScrollPictures(event) {
                event.currentTarget.scrollLeft += event.deltaX
                console.log([event.deltX, event.target.scrollLeft])
            }
        }
    }
    
</script>

