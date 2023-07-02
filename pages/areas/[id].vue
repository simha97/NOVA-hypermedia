<template>
  <Breadcrumb :links="[{bread:'Home', goTo: '/'}, {bread:'Areas', goTo: '/areas/Art'}, {bread: area, goTo: '/areas/' + area}]"/>  <h2>Areas</h2>
  <h3>Our projects are variant in many different areas.</h3>
  <div class="areas-container">
    <div class="areas-selector">
      <NuxtLink to="/areas/Art">
        <div v-if="area == 'Art'">
          <div class="active-area-button"><span>#Art</span></div>
        </div> 
        <div v-else>
          <div class="area-button"><span>#Art</span></div>
        </div>
      </NuxtLink>  
      <NuxtLink to="/areas/Education">
        <div v-if="area == 'Education'">
          <div class="active-area-button"><span>#Education</span></div>
        </div> 
        <div v-else>
          <div class="area-button"><span>#Education</span></div>
        </div>
      </NuxtLink>  
      <NuxtLink to="/areas/Energy">
        <div v-if="area == 'Energy'">
          <div class="active-area-button"><span>#Energy</span></div>
        </div> 
        <div v-else>
          <div class="area-button"><span>#Energy</span></div>
        </div>
      </NuxtLink>  
      <NuxtLink to="/areas/Food">
        <div v-if="area == 'Food'">
          <div class="active-area-button"><span>#Food</span></div>
        </div> 
        <div v-else>
          <div class="area-button"><span>#Food</span></div>
        </div>
      </NuxtLink>  
    </div>
    <div class="area-description">{{ area_info.description }}</div>
  </div>
  <div class="card-container">
    <ProjectCard v-for="project in area_info.projects" :key="project.id" :title="project.projectTitle" :city="project.city" :mainIdea="project.mainIdea" :area="project.areas.name" :link="'/projects/' + project.id" />
  </div>
</template>

<style>

  div.areas-container{
    margin-top: 96px;
    font-size: 24px;
    font-family: "Myriad-Pro-Regular";
  }

  div.areas-selector{
    font-weight: 700;
    gap: 56px;
    display: flex;
    position: relative;
    bottom: -50px;
  }

  div.area-button{
    width: 175px;
    height: 83px;
    text-align: center;
    padding: 16px;
  }
  div.active-area span{
    position: relative;
  }
  div.active-area-button{
    width: 175px;
    height: 83px;
    background-color: white;
    color: #F26225;
    text-align: center;
    padding: 16px;
    border-radius: 8px;
  }
  .active-area-button span{
    position: relative;
  }
  .area-description{
    width: 1120px;
    background-color: white;
    padding: 40px 64px 40px 64px;
    border-radius: 8px;

  }
  @media screen and (max-width: 830px) {
    .area-description{
      width: auto;
    }
    .areas-selector{
      width: auto;
    }

  }
</style>

<script setup>

  const route = useRoute()
  const area = route.params.id
  const { data: area_info } = await useFetch('/api/areas/' + area)
  
</script>
