<template>
  <div class="bento grid gap-6">
    <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      <div class="grid xl:col-span-1">
        <Card class="youtube" label="Subscribe →" url="https://dub.sh/cvXSKdV">
        </Card>
      </div>
      <div class="grid lg:col-span-2 gap-6">
        <div class="grid xl:grid-cols-2 xl:col-span-2 gap-6">
          <Card title="Freelance"
            description="Since 2015, I've held a place among the prestigious top 1% of freelancers on Malt, the leading freelance platform in Europe."
            label="Contact me →" url="https://www.malt.fr/profile/guillaumed" />
          <Card title="Coachings" label="Book →">
            <Coachings />
          </Card>
        </div>
        <div class="grid xl:grid-cols-2 xl:col-span-2 gap-6">
          <Card title="Newsletter"
            description="Twice a month, I send you a short email containing the 5 best links to articles, videos, or tweets about coding."
            label="Subscribe →" url="https://dub.sh/codewithg" />
          <Card title="Partnerships"
            description="If you would like me to create a series of videos about your product, appear as a sponsor, or feature in one of my newsletters, you can contact me here."
            label="Request →" url="https://dub.sh/codewithg-business" />
        </div>
      </div>
    </div>
    <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      <div class="grid xl:col-span-2">
        <div class="grid gap-6">
          <Card title="Supabase" description="Supabase is the best Database as a Service since Firebase."
            label="Create an account →" url="https://dub.sh/create-supabase" />
          <div class="grid xl:grid-cols-2 gap-6">
            <Card title="Malt" description="The most effective platform for finding freelance missions."
              label="Start an account →" url="https://dub.sh/malt-codewithguillaume" />
            <Card title="Dub.co"
              description="A tool that I use everyday to track my links. Very useful & powerful for marketing."
              label="Create an account →" url="https://dub.sh/h2uLEmW" />
          </div>
        </div>
      </div>
      <div class="grid xl:col-span-1 gap-6">
        <Card title="Hashnode"
          description="In addition to videos, I write articles on Hashnode, tutorials, and guides to help people learn how to code."
          label="Read →" url="https://dub.sh/codewithg-hashnode" />
        <Card title="Resend" label="Create an account →"
          description="Resend is the most powerful and user-friendly email marketing tool on the market."
          url="https://dub.sh/resend-codewithguillaume" />
      </div>
    </div>
    <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      <!-- <div class="col-span-1">
        <Card
          title="Github"
          description="I am very active on GitHub, where I regularly publish new projects and templates. I also contribute to numerous open-source projects."
          label="Subscribe to my profile →"
          url="https://www.linkedin.com/in/guillaumeduhan/"
        />
      </div> -->
      <!-- <div class="col-span-2 grid xl:grid-cols-2 gap-6">
        <Card
          :social="true"
          title="X"
          label="Follow →"
          url="https://twitter.com/blackevilgoblin"
        />
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
        <Card
          :social="true"
          title="Threads"
          label="Follow →"
          url="https://threads.net/@codewithguillaume"
        />
      </div> -->
    </div>
  </div>
</template>
