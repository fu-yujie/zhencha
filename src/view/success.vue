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
            <div class="data"><span>身份证号</span>{{content.IdentityCard}}</div>
            <div class="bank"><span>开户行</span>{{content.CashAccountName}}</div>
            <div class="account"><span>社保卡金融账户</span>{{content.CashAccount}}</div>
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
                    <div class="time" >预计{{content.future}}前</div>
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
        <div class="bind" v-if="content.StatusValue==3">绑定社保卡</div>
        <div class="return" v-if="content.StatusValue==3" @click="returnHome">返回医保大厅</div>
    </div>
</template>

<script>
    import {getHistoryDetail} from '../api/index'
    export default {
        name: "under-review",
        data(){
            return{
                content:{},
                future:''
            }
        },
        created:function () {
            var _this=this
            var id=_this.$route.params.ID;
            console.log(id)
            getHistoryDetail({ID:id}).then(function(res){
                console.log(3333);
                console.log(res);
                _this.content=res.data.Data;
                if(res.data.Data.StatusValue==0){
                    var data=res.data.Data.CreateTime;
                    var d=new Date(data);
                    //var m=d.getMonth(data)+1;
                    d.setDate(d.getDate()+3);
                    d.setMonth(d.getMonth(data));
                    var hour=d.getHours(data);
                    var minute=d.getMinutes(data)
                    /*var future=m+'-'+day;*/
                    _this.content.future=d.getMonth()+1+'-'+d.getDate()+' '+hour+':'+minute;
                    /*alert(future);*/
                    /*return future*/
                }
            })
        },
        methods:{
            returnHome:function(){

            },
            reupload:function(){
                this.$router.push('/selectPaperwork')
            }
        }
    }
</script>

<style scoped>
    .top{
        background:white;
    }
    .again,.bind,.return{
        width:335px;
        height:47px;
        color:white;
        background:#00AE66;
        line-height:47px;
        border-radius:10px;
        margin:0 auto;
        margin-top:25px;
        /*opacity: 0.4;*/
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
    }
    .prompt_right{
        width:265px;
        color:#333333;
        font-size:14px;
        text-align:right
    }
</style>
