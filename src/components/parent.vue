<template>
  <div id="parent">
    <div class="value">父組件接收到的值 {{total}}</div>
    <button @click='props'>props发送</button>
    <child @increment='incremnetTotal' :message="msg" :information="project"></child>
    
  </div>
</template>

<script>

import child from './child'

export default {
  components:{
     child
  },
  data () {
    return {
      total:0,
      msg:"my name is gsben",
      project:[]
    }
  },
  methods:{
     incremnetTotal:function(data){  //接收子组件的值
        this.total+=1;
        alert(data);
        console.log(data);
     },
     props(){   //传递到子组件的信息
        var aa = {'a':6};
        this.project = aa;
     }
  }
}
</script>

<style>
   #parent{
     text-align: center;
     margin: 0 auto;
     width: 260px;
     height: 60px;
     border: solid red 1px;
   }
</style>
