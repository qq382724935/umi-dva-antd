/*
 * @Date: 2019-09-06 15:23:19
 * @LastEditors: 刘利军
 * @LastEditTime: 2019-09-06 15:23:19
 */
export default {
    routes: [
        {
            path: '/',
            component: '../layouts/index',
            routes: [
                {
                    path: '/', component: 'index',
                },
                {
                    path: '/user',
                    routes: [
                        { path: '/user/ordinary', component: 'User/Ordinary' },
                        { path: '/user/vip', component: 'User/Vip' },
                        { path: '/user/male', component: 'User/Male' },
                    ]
                },
                {
                    path: '/admin',
                    routes: [
                        { path: '/admin/menuAdmin', component: 'Admin/Menu' },
                    ]
                }
            ]
        },

    ]
}