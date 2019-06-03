<template>
  <div class="h-full font-sans">
    <nuxt />
  </div>
</template>

<style lang="postcss">
html, body, #__nuxt, #__layout {
  height: 100%;
}

body {
  background-position: center;
  background-color: #eeeeee;
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dddddd' fill-opacity='0.45'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.page-enter-active, .page-leave-active {
  transition: all 0.3s;
}

.page-enter, .page-leave-active {
  opacity: 0;
  transform: scale(.9);
}
</style>
