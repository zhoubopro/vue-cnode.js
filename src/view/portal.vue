<template>
  <ui-layout>
    <ui-header>
      header
    </ui-header>
    <ui-layout>
      <ui-content class='portal-wrapper'>
        <div v-for='item of content'>
          <img :src='item.author.avatar_url' :title='item.loginname'>
          <span>{{item.reply_count}}</span>
          <span>{{item.create_at}}</span>
          <router-link :to='{name:"Article", params:{id:item.id}}'>
            {{item.title}}
          </router-link>
        </div>
      </ui-content>
      <ui-sider>
        sider
      </ui-sider>
    </ui-layout>
  </ui-layout>
</template>

<script>
  export default {
    name: "portal",
    data () {
      return {
        content: [],
      };
    },
    mounted () {
      this.getTopicsApi()
    },
    methods: {
      getTopicsApi () {
        // const params = { page: 1, limit: 10, mdrender: 'false' };
        const params = {};
        this.$api.getTopics(params).then(result => {
          this.content = result.data.data;
        }).catch(e => {
          console.log('portal.vue: ', e.data.data);
        });
      }
    }
  }
</script>

<style scoped lang="scss">
  .portal-wrapper {
    min-height: 100vh;
  }
</style>
