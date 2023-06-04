<!--
    Default layout used by all the page
-->
<template>
    <div class = 'page'>
        <TheHeader />
        <div class="content-container"><slot /></div>
        
        <TheFooter />
    </div>
</template>

<style>

   /* .slogan {
        src:url(~/assets/font/helvetica-light.ttf);
        font: Helvetica 48px light;
    }
    .title {
        src:url(~/assets/font/Helvetica-Bold.ttf);
        font: Helvetica 36px bold;
    }
    h1 {
        src:url(~/assets/font/Myriad\ Pro\ Light.otf);
        font-family: "Myriad Pro";
        font: 48px light;
    }
    h2 {
        src:url(~/assets/font/Myriad\ Pro\ Regular.ttf);
        font-family: "Myriad Pro";
        font: 32px italic;    
    }
    h3 {
        src:url(~/assets/font/myriadpro-semibold.otf);
        font-family: "Myriad Pro";
        font: 32px;
    }
*/
    .page {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        background-color: rgb(241, 235, 247);
        margin: 0;
    }
    .content-container {
        margin-left: 160px;
        margin-right: 160px;
        margin-bottom: 38px;
    }

    @media screen and (max-width: 700px){
        .content-container {
        margin-left: 30px;
        margin-right: 30px;
        margin-bottom: 38px;
    }   
    }
</style>