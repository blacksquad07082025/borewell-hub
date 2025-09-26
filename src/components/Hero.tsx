import { ArrowRight, CheckCircle, Drill, Users, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface HeroProps {
  onGetStarted: () => void;
}

const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-drilling-65/10 to-drilling-45/20" />
      
      <div className="relative container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Universal Master
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Borewell Software
                </span>
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Complete management system for drilling operations, multi-role teams, 
                cost calculations, and performance analytics. Built for the professional borewell industry.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 text-white/90">
                <CheckCircle className="h-5 w-5 text-success" />
                <span>Pre-loaded rate slabs (6.5", 4.5", Re-bore)</span>
              </div>
              <div className="flex items-center space-x-3 text-white/90">
                <CheckCircle className="h-5 w-5 text-success" />
                <span>Multi-role agent system</span>
              </div>
              <div className="flex items-center space-x-3 text-white/90">
                <CheckCircle className="h-5 w-5 text-success" />
                <span>Advanced analytics & insights</span>
              </div>
              <div className="flex items-center space-x-3 text-white/90">
                <CheckCircle className="h-5 w-5 text-success" />
                <span>Invoice & payment tracking</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-glow transition-all duration-300"
                onClick={onGetStarted}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                Watch Demo
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-glow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-drilling-65 rounded-lg">
                      <Drill className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Cost Calculator</h3>
                      <p className="text-white/70 text-sm">Pre-loaded rates for all drilling types</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-glow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-drilling-45 rounded-lg">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Multi-Role System</h3>
                      <p className="text-white/70 text-sm">Agents, drillers, customers, consultants</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-glow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-rebore rounded-lg">
                      <BarChart3 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Analytics Dashboard</h3>
                      <p className="text-white/70 text-sm">Performance tracking & insights</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;