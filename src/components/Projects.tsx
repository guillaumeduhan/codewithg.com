'use client';

import { ExternalLink } from "lucide-react";

export const LinkItem = ({ item }: any) => {
  return <div className="flex items-center gap-1">
    <div className="px-1 rounded-full text-xs bg-neutral-200 text-black">{item.year}</div>
    <div className={`tag px-1 rounded-full text-xs text-black font-[500] ${item.status}`}>{item.status}</div>
    <ExternalLink className="w-4 text-neutral-400" />
    <a href={item.link} target="_blank" className={`lowercase ${item.aborted ? 'aborted' : ''}`}>{item.name}</a>

  </div>
}

export default function Projects() {
  const items = [
    { name: "Freebusinessideas.co", status: 'dead', year: 2021, link: "http://Freebusinessideas.co" },
    { name: "Internships.live", status: 'dead', year: 2022, link: "http://Internships.live" },
    { name: "Findwork.live", status: 'dead', year: 2022, link: "http://Findwork.live" },
    { name: "Tutorials.com", status: 'dead', year: 2022, link: "http://Tutorials.com" },
    { name: "photographer-Airbnb.com", status: 'dead', year: 2022, link: "" },
    { name: "bestworkshops.com", status: 'dead', year: 2022, link: "http://bestworkshops.com" },
    { name: "Blockchainjobs.gg", status: 'dead', year: 2022, link: "http://Blockchainjobs.gg" },
    { name: "Vueworkshop.com", status: 'dead', year: 2022, link: "" },
    { name: "Brandmy.team", status: 'dead', year: 2022, link: "http://Brandmy.team" },
    { name: "Creatorfund.com", status: 'dead', year: 2022, link: "http://Creatorfund.com" },
    { name: "Bestcofounder.com", status: 'dead', year: 2022, link: "" },
    { name: "Vuetifytools.com", status: 'dead', year: 2022, link: "" },
    { name: "vscode-vue.com", status: 'dead', year: 2022, link: "" },
    { name: "Startuplist.com", status: 'dead', year: 2022, link: "http://Startlist.com" },
    { name: "Bestelectriccars.gg", status: 'dead', year: 2022, link: "http://Bestelectriccars.gg" },
    { name: "creatorcamp.tv", status: 'dead', year: 2022, link: "http://creatorcamp.tv" },
    { name: "Welcomebaby.app", status: 'dead', year: 2022, link: "http://Welcomebaby.app" },
    { name: "Brandambassadors.com", status: 'dead', year: 2022, link: "http://Brandambassadors.com" },
    { name: "Learning platform", status: 'dead', year: 2022, link: "" },
    { name: "testi.fy", status: 'dead', year: 2022, link: "" },
    { name: "rulify", status: 'dead', year: 2022, link: "" },
    { name: "Moncarnetdesante.fr", status: 'dead', year: 2022, link: "http://Moncarnetdesante.fr" },
    { name: "Apprendre-supabase.fr", status: 'dead', year: 2022, link: "" },
    { name: "Mastercontent.com", status: 'dead', year: 2022, link: "" },
    { name: "Bestcodesnippets.com", status: 'dead', year: 2022, link: "" },
    { name: "schoolfordev.com", status: 'dead', year: 2022, link: "http://schoolfordev.com" },
    { name: "bestjobs.tech", status: 'dead', year: 2022, link: "http://bestjobs.tech" },
    { name: "clientsy.go", status: 'dead', year: 2022, link: "" },
    { name: "manageemploye.es", status: 'dead', year: 2023, link: "http://manageemploye.es" },
    { name: "TheContentCreator.business", status: 'dead', year: 2023, link: "http://TheContentCreator.business" },
    { name: "Meetmetrics.com", status: 'dead', year: 2023, link: "" },
    { name: "FakeSocialCounter", status: 'dead', year: 2023, link: "" },
    { name: "Interestingcalls.com", status: 'dead', year: 2023, link: "" },
    { name: "app-status.com", status: 'dead', year: 2023, link: "http://api-status.com" },
    { name: "seo-ressources.com", status: 'dead', year: 2023, link: "http://seo-ressources.com" },
    { name: "Podcastlist.com", status: 'dead', year: 2023, link: "http://Podcastlist.com" },
    { name: "birthlist.com", status: 'dead', year: 2023, link: "" },
    { name: "getreviews.com", status: 'dead', year: 2023, link: "" },
    { name: "landingmasters.com", status: 'dead', year: 2023, link: "http://landingmasters.com" },
    { name: "Migrainedata.app", status: 'dead', year: 2023, link: "http://Migrainedata.app" },
    { name: "Saucer.link", status: 'dead', year: 2023, link: "" },
    { name: "devis.work", status: 'dead', year: 2023, link: "http://devis.work" },
    { name: "Allnewsletters.com", status: 'dead', year: 2023, link: "" },
    { name: "timeline.baby", status: 'dead', year: 2023, link: "http://timeline.baby" },
    { name: "documentation.ai", status: 'dead', year: 2023, link: "" },
    { name: "findproducer.pro", status: 'dead', year: 2023, link: "" },
    { name: "mécénat.art", status: 'dead', year: 2023, link: "http://mécénat.art" },
    { name: "firstweek.co", status: 'dead', year: 2023, link: "" },
    { name: "planelog.co", status: 'dead', year: 2023, link: "http://planehistory.com" },
    { name: "Calendlify.com", status: 'dead', year: 2023, link: "" },
    { name: "tech-pr-agency.com", status: 'dead', year: 2023, link: "" },
    { name: "Jobstarter.com", status: 'dead', year: 2023, link: "" },
    { name: "Whoisthedirector.com", status: 'dead', year: 2023, link: "http://Whoisthedirector.com" },
    { name: "YoutubeTrendsTester.com", status: 'dead', year: 2023, link: "http://YoutubeTrendsTester.com" },
    { name: "Templating.co", status: 'alive', year: 2023, link: "http://Templating.co" },
    { name: "recruiting-software.com", status: 'dead', year: 2023, link: "http://recruiting-software.com" },
    { name: "dev-extension-chrome.com", status: 'dead', year: 2023, link: "" },
    { name: "destinations-ideas.com", status: 'dead', year: 2024, link: "http://destinations-ideas.com" },
    { name: "start-up-mediapack.co", status: 'dead', year: 2024, link: "" },
    { name: "rentalcredibility.com", status: 'dead', year: 2024, link: "http://rentalcredibility.com" },
    { name: "Featured.co", status: 'dead', year: 2024, link: "http://Featured.co" },
    { name: "becoming-a-freelancer.com", status: 'dead', year: 2024, link: "" },
    { name: "smart-calendar.com", status: 'dead', year: 2024, link: "" },
    { name: "Okr-simple.com", status: 'dead', year: 2024, link: "http://Okr-simple.com" },
    { name: "startup-simple.com", status: 'dead', year: 2024, link: "http://startup-simple.com" },
    { name: "allnewsletters.co", status: 'dead', year: 2024, link: "http://allnewsletters.co" },
    { name: "fastshare.id", status: 'dead', year: 2024, link: "http://fastshare.id" },
    { name: "Lancerocket.com", status: 'dead', year: 2024, link: "http://Lancerocket.com" },
    { name: "thedevelopercourse.com", status: 'alive', year: 2024, link: "http://the-developer-course.com" },
    { name: "tech-deals.com", status: 'dead', year: 2024, link: "http://tech-deals.com" },
    { name: "SaaS-deals.com", status: 'dead', year: 2024, link: "http://SaaS-deals.com" },
    { name: "ceowire.co", status: 'dead', year: 2024, link: "http://TopCEOs.com" },
    { name: "analytics-wrapper.com", status: 'dead', year: 2024, link: "http://analytics-wrapper.com" },
    { name: "syndicates.app", status: 'dead', year: 2024, link: "http://syndicates.app" },
    { name: "Trackerpro.com", status: 'dead', year: 2024, link: "" },
    { name: "Parentalkit.com", status: 'pending', year: 2024, link: "http://Parentalkit.com" },
    { name: "Walltube.co", status: 'pending', year: 2024, link: "http://Walltube.co" },
    { name: "house-plans.com", status: 'pending', year: 2024, link: "http://house-plans.com" }
  ];


  return <div className="grid gap-1">
    {items.reverse().map((item, index) => (
      <LinkItem key={index} {...{ item }} />
    ))}
  </div>;
}