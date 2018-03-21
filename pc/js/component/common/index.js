/**
 * Created by huwl on 2018/3/21.
 */
define(['vue', 'text!./component/common/tpl.html', 'aaaCompIndex', 'bbbCompIndex'],
    function (Vue, template, aaaCompIndex, bbbCompIndex) {

    var app = new Vue({
        el: '#app',
        template: template
    });

    Vue.component('app', app);

})