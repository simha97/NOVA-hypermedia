<template>
  <button class="back-button" @click="goBack">
    <span class="arrow"></span>
    <span class="text">{{ text }}</span>
  </button>
</template>

<script setup>
  const props = defineProps(['text']);
</script>

<style>
.back-button {
  display: flex;
  box-sizing: border-box;
  align-items: flex-start;
  border: 0.995204px solid #F26225;
  border-radius: 7.96163px;
  background: #FFFFFF;
  padding: 16px 24px;
  border-radius: 4px;
  gap: 16px;
  cursor: pointer;
  width: 150px;
  height: 50px;
}

.arrow {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-top: 2px solid #F26225;
  border-left: 2px solid #F26225;
  transform: rotate(-45deg);
  margin-top: 4px;
  margin-left: 1px;
}

.text {
  font-size: 16px;
  font-weight: bold;
  color:#F26225;
  white-space: nowrap;
  text-decoration: none;
}

</style>
