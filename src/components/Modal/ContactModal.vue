<template>
    <el-dialog
      :visible.sync="visible"
      title="Form Submitted"
      width="500"
      center
    >
      <span>Thank you for your message! We will get back to you shortly.</span>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="handleClose">Close</el-button>
        </div>
      </template>
    </el-dialog>
  </template>
  
  <script lang="ts" setup>
  import { ref, defineProps, defineEmits } from 'vue'
  
  const props = defineProps({
    visible: {
      type: Boolean,
      required: true
    }
  })
  
  const emit = defineEmits(['update:visible'])
  
  const handleClose = () => {
    emit('update:visible', false)
  }
  </script>
  