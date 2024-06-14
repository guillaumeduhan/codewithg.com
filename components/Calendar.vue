<script setup>
const loading = ref(false);
const props = defineProps(["events"]);
const {
  events = [
    {
      date: "2024-06-04",
      hour: "13:30-13:00",
      participants: [
        "4b2cffc5-c7c6-4931-ba22-29ec0af7b33f",
        "e9a49203-f25e-469c-83f7-40e19c2d5702",
        "c33b69eb-4d54-44e9-944a-e574de88c83d",
        "731c3de1-07af-4237-abbe-2118c6f20e14"
      ],
      title: "Meeting with partner",
      status: "Cancelled"
    },
    {
      date: "2024-06-09",
      hour: "16:00-16:30",
      participants: [
        "67810d45-bb63-4274-a625-03c6700cad71",
        "9ed18a3b-5866-440c-bf87-dc390f3c18d7",
        "db6e75fc-9c12-4ff2-aa4c-5c55c28c857a",
        "205ca04d-00a9-4ba7-9131-3c7d29f91dab",
        "554b36aa-0686-47ed-a07e-07111eea7e88"
      ],
      title: "Meeting with team",
      status: "Pending"
    },
    {
      date: "2024-06-13",
      hour: "15:00-15:30",
      participants: [
        "e8e48bf8-37b1-4370-824d-77d32d0660c3",
        "7c41f557-f41a-495e-95de-a44c4e5a5f29",
        "597d811a-ce7d-4f03-b7c6-2c35c7a6eefb"
      ],
      title: "Meeting with boss",
      status: "Cancelled"
    },
    {
      date: "2024-06-12",
      hour: "10:30-10:00",
      participants: [
        "d20ed5a5-4fc6-4d75-aea9-7250506f2712",
        "4f61f9c6-850a-4efd-8580-3aac2ee10d77",
        "e34d360e-717c-406c-9878-7aba7214cd4e",
        "54790a1a-33ca-48bc-bdaa-8fda55298eea",
        "11ae2920-1dd7-42c2-9c3c-29c931cd6d72"
      ],
      title: "Meeting with partner",
      status: "Missed"
    },
    {
      date: "2024-06-12",
      hour: "10:30-10:00",
      participants: [
        "062429c8-d18e-4f62-a70e-a01079b5aa36",
        "26c05ca5-b416-423e-aee1-d20612b2e8ab",
        "ba88751b-bd4d-4d1f-97a8-0446e55c9692",
        "2f82bea6-57ea-4e75-9f75-5bcf42bbd35f",
        "26bd58a0-1f91-4452-9313-2a202bde4d74"
      ],
      title: "Meeting with team",
      status: "Upcoming"
    },
    {
      date: "2024-06-10",
      hour: "10:30-11:30",
      participants: [
        "8e0b649a-5a58-48cb-a6a2-e2b4e4d6a288",
        "ee9471be-84e1-4748-97d7-efe70b1a0d61"
      ],
      title: "Meeting with client",
      status: "Pending"
    },
    {
      date: "2024-06-05",
      hour: "15:30-16:30",
      participants: [
        "9f5e42bb-f960-452f-a789-5d52ab5821c0",
        "cf92bea8-b790-496b-b401-1136f5e52bf2",
        "00ee881e-2a79-49b3-aa38-2293226b45ff",
        "18ac0449-f003-4294-8f30-937998c4711f"
      ],
      title: "Meeting with team",
      status: "Upcoming"
    },
    {
      date: "2024-06-10",
      hour: "11:00-11:30",
      participants: [
        "9f644294-45d2-4cd8-9d5f-aafb83c40fda",
        "771510aa-64b4-4b7b-884e-f63d51f2bc8e"
      ],
      title: "Meeting with team",
      status: "Upcoming"
    },
    {
      date: "2024-06-14",
      hour: "17:30-18:30",
      participants: [
        "6c2deb59-985f-4192-b8fe-6cfc2a7db158",
        "fcfc492b-c2fd-40fe-922f-638996a5eedf"
      ],
      title: "Meeting with team",
      status: "Cancelled"
    },
    {
      date: "2024-06-07",
      hour: "14:30-15:30",
      participants: [
        "cd819dbc-1e39-4fd3-8b1a-144912d60c94",
        "5342b3fe-fe10-4459-b783-d8b91d2dbe7e",
        "be106ac5-4781-4cc6-b524-d433d4ba556d",
        "b07a9ff8-b473-47c5-9cd4-75f5ae944a27",
        "38e00b7f-3182-4d69-a9de-fb3fc57edca5"
      ],
      title: "Meeting with team",
      status: "Cancelled"
    }
  ]
} = props;
function transformDate(dateStr) {
  // if not using dayjs
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  // Parse the date string
  const date = new Date(dateStr);

  // Get the day of the week and day of the month
  const dayOfWeek = daysOfWeek[date.getUTCDay()];
  const dayOfMonth = date.getUTCDate();
  const month = months[date.getUTCMonth()];


  // Return the formatted string
  return `<p class="font-[500] text-xs">${dayOfWeek}</p><p class="font-black text-blue-500" style="line-height: 1;">${dayOfMonth}th</p><p class="font-[500] text-xs">${month}</p>`;
}
const getColor = (status) => {
  switch (status) {
    case 'Cancelled':
      return 'bg-red-300';
      break;
    case 'Pending':
      return 'bg-yellow-300';
      break;
    case 'Upcoming':
      return 'bg-emerald-300';
      break;
    case 'Missed':
      return 'bg-orange-300';
      break;
    default:
      break;
  }
}
</script>

<template>
  <div class="grid gap-6 border dark:border-neutral-600 rounded-xl mx-auto max-w-[500px] w-full shadow overflow-hidden px-5 py-3">
    <header>
      <h2 class="font-[600]">Calendar</h2>
      <p class="text-sm text-neutral-400">See your scheduled events from your calendar.</p>
    </header>
    <main class="grid gap-2"> 
      <div v-for='(event, index) in events.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
      })' :key='index' class="flex items-center gap-4 border dark:border-neutral-600 rounded-lg mx-auto max-w-[500px] w-full shadow overflow-hidden py-3 px-4 cursor-pointer hover:bg-neutral-100 transition">
        <div class="grid gap-1 pr-4 text-center border-r min-w-24" v-html="transformDate(event.date)"></div>
        <div class="grid grid-cols-2 gap-2 text-sm grow">
          <div class="grid gap-1">
            <div class="font-[500] truncate">{{ event.title }}</div>
            <div class="flex">
              <div :class="`text-xs block px-2 py-1 font-[600] bg-neutral-100 text-black rounded-full ${getColor(event.status)}`">{{ event.status }}</div>
            </div>
          </div>
          <div class="grid gap-1">
            <div class="flex gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="m10.95 13.7l-1.425-1.425q-.3-.3-.7-.3t-.7.3t-.3.713t.3.712l2.125 2.15q.3.3.7.3t.7-.3l4.25-4.25q.3-.3.3-.712t-.3-.713t-.712-.3t-.713.3zM12 22q-1.875 0-3.512-.712t-2.85-1.925t-1.925-2.85T3 13t.713-3.512t1.924-2.85t2.85-1.925T12 4t3.513.713t2.85 1.925t1.925 2.85T21 13t-.712 3.513t-1.925 2.85t-2.85 1.925T12 22M2.05 7.3q-.275-.275-.275-.7t.275-.7L4.9 3.05q.275-.275.7-.275t.7.275t.275.7t-.275.7L3.45 7.3q-.275.275-.7.275t-.7-.275m19.9 0q-.275.275-.7.275t-.7-.275L17.7 4.45q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l2.85 2.85q.275.275.275.7t-.275.7M12 20q2.925 0 4.963-2.037T19 13t-2.037-4.962T12 6T7.038 8.038T5 13t2.038 4.963T12 20"/></svg>
              <span>{{ event.hour }}</span>
            </div>
            <div>{{ event.participants.length }} participants</div>
          </div>
        </div>
        <div>
          <button class="outline">Edit</button>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
button {
  @apply text-sm py-1 px-2 rounded-lg transition cursor-pointer shadow border-none text-white text-center dark:bg-neutral-800;

	&.blue {
		@apply bg-blue-500 hover:bg-blue-400;
	}

  &.outline {
		@apply bg-transparent text-neutral-500 border-neutral-500 hover:bg-neutral-50 hover:dark:bg-neutral-800;
	}
}
</style>