<template>
  <div class="big-project-card">
    <div class="data-container">
      <img v-bind:src="'/_nuxt/LogoPng/' + title + '_Icon.png'" id="small-logo">
      <div>
        <b><div class="project-title">{{ title }}</div></b>
        <div class="project-slogan">{{ slogan }}</div>
      </div>
      <div class="area-container">
        <div >{{ area }}</div>
      </div>
    </div>
    <img class="shadow" src="~\assets\img\bigProjectShadow.png">
    <img alt="picture" v-bind:src="'/_nuxt/LogoPng/' + title + '_Big.png'" id="big-picture">
  </div>
</template>
  
<style>
  
  .big-project-card {
    width: 1120px; 
    height: 480px;
    color: white;
    transition: .3s ease-in-out;
  }
    
  .big-project-card #big-picture{
    width: 1120px; 
    height: 480px;
    border-radius: 8px;  
  }

  .big-project-card .data-container {
    position: absolute; 
    margin-top: 376px;
    margin-left: 64px;
    display: flex;
    gap: 32px;
    height: 80px;
    z-index: 1;
  }

  .big-project-card .project-title{
    margin-top: -8px;
    font-size: 36px;
    width: 768px;
  }

  .big-project-card .project-slogan{
    margin-top: -8px;
    font-size: 24px;
    width: 768px;
  }
  
  .big-project-card .area-container {
    height: 32px;
    position: absolute;
    right: -104px;
  }

</style>
  
<script setup>

  const props = defineProps(['title', 'slogan', 'city', 'area', 'link']);
  
</script>