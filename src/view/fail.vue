<!--
<template>
    <div class="underReview">
        <div class="top">
            <div class="status">
                <img src="../../static/img/fail.png" alt="">
                <div>激活失败</div>
            </div>
        </div>
        <div class="under">
            <div class="name"><span>参保人</span>1111</div>
            <div class="idCard"><span>社保卡号</span>1111</div>
            <div class="data"><span>身份证号</span>1111</div>
            <div class="bank"><span>开户行</span>1111</div>
            <div class="account"><span>社保卡金融账户</span>1111</div>
        </div>

        <div class="progress">
            <div class="title">处理进度</div>
            <div class="schedule">

                <div class="progress1">
                    <div class="left">
                        <img src="../../static/img/active_success.png" alt="">
                        <div class="name">提交成功</div></div>
                    <div class="time">1111</div>

                </div>
                <div class="line1 line"></div>
                <div class="progress2">
                    <div class="left">
                        <img src="../../static/img/active_success.png" alt="">
                        <div class="name">审核通过</div></div>
                    <div class="time">111</div>

                </div>
                <div class="line2 line"></div>
                <div class="progress3">
                    <div class="left"><img src="../../static/img/fail.png" alt="">
                        <div class="name">激活失败</div></div>
                    <div class="time">1111</div>
                </div>



            </div>
            <div class="prompt">
                <div class="prompt_left">失败原因</div>
                <div class="prompt_right">社保卡处于挂失状态，无法激活</div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "under-review"
    }
</script>

<style scoped>
    .top{
        background:white;
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
-->
