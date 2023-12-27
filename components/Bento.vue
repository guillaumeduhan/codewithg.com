<template>
  <div class="bento grid gap-4">
    <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
      <div class="grid xl:col-span-1">
        <div class="card card--youtube">
          <h2 class="text-[40px]">Youtube</h2>
          <p class="z-50">I created this YouTube channel in 2022 to share all my knowledge about web development. Since then, I've been posting 3 videos per week. Subscribe now!</p>
          <div class="z-50">
            <Button label="Subscribe now →"></Button>
          </div>
        </div>
      </div>
      <div class="grid xl:grid-cols-2 xl:col-span-2 gap-4">
        <div>
          <div class="card">
            <h2>Coachings</h2>
            <Coachings />
            <div>
              <Button label="Book now →"></Button>
            </div>
          </div>
        </div>
        <div>
          <div class="card">
            <h2>Coachings</h2>
            <Coachings />
            <div>
              <Button label="Book now →"></Button>
            </div>
          </div>
        </div>
        <div>
          <div class="card">
            <h2>Coachings</h2>
            <Coachings />
            <div>
              <Button label="Book now →"></Button>
            </div>
          </div>
        </div>
        <div>
          <div class="card">
            <h2>Coachings</h2>
            <Coachings />
            <div>
              <Button label="Book now →"></Button>
            </div>
          </div>
        </div>
        <!-- <div>
          <div class="card">
            <h2>Courses</h2>
          </div>
        </div>
        <div>
          <div class="card">
            <h2>Templates</h2>
          </div>
        </div>
        <div>
          <div class="card">
            <h2>Snippets</h2>
          </div>
        </div> -->
      </div>
    </div>
    <div class="grid xl:grid-cols-3 gap-4">
      <div class="col-span-1">
        <div class="card">
          <h2>Hashnode</h2>
          <div>
            <Button label="Read →"></Button>
          </div>
        </div>
      </div>
      <div class="col-span-1">
        <div class="card">
          <h2>Dev.to</h2>
          <div>
            <Button label="Read →"></Button>
          </div>
        </div>
      </div>
      <div class="col-span-1">
        <div class="card">
          <h2>Medium</h2>
          <div>
            <Button label="Read →"></Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
