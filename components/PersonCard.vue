<!--

    Card to display information in the list page.

    This component could be achieved with the SmallCard component by using a <slot> to insert the div with the image. The solution used here allows for better control of the layout.

    Since the information shown can be categorized into title and subtitle, it was preferred to use only one component for both dogs and location.
    PROPS:
    - title: main information to display
    - subtitle: second information to display
    - link: link to the page description
-->
<template>
  <div class="flex-container">
    <NuxtLink :to = "link">
      <div class="person-card">
        <img class="main-img" alt="picture" src="~\assets\img\youngwoman.png">
        <div class="data-container">
          <div style="font-size: 16px;">{{ name }} {{surname }}</div>
          <b><div style="font-size: 16px; position: absolute; right: 16px;" v-if="isFounder == true">Founder</div></b>
          <div style="font-size: 12px; position: absolute; top:32px;">Expert in
            <div class="area-container">{{ area }}</div>    
          </div>      
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
  const props = defineProps(['name', 'surname', 'isFounder', 'area', 'link']);

</script>

<style>

  .flex-container {
    padding:  8px;
  }

  .area-container {
    border: solid 1px white;
    border-radius: 8px;
    padding: 4px 8px 4px 8px;
    position:relative;
    top: 2px;
    text-align: center;
  }

  .person-card {
  /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 #282E36;
    transition: 0.3s;
    width: 240px;
    height: 400px;
    background-color: #F26225;
    color: white;
    border-radius: 8px;
  }

  .person-card .main-img:hover{
    background-color: #282E36;
    filter: none;
  }

  .person-card .main-img{
    filter: grayscale(100%); 
    transition: filter .2s ease-in-out;
    width:100%; 
    border-top-right-radius: 8px;  
    border-top-left-radius: 8px;
  }

  .data-container {
    padding: 2px 8px;
    position: relative; 
  }

  .person-card:hover{
    background-color: #282E36;
  }

</style>