<template>
    <Page class="backgroundColor">
		<ActionBar>
        <StackLayout orientation="horizontal" height="80">
          <Label text="SECURITY POLICY" fontSize="24" color="black" verticalAlignment="center"/>
        </StackLayout>
      </ActionBar>
<ScrollView ref="scrollView" @scroll="onScroll">
      <AbsoluteLayout>
        <Image top="30" left="25" src="~/images/securityPolicyCard.png"/>
        <Button top="465" left="55" class="restrictedItems_button" text="LIST OF RESTRICTED ITEMS" @tap="restrictedItemsButton"/>
        <Button top="565" class="continue_button" text="CONTINUE" @tap="continue_Button"/>
<navBottom top="610" row="4" />
      </AbsoluteLayout>
      </ScrollView>
    </Page>
</template>

<script >
import navBottom from "./custom/navBottom";
import AddFlight from "./AddFlight";
import SecurityPolicyModal from "./SecurityPolicyModal"
import SecurityPolicy2 from "./SecurityPolicy2"

  export default {
	  components: {
		navBottom
	},
    data() {
      return {
    }
  },
  methods: {
    restrictedItemsButton() {
        this.$showModal(SecurityPolicyModal);
    },
    continue_Button() {
        this.$navigateTo(SecurityPolicy2);
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

.continue_button{
    background-color: #2699FB;
    border-radius: 3;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 11;
    height: 48;
    width: 100%;
    font-weight: bold;
}

.restrictedItems_button{
    background-color: #1A252C;
    border-radius: 3;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 11;
    height: 48;
    width: 248;
    font-weight: bold;
}

</style>
