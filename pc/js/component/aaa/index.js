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
        mounted: function () {
            this.getList();
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