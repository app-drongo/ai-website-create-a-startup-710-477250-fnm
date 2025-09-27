'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Target,
  Users,
  Award,
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Heart,
  Lightbulb,
} from 'lucide-react';

export default function About() {
  const handleStartTrial = () => {
    window.location.href = '/';
  };

  const handleViewTeam = () => {
    window.location.href = '/about';
  };

  const handleReadStory = () => {
    window.location.href = '/about';
  };

  const values = [
    {
      icon: Target,
      title: 'Small Business First',
      description:
        "We're committed to empowering small businesses and freelancers with professional invoicing tools that were once only available to large enterprises.",
    },
    {
      icon: Lightbulb,
      title: 'Simplicity Focused',
      description:
        'We believe invoicing should be simple, not complicated. Every feature is designed to save you time and reduce administrative burden.',
    },
    {
      icon: Heart,
      title: 'Payment Success',
      description:
        'Your cash flow is our priority. We build every feature to help you get paid faster and manage your finances more effectively.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description:
        "From local freelancers to international consultants, we're helping businesses worldwide streamline their billing processes.",
    },
  ];

  const stats = [
    { value: '2021', label: 'Founded', icon: Award },
    { value: '25K+', label: 'Small Businesses', icon: Users },
    { value: '99.9%', label: 'Payment Success', icon: TrendingUp },
    { value: '40+', label: 'Countries', icon: Globe },
  ];

  const team = [
    {
      name: 'Alex Martinez',
      role: 'CEO & Co-Founder',
      image: 'AM',
      bio: 'Former QuickBooks product manager. 12+ years in fintech and small business solutions.',
    },
    {
      name: 'Sarah Kim',
      role: 'CTO & Co-Founder',
      image: 'SK',
      bio: 'Ex-Stripe engineer. Expert in payment processing and financial software architecture.',
    },
    {
      name: 'Marcus Johnson',
      role: 'Head of Product',
      image: 'MJ',
      bio: 'Former Xero designer. Specialized in creating intuitive financial interfaces for SMBs.',
    },
    {
      name: 'Lisa Chen',
      role: 'VP of Customer Success',
      image: 'LC',
      bio: 'Former FreshBooks team lead. Passionate about helping small businesses thrive.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            About InvoiceFlow
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Simplifying Invoicing for
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Small Businesses
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're a dedicated team of entrepreneurs and developers who understand the challenges of
            running a small business. That's why we built InvoiceFlow - to make professional
            invoicing simple, fast, and affordable.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2021 by two frustrated small business owners, InvoiceFlow was born from a
                simple frustration: why was professional invoicing still so complicated and
                expensive?
              </p>
              <p>
                After struggling with clunky software, hidden fees, and features we didn't need, we
                decided to build the invoicing solution we wished existed - simple, affordable, and
                designed specifically for small businesses and freelancers.
              </p>
              <p>
                Today, we're proud to help over 25,000 small businesses get paid faster, with an
                average payment time reduction of 40% and a 4.8/5 customer satisfaction rating.
              </p>
            </div>
            <Button onClick={handleReadStory} className="group">
              Read Our Full Story
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Every small business deserves professional invoicing tools without the
                      enterprise price tag."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- Alex Martinez, CEO</cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="text-center border-border/50 hover:border-primary/20 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Values</h3>
            <p className="text-muted-foreground">
              The principles that guide how we build InvoiceFlow and serve our small business
              community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-border/50 hover:border-primary/20 transition-all duration-300 group"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Meet Our Team</h3>
            <p className="text-muted-foreground">
              Small business owners and fintech experts working together to solve real invoicing
              challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-primary/20 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button onClick={handleViewTeam} variant="outline" className="group">
              View All Team Members
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "InvoiceFlow transformed our billing process completely. We went from chasing
                payments for weeks to getting paid in days. The automated reminders alone saved us
                10 hours per month."
              </blockquote>
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  RW
                </div>
                <div className="text-left">
                  <div className="font-semibold">Rachel Williams</div>
                  <div className="text-sm text-muted-foreground">
                    Founder, Creative Design Studio
                  </div>
                </div>
              </div>
              <Button onClick={handleStartTrial} size="lg" className="group">
                Start Your Free Trial
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
