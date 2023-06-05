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