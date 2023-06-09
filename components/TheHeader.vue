<!--
    Header of the page
-->

<template>
    <div class="nav-container">
        <div class="nav-list-item">
            <NuxtLink to="/" ><img src="/logo.svg" alt="logo nova" style="margin-left: -480px;"/></NuxtLink>
            <div class="nav-item"><NuxtLink to="/ourTeam">OUR TEAM</NuxtLink></div>
            <div class="dropdown">
                <div class="dropdown-title nav-item" @click="toggle">PROJECTS</div>
                    <div class="dropdown-sub">
                        <div class="dropdown-option" v-if="true"><NuxtLink  to="/projects" v-if="active">ALL PROJECT</NuxtLink>  </div>
                        <div class="dropdown-option" v-if="true"><NuxtLink  to="/projects/main-projects" v-if="active">MAIN PROJECT</NuxtLink>   </div>
                    </div>
            </div>
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
        height: 96px;
        max-width: 2000px;
        position: relative;
        z-index: 1; /*this give the idea of "layers", so this has to be up the root level 0, and must be accompanied with position*/
        padding-bottom: 8px;
    }

    .nav-list-item {
        position: absolute;
        right: 100px;
        margin-left: auto; 
        margin-right: 0;
        align-items: center;
        display: flex;
        text-align:center;
        text-indent: 32px;
        src:url('/font/Myriad\ Pro\ Regular.ttf') format("truetype");
        font-family: "Myriad Pro";
        font-size: 32px;
    }

    .nav-item {
        color:#282E36;
        padding:32px;
        width: max-content;
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
    
    a{
        color:#282E36;
    }
</style>