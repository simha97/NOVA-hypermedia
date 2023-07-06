<template>
  <Breadcrumb :breadcrumb = '"Home / Areas / " + area_info.name'/>
  <h2>{{area_info.name}}</h2>
  <h3>{{ area_info.description }}</h3>
  <div class="card-container">
    <ProjectCard v-for="project in area_info.projects" :key="project.id" :title="project.projectTitle" :city="project.city" :mainIdea="project.mainIdea" :area="project.areas.name" :link="'/projects/' + project.id" />
  </div>
  <div class="goBack-container">
    <NuxtLink to="/areas"><Backbutton text="All Areas"/></NuxtLink>
  </div>
</template>

<script setup>

  const route = useRoute()
  const id = route.params.id
  const { data: area_info } = await useFetch('/api/areas/' + id)
  
</script>
