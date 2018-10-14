<!--<template>
  <div id="app">
      &lt;!&ndash;<Header :seller="seller" v-if="flag"></Header>&ndash;&gt;
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view/>
    <div class="content">
      content
    </div>
  </div>
</template>-->

<script>
/*
  import Vue from 'vue'
  import Header from './components/Header/Header.vue'
  import axios from 'axios'
  Vue.prototype.$http = axios;*/

  const ERR_OK = 0;

  export default {
   /* name: 'App',
    data(){
      return {
          flag:false,
        seller: {

        }
      }
    },
    mounted(){
      this.$http.get('/static/data.json').then(response => {
        this.seller = response.data;
        this.flag = true;
        console.log(this.seller);
      },erro => {
        // error callback
      })
    },
    components: {
      Header
    },*/
  }

</script>

<!--
<style>
  /*#app {
    color: #2c3e50;
  }
  .tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    position: relative;
  }
  .tab:after{
    position: absolute;
    content:'';
    left:0;
    bottom:0;
    width:100%;
    border-top:1px solid rgba(7,17,27,.1);
     -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
     -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
  }

  .tab-item {
    flex: 1;
    text-align: center;
  }

  .tab-item a {
    display: block;
    text-decoration: none;
    font-size: 14px;
    color: rgb(77,85,93);
  }
  a.active{
    color: rgb(240,20,20);
  }
*/
</style>
-->
