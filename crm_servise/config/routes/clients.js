import { AsyncRouter } from 'express-async-router'
import ClientResource from "api/resourses/clients"

const api = AsyncRouter()

api.get('/', ClientResource.index)
api.post('/', ClientResource.create)
api.get('/:id', ClientResource.show)
api.put('/:id', ClientResource.update)
api.delete('/:id', ClientResource.destroy)

export default api
