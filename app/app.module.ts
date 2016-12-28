/**
 * Created by jessietang on 12/27/2016.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
/*因为模板驱动的表单有它们自己的模块，所以我们得把 FormsModule 添加到本应用的 imports 数组中，
这样我们才能使用表单。*/
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {SiteFormComponent} from './site-form.component';
import {GrammarExercise} from './grammar-exercise.component';


@NgModule({
    imports: [BrowserModule,FormsModule],/*本模块组件模板中需要由其它导出类的模块*/
    declarations:[AppComponent,SiteFormComponent,GrammarExercise],
    bootstrap: [AppComponent]/*应用的主视图，称为根组件，它是所有其它应用视图的宿主。
     只有根模块需要设置 bootstrap 属性中*/
})
export class AppModule{}