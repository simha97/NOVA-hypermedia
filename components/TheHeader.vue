<!--
    Header of the page
-->

<template>
    <div class="nav-container">
        <img src="/logo.svg" alt="logo nova"/>
        <div class="nav-item"><NuxtLink to="/" >Home</NuxtLink></div>
        <div class="nav-item"><NuxtLink to="/ourTeam">Our Team</NuxtLink></div>
        <div>
            <div class="dropdown">
                <div class="dropdown-title nav-item" >Projects</div>
                    <div class="dropdown-sub">
                        <div class="dropdown-option" v-if="active">   <NuxtLink  to="/projects" v-if="active">ALL PROJECT</NuxtLink>  </div>
                        <div class="dropdown-option" v-if="active">   <NuxtLink  to="/projects/main-projects" v-if="active">MAIN PROJECT</NuxtLink>   </div>
    </div>
</div>

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
        display: flex;
        width: 1440px;
        height: 96px;
    }

    /*.dropdown-menu{
        position: absolute;
        width: auto;
        height: auto;
    }*/
    /* Menu Dropdown! please use div */
    .dropdown{
        display: flex;
        flex-wrap: wrap;
        flex-direction:column;
    }
    .dropdown > .dropdown-title{
        /* put the height and width here! */
        width: 2em;
        height: 2em;
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