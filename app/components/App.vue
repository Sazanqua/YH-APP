<template>
  <Page class="coverImage" actionBarHidden="true">
    <AbsoluteLayout flexDirection="column">
      <Image top="23" src="~/images/yh_logo.png" height="204" width="360" />
      <TextField
        v-model="input.emailAddress"
        left="43"
        top="240"
        class="textfld"
        hint="Email Address"
      />
      <TextField
        secure="true"
        v-model="input.password"
        formControlName="password"
        left="43"
        top="295"
        class="textfld"
        hint="Password"
      />
      <Label color="#6F31AD" left="180" top="352" text="FORGOT PASSWORD?" />
      <Button
        :isEnabled="buttonStatus"
        left="65"
        top="380"
        class="login_button"
        text="LOGIN"
        @tap="loginFunc"
      />
      <Label class="labelClass" left="125" top="435" text="Or Sign In Instantly" />
      <Button left="48" top="465" class="fb_button" text="LOGIN WITH FACEBOOK" @tap="apiFunc"/>
      <Image
        class="logoZIndex"
        left="70"
        top="478"
        src="~/images/facebookLogo.png"
        height="20"
        width="20"
      />
      <Button left="48" top="525" class="fb_button" text="LOGIN WITH GOOGLE" @tap="apiFunc" />
      <Image
        class="logoZIndex"
        left="70"
        top="534"
        src="~/images/googleLogo.png"
        height="30"
        width="30"
      />
      <Label
        color="#6F31AD"
        left="68"
        top="585"
        text="Need An Account? Sign Up For Free!"
        @tap="registerModalFunc"
      />
      <ListView for="person in $store.state.data" class="list-group" row="1" col="0">
        <v-template>
          <StackLayout class="list-group-item">
            <Label class="dataLoaded" v-bind:text="person.emailAddress + ' ' + person.password" />
          </StackLayout>
        </v-template>
      </ListView>
    </AbsoluteLayout>
  </Page>
</template>

<script >
import Home from "./Home";
import RegisterModal from "./RegisterModal";
import AdminHome from "./Admin/AdminHome";

const Toast = require("nativescript-toast");

export default {
  components: {
    RegisterModal
  },
  data() {
    return {
      secondz: 0,
      buttonStatus: true,
      input: {
        emailAddress: "Yoshi",
        password: "tada"
      }
    };
  },
  methods: {
    loginFunc() {
      this.$store.dispatch("loginQuery", this.input);
      this.buttonStatus = false;
      const myToast = Toast.makeText("LOGGING IN!");
      myToast.show();
      setTimeout(() => {
        if (this.$store.state.accessLevelResult == "user") {
          this.buttonStatus = true;
          this.$store.state.accessLevelResult = ''
          this.$navigateTo(Home);
        } else if (this.$store.state.accessLevelResult == "admin") {
          this.buttonStatus = true;
          this.$store.state.accessLevelResult = ''
          this.$navigateTo(AdminHome);
        } else {
          this.buttonStatus = true;
          const myToast = Toast.makeText("INVALID EMAIL OR PASSWORD!");
          myToast.show();
        }
      }, 1);
    },
    registerModalFunc() {
      this.$showModal(RegisterModal);
    },
    apiFunc() {
      const myToast = Toast.makeText("Functionality not yet available!");
      myToast.show();
    }
  },
  beforeMount() {
    this.$store.dispatch("query");
  }
};
</script>

<style scoped>
.coverImage {
  background-image: url("~/images/background.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100%;
  width: 100%;
}
.logoZIndex {
  z-index: 10;
}
.labelClass {
  background-color: white;
  color: #1a252c;
}

.textfld {
  width: 275;
  color: black;
  text-align: center;
  border-width: 1;
  background-color: white;
  font-size: 12;
}
.login_button {
  background-color: #ffc10d;
  border-radius: 48;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16;
  height: 41;
  width: 235;
}
.fb_button {
  width: 265;
  border-radius: 48px;
  border: 2px solid #2699fb;
  font-family: Arial, Helvetica, sans-serif;
  color: #2699fb;
  border-top-color: #2699fb;
  background-color: white;
  font-size: 11;
}
</style>
