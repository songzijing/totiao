<template>
  <div class='detail' >
      <div class='main'>
          <p class='title'>{{title}}</p>
          <div class='new'>
              <div class='right'>
                  <img src="./../../static/image/datails/author.jpg" alt="">
              </div>
              <div class='center'>
                  <p class='from'>{{from}}</p>
                  <p class='time'>
                      <span>14小时前</span>
                      <span>{{commit}}评论</span>
                  </p>
              </div>
              <div class='left'>
                 <p>关注</p>
              </div>
          </div>
           <div class='content' v-html='content'> </div>
      </div> 
  
      
  </div>
</template>

<script>
export default {
  data() {
    return {
       title:'',
       from:'',
       commit:'',
       content:[]
    }
  },
  methods: {

  },
  mounted(){
     this.$axios.get('./../../static/data/data.json').then((res)=>{
         console.log(res)
         this.title=res.data[this.$route.params.id-1].title;
         this.from=res.data[this.$route.params.id-1].from;
         this.commit=res.data[this.$route.params.id-1].commentLength;
         this.content=res.data[this.$route.params.id-1].content;
     }).catch((err)=>{
         console.log(err)
     })
  },
  components: {

  }
}
</script>

<style scoped lang='less'>
.detail{
    margin:.12rem;
    font-size:.17rem;
    .main{
         .title{
       font-size:.22rem;
       font-weight: bolder;
       margin-bottom:.11rem;
    }
    .new{
        display:flex;
        margin-bottom:.15rem;
        .right{
           width:.4rem;
           height:.4rem;
           border-radius: 50%;
           margin-right:.11rem;
           img{
               width:100%;
               height:100%;
            border-radius: 50%;
           }  
        }

        .center{
             font-size:.15rem;
             margin-right:.11rem;
           .from{
               font-weight: bolder;
           }
           .time{
               span:nth-child(1){
                   color:#d4d4d4;
               }
                span:nth-child(2){
                   color:#f75b59;
               }
           }
        }
        .left{
            width:.76rem;
            height:.35rem;
            line-height:.35rem;
            text-align:center;
            background:#f75b59;
            color:#fff;
            font-size:.15rem;
             font-weight: bolder;
            
        }
    }
    .content{
        p{
            font-size:.17rem;
            margin-bottom:.16rem;
        }
        
    }
    }
   
}
</style>
