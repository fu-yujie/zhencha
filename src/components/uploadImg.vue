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
        upload(){
          var _this=this;
          if(this.$refs.file.files.length==0){
            return;
          }

          var reader=new FileReader();
          reader.readAsDataURL(this.$refs.file.files[0]);
          reader.onload=function () {
             console.log('_this.src',_this.src);
            _this.src=this.result;
            _this.$emit('upimg', this.result)
          };
         /* var formData = new FormData();

          formData.append('uploadfile',this.$refs.file.files[0]);

          console.log('rr',this.$refs.file.files[0])*/
          /*activation(formData).then(function (res) {
             console.log(777);
             console.log(res)
             /!* if(res.data.errcode==1){
                _this.$message({
                  message: '上传图片失败，请重新上传',
                  type: 'warning'
                });
                  return false;
              }else{
                var obj={};
                console.log('type',_this.type);
                obj['type']=_this.type;
                obj.value=res.data.data;
                console.log('obj',obj)
                _this.$emit('getpic',obj);
                return true;
              }*!/

          }).catch(function (err) {
            console.log(err);
          })*/
        }
          /*upload(e, type) {
              /!*Indicator.open({
                  spinnerType: 'fading-circle'
              });*!/
              var that = this;
              let files = e.target.files || e.dataTransfer.files;
             // if (!files.length) return;
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

              compress(e.target, (base64, imgFile) => {
                  activation({'ImageFile': base64}).then(data =>{
                      console.log(data)
                      if(data.body.Code == 0) {
                          this.ImgId = data.body.Data.ImgId;
                          this.preImgUrl = data.body.Data.ImgFile;
                          this.disabled = true;
                          this.delImg = true;
                          this.defaultimg = false;
                          Indicator.close();
                      } else {
                          Indicator.close();
                          Toast({
                              message: data.body.Message,
                              position: 'middle',
                              duration: 1500
                          });
                          this.reloadImg();
                      }
                  },data =>{
                      console.log('error' + data)
                  })
              });

              function convertImgDataToBlob(base64Data) {
                  var format = "image/jpeg";
                  var base64 = base64Data;
                  var code = window.atob(base64.split(",")[1]);
                  var aBuffer = new window.ArrayBuffer(code.length);
                  var uBuffer = new window.Uint8Array(aBuffer);
                  for (var i = 0; i < code.length; i++) {
                      uBuffer[i] = code.charCodeAt(i) & 0xff;
                  }

                  var blob = null;
                  try {
                      blob = new Blob([uBuffer], { type: format });
                  } catch (e) {
                      window.BlobBuilder =
                          window.BlobBuilder ||
                          window.WebKitBlobBuilder ||
                          window.MozBlobBuilder ||
                          window.MSBlobBuilder;
                      if (e.name == "TypeError" && window.BlobBuilder) {
                          var bb = new window.BlobBuilder();
                          bb.append(uBuffer.buffer);
                          blob = bb.getBlob("image/jpeg");
                      } else if (e.name == "InvalidStateError") {
                          blob = new Blob([aBuffer], { type: format });
                      } else {
                      }
                  }
                  return blob;
              }

              function compress(event, callback) {
                  //var inputID="file";
                  console.log(event.files[0]);
                  var file = event.files[0];
                  var reader = new FileReader();
                  reader.onload = function(e) {
                      // var image = $("<img />");
                      var image =document.createElement("img");
                      image.onload = function() {
                          var canvas = document.createElement("canvas");
                          var x = this.width;
                          var y = this.height;
                          this.width = 375 * 2;
                          this.height = this.width / x * y;
                          var width = this.width;
                          var height = this.height;

                          canvas.width = this.width;
                          canvas.height = this.height;

                          var context = canvas.getContext("2d");
                          context.clearRect(0, 0, width, height);

                          context.drawImage(this, 0, 0, this.width, this.height);
                          var quality = 0.9; //可以理解为压缩程度
                          //quality :图片质量。0 到 1 之间的数字，并且只在格式为 image/jpeg 或 image/webp 时才有效，如果参数值格式不合法，将会被忽略并使用默认值
                          var data;
                          var result;
                          var length;
                          //处理图片过大问题
                          //控制图片上传的大小，注意若图片过大 ajax上传的时候会出现参数为null的错误
                          //这里如果图片过大会将图片压缩程度放大
                          do {
                              data = canvas.toDataURL("image/jpeg", quality); //压缩图片
                              length = data.length;
                              result = (length / 4 * 3 + 1023) / 1024; //计算压缩后图片的大小（单位：KB）
                              console.log("result:" + result);
                              quality -= 0.05;
                          } while (result > 450);
                          //data：base64
                          callback(data, event.files[0]); //回调函数
                      };
                      // image.attr("src", e.target.result);
                      image.src = e.target.result;
                  };
                  reader.readAsDataURL(file);
              }
          },*/
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
