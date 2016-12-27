/**
 * Created by jessietang on 12/27/2016.
 */

// 初始化了平台，让你的代码可以运行，然后在该平台上启动你的 AppModule
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
