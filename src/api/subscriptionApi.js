import { getAllSubscriptions } from './'

class SubscriptionApi {

  async getAll() {
    const response = await getAllSubscriptions()
    return response
  }
}

const subscriptionApi = new SubscriptionApi()
export default subscriptionApi
