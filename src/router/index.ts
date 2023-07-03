import { createRouter, createWebHistory } from 'vue-router'
import PageLayout from '../layouts/Page.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        layout: PageLayout
      },
      component: () => import('../views/Dashboard.vue')
    },
    //CATEGORY
    {
      path: '/catalog/category',
      name: 'category',
      meta: {
        layout: PageLayout
      },
      component: () => import('../views/Category/index.vue')   
    },
    {
      path: '/catalog/category/detail/:id',
      name: 'CategoryDetail',
      meta: {
        layout: PageLayout
      },
      component: () => import('../views/Category/Detail.vue')
    },
    {
      path: '/catalog/category/add',
      name: 'CreateCategory',
      meta: {
        layout: PageLayout
      },
      component: () => import('../views/Category/CreateCategory.vue')
    },
    {
      path: '/catalog/category/edit/:id',
      name: 'EditCategory',
      meta: {
        layout: PageLayout
      },
      component: () => import('../views/Category/EditCategory.vue')
    },
    //ATTRIBUTE-GROUP
    {
      path: '/catalog/attribute-group',
      name: 'AttributeGroup',
      meta: {
        layout: PageLayout
      },
      component: () => import('../views/AttributeGroup/index.vue')
    },
    {
      path: '/catalog/attribute-group/detail/:id',
      name: 'DetailAttributeGroup',
      meta: {
        layout: PageLayout
      },
      component: () => import('../views/AttributeGroup/DetailAttributeGroup.vue')
    },
    {
      path: '/catalog/attribute-group/add',
      name: 'CreateAttributeGroup',
      meta: {
        layout: PageLayout
      },
      component: () => import('../views/AttributeGroup/CreateAttributeGroup.vue')
    },
    {
      path: '/catalog/attribute-group/edit/:id',
      name: 'EditAttributeGroup',
      meta: {
        layout: PageLayout
      },
      component: () => import('../views/AttributeGroup/EditAttributeGroup.vue')
    },

    //PRODUCT-OPTION
    {
      path: '/catalog/product-option',
      name: 'ProductOption',
      meta: {
        layout: PageLayout
      },
      component: () => import('../views/ProductOption/index.vue')
    },
    {
      path: '/catalog/product-option/detail/:id',
      name: 'DetailProductOption',
      meta: {
        layout: PageLayout
      },
      component: () => import('../views/ProductOption/DetailProductOption.vue')
    },
    {
      path: '/catalog/product-option/add',
      name: 'CreateProductOption',
      meta: {
        layout: PageLayout
      },
      component: () => import('../views/ProductOption/CreateProductOption.vue')
    },
    {
      path: '/catalog/product-option/edit/:id',
      name: 'EditProductOption',
      meta: {
        layout: PageLayout
      },
      component: () => import('../views/ProductOption/EditProductOption.vue')
    },

    //PRODUCT-ATTRIBUTE
    {
      path: '/catalog/product-attribute',
      name: 'ProductAttribute',
      meta: {
        layout: PageLayout
      },
      component: () => import('../views/ProductAttribute/index.vue')
    },
    {
      path: '/catalog/product-attribute/detail/:id',
      name: 'DetailProductAttribute',
      meta: {
        layout: PageLayout
      },
      component: () => import('../views/ProductAttribute/DetailProductAttribute.vue')
    },
    {
      path: '/catalog/product-attribute/add',
      name: 'CreateProductAttribute',
      meta: {
        layout: PageLayout
      },
      component: () => import('../views/ProductAttribute/CreateProductAttribute.vue')
    },
    {
      path: '/catalog/product-attribute/edit/:id',
      name: 'EditProductAttribute',
      meta: {
        layout: PageLayout
      },
      component: () => import('../views/ProductAttribute/EditProductAttribute.vue')
    },
  ]
})

export default router
