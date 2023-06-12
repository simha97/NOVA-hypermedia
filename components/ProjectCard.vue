<template>
  <NuxtLink :to = "link">
    <div class="project-card" >
      <img class="main-img" alt="logo" v-bind:src="'/_nuxt/LogoPng/' + title + '.png'">
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

<script setup>
  const props = defineProps(['title', 'mainIdea', 'city', 'area', 'link']);

</script>

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
  
  .project-card .main-img{
    width: 352px; 
    height: 352px;
    border-top-right-radius: 4px;  
    border-top-left-radius: 4px;
  }
  
  .project-card .area-container {
    background-color: #dadee6;
    color: #282E36;
    border-radius: 8px;
    padding: 4px 8px 4px 8px;
    width: fit-content;
    position: absolute;
    top: 168px;
    right: 16px;
    text-align: center;
    font-size: 12px;
    transition: background-color .3s ease-in-out;
  }

  .project-card .data-container {
    width: 352px;
    height: 212px;
    padding: 16px;
    position: relative; 
    border-top: solid 1px #282E36;
    margin-top: -1px;
  }

  .data-container .project-title {
    font-size: 20px; 
    display: block;
    width: 352px;
  }

  .data-container .project-mainIdea {
    font-size: 12px; 
    padding-top: 16px;
  }

  .data-container .icon{
    display: inline-block;
    height: 16px;
    width: 16px;
    transition: .3s ease-in-out;
    background: url(../assets/icons/location-pin-dark.png) no-repeat;
  }

  .data-container .project-city {
    font-size: 12px; 
    margin-top: -28px; 
    margin-left: 20px;
  }

  .project-card:hover{
    background-color: #282E36;
    color:white;
  }

  .project-card .main-img:hover{
    background-color: #282E36;
    color:white;
  }

  .project-card:hover .area-container{
    background-color: white;
  }

  .project-card:hover .icon{
    background: url(../assets/icons/location-pin-white.png) no-repeat;
  }

</style>