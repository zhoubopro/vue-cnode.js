<template>
  <ui-layout>
    <ui-header>
      header
    </ui-header>
    <ui-layout>
      <ui-content>
        <h3>{{article.title}}</h3>
        <span>发布于：{{createdTime}}</span>
        <span>作者：{{article.author.loginname}}</span>
        <span>浏览量：{{article.visit_count}}</span>
        <span>来自：{{article.tab}}</span>
        <div v-html='article.content'></div>
      </ui-content>
      <ui-sider>
        sider
      </ui-sider>
    </ui-layout>
  </ui-layout>
</template>

<script>
  export default {
    name: "view-article",
    data () {
      return {
        article: {
          title: '',
          author: {
            loginname: '',
          },
          visit_count: '',
          tab: '',
          content: '',
          create_at: '2017-04-130000',
        },
      };
    },
    computed: {
      createdTime () {
        return String(this.article.create_at).match(/.{10}/)[0];
      },
    },
    mounted () {
      this.getTopicApi()
    },
    methods: {
      getTopicApi () {
        // const params = { page: 1, limit: 10, mdrender: 'false' };
        const path = this.$route.path;
        this.$api.getTopic(path).then(result => {
          const data = result.data.data;

          if (result.status === 200) {
            this.article = data;
          } else {
            this.article = 'Sorry, Something wrong happened when getting the remote data';
          }
          console.log(this.article);
        }).catch(e => {
          console.log('portal.vue: ', e.data.data);
        });
      }
    }
  }
</script>

<style scoped lang="scss">

</style>

