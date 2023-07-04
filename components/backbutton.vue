<template>
  <button class="back-button" @click="goBack">
    <span class="arrow"></span>
    <span class="back-text">{{ text }}</span>
  </button>
</template>

<style scoped>

  .back-button {
    border: 1px solid #F26225;
    background: #FFFFFF;
    border-radius: 8px;
    width: 176px;
    height: 64px;
    transition: box-shadow .3s ease-in-out;
    margin-top: 240px;
  }

  .back-text {
    font-size: 24px;
    color:#F26225;
    font-family: 'Myriad Pro';
    margin-left: 8px;
    margin-top: 8px;
    border-bottom: solid 3px white;
    transition: border-color .3s ease-in-out;
  }

  .back-button:hover{
    box-shadow: 0 2px 4px 0 #F26225;
    cursor: pointer;
  }

  .back-button:hover .back-text{
    border-color: #F26225;
  }

</style>

<script setup>

  const props = defineProps(['text']);
  
</script>
