import { Injectable } from "@angular/core";

// 所有的服务对象都是 "可被注入的"
@Injectable({
    providedIn: "root"      // 指定当前服务对象在 "根模块"  中提供     (AppModule)
})
export class LogService {
    // 执行日志记录功能
    doLog(action: string) {
        let uname = 'admin4';
        let time = new Date().getTime();
        console.log(`管理员: ${uname},时间: ${time},行为: ${action}`);
    }
}