<template>
    <page-section id="ztc-join-section">
        <join-ztc-modal v-model="joinZtcModalVisible" />
        <i-container>
            <i-row>
                <i-column>
                    <page-section-header title="Join the Zero-Trust Consortium" block class="_margin-bottom-2" />
                    <i-button size="lg" variant="light" @click="joinZtcModalVisible = true">Join the Consortium</i-button>
                </i-column>
            </i-row>
        </i-container>
    </page-section>
</template>

<script>
import JoinZtcModal from '~/components/common/modals/JoinZtcModal';

export default {
    data() {
        return {
            joinZtcModalVisible: false
        };
    },
    components: { JoinZtcModal }
}
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#ztc-join-section {
    h2 {
        color: white;
    }

    text-align: center;
    background-color: $color-primary;
}
</style>
