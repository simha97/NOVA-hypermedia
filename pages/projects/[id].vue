<template>
    <div class="intro">
        <img class="shadow" src="~\assets\img\pageShadow.png">
        <img v-bind:src="'/ProjectBanners/' + project.projectTitle + '.jpg'" id="project-img">
        <div class="intro-description">
            <img v-bind:src="'/ProjectIcons/' + project.projectTitle + '.png'" id="project-icon" alt="Image showcasing a project's main feature. It displays the focal point of the project">
            <div>
                <h1>{{project.projectTitle}}</h1>
                <h3>{{ project.slogan}}</h3>
            </div>
        </div>
    </div>
  <Breadcrumb :breadcrumb = '"Home / Projects / " + project.projectTitle'/>
    <div class="project-info">
        <div class="practical-info">
            <h2>{{project.projectTitle}}</h2>
            <div id="info-text">
                <div class="icon-text">
                    <img src="~\assets\icons\location-pin-dark.png" id="icon-white" alt="icon of the selected project">
                    {{ project.city }}
                </div>
                <div class="icon-text">
                    <img src="~\assets\icons\date-dark.png" id="icon-date">
                    {{ project.date }}
                </div>
            </div>
        </div>
        <Info id="info" :infos="[{title:'Main Idea', content: project.mainIdea, type: 'text'}, 
            {title:'Area', content: project.areas.name, type: 'area'}, 
            {title:'Supervisor', content: {page: '/ourTeam/' + project.persons.id, name: project.persons.name, surname: project.persons.surname}, type: 'picture'}]"/>
    </div>   
    <div class="project-info"> 
        <h2>How it works</h2>    
        <div class="scroll-container" @wheel="ScrollPictures($event)" id="project-scroll">
            <img v-bind:src="'/ProjectPictures/' + project.projectTitle + '1.jpg'" class="frame" id="project-frame1" alt="Image showcasing the project's concept and design. It displays the architectural rendering of the project, providing a visual representation of its overall structure and aesthetics" @click="ClickPicture('project-frame1')">
            <img v-bind:src="'/ProjectPictures/' + project.projectTitle + '2.jpg'" class="frame" id="project-frame2" alt="Image displaying the project's construction phase. It shows the construction site, workers, and equipment, illustrating the progress and activity involved in bringing the project to life" @click="ClickPicture('project-frame2')">
            <img v-bind:src="'/ProjectPictures/' + project.projectTitle + '3.jpg'" class="frame" id="project-frame3" alt="Image capturing the completed project. It showcases the finished structure, highlighting its key features, design elements, and surrounding environment, providing a glimpse of the final outcome." @click="ClickPicture('project-frame3')">
        </div>
        <h3>{{ project.description }}</h3>
    </div>
    <div class="project-info">
        <h2>Social impact</h2> 
        <h3>{{ project.socialImpact }}</h3>
        <img v-bind:src="'/ProjectSocialImpacts/' + project.areas.name +  '.png'" id="social-impact" alt="Image: CO2 Emission Breakdown - Production, Transportation, and Post-Purchase. The picture illustrates the percentage distribution of CO2 emissions throughout the lifecycle of a product. It highlights the CO2 emissions during the production phase, transportation phase, and post-purchase phase. This visual representation helps to understand the environmental impact of each stage and encourages sustainable choices.">
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
        <NuxtLink to="/projects"><Backbutton text="Our Projects"/></NuxtLink>
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
        position: relative;
        width: 1120px;
    }

    .practical-info #info-text{
        position: absolute;
        display: flex;
        gap: 32px;
        right: 0;
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

    .practical-info .icon-text{
        display: flex;
    }

    #social-impact{
        margin-left: auto;
        margin-right: auto;
        margin-top: 48px;
        height: 312px;
        display: block;
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
            ScrollPictures(image) {
                image.currentTarget.scrollLeft += image.deltaX
            },
            ClickPicture(image) {
                document.getElementById("project-scroll").scrollTo({
                    left: document.getElementById(image).offsetLeft - 360,
                    behavior: 'smooth'
                })
            }
        }
    }
    
</script>

