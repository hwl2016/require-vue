/**
 * Created by huwl on 2018/3/21.
 */
define(['jquery', 'axios'], function ($, axios) {
    return {
        getList: function () {
            var url = 'https://www.easy-mock.com/mock/5ab50fe0231be10258fcdebb/economic/user';
            var def = $.Deferred();
            $.ajax({
                url: url,
                type: 'get'
            }).done(function (d) {
                return def.resolve(d);
            });
            return def;
        },

        getUserList: function () {
            var url = 'https://www.easy-mock.com/mock/5ab50fe0231be10258fcdebb/economic/user';
            return axios.get(url).then(function (d) {
                return Promise.resolve(d.data);
            });

        }
    }
})