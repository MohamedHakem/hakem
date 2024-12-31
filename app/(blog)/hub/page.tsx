import SiteFooter from "@/components/blog/footer";
import SiteHeader from "@/components/blog/header";
import HeroSection from "@/components/blog/hero";
import ResourceHubCard from "@/components/blog/hub-card";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SiteHeader />
      <main>
        <HeroSection />

        {/* Resource Hubs */}
        <section className="container py-16">
          <h2 className="mb-8 text-2xl font-bold">Resource Hubs</h2>
          <div className="grid gap-8">
            {/* SEO & Content Marketing */}
            <div className="grid gap-8 md:grid-cols-2">
              <ResourceHubCard
                title="SEO Basics"
                description="Learn the basics of SEO all in one place, including content optimization, keyword research, and more."
                color="bg-cyan-100"
                // image="/placeholder.svg"
                links={[
                  { title: 'What Is SEO?', href: '#' },
                  { title: 'Keyword Research', href: '#' },
                  { title: 'Technical SEO', href: '#' }
                ]}
              />
              <ResourceHubCard
                title="Link Building"
                description="Learn how to build high-quality backlinks to your site using proven strategies."
                color="bg-orange-100"
                // image="/placeholder.svg"
                links={[
                  { title: 'Link Building: The Definitive Guide', href: '#' },
                  { title: 'How to Get Backlinks', href: '#' },
                  { title: 'Resource Page Link Building', href: '#' }
                ]}
              />
            </div>

            {/* Career Development */}
            <div className="grid gap-8 md:grid-cols-2">
              <ResourceHubCard
                title="Resume Building"
                description="Master the art of crafting compelling resumes that get you noticed by top employers."
                color="bg-blue-100"
                // image="/placeholder.svg"
                links={[
                  { title: 'Resume Writing Guide', href: '#' },
                  { title: 'ATS-Friendly Templates', href: '#' },
                  { title: 'Resume Keywords Optimization', href: '#' }
                ]}
              />
              <ResourceHubCard
                title="Technical Interviews"
                description="Comprehensive guide to ace technical interviews at top tech companies."
                color="bg-purple-100"
                // image="/placeholder.svg"
                links={[
                  { title: 'Data Structures & Algorithms', href: '#' },
                  { title: 'Coding Interview Patterns', href: '#' },
                  { title: 'Problem Solving Strategies', href: '#' }
                ]}
              />
            </div>

            {/* Interview Preparation */}
            <div className="grid gap-8 md:grid-cols-2">
              <ResourceHubCard
                title="System Design"
                description="Learn how to design scalable systems and tackle complex architectural challenges."
                color="bg-pink-100"
                // image="/placeholder.svg"
                links={[
                  { title: 'System Design Fundamentals', href: '#' },
                  { title: 'Scalability Patterns', href: '#' },
                  { title: 'Real-world Case Studies', href: '#' }
                ]}
              />
              <ResourceHubCard
                title="Behavioral Interviews"
                description="Master the STAR method and prepare for behavioral questions effectively."
                color="bg-yellow-100"
                // image="/placeholder.svg"
                links={[
                  { title: 'STAR Method Guide', href: '#' },
                  { title: 'Common Questions & Answers', href: '#' },
                  { title: 'Leadership Examples', href: '#' }
                ]}
              />
            </div>

            {/* Cloud & DevOps */}
            <div className="grid gap-8 md:grid-cols-2">
              <ResourceHubCard
                title="AWS Certification"
                description="Complete guide to AWS certifications and cloud architecture principles."
                color="bg-amber-100"
                // image="/placeholder.svg"
                links={[
                  { title: 'AWS Solution Architect', href: '#' },
                  { title: 'Cloud Design Patterns', href: '#' },
                  { title: 'AWS Best Practices', href: '#' }
                ]}
              />
              <ResourceHubCard
                title="DevOps Practices"
                description="Learn modern DevOps practices and tools for efficient development."
                color="bg-emerald-100"
                // image="/placeholder.svg"
                links={[
                  { title: 'CI/CD Pipeline Setup', href: '#' },
                  { title: 'Container Orchestration', href: '#' },
                  { title: 'Infrastructure as Code', href: '#' }
                ]}
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
