<template>
  <div id="child">
  	<button @click="incrementCount">发送{{counter}}</button>
    <p>子組件接收的值是：{{message}}</p>
    <p>子組件接收的对象值：{{information.a}}</p>
  </div>
</template>

<script>
export default {
  data(){
  	return{
  		counter:0
  	}
  },
  props:['message','information'],
  methods:{
  	incrementCount:function(){
  		this.counter +=1;
      var aa = {};
      var b = '';
      aa.b = "1";
  		this.$emit('increment',aa);//传数据给父组件,aa可以是字符串,数组，还可以是对象
  	}
  }
}
</script>

<style>
  #child{
    width: 300px;
    height: 120px;
    border: solid green 1px;
    margin-top: 50px;

  }
</style>
