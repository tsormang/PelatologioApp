import { Telephone } from "./telephone.model"

export class Customer {
    id: number=0
    firstName: string=""
    lastName: string=""
    address: string=""
    email: string=""
    telephones: Telephone = new Telephone();
    response: string=""
}


