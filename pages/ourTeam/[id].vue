<script setup>
    import Breabcrumb from '~/components/Breadcrumb.vue';
    const route = useRoute()
    const id = route.params.id
    // useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
    const { data: person } = await useFetch('/api/ourTeam/' + id)
    const description = ref(newLineOnFullStop(person.value.story))
</script>

<template>
  <div>
    <Breabcrumb :links="[{bread:'Home', goTo: '/'}, {bread:'Our Team', goTo: '/ourTeam'}, {bread:person.name +  ' ' + person.surname, goTo: '/ourTeam/' + person.id}]"/>
  </div>
            <div id = "person-data-container">
            <table>
                <tr>
                <td>
                    <p class = "name"> <span>{{ person.name }} {{ person.surname }}</span></p>
                <p class = "quote"><span>"As an expert in both Education and Art I am dedicated to fostering creativity and knowledge through innovative approaches"</span></p>
                <ul class="info">
                <li>Profile</li>
                <p class="details">{{person.story}}</p>

                <li> Academic Experience</li>
                <p class="details">{{person.degree}}.</p>

                <li> Past Job Experience</li>
                <p class="details">{{person.pastJobExperience}}</p>
              </ul>
                </td>
                <td class="image-column"><img id = "main-img" src = "~\assets\img\youngwoman.png" /></td>
                </tr>
            </table>

            </div>
            <h2 class="Progress_container">Projects in Progress</h2>
            <p>Discover a collection of ongoing projects by <span>{{ person.name }} {{ person.surname }}</span></p>
            <div id="card-container">
                <ProjectCard v-for="project in person.projects" :key="project.id" :title="project.projectTitle" :city="project.city" :mainIdea="project.mainIdea" :area="project.area" :isFounder="project.isFounder" :link="'/projects/' + project.id" />
            </div>
            <NuxtLink to="/ourTeam"><backbutton text="Our Team"></backbutton></NuxtLink>
        </template>

<style>

    #main-img {
        width: 527px;
        height: 685px;
        border-radius: 8px 8px 8px 8px;  
    }

    .image-column{
        padding-left: 10px;    
    }

    .person-data-container{
        display: flex;
    }

    .Progress_container{
        padding-top: 120px;
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
        word-wrap: break-word; 
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

    @media (max-width: 768px) {
      #main-img {
        width: 100%;
        height: auto;
        border-radius: 8px;
      }
      
      .image-column {
        padding-left: 0;
        text-align: center;
      }
      
      .data-container {
        flex-direction: column;
        align-items: left;
      }
      
      .quote {
        width: 100%;
        padding: 0 20px;
        text-align: center;
      }
      
      .info {
        text-align: left;
      }
      
      .details {
        width: 100%;
      }
    }

    /* Styles for mobile devices */
    @media (max-width: 480px) {
      .name {
        font-size: 24px;
      }
      
      .quote {
        font-size: 18px;
        line-height: 24px;
      }
      
      .info {
        font-size: 16px;
      }
      
      .details {
        font-size: 12px;
      }
    }

    
</style>