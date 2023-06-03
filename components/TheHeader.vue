<!--
    Header of the page
-->
<template>
    <header>
        <h1>The Dog Shelter</h1>
        <nav>
            <NuxtLink to = "/">HOME</NuxtLink>
            <NuxtLink to = "/ourTeam">OUR TEAM</NuxtLink>
            <NuxtLink to = "/">LOCATIONS</NuxtLink>
            <NuxtLink to = "/">ABOUT US</NuxtLink>
            <NuxtLink to = "/">CONTACT US</NuxtLink>
        </nav>
    </header>
</template>

<style>
    header
    {
        background-color: #36D6E7;
    }

    header
    {
        padding: 0px 20px 0px 20px;
        margin-bottom: 5px;
        border-bottom: 5px solid #0074dd;
        
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    nav {
        display: flex;
        gap: 30px;
        font-size: 17pt;
        font-weight: bold;
    }
</style>