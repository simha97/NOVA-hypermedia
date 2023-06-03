

<script setup>
    const route = useRoute()
    const id = route.params.id
    // useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
    const { data: person } = await useFetch('/api/ourTeam/' + id)
    const description = ref(newLineOnFullStop(person.value.story))
</script>

<template>
    <main>
        <div class = "info-group">
            <img id = "main-img" src = "~/assets/img/youngwoman.png" />
            <div id = "data-container">
                <p class = "data">Name: <span>{{ person.name }}</span></p>
                <p class = "data">Surname: <span>{{ person.surname }}</span></p>
                <p class = "data">Age: <span>{{ person.age }}</span></p>
            </div>
        </div>
        <h2>Description</h2>

    </main>
</template>

<style>
    #main-img {
    width: 30%;
    height: auto;
    }

    main {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
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