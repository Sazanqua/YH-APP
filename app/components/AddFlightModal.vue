<template>
    <AbsoluteLayout backgroundColor="white" height="380" width="260">
        <Image top="80" left="70" src="~/images/check.png"/>
        <Label left="93" top="220" class="faaaLabel" text="Flight added!"/>
        <Button left="75" top="300" class="okk_button" text="OK" @tap="$modal.close()"/>
    </AbsoluteLayout>
</template>

<script>
export default {
    data() {
        return {};
    }
};
</script>

<style>
.okk_button{
    background-color: #2699FB;
    border-radius: 3;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 11;
    height: 48;
    width: 110;
    font-weight: bold;
}
.faaaLabel {
	color: #2699FB;
    font-size: 13;
}
</style>
