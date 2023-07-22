<script setup lang="ts">
import { ref } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import AppStarRating from './AppStarRating.vue'
import AppModal from './AppModal.vue'
import AppButton from './AppButton.vue'

const props = defineProps<{
  title?: string
}>()

const favorite = ref(true)
const isOpen = ref(false)

const openModal = () => {
    isOpen.value = true
    console.log(isOpen.value)
}
</script>

<template>
  <div>
    <div class="text-center">
      <h2 class="mb-4 font-['Bebas_Neue'] text-4xl">{{ title }}</h2>
    </div>

    <div class="mb-24">
      <carousel :items-to-show="6.5" :wrap-around="true">
        <slide v-for="slide in 10" :key="slide">
          <div  @click="openModal()" class=" cursor-pointer">
            <img src="@/assets/imgs/buddhaBowl.jpg" class="h-[300px] block" />
            <p class="text-left">Buddha Bowl by Jeanine and Jack</p>
            <p class="text-left">User: John Marino</p>
            <AppStarRating :max-points="5" :points="2" />
          </div>
        </slide>

        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>
    <AppModal v-if="isOpen" @close="isOpen = false">
      <template v-slot:header>
        <div>
          <p class="font-['Pacifico']">Jeanine and Jack</p>
          <h1 class="font-['Bebas_Neue'] text-5xl">Buddha Bowl</h1>
          <AppStarRating :max-points="5" :points="2" class="justify-center"></AppStarRating>
        </div>
      </template>
      <template v-slot:body>
        <p class="inline-flex font-['Bebas_Neue']">User: John Marino</p>
        <div class="inline-flex px-4">
          <i class="pi pi-heart" v-if="!favorite"></i>
          <i class="pi pi-heart-fill" v-else></i>
        </div>
        <div class="grid grid-cols-3">
          <div>
            <img src="@/assets/imgs/buddhaBowl.jpg" class="my-4" />
          </div>
          <div class="col-span-2">
            <h2 class="font-['Bebas_Neue'] text-left p-3 text-2xl">Ingredients</h2>
            <ul class="text-left pl-4">
              <li>
                <i class="pi pi-circle-fill pr-4 align-middle" style="font-size: 8px"></i>1 large
                sweet potato, cubed
              </li>
              <li>
                <i class="pi pi-circle-fill pr-4 align-middle" style="font-size: 8px"></i
                >Extra-virgin olive oil, for drizzling
              </li>
              <li>
                <i class="pi pi-circle-fill pr-4 align-middle" style="font-size: 8px"></i>1
                watermelon radish or 2 red radishes
              </li>
              <li>
                <i class="pi pi-circle-fill pr-4 align-middle" style="font-size: 8px"></i>2 medium
                carrots
              </li>
              <li>
                <i class="pi pi-circle-fill pr-4 align-middle" style="font-size: 8px"></i>1 cup
                shredded red cabbage
              </li>
              <li>
                <i class="pi pi-circle-fill pr-4 align-middle" style="font-size: 8px"></i>Squeeze of
                lemon
              </li>
              <li>
                <i class="pi pi-circle-fill pr-4 align-middle" style="font-size: 8px"></i>8 kale
                leaves, chopped
              </li>
              <li>
                <i class="pi pi-circle-fill pr-4 align-middle" style="font-size: 8px"></i>2 cups
                cooked brown rice or quinoa
              </li>
              <li>
                <i class="pi pi-circle-fill pr-4 align-middle" style="font-size: 8px"></i>1 cup
                cooked chickpeas or cooked lentils
              </li>
              <li>
                <i class="pi pi-circle-fill pr-4 align-middle" style="font-size: 8px"></i>¾ cup
                sauerkraut or other fermented veggie
              </li>
              <li>
                <i class="pi pi-circle-fill pr-4 align-middle" style="font-size: 8px"></i>2
                tablespoons sesame seeds or hemp seeds
              </li>
              <li>
                <i class="pi pi-circle-fill pr-4 align-middle" style="font-size: 8px"></i>Turmeric
                Tahini Sauce, for serving
              </li>
              <li>
                <i class="pi pi-circle-fill pr-4 align-middle" style="font-size: 8px"></i
                >Microgreens, optional
              </li>
              <li>
                <i class="pi pi-circle-fill pr-4 align-middle" style="font-size: 8px"></i>Sea salt
                and freshly cracked black pepper
              </li>
            </ul>
          </div>
        </div>
        <h2 class="font-['Bebas_Neue'] text-left p-3 text-2xl">Directions</h2>
        <p class="text-left pl-3">
          Preheat the oven to 400°F and line a large baking sheet with parchment paper. Toss the
          sweet potatoes with olive oil, salt, and pepper, and spread onto the baking sheet. Roast
          for 20 minutes, or until golden brown. Thinly slice the radish into rounds (this is best
          done on a mandoline), and use a vegetable peeler to peel the carrots into ribbons. Toss
          the radish slices, carrots, and shredded cabbage with a squeeze of lemon. Set aside.
          Place the kale leaves into a large bowl and toss with a squeeze of lemon and a few
          pinches of salt. Use your hands to massage the leaves until they become soft and wilted
          and reduce in the bowl by about half. Assemble individual bowls with the brown rice,
          chickpeas, kale, carrots, radishes, cabbage, sweet potatoes, sauerkraut, sesame seeds,
          and microgreens, if using. Season with salt and pepper and serve with the Turmeric
          Tahini Sauce.
        </p>
      </template>
      <template v-slot:footer>
        <AppButton :rounded="true" :text="'Close'" @click="isOpen = false" class="bg-cyan-800 text-white my-8 py-2"/>
      </template>
    </AppModal>
  </div>
</template>
<style>
.carousel__pagination-item {
  margin-top: 25px;
}
.carousel__icon {
  background-color: rgb(21 94 117 / 0.7);
  color: #fff;
  border-radius: 100%;
  margin-bottom: 80px;
}
.carousel__icon:hover {
  background-color: rgb(21 94 117 / 1);
}
</style>
