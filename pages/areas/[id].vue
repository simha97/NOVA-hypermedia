<script setup>
  import Breabcrumb from '~/components/Breadcrumb.vue';
  const route = useRoute()
  const area = route.params.id
  const { data: projects } = await useFetch('/api/areas/' + area)
</script>

<template>
  <div>
    <Breabcrumb :links="[{bread:'Home', goTo: '/'}, {bread:'Areas', goTo: '/areas/Art'}, {bread: area, goTo: '/areas/' + area}]"/>
  </div> 
  <div>
    <h2>Areas</h2>
    <h3>Our projects are variant in many different areas.</h3>
  </div>  
  <div class="areas-container">
    <div class="areas-selector">
      <NuxtLink to="/areas/Art">
        <div v-if="area == 'Art'">
          <div class="active-area-button">Art</div>
        </div> 
        <div v-else>
          <div class="area-button">Art</div>
        </div>
      </NuxtLink>  
      <NuxtLink to="/areas/Education">
        <div v-if="area == 'Education'">
          <div class="active-area-button">Education</div>
        </div> 
        <div v-else>
          <div class="area-button">Education</div>
        </div>
      </NuxtLink>  
      <NuxtLink to="/areas/Energy">
        <div v-if="area == 'Energy'">
          <div class="active-area-button">Energy</div>
        </div> 
        <div v-else>
          <div class="area-button">Energy</div>
        </div>
      </NuxtLink>  
      <NuxtLink to="/areas/Food">
        <div v-if="area == 'Food'">
          <div class="active-area-button">Food</div>
        </div> 
        <div v-else>
          <div class="area-button">Food</div>
        </div>
      </NuxtLink>  
    </div>
    <div class="area-description">
      We support art-related startups that leverage technology to democratize art, foster diversity, and connect artists with collectors. Our focus includes emerging artists, digital art platforms, and innovative ways to engage audiences.
    </div>
  </div>
  <div class="card-container">
    <ProjectCard v-for="project in projects" :key="project.id" :title="project.projectTitle" :city="project.city" :mainIdea="project.mainIdea" :area="project.area" :link="'/projects/' + project.id" />
  </div>
</template>

<style>

  .areas-container{
    margin-top: 96px;
    font-size: 24px;
    src:url('/font/Myriad\ Pro\ Regular.ttf') format("truetype");
    font-family: "Myriad Pro Regular";
  }

  .areas-selector{
    gap: 56px;
    display: flex;
  }

  .area-button{
    text-align: center;
    padding: 16px;
  }

  .active-area-button{
    width: 160px;
    height: 64px;
    background-color: white;
    color: #F26225;
    width: 160px;
    height: 64px;
    text-align: center;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 1px 1px 2px 0 #282E36;
  }

  .area-description{
    margin-top: 8px;
    width: 1120px;
    background-color: white;
    padding: 40px 64px 40px 64px;
    border-radius: 8px;
    box-shadow: 1px 1px 2px 0 #282E36;
  }

</style>