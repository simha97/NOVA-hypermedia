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

<style scoped>

  .breadcrumb-container{
    position: relative;
    width: fit-content;
    margin-top: 96px;
    padding-bottom: 80px;
    font-size: 24px;
  }

  .breadcrumb-container img{
    margin-right: 8px; 
    margin-top: -8px; 
  }

  .breadcrumb-container .breadcrumbs:hover{
    text-decoration: underline;
  }
  @media screen and (max-width: 830px) {
    .breadcrumb-container{
      margin-top: 110px;
    }

  }

</style>

