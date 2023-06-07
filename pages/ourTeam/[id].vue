

<script setup>
    const route = useRoute()
    const id = route.params.id
    // useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
    const { data: person } = await useFetch('/api/ourTeam/' + id)
    const description = ref(newLineOnFullStop(person.value.story))
</script>

<template>
            <div id = "data-container">
                <p class = "name"> <span>{{ person.name }} {{ person.surname }}</span></p>
                <p class = "quote"><span>"As an expert in both Education and Art I am dedicated to fostering creativity and knowledge through innovative approaches"</span></p>
                <img id = "main-img" src = "~/assets/img/youngwoman.png" />
            </div>
            <ul class="info">
                <li>Profile</li>
                <p class="details">{{person.story}}</p>

                <li> Academic Experience</li>
                <p class="details">{{person.degree}}.</p>

                <li> Past Job Experience</li>
                <p class="details">{{person.pastJobExperience}}</p>

              </ul>
            <h2>Projects in Progress</h2>
            <p>Discover a collection of ongoing projects by <span>{{ person.name }} {{ person.surname }}</span></p>
            <Card v-for="project in person.projects" :key="project.id" :title="project.projectTitle"  :link="'/projects/' + project.id" />
</template>

<style>
    #main-img {
        position: absolute;
        width: 250px;
        height: 300px;
        float: right;
        right:0;
        
        
    }

    .data-container{
        display: flex;

    }

    .name{
        margin-top: 50px;
        font-family: Myriad Pro;
        font-size: 36px;
        text-decoration: overline;
        text-decoration-color: #F26225;


    }
    .quote{
        font-family: 'Myriad Pro';
        font-style: italic;
        font-weight: 300;
        font-size: 24px;
        line-height: 29px;
        width: 576px;
        height: 87px;
        word-wrap: "overflow-wrap"; 

    }
    .info{
        list-style: url("~/assets/icons/orange-bullet.png");
        font-family: 'Myriad Pro';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        margin: auto;

    }
    .details{
        width: 503px;

        font-family: 'Myriad Pro';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;

        flex: none;
        order: 0;
        flex-grow: 0;
    }
</style>