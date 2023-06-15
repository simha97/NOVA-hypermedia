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

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: flex-start;
  }

  h1 {
    font-family: "Helvetica Light";
    font-size: 48px;
    letter-spacing: 1px;
  }

  h2 {
    position: relative;
    font-family: "Myriad-Pro-Light";
    padding-top: 16px;
    font-size: 36px;
    width: fit-content;
    border-top: 4px solid #F26225;
  }

  h3 {
    position: relative;
    font-family: "Myriad-Pro-Regular";
    padding-top: 16px;
    font-size: 24px;
    width: 1120px;
  }
  
  a{
    color:#282E36;
    font-family: "Myriad-Pro-Regular";
    font-size: 24px;
    width: max-content;
  }

  p, ul li {
    font-family: "Myriad-Pro-Regular";
    font-size: 18px;
  }

  a:hover{
    color:#282E36;
    text-decoration: none;
  }

  .card-container{
    display: flex ;
    flex-wrap: wrap;
    flex-direction: row;
    column-gap: 32px;
    row-gap: 80px;
    margin-top: 96px;
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
    margin-top: -260px;
  }

  .slogan{
    position: relative;
    padding-top: 16px;
    font-size: 24px;
    font-style: italic;
    font-family: "Helvetica-Light";
    width: 576px;
  }

  .area-container {
      background-color: #f5f5f5;
      color: #282E36;
      border-radius: 8px;
      padding: 4px 8px 4px 8px;
      width: fit-content;
      text-align: center;
  }

  .icon-text {
    display: flex;
    height: 16px;
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

    .goBack-container{
      margin-top: 240px;
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