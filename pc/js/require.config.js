/**
 * Created by huwl on 2018/3/21.
 */
var paths = {
    'jquery': 'libs/jquery-1.11.1.min',
    '_': 'libs/underscore-min',
    'vue': 'libs/vue',
    'vuex': 'libs/vuex.min',
    'vrouter': 'libs/vue-router.min',
    'text': 'libs/text',

    'index': 'component/common/index',

    'aaaCompIndex': 'component/aaa/index',
    'bbbCompIndex': 'component/bbb/index',
    'cccCompIndex': 'component/ccc/index',

    'aaaDataIndex': 'data/aaa/index',
    'bbbDataIndex': 'data/bbb/index',
    'cccDataIndex': 'data/ccc/index'

};

require.config({
    baseUrl: '../pc/js/',
    urlArgs: 'v=1.0',
    paths: paths,
    shim: {},
    config: {
        text: {
            onXhr: function (xhr, url) {
                xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
            }
        }
    }
});