<template>
    <div class="underReview" v-model="content">
        <div class="top">
            <!--激活成功-->
            <div class="status">
                <img src="../../static/img/active_success.png" alt=""  v-if="content.StatusValue==3">
                <img src="../../static/img/check.png" alt="" v-if="content.StatusValue==0">
                <img src="../../static/img/notPass.png" alt="" v-if="content.StatusValue==2">
                <img src="../../static/img/fail.png" alt="" v-if="content.StatusValue==4">
                <div>{{content.StatusName}}</div>
            </div>


        </div>
        <div class="under">
            <div class="name"><span>参保人</span>{{content.RealName}}</div>
            <div class="idCard"><span>社保卡号</span>{{content.SINCardId }}</div>
            <div class="data"><span>身份证号</span>{{idcard}}</div>
            <div class="bank"><span>开户行</span>{{content.CashAccountName}}</div>
            <div class="account"><span>社保卡金融账户</span>{{account}}</div>
        </div>

        <div class="progress">

            <div class="title">处理进度</div>

            <!--激活成功-->
            <div class="schedule" v-if="content.StatusValue==3">

                <div class="progress1">
                    <div class="left">
                        <img src="../../static/img/active_success.png" alt="">
                        <div class="name">提交成功</div></div>
                    <div class="time">{{content.CreateTime}}</div>

                </div>
                <div class="line1 line"></div>
                <div class="progress2">
                    <div class="left">
                        <img src="../../static/img/active_success.png" alt="">
                        <div class="name">审核通过</div></div>
                    <div class="time">{{content.VerifyTime}}</div>

                </div>
                <div class="line2 line"></div>
                <div class="progress3">
                    <div class="left"><img src="../../static/img/active_success.png" alt="">
                        <div class="name">激活成功</div></div>
                    <div class="time">{{content.ActiveTime}}</div>
                </div>



            </div>
            <!--审核中-->
            <div class="schedule" v-if="content.StatusValue==0">

                <div class="progress1">
                    <div class="left">
                        <img src="../../static/img/uploadSuccess.png" alt="">
                        <div class="name">提交成功</div></div>
                    <div class="time">{{content.CreateTime}}</div>

                </div>
                <div class="line1 line"></div>
                <div class="progress2">
                    <div class="left">
                        <img src="../../static/img/check.png" alt="">
                        <div class="name">审核中</div></div>
                    <div class="time">{{content.VerifyTime}}</div>

                </div>
                <div class="line2 line"></div>
                <div class="progress3">
                    <div class="left"><img src="../../static/img/active_grey.png" alt="">
                        <div class="name forecast">激活成功</div></div>
                    <div class="time" >预计{{content.PlanActiveTime}}前</div>
                </div>



            </div>
            <!--审核未通过-->
            <div class="schedule" v-if="content.StatusValue==2">

                <div class="progress1">
                    <div class="left">
                        <img src="../../static/img/uploadSuccess.png" alt="">
                        <div class="name">提交成功</div></div>
                    <div class="time">{{content.CreateTime}}</div>

                </div>
                <div class="line1 line"></div>
                <div class="progress2">
                    <div class="left">
                        <img src="../../static/img/notPass.png" alt="">
                        <div class="name">审核未通过</div></div>
                    <div class="time">{{content.VerifyTime}}</div>

                </div>




            </div>

            <!--激活失败-->
            <div class="schedule" v-if="content.StatusValue==4">

                <div class="progress1">
                    <div class="left">
                        <img src="../../static/img/active_success.png" alt="">
                        <div class="name">提交成功</div></div>
                    <div class="time">{{content.CreateTime}}</div>

                </div>
                <div class="line1 line"></div>
                <div class="progress2">
                    <div class="left">
                        <img src="../../static/img/active_success.png" alt="">
                        <div class="name">审核通过</div></div>
                    <div class="time">{{content.VerifyTime}}</div>

                </div>
                <div class="line2 line"></div>
                <div class="progress3">
                    <div class="left"><img src="../../static/img/fail.png" alt="">
                        <div class="name">激活失败</div></div>
                    <div class="time">{{content.ActiveTime}}</div>
                </div>



            </div>

            <!--激活成功温馨提示-->
            <div class="prompt" v-if="content.StatusValue==3">
                <div class="prompt_left">温馨提示</div>
                <div class="prompt_right">{{content.ClientMessage}}</div>
            </div>
            <!--审核中温馨提示-->
            <div class="prompt" v-if="content.StatusValue==0">
                <div class="prompt_left">温馨提示</div>
                <div class="prompt_right">{{content.ClientMessage}}</div>
            </div>

            <!--审核未通过原因-->
            <div class="prompt" v-if="content.StatusValue==2">
                <div class="prompt_left">未通过原因</div>
                <div class="prompt_right">{{content.ClientMessage}}</div>
            </div>

           <!-- 激活失败原因-->
            <div class="prompt" v-if="content.StatusValue==4">
                <div class="prompt_left">失败原因</div>
                <div class="prompt_right">{{content.ClientMessage}}</div>
            </div>



        </div>


        <div class="again" v-if="content.StatusValue==2" @click="reupload">重新上传证件照片</div>
        <div class="bind" v-if="content.StatusValue==3" @click="bind" :class="{grey:isActive,none:isActive1}" ref="text">绑定社保卡</div>
        <div class="return" v-if="content.StatusValue==3" @click="returnHome">返回医保大厅</div>
    </div>
</template>

<script>
    import {getHistoryDetail,cardBind} from '../api/index'
    import {Indicator,Toast} from 'mint-ui'
    export default {
        name: "under-review",
        data(){
            return{
                content:{},
                /*future:'',*/
                isActive:false,
                isActive1:false,
                idcard:'',
                account:'',
                id:''

            }
        },
        created:function () {
            var _this=this


            _this.id=_this.$route.params.ID;
            var idCode=_this.id
            console.log(idCode)
            getHistoryDetail({ID:idCode}).then(function(res){
                console.log(3333);
                console.log(res);
                _this.content=res.data.Data;
                _this.idcard=_this.content.IdentityCard.slice(0,6)+new Array(_this.content.IdentityCard.length-10).join('*')+_this.content.IdentityCard.substr(-4)
               //_this.idcard=(_this.content.IdentityCard.length==18)?_this.content.IdentityCard.replace(/(\d{6})\d{8}(\d{4})/, "$1*******$2"):_this.content.IdentityCard.replace(/(\d{6})\d{5}(\d{4})/, "$1*******$2")
                //_this.account=_this.content.CashAccount.replace(/(\d{6})\d{9}(\d{4})/, "$1*******$2");
                _this.account=new Array(_this.content.CashAccount.length-4).join('*')+_this.content.CashAccount.substr(-4)
               /* if(res.data.Data.StatusValue==0){
                    var data=res.data.Data.CreateTime;
                    var d=new Date(data);
                    //var m=d.getMonth(data)+1;
                    d.setDate(d.getDate()+7);
                    d.setMonth(d.getMonth(data));
                    var hour=d.getHours(data);
                    var minute=d.getMinutes(data)
                    _this.content.future=d.getMonth()+1+'-'+d.getDate()+' '+hour+':'+minute;

                }*/
                if(res.data.Data.StatusValue==3){
                    if(res.data.Data.IsBindingCard){
                        _this.isActive1=true
                    }
                }
            })
        },
        methods:{
            returnHome:function(){
                window.location='https://lfybwx.zhiscity.com/Basic/Special/Index'
            },
            reupload:function(){
                var _this=this;
                getHistoryDetail({ID:this.id}).then(function(res){

                    console.log(3333);
                    console.log(res);
                    var data = {};
                    /*var b=new Base64();*/
                    data.RealName = res.data.Data.RealName;
                    data.IdentityCard = res.data.Data.IdentityCard;
                    data.SinCard = res.data.Data.SINCardId;
                    /*data.SinPwd =b.encode( _this.pwd_invisible || _this.pwd_visible);*/
                    data.SinPwd =res.data.Data.SINCardPsd;
                    data.SinSid = res.data.Data.SINCardSid;
                    data.CashAccount = res.data.Data.CashAccount;
                    data.CashAccountName = res.data.Data.CashAccountName;
                    data.CashAccountCode = res.data.Data.CashAccountCode;
                    data.PasswordId = 0;
                    _this.$parent.form = data;
                    console.log(44444)
                    console.log(_this.$parent.form)
                    if(res.data.Data.StatusValue==0||res.data.Data.StatusValue==3){
                        return false
                    }else{
                        _this.$router.push('/selectPaperwork');
                        _this.$parent.code='';
                        _this.$parent.isShowImg=res.data.Data.IsShowAllImg
                    }

                })

            },
            bind:function(){
                var _this=this;
                var obj={};
                Indicator.open({
                    text:'绑卡中，请稍等...',
                    spinnerType:'fading-circle'
                });
                obj.RealName=this.content.RealName;
                obj.IdentityCard=this.content.IdentityCard;
                obj.SinCardId=this.content.SINCardId;
                obj.SinCardPwd=this.content.SINCardPsd;
                obj.SinCardSid=this.content.SINCardSid;
                obj.Account=0;
                cardBind(obj).then(function(res){
                    console.log(res)
                    Indicator.close();
                    if(res.data.IsSuccess){
                        _this.$refs.text.innerText='社保卡已绑定'
                        _this.isActive=true;
                        Toast({
                            message: res.data.Message,
                            position: 'bottom',
                            duration: 2000
                        });
                    }else{
                        /*$('.bind').innerHTML='社保卡已绑定';*/
                        console.log(222)
                        Toast({
                            message: res.data.Message,
                            position: 'bottom',
                            duration: 2000
                        });
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .top{
        background:white;
    }
    .again,.bind,.return{
        width:90%;
        height:47px;
        color:white;
        background:#00AE66;
        line-height:47px;
        border-radius:5px;
        margin:0 auto;
        margin-top:25px;
        /*opacity: 0.4;*/
    }
    .again{
        margin-bottom:18px;
    }
    .grey{
        opacity:0.4;
        pointer-events: none;
        cursor: default;
    }
    .none{
        display:none
    }
    .return{
        background:#F8F8F8;
        border: 1px solid rgba(5,5,5,0.10);
        color:#333333;
        margin-top:16px;
        margin-bottom:18px;

    }
    .status{

        height:80px;
        margin-left:20px;
        line-height:80px;
        border-bottom: 1px solid #E5E5E5;
        text-align:left
    }
    .status img{
        vertical-align: middle;
        height:38px;
        width:38px;
        margin-top:-5px;

    }
    .status div{
        display:inline-block;
        font-size:24px;
    }
    .under{
        padding:10px 20px;
        text-align:left;
        /*  margin-top:15px;*/
        /*line-height:28px;*/
        background:white;

    }
    .under{

        font-size:14px;
        font-family:PingFangSC-Regular;

    }
    .under span{
        color:#888888;
    }
    .under .name, .under .idCard, .under .data,.under .bank,.under .account{
        display:flex;
        justify-content: space-between;
        margin-bottom:11px;
        color:#333333
    }
    .progress{
        background:white;
        text-align:left;
        margin-top:16px;
    }
    .progress1,.progress2,.progress3{
        display:flex;
        justify-content: space-between;
        height:23px;
    }
    .progress img{
        width:23px;
        height:23px;
        margin-right:9px;
    }
    .progress .name,.progress .time{
        display:inline-block;
    }
    .progress .time{
        color:#999999
    }
    .forecast{
        color:#999999
    }
    .schedule{
        padding:11px 20px 15px 0;
        margin-left:20px;
        border-bottom:1px solid #E5E5E5;
    }
    .left{
        display:flex;
    }
    .line{
        height:34px;
        width:1px;
        background:#00AE66;
        margin-left:11px;
    }
    .line1{
        background:#00AE66
    }
    .line2{
        background:#C9C9C9
    }
    .progress .title{
        height:43px;
        border-bottom:1px solid #E5E5E5;
        margin-left:20px;
        line-height:43px;
        color:#888888;
        font-size:14px;
    }
    .prompt{
        display:flex;
        padding:15px 20px;
    }
    .prompt div{
        display:inline-block;
    }
    .prompt_left{
        color:#888888;
        font-size:14px;
        margin-right:14px;
        width:25%;
    }
    .prompt_right{
        width:75%;
        color:#333333;
        font-size:14px;
        text-align:left
    }
</style>
