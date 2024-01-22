<script setup>
const movies = [
  {
    "title": "Back to the Future Part II",
    "date": "1989"
  },
  {
    "title": "Star Wars: Episode V - The Empire Strikes Back",
    "date": "1980"
  },
  {
    "title": "The Lord of the Rings: The Fellowship of the Ring",
    "date": "2001"
  },
  {
    "title": "The Matrix",
    "date": "1999"
  },
  {
    "title": "The Dark Knight",
    "date": "2008"
  },
  {
    "title": "Mesrine: Public Enemy No. 1",
    "date": "2008"
  },
  {
    "title": "Apocalypse Now",
    "date": "1979"
  },
  {
    "title": "V For Vendetta",
    "date": "2005"
  },
  {
    "title": "Signs",
    "date": "2002"
  },
  {
    "title": "The Big Lebowski",
    "date": "1998"
  },
  {
    "title": "Pulp Fiction",
    "date": "1994"
  },
  {
    "title": "American Psycho",
    "date": "2000"
  },
  {
    "title": "Unbreakable",
    "date": "2000"
  },
  {
    "title": "Aliens",
    "date": "1986"
  },
  {
    "title": "Seven",
    "date": "1995"
  },
  {
    "title": "Inception",
    "date": "2010"
  },
  {
    "title": "Troy",
    "date": "2004"
  },
  {
    "title": "The Prestige",
    "date": "2006"
  },
  {
    "title": "American Beauty",
    "date": "1999"
  },
  {
    "title": "The Wolf of Wall Street",
    "date": "2013"
  },
  {
    "title": "Catch Me If You Can",
    "date": "2002"
  },
  {
    "title": "E.T. the Extra-Terrestrial",
    "date": "1982"
  }
]

const series = [
  {
    "title": "House of Cards",
    "date": "2013–2018"
  },
  {
    "title": "Game of Thrones",
    "date": "2011–2019"
  },
  {
    "title": "Mad Men",
    "date": "2007–2015"
  },
  {
    "title": "Chernobyl",
    "date": "2019"
  },
  {
    "title": "The X-Files",
    "date": "1993–2002"
  },
  {
    "title": "The Walking Dead",
    "date": "2010–2022"
  },
  {
    "title": "Lost",
    "date": "2004–2010"
  },
  {
    "title": "Nip/Tuck",
    "date": "2003–2010"
  }
]

</script>

<template>
  <div class="grid gap-6">
    <h1 class="headline text-center">Favorites movies & shows</h1>
    <div class="grid lg:grid-cols-2 gap-6">
      <div class="grid gap-6">
        <Card v-for="item, index in movies" :key="index">
          <p class="flex gap-1">
            <span>{{ index + 1 }}.</span>
            <span class="text-white">{{ item.title }}</span>
            {{ item.date }}
          </p>
        </Card>
      </div>
      <div class="grid gap-6 self-start">
        <Card v-for="item, index in series" :key="index" class="w-full">
          <p class="flex gap-1">
            <span>{{ index + 1 }}.</span>
            <span class="text-white">{{ item.title }}</span>
            {{ item.date }}
          </p>
        </Card>
      </div>
    </div>
  </div>
</template>