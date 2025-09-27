'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  FileText,
  Clock,
  CreditCard,
  BarChart3,
  Globe,
  Shield,
  Smartphone,
  Zap,
  DollarSign,
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: FileText,
      title: 'Professional Invoices',
      description:
        'Create stunning, branded invoices in seconds with our intuitive drag-and-drop builder.',
      badge: 'Core Feature',
    },
    {
      icon: Clock,
      title: 'Automated Reminders',
      description:
        'Never chase payments again. Smart reminders sent automatically to overdue clients.',
      badge: 'Automation',
    },
    {
      icon: CreditCard,
      title: 'Instant Payments',
      description:
        'Accept credit cards, PayPal, and bank transfers directly through your invoices.',
      badge: 'Payments',
    },
    {
      icon: BarChart3,
      title: 'Revenue Analytics',
      description:
        'Track cash flow, payment trends, and client behavior with detailed financial insights.',
      badge: 'Analytics',
    },
    {
      icon: Globe,
      title: 'Multi-Currency Support',
      description:
        'Bill international clients in their preferred currency with real-time exchange rates.',
      badge: 'Global',
    },
    {
      icon: Shield,
      title: 'Tax Compliance',
      description:
        'Automatic tax calculations and compliance reporting for multiple jurisdictions.',
      badge: 'Compliance',
    },
    {
      icon: Smartphone,
      title: 'Mobile Invoicing',
      description: 'Create and send invoices on-the-go with our fully responsive mobile interface.',
      badge: 'Mobile',
    },
    {
      icon: Zap,
      title: 'Instant Delivery',
      description:
        'Invoices delivered instantly via email with read receipts and delivery confirmation.',
      badge: 'Speed',
    },
    {
      icon: DollarSign,
      title: 'Expense Tracking',
      description:
        'Track business expenses and automatically include them in your invoicing workflow.',
      badge: 'Finance',
    },
  ];

  const handleStartTrial = () => {
    window.location.href = '/signup';
  };

  const handleViewPricing = () => {
    window.location.href = '/pricing';
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Powerful Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need to
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Get Paid Faster
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Streamline your invoicing process with professional tools designed specifically for
            small businesses and freelancers who value their time.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Join 15,000+ businesses already using InvoiceFlow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleStartTrial}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Start 14-Day Free Trial
            </button>
            <button
              onClick={handleViewPricing}
              className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors"
            >
              View Pricing Plans
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
