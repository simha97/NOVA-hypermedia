<template>
    <div class="intro">
        <img src="~\assets\img\AboutUs.png">
        <div class="intro-description">
            <h1>Empowering Entrepreneurs<br>Powering Progress</h1>
            <h3>NOVA, a venture capital company<br>help you START and GROW your business</h3>
        </div>
    </div>
    <div>
      <Breadcrumb :links="[{bread:'Home', goTo: '/'}, {bread:'About Us', goTo: '/aboutUs'}]"/>
    </div>  
    <div>
        <h2>About Us</h2>
        <h3>Our journey began with a shared passion for fostering entrepreneurship and driving positive change. We recognized the immense value of transformative ideas and the need for strategic capital to bring them to life. With this vision in mind, we set out to build a platform that not only provides financial support but also serves as a strategic partner and mentor to our portfolio companies.</h3>
    </div>
    <div>
        <div>
            <h2 id="project-title">Co-Founders</h2>
        </div>
        <div class="card-container" v-for="founder in founders">
            <div class="slogan">
                “As an expert in both Education and Art I am dedicated to fostering creativity and knowledge through innovative approaches.”
            </div>
            <PersonCard :key="founder.id" :name="founder.name" :surname="founder.surname" :area="founder.area" :link="'/ourTeam/' + founder.id"/>
        </div>
    </div>
    
</template>

<style>

    .intro img{
        margin-top: 0;
        filter: brightness(70%); 
        opacity: 90%;
    }

    #project-title{
        border-top: solid 4px #F26225;
        width: fit-content;
        margin-top: 240px;
    }

    .card-container{
        width: 1120px;
    }

    .slogan{
        margin-right: 256px;
        margin-top: 224px;
    }

</style>

<script setup>

    const { data: founders } = await useFetch('/api/ourTeam/founders')
    
</script>