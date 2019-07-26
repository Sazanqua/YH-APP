<template>
    <Page class="backgroundColor">

		<ActionBar>
        <StackLayout orientation="horizontal" height="80">
          <Label text="CHECK-IN" fontSize="24" color="black" verticalAlignment="center"/>
        </StackLayout>
      </ActionBar>
<!-- <ScrollView ref="scrollView" @scroll="onScroll"> -->
  <Label text="bottom" position="fixed" dock="bottom" height="40" backgroundColor="#289062"/>

      <AbsoluteLayout>
        <TextField top="30" left="20" borderTopWidth="2" borderBottomWidth="2" borderLeftWidth="2" borderRightWidth="2" class="textfld" hint="Search" />
        <Image top="93" left="30" src="~/images/flight.png" height="300" width="300" @tap="checkInPassButton"/>
        <!-- <Image top="343" left="30" src="~/images/flight.png" height="300" width="300"/> -->
        <navBottom top="490" row="4"/>
      </AbsoluteLayout>
<!-- </ScrollView> -->
	  
    </Page>
</template>

<script >
import navBottom from "./custom/navBottom";
import AddFlight from "./AddFlight";
import CheckInPass from "./CheckInPass";
  export default {
	  components: {
		navBottom
	},
    data() {
      return {
    }
  },
  methods: {
    checkInPassButton() {
      this.$navigateTo(CheckInPass);
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
.textfld{
    width: 320;
    border-color: #BCE0FD;
    color: black;
    text-align: center;
    background-color: white;
    font-size: 12;
}

</style>
