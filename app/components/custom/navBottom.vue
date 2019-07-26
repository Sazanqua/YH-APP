<template>
    <GridLayout class="navBottom" height="50" width="100%" row="3" rows="auto"
        columns="auto,auto,auto,auto">

        <GridLayout :class="selectedTab==0?'active':''" @tap="left" rows="*,auto"
            cols="auto" class="nav" col="0" row="0" width="25%">
            <Image :class="selectedTab==0?'active':''" row="0" class="navIcon"
                :src="selectedTab==0?'~/assets/images/left.png':'~/assets/images/left.png'" @tap="apiFunc" height="15" width="15" />
        </GridLayout>
        <GridLayout :class="selectedTab==1?'active':''" @tap="right" rows="*,auto"
            cols="auto" class="nav" col="1" row="0" width="25%">
            <Image :class="selectedTab==1?'active':''" row="0" class="navIcon"
                :src="selectedTab==1?'~/assets/images/right.png':'~/assets/images/right.png'" @tap="apiFunc" height="15" width="15"/>
        </GridLayout>
        <GridLayout :class="selectedTab==2?'active':''" rows="*,auto"
            cols="auto" class="nav" col="2" row="0" width="25%">
            <Image :class="selectedTab==2?'active':''" row="0" class="navIcon"
                :src="selectedTab==2?'~/assets/images/home.png':'~/assets/images/home.png'" @tap="logoutButton" height="15" width="15"/>
        </GridLayout>

        <GridLayout :class="selectedTab==3?'active':''" rows="*,auto"
            cols="auto" class="nav" col="3" row="0" width="25%">
            <Image :class="selectedTab==3?'active':''" row="0" class="navIcon"
                :src="selectedTab==3?'~/assets/images/logout.png':'~/assets/images/logout.png'" @tap="homeButton" height="15" width="15"/>
        </GridLayout>


    </GridLayout>
</template>
<script>
 import App from "../App";
 import Home from "../Home";

 const Toast = require('nativescript-toast');
    export default {
        data() {
            return {
                selectedTab: 0
            };
        },
        methods: {
            homeButton() {
                this.$navigateTo(App);
            },
            logoutButton() {
                this.$navigateTo(Home);
            },
            left() {
                this.selectedTab = 0;
            },
            right() {
                this.selectedTab = 1;
            },
            home() {
                this.selectedTab = 2;
            },
            logout() {
                this.selectedTab = 3;
            },
            apiFunc(){
                const myToast = Toast.makeText('Functionality not yet available!');
                myToast.show();
            }
        }
    };
</script>

<style>
    .navBottom {
        background-color: #000000;
        border-color: red;
    }

    .nav {
        height: 100%;
        width: 100%;
    }

    .nav.active {
        background-color: #0Dc43776;
    }

    .navIcon {
        horizontal-align: center;
        vertical-align: center;
        height: 25
    }

    .navIcon.active {
        vertical-align: center;
    }

    .navText {
        margin-bottom: 2;
        font-size: 12;
        /* color: #c43776; */
        color: #d62526;
        horizontal-align: center;
    }
</style>