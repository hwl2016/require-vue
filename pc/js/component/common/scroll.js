/**
 * Created by huwl on 2018/3/26.
 */
define(['vue', 'BScroll', 'text!./component/common/scroll.html'], function (Vue, BScroll, tpl) {
    var scroll = Vue.extend({
        props: {
            // 以怎样的速度拖动才能触发
            probeType: {
                type: Number,
                default: 1
            },
            // 是否可点击
            click: {
                type: Boolean,
                default: true
            },
            // 数据可能是动态变化 而进行refresh
            data: {
                type: Array,
                default: null
            },
            // 是否监听滚动事件
            listenScroll: {
                type: Boolean,
                default: false
            }
        },
        template: tpl,
        mounted() {
            setTimeout(() => {
                this._initScroll()
        }, 20)
        },
        methods: {
            _initScroll() {
                if (!this.$refs.wrapper) {
                    return
                }
                this.scroll = new BScroll(this.$refs.wrapper, {
                    probeType: this.probeType,
                    click: this.click
                })
                if (this.listenScroll) {
                    let me = this
                    this.scroll.on('scroll', (pos) => {
                        // 将scroll事件派发出去
                        me.$emit('scroll', pos)
                })
                }
            },
            enable() {
                this.scroll && this.scroll.enable()
            },
            disable() {
                this.scroll && this.scroll.disable()
            },
            refresh() {
                this.scroll && this.scroll.refresh()
            },
            scrollTo() {
                this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
            },
            scrollToElement() {
                this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
            }
        },
        watch: {
            data() {
                // 延时的目的是为了防止数据到dom时还没来得及渲染
                setTimeout(() => {
                    this.refresh()
                }, 20)
            }
        }
    })

    Vue.component('scroll', scroll)
})