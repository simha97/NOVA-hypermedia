<template>
    <NuxtLink :to = "link">
      <div class="person-card">
        <img class="main-img" alt="picture" src="~\assets\img\youngwoman2.png">
        <div class="data-container">
          <div style="font-size: 20px; font-family: 'Myriad Pro Light';">{{ name }} {{surname }}</div>
          <b><div style="font-size: 16px; position: absolute; right: 16px;" v-if="isFounder == true">Founder</div></b>
          <div style="font-size: 14px; position: absolute; top: 40px; font-family: 'Myriad Pro Light';">Expert in
            <div style="flex-direction: row; display: flex;">
              <div v-for="element in area.split(',')" class="area-container"> 
                {{ element }}
              </div>
            </div>  
          </div>      
        </div>
      </div>
    </NuxtLink>
</template>

<script setup>
  const props = defineProps(['name', 'surname', 'isFounder', 'area', 'link']);

</script>

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
    padding: 8px 16px;
    position: relative; 
  }

  .person-card .main-img{
    filter: grayscale(100%); 
    transition: filter .3s ease-in-out;
    height: 272px;
    width: 100%;
    border-top-right-radius: 4px;  
    border-top-left-radius: 4px;
  }

  .person-card .area-container {
    border: solid 1px white;
    border-radius: 8px;
    padding: 4px 8px 4px 8px;
    width: fit-content;
    position:relative;
    text-align: center;
    margin-right: 8px;
  }

  .person-card:hover{
    background-color: #282E36;
  }

  .person-card:hover .main-img{
    filter: none;
  }

  .item{
    content: ",";
  }
</style>
