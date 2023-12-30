import { Request, Response, Router } from 'express'
import { CustomerRepositoryInMemory } from './infra/repository/memory/CustomerRepositoryInMemory'
import { CustomerList } from './controller/CustomerList'
import { CustomerCreate } from './controller/customerCreate'
import { CustomerRepositoryDatabase } from './infra/repository/database/CustomerRepositoryDatabase'
import { CustomerRepository } from './model/repository/CustomerRepository'

const router = Router()
//const repository: CustomerRepository = new CustomerRepositoryInMemory()
const repository = new CustomerRepositoryDatabase()
const customerCreate = new CustomerCreate(repository)
const customerList = new CustomerList(repository)

router.post('/customer', (request: Request, response: Response) => {
    console.log(request.body)
    customerCreate.execute(request, response)
})

router.get("/customer", (request: Request, response: Response) => {
    customerList.execute(request, response)
})

export { router }
