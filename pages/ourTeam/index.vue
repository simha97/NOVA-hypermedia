<template>
    
    <div class="intro-wrap">
        <img src="~\assets\img\OurTeam.jpg">
        <div class="intro-title">
            <div style="font-size: 48px;">Meet Our Teams</div>
            <div style="font-size: 24px; margin-top: 32px;">The Brilliant Minds Behind Our Vision</div>
        </div>
    </div>


    <div class="breadcrumps-container">/Home/Our Team</div>  
    
    <main style="padding-top: 24px;">
    
        <div id="card-container">
            <PersonCard v-for="person of filtered" :key="person.id" :name="person.name" :surname="person.surname" :age="person.age" :area="person.area" :isFounder="person.isFounder" :link="'/ourTeam/' + person.id" />
        </div>
    </main>
</template>

<script setup>
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
        width:  100%;
        height: 480px;
        display: flex;
        align-items: flex-end;
        overflow: hidden;
        position: relative;
        border-radius: 8px;
        src:url('/font/helvetica-light.ttf') format("truetype");
        font-family: "Helvetica";
    }
    
    .intro-wrap img{
        filter: brightness(70%); 
        opacity: 90%;
        width: 100%;
    }

    .intro-title {
        position: absolute;
        bottom: 72px;
        left: 100px;
        color: white;
        font-weight: lighter;
    }

    #card-container{
        display: flex ;
        flex-wrap: wrap;
        flex-direction: row;
        gap: 20px;
    }

    main
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: flex-start;
        gap: 10px;
    }

    .breadcrumps-container{
        width: 9em;
        margin-left: 160px;
        padding: 80px 0;
        border-bottom: 3px solid #F26225;
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

    @media screen and (max-width: 700px) {
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
    }
</style>