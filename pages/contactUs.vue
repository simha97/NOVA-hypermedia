<template>
    <Breadcrumb :links="[{bread:'Home', goTo: '/'}, {bread:'Contact Us', goTo: '/contactUs'}]"/>
    <h2>Contact Us</h2>
    <div class="contact-us">
        <div class="form">
            <div class="error" v-if="errors.length">
                <b>Please correct the following error(s):</b>
                <ul>
                    <li v-for="error in errors">{{ error }}</li>
                </ul>
              </div>
            <input type = "text" id = "name" placeholder = "Name" v-model="name">
            <input type = "text" id = "name" placeholder = "Surname" v-model="surname">
            <input type = "email" id = "mail" placeholder = "Email" v-model="email">
            <textarea id = "message" placeholder = "Please let us know your requirements, and we will get back to you soon!"></textarea>  
            <div id="check-text"><input type="checkbox" id="check" >
            <label for="check">I am confirming that I am acknowledging and accepting the privacy statement</label></div>
            <div id="submit" @click="checkForm()">Submit</div>
            <div id="hidden-message" v-if="active">
                <img id="hidden-bullet" src="~\assets\icons\orange-bullet.png">
                Your message has been received
            </div>
        </div>
        <div>
            <h3>Contact us if you want to...</h3>
            <Info id="contact-list" :infos="
                        [{title:'Send Your Project', content: '', type: 'text'},
                        {title:'Make an appointment', content: '', type: 'text'},
                        {title:'Request more information', content: '', type: 'text'},
                        {title:'Just contact us!', content: '', type: 'text'}
                        ]"/>
        </div>
    </div>
</template>

<style>

    .contact-us{
        display: flex;
    }

    .form {
        margin-top: 32px;
        width: 672px;
        display: flex;
        gap: 16px;
        flex-wrap: wrap;
        margin-right: 96px;
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
        resize: none;
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
        width: fit-content;
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

    .contact-us h3{
        width: 336px;
    }

    #contact-list .person-info-data{
        margin-bottom: 0;
    }

    #contact-list .person-info-title{
        margin-top: 4px;
    }

    #contact-list #bullet{
        width: 24px;
        height: 24px;
    }

    .error{
      color: #F26225;
      width: max-content;
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
        active: false,
        errors:[],
        name: null,
        surname: null,
        email: null,
        field: null
      }
    },
    methods: {
      checkForm: function (e) {
      this.errors = [];
      if (!this.name) {
        this.errors.push('Name required.');
      }
      if (!this.surname) {
        this.errors.push('Surname required.');
      }
      if (!this.email) {
        this.errors.push('Email required.');
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Valid email required.');
      }
      if (!document.getElementById("message").value) {
        this.errors.push('Empty message.');
      }
      if (!document.getElementById("check").checked) {
        this.errors.push('Accept privacy policy.');
      }
      if (!this.errors.length) {
        this.active=true
      }else{
        this.active=false
      }
    },
      validEmail: function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
    }
  }
</script>