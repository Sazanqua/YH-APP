<template>
    <AbsoluteLayout backgroundColor="white" height="560" width="340">
        <Label left="63" top="15" class="brLabel" text="BAGGAGE RESTRICTIONS" />
        <Image top="23" left="45" src="~/images/securityPolicy2.png" width="250" height="380"/>
        <Label left="43" top="387" class="fsLabel" text="Dangerous Goods Prohibited On Flight" />
        <Label left="48" top="410" class="fsContentLabel" text="• Liquids, Aerosols and Gels in excess of 100ml" />
        <Label left="48" top="425" class="fsContentLabel" text="• Mobility aids" />
        <Label left="48" top="440" class="fsContentLabel" text="• Adhesive tapes and handcuffs" />
        <Label left="48" top="455" class="fsContentLabel" text="• Stunning devices and items that discharge " />
        <Label left="48" top="470" class="fsContentLabel" text="  projectiles" />
        <Button left="125" top="500" class="ok_button" text="OK" @tap="$modal.close()"/>
    </AbsoluteLayout>
</template>

<script>
import SecurityPolicy from "./SecurityPolicy"

export default {
    data() {
        return {};
    }
};
</script>

<style>
.ok_button{
    background-color: #1A252C;
    border-radius: 3;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12;
    height: 38;
    width: 90;
    font-weight: bold;
}
.brLabel {
	color: #454F63;
    font-size: 18;
}
.fsLabel {
	color: #454F63;
    font-size: 12;
    font-weight: bold;
}
.fsContentLabel {
	color: #2699FB;
    font-size: 13;
}
</style>
