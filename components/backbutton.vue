<template>
  <button class="back-button" @click="goBack">
    <span class="arrow"></span>
    <span class="back-text">{{ text }}</span>
  </button>
</template>

<script setup>
  const props = defineProps(['text']);
</script>

<style>

  .back-button {
    border: 1px solid #F26225;
    background: #FFFFFF;
    border-radius: 8px;
    width: 176px;
    height: 64px;
  }

  .arrow {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-top: 2px solid #F26225;
    border-left: 2px solid #F26225;
    transform: rotate(-45deg);
  }

  .back-text {
    font-size: 24px;
    color:#F26225;
    font-family: 'Myriad Pro';
    margin-left: 8px;
    margin-top: 8px;
  }

  .back-button:hover .back-text{
    text-decoration: underline;
  }

</style>
