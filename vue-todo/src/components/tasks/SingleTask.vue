<template>
  <div>
    <v-list-item
      :class="{ 'light-blue lighten-4': tarefa.concluido }"
      @click="changeStatusTask"
    >
      <template v-slot:default="{}">
        <v-list-item-action>
          <v-checkbox :input-value="tarefa.concluido"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            :class="{ 'text-decoration-line-through': tarefa.concluido }"
            >{{ tarefa.titulo }}</v-list-item-title
          >
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon>
            <v-icon
              color="red darken-3"
              @click.stop="handleRemoveTask(tarefa.id)"
              >mdi-trash-can</v-icon
            >
          </v-btn>
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
  props: ["tarefa"],
  methods: {
    handleRemoveTask(id) {
      this.$store.commit('removerTarefa', id);
    },
    changeStatusTask() {
      this.$emit("changeStatus", !this.tarefa.concluido);
    },
  },
};
</script>