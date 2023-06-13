<template>
     <TheHeader/>
     <div class = 'page'>
        <div class="content-container">
            <slot />
        </div>
        
        <TheFooter/>
    </div>
</template>

<style>

    .page {
        background-color: #F5F5F5;
    }
    .content-container {    
        margin: 0 160px;
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
    h2, div {
        src:url('/font/Myriad\ Pro\ Regular.ttf') format("truetype");
        font-family: "Myriad Pro";
        font: "Myriad Pro" 32px italic;
    }
    h3 {
        src:url('/font/myriadpro-semibold.otf') format("opentype");
        font-family: "Myriad Pro";
        font: "Myriad Pro" 32px;
    }


    @media (max-width: 768px) {
    /* Styles for tablets and smaller devices */

    .content-container {
      margin: 0 10px;
    }

    .slogan {
      font-size: 36px;
    }

    .title {
      font-size: 24px;
    }

    h1 {
      font-size: 36px;
    }

    h2 {
      font-size: 24px;
    }

    h3 {
      font-size: 24px;
    }
  }

  @media (max-width: 480px) {
    /* Styles for mobile devices */

    .content-container {
      margin: 0 5px;
    }

    .slogan {
      font-size: 24px;
    }

    .title {
      font-size: 18px;
    }

    h1 {
      font-size: 24px;
    }

    h2 {
      font-size: 18px;
    }

    h3 {
      font-size: 18px;
    }
  }
    
</style>