<!--

    Card to display information in the list page.

    This component could be achieved with the SmallCard component by using a <slot> to insert the div with the image. The solution used here allows for better control of the layout.

    Since the information shown can be categorized into title and subtitle, it was preferred to use only one component for both dogs and location.
    PROPS:
    - title: main information to display
    - subtitle: second information to display
    - link: link to the page description
-->

<template>
  <div class="flex-container">
    <NuxtLink :to = "link">
      <div class="project-card" >
        <img class="main-img" alt="logo" style="width:100%; border-top-right-radius: 8px; border-top-left-radius: 8px;" v-bind:src="'/_nuxt/LogoPng/' + title + '.png'">
        <div class="data-container" style="border-color: #282E36;">
          <b><div style="font-size: 16px; margin-top: 8px;">{{ title }}</div></b>
          <div style="font-size: 12px; position: absolute; top: 40px; left: 16px; right: 16px;">{{ mainIdea }}</div>
          <img class="icon-dark" alt="map" src="~\assets\icons\location-pin-dark.png">
          <img class="icon-white" alt="map" src="~\assets\icons\location-pin-white.png">
          <div style="font-size: 12px; position: absolute; top: 124px; left: 34px;">{{ city }}</div>
          <div class="area-container">
            <div style="font-size: 12px;">{{ area }}</div>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
  const props = defineProps(['title', 'mainIdea', 'city', 'area', 'link']);

</script>

<style>

  .flex-container {
    padding:  8px;
  }

  .project-card {
  /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 #282E36;
    transition: 0.3s;
    width: 240px;
    height: 400px;
    background-color: white;
    color: #282E36;
    border-radius: 8px;
  }
  
  .project-card .main-img{
    width:100%; 
    border-top-right-radius: 8px;  
    border-top-left-radius: 8px;
  }
  
  .project-card .area-container {
    background-color: #ebeef3;
    color: #282E36;
    border-radius: 8px;
    padding: 4px 8px 4px 8px;
    width: fit-content;
    position: absolute;
    top: 120px;
    right: 16px;
    text-align: center;
  }

  .project-card .data-container {
    padding: 2px 16px;
    position: relative; 
    border-top: solid 1px #282E36;
    margin-top: -1px;
  }

  .project-card .icon-dark {
    position: absolute; 
    top: 126px; 
    left: 16px;
    width: 16px;
    opacity: 100%;
    transition: 0.1s;
  }

  .project-card .icon-white {
    position: absolute; 
    top: 126px; 
    left: 16px;
    width: 16px;
    opacity: 0%;
  }

  .project-card:hover{
    background-color: #282E36;
    color:white;
  }
  
  .project-card:hover .area-container{
    background-color: white;
  }

  .project-card:hover .icon-dark{
    opacity: 0%;
  }

  .project-card:hover .icon-white{
    opacity: 100%;
  }

</style>