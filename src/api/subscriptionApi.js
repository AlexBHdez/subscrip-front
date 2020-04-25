import { getAllSubscriptions, newSubscription } from './'

class SubscriptionApi {

  async getAll() {
    const response = await getAllSubscriptions()
    return response
  }

  async newSubscription(data) {
    const response = await newSubscription(data)
    return response
  }
}

const subscriptionApi = new SubscriptionApi()
export default subscriptionApi
