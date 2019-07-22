<template>
  <div class='news'>
     <ul>
         <li v-for='(item,index) in list' :key='index'>
             <router-link :to='{name:"Detail",params:{id:item.id}}'>
             <div class='right'>
                     <p class='titol'>{{item.title}}</p>
                    <p class='lb'>
                        <span class='zd'>置顶</span>
                        <span>{{item.from}}</span>
                        <span>评价:{{item.commentLength}}</span>
                    </p> 
                 </div>
                 <div class='left'>
                     <img :src="item.img" alt="">
                 </div>
             </router-link>
         </li>
     </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
       list:[],
    }
  },
   mounted() {
       this.$axios
       .get('./../../static/data/data.json')
       .then((res)=>{
           console.log(res);
           this.list=res.data;
       }).catch((err)=>{
           console.log(err);
       });
      },

}
</script>

<style scoped lang='less'>
.news{
    margin:.15rem .12rem 0;
    li {
        border-bottom:1px solid #F4f4f4;
        a{
            display:flex;
            justify-content: space-between;
            align-items: center;
            margin:.07rem 0 .13rem 0;
           .right{
               flex:1;
               .titol{
               font-size:.16rem;
               color:black;
           }
           .lb{
              margin-top:.07rem;
               font-size:.08rem;
               color:#9a9a9a;
               .zd{
                   display:inline-block;
                    width:.29rem;
                    height:.18rem;
                    color:#d33e3d;
                    border:1px solid #d33e3d;
                    border-radius: .05rem;
                    font-weight: bolder;
               }
           }
           }
           .left{
               
               width:.92rem;
               height:.58rem;
               img{
                    width:100%;;
                    height:100%;;
               }
           }
        }
    }
}
</style>
