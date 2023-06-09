<template>
    <div class="intro-wrap">
        <div class="intro-title">
            <h1>Meet Our Teams</h1>
            <h2>The Brilliant Minds Behind Our Vision</h2>
        </div>
    </div>
    <main>
        <div id="card-container">
            <div class = "form-container">
                <label for = "age-filter">Age filter</label><input id = "age-filter" type = 'text' placeholder = "Age filter" v-model = "age">
            </div>
            <h1>persons</h1>
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
        background: url('/windows-p74ndnYWRY4-unsplash 1.png');
        background-size: cover;
        background-repeat: no-repeat;
        opacity: 0.7;
        width:  100%;
        height: auto;
        max-width: 1440px;
        height: 648px;
        display: flex;
        align-items: flex-end;
        overflow: hidden;
        position:relative;

    }

    .intro-title {
        position: absolute;
        bottom: 100px;
        left: 100px;
        font-size: 18px;
    }

    #card-container
    {
        max-width: ;
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