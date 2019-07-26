<template>
    <Page class="addFlightBackground">

		<ActionBar>
        <StackLayout orientation="horizontal" height="80">
          <Label text="CHECK IN" fontSize="24" color="black" verticalAlignment="center"/>
        </StackLayout>
      </ActionBar>
<ScrollView ref="scrollView" @scroll="onScroll">
  <Label text="bottom" position="fixed" dock="bottom" height="40" backgroundColor="#289062"/>

      <AbsoluteLayout>
        <Image top="23" left="30" src="~/images/flightPass.png" height="300" width="300"/>
        <check-box color="white" top="433" left="60" :checked="isChecked" @checkedChange="isChecked = $event.value" >Yoshitada Higashioka</check-box>
        <Image top="253" left="30" src="~/images/listOfPassengers.png" height="500" width="300"/>
        <Button left="30" top="680" class="confirmCheckIn_button" isEnabled="true" text="CONFIRM CHECK-IN" @tap="checkInButton"/>
        
        <navBottom top="740" row="4"/>
      </AbsoluteLayout>
</ScrollView>
	  
    </Page>
</template>

<script >
import navBottom from "./custom/navBottom";
import AddFlight from "./AddFlight";
import EBoardingPass from "./EBoardingPass";
  export default {
	  components: {
		navBottom
	},
    data() {
      return {
    }
  },
  methods: {
    checkInButton() {
      this.$navigateTo(EBoardingPass);
	  }
  }
};
</script>

<style scoped>
ActionBar {
    background-color: #FFC10D;
    color: #ffffff;  
}
checkbox{
  z-index: 10;
}
.addFlightBackground {
    background-image: url('~/images/mapBackground.png');
}

.cardTextColor {
	color: #2699FB;
}
.confirmCheckIn_button{
    background-color: #2699FB;
    border-radius: 3;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 11;
    height: 48;
    width: 300;
    font-weight: bold;
    /* opacity: .3; */
}

</style>
