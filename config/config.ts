/*
 * @Date: 2019-09-06 14:47:44
 * @LastEditors: 刘利军
 * @LastEditTime: 2019-09-30 14:41:41
 */
import { IConfig, IPlugin } from 'umi-types';
import routesConfig from './routes';
const { routes } = routesConfig;
const plugins: IPlugin[] = [
    ['umi-plugin-react', {
        antd: true,
        dva: { immer: true },
        dynamicImport: {
            webpackChunkName: true,
            level: 3,
        },
        title: 'b2b-front',
        dll: {
            exclude: ['to', 'update']
        },
        routes: {
            exclude: [
                /models\//,
                /services\//,
                /model\.(t|j)sx?$/,
                /service\.(t|j)sx?$/,
                /components\//,
            ],
        },
    }],
];

export default {
    plugins,
    treeShaking: true,
    hash: true,
    history: 'hash',
    targets: {
        ie: 11,
    },
    // devtool: 'source-map',
    // routes,
    ignoreMomentLocale: true,
    // less版本3以上需要开启此配置
    // lessLoaderOptions: {
    //     javascriptEnabled: true,
    // },
    disableRedirectHoist: true,
    manifest: {
        basePath: '/',
    },
    base: '/',
    publicPath: '/',
    define: {
        USE_MODE: process.env.NODE_ENV,
    },
    /*
    proxy: {
      '/server/api/': {
        target: 'https://preview.pro.ant.design/',
        changeOrigin: true,
        pathRewrite: { '^/server': '' },
      },
    },
    */
} as IConfig;
