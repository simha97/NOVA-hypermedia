<template>
    <div>
      <Breadcrumb :links="[{bread:'Home', goTo: '/'}, {bread:'Project', goTo: '/projects'}, {bread:project.projectTitle, goTo: '/projects/' + project.id}]"/>
    </div>
    <main>
        <div class = "info-group">
            <img id = "main-img" src = "~/assets/img/youngwoman.png" />
            <div id = "data-container">
                <p class = "data">Name: <span>{{ project.projectTitle }}</span></p>
                <p class = 'data'>Name: <span>{{ project.persons.name }}</span></p>
                <p class = 'data'>Surname: <span>{{ project.persons.surname }}</span></p>

            </div>
        </div>

    </main>
  <div class="goBack-container">
    <NuxtLink to="/projects"><backbutton text="All Projects"></backbutton></NuxtLink>
  </div>
</template>

<style>
    #main-img {
    width: 30%;
    height: auto;
    }

    .info-group {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 40px;
    }

    .data {
        font-weight: bolder;
        font-size: 20pt
    }

    .data span {
        font-weight: 100;
        font-size: 15pt;
    }

    #description {
        padding: 0 20px 0 20px;
        font-size: 15pt;
    }
</style>

<script setup>

    const route = useRoute()
    const id = route.params.id
    const { data: project } = await useFetch('/api/projects/' + id)

</script>

