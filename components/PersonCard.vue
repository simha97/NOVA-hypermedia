<template>
    <div class="person-card">
      <img alt="picture" src="~\assets\img\youngwoman2.png" id="profile">
      <div class="data-container">
        <div class="person-name-surname">{{ name }} {{surname }}</div>
        <div class="person-founderTag" v-if="isFounder == true">Founder</div>
        <div class="person-expertiseInfo">Expert in
          <div class="person-areaTag">
            <div v-for="element in area.split(',')" class="area-container"> 
              {{ element }}
            </div>
          </div>  
        </div>      
      </div>
    </div>
</template>

<style>

  .person-card {
    box-shadow: 0 4px 8px 0 #282E36;
    transition: 0.3s;
    width: 256px;
    height: 400px;
    background-color: #F26225;
    transition: background-color .3s ease-in-out;
    color: white;
    border-radius: 4px;
  }

  .person-card .data-container{
    padding: 16px;
    position: relative; 
    width: 256px;
    height: 128px;
  }

  .person-name-surname{
    font-size: 24px;
    font-family: 'Myriad-Pro-Light';
  }

  .person-founderTag{
    font-size: 18px; 
    position: absolute;
    top: 18px; 
    right: 16px;
    font-weight: bold;
  }

  .person-expertiseInfo{
    font-size: 18px;
    font-family: 'Myriad-Pro-Light';
  }

  .person-areaTag{
    flex-direction: row;
    display: flex;
  }

  #profile{
    height: 272px;
    width: 256px;
    border-top-right-radius: 4px;  
    border-top-left-radius: 4px;
  }

  .person-card .area-container {
    background-color: #F26225;
    color: white;
    border: solid 1px white;
    position:relative;
    margin-right: 8px;
    font-size: 16px;
    transition: background-color .3s ease-in-out;
  }

</style>

<script setup>

  const props = defineProps(['name', 'surname', 'isFounder', 'area', 'link']);

</script>
