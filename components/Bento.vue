<template>
  <div class="bento grid gap-8">
    <div class="grid lg:grid-cols-12 gap-8">
      <Card
        class="lg:col-span-7"
        description="20,000 subscribers the first year of my Youtube channel." label="Subscribe →"
        url="https://dub.sh/cvXSKdV"
      />
      <Card
        class="lg:col-span-5"
        description="If you want awesome videos about your product, just hit me up here!"
        label="Partnership →"
        url="https://dub.sh/codewithg-business"
      />
    </div>
    <div class="grid lg:grid-cols-12 gap-8">
      <Card 
        class="lg:col-span-6"
        description="Top 1% of freelancers on Malt, Europe's leading freelance platform."
        label="Mission →"
        url="https://www.malt.fr/profile/guillaumed"
      />
      <Card 
        class="lg:col-span-6"
        description="Each year, I mentor up to 10 students in their careers."
        label="Book now →"
        url="https://calendly.com/guillaumeduhan/beginner-session"
      />
    </div>
    <div class="grid lg:grid-cols-12 gap-8">
      <Card
        class="lg:col-span-5"
        description="Top 5 best links about tech twice a month."
        label="Subscribe →"
        url="https://dub.sh/codewithg"
      />
      <Card
        class="lg:col-span-7"
        description="The place where you can have a 24/7 conversation with the world."
        label="Follow me →"
        url="https://twitter.com/blackevilgoblin"
      />
    </div>
    <div class="grid lg:grid-cols-12 gap-8">
     <Card
        class="col-span-12 text-center"
        description="Supabase is the best Database as a Service since Firebase."
        label="Create an account →"
        url="https://dub.sh/create-supabase"
        :centered="true"
      />
    </div>
    <div class="grid lg:grid-cols-12 gap-8">
      <Card
        class="lg:col-span-6"
        description="Find freelance missions."
        label="Malt →"
        url="https://dub.sh/malt-codewithguillaume"
      />
      <Card
        class="lg:col-span-6"
        description="The most powerful tool for tracking links."
        label="Dub.sh →"
        url="https://dub.sh/h2uLEmW"
      />
    </div>
    <div class="grid lg:grid-cols-12 gap-8">
        <Card
          class="lg:col-span-7"
          description="The blogging platform of my dreams."
          label="Hashnode →"
          url="https://dub.sh/codewithg-hashnode"
        />
        <Card
          class="lg:col-span-5"
          description="Best emailing tool on the market."
          url="https://dub.sh/resend-codewithguillaume"
          label="Resend →"
        />
    </div>
    <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
      <!-- <div class="col-span-1">
        <Card
          title="Github"
          description="I am very active on GitHub, where I regularly publish new projects and templates. I also contribute to numerous open-source projects."
          label="Subscribe to my profile →"
          url="https://www.linkedin.com/in/guillaumeduhan/"
        />
      </div> -->
      <!-- <div class="col-span-2 grid xl:grid-cols-2 gap-8">
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
