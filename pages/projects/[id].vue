<template>
    <div class="intro">
        <img class="shadow" src="~\assets\img\pageShadow.png">
        <img v-bind:src="'/_nuxt/LogoPng/' + project.projectTitle + '_Big.png'" id="project-img">
        <div class="intro-description">
            <h1>{{project.projectTitle}}</h1>
            <h3>{{ project.slogan}}</h3>
        </div>
    </div>
    <Breadcrumb :links="[{bread:'Home', goTo: '/'}, {bread:'Project', goTo: '/projects'}, {bread:project.projectTitle, goTo: '/projects/' + project.id}]"/>
    <div class="project-info">
        <div class="practical-info">
            <div class="icon-text">
                <img src="~\assets\icons\location-pin-dark.png" id="icon-white">
                {{ project.city }}
            </div>
            <div class="icon-text">
                <img src="~\assets\icons\date-dark.png" id="icon-date">
                {{ project.date }}
            </div>
        </div>
        <h2>{{project.projectTitle}}</h2>
        <Info :infos="[{title:'Main Ideas', content: project.mainIdea, type: 'text'}, 
            {title:'Area', content: project.area, type: 'text'}, 
            {title:'Supervisor', content: project.persons.name + ' ' + project.persons.surname, type: 'text'}]"/>
        <img :src="`/portraits/${project.persons.name+project.persons.surname}.jpg`" id="person"/>
    </div>    
    <h2>How it works</h2>    
    <div class="scroll-container" @wheel="ScrollPictures($event)" >
        <img src="~\assets\img\AboutUsScroll.png">
        <img src="~\assets\img\AboutUsScroll.png">
        <img src="~\assets\img\AboutUsScroll.png">
        <img src="~\assets\img\AboutUsScroll.png">
    </div>
    <div class="project-info">
        <h2>Social impact</h2> 
        <h3>{{ project.socialImpact }}</h3>
    </div>
    <div class="project-info">
        <h2>Economic impact</h2> 
        <h3>{{ project.economicImpact }}</h3>
    </div>
    <div>
        <h2>Similar Projects</h2>
        <h3>Other {{project.area }} projects.</h3>
        <div class="card-container">
            <ProjectCard v-for="p in projects" :key="p.id" :title="p.projectTitle" :city="p.city" :mainIdea="p.mainIdea" :area="p.area" :isFounder="p.isFounder" :link="'/projects/' + p.id" />
        </div>
    </div>
    <div class="goBack-container">
        <NuxtLink to="/projects"><backbutton text="All Projects"></backbutton></NuxtLink>
    </div>
</template>

<style>

    #project-img {
        width: 1440px;
        height: 648px;
    }

    .project-info{
        margin-bottom: 216px;
    }

    #person{
        width: 128px;
        height: 128px;
        border-radius: 128px;

    }

    .practical-info{
        display: flex;
        position: absolute;
        margin-top: 24px;
        right: 160px;
        gap: 32px;
    }

    .practical-info .icon-text {
        display: flex;
        height: 16px;
        margin-top: 8px;
        font-size: 24px;  
    }

    .practical-info #icon-white{
        height: 26px;
        width: 24px;
        margin-top: 6px;
        margin-right: 4px;
    }

    .practical-info #icon-date{
        height: 18px;
        width: 18px;
        margin-top: 6px;
        margin-right: 8px;
    }

</style>

<script setup>

    const route = useRoute()
    const id = route.params.id
    const { data: areaProjects } = await useFetch('/api/projects/' + id)

    const project = computed(() => {

        for(let p of areaProjects.value) {
            if(p.id == id)
                return p;
        }

        return arr
    })

    const projects = computed(() => {
        
        const arr = []

        for(let p of areaProjects.value) {
            if(p.id != id)
                arr.push(p);
        }

        return arr
    })

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

