<template>
    <div class="nav-container">
        <NuxtLink to="/" ><img src="/logo.svg" alt="logo nova" style="position: relative; left: 56px; width: 160px;"/></NuxtLink>
        <div class="nav-list-item">
            <span class="nav-item">
                <div class="dropdown"><NuxtLink to="/projects">PROJECTS</NuxtLink>
                    <div class="dropdown-sub">
                        <div class="dropdown-option"><NuxtLink to="/projects/mainProjects" >MAIN PROJECTS</NuxtLink></div>
                        <div class="dropdown-option"><NuxtLink to="/projects" >ALL PROJECTS</NuxtLink></div>
                    </div>
                </div>
            </span>    
            <div class="nav-item"><NuxtLink to="/ourTeam">OUR TEAM</NuxtLink></div>
            <span class="nav-item">
                <div class="dropdown"><NuxtLink to="/areas/Art">AREAS</NuxtLink>
                    <div class="dropdown-sub">
                        <div class="dropdown-option" ><NuxtLink to="/areas/Art" >ART</NuxtLink></div>
                        <div class="dropdown-option" ><NuxtLink to="/areas/Education" >EDUCATION</NuxtLink></div>
                        <div class="dropdown-option" ><NuxtLink to="/areas/Energy">ENERGY</NuxtLink></div>
                        <div class="dropdown-option" ><NuxtLink to="/areas/Food">FOOD</NuxtLink></div>
                    </div>
                </div>
            </span>
            <div class="nav-item"><NuxtLink to="/aboutUs"> ABOUT US</NuxtLink></div>
            <div class="nav-item"><NuxtLink to="/contactUs">CONTACT US</NuxtLink></div>
        </div>
    </div> 
</template>

<style>
    .nav-container{
        background-color: #F5F5F5;
        display: flex;
        width: 100%;
        height: 96px;
        position: relative;
        z-index: 1; /*this give the idea of "layers", so this has to be up the root level 0, and must be accompanied with position*/
        box-shadow: 0 0 5px 0 #282E36;
        align-items: center;
    }

    .nav-list-item {
        position: absolute;
        right: 56px;
        align-items: center;
        display: flex;
        text-align:center;
        gap: 48px;
    }

    .nav-item {
        width: max-content;
    }

    .nav-item:hover {
        text-decoration: underline;
    }

    .dropdown{
        display: inline-block;
        position: relative;
    }

    .dropdown-sub{
        display: none;
        position: absolute;
        left: -50%;
        background-color: #F5F5F5;
        width: max-content;
        overflow: auto;
        box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.7);
        row-gap: 45px;
        padding: 12px 16px 12px 16px;
        border: solid 1px #282E36;
        border-radius: 8px;
    }

    .dropdown-option {
        text-align: center;
        padding: 4px 0 4px 0;
    }

    .dropdown:hover .dropdown-sub {
        display: block;
    }

    .dropdown:hover .dropdown-sub .dropdown-option:hover{
        display:block;
        text-decoration: underline;
    }

    @media (max-width: 830px) {
        .nav-container{
            background-color: #F5F5F5;
            display: flex;
            width: 100%;
            height: 56px;
            position: relative;
            z-index: 1; /*this give the idea of "layers", so this has to be up the root level 0, and must be accompanied with position*/
            padding-bottom: 8px;
            box-shadow: 0 1px 1px 0 #282E36;
        }
        .nav-container:hover{
            height: 10em;
            
        }
        .nav-list-item {
            position: relative;
            left:30%;
            align-items: center;
            display: flex;
            text-align:center;
            text-indent:10px;

        }
    }
</style>