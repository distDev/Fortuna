<template>
  <div class="grid-test mt-[0px] lg:pt-[60px] px-[0px] lg:px-[40px]">
    <div class="h-[5`00px] bg-slate-600">1</div>
    <div class="h-[5`00px] bg-slate-600">1</div>
    <div class="h-[5`00px] bg-slate-600">1</div>
    <div class="h-[5`00px] bg-slate-600">1</div>
    <div class="h-[5`00px] bg-slate-600">1</div>
    <div class="h-[5`00px] bg-slate-600">1</div>
    <div class="h-[5`00px] bg-slate-600">1</div>
  </div>
</template>

<script>
import { newsData } from "../../assets/data";

export default {
  data() {
    return { newsData };
  },
};
</script>

<style  scoped>
.grid-test {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.grid-test div:nth-child(3n + 3) {
  grid-column: span 2;
}
</style>
