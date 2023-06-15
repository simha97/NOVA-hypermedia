<!--Home page-->

<template>
    <div class="intro">
        <img class="shadow" src="~\assets\img\pageShadow.png">
        <img id="home" src="~\assets\img\Home.png">
        <div class="intro-description">
            <h1>Empowering Entrepreneurs<br>Powering Progress</h1>
            <h3>NOVA, a venture capital company<br>help you <span>START</span> and <span>GROW</span> your business</h3>
        </div>
    </div>
    <div>
      <Breadcrumb :links="[{bread:'Home', goTo: '/'}]"/>
    </div>  
    <div>
        <h2>How we work</h2>
        <h3>Our team page showcases the impressive network of backers who believe in our vision and share our passion for supporting innovative startups.</h3>
    </div>
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
            <LinkInfo :link="{question:'Want to Meet Our Experts?', title:'Find in Our Team', page:'/ourTeam'}"/>
        </div>
        <div class="smart-link">
            <LinkInfo :link="{question:'Curious about Our Areas of focus?', title:'Find in Areas', page:'/areas/Art'}"/>
        </div>
        <div class="smart-link">
            <LinkInfo :link="{question:'Interested in Our Main Projects?', title:'Find in Main Projects', page:'/projects/mainProjects'}"/>
        </div>
        <div class="smart-link">
            <LinkInfo :link="{question:'Learn more About Our Services?', title:'Find in Contact Us', page:'/contactUs'}"/>
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
        display: flex;
        gap: 32px;
        margin-top: 96px;
        border-top: solid 1px #D8D8D8;
        width:1122px;
    }

    .text-container{
        width: 352px;
        height: 248px;
        padding: 24px;
        background-color: white;
        border-radius: 8px;
    }

    .intro-description{
        margin-top: -262px;
    }

    h3 span {
        font-family: 'Myriad-Pro-Bold';
    }

    .blank-container{
        width: 352px;
        height: 248px;
    }

    .how-we-work-title{
        font-size: 24px;
        font-family: 'Helvetica Light';
        font-weight: bolder;
        color: #F26225;
    }

    .how-we-work-description{
        font-size: 16px;
        font-family: 'Myriad-Pro-Regular';
        margin-top: 8px;
        text-align: justify;
    }

    #curved-arrow{
        margin-top: 68px
    }

    .smart-link{
        margin-top: 80px;
        height: 104px;
        width: 256px;
    }

</style>