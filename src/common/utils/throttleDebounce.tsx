// import { debounce } from 'lodash';

// class throttleDebounce {
//     /**
//      * @desc 函数防抖
//      * @param func 函数
//      * @param wait 延迟执行毫秒数
//      * @param immediate true 表立即执行，false 表非立即执行
//      */
//     debounce(func: any, wait: number, immediate: boolean) {
//         let timeout: any;
//         return () => {
//             let args = arguments;
//             if (timeout) clearTimeout(timeout);
//             if (immediate) {
//                 let callNow = !timeout;
//                 timeout = setTimeout(function () {
//                     timeout = null;
//                 }, wait)
//                 if (callNow) func.apply(this, args)
//             }
//             else {
//                 timeout = setTimeout(() => {
//                     func.apply(this, args)
//                 }, wait);
//             }
//         }
//     }

//     // 节流
//     throttle = (func: any, wait: number, ...args: any[]) => {
//         let timeOut: any;
//         return () => {
//             if (timeOut) clearTimeout(timeOut);
//             timeOut = setTimeout(() => {
//                 func.apply(this, args);
//             }, wait);
//         }
//     }
// }

// export { throttleDebounce.debounce };