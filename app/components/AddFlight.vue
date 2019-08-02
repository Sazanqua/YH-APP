<template>
  <Page class="addFlightBackground">
    <ActionBar>
      <StackLayout orientation="horizontal" height="80">
        <Label text="ADD FLIGHT" fontSize="24" color="black" verticalAlignment="center" />
      </StackLayout>
    </ActionBar>

    <BarcodeScanner
      row="1"
      height="300"
      formats="QR_CODE, EAN_13, UPC_A"
      beepOnScan="true"
      reportDuplicates="true"
      preferFrontCamera="false"
      @scanResult="onScanResult"
      v-if="isIOS"
    ></BarcodeScanner>

    <AbsoluteLayout>
      <Image top="20" left="27" src="~/images/addFlightCard.png" />
      <Label class="cardTextColor" top="30" left="95" text="Enter flight details" />
      <TextField
        left="42"
        top="70"
        borderTopWidth="2"
        borderBottomWidth="2"
        borderLeftWidth="2"
        borderRightWidth="2"
        class="textfld"
        hint="Ticket No."
      />
      <Label class="orLabel" top="130" left="165" text="OR" />
      <Image
        left="40"
        top="160"
        src="~/images/qrcodebox.png"
        height="250"
        width="280"
        @tap="doScanWithBackCamera"
      />
      <Button left="26" top="430" class="addFlight_button" @tap="showModal" text="ADD FLIGHT" />
      <navBottom top="490" row="4" />
    </AbsoluteLayout>
  </Page>
</template>

<script>
import navBottom from "./custom/navBottom";
import AddFlightModal from "./AddFlightModal";
import { BarcodeScanner } from "nativescript-barcodescanner";

import { isIOS } from "tns-core-modules/platform";

const Toast = require("nativescript-toast");

global.asd = "global var"

export default {
  components: {
    navBottom
  },
  data() {
    return {
      isIOS
    };
  },
  methods: {
    showModal() {
      this.$showModal(AddFlightModal);
    },
    onScanResult(evt) {
      console.log(`onScanResult: ${evt.text} (${evt.format})`);
    },
    doScanWithBackCamera() {
      this.scan(false);
      
      // setTimeout(() => {
      //       this.$store.dispatch("aa", asd);
      //     }, 5000)
    },
    scan(front) {
      new BarcodeScanner()
        .scan({
          cancelLabel: "EXIT. Also, try the volume buttons!", // iOS only, default 'Close'
          cancelLabelBackgroundColor: "#333333", // iOS only, default '#000000' (black)
          message: "Use the volume buttons for extra light", // Android only, default is 'Place a barcode inside the viewfinder rectangle to scan it.'
          preferFrontCamera: front, // Android only, default false
          showFlipCameraButton: true, // default false
          showTorchButton: true, // iOS only, default false
          torchOn: false, // launch with the flashlight on (default false)
          resultDisplayDuration: 500, // Android only, default 1500 (ms), set to 0 to disable echoing the scanned text
          beepOnScan: true, // Play or Suppress beep on scan (default true)
          openSettingsIfPermissionWasPreviouslyDenied: true, // On iOS you can send the user to the settings app if access was previously denied
          closeCallback: () => {
            console.log("Scanner closed @ " + new Date().getTime());
          }
        })
        .then(
          function(result) {
            console.log("--- scanned: " + result.text);
            
            setTimeout(function() {
              alert({
                title: "Scan result",
                message:
                  "Format: " + result.format + ",\nValue: " + result.text,
                okButtonText: "OK"
              });
            }, 500);

            setTimeout(function() {
              asd = result.text
              console.log(asd)
              this.$store.dispatch("aa", asd);
            }, 500);
          },
          function(errorMessage) {
            console.log("No scan. " + errorMessage);
          },
          
          // setTimeout(() => {
            
          // }, 5000)
        );
    }
  }
};
</script>

<style scoped>
ActionBar {
  background-color: #ffc10d;
  color: #ffffff;
}

.addFlightBackground {
  background-image: url("~/images/mapBackground.png");
}

.cardTextColor {
  color: #2699fb;
  font-size: 20;
  font-weight: bold;
}

.orLabel {
  color: #2699fb;
  font-size: 17;
  font-style: italic;
}

.textfld {
  width: 275;
  border-top: #ffc10d;
  border-color: #bce0fd;
  font-size: 12;
  color: black;
  text-align: center;
}

.addFlight_button {
  background-color: #2699fb;
  border-radius: 3;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 11;
  height: 48;
  width: 308;
  font-weight: bold;
}
</style>
