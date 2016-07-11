<template lang="html">
    <div>
        <div class="tp-out">
            <input type="text" class="input" placeholder="请选择时间" @focus="show=true" :value="out">
        </div>

        <div class="tp" v-show="show" v-el:tp transition="slide">
            <div class="tp-header">
                <input placeholder="请选择时间" :value="out">
                <i class="iconfont icon-crosscircle" @click="show=false"></i>
            </div>
            <div class="tp-body">
                <ul v-el:h>
                    <li v-for="n in h" :class="{'tp-active': n == sh}" @click="click(n, 'h')">{{n}}</li>
                </ul>
                <div class="tp-line"></div>
                <ul v-el:m>
                    <li v-for="n in m" :class="{'tp-active': n == sm}" @click="click(n, 'm')">{{n}}</li>
                </ul>
                <div class="tp-line"></div>
                <ul v-el:s>
                    <li v-for="n in s" :class="{'tp-active': n == ss}" @click="click(n, 's')">{{n}}</li>
                </ul>
            </div>
        </div>

    </div>
</template>


<script>
    export default {
        props: {
            val: {
                coerce: function (val) {

                    if (!val) return ''

                    if (val.indexOf(':') != -1) {

                        // val = ('0' + n.getHours()).slice(-2) + ':' + ('0' + n.getMinutes()).slice(-2) + ':' + ('0' + n.getSeconds()).slice(-2)
                        let sp = val.split(':')
                        val = parseInt(sp[0]) + ':' + parseInt(sp[1]) + ':' + parseInt(sp[2])
                    }


                    return val
                }
            }
        },
        data(){

            var sp = this.val.split(':')

            if (!this.val) sp = [-1, -1, -1]

            return {
                sh: sp[0],
                sm: sp[1],
                ss: sp[2],
                show: false,
                op: false
            }
        },
        ready(){
            this.$els.h.scrollTop = this.sh * 24
            this.$els.m.scrollTop = this.sm * 24
            this.$els.s.scrollTop = this.ss * 24


            this.$els.tp.addEventListener('click', function (e) {
                e.stopPropagation()
                return false
            })


            document.body.addEventListener('click', function () {
                this.show = false
                // if(this.show){
                //   this.show = false
                // }
            }.bind(this))
        },
        computed: {
            h(){
                return 24
            },
            m(){
                return 60
            },
            s(){
                return 60
            },
            out(){
                if (!this.val) return ''
                let sp = this.val.split(':')

                return ('0' + sp[0]).slice(-2) + ':' + ('0' + sp[1]).slice(-2) + ':' + ('0' + sp[2]).slice(-2)
            }
        },
        watch: {
            val(val){
                if (this.op) {

                    this.$dispatch('time-change', this.val)

                } else {
                    //外部赋值
                    if (val) {
                        let sp = val.split(':')
                        this.sh = parseInt(sp[0])
                        this.sm = parseInt(sp[1])
                        this.ss = parseInt(sp[2])
                        this.$els.h.scrollTop = this.sh * 24
                        this.$els.m.scrollTop = this.sm * 24
                        this.$els.s.scrollTop = this.ss * 24
                    } else {
                        this.clear()
                    }

                }

                this.op = false

            }
        },
        methods: {
            click(num, type){
                this.op = true
                this['s' + type] = num
                this.scroll(num, type)
                this.change()

            },
            scroll(num, type){

                var dom = this.$els[type]

                requestAnimationFrame(step)
                function step() {
                    var pg = num * 24 - dom.scrollTop
                    if (pg > 0) {
                        dom.scrollTop += 12
                        requestAnimationFrame(step)
                    } else if (pg < -12) {
                        dom.scrollTop -= 12
                        requestAnimationFrame(step)
                    } else {
                        dom.scrollTop += pg
                    }
                }
            },
            change(){
                if (this.sh == -1) {
                    this.sh = 0
                }
                if (this.sm == -1) {
                    this.sm = 0
                }
                if (this.ss == -1) {
                    this.ss = 0
                }

                let val = ('0' + this.sh).slice(-2) + ':' + ('0' + this.sm).slice(-2) + ':' + ('0' + this.ss).slice(-2)

                this.val = val

            },
            clear(){
                this.sh = -1
                this.sm = -1
                this.ss = -1
                this.op = false
                this.$els.h.scrollTop = 0
                this.$els.m.scrollTop = 0
                this.$els.s.scrollTop = 0
                this.val = ''
            }
        }
    }


</script>


<style style="scss">

    .tp {
        width: 168px;
        height: 178px;
        border-radius: 6px;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.17);
        border: 1px solid #ccc;
        line-height: 1.5;
        background: #fff;
        position: absolute;
        top: -2px;
        left: -2px;
        z-index: 102;
    }

    .tp-header {
        padding: 6px;
        position: relative;
        border-bottom: 1px solid #e9e9e9;
        input {
            margin: 0;
            padding: 0;
            border: 0;
            width: 100%;
            cursor: auto;
            line-height: 1.5;
            outline: 0;
            color: #666;
            &::selection {
                background: #4BB8FF;
                color: #fff;
            }
        }
        i {
            position: absolute;
            right: 10px;
            top: 6px;
            font-size: 12px;
            color: #ccc;
            transition: color ease .3s;
            cursor: pointer;
            &:hover {
                color: #999;
            }
        }
    }

    .tp-body {
        ul {
            float: left;
            height: 144px;
            width: 55px;
            overflow-y: scroll;

            .tp-active {
                background: #f7f7f7;
                font-weight: 700;

                &:hover {
                    background: #f7f7f7;
                }
            }
            li {
                height: 24px;
                line-height: 24px;
                text-align: center;
                transition: background 0.3s ease;
                cursor: pointer;
                &:hover {
                    background: #eaf8fe;
                }
            }
            &:after {
                content: '';
                display: block;
                height: 120px;

            }
        }
        .tp-line {
            float: left;
            width: 1px;
            height: 144px;
            background: #e9e9e9
        }
    }

</style>