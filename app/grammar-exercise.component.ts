/**
 * Created by jessietang on 12/28/2016.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'grammar-exercise',
    templateUrl: 'app/views/grammar.html'
})
export class GrammarExercise{
    title = 'picture title';
    imgUrl = 'app/images/c1.png';

    isUnchanged = true;

    classes = 'myClass';

    isRed = true;
    canSave = true;
    isBig = true;
    currentUser = {
        firstName: "jessie"
    };

    userName = '张三';

    users = [
        {
            userName:"aaa",
            age: 20
        },
        {
            userName: "bbb",
            age: 30
        }
    ];

    onSave(){
        alert('have saved it');
    }

    setStyles() {
        let styles = {
            // CSS属性名
            'font-style':  this.canSave      ? 'italic' : 'normal',  // italic
            'font-weight': !this.isUnchanged ? 'bold'   : 'normal',  // normal
            'font-size':   this.isBig    ? '24px'   : '8px',     // 24px
        };
        return styles;
    }

    callPhone(phoneNum){
        alert(phoneNum);
    }

    callFax(faxNum){
        alert(faxNum);
    }
}