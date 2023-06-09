<!--
    Default layout used by all the page
-->
<template>
     <TheHeader />
     <div class = 'page'>
       
        <div class="content-container"><slot /></div>
        
        <TheFooter />
    </div>
</template>

<style>

    .page {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        background-color: #F5F5F5;
        margin: 0;
    }
    .content-container {
        margin-left: 160px;
        margin-right: 160px;
        margin-bottom: 38px;

    }

    
    .slogan {
        src:url('/font/helvetica-light.ttf') format("truetype");
        font-family: Helvetica;
        font: Helvetica 48px light;
    }
    .title {
        src:url('/font/Helvetica-Bold.ttf') format("truetype");
        font-family: Helvetica;
        font: Helvetica 36px bold;
    }
    h1 {
        src:url('/font/Myriad\ Pro\ Light.otf') format("opentype");
        font-family: "Myriad Pro";
        font: "Myriad Pro" 48px light;
    }
    h2 {
        src:url('/font/Myriad\ Pro\ Regular.ttf') format("truetype");
        font-family: "Myriad Pro";
        font: "Myriad Pro" 32px italic;
    }
    h3 {
        src:url('/font/myriadpro-semibold.otf') format("opentype");
        font-family: "Myriad Pro";
        font: "Myriad Pro" 32px;
    }


    @media screen and (max-width: 700px){

        .content-container {
        margin-left: 30px;
        margin-right: 30px;
        margin-bottom: 38px;
        }   
    
    }

    
</style>