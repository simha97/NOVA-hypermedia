<template>
  <div class="link-info-container">
    <div class="link-info-data">
      <img id="big-bullet" src="~\assets\icons\orange-bullet.png">
      <div>
        <div class="link-info-question">{{ link.question }}</div>
        <NuxtLink :to = link.page><div class="link-info-title">{{ link.title }}</div></NuxtLink>
      </div>
    </div>
  </div> 
</template>

<script setup>
  const props = defineProps(['link']);
</script>

<style>

  .link-info-container{
    position: relative;
    width: fit-content;
    font-size: 24px;
  }

  .link-info-data{
    display: flex;
    src:url('/font/Myriad\ Pro.ttf') format("truetype");
    font-family: "Myriad Pro";
  }

  #big-bullet{
    height: 24px;
    width: 24px;
    margin-top: 2px;
  }

  .link-info-question{
    line-height: normal;
    text-align:center;
  }

  .link-info-title{
    margin-top: 8px;
    color: #F26225;
    font-weight: bold;
    font-style: italic;
    text-align:center;
    font-size: 24px;
  }

  .link-info-title:hover{
    text-decoration: underline;
  }

</style>
