<template>
  <div class="head">
     <div class=right>
       <img src="./../../static/image/index/message.png" alt="">
     </div>
     <div class='center'>
       
         <img src="./../../static/image/index/wap_logo.png" alt="">
         <img src="./../../static/image/index/titlebar_refresh.png" alt="">
      
     </div>
     <div class='left'>
       <img src="./../../static/image/index/search_normal.png" alt="">
     </div>
  </div>
</template>

<script>
export default {
 
  data () {
    return {
      
    }
  }
}
</script>


<style scoped lang='less'>
.head{
  font-size:.18rem;
  background:#d33e3d;
  color:#fff;
  height:.35rem;
  padding:0 .12rem;
  display:flex;
  justify-content: space-between;
  align-items:center;
   .right{
      width:.23rem;
      height:.18rem;
      img{
         width:100%;
        height:100%;
      }
   }
   .center{
        img:nth-child(1){
          display:inline-block;
          width:.68rem;
          height:.19rem;
        }
         img:nth-child(2){
           display:inline-block;
          width:.15rem;
          height:.15rem;
        }
      }
     .left{
      width:.18rem;
      height:.18rem;
      img{
         width:100%;
        height:100%;
      }
   } 
}
</style>
