<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src='sell.avatar'>
      </div>
      <div class="content">
        <span class="brand">{{sell.name}}</span>
        <span class="name"></span>
      </div>
    </div>
    <div class="bulletin-wrapper"></div>
  </div>
</template>

<script>

  export default{
    props: {
      seller: {
        type: Object
      }
    },
    data(){
      return{
        sell:this.seller
      }
    },
    created(){
      console.log(this.sell);
      console.log(this.seller);
    }
  }
</script>

<style>

</style>
