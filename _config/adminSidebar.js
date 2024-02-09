import pages from 'src/config/pages' // Get Pages from config

//E-commerce
export default [
  {
    title: 'iplan.cms.sidebar.adminGroup',
    icon: 'fa-light fa-file-invoice',
    children: [
      pages.qplan.plans,
      pages.qplan.limits,
      pages.qplan.categories,
      pages.qplan.entityPlans,
      pages.qplan.subscriptions,
      pages.mainqplan.userSubscriptions
    ]
  }
]
