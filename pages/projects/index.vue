<template>
    <Breadcrumb breadcrumb = 'Home / Projects / Projects By Area'/>
    <h2>Projects By Area</h2>        
    <h3>Discover our amazing projects from here.</h3>
    <div class="area-zone" v-for="areaProjects of projectsByArea">
        <div class="area-selector" @click="showProjects(areaProjects.area)">
            <img src="~\assets\icons\vector.png" id="area-vector">
            {{areaProjects.area}}
        </div>
        <div class="card-container" :id="areaProjects.area + '-projects'">
            <ProjectCard v-for="project in areaProjects.projects" :key="project.id" :title="project.projectTitle" :city="project.city" :mainIdea="project.mainIdea" :area="project.areas.name" :link="'/projects/' + project.id" />
        </div>
    </div>
</template>

<style>

    .area-zone{
        margin-top: 32px;
    }

    .area-zone .card-container{
        margin-top: 32px;
        row-gap: 32px;
        display: none;
    }

    .area-selector{
        width: 1088px;
        border: solid 1px;
        border-radius: 8px;
        font-size: 32px;
        padding: 8px 16px;
        cursor: pointer;
    }

    .area-selector #area-vector{
        position: absolute;
        width: 32px;
        height: 20px;
        margin-top: 8px;
        right: 168px;
    }

    @media screen and (max-width: 830px) {

        main #card-container{
            margin: 0 10px;
            gap: 32px;
        }

    }

</style>

<script setup>

    const { data: projects } = await useFetch('/api/projects')

    const projectsByArea = computed(() => {
        
        const list = [{area: 'Art', projects: []}, 
                      {area: 'Education', projects: []}, 
                      {area: 'Energy', projects: []}, 
                      {area: 'Food', projects: []}]

        for(let p of projects.value) {
            for (let l of list){
                if(p.areas.name == l.area)
                    l.projects.push(p);
            } 

        }
        return list
    })

</script>

<script>

  export default {
    data () {
      return {
        active: {Art: false, Education: false, Energy: false, Food: false}
      }
    },
    methods: {
        showProjects: function (area) {   
            if(area == "Art"){
                if(this.active.Art == true){
                    document.getElementById("Art-projects").style.display = "none";
                    this.active.Art = false;
                }
                else{
                    document.getElementById("Art-projects").style.display = "flex";
                    this.active.Art = true;
                    window.scrollTo({
                        top: document.getElementById("Art-projects").offsetTop - 16,
                        behavior: 'smooth',
                    })
                }
            }
            if(area == "Education"){
                if(this.active.Education == true){
                    document.getElementById("Education-projects").style.display = "none";
                    this.active.Education = false;
                }
                else{
                    document.getElementById("Education-projects").style.display = "flex";
                    this.active.Education = true;
                    window.scrollTo({
                        top: document.getElementById("Education-projects").offsetTop - 16,
                        behavior: 'smooth',
                    })
                }
            }
            if(area == "Energy"){
                if(this.active.Energy == true){
                    document.getElementById("Energy-projects").style.display = "none";
                    this.active.Energy = false;
                }
                else{
                    document.getElementById("Energy-projects").style.display = "flex";
                    this.active.Energy = true;
                    window.scrollTo({
                        top: document.getElementById("Energy-projects").offsetTop - 16,
                        behavior: 'smooth',
                    })
                }
            }
            if(area == "Food"){
                if(this.active.Food == true){
                    document.getElementById("Food-projects").style.display = "none";
                    this.active.Food = false;
                }
                else{
                    document.getElementById("Food-projects").style.display = "flex";
                    this.active.Food = true;
                    window.scrollTo({
                        top: document.getElementById("Food-projects").offsetTop - 16,
                        behavior: 'smooth',
                    })
                }
            }
        }
    }
  }

</script>