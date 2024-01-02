<template>
  <div class="bento grid gap-6">
    <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      <div class="grid xl:col-span-1">
        <Card
          title="Youtube"
          description="I created this YouTube channel in 2022 to share all my knowledge about web development. Since then, I've been posting 3 videos per week. Subscribe now!"
          label="Subscribe →"
        >
          <img src="../assets/guillaume.png" />
        </Card>
      </div>
      <div class="grid lg:col-span-2 gap-6">
        <div class="grid xl:grid-cols-2 xl:col-span-2 gap-6">
          <Card
            title="Freelancing"
            description="Since 2015, I've held a place among the prestigious top 1% of freelancers on Malt, the leading freelance platform in Europe."
            label="Contact →"
          />
          <Card
            title="Coachings"
            label="Book →"
          >
            <Coachings />
          </Card>
        </div>
        <div class="grid xl:grid-cols-2 xl:col-span-2 gap-6">
          <Card
            title="Newsletter"
            description="Every Sunday, I send you a short email containing the 5 best links to articles, videos, or tweets about coding."
            label="Subscribe →"
          />
          <Card
            title="Blog"
            description="In addition to videos, I write articles on Hashnode, tutorials, and guides to help people learn how to code."
            label="Read →"
          />
        </div>
      </div>
    </div>
    <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      <div class="grid xl:col-span-2">
        <div class="grid gap-6">
          <Card />
          <div class="grid gap-6 grid-cols-1 xl:grid-cols-2">
            <div class="grid gap-6">
              <Card />
              <Card />
            </div>
            <div class="grid gap-6">
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
      <div class="grid xl:col-span-1">
        <Card />
      </div>
    </div>
  </div>
</template>
