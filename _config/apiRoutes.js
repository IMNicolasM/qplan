const moduleName = 'iplan';
const moduleVersion = 'v1';
const urlBase = `/${moduleName}/${moduleVersion}`


export default {
  urlBase: urlBase,
  version: moduleVersion,
  categories: `${urlBase}/categories`,
  plans: `${urlBase}/plans`,
  planModules: `${urlBase}/plans/modules`,
  entityPlans: `${urlBase}/entity-plans`,
  frequencies: `${urlBase}/plans/frequencies`,
  limits: `${urlBase}/limits`,
  limitEntities: `${urlBase}/limits/entities`,
  subscriptions: `${urlBase}/subscriptions`,
  buy: `${urlBase}/subscriptions/buy`,
  subscriptionEntities: `${urlBase}/subscriptions/entities`,
  subscriptionLimits: `${urlBase}/subscription-limits`,
}
