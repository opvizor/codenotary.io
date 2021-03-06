<template>
    <div>
        <page-section>
            <page-section-header title="Blog" tag="h1" />
            <i-container>
                <i-row>
                    <i-column xs="12" class="blog-search-wrapper _hidden-sm-and-down _padding-right-2 _padding-left-2 _margin-bottom-2">
                        <i-input v-model="filter" class="blog-search" placeholder="Filter post by title, date or tag" :clearable="!!filter" />
                    </i-column>
                    <i-column xs="12" class="blog-search-wrapper mobile _hidden-md-and-up _padding-right-1 _padding-left-1 _margin-bottom-2">
                        <i-input v-model="filter" class="blog-search" placeholder="Filter post by title, date or tag" :clearable="!!filter" />
                    </i-column>
                    <i-column xs="12">
                        <no-ssr>
                            <masonry class="_width-100" :cols="{default: 4, 1000: 3, 700: 2, 400: 1}" :gutter="{default: '1rem', 700: '1rem'}">
                                <div v-for="article in filteredArticles" :key="article.slug" class="item" column-width="33px" >
                                    <i-card class="blog-post">
                                        <div class="image-wrapper">
                                            <img :src="article.image || `/images/blog-post.svg`" class="image -responsive" :alt="article.title" onerror="this.src='/images/blog-post.svg'">
                                        </div>
                                        <nuxt-link class="_overlay-link" :to="{ name: 'blog-post', params: { post: article.slug } }">
                                            <div class="title">
                                                {{ article.title }}
                                            </div>
                                        </nuxt-link>
                                        <div class="date">
                                            {{ article.date }}
                                        </div>
                                        <i-badge v-for="(tag, idx) in article.tags" :key="`${tag}-${idx}`" class="_margin-top-1-4 _margin-right-1-4" size="sm" @click.stop.prevent="filter=tag">{{ tag }}</i-badge>
                                    </i-card>
                                </div>
                            </masonry>
                        </no-ssr>
                    </i-column>
                </i-row>
            </i-container>
        </page-section>
    </div>
</template>

<script>
import NoSSR from 'vue-no-ssr'
import { title } from '~/helpers/meta';

export default {
    components: {
        'no-ssr': NoSSR
    },
    head () {
        return {
            title: title('Blog')
        };
    },
    async asyncData ({ $content }) {
        const articles = await $content('blog')
            .only(['title', 'date', 'image', 'slug', 'tags'])
            .sortBy('date', 'desc')
            .fetch();

        return { articles };
    },
    data: () => ({
        filter: ''
    }),
    beforeDestroy () {
        this.filter = null;
    },
    mounted () {
        if (typeof this.$redrawVueMasonry === 'function') {
            this.$redrawVueMasonry()
        }
    },
    computed: {
        filteredArticles () {
            if (this.filter) {
                return this.articles && this.articles.filter((_) => {
                    const title = _.title.toLowerCase().includes(this.filter.toLowerCase());
                    const date = _.date.includes(this.filter.replace(/\//g, '-'));
                    const tags = _.tags ? _.tags.map((_) => _.toLowerCase()).includes(this.filter.toLowerCase()) : false;
                    return title || date || tags;
                });
            }
            return this.articles;
        }
    }
}
</script>

<style lang="scss">
@import '~@inkline/inkline/src/css/config';

.blog-search-wrapper {
    display: flex;
    justify-content: flex-end;

    &.navbar {
        position: absolute;
        min-width: 240px;
        max-width: 240px;
        top: 24px;
        right: 16px;
        background-color: transparent;
        z-index: 1010;
    }

    &.mobile {
        min-width: 100%;
        max-width: 100%;

        .blog-search {
            min-width: 100%;
            max-width: 100%;
            padding-right: 16px;
        }
    }

    .blog-search {
        min-width: 320px;
        max-width: 480px;
    }
}

.blog-post {
    margin-bottom: 1rem;

    .image-wrapper {
        width: 100%;
        text-align: center;

        .image {
            object-fit: cover;
            max-height: 80px;
            margin-bottom: 1rem;
            text-align: center;
            background-position: center center;
        }
    }

    .date {
        font-size: 80%;
        color: $text-muted;
    }
}
</style>
