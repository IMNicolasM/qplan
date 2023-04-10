export default {
  plans: {
    permission: 'iplan.plans.manage',
    activated: true,
    path: '/plans',
    name: 'qplan.admin.plans.index',
    crud: import('../_crud/plans'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'iplan.cms.sidebar.adminPlans',
    icon: 'fa-light fa-file-invoice',
    authenticated: true,
    subHeader: {
      refresh: true,
    }
  },
  limits: {
    permission: 'iplan.limits.manage',
    activated: true,
    path: '/limits',
    name: 'qplan.admin.limits.index',
    crud: import('../_crud/limits'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'iplan.cms.sidebar.adminLimits',
    icon: 'fa-light fa-gauge-max',
    authenticated: true,
    subHeader: {
      refresh: true,
      breadcrumb: ['qplan.plans']
    }
  },
  categories: {
    permission: 'iplan.categories.manage',
    activated: true,
    path: '/categories',
    name: 'qplan.admin.categories.index',
    crud: import('../_crud/planCategories'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'iplan.cms.sidebar.adminCategories',
    icon: 'fa-light fa-layer-group',
    authenticated: true,
    subHeader: {
      refresh: true,
      breadcrumb: ['qplan.plans']
    }
  },
  entityPlans: {
    permission: 'iplan.entityplans.manage',
    activated: true,
    path: '/entityPlans',
    name: 'qplan.admin.entityPlans.index',
    crud: import('../_crud/entityPlans'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'iplan.cms.sidebar.adminEntityPlans',
    icon: 'fa-light fa-ballot-check',
    authenticated: true,
    subHeader: {
      refresh: true,
      breadcrumb: ['qplan.plans']
    }
  },
  subscriptions: {
    permission: 'iplan.subscriptions.manage',
    activated: true,
    path: '/subscriptions',
    name: 'qplan.admin.subscriptions.index',
    crud: import('../_crud/subscriptions'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'iplan.cms.sidebar.adminSubscriptions',
    icon: 'fa-light fa-file-invoice-dollar',
    authenticated: true,
    subHeader: {
      refresh: true,
      breadcrumb: ['qplan.plans']
    }
  },
  subscriptionsEdit: {
    permission: 'iplan.subscriptions.edit',
    activated: true,
    path: '/subscriptions/:id',
    name: 'qplan.admin.subscriptions.edit',
    page: () => import('../_pages/admin/subscriptions/form'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'iplan.cms.sidebar.editSubscriptions',
    icon: 'fa-light fa-file-invoice-dollar',
    authenticated: true,
    subHeader: {
      refresh: true,
      breadcrumb: ['qplan.plans', 'qplan.subscriptions']
    }
  },
}
