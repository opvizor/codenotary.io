<template>
    <page-section id="immudb-features-section">
        <i-container>
            <i-row>
                <i-column lg="4">
                    <feature title="Immutable" image="/images/immudb//features/immutable2.svg">
                        <p>Any kind of key-value. Clients can choose how to structure data.</p>
                        <p><strong>No data mutation APIs</strong> are provided.</p>
                        <p>Data is never overwritten, so multiple versions of the same key co-exist and are verifiable.</p>
                    </feature>
                </i-column>
                <i-column lg="4">
                    <feature title="Auditable" image="/images/immudb//features/auditable3.svg">
                        <p>Tamper-evident history system.</p>
                        <p>Clients and auditors want <strong>cryptographic proof</strong>  of data inclusion and historical consistency in real time.</p>
                        <p>If tampered, clients and auditors will notice that and take actions.</p>
                    </feature>
                </i-column>
                <i-column lg="4">
                    <feature title="Secure" image="/images/immudb/features/secure2.svg">
                        <p>Data ownership is verifiable by clients and auditors.</p>
                        <p>Sign your data using <strong>Public-Key Cryptography</strong>.</p>
                        <p>Keys additions and revocations is immutably stored into the database</p>
                    </feature>
                </i-column>
            </i-row>
        </i-container>
    </page-section>
</template>

<script>
import Feature from '~/components/common/Feature';

export default {
    components: {
        Feature
    }
}
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#immudb-features-section {
    background-color: transparent;
    margin-top: -2rem;
    padding-top: 0;

    .feature {
        padding: 2rem 1rem;
        background: white;
        border: 1px solid $border-color-light;
        border-bottom: 2px solid $color-primary;
    }
}
</style>
