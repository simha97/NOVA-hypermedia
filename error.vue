<!--
    This is an error page.
    Whenever a route that doesn't exist is called, this page will be shown.
-->

<template>
    <NuxtLayout>
        <img src="/PagePictures/Error.png" id="error">
        <div class="content-container">
            <div class="error-text">
                <div id="text-404">
                    404
                </div>
                <div id="text-miss">
                    something is missing...
                </div>
                <NuxtLink to="/"><Backbutton text="Back to Home"/></NuxtLink>
            </div>
        </div>
    </NuxtLayout>
</template>

<style scope>

    #error{
        width: 100%;
        height: 246px;
        margin-top: 16px;
    }

    .error-text{
        width: 90%;
        text-align: center;
    }

    #text-404{
        font-size: 100px;
        color: #F26225;
        font-family: 'Myriad-Pro-Bold';
    }

    #text-miss{
        font-size: 40px;
        color: #282E36;
        font-family: 'Myriad-Pro-REgular';
        margin-top: -16px;
    }

</style>