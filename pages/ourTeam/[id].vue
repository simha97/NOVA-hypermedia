<template>
  <Breadcrumb :breadcrumb = '"Home / Our Team / " + person.name + " " + person.surname'/>
  <div class="person-container">
    <div class="person-data">
      <h2>{{ person.name }} {{ person.surname }}</h2>
      <div class="slogan">{{ person.slogan }}</div>
      <Info :infos="[{title:'Profile', content: person.story, type: 'text'}, 
        {title:'Main Expertise', content: person.mainExpertise, type: 'text'}, 
        {title:'Academic Experience', content: person.degree, type: 'text'}, 
        {title:'Past Job Experience', content: person.pastJobExperience, type: 'text'}]"/>
    </div>
    <div class="bigimage-container">
      <img v-bind:src="'/TeamPictures/' + person.name + person.surname + '.jpg'" id="person">
      <div v-if="person.isFounder == true">
        <img src="~\assets\img\founder.png" id="founder">
      </div>
    </div>
  </div>
  <div>
    <h2>Projects in Progress</h2>
    <h3>Discover a collection of ongoing projects by {{ person.name }} {{ person.surname }}.</h3>
    <div class="card-container">
      <ProjectCard v-for="project in person.projects" :key="project.id" :title="project.projectTitle" :city="project.city" :mainIdea="project.mainIdea" :area="project.areas.name" :isFounder="project.isFounder" :link="'/projects/' + project.id" />
    </div>
  </div>
  <div class="goBack-container">
    <NuxtLink to="/ourTeam"><Backbutton text="Our Team"/></NuxtLink>
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

  .person-data .slogan{
    margin-bottom: 32px;
  }

  .goBack-container{
    margin: 0 0 320px 0;
  }

  .bigimage-container{
    display: flex;
    position: relative;
    width: 464px;
    height: 608px;
    border-radius: 0 270px 0 0;
    
  }

  .bigimage-container img {
    position: absolute;
    right: 0;
    top: 0;
    width: 272px;
    height: 272px;
  }

  #person{
    width: 464px;
    height: 608px;
    border-radius: 8px;
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
    @media (max-width: 768px) {
  .bigimage-container {
    padding-top: 100%; /* Adjust as per your desired aspect ratio */
  }
}

@media (max-width: 480px) {
  .bigimage-container {
    padding-top: 120%; /* Adjust as per your desired aspect ratio */
  }
}

</style>

<script setup>

    const route = useRoute()
    const id = route.params.id
    const { data: person } = await useFetch('/api/ourTeam/' + id)
    
</script>

