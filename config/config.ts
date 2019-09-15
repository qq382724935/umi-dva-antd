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
        dll: true,
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
    targets: {
        ie: 11,
    },
    // devtool: 'source-map',
    routes,
    ignoreMomentLocale: true,
    // less版本3以上需要开启此配置
    // lessLoaderOptions: {
    //     javascriptEnabled: true,
    // },
    disableRedirectHoist: true,
    manifest: {
        basePath: '/',
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
