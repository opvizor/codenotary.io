<template>
    <page-section id="ci-cd-features-section">
        <i-container>
            <i-row>
                <i-column>
                    <page-section-header title="Features" />
                </i-column>
            </i-row>
            <i-row center top>
                <i-column xs="12" sm="6" md="6" lg="4">
                    <i-card>
                        <img slot="image" src="/images/ci-cd/features/easy_to_use.svg" alt="Easy to use" >
                        <h4 class="title _font-weight-bold _text-primary">Easy to use</h4>
                        <p class="lead">Unlike cumbersome and expensive digital certificates CodeNotary allows you to notarize your digital assets yourself in a split second, without any intermediary.</p>
                    </i-card>
                </i-column>
                <i-column xs="12" sm="6" md="6" lg="4">
                    <i-card>
                        <img slot="image" src="/images/ci-cd/features/tamperproof.svg" alt="Tamperproof" >
                        <h4 class="title _font-weight-bold _text-primary">Tamperproof</h4>
                        <p class="lead">Your notarizations are written in stone, in a blockchain and you can easily revoke any of your notarized assets in seconds. The blockchain is spread around the globe and is always up.</p>
                    </i-card>
                </i-column>
                <i-column xs="12" sm="6" md="6" lg="4">
                    <i-card>
                        <img slot="image" src="/images/ci-cd/features/full_transparency.svg" alt="Full transparency" >
                        <h4 class="title _font-weight-bold _text-primary">Full transparency</h4>
                        <p class="lead">Anyone can authenticate the authenticity and provenance of any of your notarized assets using cryptographic verification of their SHA256 hashes stored in the blockchain.</p>
                    </i-card>
                </i-column>
                <i-column xs="12" sm="6" md="6" lg="4">
                    <i-card>
                        <img slot="image" src="/images/ci-cd/features/notarize.svg" alt="Notarize" >
                        <h4 class="title _font-weight-bold _text-primary">Notarize</h4>
                        <p class="lead">Notarize your source code, documents, libraries, builds, and containers onto the blockchain in one simple step and immutably attach your identity, reputation, and trust to them, independently or as an organization.</p>
                    </i-card>
                </i-column>
                <i-column xs="12" sm="6" md="6" lg="4">
                    <i-card>
                        <img slot="image" src="/images/ci-cd/features/authenticate.svg" alt="Authenticate" >
                        <h4 class="title _font-weight-bold _text-primary">Authenticate</h4>
                        <p>Automate and continuously authenticate the integrity of any digital asset in your environment. Enable anyone, anywhere, at any time to verify the authenticity of your solutions simply and for free.</p>
                    </i-card>
                </i-column>
            </i-row>
        </i-container>
    </page-section>
</template>

<script>
export default {
    name: 'CiCdFeatures'
}
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#ci-cd-features-section {
    background-color: white;
    overflow: hidden;

    .card {
        margin-bottom: 2rem;
        background: transparent;

        img {
            height: 96px;
            object-fit: contain;
        }

        .body {
            border: none;
            text-align: center;
        }
    }
}
</style>
