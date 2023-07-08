<template>
  <div class="breadcrumb-container">
    <img src="~\assets\icons\breadcrumb.png">
    <span>
      {{ breadcrumb }}
    </span>
  </div>  
</template>

<script setup>
  const props = defineProps(['breadcrumb']);
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

