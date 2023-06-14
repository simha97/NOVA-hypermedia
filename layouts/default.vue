<template>
  <div class = 'page'>
    <TheHeader/>
        <div class="content-container">
          <slot />
        </div>
    <TheFooter/>
  </div>
</template>

<style>

  .page {
    background-color: #F5F5F5;
    color:#282E36;
  }

  .content-container {    
    margin-left: 160px;
  }

  h1 {
    src:url('/font/helvetica-light.ttf') format("truetype");
    font-family: "Helvetica Light";
    font-size: 48px;
    letter-spacing: 1px;
  }

  h2 {
    position: relative;
    src:url('/font/Myriad\ Pro\ Light.ttf') format("truetype");
    font-family: "Myriad Pro Light";
    padding-top: 16px;
    font-size: 36px;
    width: fit-content;
    border-top: 4px solid #F26225;
  }

  h3 {
    position: relative;
    src:url('/font/Myriad\ Pro\ Regular.ttf') format("truetype");
    font-family: "Myriad Pro Regular";
    padding-top: 16px;
    font-size: 24px;
    width: 1120px;
  }

  .card-container{
    display: flex ;
    flex-wrap: wrap;
    flex-direction: row;
    column-gap: 32px;
    row-gap: 80px;
    margin-top: 96px;
    margin-bottom: 320px;
  }
  
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: flex-start;
  }

  .intro{
    width:  1280px; 
    height: 552px;
  }

  .intro img{
    margin-top: -96px;
    margin-left: -160px;
  }

  .intro-description{
    color: white;
    position: absolute;
    margin-top: -248px;
  }

  .slogan{
    position: relative;
    padding-top: 16px;
    font-size: 24px;
    font-style: italic;
    src:url('/font/helvetica-light.ttf') format("truetype");
    font-family: "Helvetica Light";
    width: 576px;
  }

  .form-container {
        width: 90%;
        border-radius: 10px;
        border: 2px solid brown;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-content: flex-start;
        gap: 20px;

        background-color: burlywood;
        padding: 20px;
    }

    .shadow{
        position: absolute;
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