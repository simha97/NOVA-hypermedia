<template>
    <Breadcrumb :links="[{bread:'Home', goTo: '/'}, {bread:'Contact Us', goTo: '/contactUs'}]"/>
    <h2>Contact Us</h2>
    <div class="form">
        <input type = "text" id = "name" placeholder = "Name">
        <input type = "text" id = "name" placeholder = "Surname">
        <input type = "email" id = "mail" placeholder = "Email">
        <textarea id = "message" placeholder = "Please let us know your requirements, and we will get back to you soon!"></textarea>  
        <input type="checkbox" id="check" >
        <label for="check" id="check-text">I am confirming that I am acknowledging and accepting the privacy statement</label>
        <div id="submit" @click="toggle()">Submit</div>
        <div id="hidden-message" v-if="active">
            <img id="hidden-bullet" src="~\assets\icons\orange-bullet.png">
            Your message has been received
        </div>
    </div>
</template>

<style>

    .form {
        width: 672px;
        display: flex;
        gap: 16px;
        flex-wrap: wrap;
    }

    #name{
        width: 294px;
        height: 24px;
        padding: 16px;
        border: 0;
        border-radius: 8px;
    }

    #mail{
        width: 640px;
        height: 24px;
        padding: 16px;
        border: 0;
        border-radius: 8px;
    }

    #message{
        width: 640px;
        height: 284px;
        padding: 16px;
        border: 0;
        border-radius: 8px;
    }

    #check{
        width: 24px;
        height: 24px;
        margin-top: 16px;
    }

    #check-text{
        margin-top: 16px;
        align-self: center;
        font-size: 18px;
    }

    #submit{
        margin-top: 64px;
        padding: 16px 24px;
        font-family: 'Myriad-Pro-Regular';
        font-size: 24px;
        color: #F26225;
        border: solid 1px #F26225;
        border-radius: 8px;
        margin-right: 48px;
    }

    #submit:hover{
        text-decoration: underline;
        cursor: pointer;
    }

    #hidden-message{
        margin-top: 84px;
        color: #F26225;
        font-family: 'Myriad-Pro-Regular';
        font-size: 18px;
    }

    #hidden-bullet{
        width: 24px;
        height: 24px;
        margin-right: 16px;
        vertical-align: bottom;
    }

    ::placeholder{
        color: #282E36;
        font-family: 'Myriad-Pro-Regular';
        font-size: 18px;
    }

    @media screen and (max-width: 650px) {
        form div {
            flex-direction: column;
        }

        input {
            width: 100%;
        }
        
        form {
            width: 90%;
            min-width: 400px;
        }
    }
    
</style>

<script>
  export default {
    data () {
      return {
        active: false
      }
    },
    methods: {
      toggle () {
        this.active = true;
      }
    }
  }
</script>