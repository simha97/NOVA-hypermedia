<!--
    Footer of the page
-->

<template>
    <footer>
        <div class="footer-container">
        <img src="logo.svg" alt="logo nova"/>
        <div class="footer-text">
            <p>NOVA, a venture capital company help you START and GROW your business</p>
              <ul class="address-links">
                <li class="list1">+39 3542904786</li>
                <li class="list2"> office@nova.com</li>
                <li class="list3"> www.novaventurecapital.com</li>
                <li class="list4"> via xxxxxxxx, Milano, 20100</li>              
              </ul>
              <div class="social-media"><img src= '~/assets/icons/twitter.png' alt="twitter"/>
            <img src= '~/assets/icons/facebook.png' alt="facebook"/>
            <img src= '~/assets/icons/linkedin.png' alt="linkedin"/></div>
            <div>
                <p class="copy-right">© 2023 Nova. All right reserved.</p>
            </div>
        </div>
        </div>
        
    </footer>
</template>

<style>
    footer
    {
        background-color: #282E36;
        flex-shrink: 0;
        text-align: left;
        margin-top: auto;
        padding: 10px;
        height: 480px;
        min-height: 1vh;
    }
    .footer-container
    {
        color:#F5F5F5;
        margin-left: 160px;
        margin-right: 160px;
        margin-bottom: 38px;
        margin-top: 63px;
        white-space: nowrap;

    }
    .list1 {
    list-style: url('~/assets/icons/phone.png');
    
  }
  .list2 {
    list-style: url('~/assets/icons/mail-alt.png');
  }
  .list3 {
    list-style: url('~/assets/icons/globe-alt.png');
    bottom: -80%;

  }
  .list3 img {
  position: absolute;
  }
  .list4 {
    list-style: url('~/assets/icons/location-pin.png');
  }
  .social-media{
    padding: 20px;
    justify-content: space-between;
    display: flex;
    margin-right: 750px;

  }


</style>