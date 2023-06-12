<template> 
    <div class="intro-wrap">
        <img src="~\assets\img\OurTeam.png">
        <div class="intro-title">
            <div style="font-size: 48px;">Meet Our Teams</div>
            <div style="font-size: 24px; margin-top: 16px;">The Brilliant Minds Behind Our Vision</div>
        </div>
    </div>
    <div>
        <Breabcrumb :links="[{bread:'Home', goTo: '/'}, {bread:'Our Team', goTo: '/ourTeam'}]"/>
    </div>  
    <div>
        <div class="description-title">
            Our Team
        </div>
        <div class="description">
            Our team page showcases the impressive network of backers who believe in our vision and share our passion for supporting innovative startups.
        </div>
    </div>
    <main>
        <div id="card-container">
            <PersonCard v-for="person of filtered" :key="person.id" :name="person.name" :surname="person.surname" :age="person.age" :area="person.area" :isFounder="person.isFounder" :link="'/ourTeam/' + person.id" />
        </div>
    </main>
</template>

<script setup>
    import Breabcrumb from '~/components/Breadcrumb.vue';
    const { data: persons } = await useFetch('/api/ourTeam')
    const age = ref(0);
    const filtered = computed(() => {
        // Checking for values where the full list is provided
        if(age.value == 0 || age.value == "")
            return persons.value

        const arr = []

        // Filtering the list
        for(let person of persons.value) {
            if(person.age < age.value)
                arr.push(person)
        }

        // Returning the filtered list
        return arr
    })
</script>

<style>

    .intro-wrap{
        background-size:cover;
        background-repeat: no-repeat;
        width:  1434px; 
        height: 552px;
        display: flex;
        align-items: flex-end;
        overflow: hidden;
        position: relative;
        margin-left: -160px;
    }
    
    .intro-wrap img{
        filter: brightness(70%); 
        opacity: 90%;
    }

    .intro-title {
        src:url('/font/helvetica-light.ttf') format("truetype");
        font-family: "Helvetica Light";
        position: absolute;
        left: 160px;
        top: 304px;
        color: white;
    }

    .description-title {
        position: relative;
        color:#282E36;
        src:url('/font/Myriad\ Pro\ Light.ttf') format("truetype");
        font-family: "Myriad Pro Light";
        padding-top: 16px;
        font-size: 36px;
    }

    .description {
        position: relative;
        color:#282E36;
        src:url('/font/Myriad\ Pro\ Regular.ttf') format("truetype");
        font-family: "Myriad Pro Regular";
        padding-top: 16px;
        font-size: 24px;
    }

    #card-container{
        display: flex ;
        flex-wrap: wrap;
        flex-direction: row;
        column-gap: 32px;
        row-gap: 80px;
        width: 1120px;
        margin-top: 96px;
        margin-bottom: 320px;
    }

    main{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: flex-start;
    }

    .form-container {
        width: 90%;
        border-radius: 10px;
        border: 2px solid brown;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-content: flex-start;
        gap: 20px;
        max-width: 1440px;
        background-color: burlywood;
        padding: 20px;
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