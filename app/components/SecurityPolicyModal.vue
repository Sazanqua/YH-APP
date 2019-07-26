<template>
    <AbsoluteLayout backgroundColor="white" height="560" width="340">
        <Label left="63" top="15" class="brLabel" text="BAGGAGE RESTRICTIONS" />
        <Image top="23" left="45" src="~/images/securityPolicy1.png" width="250" height="380"/>
        <Label left="43" top="387" class="fsLabel" text="Flammable Substances Prohibited On Flight" />
        <Label left="48" top="410" class="fsContentLabel" text="• Radioactive and corrosive materials." />
        <Label left="48" top="425" class="fsContentLabel" text="• Infectious and toxic materials" />
        <Label left="48" top="440" class="fsContentLabel" text="• Sharp and pointed power tools" />
        <Label left="48" top="455" class="fsContentLabel" text="• Explosives and compressed gases" />
        <Label left="48" top="470" class="fsContentLabel" text="• Flammable substances, liquids and paints" />
        <Button left="125" top="500" class="next_button" text="NEXT" @tap="nextModalButton"/>
    </AbsoluteLayout>
</template>

<script>
import SecurityPolicyModal2 from "./SecurityPolicyModal2"

export default {
    data() {
        return {};
    },
    methods: {
        nextModalButton() {
            this.$showModal(SecurityPolicyModal2);
            this.$modal.close();
        }
    }
};
</script>

<style>
.next_button{
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
