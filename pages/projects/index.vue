<template>
    <Breadcrumb breadcrumb = 'Home / Projects / Projects By Area'/>
    <h2 id="area-title">Projects By Area</h2>        
    <h3>Discover our amazing projects from here.</h3>
    <div class="area-zone" v-for="areaProjects of projectsByArea" :key="areaProjects.area + '-zone'" :id="areaProjects.area + '-zone'">
        <div class="area-selector" @click="showProjects(areaProjects.area)">
            <span class="arrow" :id="areaProjects.area + '-arrow'"></span>
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
        color: #F26225;
        border-radius: 8px;
        font-size: 24px;
        font-family: 'Myriad-Pro-Bold';
        padding: 16px 24px;
        cursor: pointer;
        background-color: white;
    }

    .area-selector .arrow{
        position: absolute;
        margin-top: 12px;
        right: 168px;
        transform: rotate(-135deg);
        transition: .4s ease-in-out;
        border-top: 4px solid #F26225;
        border-left: 4px solid #F26225;
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
                    document.getElementById("Art-arrow").style.transform= "rotate(-135deg)";
                    document.getElementById("Art-projects").style.display = "none";
                    this.active.Art = false;
                    window.scrollTo({
                        top: document.getElementById("area-title").offsetTop - 32,
                        behavior: 'smooth',
                    })
                }
                else{
                    document.getElementById("Art-arrow").style.transform= "rotate(45deg)";
                    document.getElementById("Art-projects").style.display = "flex";
                    this.active.Art = true;
                    window.scrollTo({
                            top: document.getElementById("Art-zone").offsetTop - 32,
                            behavior: 'smooth',
                        })
                }
            }
            if(area == "Education"){
                if(this.active.Education == true){
                    document.getElementById("Education-arrow").style.transform= "rotate(-135deg)";
                    document.getElementById("Education-projects").style.display = "none";
                    this.active.Education = false;
                    window.scrollTo({
                        top: document.getElementById("Art-zone").offsetTop - 32,
                        behavior: 'smooth',
                    })
                }
                else{
                    document.getElementById("Education-arrow").style.transform= "rotate(45deg)";
                    document.getElementById("Education-projects").style.display = "flex";
                    this.active.Education = true;
                    window.scrollTo({
                        top: document.getElementById("Education-zone").offsetTop - 32,
                        behavior: 'smooth',
                    })
                }
            }
            if(area == "Energy"){
                if(this.active.Energy == true){
                    document.getElementById("Energy-arrow").style.transform= "rotate(-135deg)";
                    document.getElementById("Energy-projects").style.display = "none";
                    this.active.Energy = false;
                    window.scrollTo({
                        top: document.getElementById("Art-zone").offsetTop - 32,
                        behavior: 'smooth',
                    })
                }
                else{
                    document.getElementById("Energy-arrow").style.transform= "rotate(45deg)";
                    document.getElementById("Energy-projects").style.display = "flex";
                    this.active.Energy = true;
                    window.scrollTo({
                        top: document.getElementById("Energy-zone").offsetTop - 32,
                        behavior: 'smooth',
                    })
                }
            }
            if(area == "Food"){
                if(this.active.Food == true){
                    document.getElementById("Food-arrow").style.transform= "rotate(-135deg)";
                    document.getElementById("Food-projects").style.display = "none";
                    this.active.Food = false;
                    window.scrollTo({
                        top: document.getElementById("Art-zone").offsetTop - 32,
                        behavior: 'smooth',
                    })
                }
                else{
                    document.getElementById("Food-arrow").style.transform= "rotate(45deg)";
                    document.getElementById("Food-projects").style.display = "flex";
                    this.active.Food = true;
                    window.scrollTo({
                        top: document.getElementById("Food-zone").offsetTop - 32,
                        behavior: 'smooth',
                    })
                }
            }
        }
    }
  }

</script>