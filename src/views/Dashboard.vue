<template>
  <div>
    <data-table :tableData="jsonData" :columns="tableColumns"></data-table>
  </div>
</template>

<script lang="ts" setup>
import DataTable from '@/components/Form/DataTable/DataTable.vue'

const jsonData = [
  { name: 'John', age: 25, city: 'New York' },
  { name: 'Alice', age: 30, city: 'London' },
  { name: 'Bob', age: 35, city: 'Paris' }
]

const tableColumns = [
  { prop: 'name', label: 'Name' },
  { prop: 'age', label: 'Age' },
  { prop: 'city', label: 'City' }
]
</script>
