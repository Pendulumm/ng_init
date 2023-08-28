import { Pipe } from "@angular/core";

@Pipe({
    name: "sex"     // 过滤器/管道名
})
export class SexPipe {
    // 管道中实行过滤任务的是一个固定的函数
    // transform(val:number) {
    //     if(val === 1) {
    //         return "男";
    //     }else if(val === 0) {
    //         return "女";
    //     }else {
    //         return "未知";
    //     }
    // }
    transform(val: number, lang = 'zh') {
        if (lang == 'zh') {
            if (val === 1) {
                return "男";
            } else if (val === 0) {
                return "女";
            } else {
                return "未知";
            }
        } else if (lang == 'en') {
            if (val === 1) {
                return "male";
            } else if (val === 0) {
                return "female";
            } else {
                return "unknown";
            }
        }

        return 'error';
    }
}