<script setup>

</script>

<template>
  <div class="p-0 m-0 bg-hci-gray flex flex-col min-h-screen">
    <header class="flex items-center justify-between p-5 bg-gray-700">
      <div class="font-bold text-primary text-xl">
        HCI Products
      </div>
      <Navigation />
    </header>
    <main id="main" role="main">
      <router-view></router-view>
    </main>
    <footer class="mt-auto">Footer</footer>
  </div>
</template>