<template>
    <div class="nav-container">
        <div id="landmark-homepage">
            <NuxtLink to="/" >
                <img src="~\assets\img\logo_black.png" id="logo-nova" alt="NOVA logo">
            </NuxtLink>
        </div>
        <div class="nav-list-item">
            <span class="nav-item">
                <div class="dropdown">
                    <NuxtLink to="/projects">
                        PROJECTS
                        <img src="~\assets\icons\vector.png" id="vector" alt="">
                    </NuxtLink>
                    <div class="dropdown-sub">
                        <div class="dropdown-option">
                            <NuxtLink to="/projects/mainProjects">MAIN PROJECTS</NuxtLink>
                        </div>
                        <div class="dropdown-option">
                            <NuxtLink to="/projects">PROJECTS BY AREA</NuxtLink>
                        </div>
                    </div>
                </div>
            </span>    
            <div class="nav-item">
                <NuxtLink to="/ourTeam">OUR TEAM</NuxtLink>
            </div>   
            <div class="nav-item">
                <NuxtLink to="/areas">AREAS</NuxtLink>
            </div>
            <div class="nav-item">
                <NuxtLink to="/aboutUs"> ABOUT US</NuxtLink>
            </div>
            <div class="nav-item">
                <NuxtLink to="/contactUs">CONTACT US</NuxtLink>
            </div>
        </div>
    </div> 
</template>

<style scoped>
    .nav-container{
        background-color: #F5F5F5;
        display: flex;
        align-items: flex-end;
        width: 100%;
        height: 96px;
        position: relative;
        z-index: 1; /*this give the idea of "layers", so this has to be up the root level 0, and must be accompanied with position*/
        box-shadow: 0 0 5px 0 #E7E7E7;
        align-items: center;
    }

    #logo-nova{
        margin-left: 56px;
        width: 160px;
    }

    #vector{
        vertical-align: middle;
        margin-left: 4px;
        width: 12px;
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
        transform: translate(-25%);
        background-color: #F5F5F5;
        width: max-content;
        overflow: auto;
        box-shadow: 0px 4px 8px 0px #E7E7E7;
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
            flex-direction: column;
            align-items: flex-start;
            height: 4em;
        }
        .nav-container:hover{
            height: 12em;
        }
        .nav-container:hover .nav-list-item {
            display: flex;
        }
        #landmark-homepage{
            position: relative;
            margin-top: 5px;
            width: 160px;
        }
        .nav-list-item {
            position: relative;
            display: flex;
            align-items: flex-end;
            gap: 5px;
            text-indent: 10px;
            margin-right: 30px;
            left:0;
        }

        .dropdown:hover .dropdown-sub {
            left: 50%;
        }
    }
</style>