<template>
  <div class="flex bg-white px-12 pb-2 pt-6 text-gray-800">
    <div class="w-auto my-auto">
      <a href="#" class="font-bold text-3xl">LOGO</a>
    </div>
    <div class="flex-1 text-right my-auto">
      <a href="#" class="inline-block mr-4 px-6 py-2 bg-transparent transition hover:bg-purple-400 hover:shadow-md rounded-full">Home</a>
      <a href="#" class="inline-block mr-4 px-6 py-2 bg-transparent transition hover:bg-purple-400 hover:shadow-md rounded-full">Services</a>
      <a href="#" class="inline-block mr-4 px-6 py-2 bg-transparent transition hover:bg-purple-400 hover:shadow-md rounded-full">About</a>
      <a href="#" class="inline-block mr-4 px-6 py-2 bg-transparent transition hover:bg-purple-400 hover:shadow-md rounded-full">Contact</a>
      <a href="#" class="inline-block mr-4 px-6 py-2 bg-transparent transition hover:bg-purple-400 hover:shadow-md rounded-full">FAQ</a>
      <a href="#" class="inline-block mr-4 px-6 py-2 transition hover:shadow-md bg-purple-400 rounded-full font-bold uppercase">Sign Up</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
