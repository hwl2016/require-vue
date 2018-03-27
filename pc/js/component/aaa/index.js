/**
 * Created by huwl on 2018/3/21.
 */
define(['vue', 'text!./component/aaa/tpl.html', 'aaaDataIndex', 'BScroll'],
    function (Vue, template, aaaDataIndex, BScroll) {

    var aaa = {
        data: function() {
            return {
                list: []
            }
        },
        created: function () {
            var _this = this;
            setTimeout(function () {
                _this.getList();
            }, 20);
        },
        mounted: function () {
            var _this = this;
            var options = {
                scrollY: true
            }
            setTimeout(function () {
                if (!_this.scroll) {
                    _this.scroll = new BScroll(_this.$refs.wrapper, options)
                    console.log(_this.scroll)
                }
            }, 300);
            // this.$nextTick(function() {
            //     if (!_this.scroll) {
            //         _this.scroll = new BScroll(_this.$refs.wrapper, {})
            //         console.log(_this.scroll)
            //     }
            // })
        },
        template: template,
        methods: {
            call: function (name) {
                alert(name)
            },
            getList: function () {
                var _this = this;
                aaaDataIndex.getUserList().then(function (d) {
                    if(d.code === 200)
                        _this.list = d.data;
                })
            }
        }
    };

    Vue.component('aaa', aaa);

})