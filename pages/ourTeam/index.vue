<template>
    <div class="intro">
        <div class="intro-title">
            <h1>Meet Our Teams</h1>
            <h2>The Brilliant Minds Behind Our Vision</h2>
        </div>
    </div>
    <main>
        <!--
            Filter
        -->

        <div id="card-container">
            <div class = "form-container">
                <label for = "age-filter">Age filter</label><input id = "age-filter" type = 'text' placeholder = "Age filter" v-model = "age">
            </div>
            <h1>persons</h1>
            <Card v-for="person of filtered" :key="person.id" :title="person.name" :subtitle="person.surname" :number="person.age" :link="'/ourTeam/' + person.id" />
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

    .intro{
        background: url('/windows-p74ndnYWRY4-unsplash 1.png'); /*to create images*/
        width:  100%;
        height: 648px;
        left: 0px;
        top: 0px;
        position: absolute;
    }

    .intro img{
        max-width: 1440px;
        max-height: 648px;
        overflow: hidden;
    }

    .intro h1, h2{
        margin-left: 160px;
        margin-top:  400px;
    }

    #card-container
    {
        display: flex-start ;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
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

        background-color: burlywood;
        padding: 20px;
    }

</style>