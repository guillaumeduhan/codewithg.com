<template>
  <div class="bento grid gap-6">
    <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      <div class="grid xl:col-span-1">
        <Card
          title="Youtube"
          description="I created this YouTube channel in 2022 to share all my knowledge about web development. Since then, I've been posting 3 videos per week. Subscribe now!"
          label="Subscribe →"
          url="https://dub.sh/cvXSKdV"
        >
          <img src="../assets/guillaume.png" />
        </Card>
      </div>
      <div class="grid lg:col-span-2 gap-6">
        <div class="grid xl:grid-cols-2 xl:col-span-2 gap-6">
          <Card
            title="Freelance"
            description="Since 2015, I've held a place among the prestigious top 1% of freelancers on Malt, the leading freelance platform in Europe."
            label="Contact →"
            url="https://www.malt.fr/profile/guillaumed"
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
            description="Twice a month, I send you a short email containing the 5 best links to articles, videos, or tweets about coding."
            label="Subscribe →"
            url="https://dub.sh/codewithg"
          />
          <Card
            title="Partnerships"
            description="If you would like me to create a series of videos about your product, appear as a sponsor, or feature in one of my newsletters, you can contact me here."
            label="Request →"
            url="https://dub.sh/codewithg-hashnode"
          />
        </div>
      </div>
    </div>
    <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      <div class="grid xl:col-span-2">
        <div class="grid gap-6">
          <Card
            title="Supabase"
            description="Supabase is, in my opinion, the best Database as a Service since Firebase."
            label="Create an account →"
            url="https://dub.sh/create-supabase"
          />
          <div class="grid gap-6 grid-cols-1 xl:grid-cols-2">
            <div class="grid gap-6">
              <Card
                :social="true"
                title="X"
                label="Follow →"
                url="https://twitter.com/blackevilgoblin"
              />
              <Card
                :social="true"
                title="Threads"
                label="Follow →"
                url="https://threads.net/@codewithguillaume"
              />
            </div>
            <div class="grid gap-6">
              <Card
                :social="true"
                title="LinkedIn"
                label="Follow →"
                url="https://www.linkedin.com/in/guillaumeduhan/"
              />
              <Card
                :social="true"
                title="Pinterest"
                label="Follow →"
                url="https://www.pinterest.fr/codewithguillaume/"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="grid xl:col-span-1 gap-6">
        <Card
          title="Hashnode"
          description="In addition to videos, I write articles on Hashnode, tutorials, and guides to help people learn how to code."
          label="Read →"
          url="https://dub.sh/codewithg-hashnode"
        />
        <Card />
      </div>
    </div>
  </div>
</template>
