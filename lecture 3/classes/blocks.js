import {row,col} from "../controller/utils.js"
/*מחלקה בסיסית עבור מבנה בלוק */
class Block{
    constructor(type,value){
        this.type = type
        this.value = value
    }
    toHTML(){
        throw('must be implemented')
    }
}

/*נגדיר מחלקה יורשת לבלוק כותרת*/
export class TitleBlock extends Block{
    constructor(value){
        super('title',value)
    }
    toHTML(){
        return row(col(`<h1>${this.value}</h1>`))
    }
}

/*נגדיר מחלקה יורשת לבלוק טקסט */
export class TextBlock extends Block{
    constructor(value){
        super('text',value)
    }
    toHTML(){
        return row(col(this.value))
    }
}

/* נגדיר מחלקה יורשת לבלוק עמודה*/
export class ColumnsBlock extends Block{
    constructor(value){
        super('columns',value)
    }
    toHTML(){
        return row(this.value.map(d=> col(d)).join(""))
    }
}

/* נגדיר מחלקה יורשת לבלוק תמונה*/
export class ImageBlock extends Block{
    constructor(value){
        super('image',value)
    }
    toHTML(){
        return row(col(`<img src="${this.value}"/>`))
    }
}

