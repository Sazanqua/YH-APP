<template>
    <Page class="backgroundColor">
		<ActionBar>
        <StackLayout orientation="horizontal" height="80">
          <Label text="CHECK-IN COMPLETED" fontSize="24" color="black" verticalAlignment="center"/>
        </StackLayout>
      </ActionBar>
<ScrollView ref="scrollView" @scroll="onScroll">
      <AbsoluteLayout>
        <Image top="30" left="25" src="~/images/checkInComplete.png"/>
        <Button top="515" class="continue_button" text="CONTINUE" @tap="continue_Button"/>
<navBottom top="560" row="4" />
      </AbsoluteLayout>
      </ScrollView>
    </Page>
</template>

<script >
import navBottom from "./custom/navBottom";
import Home from "./Home";

  export default {
	  components: {
		navBottom
	},
    data() {
      return {
    }
  },
  methods: {
    continue_Button() {
        this.$navigateTo(Home);
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

</style>
