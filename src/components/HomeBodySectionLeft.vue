<script setup lang="ts">
import AppStarRaiting from './AppStarRating.vue'
</script>

<template>
  <div class="col-span-2">
    <h1 class="text-2xl font-bold">Red velvet cupcake - By Osvaldo Gross</h1>
    <h2 class="text-lg font-bold">User Kevin Coscarelli</h2>
    <AppStarRaiting :maxPoints="5" :points="5" />
    <div class="grid grid-cols-4 gap-4 mt-4">
      <div>
        <h3 class="font-bold">Ingredients:</h3>
        <ul>
          <li>Flour 0000 - 300gr</li>
          <li>Cocoa - 10gr</li>
          <li>Salt - n/a</li>
          <li>Sugar - 300gr</li>
          <li>Sunflower oil - 180cm3</li>
          <li>Eggs - 2</li>
          <li>Vanilla essence - n/a</li>
          <li>Red food coloring - 1 tablepoon</li>
          <li>Milk - 200cm3</li>
          <li>White vinegar - 1 teaspoon</li>
          <li>Baking soda - 10gr</li>
        </ul>
      </div>
      <div class="col-span-3 px-6 text-justify">
        <h3 class="font-bold">Directions</h3>
        <p>
          Preheat the oven to 350 degrees F (175 degrees C). Grease two 9-inch round pans. Make the
          cake: Beat 1 1/2 cups sugar and shortening together in a large bowl with an electric mixer
          until light and fluffy. Add eggs one at a time, beating well after each addition. Combine
          red food coloring and cocoa to make a paste; add to creamed mixture. Mix buttermilk, salt,
          and 1 teaspoon vanilla together in a small bowl. Add flour, alternating with buttermilk
          mixture, mixing just until incorporated. Mix vinegar and baking soda together; gently fold
          into cake batter and pour into prepared pans. Bake in the preheated oven until a toothpick
          inserted into the center comes out clean, about 30 minutes. Cool on a wire rack for 5
          minutes. Run a table knife around the edges to loosen. Invert carefully onto a serving
          plate or cooling rack. Let cool, about 30 minutes. Make the icing: Heat milk and flour in
          a saucepan over low heat, stirring constantly, until thick. Set aside to cool completely.
          Meanwhile, beat sugar, butter, and vanilla together in a large bowl with an electric mixer
          until light and fluffy. Add cooled flour mixture and beat until frosting is a good
          spreading consistency. Frost cake layers when completely cool.
        </p>
      </div>
    </div>
  </div>
  <div class="flex justify-end">
    <img
      src="../assets/imgs/redvelvet.jpg"
      class="max-h-96 my-8 border-4 border-gray-700 rounded-lg"
    />
  </div>
</template>
