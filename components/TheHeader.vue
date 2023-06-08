<!--
    Header of the page
-->

<template>
    <div class="nav-container">
        <img src="/logo.svg" alt="logo nova"/>
        <div class="nav-list-item">
            <div class="nav-item"><NuxtLink to="/" >Home</NuxtLink></div>
            <div class="nav-item"><NuxtLink to="/ourTeam">Our Team</NuxtLink></div>
            
            <div>
                <div class="dropdown">
                    <div class="dropdown-title nav-item" ><a href="/projects">Projects</a></div>
                        <div class="dropdown-sub">
                            <div class="dropdown-option" v-if="active">   <NuxtLink  to="/projects" v-if="active">ALL PROJECT</NuxtLink>  </div>
                            <div class="dropdown-option" v-if="active">   <NuxtLink  to="/projects/main-projects" v-if="active">MAIN PROJECT</NuxtLink>   </div>
                        </div>
                </div>
            </div>

        <div class="nav-item"><NuxtLink to="/aboutUs"> About Us</NuxtLink></div>
        <div class="nav-item"><NuxtLink to="/contactUs">Contact Us</NuxtLink></div>
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
        width: 1440px;
        height: 96px;
        position:absolute;
        z-index: 1; /*this give the idea of "layers", so this has to be up the root level 0, and must be accompanied with position*/
    }

    .nav-list-item {
        margin-left: auto; 
        margin-right: 0;
        align-items: center;
        display: flex;
        text-align:left;
        text-indent: 32px;

        src:url('/font/Myriad\ Pro\ Regular.ttf') format("truetype");
        font-family: "Myriad Pro";
        font: "Myriad Pro" 32px italic;
    }

    .nav-item {
        padding:32px;
    }

    .dropdown{
        display: flex;
        flex-wrap: wrap;
        flex-direction:column;
    }
    .dropdown > .dropdown-title{
        /* put the height and width here! */
        width: auto;
        height: auto;
    }
    .dropdown > .dropdown-sub{
        display: none;
        z-index: 1;
        flex-direction: column; /* or row */
    }
    .dropdown:hover > .dropdown-sub {
        display: flex;
    }
    .dropdown:hover > .dropdown-sub  > .dropdown-option:hover{
        background-color: #abcdef;
    }
</style>