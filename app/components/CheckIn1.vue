<template>
    <Page class="backgroundColor">

		<ActionBar>
        <StackLayout orientation="horizontal" height="80">
          <Label text="CHECK-IN" fontSize="24" color="black" verticalAlignment="center"/>
        </StackLayout>
      </ActionBar>

      <AbsoluteLayout>
        <TextField top="30" left="20" borderTopWidth="2" borderBottomWidth="2" borderLeftWidth="2" borderRightWidth="2" class="textfld" hint="Search" />
        <Image top="100" left="20" src="~/images/noFlightCard.png" height="346" width="320"/>
        <Button top="350" left="45" class="addFlight_button" text="ADD FLIGHT" @tap="addFlightButton"/>
<navBottom top="490" row="4" />
      </AbsoluteLayout>
	  
    </Page>
</template>

<script >
import navBottom from "./custom/navBottom";
import AddFlight from "./AddFlight";
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

.addFlight_button{
    background-color: #2699FB;
    border-radius: 3;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 11;
    height: 48;
    width: 268;
    font-weight: bold;
}

</style>
