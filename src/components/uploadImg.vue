<template>
<div>
  <div v-show=" src==''" class="add-img img-box" @click="uploadInput()" style="display:inline-block">
      <img src="../../static/img/upload.png" alt="" id="img"><div class="click">点此上传</div>
   <!--<i class="iconfont icon-tianjiazhaopian"></i>-->
  </div>
  <div class="img-box" @click="uploadInput()" v-show="src!=''" style="display:inline-block">

    <img :src="src" alt="" ref="img">
  </div>

  <input type="file" ref="file"  v-on:change="upload()" hidden>
</div>
</template>
<script>
    import {activation} from '../api/index'
    import { Actionsheet } from 'mint-ui';
    import { Toast } from "mint-ui";
    import { Navbar, TabItem } from "mint-ui";
    import { Indicator } from 'mint-ui';
    import { MessageBox } from 'mint-ui';
    import { DatetimePicker } from 'mint-ui';
    import { InfiniteScroll } from 'mint-ui';
 /* import config from '../../../api/web_config'
  import axios from 'axios'*/
/* axios.defaults.withCredentials = true;*/
 /* import {uploadImg} from '../../../api/web_index'*/
    export default {
      props:{
        srcFromParent:{
          type:String,
          default:''
        },
        uploadUrl:{
          type:String,
          default:''
        },
        addClearSrc:{},
        type:''
      },
      data(){
        return {
          file:'',
          src:''
        }
      },
      mounted(){
        var _this=this;
        this.src = _this.srcFromParent;
      },
      methods:{
        uploadInput(){
            console.log('this.$refs.file',this.$refs.file)
          this.$refs.file.click();
        },
        upload(e, type){
            Indicator.open({
                spinnerType: 'fading-circle'
            });
          var _this=this;

          if(this.$refs.file.files.length==0){
            return;
          }
            let files = this.$refs.file.files;
            if (files[0].type.indexOf("image") < 0) {
                Toast({
                    message: '上传了非图片',
                    position: 'middle',
                    duration: 1500
                });
                return;
            }
            if (files[0].size > 5 * 1000000) {
                Toast({
                    message: '上传文件过大',
                    position: 'middle',
                    duration: 1500
                });
                return;
            }


          var reader=new FileReader();
          reader.readAsDataURL(this.$refs.file.files[0]);
          reader.onload=function () {
             console.log('_this.src',_this.src);
            _this.src=this.result;
            _this.$emit('upimg', this.result)
          };


        }

      },
      watch:{
        srcFromParent(n,o){
          this.src=n;
        }

      }
    }
</script>
<style scoped="">
.add-img{
  border:1px dashed #aaa;
  /*line-height:170px;*/
  text-align: center;
    padding:25px;
    box-sizing:border-box;
}
.img-box{
 /* margin:0 auto;*/
  width:165px;
  height:114px;
  overflow: hidden;
}
.add-img:hover{
  border:1px dashed #1e90ff;
}
.add-img i{
  font-size: 73px;
  color: #9ea4b1;
  }
#img{
    height:35px;
    width:auto
}
.img-box img{
    width:100%;
    height:100%;
  }
</style>
