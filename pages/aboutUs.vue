<template>
    <div class="intro">
        <img class="shadow" src="~\assets\img\pageShadow.png">
        <img id="aboutUs" src="~\assets\img\AboutUs.png">
        <div class="intro-description">
            <div>
                <h1>Empowering Entrepreneurs Powering Progress</h1>
                <h3>NOVA, a venture capital company<br>help you <b>START</b> and <b>GROW</b> your business</h3>
            </div>
        </div>
    </div>
    <Breadcrumb :links="[{bread:'Home', goTo: '/'}, {bread:'About Us', goTo: '/aboutUs'}]"/>
    <h2>About Us</h2>
    <h3>Our journey began with a shared passion for fostering entrepreneurship and driving positive change. We recognized the immense value of transformative ideas and the need for strategic capital to bring them to life. With this vision in mind, we set out to build a platform that not only provides financial support but also serves as a strategic partner and mentor to our portfolio companies.</h3>
    <div class="scroll-container" @wheel="ScrollPictures($event)" >
        <img src="~\assets\img\AboutUsScroll.png">
        <img src="~\assets\img\AboutUsScroll.png">
        <img src="~\assets\img\AboutUsScroll.png">
        <img src="~\assets\img\AboutUsScroll.png">
    </div>
    <h2>Co-Founders</h2>
    <div v-for="founder in founders">
        <div class="founder-container" v-bind:style=" founders.indexOf(founder) % 2 === 1 ? {'flex-direction': 'row-reverse'} : {'flex-direction': 'row'}">
            <PersonCard :key="founder.id" :name="founder.name" :surname="founder.surname" :area="founder.area" :isFounder="founder.isFounder" :link="'/ourTeam/' + founder.id"/>
            <div class="slogan">
                “As an expert in both Education and Art I am dedicated to fostering creativity and knowledge through innovative approaches.”
            </div>
        </div>
    </div>
</template>

<style>

    #aboutUs {
        margin-top: 0;
    }

    .intro .shadow{
        width: 1440px;
        height: 648px;
    }

    .founder-container{
        width: 1120px;
        display: flex;
        margin: 64px 0;
        gap: 256px;
    }

    .founder-container .person-card{
        width: 384px;
        height: 600px;
    }

    .founder-container .person-card #profile{
        width: 384px;
        height: 408px;
    }

    .founder-container .person-card .person-name-surname{
        font-size: 36px;
        width: max-content;
    }

    .founder-container .person-card .person-founderTag{
        font-size: 24px; 
        right: 24px;
    }

    .founder-container .person-card .person-expertiseInfo{
        font-size: 24px;
    }

    .founder-container .person-card .data-container{
        padding: 32px;
        width: 320px;
        height: 128px;
    }

    .founder-container .person-card .area-container{
        font-size: 24px;
    }

    .founder-container .slogan{
        margin-top: 224px;
    }

</style>

<script setup>

    const { data: founders } = await useFetch('/api/ourTeam/founders')
    
</script>

<script>

    export default {
        methods: {
            ScrollPictures(event) {
                event.currentTarget.scrollLeft += event.deltaX
                console.log([event.deltX, event.target.scrollLeft])
            }
        }
    }
    
</script>