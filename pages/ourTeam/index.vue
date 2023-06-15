<template> 
    <div class="intro">
        <img class="shadow" src="~\assets\img\pageShadow.png">
        <img src="~\assets\img\OurTeam.png">
        <div class="intro-description">
            <h1>Meet Our Teams</h1>
            <h3>The Brilliant Minds Behind Our Vision</h3>
        </div>
    </div>
    <div>
        <Breadcrumb :links="[{bread:'Home', goTo: '/'}, {bread:'Our Team', goTo: '/ourTeam'}]"/>
    </div>  
    <div>
        <h2>Our Team</h2>
        <h3>Our team page showcases the impressive network of backers who believe in our vision and share our passion for supporting innovative startups.</h3>
    </div>
    <main>
        <div class="card-container">
            <div v-for="person of filtered">
                <NuxtLink :to = "'/ourTeam/' + person.id"><PersonCard id="card" :key="person.id" :name="person.name" :surname="person.surname" :age="person.age" :area="person.area" :isFounder="person.isFounder"/></NuxtLink>
            </div>
        </div>
    </main>
</template>

<style>

    .intro .shadow{
        width: 1440px;
        height: 648px;
    }

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
        .intro {
            width:  700px;
            height: 400px;
        }
        .intro img{
            max-width: 100%;
            max-height: auto;
            background-size: 100% 100%;
            overflow: hidden;
            opacity: 0.9;
            position: absolute;
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
    const age = ref(0);
    const filtered = computed(() => {
        if(age.value == 0 || age.value == "")
            return persons.value

        const arr = []

        for(let person of persons.value) {
            if(person.age < age.value)
                arr.push(person)
        }

        return arr
    })

</script>