<!--
    Header of the page
-->

<template>
    <div class="nav-container">
        <NuxtLink to="/" ><img src="/logo.svg" alt="logo nova" style="position: absolute; left: 40px; top: 8px; width: 120px;"/></NuxtLink>
        <div class="nav-list-item">
            <div class="dropdown"><NuxtLink to="/projects">PROJECTS</NuxtLink>
                <div class="dropdown-sub">
                    <div class="dropdown-option" ><NuxtLink to="/projects" >ALL PROJECTS</NuxtLink>  </div>
                    <div class="dropdown-option" ><NuxtLink to="/projects/main-projects" >MAIN PROJECTS</NuxtLink>   </div>
                </div>
            </div>
            <div class="nav-item"><NuxtLink to="/areas">AREAS</NuxtLink></div>
            <div class="nav-item"><NuxtLink to="/ourTeam">OUR TEAM</NuxtLink></div>
            <div class="nav-item"><NuxtLink to="/aboutUs"> ABOUT US</NuxtLink></div>
            <div class="nav-item"><NuxtLink to="/contactUs">CONTACT US</NuxtLink></div>
        </div>
    </div> 
</template>

<script>
  export default {
    data () {
      return {
        active: true
      }
    },
    methods: {
      toggle () {
        this.active = !this.active
      }
    }
  }
</script>

<style>
    .nav-container{
        background-color: #F5F5F5;
        display: flex;
        width: 100%;
        height: 56px;
        max-width: 2000px;
        position: relative;
        z-index: 1; /*this give the idea of "layers", so this has to be up the root level 0, and must be accompanied with position*/
        padding-bottom: 8px;
        box-shadow: 0 1px 1px 0 #282E36;
    }

    .nav-list-item {
        position: relative;
        right: 100px;
        left: 10%;

        align-items: center;
        display: flex;
        text-align:center;
        text-indent: 80px;
    }

    .dropdown{
        display: inline-block;
        position: relative;
    }

    .dropdown-sub{
        display: none;
        position: absolute;
        background-color: #F5F5F5;
        width: 100%;
        overflow: auto;
        text-indent: initial;
        box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.7);
        margin-left: 40px;
    }

    .dropdown-option {
        height: 40px;
        padding: 8px;
    }

    .dropdown:hover .dropdown-sub {
        display: block;
        border: solid 1px #282E36;
        border-radius: 8px;
    }

    .dropdown:hover .dropdown-sub .dropdown-option:hover{
        display:block;
        text-decoration: underline;
    }
    
    a{
        color:#282E36;
        src:url('/font/Myriad\ Pro\ Regular.ttf') format("truetype");
        font-family: "Myriad Pro Regular";
        font-size: 16px;
        width: max-content;
    }

    a:hover{
        color:#282E36;
        text-decoration: none;
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
        /*
        .dropdown{
            display: inline-block;
            position: relative;
        }

        .dropdown-sub{
            display: none;
            position: absolute;
            background-color: #F5F5F5;
            width: 100%;
            overflow: auto;
            text-indent: initial;
            box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.7);
        }

        .dropdown:hover .dropdown-sub {
            display: block;
            border: solid 1px #282E36;
            border-radius: 8px;
        }

        .dropdown:hover .dropdown-sub .dropdown-option:hover{
            display:block;
            background-color: #abcdef;
        }
        
        a{
            color:#282E36;
            src:url('/font/Myriad\ Pro\ Regular.ttf') format("truetype");
            font-family: "Myriad Pro Regular";
            font-size: 16px;
            width: max-content;
        }

        a:hover{
            color:#282E36;
            text-decoration: none;
        }*/
    }
</style>