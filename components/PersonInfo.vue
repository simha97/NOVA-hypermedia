<template>
  <div class="person-info-container">
    <div v-for="info in infos">
      <div class="person-info-data">
        <img id="bullet" src="~\assets\icons\orange-bullet.png">
        <div>
          <div class="person-info-title">{{ info.title }}</div>
          <div class="person-info-description">{{ info.description }}</div>
        </div>
      </div>
    </div>
  </div>  
</template>

<script setup>
  const props = defineProps(['infos']);
</script>

<style>

  .person-info-container{
    position: relative;
    width: fit-content;
    font-size: 24px;
    margin-top: 64px;
  }

  .person-info-data{
    display: flex;
    margin-bottom: 32px;
    font-family: "Myriad-Pro-Regular";
  }

  #bullet{
    height: 16px;
    width: 16px;
    margin-right: 16px;
    margin-top: 10px;
  }

  .person-info-title{
    font-size: 24px;
  }

  .person-info-description{
    font-size: 18px;
  }

</style>
