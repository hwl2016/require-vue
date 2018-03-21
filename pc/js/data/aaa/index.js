/**
 * Created by huwl on 2018/3/21.
 */
define(['jquery'], function ($) {
    return {
        getList: function () {
            var def = $.Deferred();
            setTimeout(function () {
                var d = [
                    {
                        id: 101,
                        name: 'Mark',
                        age: 18
                    },
                    {
                        id: 102,
                        name: 'Tom',
                        age: 16
                    },
                    {
                        id: 103,
                        name: 'Smith',
                        age: 17
                    },
                    {
                        id: 104,
                        name: 'Jack',
                        age: 18
                    }
                ];
                def.resolve(d);
            }, 1000);
            return def;
        }
    }
})