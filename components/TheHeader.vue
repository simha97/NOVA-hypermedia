<!--
    Header of the page
-->


<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" style="height: 96px;" >
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
            <li class="nav-item active">
                <NuxtLink class="nav-link" href="#" to = "/">HOME <span class="sr-only">(current)</span></NuxtLink>
            </li>

            <li class="nav-item">
                <NuxtLink class="nav-link" href="#" to = "/ourTeam">OUR TEAM</NuxtLink>
            </li>

            <li class="nav-item dropdown">
                <NuxtLink class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to = "/projects">Projects</NuxtLink>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <NuxtLink class="dropdown-item" href="#" to = "/projects">All projects</NuxtLink>
                <NuxtLink class="dropdown-item" href="#" to = "/projects">Main projects</NuxtLink>
                </div>
            </li>

            <li class="nav-item">
                <NuxtLink class="nav-link" href="#" to = "/aboutUs">About Us</NuxtLink>
            </li>

            <li class="nav-item">
                <NuxtLink class="nav-link" href="#" to = "/contactUs">Contact Us</NuxtLink>
            </li>

     
        </ul>
    </div>
    </nav>

</template>