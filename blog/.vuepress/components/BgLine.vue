<template>
<section>
  <code>
    .bg-line(90deg);
  </code>
  <div class="bg-line line-1"></div>
  <code>
    .bg-line(90deg, @c-red);
  </code>
  <div class="bg-line line-2"></div>
  <code>
    .bg-line(90deg, @c-red 80%, @c-yellow);
  </code>
  <div class="bg-line line-3"></div>
  <code>
    .bg-line(90deg, @c-red 20%, @c-yellow 40%, @c-blue 60%, @c-orange 90%, @c-green 100%);
  </code>
  <div class="bg-line line-4"></div>
  <code>
    .bg-line-rainbow;
  </code>
  <div class="bg-line line-5"></div>
</section>
</template>

<style scoped>
.bg-line {
  margin: 1rem;
  height: 2rem;
}
.line-1 {
  background-image: linear-gradient(90deg, #111111, rgba(17, 17, 17, 0));
}
.line-2 {
  background-image: linear-gradient(90deg, #ff4136, rgba(255, 65, 54, 0));
}
.line-3 {
  background-image: linear-gradient(90deg, #ff4136 80%, #ffdc00);
}
.line-4 {
  background-image: linear-gradient(90deg, #ff4136 20%, #ffdc00 40%, #0074d9 60%, #ff851b 90%, #2ecc40 100%);
}
.line-5 {
  background-image: linear-gradient(90deg, #E50743 0%, #F9870F 15%, #E8ED30 30%, #3FA62E 45%, #3BB4D7 60%, #2F4D9E 75%, #71378A 80%);
}
</style>
