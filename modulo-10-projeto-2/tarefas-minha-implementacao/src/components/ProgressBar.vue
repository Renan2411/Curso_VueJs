<template>
  <div class="bar">
    <div class="progressBar">
      <div class="progress" :style="{ width: progress + '%' }">
        {{ progress }}%
      </div>
    </div>
  </div>
</template>

<script>
import barramento from "../barramento";

export default {
  data() {
    return {
      progress: 0,
    };
  },
  created() {
    barramento.whenProgressChange((progress) => {
      this.progress = progress;
    });
  },
};
</script>

<style scoped>
.bar {
  margin-bottom: 30px;
}

.progressBar {
  border: 1px solid rgb(212, 187, 187);
  box-shadow: 1px 1px 5px rgb(157, 146, 146);
  height: 20px;
  width: 900px;
  display: flex;
  text-align: center;
}
.progress {
  height: 100%;
  background-color: green;
}
</style>