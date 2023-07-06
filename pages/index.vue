<!--Home page-->

<template>
    <div class="intro">
        <img class="shadow" src="~\assets\img\pageShadow.png">
        <img id="home" src="/PagePictures/Home.png">
        <div class="intro-description">
            <div>
                <h1>Empowering Entrepreneurs<br>Powering Progress</h1>
                <h3>NOVA, a venture capital company<br>help you <b>START</b> and <b>GROW</b> your business</h3>
            </div>
        </div>
    </div>
    <Breadcrumb breadcrumb = 'Home'/>
    <h2>How we work</h2>
    <h3>Our team page showcases the impressive network of backers who believe in our vision and share our passion for supporting innovative startups.</h3>
    <div class="how-we-work-container">
        <div class="text-container">
            <div class="how-we-work-title">01 Seed Funding</div>
            <div class="how-we-work-description">We provide crucial seed funding to early-stage ventures, helping you kickstart your operations, develop your product, and conduct market research. Our investment gives you the financial backing needed to lay a strong foundation for success.</div>
        </div>
        <div class="text-container">
            <div class="how-we-work-title">02 Series a Funding</div>
            <div class="how-we-work-description">As your startup gains traction and demonstrates promising growth potential, we offer Series A funding. This investment injects the capital required to scale your operations, expand your team, and take your product or service to the next level.</div>
        </div>
        <div class="blank-container">
            <img src="~\assets\img\curvedArrow.png" id="curved-arrow">
        </div>
        <div class="blank-container">
        </div>
        <div class="text-container">
            <div class="how-we-work-title">04 Exit Strategy Support</div>
            <div class="how-we-work-description">We understand the importance of planning for the future. When the time is right, we help you strategize and execute your exit plan, whether through mergers, acquisitions, or IPOs.Our goal is to ensure a smooth transition.</div>
        </div>
        <div class="text-container">
            <div class="how-we-work-title">03 Strategic Guidance</div>
            <div class="how-we-work-description">Our experienced team help you navigate challenges and make informed decisions. Drawing on our expertise, industry insights, and vast network, we assist you in refining your business strategies.</div>
        </div>
    </div>
    <div class="smart-links-container">
        <div class="smart-link">
            <Info :infos="
                [{title:'Want to Meet Our Experts?', content: {title: 'Find in Our Team', page:'/ourTeam'}, type: 'link'},
                 {title:'Curious About Our Areas of Focus?', content: {title: 'Find in Areas', page:'/areas'}, type: 'link'},
                 {title:'Interested in Our Main Projects?', content: {title: 'Find in Main Projects', page:'/projects/mainProjects'}, type: 'link'},
                 {title:'Learn More About Our Service?', content: {title: 'Find in Contact Us', page:'/contactUs'}, type: 'link'}
                ]"/>
        </div>
    </div>
</template>

<style>

    .how-we-work-container{
        margin-top: 96px;
        width: 1122px;
        display: flex;
        flex-wrap: wrap;
        column-gap: 32px;
        row-gap: 24px;
    }

    .smart-links-container{
        gap: 32px;
        margin-top: 96px;
        border-top: solid 1px #D8D8D8;
        width:1122px;
    }

    .text-container{
        width: 304px;
        height: 200px;
        padding: 24px;
        background-color: white;
        border-radius: 8px;
    }

    .blank-container{
        width: 352px;
        height: 248px;
    }

    .how-we-work-title{
        font-size: 24px;
        font-family: 'Myriad-Pro-SemiBold';
        color: #F26225;
    }

    .how-we-work-description{
        font-size: 18px;
        font-family: 'Myriad-Pro-Regular';
        margin-top: 8px;
    }

    #curved-arrow{
        margin-top: 68px
    }

    .smart-link{
        margin-top: 80px;
        height: 104px;
        width: 256px;
    }

    .smart-link .person-info-container{
        display: flex;
        gap: 32px;
    }

    .smart-link #bullet{
        width: 24px;
        height: 24px;
        margin-right: 0px;
    }

    .smart-link .person-info-data{
        width: 256px;
        text-align: center;
    }

    .smart-link .person-info-title{
        width: 216px;
    }

</style>