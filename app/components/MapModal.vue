<template>
    <AbsoluteLayout backgroundColor="white" height="560" width="340">
        <Image src="~/images/mapLarge.png" height="560" width="340" @tap="closeModal"/>
    </AbsoluteLayout>
</template>

<script>
import SecurityPolicyModal2 from "./SecurityPolicyModal2"

export default {
    data() {
        return {};
    },
    methods: {
        closeModal() {
            this.$modal.close();
        }
    }
};
</script>

<style>

</style>
