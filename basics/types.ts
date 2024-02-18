
//tipos de datos
let userName: string = "Juan"
let age: number = 32
let enables: boolean = true

let person: Object = {};
let fruits: Object[] =[{}, {name: "manzana"}]

let response: any = "Hola"

function sendNotes(): void {
    console.log("Message from TS");
}

let responseUnknowm: unknown
responseUnknowm = true

let responseNull = null
let responseUndedined = undefined

//combinación de datos
type ResponseTypeService = string | undefined

let responseCombine: ResponseTypeService
responseCombine?.toString()

//Type assertion(casting)
let message: any = ""
let messageUpperCase = <string>message
messageUpperCase.toUpperCase()
console.log(response)
let myFloat: number = 3.8 
console.log(myFloat)
//const canvas = <HTMLCanvasElement>document.getElementById("canvas");
