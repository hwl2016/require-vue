/**
 * Created by huwl on 2018/3/21.
 */
define(['vue', 'text!./component/bbb/tpl.html', 'aaaDataIndex'],
    function (Vue, template, aaaDataIndex) {

    var bbb = {
        data: function() {
            return {
                list: []
            }
        },
        mounted: function () {
            this.getList();
        },
        template: template,
        methods: {
            call: function (name) {
                console.log(name)
            },
            getList: function () {
                var _this = this;
                aaaDataIndex.getUserList().then(function (d) {
                    _this.list = d.data;
                })
            }
        }
    };

    Vue.component('bbb', bbb);

})