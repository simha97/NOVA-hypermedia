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
  <div class="card">
      <img class="img" alt="Avatar" style="width:100%" src='~/assets/img/youngwoman.png' />
      <div class="container">
      <span class="title">{{ title }}</span>
      <div class="isFounder">Founder</div>
      <span class="subtitle">{{ subtitle }}</span>
      <span class="subtitle">{{ number }}</span>
      <NuxtLink :to = "link" ><button>Open description</button></NuxtLink>
  </div>
  </div>
  </div>
</template>

<script setup>
  const props = defineProps(['title', 'subtitle', 'number', 'link'])
</script>

<style>

.flex-container {
  padding:  32px;
}

.card {
/* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 256px;
  height: 400px;
}

.card .img{
  filter: grayscale(100%); transition: filter .2s ease-in-out;
}
.card:hover img{
  filter: none;
}


/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}

</style>