<script setup>
const loading = ref(false)
const status = ["ChristopheAnfry/status/1628455167518552067", "wawasensei/status/1632070902811705349", "keith_price76/status/1646105542509891584", "jonathan_wilke/status/1638218842588545025", "developerBolu/status/1628442021043085312", "jherr/status/1618264533067526145", "huntabyte/status/1618264566298992640"]
</script>

<template>
	<div class="grid grid-cols-3 gap-4">
		<div v-for="item, key in status" :key="key">
			 <blockquote class="twitter-tweet">
			 	<a :href="`https://twitter.com/${item}`"></a>
			 </blockquote> 
		</div>
	</div>
</template>