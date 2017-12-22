<!--
<template>
<div class="uploadIdcard">
    <ul>
        <li>
            <div>1.参保人手持身份证及社保卡照片</div>
        </li>
        <li>
            <div>2.参保人身份证正面照片</div>
        </li>
        <li>
            <div>3.参保人身份证背面照片</div>
        </li>
    </ul>
</div>
</template>

<script>
    export default {
        name: "upload-idcard"
    }
</script>

<style scoped>

</style>
-->


<!--上传图片-->
<template>
    <div class="uploadIdcard">
        <ul>
            <li>
                <div>1.参保人手持身份证及社保卡照片</div>
                <div>
                    <div><img src="../../static/img/upload.png" alt=""></div>
                    <!--<img :src="" alt="">-->
                </div>
            </li>
            <li>
                <div>2.参保人身份证正面照片</div>
                <div>
                    <img src="../../static/img/upload.png" alt="">
                   <!-- <img :src="" alt="">-->
                </div>
            </li>
            <li>
                <div>3.参保人身份证背面照片</div>
                <div>
                    <img src="../../static/img/upload.png" alt="">
                    <!--<img :src="" alt="">-->
                </div>
            </li>
        </ul>
    </div>
        <!-- <input type="file" v-show="false" id="file">-->
       <!-- <yd-actionsheet :items="myItems1" v-model="show" cancel="取消"></yd-actionsheet>-->
</template>

<script>


    /*export default {


        data(){
            return {
                picList: [],
                show: false,
                urlArr: [],
                myItems1: [
                    {
                        label: '手机拍照',
                        method: () => {
                            this.$dialog.toast({mes: '咔擦，此人太帅！'});
                            /!* 注意： method: function() {} 和 method() {}  这样是无法正常使用当前this的 *!/
                        }
                    },
                    {
                        label: '手机相册',
                        method: () => {
                            this.inputFile();
                        }
                    }
                ]
            }
        },
        created(){

        },
        methods: {
            dialogShow(){
                this.show = true;
            },
            inputFile(){
                var _this = this;
                var input = openFile('myFile', 'image/!*');
                input.onchange = function () {
                    console.log(input.files[0]);
                    if(input.files.length==0){
                        return;
                    }
                    var f = this.files[0];
                    var fr = new FileReader();
                    fr.readAsDataURL(f);
                    fr.onload = function () {
                        var base = this.result.split(',')[1];
                        _this.picList.push(this.result);
                        Indicator.open();
                        var data = new FormData();
                        data.append('myFile', base);
                        uploadImage(data).then(function (res) {
                            console.log(res);
                            if(res.data.url){
                                _this.urlArr.push(res.data.url);
                                Indicator.close();

                            }


                        })
                    }


                }
            },
            submit(){
                var _this=this;
                var data = new FormData();
                data.append('pic_list', this.urlArr);
                if (this.t == 'impress') {
                    saveImpress(data).then(function (res) {
                        _this.$dialog.toast({
                            mes: res.data.msg
                        });
                        console.log(res);
                        if(res.data.code){
                            _this.$router.push({name:'checkStatus',params:{type:_this.t}})
                        }
                    })
                } else if (this.t == 'report') {
                    saveReport(data).then(function (res) {
                        _this.$dialog.toast({
                            mes: res.data.msg
                        });
                        if(res.data.code){
                            _this.$router.push({name:'checkStatus',params:{type:_this.t}})
                        }
                    })
                } else if (this.t == 'summary') {
                    data.append('comment_id',localStorage.getItem('commentId'));
                    submitSummary(data).then(function (res) {
                        _this.$dialog.toast({
                            mes: res.data.msg
                        });
                    })
                }
            }

        }
    }*/
</script>

<style scoped>

</style>

