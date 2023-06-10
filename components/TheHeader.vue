<!--
    Header of the page
-->

<template>
    <div class="nav-container">
        <NuxtLink to="/" ><img src="/logo.svg" alt="logo nova" style="position: absolute; left: 40px; top: 8px; width: 120px;"/></NuxtLink>
        <div class="nav-list-item">
            <div class="dropdown"><NuxtLink to="/projects">PROJECTS</NuxtLink>
                <div class="dropdown-sub">
                    <div class="dropdown-option" ><NuxtLink to="/projects" >ALL PROJECT</NuxtLink>  </div>
                    <div class="dropdown-option" ><NuxtLink to="/projects/main-projects" >MAIN PROJECT</NuxtLink>   </div>
                </div>
            </div>
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
        right: 100px;
        margin-left: auto; 
        margin-right: 80px;
        align-items: center;
        display: flex;
        text-align:center;
        text-indent: 80px;
    }

    .nav-item {
        width: max-content;
    }

    .dropdown{
        flex-wrap: wrap;
        flex-direction:column;
    }

    .dropdown .dropdown-title{
        width: auto;
        height: auto;
    }

    .dropdown .dropdown-sub{
        display: none;
        flex-direction: column; /* or row */
    }

    .dropdown:hover .dropdown-sub {
        display: flex;
        border: solid 1px #282E36;
        border-radius: 8px;
        width: 160px;
    }
    
    .dropdown:hover .dropdown-sub .dropdown-option:hover{
        background-color: #abcdef;
    }
    
    a{
        color:#282E36;
        src:url('/font/Myriad\ Pro\ Regular.ttf') format("truetype");
        font-family: "Myriad Pro Regular";
        font-size: 16px;
    }

    a:hover{
        color:#282E36;
        text-decoration: none;
    }

</style>