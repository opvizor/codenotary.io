<template>
    <div>
        <Navbar id="navbar" />
        <div id="content">
            <nuxt/>
        </div>
        <Footer />
        <Copyright />
    </div>
</template>

<script>
import Navbar from '~/components/layout/Navbar';
import Footer from '~/components/layout/Footer';
import Copyright from '~/components/layout/Copyright';

export default {
    components: {
        Navbar,
        Footer,
        Copyright
    }
}
</script>

<style lang="scss">
$navbar-height: 80px;

#navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
}

#content {
    margin-top: $navbar-height;
}
</style>
