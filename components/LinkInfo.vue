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
  }

  #big-bullet{
    height: 24px;
    width: 24px;
    margin-top: 2px;
  }

  .link-info-question{
    line-height: normal;
    text-align:center;
    font-family: "Myriad-Pro-Regular";
    width: 216px;
  }

  .link-info-title{
    margin-top: 8px;
    color: #F26225;
    font-style: italic;
    text-align:center;
    font-size: 24px;
    font-family: "Myriad-Pro-Bold";
  }

  .link-info-title:hover{
    text-decoration: underline;
  }

</style>
