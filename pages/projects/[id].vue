<template>
    <div class="intro">
        <img class="shadow" src="~\assets\img\pageShadow.png">
        <img v-bind:src="'/ProjectBanners/' + project.projectTitle + '.jpg'" id="project-img">
        <div class="intro-description">
            <img v-bind:src="'/ProjectIcons/' + project.projectTitle + '.png'" id="project-icon">
            <div>
                <h1>{{project.projectTitle}}</h1>
                <h3>{{ project.slogan}}</h3>
            </div>
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
        <Info id="info" :infos="[{title:'Main Idea', content: project.mainIdea, type: 'text'}, 
            {title:'Area', content: project.areas.name, type: 'area'}, 
            {title:'Supervisor', content: {page: '/ourTeam/' + project.persons.id, name: project.persons.name, surname: project.persons.surname}, type: 'picture'}]"/>
    </div>   
    <div class="project-info"> 
        <h2>How it works</h2>    
        <div class="scroll-container" @wheel="ScrollPictures($event)" >
            <img v-bind:src="'/ProjectPictures/' + project.projectTitle + '1.jpg'" class="frame">
            <img v-bind:src="'/ProjectPictures/' + project.projectTitle + '2.jpg'" class="frame">
            <img v-bind:src="'/ProjectPictures/' + project.projectTitle + '3.jpg'" class="frame">
        </div>
        <h3>{{ project.description }}</h3>
    </div>
    <div class="project-info">
        <h2>Social impact</h2> 
        <h3>{{ project.socialImpact }}</h3>
        <img v-bind:src="'/ProjectSocialImpacts/' +  'Cecio.png'" id="social-impact">
    </div>
    <div class="project-info">
        <h2>Economic impact</h2> 
        <h3>{{ project.economicImpact }}</h3>
    </div>
    <div>
        <h2>Similar Projects</h2>
        <h3>Other {{project.areas.name }} projects.</h3>
        <div class="card-container">
            <ProjectCard v-for="p in projects" :key="p.id" :title="p.projectTitle" :city="p.city" :mainIdea="p.mainIdea" :area="p.areas.name" :isFounder="p.isFounder" :link="'/projects/' + p.id" />
        </div>
    </div>
    <div class="goBack-container">
        <NuxtLink to="/projects"><backbutton text="All Projects"></backbutton></NuxtLink>
    </div>
</template>

<style>

    .intro-description #project-icon{
        margin-left: 0;
        margin-top: 0;
        width: 128px;
        height: 128px;
        margin-right: 32px;
    }

    #project-img {
        width: 1440px;
        height: 648px;
    }

    .project-info{
        margin-bottom: 160px;
        width: 1120px;
    }

    .project-info h3{
        white-space: break-spaces;
    }

    .project-info .scroll-container{
        margin-bottom: 96px;
    }

    #info{
        margin-top: 96px;
    }

    #info .person-info-description{
        font-size: 24px;
        width: 1120px;
    }

    .practical-info{
        display: flex;
        position: absolute;
        margin-top: 24px;
        right: 136px;
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

    #social-impact{
        margin-left: 136px;
        margin-top: 24px;
        width: 848px;
        height: 312px;
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

