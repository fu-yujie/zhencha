

<!--上传图片-->
<template>
    <div class="uploadIdcard">
        <ul>
            <li class="image1">
                <div class="title">1.参保人手持身份证及社保卡照片</div>
                <!--<div class="cover" v-if="image1.length==0">
                    <img src="../../static/img/upload.png" alt=""><div>点此上传</div>
                </div>
                <input type="file" accept="image/*" class="file1" v-on:change="inputFile" ref="avatarInput">
                <img :src="image1" alt="" class="img">-->
                <div style="display:flex;justify-content: space-between">
                <upload @upimg="upimg1" style="display:inline-block;width:48%;"></upload>
                <div class="example">
                <img src="../../static/img/idcard_example1.png" alt="" class="idcard_example">
                    <div class="mask" @click="click_enlarge1">
                        <img src="../../static/img/enlarge.png" alt="">
                        <div>示例</div>
                    </div>

                </div>
                </div>
            </li>
            <li class="image2">
                <div class="title">2.参保人身份证正面照片</div>
                <!--<div class="cover" v-if="image2.length==0">
                    <img src="../../static/img/upload.png" alt=""><div>点此上传</div>
                </div>
                <input type="file" accept="image/*" class="file1" v-on:change="inputFile1" ref="avatarInput1">
                <img :src="image2" alt="" class="img">-->
                <div style="display:flex;justify-content: space-between">
                <upload @upimg="upimg2" style="display:inline-block;width:48%;"></upload>
                <div class="example">
                    <img src="../../static/img/idcard_example2.png" alt="" class="idcard_example">
                    <div class="mask" @click="click_enlarge2">
                        <img src="../../static/img/enlarge.png" alt="">
                        <div>示例</div>
                    </div>

                </div>
                </div>
            </li>
            <li class="image3">
                <div class="title">3.参保人待激活社保卡正面照片</div>
                <!--<div class="cover" v-if="image3.length==0">
                    <img src="../../static/img/upload.png" alt=""><div>点此上传</div>
                </div>
                <input type="file" accept="image/*" class="file1" v-on:change="inputFile2" ref="avatarInput2">
                <img :src="image3" alt="" class="img">-->
                <div style="display:flex;justify-content: space-between">
                <upload @upimg="upimg3" style="display:inline-block;width:48%;" ></upload>
                <div class="example">
                <img src="../../static/img/account_example3.png" alt="" class="idcard_example">
                    <div class="mask" @click="click_enlarge3">
                        <img src="../../static/img/enlarge.png" alt="">
                        <div>示例</div>
                    </div>

                </div>
                </div>
            </li>
        </ul>
<div class="submit" @click="submitForm" :class="{submit1:isActive,disable:isActive1}">提交激活申请</div>
        <div class="prompt">
            <div class="title">温馨提示</div>
            <ul>
                <li>
                    <img src="../../static/img/Group1.png" alt="">
                    <div>为保证社保卡顺利激活，请上传清晰的证件照片；</div>
                </li>
                <li>
                    <img src="../../static/img/Group2.png" alt="">
                    <div>您上传的证件照片仅用于社保卡激活操作；</div>
                </li>
                <li>
                    <img src="../../static/img/Group3.png" alt="">
                    <div>如您在社保卡激活过程中出现任何问题，请及时联系客服人员，客服电话：0316-5900201。</div>
                </li>
            </ul>

        </div>
       <!-- <mt-actionsheet
            :actions="actions"
            v-model="sheetVisible">
        </mt-actionsheet>-->
        <mt-popup
            v-model="popupVisible1">
            <img src="../../static/img/idcard_exampleEn1.png" alt="" class="enlarge" @click="clickNone">
        </mt-popup>
        <mt-popup
            v-model="popupVisible2">
            <img src="../../static/img/idcard_exampleEn2.png" alt="" class="enlarge" @click="clickNone">
        </mt-popup>
        <mt-popup
            v-model="popupVisible3">
            <img src="../../static/img/account_exampleEn3.png" alt="" class="enlarge" @click="clickNone">
        </mt-popup>
    </div>
        <!-- <input type="file" v-show="false" id="file">-->
       <!-- <yd-actionsheet :items="myItems1" v-model="show" cancel="取消"></yd-actionsheet>-->
</template>

<script>
    import Bus from '../util/bus'
    import upload from '../components/uploadImg'
    import { Indicator,MessageBox } from 'mint-ui';
    import {getConfig,activation} from "../api/index";
    /*import {openFile} from '../util/core'*/
    export default {
        components:{
            upload
        },
        data(){
            return{
                list:[],
                actions:[
                    {name:'拍照'},
                    {name:'相册',method:this.inputFile}
                ],
                sheetVisible:false,
                picList:[],
                image1:'',
                image2:'',
                image3:'',
                data:{},
                // isActive1:false,
                // isActive2:false,
                // isActive3:false,
                popupVisible1:false,
                popupVisible2:false,
                popupVisible3:false,
                img1:'',
                img2:'',
                img3:'',
                isActive:false,
                isActive1:true
               /* form:{
                    IdentityImg:'',
                    IdentityZMImg:'',
                    IdentityBMImg:'',
                    SINCardImg:'',
                    SINCardHJDYImg:'',
                    SINCardZMImg:'',
                    SINCardJHRHJDYImg:''

                }*/
            }
        },
        created:function(){

            /*var _this=this;
            getConfig().then(function(res){

                console.log(res);
                _this.list=res.data.Data.ConfigItems[4];

                console.log(_this.list)
            })*/

        },
        watch:{
            img1:'a',
            img2:'a',
            img3:'a',
        },
        methods:{
            clickNone:function(){
                this.popupVisible1=false;
                this.popupVisible2=false;
                this.popupVisible3=false;
            },
            a:function(){
                if(this.img1.length!==0&&this.img2.length!==0&&this.img3.length!==0){
                    this.isActive=true;
                    this.isActive1=false
                }
            },
            upimg1(data) {
             /* console.log(data);*/
              this.img1=data
            },
            upimg2(data) {
                /*console.log(data);*/
                this.img2=data
            },
            upimg3(data) {
                /*console.log(data);*/
                this.img3=data
            },
            show:function(){
                this.sheetVisible=true
            },
            click_enlarge1:function(){
               this.popupVisible1=true
            },
            click_enlarge2:function(){
               this.popupVisible2=true
            },
            click_enlarge3:function(){
                this.popupVisible3=true
            },
            submitForm:function(){
                var _this=this;
                getConfig().then(function (res) {
                    /* var _this=this;*/
                    console.log(res);
                    console.log(res.data.Data.ConfigItems[2])
                    var name = res.data.Data.ConfigItems[2];
                    console.log(888);
                    console.log(name)
                    var i = name.length;
                    var arr = [''];
                    var code = [''];
                    for (var j = 0; j < i; j++) {
                        arr.push(name[j].ConfigName);
                        code.push(name[j].ConfigNumber)
                    }
                    console.log(arr);
                   /* _this.slots[0].values = arr;
                    _this.slots[0].values1 = code;*/
                    for(var k=0;k<i;k++){
                        if(arr[k].indexOf(_this.$parent.form.CashAccountName)>=0){
                            _this.$parent.form.CashAccountCode=code[k]
                            /*alert(_this.$parent.form.CashAccountCode);*/
                            console.log(232323);
                            console.log(_this.$parent.form)
                        }
                    }
                    console.log(7777);

                })
                Indicator.open({
                    text:'申请提交中，请稍等...',
                    spinnerType: 'fading-circle'
                });
                /*console.log('dddd');
                console.log(this.$parent.form);
                console.log(this.$parent.form1);*/
                var obj={};
                obj.RealName=this.$parent.form.RealName;
                obj.IdentityCard=this.$parent.form.IdentityCard;
                obj.SinCard=this.$parent.form.SinCard;
                obj.SinPwd=this.$parent.form.SinPwd;
                obj.SinSid=this.$parent.form.SinSid;
                obj.CashAccount=this.$parent.form.CashAccount;
                obj.CashAccountName=this.$parent.form.CashAccountName;
                obj.CashAccountCode=this.$parent.form.CashAccountCode;
                obj.PasswordId=0;
                obj.CardType=this.$parent.form1.CardType;
                obj.InsuredRelation=this.$parent.form1.InsuredRelation;
                obj.Mobile=this.$parent.form1.Mobile;
                obj.IdentityImg=this.img1;
                obj.IdentityZMImg=this.img2;
                obj.IdentityBMImg=this.img3;
console.log(obj)
                activation(obj).then(function (res) {
                    Indicator.close();
                    if(res.data.IsSuccess){
                        _this.$router.push('/activeSuccess')
                    }else{
                        MessageBox({
                            title: '温馨提示',
                            message: res.data.Message,
                            //position: 'bottom',
                            /* showCancelButton: true*/
                        });
                    }
            console.log(777);
            console.log(res);



         }).catch(function (err) {
                    Indicator.close();
                    MessageBox({
                        title: '温馨提示',
                        message: '网络异常，请稍后重试',
                        //position: 'bottom',
                        /* showCancelButton: true*/
                    });
         })
            }
            /*inputFile:function(){
               var _this=this;
               if(this.$refs.avatarInput.files.length==0){
                   return
               }
               var file=this.$refs.avatarInput.files[0];
                /!*console.log(file);*!/
                var fr=new FileReader();
                fr.readAsDataURL(file);
                fr.onload=function () {
                    console.log('this.result------',this.result);
                    _this.image1=this.result
                }
                },*/
            /*inputFile1:function(){
                var _this=this;
                var file=this.$refs.avatarInput1.files[0];
                console.log(file);
                var fr=new FileReader();
                fr.readAsDataURL(file);
                fr.onload=function () {
                    console.log('this.result------',this.result);
                    _this.image2=this.result
                }
            },*/
           /* inputFile2:function(){
                var _this=this;
                var file=this.$refs.avatarInput2.files[0];
                console.log(file);
                var fr=new FileReader();
                fr.readAsDataURL(file);
                fr.onload=function () {
                    console.log('this.result------',this.result);
                    _this.image3=this.result
                }
            }*/

        }
    }
</script>

<style scoped>
    *{
       /* box-sizing*/


    }
    .idcard_example{
        width:100%;
        height:114px;

    }

    .example{
        display:inline-block;
        position:relative;
       /* margin-left:10px;
        right:15px*/
        width:48%;
        height:114px;

    }
    .mask{
        width:100%;
       /* box-sizing: border-box;*/
        position:absolute;
        top:0;
        background:rgba(0,0,0,0.40);
        /*height:114px;
        width:165px;*/
       /* padding:20px 66px*/
        height:100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    }
    .mask div{
        color:white;
        font-size:16px;
    }
    .mask img{
        width:26px;
    }
    .enlarge{
        width:100%;
    }
.file1{
    background:transparent;
    height:114px;
    width:165px;
    position:absolute;
    top:45px;
    left:15px;
    opacity: 0;
}
    .image1,.image2,.image3{
        position:relative;
        height:176px;
        background:white;
        margin-top:15px;
        padding:12px 15px;
        box-sizing:border-box;
        text-align:left

    }
    .title{
        text-align:left;
        margin-bottom:12px;
        color:#333333;
    }
    .cover{
        /*height:114px;*/
        width:165px;
        position:absolute;
        left:15px;
        border:1px  dashed #B8B8B8;
        background:#F4F4F4;
        padding:26px 0;
        text-align:center
    }
    .cover img{
        height:35px;
    }
.submit{
    height:47px;
    width:90%;
    background: #00AE66;
    border: 1px solid rgba(5,5,5,0.08);
    border-radius: 5px;
    color:white;
    line-height:47px;
    margin:0 auto;
    margin-top:25px;
    opacity: 0.4;
}
.submit1{
    opacity: 1;
}
.disable{
    pointer-events: none;
    cursor: default;
}
.img{
    width:165px;
    height:114px;
}
    .prompt{
        background: #E5E5E5;
        text-align:left;
        padding:20px
    }
    .prompt .title{
        color:#333333;
        font-size:16px;
    }
    .prompt img{
        height:14px;
        width:14px;
        margin-right:9px;
        margin-top:2px;
    }
    .prompt li{
        list-style: none;
        margin-top:15px;
        display:flex;
    }
    .prompt li div{
        display:inline-block;
        color:#666666;
        font-size:14px;
    }
</style>

