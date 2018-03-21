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
        created: function () {
            this.getList();
        },
        template: template,
        methods: {
            call: function (name) {
                console.log(name)
            },
            getList: function () {
                var _this = this;
                aaaDataIndex.getList().then(function (d) {
                    _this.list = d;
                })
            }
        }
    };

    Vue.component('bbb', bbb);

})