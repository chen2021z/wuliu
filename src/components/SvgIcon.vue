<template>    
    <svg :class="svgClass" aria-hidden="true">
        <use  :xlink:href="iconName"  :fill="color"/>
    </svg>
</template>
<script>    
export default {
   name:'svgIcon',
   props:{
     name:{
          type:String,
          required:true
      },
     className:{
         type:String,
         default:''
      },
      color: {
            type: String,
            default: '#333',
        }
   },
   computed:{
       svgClass(){   //svg 的class
           if(this.className){
               return `svg-icon ${this.className}`;
           }else{
              return 'svg-icon'
           }
       },
      iconName(){  //svg xlink-href 指向的文件名
          return `#icon-${this.name}`;
      }
   }
}
</script>
<style scoped>
  .svg-icon{
     width: 1em;
     height: 1em;
     vertical-align: -0.15em;
     fill: currentColor;
     overflow: hidden; 
  }
</style>
