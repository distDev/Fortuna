<template>
  <div id="map" class="w-full lg:w-[800px] h-[300px] lg:h-[400px]"></div>
</template>

<script>
export default {
  name: "YandexMap",
  data() {
    return {
      map: null,
    };
  },
  mounted() {
    let parsedCoordinates = this.coordinates.split(",").map((e) => Number(e));
    const script = document.createElement("script");
    script.src =
      "https://api-maps.yandex.ru/2.1/?apikey=cc9b1903-b97b-45c9-a49c-53497c481345&lang=ru_RU";

    script.onload = () => {
      ymaps.ready(() => {
        const myMap = new ymaps.Map("map", {
          center: [parsedCoordinates[0], parsedCoordinates[1]],
          zoom: 16,
        });

        const myGeoObject = new ymaps.GeoObject({
          geometry: {
            type: "Point",
            coordinates: [parsedCoordinates[0], parsedCoordinates[1]],
          },
        });

        myMap.geoObjects.add(myGeoObject);
      });
    };

    document.head.appendChild(script);
  },

  computed: {
    // parsedCoordinates() {
    //   return this.coordinates.split(",").map((e) => Number(e));
    // },
  },

  props: {
    coordinates: {
      required: true,
      type: String,
    },
  },
};
</script>
