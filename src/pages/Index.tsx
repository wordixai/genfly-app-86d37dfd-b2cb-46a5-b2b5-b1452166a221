import { Header } from "@/components/Header";
import { MainChat } from "@/components/MainChat";
import { ProviderIcons } from "@/components/ProviderIcons";
import { ModelCard } from "@/components/ModelCard";
import { Stats } from "@/components/Stats";
import { HowItWorks } from "@/components/HowItWorks";
import { FeatureCards } from "@/components/FeatureCards";
import { QuickActions } from "@/components/QuickActions";
import { Footer } from "@/components/Footer";
import { ExternalLink } from "lucide-react";
const Index = () => {
  return <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="tabular-nums">
        <div className="flex flex-1 flex-col items-center min-h-[calc(100vh-80px)] md:min-h-screen mx-auto bg-background text-foreground mb-16 mt-0 max-w-full lg:mt-8">
          <div className="flex flex-col items-center gap-24 px-6 md:gap-28 md:px-8 md:pt-8">
            
            {/* Hero Section */}
            <div className="flex w-full max-w-4xl flex-col justify-center py-8 md:py-0">
              <div className="mb-3 flex flex-col gap-2 md:-mb-48 md:gap-1">
                <h1 className="my-0 w-full py-0 text-5xl font-semibold">
                  <span className="mb-1 hidden md:block">The Unified</span>
                  <span className="hidden md:block">Interface For LLMs</span>
                  <span className="flex flex-col gap-0.5 text-3xl md:hidden">
                    <div>The Unified</div>
                    <div>Interface For LLMs</div>
                  </span>
                </h1>
                <p className="text-slate-11 text-md mb-4 md:mb-8 md:pt-2 md:text-xl">
                  Better <a href="#" className="text-primary hover:underline">prices</a>, better{" "}
                  <a href="#" className="text-primary hover:underline">uptime</a>, no subscription.
                </p>
              </div>

              {/* Chat Interface and Featured Models */}
              <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-16 min-w-full flex-shrink-0">Featured Models
View Trending
Gemini 2.5 Pro
by google

114.5B

Tokens/wk

2.6s

Latency

+131.79%

Weekly growth

GPT-4.1
by openai

33.3B

Tokens/wk

385ms

Latency

-11.39%

Weekly growth

Claude Sonnet 4
by anthropic

291.0B

Tokens/wk

2.2s

Latency

-13.99%

Weekly growth<MainChat />
                
                <div className="w-full min-w-80 space-y-3 md:w-auto">
                  {/* Mobile routing visual */}
                  <div className="block md:hidden">
                    <svg width="100%" className="h-10" viewBox="0 0 320 32" fill="none">
                      <g stroke="currentColor" strokeWidth="1.5">
                        <path d="M155 2C160 15 60 5 60 18" className="origin-center transition-all duration-300 text-slate-6"></path>
                        <path d="M160 2C160 12 160 15 160 18" className="origin-center transition-all duration-300 text-primary"></path>
                        <path d="M165 2C160 15 260 5 260 18" className="origin-center transition-all duration-300 text-slate-6"></path>
                      </g>
                      <g className="text-slate-7">
                        <circle cy="24" cx="60" r="3" fill="currentColor" className="origin-center transition-all duration-300 text-slate-7"></circle>
                        <circle cy="24" cx="160" r="4" fill="currentColor" className="origin-center transition-all duration-300 text-primary"></circle>
                        <circle cy="24" cx="260" r="3" fill="currentColor" className="origin-center transition-all duration-300 text-slate-7"></circle>
                      </g>
                    </svg>
                    
                    <ProviderIcons />

                    <ModelCard name="GPT-4.1" provider="openai" providerIcon="https://openrouter.ai/images/icons/OpenAI.svg" tokens="33.3B" latency="385ms" growth="-11.39%" growthColor="red" featured={true} invertIcon={true} />

                    <div className="flex items-center justify-between px-2 pt-4">
                      <h2 className="text-slate-11 text-sm font-medium">Featured Models</h2>
                      <a className="text-primary text-xs hover:underline" href="#">
                        View Trending
                        <ExternalLink className="inline-block ml-px size-3" />
                      </a>
                    </div>
                  </div>

                  {/* Desktop featured models */}
                  <div className="hidden space-y-3 md:block">
                    <div className="flex items-center justify-between">
                      <h2 className="text-slate-11 text-sm font-medium">Featured Models</h2>
                      <a className="text-primary text-xs hover:underline" href="#">
                        View Trending
                        <ExternalLink className="inline-block ml-px size-3" />
                      </a>
                    </div>

                    <ModelCard name="Gemini 2.5 Pro" provider="google" providerIcon="https://openrouter.ai/images/icons/GoogleGemini.svg" tokens="114.5B" latency="2.6s" growth="+131.79%" growthColor="green" />

                    <ModelCard name="GPT-4.1" provider="openai" providerIcon="https://openrouter.ai/images/icons/OpenAI.svg" tokens="33.3B" latency="385ms" growth="-11.39%" growthColor="red" featured={true} invertIcon={true} />

                    <ModelCard name="Claude Sonnet 4" provider="anthropic" providerIcon="https://openrouter.ai/images/icons/Anthropic.svg" tokens="291.0B" latency="2.2s" growth="-13.99%" growthColor="red" />
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-col gap-8 md:gap-12">
              <Stats />
            </div>

            {/* How It Works */}
            <div className="space-y-8 md:space-y-12 max-w-4xl mx-auto px-6">
              <HowItWorks />
            </div>

            {/* Feature Cards */}
            <div className="space-y-4 md:space-y-8">
              <FeatureCards />
            </div>

            {/* Quick Actions and Announcements */}
            <div className="w-full max-w-4xl">
              <QuickActions />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>;
};
export default Index;