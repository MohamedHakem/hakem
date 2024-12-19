import { Star } from '@/components/icons/star';
import UpworkIcon from '@/components/icons/upwork-icon';
import Section from '@/components/section';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Clock8, Cloud, Mail, MapPin, Twitter } from 'lucide-react';
import Image from 'next/image';

import HelwanUni from '@/public/edu-helwan-eng.webp';
import ITIEdu from '@/public/iti-shubra-chemistry.webp';
import SupremeCouncilCairoUni from '@/public/Supreme-Council-of-Universities.jpg';
import AWSCERT from '@/public/AWS-Certified-Cloud-Practitioner_badge.png';
import EFSETCERTIFIED from '@/public/efset_logo.jpeg';
import UdacityLogo from '@/public/udacity_logo.jpeg';

import SltyLanding from '@/public/slty-shop-hd.jpg';

import YTIcon from '@/public/youtube.webp';

// import MathCourse from '@/public/math-fundamentals-in-arabic-course.jpg';
import MathCourse from '@/public/math-fundamentals-in-arabic-course-mohamed-hakem-mohamed-abdelhamied.png';

import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import VaulDrawer from '@/components/vaul-drawer';

import { platformsAndServices, Testimonials, UpworkClients, WorkEx, YTVideos } from '@/lib/data';
import Link from 'next/link';

export default function HakemPage() {
  // each item should have a title that says what this platform/service is, and a start date
  // more services from github education pack (you'll find a lot you can use for free as a student and add here!)

  // make the timeline act like a /now page, for example, on Dec 2, 2024, you gave a live session on Cloud Computing - AWS
  // list the titles you covered, how many attended, the general feedback & some specific feedback, and what you learned from it
  // also, list the next session you're planning, and what you're preparing for it
  // and make that as an item in the timeline, try to make a bit clear by iterating the white/gray bg colors for the year or the item
  // and maybe a color coding for the items, like green for achievements, blue for projects, etc.

  return (
    <div className="columns-1 space-y-5 md:space-y-6 py-3 px-3 md:py-8 w-full sm:max-w-screen-sm mx-auto">
      <Section title="Hakem" contactIcons className="md:px-3 md:pt-3">
        <div className="flex flex-col text-[13px]">
          <p>
            Led development at a US <span className="hidden md:inline">Health-Tech</span> startup; secured $2M in
            funding.
          </p>
          <p>5-figure earner with 100% success on Upwork.</p>
          <p>National STEM Competition winner.</p>
          <p>AWS Certified.</p>
        </div>
        <div className="flex flex-wrap gap-1 md:gap-2 lg:grid-cols-[.9fr_0.8fr_1fr] mt-0.5">
          <a href={'mailto:hi@hakem.pro'}>
            <Badge variant={'secondary'} icon={<Mail size={'18'} fill="#fefae0" color="#ccc" />}>
              hi@hakem.pro
            </Badge>
          </a>
          <a href={'https://www.upwork.com/freelancers/~01675da7684c6193a5'}>
            <Badge variant={'secondary'} icon={<UpworkIcon width={18} height={18} />}>
              Upwork
            </Badge>
          </a>
          <a href={'/Mohamed-Hakem_Product-Engineer_Resume.pdf'}>
            <Badge variant={'secondary'}>📋 Resume</Badge>
          </a>
          <a href={'https://twitter.com/ywkem'}>
            <Badge variant={'secondary'} icon={<Twitter width={21} height={21} fill="#1DA1F2" color="#1DA1F2" />} />
          </a>
          <a href={'https://www.youtube.com/@CodeWithHakem'}>
            <Badge
              variant={'secondary'}
              icon={<Image src={YTIcon} alt={'@CodeWithHakem YouTube Channel'} width={22} height={22} />}
            >
              {/* CodeWithHakem */}
            </Badge>
          </a>
          {/* <a href={'https://github.com/MohamedHakem'}>
            <Badge variant={'secondary'} icon={<GitHubLogoIcon width={18} height={18} />}>
            </Badge>
          </a>
          <a href={'https://www.linkedin.com/in/m-hakem/'}>
            <Badge variant={'secondary'} icon={<LinkedInLogoIcon width={18} height={18} color="#0077B5" />}>
            </Badge>
          </a>
          <a href={'https://twitter.com/ywkem'}>
            <Badge variant={'secondary'} icon={<Twitter width={18} height={18} fill="#1DA1F2" color="#1DA1F2" />}>
            </Badge>
          </a> */}
          {/* <a href={'https://www.youtube.com/@CodeWithHakem'}>
            <Badge variant={'secondary'} icon={<VideoIcon width={18} height={18} color="red" fill="red" />}>
              CodeWithHakem
            </Badge>
          </a> */}
          {/* 
          If it's not impressive, then it's a negative - remove for now 
          <a href={'https://www.hackerrank.com/profile/mohamedhakem'}>
            <Badge variant={'secondary'}>👨‍💻 HackerRank</Badge>
          </a>
          <a href={'https://leetcode.com/u/MohamedHakem/'}>
            <Badge variant={'secondary'}>🧮 LeetCode</Badge>
          </a>
          <a href={'/blog'}>
            <Badge variant={'secondary'}>🧮 Blog</Badge>
          </a> 
          */}
        </div>
      </Section>

      <Section title="⭐ Highlights">
        <div className="flex flex-col gap-1 text-midsm text-zinc-600">
          <p className="bg-[#e0e0e060] py-1.5 md:py-2 px-2.5 rounded-xl">
            {/* BaskHealth, Health Tech (US): Led core features (multi-tenant, client portals, onboarding, ReactFlow) that secured $2M
            in funding. My work including full stack development, code reviews, managing Git workflows, task management
            built a solid foundation for growth and investor confidence. */}
            <strong className="bg-[e0e0e0]">BaskHealth (US, Health Tech):</strong> Led core feature development (e.g.,
            multi-tenant architecture, role-based dashboards), securing $2M in funding.
          </p>
          <p className="bg-[#e0e0e060] py-1.5 px-2.5 rounded-xl">
            <strong className="bg-[e0e0e0]">Trading Platform (Canada, FinTech):</strong> Integrated TradingView for
            real-time visualization, resolving critical bottlenecks and boosting engagement.
          </p>
          <p className="bg-[#e0e0e060] py-1.5 px-2.5 rounded-xl">
            <strong className="bg-[e0e0e0]">Isearch Archive (London, E-Commerce):</strong> Improved checkout speed by
            1600% (16s to 1s), driving retention and revenue growth.
          </p>
        </div>
      </Section>

      <Section title="💼 Work Experience" scrollable className="max-h-[20rem]">
        <div className="overflow-y-auto scrollbar-hidden px-3 pt-3 pb-16">
          <ul className="grid grid-cols-1 gap-1.5 md:gap-2 text-midsm text-zinc-600 overflow-y-scroll overflow-x-hidden w-full scroll-smooth scrollbar-hidden">
            {WorkEx.map((workItem, index) => (
              <li key={index} title={workItem.position}>
                <div className="w-full overflow-hidden transition-all ease-in-out duration-100 hover:scale-[.98] active:scale-[.96]">
                  <VaulDrawer
                    trigger={
                      <div className="flex items-center gap-2 rounded-lg bg-[#e0e0e060] px-2.5 py-2 h-12 w-full overflow-hidden">
                        {workItem.img && (
                          <Image
                            src={workItem.img}
                            alt={workItem.position}
                            width={32}
                            height={32}
                            className="h-8 w-8 rounded-full flex-shrink-0"
                          />
                        )}

                        <div className="flex items-center flex-grow overflow-hidden justify-between">
                          <div className="flex flex-col items-start text-start flex-grow text-xs truncate overflow-hidden min-w-0">
                            <span className="font-bold leading-5">{workItem.position}</span>
                            <div className="flex gap-1 text-gray-500 w-[95%] truncate overflow-hidden min-w-0">
                              {workItem.company}
                            </div>
                          </div>
                          <div className="flex gap-1 mr-2 h-5">
                            {workItem.location && (
                              <Badge
                                variant={'secondary'}
                                icon={<MapPin size={'16'} fill="#fefae0" color="#ccc" className="size-3 md:size-4" />}
                                className="px-[3px] !py-[2px] leading-[10px] text-[8px] md:text-[10px]"
                              >
                                {workItem.location}
                              </Badge>
                            )}
                            {workItem.workType && (
                              <Badge
                                variant={'secondary'}
                                responsive={'hidden xs:flex'}
                                icon={<Cloud size={'16'} fill="#fefae0" color="#ccc" className="size-3 md:size-4" />}
                                className="px-[3px] !py-[2px] leading-[10px] text-[8px] md:text-[10px]"
                              >
                                {workItem.workType}
                              </Badge>
                            )}
                            {workItem.employmentType && (
                              <Badge
                                variant={'secondary'}
                                responsive={'hidden xxs:flex'}
                                icon={<Clock8 size={'16'} fill="#fefae0" color="#ccc" className="size-3 md:size-4" />}
                                className="px-[3px] !py-[2px] leading-[10px] text-[8px] md:text-[10px]"
                              >
                                {workItem.employmentType}
                              </Badge>
                            )}
                          </div>

                          <div className="h-6 w-[57px] rounded-md flex items-center px-2 text-xs bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80">
                            Expand
                          </div>
                        </div>
                      </div>
                    }
                    title={
                      <div className="flex items-center gap-2 rounded-xl w-full overflow-hidden">
                        {workItem.img && (
                          <Image
                            src={workItem.img}
                            alt={workItem.position}
                            width={44}
                            height={44}
                            className="h-11 w-11 rounded-full flex-shrink-0"
                          />
                        )}

                        <div className="flex items-center flex-grow overflow-hidden justify-between">
                          <div className="flex flex-col items-start text-start flex-grow text-xs flex-wrap min-w-0">
                            <span className="font-bold leading-5">{workItem.position}</span>
                            <span className="text-gray-500 w-[95%] flex-wrap min-w-0">{workItem.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star filled viewOnly rating={5} size="sm" />
                            <span className="hidden text-xs">5.0</span>
                          </div>
                        </div>
                      </div>
                    }
                    content={
                      <ScrollArea
                        className="bg-transparent border-t whitespace-pre-wrap overflow-y-auto"
                        longContent={workItem.desc.length > 400}
                      >
                        <div>
                          <div className="text-midsm text-zinc-600 pt-2">{workItem.descIntro}</div>
                          <ul className="grid grid-cols-1 gap-1.5 md:gap-2 py-4 text-midsm text-zinc-600 overflow-y-scroll overflow-x-hidden w-full scroll-smooth scrollbar-hidden">
                            {workItem.desc.map((line, index) => (
                              <li
                                key={index}
                                className="flex items-center gap-2 rounded-lg bg-[#e0e0e060] px-2.5 py-1 md:py-1.5 w-full overflow-hidden"
                              >
                                <span>
                                  <strong>{line.bold}</strong> {line.text}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </ScrollArea>
                    }
                  />
                </div>
                {index === 4 && <div className="mt-4 pl-1">Earlier, non-tech jobs</div>}
                {index === 6 && <Separator className="mt-4 mb-3" />}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section title="🎓 Education">
        <div>
          <ul className="grid grid-cols-1 gap-1.5 md:gap-2 text-midsm text-zinc-600 overflow-y-scroll overflow-x-hidden w-full scroll-smooth scrollbar-hidden">
            <li className="w-full overflow-hidden">
              <div className="flex items-center gap-2 rounded-lg bg-[#e0e0e060] px-2.5 py-1.5 md:py-1.5 w-full overflow-hidden">
                <Image
                  src={HelwanUni}
                  alt={'BSc of Computer Software Engineering at Helwan University'}
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full flex-shrink-0 object-cover"
                />

                <div className="flex items-center flex-grow overflow-hidden justify-between">
                  <div className="flex flex-col items-start text-start flex-grow text-xs truncate overflow-hidden min-w-0">
                    <div className="w-full flex justify-between items-center font-bold leading-5">
                      {'BSc of Computer Software Engineering'}
                    </div>
                    <span className="text-[9px] leading-[10px] text-gray-500 w-[95%] truncate overflow-hidden min-w-0">
                      {'Helwan University'}
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li className="w-full overflow-hidden">
              <div className="flex items-center gap-2 rounded-lg bg-[#e0e0e060] px-2.5 py-1.5 md:py-1.5 w-full overflow-hidden">
                <Image
                  src={SupremeCouncilCairoUni}
                  alt={'Winner of National STEM Competition'}
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full flex-shrink-0 object-cover"
                />

                <div className="flex items-center flex-grow overflow-hidden justify-between">
                  <div className="flex flex-col items-start text-start flex-grow text-xs truncate overflow-hidden min-w-0">
                    <div className="w-full flex justify-between items-center font-bold leading-5">
                      <span className="w-[97%] truncate overflow-hidden min-w-0">
                        {'Winner of National STEM Competition'}
                      </span>
                      <div className="bg-secondary py-0.5 px-2 text-[9px] leading-[10px] text-gray-500 font-normal rounded-md border">
                        2019
                      </div>
                    </div>
                    <span className="text-[9px] leading-[10px] text-gray-500 w-full truncate overflow-hidden min-w-0">
                      {'Supreme Council of Universities - Engineering, Cairo University'}
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li className="w-full overflow-hidden">
              <div className="flex items-center gap-2 rounded-lg bg-[#e0e0e060] px-2.5 py-1.5 md:py-1.5 w-full overflow-hidden">
                <Image
                  src={ITIEdu}
                  alt={'Associate of science Degree in Analytical Chemistry'}
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full flex-shrink-0"
                />

                <div className="flex items-center flex-grow overflow-hidden justify-between">
                  <div className="flex flex-col items-start text-start flex-grow text-xs truncate overflow-hidden min-w-0">
                    <span className="font-bold text-[11px] leading-4 flex-wrap w-[98%] md:w-full truncate overflow-hidden min-w-0">
                      {'Associate of science Degree in Analytical Chemistry'}
                    </span>
                    <div className="flex justify-between text-[9px] leading-[10px] text-gray-500 w-[95%] md:w-full truncate overflow-hidden min-w-0">
                      <span className="w-[98%] md:w-full truncate overflow-hidden min-w-0">
                        {'Industrial Technical Institute - Shubra'}
                      </span>
                      <div className="bg-secondary py-0.5 px-2 rounded-md border">2018</div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </Section>

      <Section title="🚀 Projects" className="max-h-full">
        <div className="my-2">
          <div className="flex flex-col gap-2 md:gap-0 md:flex-row border rounded-xl px-4 py-4 bg-[#f7f5f3]">
            <div className="w-full md:w-1/2 flex flex-col gap-2">
              <a href={'https://slty.shop/'} target="_blank">
                <h2 className="font-semibold text-xl">Slty</h2>
              </a>
              <p className="text-sm text-gray-500 flex-wrap">
                A Simpler Shopify Alternative with Growth Tools and Invite-Only Marketplace
              </p>
            </div>
            <div className="w-full md:w-1/2 border rounded-xl overflow-hidden">
              <Image
                src={SltyLanding.src}
                width={SltyLanding.width}
                height={SltyLanding.height}
                alt={'Slty – An Easier Shopify Alternative with Growth Tools and Invite-Only Marketplace'}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* <Section title="Timeline" gridOrder="7" gridOrderMD="6" mdColSpan="1" mdRowSpan="4">
        <p>Timeline of achievements or projects.</p>
      </Section> */}

      <Section title="💬 Testimonials" scrollable className="max-h-[15rem]">
        <div className="overflow-y-auto scrollbar-hidden px-3 pt-3 pb-16">
          <ul className="grid grid-cols-1 gap-1.5 md:gap-2 text-midsm text-zinc-600 overflow-y-scroll overflow-x-hidden w-full scroll-smooth scrollbar-hidden">
            {Testimonials.map((testimonial, index) => (
              <li
                key={index}
                title={testimonial.name}
                className="w-full overflow-hidden rounded-lg bg-[#e0e0e060] transition-all ease-in-out duration-100 hover:scale-[.98] active:scale-[.96]"
              >
                <VaulDrawer
                  trigger={
                    <div className="flex items-center gap-2 px-2.5 py-1 md:py-1.5 w-full bg-[#e0e0e050] hover:bg-[#e0e0e080]">
                      {testimonial.img && (
                        <Image
                          src={testimonial.img}
                          alt={testimonial.name}
                          width={32}
                          height={32}
                          className="h-8 w-8 rounded-full flex-shrink-0"
                        />
                      )}

                      <div className="flex items-center flex-grow overflow-hidden justify-between">
                        <div
                          // title="see on my Upwork Profile"
                          className="flex flex-col items-start text-start flex-grow text-xs truncate overflow-hidden min-w-0"
                        >
                          <span className="font-bold leading-5">{testimonial.name}</span>
                          <span className="text-[9px] leading-[10px] text-gray-500 w-[95%] truncate overflow-hidden min-w-0">
                            {testimonial.position}
                          </span>
                        </div>

                        <div className="h-6 w-[57px] rounded-md flex items-center px-2 text-xs bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80">
                          Expand
                        </div>
                      </div>
                    </div>
                  }
                  title={
                    <div className="flex items-center gap-2 rounded-xl w-full overflow-hidden">
                      {testimonial.img && (
                        <Image
                          src={testimonial.img}
                          alt={testimonial.name}
                          width={44}
                          height={44}
                          className="h-11 w-11 rounded-full flex-shrink-0"
                        />
                      )}

                      <div className="flex items-center flex-grow overflow-hidden justify-between">
                        <div
                          // title="see on my Upwork Profile"
                          className="flex flex-col items-start text-start flex-grow text-xs flex-wrap min-w-0"
                        >
                          <span className="font-bold leading-5">{testimonial.name}</span>
                          <span className="text-[9px] leading-[10px] text-gray-500 w-[95%] flex-wrap min-w-0">
                            {testimonial.position}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star filled viewOnly rating={5} size="sm" />
                          <span className="hidden text-xs">5.0</span>
                        </div>
                      </div>
                    </div>
                  }
                  content={
                    <ScrollArea
                      className="bg-transparent border-t whitespace-pre-wrap overflow-y-auto"
                      longContent={testimonial.testimonial.length > 400}
                    >
                      {/* <div className="px-4 pt-1 pb-8 rounded-b-[36px]">"{testimonial.testimonial}"</div> */}
                      <div>{`\n"${testimonial.testimonial}"`}</div>
                    </ScrollArea>
                  }
                />
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* <Section title="✍️ Blog" gridOrder="9" gridOrderMD="4" mdColSpan="1" mdRowSpan="2">
        <p>Latest blog posts here.</p>
      </Section> */}

      {/* <Section title="📙 Courses" gridOrder="10" gridOrderMD="8" mdColSpan="1" mdRowSpan="1">
        <p>Courses you’ve completed or offer.</p>
      </Section> */}

      <Section title="✏️ Courses I Published">
        <Link
          href={'https://www.udemy.com/course/learn-math-fundamentals-in-arabic/'}
          target="_blank"
          className="my-1 bg-[#f7f5f3] hover:bg-[#f7f5f380] transition-all ease-in-out duration-200 hover:scale-[.98] active:scale-[.96] border rounded-xl overflow-hidden"
        >
          <div className="flex flex-row gap-1 md:gap-2">
            <Image
              src={MathCourse}
              alt={'Learn Math Fundamentals - احترف أساسيات الرياضيات'}
              className="w-[146px] md:w-[220px] h-[82px] md:h-[123px] border-r border-[#e0e0e060]"
            />
            <div className="flex flex-col">
              <span className="px-2 py-1 md:font-semibold text-sm md:text-base md:py-2 underline-offset-2">
                Learn Math Fundamentals - احترف أساسيات الرياضيات
              </span>
              <span className="px-2 text-xs text-gray-500">34 lectures</span>
              <span className="px-2 text-xs text-gray-500">Available on Udemy</span>
            </div>
          </div>
        </Link>
        <p className="text-[11px] md:text-xs text-accent-foreground text-center">
          Co-authored with{' '}
          <Link
            href={'https://www.linkedin.com/in/mohamed-abdelhamied'}
            target={'_blank'}
            className="underline text-blue-500"
          >
            Mohamed Abdelhamied - Lead Software Engineer
          </Link>
        </p>
      </Section>

      <Section
        title="✅ Upwork"
        title2="100% Job Success"
        scrollable
        ctaText="See on Upwork"
        ctaLink={'https://www.upwork.com/freelancers/~01675da7684c6193a5'}
        ctaVariant="upwork"
        className="max-h-[15rem]"
      >
        <div className="overflow-y-auto scrollbar-hidden px-3 pt-3 pb-16">
          <ul className="grid grid-cols-1 gap-1.5 md:gap-2 text-midsm text-zinc-600 overflow-y-scroll overflow-x-hidden w-full scroll-smooth scrollbar-hidden">
            {UpworkClients.reverse().map((upworkJob) => (
              <li
                key={upworkJob.title}
                title={upworkJob.title}
                className={cn(
                  'flex items-center gap-2 rounded-lg bg-[#e0e0e060] px-2.5 py-1 md:py-1.5 w-full overflow-hidden',
                  'transition-all ease-in-out duration-100 hover:scale-[.98] active:scale-[.96]'
                )}
              >
                {upworkJob.img && (
                  <Image
                    src={upworkJob.img}
                    alt={upworkJob.title}
                    width={32}
                    height={32}
                    className="h-8 w-8 rounded-full flex-shrink-0"
                  />
                )}

                <div className="flex items-center flex-grow overflow-hidden justify-between">
                  <div
                    className="text-xs font-semibold truncate overflow-hidden min-w-0"
                    title="see on my Upwork Profile"
                  >
                    {upworkJob.title}
                  </div>

                  <div className="ml-2 w-[60px] flex-shrink-0">
                    <Star filled viewOnly rating={5} size="sm" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section title="🏆 Achievements & Certifications">
        <div className="grid grid-cols-1 gap-1.5 md:gap-2 text-midsm text-zinc-600 overflow-y-scroll overflow-x-hidden w-full scroll-smooth scrollbar-hidden">
          <div className="w-full overflow-hidden">
            <div className="flex items-center gap-2 rounded-lg bg-[#e0e0e060] px-2.5 py-1.5 md:py-1.5 w-full overflow-hidden">
              <Image
                src={SupremeCouncilCairoUni}
                alt={'Winner of National STEM Competition'}
                width={44}
                height={44}
                className="h-8 w-8 rounded-full flex-shrink-0 object-cover"
              />

              <div className="flex items-center flex-grow overflow-hidden justify-between">
                <div className="flex flex-col items-start text-start flex-grow text-xs truncate overflow-hidden min-w-0">
                  <div className="w-full flex justify-between items-center font-bold leading-5">
                    <span className="w-[97%] truncate overflow-hidden min-w-0">
                      {'Winner of National STEM Competition'}
                    </span>
                    <div className="bg-secondary py-0.5 px-1 text-[9px] md:text-[12px] leading-[10px] md:leading-4 text-gray-500 font-normal rounded-md border">
                      2019
                    </div>
                  </div>
                  <span className="text-[12px] leading-[12px] md:text-[14px] md:leading-4 w-full truncate overflow-hidden min-w-0">
                    <a
                      href={'/National-Stem-Competition-Winner-Supreme-Council-Cairo-University.jpeg'}
                      target="_blank"
                      className="text-blue-500 underline underline-offset-1"
                    >
                      Verify
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full overflow-hidden">
            <div className="flex items-center gap-2 rounded-lg bg-[#e0e0e060] px-2.5 py-1.5 md:py-1.5 w-full overflow-hidden">
              <Image
                src={AWSCERT}
                alt={'AWS Certified Cloud Practitioner'}
                width={44}
                height={44}
                className="h-8 w-8 rounded-full flex-shrink-0 object-cover"
              />

              <div className="flex items-center flex-grow overflow-hidden justify-between">
                <div className="flex flex-col items-start text-start flex-grow text-xs truncate overflow-hidden min-w-0">
                  <div className="w-full flex justify-between items-center font-bold leading-5">
                    <span className="w-[97%] truncate overflow-hidden min-w-0">AWS Certified Cloud Practitioner</span>
                    <div className="bg-secondary py-0.5 px-1 text-[9px] md:text-[12px] leading-[10px] md:leading-4 text-gray-500 font-normal rounded-md border">
                      2024
                    </div>
                  </div>
                  <span className="text-[12px] leading-[12px] md:text-[14px] md:leading-4 w-full truncate overflow-hidden min-w-0">
                    <a
                      href={'https://www.credly.com/badges/9cf407ee-b9a4-48d6-9358-bc15b894b715'}
                      target="_blank"
                      className="text-blue-500 underline underline-offset-1"
                    >
                      Verify
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full overflow-hidden">
            <div className="flex items-center gap-2 rounded-lg bg-[#e0e0e060] px-2.5 py-1.5 md:py-1.5 w-full overflow-hidden">
              <Image
                src={EFSETCERTIFIED}
                alt={'C2 Proficient - EF SET English Certificate'}
                width={44}
                height={44}
                className="h-8 w-8 rounded-full flex-shrink-0 object-cover"
              />

              <div className="flex items-center flex-grow overflow-hidden justify-between">
                <div className="flex flex-col items-start text-start flex-grow text-xs truncate overflow-hidden min-w-0">
                  <div className="w-full flex justify-between items-center font-bold leading-5">
                    <span className="w-[97%] truncate overflow-hidden min-w-0">
                      EF SET English Certificate – C2 Proficient
                    </span>
                    <div className="bg-secondary py-0.5 px-1 text-[9px] md:text-[12px] leading-[10px] md:leading-4 text-gray-500 font-normal rounded-md border">
                      2024
                    </div>
                  </div>
                  <span className="text-[12px] leading-[12px] md:text-[14px] md:leading-4 w-full truncate overflow-hidden min-w-0">
                    <a
                      href={'https://cert.efset.org/Yq8F74'}
                      target="_blank"
                      className="text-blue-500 underline underline-offset-1"
                    >
                      Verify
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full overflow-hidden">
            <div className="flex items-center gap-2 rounded-lg bg-[#e0e0e060] px-2.5 py-1.5 md:py-1.5 w-full overflow-hidden">
              <Image
                src={UdacityLogo}
                alt={'React Developer NanoDegree'}
                width={44}
                height={44}
                className="h-8 w-8 rounded-full flex-shrink-0 object-cover"
              />

              <div className="flex items-center flex-grow overflow-hidden justify-between">
                <div className="flex flex-col items-start text-start flex-grow text-xs truncate overflow-hidden min-w-0">
                  <div className="w-full flex justify-between items-center font-bold leading-5">
                    <span className="w-[97%] truncate overflow-hidden min-w-0">React Developer NanoDegree</span>
                    <div className="bg-secondary py-0.5 px-1 text-[9px] md:text-[12px] leading-[10px] md:leading-4 text-gray-500 font-normal rounded-md border">
                      2021
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-[11px] md:text-xs text-accent-foreground text-center">
            More on my{' '}
            <a href={'https://www.linkedin.com/in/m-hakem/'} target={'_blank'} className="underline text-blue-500">
              LinkedIn Profile
            </a>
          </p>
        </div>
      </Section>

      <Section title="🛠️ Tech Stack / Skills" className="text-xs md:text-sm pl-4">
        <p>
          <strong>Frontend</strong>: JavaScript, React, Next.js, TailwindCSS, TypeScript
        </p>
        <p>
          <strong>Backend</strong>: Node.js, MySQL, PostgreSQL, Prisma
        </p>
        <p>
          <strong>Libraries</strong>: Auth.js, Redux, ReactFlow, Radix ui, Framer Motion
        </p>
        <p>
          <strong>Tools</strong>: ClickUp, Slack, Zoom, Notion
        </p>
        <p>
          <strong>Other</strong>: Git, GitHub, Shadcn UI, Problem Solving, Data Structures, Algorithms, Performance
          Optimization, Responsive Design
        </p>
      </Section>

      <Section title="🌎 Platforms & Tools I use" className="relative w-full inset pb-0 border max-h-96" scrollable>
        {/* use the scroll position to lower the shadow at the bottom when you refactor into a client component */}
        <div className="overflow-y-auto scrollbar-hidden px-3 pt-1 pb-16">
          <ul className="grid grid-cols-1 md:grid-cols-24 grid-flow-row-dense gap-1.5 md:gap-2 mt-1 text-midsm text-zinc-600 overflow-y-scroll overflow-x-hidden w-full scroll-smooth scrollbar-hidden">
            {platformsAndServices.map((platform) => (
              <li
                key={platform.title}
                title={platform.title}
                className={cn(
                  'flex gap-1 rounded-lg bg-[#e0e0e060] bg-opacity-50 px-1.5 py-1 md:py-1.5 w-full',
                  `md:col-span-12`,
                  platform.services.length >= 3 ? 'items-start' : 'items-center',
                  'transition-all ease-in-out duration-100 hover:scale-[.98] active:scale-[.96]'
                )}
              >
                {platform.icon
                  ? platform.icon
                  : platform.img && (
                      <Image src={platform.img} alt={platform.tooltip} className="h-8 w-8 rounded-full" />
                    )}

                <div>
                  <span className="text-xs font-semibold" title={platform.tooltip}>
                    {/* {`${platform.title}${platform.services ? ':' : ''}`} */}
                    {platform.title}
                  </span>
                  {platform.services.length > 0 && (
                    <ul className="flex gap-[2px] flex-wrap">
                      {platform.services.map((service, i) => (
                        <li
                          key={service.name}
                          title={service.tooltip}
                          className="text-[10px] md:text-[10px] leading-3 font-light"
                        >
                          {`${service.name}${i < platform.services.length - 1 ? ', ' : ''}`}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section
        title="@CodeWithHakem"
        titleIcon={<Image src={YTIcon} alt="@CodeWithHakem YouTube Channel" width={28} height={22} />}
        scrollable
        ctaText="Watch on YouTube"
        ctaLink={'https://youtube.com/@CodewithHakem'}
        ctaVariant="youtube"
        className="max-h-[20rem] md:max-h-[18rem]"
      >
        <div className="overflow-y-auto scrollbar-hidden px-3 pt-3 pb-16">
          <ul className="grid grid-cols-1 gap-1.5 md:gap-2 text-midsm text-zinc-600 overflow-y-scroll overflow-x-hidden w-full scroll-smooth scrollbar-hidden">
            {YTVideos.map((video, index) => (
              <li
                key={index}
                title={video.title}
                className="w-full overflow-hidden transition-all ease-in-out duration-100 hover:scale-[.98] active:scale-[.96]"
              >
                <Link href={video.url} target={'_blank'}>
                  <div className="flex items-center gap-2 rounded-lg bg-[#e0e0e060] px-2.5 py-1 md:py-1.5 w-full overflow-hidden">
                    {video.img && (
                      <Image
                        src={video.img}
                        alt={video.title}
                        width={32}
                        height={32}
                        className="h-8 w-8 rounded-full flex-shrink-0"
                      />
                    )}

                    <div className="flex items-center flex-grow overflow-hidden justify-between gap-2">
                      <div className="flex flex-col items-start text-start flex-1 text-xs overflow-hidden min-w-0">
                        <span className="font-semibold leading-3">{video.title}</span>
                      </div>

                      <div className="h-6 w-[57px] rounded-md flex justify-center items-center px-2 text-xs font-semibold bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80">
                        Watch
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </div>
  );
}
