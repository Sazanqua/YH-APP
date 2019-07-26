<template>
    <Page class="addFlightBackground">

		<ActionBar>
        <StackLayout orientation="horizontal" height="80">
          <Label text="ADD FLIGHT" fontSize="24" color="black" verticalAlignment="center"/>
        </StackLayout>
      </ActionBar>

      <AbsoluteLayout>
        <Image top="20" left="27" src="~/images/addFlightCard.png"/>
        <Label class="cardTextColor" top="30" left="95" text="Enter flight details" />
        <TextField left="42" top="70" borderTopWidth="2" borderBottomWidth="2" borderLeftWidth="2" borderRightWidth="2" class="textfld" hint="Ticket No."/>
      <Label class="orLabel" top="130" left="165" text="OR" />
        <Image left="40" top="160" src="~/images/qrcodebox.png" height="250" width="280"/>
        <Button left="26" top="430" class="addFlight_button" @tap="showModal" text="ADD FLIGHT" />
      <navBottom top="490" row="4"/>
      </AbsoluteLayout>

    </Page>
</template>

<script>
import navBottom from "./custom/navBottom";
import AddFlightModal from "./AddFlightModal"
  export default {
	  components: {
		navBottom
	},
    data() {
      return {
    }
  },
  methods: {
    onButtonTap() {
      this.$navigateTo(Home);
    },
    showModal() {
            this.$showModal(AddFlightModal);
    }
  }
};
</script>

<style scoped>

ActionBar {
    background-color: #FFC10D;
    color: #ffffff;  
}

.addFlightBackground {
    background-image: url('~/images/mapBackground.png');
}

.cardTextColor {
	color: #2699FB;
    font-size: 20;
    font-weight: bold;
}

.orLabel {
	color: #2699FB;
    font-size: 17;
    font-style: italic;
}

.textfld{
    width: 275;
    border-top: #ffc10d;
    border-color: #BCE0FD;
    font-size: 12;
    color: black;
    text-align: center;
}

.addFlight_button{
    background-color: #2699FB;
    border-radius: 3;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 11;
    height: 48;
    width: 308;
    font-weight: bold;
}

</style>
