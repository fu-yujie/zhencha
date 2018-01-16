

<!--上传图片-->
<template>
    <div class="uploadIdcard">
        <ul>
            <li class="image1">
                <div class="title">1.参保人手持本人户籍单页及社保卡照片</div>
                <!--<div class="cover" v-if="image1.length==0">
                    <img src="../../static/img/upload.png" alt=""><div>点此上传</div>
                </div>
                <input type="file" accept="image/*" class="file1" v-on:change="inputFile" ref="avatarInput">
                <img :src="image1" alt="" class="img">-->
                <div style="display:flex;justify-content: space-between">
                <upload @upimg="upimg1" style="display:inline-block;width:48%;"></upload>
                <div class="example">
                    <img src="../../static/img/account_example1.png" alt="" class="idcard_example">
                    <div class="mask" @click="click_enlarge1">
                        <img src="../../static/img/enlarge.png" alt="">
                        <div>示例</div>
                    </div>

                </div>
                </div>
            </li>
            <li class="image2">
                <div class="title">2.参保人本人户籍单页照片</div>
               <!-- <div class="cover" v-if="image2.length==0">
                    <img src="../../static/img/upload.png" alt=""><div>点此上传</div>
                </div>
                <input type="file" accept="image/*" class="file1" v-on:change="inputFile1" ref="avatarInput1">
                <img :src="image2" alt="" class="img">-->
                <div style="display:flex;justify-content: space-between">
                <upload @upimg="upimg2" style="display:inline-block;width:48%;"></upload>
                <div class="example">
                    <img src="../../static/img/account_example2.png" alt="" class="idcard_example">
                    <div class="mask" @click="click_enlarge2">
                        <img src="../../static/img/enlarge.png" alt="">
                        <div>示例</div>
                    </div>

                </div>
                </div>
            </li>
            <li class="image3">
                <div class="title">3.待激活社保卡正面照片</div>
                <!--<div class="cover" v-if="image3.length==0">
                    <img src="../../static/img/upload.png" alt=""><div>点此上传</div>
                </div>
                <input type="file" accept="image/*" class="file1" v-on:change="inputFile2" ref="avatarInput2">
                <img :src="image3" alt="" class="img">-->
                <div style="display:flex;justify-content: space-between">
                <upload @upimg="upimg3" style="display:inline-block;width:48%;"></upload>
                <div class="example">
                    <img src="../../static/img/account_example3.png" alt="" class="idcard_example">
                    <div class="mask" @click="click_enlarge3">
                        <img src="../../static/img/enlarge.png" alt="">
                        <div>示例</div>
                    </div>

                </div>
                </div>
            </li>
            <li class="image4" v-if="isShow">
                <div class="title">4.参保人所属监护人户籍单页照片</div>
                <!--<div class="cover" v-if="image4.length==0">
                    <img src="../../static/img/upload.png" alt=""><div>点此上传</div>
                </div>
                <input type="file" accept="image/*" class="file1" v-on:change="inputFile3" ref="avatarInput3">
                <img :src="image4" alt="" class="img">-->
                <div style="display:flex;justify-content: space-between">
                <upload @upimg="upimg4" style="display:inline-block;width:48%" ></upload>
                <div class="example">
                    <img src="../../static/img/account_example4.png" alt="" class="idcard_example">
                    <div class="mask" @click="click_enlarge4">
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
            <img src="../../static/img/account_exampleEn1.png" alt="" class="enlarge" @click="clickNone">
        </mt-popup>
        <mt-popup
            v-model="popupVisible2">
            <img src="../../static/img/account_exampleEn2.png" alt="" class="enlarge" @click="clickNone">
        </mt-popup>
        <mt-popup
            v-model="popupVisible3">
            <img src="../../static/img/account_exampleEn3.png" alt="" class="enlarge" @click="clickNone">
        </mt-popup>
        <mt-popup
            v-model="popupVisible4">
            <img src="../../static/img/account_exampleEn4.png" alt="" class="enlarge" @click="clickNone">
        </mt-popup>
    </div>
    <!-- <input type="file" v-show="false" id="file">-->
    <!-- <yd-actionsheet :items="myItems1" v-model="show" cancel="取消"></yd-actionsheet>-->
</template>

<script>
    import {getConfig,activation} from "../api/index";
    import { Indicator,MessageBox } from 'mint-ui';
    import {openFile} from '../util/core'
    import upload from '../components/uploadImg'
    export default {
        components:{
            upload
        },
        data(){
            return{
                actions:[
                    {name:'拍照'},
                    {name:'相册',method:this.inputFile}
                ],
                sheetVisible:false,
                picList:[],
                image1:'',
                image2:'',
                image3:'',
                image4:'',
                popupVisible1:false,
                popupVisible2:false,
                popupVisible3:false,
                popupVisible4:false,
                img1:'',
                img2:'',
                img3:'',
                img4:'',
                isActive:false,
                isActive1:true,
                isShow:''
            }
        },
        created:function(){
              /*this.isShow=this.$parent.code==-1018||this.$parent.isShowImg*/
            if(this.$parent.code==-1018){
                  this.isShow=true;
            }else{
                  /*return false*/
            }

            if(this.$parent.isShowImg){
                this.isShow=true;
            }else{
                return false
            }

        },
        watch:{
            img1:'a',
            img2:'a',
            img3:'a',
            img4:'a'
        },
        methods:{
            clickNone:function(){
                this.popupVisible1=false;
                this.popupVisible2=false;
                this.popupVisible3=false;
            },
            a:function(){
                if(this.isShow){
                if(this.img1.length!==0&&this.img2.length!==0&&this.img3.length!==0&&this.img4.length!==0){
                    this.isActive=true;
                    this.isActive1=false
                }
                }else{
                    if(this.img1.length!==0&&this.img2.length!==0&&this.img3.length!==0){
                        this.isActive=true;
                        this.isActive1=false
                    }
                }
            },
            upimg1(data) {
                console.log(data);
                this.img1=data
            },
            upimg2(data) {
                console.log(data);
                this.img2=data
            },
            upimg3(data) {
                console.log(data);
                this.img3=data
            },
            upimg4(data) {
                console.log(data);
                this.img4=data
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
            click_enlarge4:function(){
                this.popupVisible4=true
            },
            submitForm:function(){
                var _this=this;
                Indicator.open({
                    text:'申请提交中，请稍等...',
                    spinnerType: 'fading-circle'
                });
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
                obj.SINCardImg=this.img1;
                obj.SINCardHJDYImg=this.img2;
                obj.SINCardZMImg=this.img3;
                obj.SINCardJHRHJDYImg=this.img4

                activation(obj).then(function (res) {
                    Indicator.close();
                    console.log(777);
                    console.log(res);
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
                    /*if(res.data.IsSuccess){

                    }else{

                    }*/



                }).catch(function (err) {
                    Indicator.close();
                    console.log(err);
                })
            }


        },
        /*watch:function(){
            if(this.img1.length==0){

            }
        }*/
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
    .image1,.image2,.image3,.image4{
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
        color:#333333
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
        opacity:0.4
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

