<template>
    <div class="home">
        <div style="z-index: 100;
    position: absolute;
    width: 100%;
    height: 100%;
    background: #E5E5E5;" v-if="isShowHome"></div>
        <!--<my-header></my-header>-->
        <!--<mt-navbar v-model="selected">
            <mt-tab-item id="1">社保卡激活</mt-tab-item>
            <mt-tab-item id="2">历史激活记录</mt-tab-item>
        </mt-navbar>-->

        <div class="headline">
            <div class="tab1 selected" @click="tab1">社保卡激活</div>
            <div class="tab2" @click="tab2">历史激活记录</div>
        </div>
        <div style="height:100%">
            <div id="page1">
                <div style="padding-top:40px;">
                    <div class="warning">
                        <img src="../../static/img/warning.png" alt="">
                        <div>激活社保卡时的登录手机号：推荐使用此参保人2018年度城乡居民医保缴费时的登录/预留手机号或在廊坊医保微信平台申领社保卡时预留的手机号。</div>
                    </div>
                    <!--<div class="form"><mt-field label="姓名" placeholder="请输入姓名"   v-model="userName"  @keyup="change()"></mt-field>
                        <mt-field label="身份证号" placeholder="请输入身份证号" type="text" v-model="idCard"  @keyup="change()"></mt-field>
                        <mt-field label="社保卡号" placeholder="请输入社保卡号" type="text" v-model="cardNum" @keyup="change()"><div class="example" @click="example1" >示例</div></mt-field>
                        <mt-field label="社保卡密码" placeholder="请输入社保卡密码" type="password"  :class="{pwd_invisible:isActive1}" v-model="pwd_invisible" @keyup="change()"><img class="visibility_off" src="../../static/img/ic_visibility_off.png" alt="" @click="input_visible"></mt-field>
                        <mt-field label="社保卡密码" placeholder="请输入社保卡密码" type="text" :class="{pwd_visible:isActive2}" v-model="pwd_visible"><img class="visibility_off" src="../../static/img/ic_visibility.png" alt="" @click="input_invisible"></mt-field>
                        <mt-field label="社保卡SID" placeholder="请输入社保卡SID" type="text"  v-model="sid" @keyup="change()"><div class="example" @click="example2">示例</div></mt-field>
                    </div>-->
                    <div class="form">
                        <div class="userName">
                            <div><label for="userName">姓名</label></div>
                            <input type="text" placeholder="请输入姓名" id="userName" ref="userName" v-model="userName"
                                   @keyup="change()" @blur="checkName" class="required">
                            <img src="../../static/img/clear.png" alt="" class="clear clearName" @click="clear1"
                                 style=""
                                 v-if="userName">
                        </div>
                        <div class="idCard">
                            <div><label for="idCard">身份证号</label></div>
                            <input type="text" id="idCard" placeholder="请输入身份证号" class="required" maxlength="18"
                                   v-model="idCard" @blur="checkIdcard" @keyup="change()">
                            <img src="../../static/img/clear.png" alt="" class="clear clearid" @click="clear2"
                                 v-if="idCard">
                        </div>
                        <div class="card">
                            <div><label for="cardNum">社保卡号</label></div>
                            <input type="text" id="cardNum" placeholder="请输入社保卡号" class="required" maxlength="9"
                                   v-model="cardNum" @keyup="change()">
                            <img src="../../static/img/clear.png" alt="" class="clear clearnum" @click="clear3"
                                 v-if="cardNum" style="right:70px">
                            <div class="example" @click="example1">示例</div>
                        </div>
                        <div class="password" :class="{pwd_invisible:isActive1}">
                            <div><label for="pwd_invisible">社保卡密码</label></div>
                            <input type="password" id="pwd_invisible" placeholder="请输入社保卡密码" class="required"
                                   maxlength="6"
                                   @blur="checkPass" v-model="pwd_invisible" @keyup="change()">
                            <img src="../../static/img/clear.png" alt="" class="clear clearpass" @click="clear4"
                                 v-if="pwd_invisible" style="right:41px">
                            <img class="visibility_off" src="../../static/img/ic_visibility_off.png" alt=""
                                 @click="input_visible">
                        </div>
                        <div :class="{pwd_visible:isActive2}" class="password">
                            <div><label for="pwd_visible">社保卡密码</label></div>
                            <input type="text" id="pwd_visible" placeholder="请输入社保卡密码" class="required" maxlength="6"
                                   @blur="checkPass" v-model="pwd_visible">
                            <img src="../../static/img/clear.png" alt="" class="clear clearpass" @click="clear4"
                                 v-if="pwd_visible" style="right:41px">
                            <img class="visibility_off" src="../../static/img/ic_visibility.png" alt=""
                                 @click="input_invisible">
                        </div>
                        <div class="sid">
                            <div><label for="sid">社保卡SID</label></div>
                            <input type="text" id="sid" placeholder="请输入社保卡SID" class="required" maxlength=""
                                   v-model="sid"
                                   @keyup="change()">
                            <img src="../../static/img/clear.png" alt="" class="clear clearsid" v-if="sid"
                                 @click="clear5"
                                 style="right:70px">
                            <div class="example" @click="example2">示例</div>
                        </div>
                        <div class="" style="height:15px;background:#E5E5E5;margin:0"></div>
                        <div class="bank">
                            <div><label for="bank">开户行</label></div>
                            <div class="inputBox" @click="selectBank"><input type="text" disabled
                                                                             style="background:white" id="bank"
                                                                             placeholder="请选择社保卡金融账户开户行"
                                                                             class="required" maxlength="" value=""
                                                                             v-model="bank"
                                                                             @keyup="change()"></div>
                            <img src="../../static/img/Chevron.png" alt="" @click="selectBank" class="right_arrow">
                        </div>
                        <div class="account">
                            <div><label for="account">收款账户</label></div>
                            <input type="text" pattern="[0-9]*" id="account" placeholder="请输入社保卡金融账户卡号" class="required"
                                   @blur="checkAccount"
                                   maxlength="" v-model="account" @keyup="change()">
                            <img src="../../static/img/clear.png" alt="" class="clear clearaccount" v-if="account"
                                 @click="clear6" style="right:70px">
                            <div class="example" @click="example3">示例</div>
                        </div>
                    </div>

                    <div class="activation" @click="activation($event)" :class="{activation1:isActive3}">立即激活</div>
                    <div class="prompt">
                        <div class="title">温馨提示</div>
                        <ul>
                            <li>
                                <img src="../../static/img/Group1.png" alt="">
                                <div>社保卡线上激活功能目前只支持<strong style="color:#333333">城乡居民</strong>医保参保用户，<strong
                                    style="color:#333333">城镇职工</strong>参保用户请持卡至医保定点医疗机构、定点药店进行激活。

                                </div>
                            </li>
                            <li>
                                <img src="../../static/img/Group2.png" alt="">
                                <div>社保卡初始密码为：123456，为了您的账户安全，请您在医保定点医疗机构就诊时修改密码。</div>
                            </li>
                            <li>
                                <img src="../../static/img/Group3.png" alt="">
                                <div>社保卡金融账户是您后期医疗费用报销时的收款账户，请您在填写时仔细核对。</div>
                            </li>
                            <li>
                                <img src="../../static/img/Group4.png" alt="">
                                <div>如您在社保卡激活过程中有任何疑问或问题，请及时联系客服人员，客服电话：0316-5900201。</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="active page2" id="page2">
                <ul class="historyCell" v-if="isShow" style="padding-top:40px;">
                    <li v-for="item in list" @click.prevent="detail(item.ID,item.StatusValue)">
                        <div class="top">
                            <div class="num">处理进度</div>
                            <div class="status">{{item.StatusName}}</div>
                        </div>
                        <div class="under">
                            <div class="name"><span>参保人</span>{{item.RealName}}</div>
                            <div class="idCard"><span>社保卡号</span>{{item.SINCardId}}</div>
                            <div class="data"><span>社会保障号</span>{{item.IdentityCard.slice(0,6)+new
                                Array(item.IdentityCard.length-10).join('*')+item.IdentityCard.substr(-4)}}
                            </div>
                        </div>
                        <div class="detail" @click.prevent="detail(item.ID,item.StatusValue)">查看详情</div>

                    </li>
                </ul>
                <div v-if="!isShow" class="historyNone">
                    <img src="../../static/img/history_none.png" alt="">
                    <div>未找到历史激活记录</div>
                </div>
            </div>
        </div>


        <!-- tab-container -->
        <!--<mt-tab-container v-model="activesel">
            <mt-tab-container-item id="1" v-model="selected">
                <div class="warning">
                    <img src="../../static/img/warning.png" alt="">
                    <div>激活社保卡时的登录手机号：推荐使用此参保人18年医疗保险缴费时预留的手机号或在线申领社保卡时登录的手机号</div>
                </div>
                &lt;!&ndash;<div class="form"><mt-field label="姓名" placeholder="请输入姓名"   v-model="userName"  @keyup="change()"></mt-field>
                    <mt-field label="身份证号" placeholder="请输入身份证号" type="text" v-model="idCard"  @keyup="change()"></mt-field>
                    <mt-field label="社保卡号" placeholder="请输入社保卡号" type="text" v-model="cardNum" @keyup="change()"><div class="example" @click="example1" >示例</div></mt-field>
                    <mt-field label="社保卡密码" placeholder="请输入社保卡密码" type="password"  :class="{pwd_invisible:isActive1}" v-model="pwd_invisible" @keyup="change()"><img class="visibility_off" src="../../static/img/ic_visibility_off.png" alt="" @click="input_visible"></mt-field>
                    <mt-field label="社保卡密码" placeholder="请输入社保卡密码" type="text" :class="{pwd_visible:isActive2}" v-model="pwd_visible"><img class="visibility_off" src="../../static/img/ic_visibility.png" alt="" @click="input_invisible"></mt-field>
                    <mt-field label="社保卡SID" placeholder="请输入社保卡SID" type="text"  v-model="sid" @keyup="change()"><div class="example" @click="example2">示例</div></mt-field>
                </div>&ndash;&gt;
                <div class="form">
                    <div class="userName">
                        <div><label for="userName">姓名</label></div>
                        <input type="text" placeholder="请输入姓名" id="userName" ref="userName" v-model="userName"
                               @keyup="change()" @blur="checkName" class="required">
                        <img src="../../static/img/clear.png" alt="" class="clear clearName" @click="clear1" style=""
                             v-if="userName">
                    </div>
                    <div class="idCard">
                        <div><label for="idCard">身份证号</label></div>
                        <input type="text" id="idCard" placeholder="请输入身份证号" class="required" maxlength="18"
                               v-model="idCard" @blur="checkIdcard" @keyup="change()">
                        <img src="../../static/img/clear.png" alt="" class="clear clearid" @click="clear2"
                             v-if="idCard">
                    </div>
                    <div class="card">
                        <div><label for="cardNum">社保卡号</label></div>
                        <input type="text" id="cardNum" placeholder="请输入社保卡号" class="required" maxlength="9"
                               v-model="cardNum" @keyup="change()">
                        <img src="../../static/img/clear.png" alt="" class="clear clearnum" @click="clear3"
                             v-if="cardNum" style="right:70px">
                        <div class="example" @click="example1">示例</div>
                    </div>
                    <div class="password" :class="{pwd_invisible:isActive1}">
                        <div><label for="pwd_invisible">社保卡密码</label></div>
                        <input type="password" id="pwd_invisible" placeholder="请输入社保卡密码" class="required" maxlength="6"
                               @blur="checkPass" v-model="pwd_invisible" @keyup="change()">
                        <img src="../../static/img/clear.png" alt="" class="clear clearpass" @click="clear4"
                             v-if="pwd_invisible" style="right:41px">
                        <img class="visibility_off" src="../../static/img/ic_visibility_off.png" alt=""
                             @click="input_visible">
                    </div>
                    <div :class="{pwd_visible:isActive2}" class="password">
                        <div><label for="pwd_visible">社保卡密码</label></div>
                        <input type="text" id="pwd_visible" placeholder="请输入社保卡密码" class="required" maxlength="6"
                               @blur="checkPass" v-model="pwd_visible">
                        <img src="../../static/img/clear.png" alt="" class="clear clearpass" @click="clear4"
                             v-if="pwd_visible" style="right:41px">
                        <img class="visibility_off" src="../../static/img/ic_visibility.png" alt=""
                             @click="input_invisible">
                    </div>
                    <div class="sid">
                        <div><label for="sid">社保卡SID</label></div>
                        <input type="text" id="sid" placeholder="请输入社保卡SID" class="required" maxlength="" v-model="sid"
                               @keyup="change()">
                        <img src="../../static/img/clear.png" alt="" class="clear clearsid" v-if="sid" @click="clear5"
                             style="right:70px">
                        <div class="example" @click="example2">示例</div>
                    </div>
                    <div class="" style="height:15px;background:#E5E5E5;margin:0"></div>
                    <div class="bank">
                        <div><label for="bank">开户行</label></div>
                        <div class="inputBox" @click="selectBank"><input type="text" disabled  style="background:white" id="bank"
                               placeholder="请选择社保卡金融账户开户行" class="required" maxlength="" value="" v-model="bank"
                               @keyup="change()"></div>
                        <img src="../../static/img/Chevron.png" alt="" @click="selectBank" class="right_arrow">
                    </div>
                    <div class="account">
                        <div><label for="account">收款账户</label></div>
                        <input type="text" id="account" placeholder="请输入社保卡金融账户卡号" class="required" @blur="checkAccount"
                               maxlength="" v-model="account" @keyup="change()">
                        <img src="../../static/img/clear.png" alt="" class="clear clearaccount" v-if="account"
                             @click="clear6" style="right:70px">
                        <div class="example" @click="example3">示例</div>
                    </div>

                </div>
                <div class="activation" @click="activation($event)" :class="{activation1:isActive3}">立即激活</div>
                <div class="prompt">
                    <div class="title">温馨提示</div>
                    <ul>
                        <li>
                            <img src="../../static/img/Group1.png" alt="">
                            <div>社保卡线上激活功能目前只支持<strong style="color:#333333">城乡居民</strong>医保参保用户，<strong
                                style="color:#333333">城镇职工</strong>参保用户请持卡至医保定点医疗机构、定点药店进行激活。

                            </div>
                        </li>
                        <li>
                            <img src="../../static/img/Group2.png" alt="">
                            <div>社保卡初始密码为：123456，为了您的账户安全，请您在医保定点医疗机构就诊时修改密码。</div>
                        </li>
                        <li>
                            <img src="../../static/img/Group3.png" alt="">
                            <div>社保卡金融账户是您后期医疗费用报销时的收款账户，请您在填写时仔细核对。</div>
                        </li>
                        <li>
                            <img src="../../static/img/Group4.png" alt="">
                            <div>如您在社保卡激活过程中有任何疑问或问题，请及时联系客服人员，客服电话：0316-5900201。</div>
                        </li>
                    </ul>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <ul class="historyCell" v-if="isShow">
                    <li v-for="item in list" @click.prevent="detail(item.ID,item.StatusValue)">
                        <div class="top">
                            <div class="num">处理进度</div>
                            <div class="status">{{item.StatusName}}</div>
                        </div>
                        <div class="under">
                            <div class="name"><span>参保人</span>{{item.RealName}}</div>
                            <div class="idCard"><span>社保卡号</span>{{item.SINCardId}}</div>
                            <div class="data"><span>社会保障号</span>{{item.IdentityCard.length==18?item.IdentityCard.replace(/(\d{6})\d{8}(\d{4})/, "$1*******$2"):item.IdentityCard.replace(/(\d{6})\d{5}(\d{4})/, "$1*******$2")}}</div>
                        </div>
                        <div class="detail" @click.prevent="detail(item.ID,item.StatusValue)">查看详情</div>

                    </li>
                </ul>
                <div v-if="!isShow" class="historyNone">
                    <img src="../../static/img/history_none.png" alt="">
                    <div>未找到历史激活记录</div>
                </div>
            </mt-tab-container-item>
        </mt-tab-container>-->

        <mt-popup
            v-model="popupVisible1">
            <img src="../../static/img/cardNum.png" alt="" class="cardNum" @click="clickNone">
        </mt-popup>
        <mt-popup
            v-model="popupVisible2">
            <img src="../../static/img/SID.png" alt="" class="cardNum" @click="clickNone">
        </mt-popup>
        <mt-popup
            v-model="popupVisible3">
            <img src="../../static/img/account.png" alt="" class="cardNum" @click="clickNone">
        </mt-popup>

        <!-- <mt-actionsheet
             v-model="sheetVisible">
         <div class="selectBank">
             <mt-picker :slots="slots" @change="onValuesChange" ></mt-picker>
         </div>
         </mt-actionsheet>-->
        <mt-popup
            v-model="popupVisible"
            popup-transition="popup-fade"
            position="bottom">
            <div class="cancel" style="" @click="close">取消</div>
            <div class="cancel" style="" @click="close">确定</div>
            <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
        </mt-popup>
        <!-- <div style="position:fixed; bottom:0; background:white" v-if="popupVisible">取消</div>-->
        <!--<mt-datetime-picker
            ref="picker"
            type="time"
            v-model="pickerValue">
        </mt-datetime-picker>-->

    </div>
</template>

<script>
    import Bus from '../util/bus'
    import {Toast, MessageBox, Indicator} from 'mint-ui'
    import BScroll from 'better-scroll'
    /*import header from '../../src/components/header'*/
    import {activation, getHistoryList, getCardInfo, getConfig} from '../api/index'
    import config from '../api/config'

    export default {

        data() {
            return {
                list: [],
                isShowHome: true,
                isShow: true,
                slots: [
                    {
                        flex: 1,
                        values: [],
                        value1: [],
                        value: '',
                        defaultIndex: 1,
                        className: 'slot1',
                        textAlign: 'center',

                    }
                ],
                popupVisible: false,
                sheetVisible: false,
                selected: this.$route.query.tab || '1',
                active: 'tab-container1',
                popupVisible1: false,
                popupVisible2: false,
                popupVisible3: false,
                isActive1: false,
                isActive2: true,
                isActive3: false,
                pwd_invisible: '',
                pwd_visible: '',
                userName: '',
                idCard: '',
                cardNum: '',
                sid: '',
                bank: '',
                account: '',
                AccountCode: '',
                isBinding: '',
                showMsgbox1: '',
                isFirstSelect: true,


                activesel: '1',
                /*judgeName:false,
                judgeIdcard:false,
                judgePass:false,
                judgeAccount:false,*/

            }
        },
        mounted: function () {
            var _this = this;
            $('input').focus(function () {
                setTimeout(() => {
                    $(this).siblings('.clear').addClass('b')
                    $(this).siblings('.clear').removeClass('a')
                })
                //$(this).siblings('.clear').style.display='block'


            });
            $('input').blur(function () {
                setTimeout(() => {
                    $(this).siblings('.clear').removeClass('b')
                    $(this).siblings('.clear').addClass('a')
                })
            })
            new BScroll("#page1", {
                deceleration: 0.001,
                bounce: true,
                swipeTime: 10,
                click: true,
            });
            /* alert(this.$parent.a)*/

            getHistoryList({passwordId: 0}).then(function (res) {
                console.log(111)
                console.log(res)
                console.log(res.data.Data.SINCardActiveRecordList)
                _this.list = res.data.Data.SINCardActiveRecordList;
                console.log(BScroll)
                _this.$nextTick(() => {
                    new BScroll("#page2", {
                        deceleration: 0.001,
                        bounce: true,
                        swipeTime: 10,
                        click: true,
                    });
                })

                /*_this.$refs.page2.style.height=height+'px';*/

                if (_this.list.length == 0) {
                    _this.isShow = false;
                } else {
                    _this.isShow = true;
                }
            })
        },
        /*watch: {

        },*/
        beforeRouteEnter(to, from, next) {
            next(vm => {
                if (from.name == 'success' || from.name == 'activeSuccess') {
                    setTimeout(() => {
                        /*vm.selected = '2';
                        vm.active = '2';*/
                        $('.tab1').removeClass('selected')
                        $('.tab2').addClass('selected')
                        $('#page1').addClass('active')
                        $('#page2').removeClass('active')
                    })

                    // vm.$store.commit('changeFlag', false);
                    /* vm.RembursementList()*/
                }
            })
        },

        created: function () {
            var _this = this;
            /*var height=document.body.clientHeight;
            /!*_this.$refs.page2.style.height=height+'px';*!/
            if(height<600){
                $('#page2').addClass('.page2')
            }*/

            getCardInfo({passwordId: 0}).then(function (res) {
                _this.isShowHome = false
                if (!window.localStorage.getItem('box')) {
                    window.localStorage.setItem('box', 111)
                    _this.showMsgbox()
                }
                console.log(333);
                console.log(res);
                _this.isBinding = res.data.Data.SINCardIsBinding;
                /*if(res.data.Code==0){

                }*/
                if (res.data.IsSuccess) {
                    if (res.data.Data.IsBackFillData) {
                        _this.userName = res.data.Data.RealName;
                        _this.idCard = res.data.Data.IdentityCard;
                        _this.cardNum = res.data.Data.SINCardId;
                        _this.sid = res.data.Data.SINCardSid;
                    }
                }
            })


            /* this.slots.forEach(function(item,index){
                 console.log(item.name);*/
            getConfig().then(function (res) {
                /* var _this=this;*/
                console.log(res);
                console.log(res.data.Data.ConfigItems[2])
                var name = res.data.Data.ConfigItems[2];
                console.log(888);
                console.log(name)
                var i = name.length;
                var arr = [''];
                var code = ['']
                for (var j = 0; j < i; j++) {
                    arr.push(name[j].ConfigName);
                    code.push(name[j].ConfigNumber)
                }
                console.log(arr);
                _this.slots[0].values = arr;
                _this.slots[0].values1 = code;
                console.log(7777);
                console.log(_this.slots[0].values1)
            })
            /* })*/


        },
        watch: {
            userName: 'a',
            idCard: 'b',
            cardNum: 'c',
            pwd_invisible: 'd',
            pwd_visible: 'd',
            sid: 'e',
            account: 'f',

            selected: function (val, oldval) {
                this.activesel = val;
                switch (val) {
                    case '1':

                        break;
                    case '2':

                        break;
                }
            }
        },
        methods: {
            a: function () {
                if (this.userName.length !== 0) {
                    $('.clearName').removeClass('a')
                    $('.clearName').addClass('b')
                }
            },
            b: function () {
                if (this.idCard.length !== 0) {
                    /*$('.clearid').show()*/
                    $('.clearid').removeClass('a')
                    $('.clearid').addClass('b')
                }
            },
            c: function () {
                if (this.cardNum.length !== 0) {
                    /* $('.clearnum').show()*/
                    $('.clearnum').removeClass('a')
                    $('.clearnum').addClass('b')
                }
            },
            d: function () {
                if (this.pwd_visible.length !== 0 || this.pwd_invisible.length !== 0) {
                    /* $('.clearpass').show()*/
                    $('.clearpass').removeClass('a')
                    $('.clearpass').addClass('b')
                }
            },
            e: function () {
                if (this.sid.length !== 0) {
                    /* $('.clearsid').show()*/
                    $('.clearsid').removeClass('a')
                    $('.clearsid').addClass('b')
                }
            },
            f: function () {
                if (this.account.length !== 0) {
                    /*$('.clearaccount').show()*/
                    $('.clearaccount').removeClass('a')
                    $('.clearaccount').addClass('b')
                }
            },
            clickNone: function () {
                this.popupVisible1 = false;
                this.popupVisible2 = false;
                this.popupVisible3 = false;
            },
            tab1: function () {
                $('.tab2').removeClass('selected')
                $('.tab1').addClass('selected');
                $('#page2').addClass('active')
                $('#page1').removeClass('active')
                new BScroll("#page1", {
                    deceleration: 0.001,
                    bounce: true,
                    swipeTime: 10,
                    click: true,
                });
            },
            tab2: function () {
                // $('#2').removeClass('active');
                $('.tab1').removeClass('selected')
                $('.tab2').addClass('selected')
                $('#page1').addClass('active')
                $('#page2').removeClass('active')
                new BScroll("#page2", {
                    deceleration: 0.001,
                    bounce: true,
                    swipeTime: 10,
                    click: true,
                });
            },
            close: function () {
                this.popupVisible = false
            },
            checkName: function () {

            },
            checkIdcard: function () {
                //身份证验证

            },
            checkPass: function () {

            },
            checkAccount: function () {
                
            },
            clear1: function () {
                /* console.log($('.clear').sibling())*/
                this.userName = ''
            },
            clear2: function () {
                /* console.log($('.clear').sibling())*/
                this.idCard = ''
            },
            clear3: function () {
                /* console.log($('.clear').sibling())*/
                this.cardNum = ''
            },
            clear4: function () {
                /* console.log($('.clear').sibling())*/
                this.pwd_invisible = ''
                this.pwd_visible = ''
            },
            clear5: function () {
                /* console.log($('.clear').sibling())*/
                this.sid = ''
            },
            clear6: function () {
                /* console.log($('.clear').sibling())*/
                this.account = ''
            },
            showMsgbox() {
                var _this = this;
                _this.$messagebox.alert('社保卡线上激活功能目前只支持城乡居民医保参保用户，城镇职工参保用户请持卡到医保定点医疗机构、定点药店进行激活', '温馨提示')

            },
            onValuesChange: function (picker, values) {
                if (values[0] > values[1]) {
                    picker.setSlotValue(1, values[0]);
                }

                this.bank = values[0];

                var len = this.slots[0].values.length;
                for (var i = 0; i < len; i++) {
                    if (this.slots[0].values[i] == this.bank) {
                        this.AccountCode = this.slots[0].values1[i]
                        console.log(this.AccountCode)
                        return i
                    }
                }

            },
            /* bank1:function(){
                 this.bank=this.actions[0].name;
                 this.AccountCode=this.actions[0].CashAccountCode;
             },
             bank2:function(){
                 this.bank=this.actions[1].name;
                this.AccountCode=this.actions[1].CashAccountCode
             },
             bank3:function(){
                 this.bank=this.actions[2].name
                 this.AccountCode=this.actions[2].CashAccountCode
             },
             bank4:function(){
                 this.bank=this.actions[3].name
                 this.AccountCode=this.actions[3].CashAccountCode

             },
             bank5:function(){
                 this.bank=this.actions[4].name
                 this.AccountCode=this.actions[4].CashAccountCode

             },
             bank6:function(){
                 this.bank=this.actions[5].name
                 this.AccountCode=this.actions[5].CashAccountCode

             },
             bank7:function(){
                 this.bank=this.actions[6].name
                 this.AccountCode=this.actions[6].CashAccountCode

             },*/
            example1: function () {
                this.popupVisible1 = true;
            },
            example2: function () {
                this.popupVisible2 = true
            },
            example3: function () {
                this.popupVisible3 = true;
            },
            example4: function () {

            },
            selectBank: function () {
                this.sheetVisible = true;
                this.popupVisible = true;
                /*this.$refs.picker.open();*/
            },
            input_visible: function () {
                this.isActive1 = true;
                this.isActive2 = false;
                this.pwd_visible = this.pwd_invisible
            },
            input_invisible: function () {
                this.isActive1 = false;
                this.isActive2 = true;
                this.pwd_invisible = this.pwd_visible
            },
            detail: function (id, value) {

                this.$router.push({name: 'success', params: {ID: id}})

            },
            activation: function (event) {
                var _this = this;

                if (this.userName.length !== 0 && this.idCard.length !== 0 && this.cardNum.length !== 0 && this.pwd_invisible.length !== 0 && this.sid.length !== 0 && this.bank.length !== 0 && this.account.length !== 0) {

                } else if (this.userName.length !== 0 && this.idCard.length !== 0 && this.cardNum.length !== 0 && this.pwd_visible.length !== 0 && this.sid.length !== 0 && this.bank.length !== 0 && this.account.length !== 0) {

                } else {
                    return false
                }

                var name = this.userName;
                if (name.length >= 10) {
                    /*Toast({
                        message: '您输入的姓名不规范，请重新输入',
                        position: 'bottom',
                        duration: 2000
                    });*/
                    MessageBox({
                        title: '温馨提示',
                        message: '您输入的姓名不规范，请重新输入',
                        //position: 'bottom',
                        /* showCancelButton: true*/
                    });
                    return false;
                }
                var c = this.idCard;
                var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
                if (reg.test(c) === false) {

                    MessageBox({
                        title: '温馨提示',
                        message: '您输入的身份证号不规范，请重新输入',
                        //position: 'bottom',
                        /* showCancelButton: true*/
                    });
                    return false;
                }
                //验证密码
                var pass = this.pwd_visible || this.pwd_invisible;
                var reg1 = /^\d+$/;
                if (reg1.test(pass) === false || pass.length !== 6) {

                    MessageBox({
                        title: '温馨提示',
                        message: '社保卡密码为6位数字，请重新输入',
                        //position: 'bottom',
                        /* showCancelButton: true*/
                    });
                    return false
                }

                //验证金融账户
                var account = this.account;
                var first = account.substr(0, 1);
                if (reg1.test(account) && account.length >= 16 && account.length <= 19 && first !== '0') {

                } else {
                    /*Toast({
                        message: '您输入的社保卡金融账户不规范，请重新输入',
                        position: 'bottom',
                        duration: 2000
                    });*/
                    MessageBox({
                        title: '温馨提示',
                        message: '您输入的收款账户不规范，请重新输入',
                        //position: 'bottom',
                        /* showCancelButton: true*/
                    });
                    return false
                }
                Indicator.open({
                    text: '激活中，请稍等...',
                    spinnerType: 'fading-circle'
                });
                var data = {};
                /*var b=new Base64();*/
                data.RealName = _this.userName;
                data.IdentityCard = _this.idCard;
                data.SinCard = _this.cardNum;
                /*data.SinPwd =b.encode( _this.pwd_invisible || _this.pwd_visible);*/
                data.SinPwd = _this.pwd_invisible || _this.pwd_visible;
                data.SinSid = _this.sid;
                data.CashAccount = _this.account;
                data.CashAccountName = _this.bank;
                data.CashAccountCode = _this.AccountCode;
                data.PasswordId = 0;
                this.$parent.form = data;
                console.log(444444);
                console.log(this.$parent.form);
                /* if(_this.judgeName&&_this.judgeIdcard&&_this.judgePass&&_this.judgeAccount) {*/
                //console.log(_this.userName)
                activation(data).then(function (res) {
                    /*console.log(2222)*/
                    console.log(res);
                    Indicator.close();
                    if (res.data.IsSuccess) {

                    } else {
                        MessageBox({
                            title: '温馨提示',
                            message: res.data.Message,
                            //position: 'bottom',
                            /* showCancelButton: true*/
                        });
                    }

                    if (res.data.Code == -1018) {
                        _this.$router.push('/selectPaperwork');
                        _this.$parent.code = res.data.Code;
                        _this.$parent.isShowImg = ''
                    }

                    if (res.data.Code == -1008) {
                        _this.$router.push('/selectPaperwork')
                    }
                    if (res.data.IsSuccess) {
                        if (_this.isBinding) {
                            _this.$router.push('/alreadyBind')
                        } else {
                            _this.$router.push('/noBind')
                        }
                    }


                });

                Bus.$emit('getTarget', data);


            },
            change: function () {
                if (this.userName.length !== 0 && this.idCard.length !== 0 && this.cardNum.length !== 0 && this.pwd_invisible.length !== 0 && this.sid.length !== 0 && this.bank.length !== 0 && this.account.length !== 0) {
                    this.isActive3 = true;
                } else if (this.userName.length !== 0 && this.idCard.length !== 0 && this.cardNum.length !== 0 && this.pwd_visible.length !== 0 && this.sid.length !== 0 && this.bank.length !== 0 && this.account.length !== 0) {
                    this.isActive3 = true;
                }
                else {
                    this.isActive3 = false
                }

            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    * {
        box-sizing: border-box;
    }

    body {
        /* background:#E5E5E5;*/
    }

    .active {
        display: none
    }

    .headline {
        font-size: 0;
        background: white;
        display: flex;
        justify-content: space-around;
        position: fixed;
        width: 100%;
        z-index: 100;
        border-bottom: 1px solid #E5E5E5
    }

    .tab1, .tab2 {
        display: inline-block;
        height: 40px;
        background: white;
        line-height: 40px;
        font-size: 16px;
        padding: 0 10px;

    }

    .selected {
        color: #00AE66;
        border-bottom: 2px solid #00AE66;
    }

    //input::-ms-clear { display: none; }
    //input:valid + .clear { display: inline; }
    #app .a {
        display: none;
    }

    #app .b {
        display: inline-block;
    }

    #page1 {
        height: 100%;
    }

    .selectBank {
        background: white
    }

    #page2 {

        height: 100%;
    }

    .page2 {
        height: 100%;
    }

    /* #app .page3{
        !* height:520px;*!
     }*/
    .home {
        height: 100%;
        overflow: hidden;
    }

    /*#2 {
        height: 100%
    }*/
    .cancel {
        display: inline-block;
        border-bottom: 1px solid #E5E5E5;
        width: 50%;
        font-size: 16px;
        height: 35px;
        line-height: 35px;
        color: #00AE66
    }

    .warning {
        background: #FFF7EB;
        /* height: 53px;*/
        padding: 10px 10px 10px 15px;
        text-align: left;
        display: flex;
        align-items: center;
    }

    .warning img {
        height: 13px;
        width: 13px;
        vertical-align: top;

    }

    .warning div {
        display: inline-block;
        font-size: 12px;
        margin-left: 6px;
        text-align: left;
        color: #FBB640
    }

    //form表单
    #app .inputBox {
        width: 75%
    }

    #app .inputBox input {
        width: 100%
    }

    .form {
        height: 323px;
        background: white;
    }

    .form input {
        border: 0;
        height: 43px;
        font-size: 14px;
        width: 75%;
        color: #333333
    }

    .clear {
        position: absolute;
        right: 20px;
        top: 50%;
        width: 15px;
        margin-top: -7px;
        display: none;
    }

    .form > div {
        border-bottom: 1px solid #E5E5E5;
        margin-left: 15px;
        text-align: left;
        font-size: 0;
        position: relative;

    }

    .form div div {
        display: inline-block;
        width: 25%;
        font-size: 14px;
        color: #333333
    }

    .form .card, .form .sid, .form .account {
        position: relative;
    }

    #app .sid, #app .account {
        margin-left: 0;
        padding-left: 15px;
    }

    .form .example {
        position: absolute;
        width: 62px;
        right: 0;
        text-align: center
    }

    .form .password {
        position: relative;
    }

    .form .password img {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        margin-right: 28px;
    }

    .prompt {
        background: #E5E5E5;
        text-align: left;
        padding: 20px
    }

    .prompt .title {
        color: #333333;
        font-size: 16px;
    }

    .prompt img {
        height: 14px;
        width: 14px;
        margin-right: 9px;
        margin-top: 4px;
    }

    .prompt li {
        list-style: none;
        margin-top: 15px;
        display: flex;
    }

    .prompt li div {
        display: inline-block;
        color: #666666;
        font-size: 14px;
    }

    .home {
        background: #E5E5E5;
        position: relative;
        /*height: 100%*/
    }

    .pwd_visible, .pwd_invisible {
        display: none;
    }

    .historyNone {
        height: 100%;
        /* background: white;*/
    }

    .historyNone div {
        color: #999999;
        font-size: 18px;
        margin-top: 26px;
    }

    .historyNone img {
        margin-top: 85px;
        height: 123px;
        width: 105px;
    }

    .historyCell {
        background: #E5E5E5;
        /* height: 100%;*/
    }

    .historyCell li {
        margin-top: 35px;
        /* height:176px;*/
        list-style: none;
        /*margin-bottom:20px;*/
        background: white;
    }

    .historyCell li .top {
        height: 59px;
        margin-left: 15px;
        border-bottom: 1px solid #E5E5E5;
        line-height: 59px;
        display: flex;
        justify-content: space-between;
        margin-top: -18px;
    }

    .historyCell .top .status {
        /* display:inline-block;*/
        margin-right: 15px;
        font-size: 21px;
        font-family: PingFangSC-Regular;
    }

    .historyCell .under {
        margin-left: 15px;
        text-align: left;
        margin-top: 15px;
        /*line-height:28px;*/

    }

    .historyCell .under {
        color: #888888;
        font-size: 14px;
        font-family: PingFangSC-Regular;
        padding-right: 15px;
        padding-bottom: 10px;

    }

    .historyCell .under .name, .historyCell .under .idCard, .historyCell .under .data {
        display: flex;
        justify-content: space-between;
        margin-bottom: 11px;
    }

    .detail {
        border-top: 1px solid #E5E5E5;
        height: 47px;
        line-height: 47px;
        color: #00AE66;
        font-size: 15px;
    }

    .bank {
        position: relative;
    }

    .right_arrow {
        height: 13px;
        width: 8px;
        position: absolute;
        right: 15px;
        top: 50%;
        margin-top: -6px;
    }

    .form {
        height: 323px;
    }

    .form .visibility_off {
        /*height:13px;*/
        width: 15px;
        margin-right: 29px;
    }

    .example {
        /*padding:0 20px;*/
        border-left: 1px solid #E5E5E5;
        height: 44px;
        line-height: 44px;
        color: #00AE66 !important;
    }

    .cardNum {
        width: 100%;
        /*height: 173px;*/
    }

    .activation {
        width: 90%;
        height: 47px;
        color: white;
        background: #00AE66;
        line-height: 47px;
        border-radius: 5px;
        margin: 0 auto;
        margin-top: 25px;
        opacity: 0.4;
    }

    .activation1 {
        opacity: 1;
    }


</style>
