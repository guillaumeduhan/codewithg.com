'use client';

import { ExternalLink } from "lucide-react";

export const LinkItem = ({ item }: any) => {
  return <div className="flex items-center gap-1">
    <div className="px-1 rounded-full text-xs bg-neutral-200 text-black">{item.year || item.price}</div>
    <div className={`tag px-1 rounded-full text-xs text-black font-[500] ${item.status}`}>{item.status}</div>
    <ExternalLink className="w-4 text-neutral-400" />
    <a href={item.link} target="_blank" className={`lowercase ${item.aborted ? 'aborted' : ''}`}>{item.name}</a>
    <p>{item.description}</p>
  </div>
}

export default function Projects() {
  const items = [
    { name: "Freebusinessideas.co", status: 'dead', year: 2021, description: "Business idea collection site" },
    { name: "Internships.live", status: 'dead', year: 2022, description: "Platform for finding internships" },
    { name: "Findwork.live", status: 'dead', year: 2022, description: "Job search platform" },
    { name: "Tutorials.com", status: 'dead', year: 2022, description: "Tutorial hosting site" },
    { name: "photographer-Airbnb.com", status: 'dead', year: 2022, description: "Photographer services marketplace" },
    { name: "bestworkshops.com", status: 'dead', year: 2022, description: "Workshops directory" },
    { name: "Blockchainjobs.gg", status: 'dead', year: 2022, description: "Job board for blockchain-related jobs" },
    { name: "Vueworkshop.com", status: 'dead', year: 2022, description: "Vue.js workshop site" },
    { name: "Brandmy.team", status: 'dead', year: 2022, description: "Team branding tools" },
    { name: "Creatorfund.com", status: 'dead', year: 2022, description: "Fundraising platform for creators" },
    { name: "Bestcofounder.com", status: 'dead', year: 2022, description: "Find co-founders for startups" },
    { name: "Vuetifytools.com", status: 'dead', year: 2022, description: "Tools for Vuetify" },
    { name: "vscode-vue.com", status: 'dead', year: 2022, description: "VSCode tools for Vue.js" },
    { name: "Startuplist.com", status: 'dead', year: 2022, description: "Startup listing directory" },
    { name: "Bestelectriccars.gg", status: 'dead', year: 2022, description: "Information on electric cars" },
    { name: "creatorcamp.tv", status: 'dead', year: 2022, description: "Creator-focused educational content" },
    { name: "Welcomebaby.app", status: 'dead', year: 2022, description: "App for new parents" },
    { name: "Brandambassadors.com", status: 'dead', year: 2022, description: "Connect with brand ambassadors" },
    { name: "Learning platform", status: 'dead', year: 2022, description: "Educational platform" },
    { name: "testi.fy", status: 'dead', year: 2022, description: "Testing tool for developers" },
    { name: "rulify", status: 'dead', year: 2022, description: "Rule-based automation tool" },
    { name: "Moncarnetdesante.fr", status: 'dead', year: 2022, description: "Health tracking app" },
    { name: "Apprendre-supabase.fr", status: 'dead', year: 2022, description: "Learn Supabase" },
    { name: "Mastercontent.com", status: 'dead', year: 2022, description: "Content creation platform" },
    { name: "Bestcodesnippets.com", status: 'dead', year: 2022, description: "Code snippet sharing platform" },
    { name: "schoolfordev.com", status: 'dead', year: 2022, description: "Developer education platform" },
    { name: "bestjobs.tech", status: 'dead', year: 2022, description: "Tech job board" },
    { name: "clientsy.go", status: 'dead', year: 2022, description: "Client management tool" },
    { name: "manageemploye.es", status: 'dead', year: 2023, description: "Employee management platform" },
    { name: "TheContentCreator.business", status: 'dead', year: 2023, description: "Business tools for content creators" },
    { name: "Meetmetrics.com", status: 'dead', year: 2023, description: "Meeting analytics platform" },
    { name: "FakeSocialCounter", status: 'dead', year: 2023, description: "Fake social media counter tool" },
    { name: "Interestingcalls.com", status: 'dead', year: 2023, description: "Interesting phone calls database" },
    { name: "app-status.com", status: 'dead', year: 2023, description: "App status monitoring platform" },
    { name: "seo-ressources.com", status: 'dead', year: 2023, description: "SEO resources and tools" },
    { name: "Podcastlist.com", status: 'dead', year: 2023, description: "Podcast directory" },
    { name: "birthlist.com", status: 'dead', year: 2023, description: "Birth planning tool" },
    { name: "getreviews.com", status: 'dead', year: 2023, description: "Get product reviews platform" },
    { name: "landingmasters.com", status: 'dead', year: 2023, description: "Landing page creation tool" },
    { name: "Migrainedata.app", status: 'dead', year: 2023, description: "Migraine data tracking app" },
    { name: "Saucer.link", status: 'dead', year: 2023, description: "Link management tool" },
    { name: "devis.work", status: 'dead', year: 2023, description: "Work proposal platform" },
    { name: "Allnewsletters.com", status: 'dead', year: 2023, description: "Newsletter management tool" },
    { name: "timeline.baby", status: 'dead', year: 2023, description: "Baby timeline tracker" },
    { name: "documentation.ai", status: 'dead', year: 2023, description: "AI-powered documentation tool" },
    { name: "findproducer.pro", status: 'dead', year: 2023, description: "Find producers for projects" },
    { name: "mécénat.art", status: 'dead', year: 2023, description: "Art patronage platform" },
    { name: "firstweek.co", status: 'dead', year: 2023, description: "Tool for planning the first week of projects" },
    { name: "planelog.co", status: 'dead', year: 2023, description: "Aircraft log management tool" },
    { name: "Calendlify.com", status: 'dead', year: 2023, description: "Calendar scheduling platform" },
    { name: "tech-pr-agency.com", status: 'dead', year: 2023, description: "PR agency for tech companies" },
    { name: "Jobstarter.com", status: 'dead', year: 2023, description: "Job starter guide" },
    { name: "Whoisthedirector.com", status: 'dead', year: 2023, description: "Find out who directed a film" },
    { name: "YoutubeTrendsTester.com", status: 'dead', year: 2023, description: "YouTube trends testing platform" },
    { name: "Templating.co", status: 'alive', year: 2023, description: "Template creation platform" },
    { name: "recruiting-software.com", status: 'dead', year: 2023, description: "Recruiting software" },
    { name: "dev-extension-chrome.com", status: 'dead', year: 2023, description: "Chrome extension for developers" },
    { name: "destinations-ideas.com", status: 'dead', year: 2024, description: "Travel destination ideas" },
    { name: "start-up-mediapack.co", status: 'dead', year: 2024, description: "Media pack for startups" },
    { name: "rentalcredibility.com", status: 'dead', year: 2024, description: "Rental credibility service" },
    { name: "Featured.co", status: 'dead', year: 2024, description: "Featured startup listing site" },
    { name: "becoming-a-freelancer.com", status: 'dead', year: 2024, description: "Guide to becoming a freelancer" },
    { name: "smart-calendar.com", status: 'dead', year: 2024, description: "Smart calendar tool" },
    { name: "Okr-simple.com", status: 'dead', year: 2024, description: "OKR management tool" },
    { name: "startup-simple.com", status: 'dead', year: 2024, description: "Simple startup tools" },
    { name: "allnewsletters.co", status: 'dead', year: 2024, description: "Newsletter management platform" },
    { name: "fastshare.id", status: 'dead', year: 2024, description: "Fast file sharing service" },
    { name: "Lancerocket.com", status: 'dead', year: 2024, description: "Freelancer launch platform" },
    { name: "thedevelopercourse.com", status: 'alive', year: 2024, description: "Online developer course" },
    { name: "tech-deals.com", status: 'dead', year: 2024, description: "Deals on tech products" },
    { name: "SaaS-deals.com", status: 'dead', year: 2024, description: "Deals on SaaS products" },
    { name: "ceowire.co", status: 'dead', year: 2024, description: "CEO news platform" },
    { name: "analytics-wrapper.com", status: 'dead', year: 2024, description: "Analytics wrapper tool" },
    { name: "syndicates.app", status: 'dead', year: 2024, description: "Syndicate management tool" },
    { name: "Trackerpro.com", status: 'dead', year: 2024, description: "Professional tracking tool" },
    { name: "Parentalkit.com", status: 'pending', year: 2024, description: "Parenting toolkit app" },
    { name: "Walltube.co", status: 'pending', year: 2024, description: "Video wallpaper platform" },
    { name: "house-plans.com", status: 'pending', year: 2024, description: "House planning service" }
  ];


  return <div className="grid gap-4">
    <header>
      <h1 className="font-[400]">Projects</h1>
    </header>
    <div className="grid gap-1">
      {items.reverse().map((item, index) => (
        <LinkItem key={index} {...{ item }} />
      ))}
    </div>
  </div>;
}