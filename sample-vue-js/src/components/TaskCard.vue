<!-- ─── TaskCard.vue — child component ─── -->
<script setup>
// TODO 1: import defineProps and defineEmits (they are compiler macros — no import needed
//          but you DO need to call them)

// TODO 2: Define the task prop with type Object, required: true
// const props = defineProps({ ... })
const props = defineProps({
  task: { type: Object, required: true }
})

// TODO 3: Define emits for 'complete' and 'delete'
// const emit = defineEmits([...])
const emit = defineEmits(['complete', 'delete'])
</script>

<template>
  <!-- TODO 4: Wrap everything in a div with class "task-card"
               Add :class="{ completed: task.done }" to the wrapper div -->
  <div class="task-card" :class="{ completed: props.task.done }">

    <div class="task-header">
      <!-- TODO 5: Display the task name -->
      <span class="name">
        {{ props.task.name }}
      </span>

      <!-- TODO 6: Add the named slot for metadata -->
      <!-- <slot name="meta" /> -->
      <span class="meta">
        <slot name="meta" />
      </span>
    </div>

    <div class="task-actions">
      <!-- TODO 7: Add Complete/Undo button — text changes based on task.done -->
      <!--         @click should emit 'complete' with task.id as payload -->
      <button
        class="btn-complete"
        :class="{ 'btn-undo': props.task.done }"
        @click="emit('complete', props.task.id)"
      >
        {{ props.task.done ? 'Undo' : 'Complete' }}
      </button>

      <!-- TODO 8: Add Delete button — emits 'delete' with task.id -->
      <button class="btn-delete" @click="emit('delete', props.task.id)">
        Delete
      </button>
    </div>
  </div>
</template>

<style scoped>
.task-card {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 16px 18px;
  margin-bottom: 12px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.2s, border-color 0.2s, background 0.2s;
}
.task-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
.task-card.completed {
  background: #f0fdf4;
  border-color: #86efac;
}

.task-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  gap: 8px;
}
.name {
  font-weight: 600;
  font-size: 15px;
  color: #1b2a4a;
  transition: color 0.2s;
}
.meta {
  font-size: 12px;
  color: #9ca3af;
  white-space: nowrap;
}

.task-actions {
  display: flex;
  gap: 8px;
}
button {
  padding: 6px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  transition: opacity 0.15s, transform 0.1s;
}
button:active {
  transform: scale(0.96);
}
.btn-complete {
  background: #42b883;
  color: #ffffff;
}
.btn-complete:hover {
  opacity: 0.88;
}
.btn-undo {
  background: #d1fae5;
  color: #065f46;
}
.btn-delete {
  background: #fee2e2;
  color: #dc2626;
}
.btn-delete:hover {
  background: #fecaca;
}

@media (prefers-color-scheme: dark) {
  .task-card {
    background: #1f2028;
    border-color: #2e303a;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  }
  .task-card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  }
  .task-card.completed {
    background: #052e16;
    border-color: #166534;
  }
  .name {
    color: #f3f4f6;
  }
  .btn-undo {
    background: #14532d;
    color: #bbf7d0;
  }
  .btn-delete {
    background: #450a0a;
    color: #fca5a5;
  }
  .btn-delete:hover {
    background: #7f1d1d;
  }
}
</style>
