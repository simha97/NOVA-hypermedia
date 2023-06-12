<template>
  <div class="breadcrumb-container">
    <img src="~\assets\icons\breadcrumb.png">
    <span v-for="item in links">
        <NuxtLink :to="item.goTo" class="breadcrumbs">
          {{ item.bread }}
        </NuxtLink>
        <span v-if="links.indexOf(item) != links.length - 1">
          /
        </span>
    </span>
  </div>  
</template>

<script setup>
  const props = defineProps(['links']);
</script>

<style>

.breadcrumb-container{
  src:url('/font/helvetica-light.ttf') format("truetype");
  font-family: Helvetica;
  font: Helvetica 16px light;
  font-style: italic;
  opacity: 0.9;
  width: fit-content;
  margin: 0 0 80px 110px;
  border-bottom: 4px solid #F26225;
  padding: 40px 0;
}

.breadcrumb-container img{
  margin-right: 8px; 
  margin-top: -8px; 
}
.breadcrumb-container .breadcrumbs:hover{
  text-decoration: underline;
}

</style>

