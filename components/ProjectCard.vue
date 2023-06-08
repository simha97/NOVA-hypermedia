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
      <div class="project-card">
        <img class="main-img" alt="Avatar" style="width:100%" src="~\LogoPng\01HealthyBites.png">
        <div class="data-container">
          <b><div style="font-size: 16px;">{{ title }}</div></b>
          <div style="font-size: 12px;">{{ mainIdea }}</div>
          <div style="font-size: 12px;">{{ city }}</div>
          <div style="font-size: 12px; text-align: right;">{{ area }}</div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
  const props = defineProps(['logo', 'title', 'mainIdea', 'city', 'area', 'link'])
</script>

<style>

.flex-container {
  padding:  32px;
}

.project-card {
/* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 256px;
  height: 400px;
  background-color: white;
  color: #282E36;
}

.project-card:hover{
  background-color: #282E36;
  color:white;
}

/*
.project-card .main-img{
  filter: grayscale(100%); transition: filter .2s ease-in-out;
}
.project-card .main-img:hover{
  filter: none;
}
*/


/* Add some padding inside the card container */
.data-container {
  padding: 2px 16px;
}

</style>