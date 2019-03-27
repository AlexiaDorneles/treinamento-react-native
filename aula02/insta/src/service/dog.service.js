import { BaseService } from './base/base.service'

export class DogService extends BaseService {
  constructor() {
    super('https://dog.ceo/api/')
  }

  async getRandomDog() {
    return await super.get('breeds/image/random')
  }

  async getRandomDogs(numberOfDogs) {
    return await super.get(`breeds/image/random/${numberOfDogs}`)
  }
}
