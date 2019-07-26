<template>
    <Page class="backgroundColor">

		<ActionBar>
        <StackLayout orientation="horizontal" height="80">
          <Label text="HOME" fontSize="24" color="black" verticalAlignment="center"/>
        </StackLayout>
      </ActionBar>

      <AbsoluteLayout>
        <Image top="23" left="30" src="~/images/1.png" height="150" width="300" @tap="addFlightButton"/>
		<Image top="115" left="30" src="~/images/1text.png" height="150" width="300" @tap="addFlightButton"/>
		<Label top="165" left="42" text="Add Flight" @tap="addFlightButton"/>
		<Label class="cardTextColor" top="185" left="42" text="Enter ticket details" @tap="addFlightButton"/>
		<Image top="250" left="30" src="~/images/2.png" height="150" width="300" @tap="checkInButton"/>
		<Image top="342" left="30" src="~/images/1text.png" height="150" width="300" @tap="checkInButton"/>
		<Label top="392" left="42" text="Flight check in" @tap="checkInButton"/>
		<Label class="cardTextColor" top="412" left="42" text="Flight Check-in" @tap="checkInButton"/>
<navBottom top="490" row="4" />
      </AbsoluteLayout>
	  
    </Page>
</template>

<script >
import navBottom from "./custom/navBottom";
import AddFlight from "./AddFlight";
import CheckIn1 from "./CheckIn1";
import CheckIn2 from "./CheckIn2";
let var1 = 0;
  export default {
	  components: {
		navBottom
	},
    data() {
      return {
    }
  },
  methods: {
    addFlightButton() {
      this.$navigateTo(AddFlight);
	},
	checkInButton() {
		if(var1 == 1){
			this.$navigateTo(CheckIn1);
		}
		else {
			this.$navigateTo(CheckIn2);
		}
      
    }
  }
};
</script>

<style scoped>
ActionBar {
    background-color: #FFC10D;
    color: #ffffff;  
}
.backgroundColor {
	background-color: #EAEAEA;
    height: 100%;
    width: 100%;
}
.cardTextColor {
	color: #2699FB;
}


</style>
