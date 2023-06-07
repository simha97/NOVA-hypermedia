<!--
    Header of the page
-->

<template>
    <div class="nav-container">
        <img src="/logo.svg" alt="logo nova"/>
        <div><NuxtLink to="/" >Home</NuxtLink></div>
        <div><NuxtLink to="/ourTeam">Our Team</NuxtLink></div>
        <div>
            <div class="dropdown">
                <div class="dropdown-title"><p>Projects</p></div>
                    <div class="dropdown-sub">
                        <div class="dropdown-option" v-if="active">   <NuxtLink  to="/projects" v-if="active">ALL PROJECT</NuxtLink>  </div>
                        <div class="dropdown-option" v-if="active">   <NuxtLink  to="/projects/main-projects" v-if="active">MAIN PROJECT</NuxtLink>   </div>
    </div>
</div>
            <!--<div class="dropdown-menu">
                <NuxtLink  to="/projects" v-if="active">ALL PROJECT</NuxtLink>
                <NuxtLink  to="/main-projects" v-if="active">MAIN PROJECT</NuxtLink>
            </div>-->
        </div>
        <div class="nav-bar" style="margin-left: 80px;">
            <NuxtLink to="/">AREAS</NuxtLink>
        </div>         
        <div class="nav-bar" style="margin-left: 32px;">
            <NuxtLink to="/ourTeam">OUR TEAM</NuxtLink>
        </div> 
        <div class="nav-bar" style="margin-left: 32px;">
            <NuxtLink to="/">ABOUT US</NuxtLink>
        </div>         
        <div class="nav-bar" style="margin-left: 32px;">
            <NuxtLink to="/">CONTACT US</NuxtLink>
        </div>  
    </div>          

        <!--    <nav>
                <ul class="left">
                    <li class="logo"><a href="#">SoulOTrip</a></li>
                    <li >
                        <a href="#">Adventure Trips</a>
                        <ul class="drop-menu">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                        </ul>
                    </li>
                    <li><a href="#">Top Destinations</a></li>
                    <li><a href="#">Explore</a></li>
                </ul>
                <ul class="right">
                    <li class=""><a href="#">Username</a></li>
                    <li class=""><a href="/login">Login</a></li>
                    <li class=""><a href="/register">Register</a></li>
                </ul>
        </nav>

        <div class="dropdown">
            <div class="dropdown-title">PROJECTS</div>
            <div class="dropdown-sub">
                <div class="dropdown-option">   <NuxtLink  to="/projects" v-if="active">ALL PROJECT</NuxtLink>  </div>
                <div class="dropdown-option">   <NuxtLink  to="/main-projects" v-if="active">MAIN PROJECT</NuxtLink>   </div>
            </div>
        </div>


        -->    

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
    .nav-bar{
        src:url('~/public/font/Myriad\ Pro\ Light.otf');
        font-family: "Myriad Pro";
        font: "Myriad Pro" 50px light;
        color: #282E36;
        font-size: 24px;
        margin-top: 32px;
        text-align: center;
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