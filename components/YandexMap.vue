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
    const script = document.createElement("script");
    script.src =
      "https://api-maps.yandex.ru/2.1/?apikey=cc9b1903-b97b-45c9-a49c-53497c481345&lang=ru_RU";

    script.onload = () => {
      ymaps.ready(() => {
        const myMap = new ymaps.Map("map", {
          center: [55.799794, 37.935318],
          zoom: 16,
        });

        const myGeoObject = new ymaps.GeoObject({
          geometry: {
            type: "Point",
            coordinates: [55.799794, 37.935318],
          },
        });

        myMap.geoObjects.add(myGeoObject);
      });
    };

    document.head.appendChild(script);
  },
};
</script>
