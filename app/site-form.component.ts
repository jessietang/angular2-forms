/**
 * Created by jessietang on 12/27/2016.
 */
import {Component} from '@angular/core';
import {Site} from './site';

@Component({
    moduleId: module.id,
    selector: 'site-form',
    templateUrl: 'site-form.component.html'
})

export class SiteFormComponent{
    urls = ['www.cuit.edu.cn','www.baidu.com','www.google.com','www.facebook.com'];
    model = new Site(1,'成都信息工程大学',this.urls[0],1000);
    submitted = false;
    onSubmit(){
        this.submitted = true;
    }

    //返回这个模型的JSON格式
    get diagnostic(){
        return JSON.stringify(this.model);
    }

    active = true;
    newSite(){
        this.model = new Site(this.urls.length,'','');
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

}