export default {
  subscriptions: {
    permission: 'iplan.subscriptions.manage',
    activated: true,
    path: '/subscriptions',
    name: 'qplan.admin.subscriptions.index',
    crud: import('../_crud/subscriptions'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'iplan.cms.sidebar.panelSubscriptions',
    icon: 'fas fa-file-contract',
    authenticated: true,
    subHeader: {
      refresh: true,
      breadcrumb: ['qplan.plans']
    }
  }
}
