<template>
  <div>
    <Breadcrumb :links="[{bread:'Home', goTo: '/'}, {bread:'Our Team', goTo: '/ourTeam'}, {bread:person.name +  ' ' + person.surname, goTo: '/ourTeam/' + person.id}]"/>
  </div>
  <div class="person-container">
    <div class="person-data">
      <h2>{{ person.name }} {{ person.surname }}</h2>
      <div class="slogan">
        “As an expert in both Education and Art I am dedicated to fostering creativity and knowledge through innovative approaches.”
      </div>
      <PersonInfo :infos="[{title:'Profile', description: person.story}, 
        {title:'Main Expertise', description: person.mainExpertise}, 
        {title:'Academic Experience', description: person.degree}, 
        {title:'Past Job Experience', description: person.pastJobExperience}]"/>
    </div>
    <img src="~\assets\img\youngWoman.png">
    <div v-if="person.isFounder == true">
      <img src="~\assets\img\founder.png" id="founder">
    </div>
  </div>
  <div>
    <div>
        <h2 id="project-title">Projects in Progress</h2>
        <h3>Discover a collection of ongoing projects by {{ person.name }} {{ person.surname }}.</h3>
    </div>
    <div class="card-container">
      <ProjectCard v-for="project in person.projects" :key="project.id" :title="project.projectTitle" :city="project.city" :mainIdea="project.mainIdea" :area="project.area" :isFounder="project.isFounder" :link="'/projects/' + project.id" />
    </div>
  </div>
  <div class="goBack-container">
    <NuxtLink to="/ourTeam"><backbutton text="Our Team"></backbutton></NuxtLink>
  </div>
</template>

<style>

  .person-container{
    display: flex;
    margin-bottom: 216px;
  }

  .person-data{
    width: 576px;
    margin-right: 200px;
  }    

  .goBack-container{
    margin: 0 0 320px 0;
  }

  #project-title{
    border-top: solid 4px #F26225;
    width: fit-content;
  }

  .person-container img{
    width: 464px;
    height: 608px;
    border-radius: 8px;
  }

  #founder{
    position: absolute;
    right: 32px;
    width: 272px;
    height: 272px;
  }

    @media (max-width: 768px) {
      #main-img {
        width: 100%;
        height: auto;
        border-radius: 8px;
      }
      
      .image-column {
        padding-left: 0;
        text-align: center;
      }
      
      .data-container {
        flex-direction: column;
        align-items: left;
      }
      
      .quote {
        width: 100%;
        padding: 0 20px;
        text-align: center;
      }
      
      .info {
        text-align: left;
      }
      
      .details {
        width: 100%;
      }
    }

    /* Styles for mobile devices */
    @media (max-width: 480px) {
      .name {
        font-size: 24px;
      }
      
      .quote {
        font-size: 18px;
        line-height: 24px;
      }
      
      .info {
        font-size: 16px;
      }
      
      .details {
        font-size: 12px;
      }
    }

</style>

<script setup>

    const route = useRoute()
    const id = route.params.id
    const { data: person } = await useFetch('/api/ourTeam/' + id)
    const description = ref(newLineOnFullStop(person.value.story))
    
</script>

