<template>
      <div class="big-project-card">
        <div class="data-container">
            <img v-bind:src="'/_nuxt/LogoPng/' + title + '_Icon.png'">
            <div>
                <b><div class="project-title">{{ title }}</div></b>
                <div class="project-mainIdea">we need a short slogan for projects</div>
            </div>
            <div class="area-container">
                <div >{{ area }}</div>
            </div>
        </div>
        <img class="shadow" src="~\assets\img\bigProjectShadow.png">
        <img class="main-img" alt="picture" v-bind:src="'/_nuxt/LogoPng/' + title + '_Big.png'">
      </div>
  </template>
  
  <script setup>
    const props = defineProps(['title', 'mainIdea', 'city', 'area', 'link']);
  
  </script>
  
  <style>
  
    .big-project-card {
      width: 1120px; 
      height: 480px;
      color: white;
      transition: .3s ease-in-out;
    }
    
    .big-project-card .main-img{
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
        width: 634px;
    }

    .big-project-card .project-mainIdea{
        margin-top: -8px;
        font-size: 24px;
        width: 634px;
    }
    
    .big-project-card .area-container {
        background-color: #f5f5f5;
        color: #282E36;
        border-radius: 8px;
        padding: 4px 8px 4px 8px;
        width: fit-content;
        text-align: center;
        margin-right: -96px;
        margin-top: 48px;
        height: 32px;
        position: absolute;
        right: -152px;
    }
  
  </style>