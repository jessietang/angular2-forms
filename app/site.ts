/**
 * Created by jessietang on 12/27/2016.
 */

//创建Site模型类
export class Site{
    constructor(
        public id: number,
        public name: string,
        public url: string,
        public alexa?: number
    ){}
}