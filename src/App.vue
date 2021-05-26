<template>
  <div id="app" class="font-open-sans">
    <Header />
    <div class="px-12 pt-4">
      <div class="flex">
        <div class="flex-1 my-auto">
          <p class="uppercase text-6xl font-bold text-gray-800">Digital</p>
          <p class="uppercase text-3xl text-orange-600">m a r k e t i n g</p>
          <p class="text-gray-600 text-sm mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam egestas libero ut nisi luctus varius. Etiam tincidunt dolor at dictum lobortis.
            Proin at vulputate mi, sed euismod risus. Quisque eleifend nisl ac tincidunt maximus.
            Pellentesque pretium fermentum posuere.</p>
            <a href="#" class="inline-block text-white bg-purple-400 transition hover:shadow-md rounded-full px-6 py-2 uppercase font-bold mt-16">Learn More</a>
        </div>
        <div class="flex-1">
          <img :src="images" class="w-5/6" alt="Marketing">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header';
import Images from './assets/images/1076.jpg';
import '@/assets/css/tailwind.css';

export default {
  name: 'App',
  data :function() {
    return {
      images: Images
    }
  },
  components: {
    Header
  }
}
</script>
