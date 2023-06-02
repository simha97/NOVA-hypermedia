<template>
    <main>
        <!--
            Filter
        -->
        <div class = "form-container">
            <label for = "age-filter">Age filter</label><input id = "age-filter" type = 'text' placeholder = "Age filter" v-model = "age">
        </div>
        <h1>persons</h1>
        <div id="card-container">
            <Card v-for="person of filtered" :key="person.id" :title="person.name" :subtitle="person.surname" :number="person.age" :link="'/dogs/' + person.id" />
        </div>
    </main>
</template>

<script setup>
    // useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
    const { data: persons } = await useFetch('/api/dogs')

    /*
        In order to implement a filter, we use the computed property.
        This allows to have a cached value that contains the filtered list.
        Instead of using the normal list for the cards, we used the computed property directly.
    */
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
    #card-container
    {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-content: flex-start;
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