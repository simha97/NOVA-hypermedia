<template>
  <NuxtLink :to = "link">
    <div class="project-card" >
      <img class="main-img" id="logo" v-bind:src="'/_nuxt/LogoPng/' + title + '.png'">
      <div class="data-container">
        <b><div class="project-title">{{ title }}</div></b>
        <div class="project-mainIdea">{{ mainIdea }}</div>
        <div class="icon"></div>
        <div class="project-city">{{ city }}</div>
        <div class="area-container">
          <div >{{ area }}</div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<style>

  .project-card {
    box-shadow: 0 4px 8px 0 #282E36;
    width: 352px;
    height: 564px;
    background-color: white;
    transition: .3s ease-in-out;
    color: #282E36;
    border-radius: 4px;
  }
  
  #logo{
    width: 352px; 
    height: 352px;
    border-top-right-radius: 4px;  
    border-top-left-radius: 4px;
  }
  
  .project-card .area-container {
    transition: background-color .3s ease-in-out;
    position: absolute;
    top: 168px;
    right: 16px;
  }

  .project-card .data-container {
    width: 352px;
    padding: 16px;
    position: relative; 
    font-size: 16px;
  }

  .project-card .project-title {
    font-size: 22px; 
    width: 352px;
  }

  .project-card .project-mainIdea {
    padding-top: 16px;
  }

  .project-card .icon{
    display: inline-block;
    height: 16px;
    width: 16px;
    transition: .3s ease-in-out;
    background: url(../assets/icons/location-pin-dark.png) no-repeat;
    margin-top: 16px;
  }

  .project-card .project-city {
    margin-top: -26px; 
    margin-left: 20px;
  }

  .project-card:hover{
    background-color: #282E36;
    color:white;
  }

  .project-card:hover .icon{
    background: url(../assets/icons/location-pin-white.png) no-repeat;
  }

</style>

<script setup>

  const props = defineProps(['title', 'mainIdea', 'city', 'area', 'link']);

</script>