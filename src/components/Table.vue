<template>
 <table class="table table-bordered">
    <thead>
      <tr>
        <th v-for="column in columns" :key="column.field">{{ column.title }}</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody v-if="rows.length > 0">
      <tr v-for="row in rows" :key="row.id">
        <td v-for="column in columns" :key="column.field">
          <template v-if="column.field === 'price'">Rp.{{ row[column.field] }}</template>
          <template v-else>{{ row[column.field] }}</template>
        </td>
        <td class="d-flex gap-3">
          <slot name="actions" :row="row" />
        </td>
      </tr>
    </tbody>
    <tbody v-else>
      <tr>
        <td colspan="100%" class="text-center">No data available</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>

defineProps({
  columns: {
    type: Array,
    required: true,
  },
  rows: {
    type: Array,
    required: true,
  },
})

defineEmits(["edit", "delete"])
</script>

<style scoped>
tr,th,td {
  padding: .5em !important;
}
</style>