/**
 * Created by huwl on 2018/3/21.
 */
define(['vue', 'text!./component/aaa/tpl.html', 'aaaDataIndex'],
    function (Vue, template, aaaDataIndex) {

    var aaa = {
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
                alert(name)
            },
            getList: function () {
                var _this = this;
                aaaDataIndex.getList().then(function (d) {
                    _this.list = d;
                })
            }
        }
    };

    Vue.component('aaa', aaa);

})