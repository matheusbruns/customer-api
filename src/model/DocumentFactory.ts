import { Document } from "./Document";
import { Cnpj } from "./Cnpj";
import { Cpf } from "./Cpf";


export class DocumentFactory {
    static create(value: string) :Document {
        if(Cpf.isValid(value)){
            return new Cpf(value)
        }

        if(Cnpj.isValid(value)){
            return new Cpf(value)
        }

        throw new Error(`Value not is document valid: ${value}`)
    }
}