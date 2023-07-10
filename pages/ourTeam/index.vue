<template> 
    <div class="intro">
        <img class="shadow" src="~\assets\img\pageShadow.png">
        <img src="/PagePictures/OurTeam.png" alt=“”>
        <div class="intro-description">
            <div>
                <h1>Meet Our Teams</h1>
                <h3>The Brilliant Minds Behind Our Vision</h3>
            </div>
        </div>
    </div>
    <div class="content-container">
    <Breadcrumb breadcrumb = 'Home / OurTeam'/>
        <h2>Our Team</h2>
        <h3>Our team page showcases the impressive network of backers who believe in our vision and share our passion for supporting innovative startups.</h3>
        <div class="card-container">
            <div v-for="person of persons" :key="person.id">
                <NuxtLink :to = "'/ourTeam/' + person.id"><PersonCard id="card" :key="person.id" :name="person.name" :surname="person.surname" :age="person.age" :area="person.areas" :isFounder="person.isFounder"/></NuxtLink>
            </div>
        </div>
    </div>
</template>

<style>

    #card #profile{    
        transition: filter .3s ease-in-out;
        filter: grayscale(100%); 
    }
    
    #card:hover #profile{
        filter: none;
    }

    #card:hover{
        background-color: #282E36;
    }

    #card:hover .area-container{
        background-color: #282E36;
    }

    @media screen and (max-width: 830px) {

        .intro img{
            max-height: auto;
            width: 100%;
            height: auto;
            min-height: 648px;
            margin: 0;
        }

        main #card-container{
            display: flex ;
            flex-wrap: wrap;
            flex-direction: row;
            margin: 20px 40px 20px 40px;
            gap: 32px;
        }

    }

</style>

<script setup>

    const { data: persons } = await useFetch('/api/ourTeam')

</script>