<script setup>
  import Breabcrumb from '~/components/Breadcrumb.vue';
  const route = useRoute()
  const id = route.params.id
  const { data: projects } = await useFetch('/api/areas/' + id)
</script>

<template>
  <div>
    <Breabcrumb :links="[{bread:'Home', goTo: '/'}, {bread:'Areas', goTo: '/ourTeam/food'}, {bread: id, goTo: '/ourTeam/' + id}]"/>
  </div>
  <div id="card-container">
        <ProjectCard v-for="project in projects" :key="project.id" :title="project.projectTitle" :city="project.city" :mainIdea="project.mainIdea" :area="project.area" :link="'/projects/' + project.id" />
    </div>
</template>