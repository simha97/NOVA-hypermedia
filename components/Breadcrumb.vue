<template>
  <div class="breadcrumb-container">
    <img src="~\assets\icons\breadcrumb.png" style="margin-right: 8px;">
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
  width: fit-content;
  margin-left: 160px;
  padding: 40px 0;
  border-bottom: 3px solid #F26225;
  font-size: 16px;
}

.breadcrumb-container .breadcrumbs:hover{
  text-decoration: underline;
}

</style>

