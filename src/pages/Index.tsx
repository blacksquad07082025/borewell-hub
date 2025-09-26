import { useState } from 'react';
import { Calculator, Users, BarChart3, Settings, DollarSign, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CostCalculator from '@/components/CostCalculator';
import Dashboard from '@/components/Dashboard';
import ProfileManager from '@/components/ProfileManager';

const Index = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Welcome to Your Blank App</h1>
        <p className="text-xl text-muted-foreground">Start building your amazing project here!</p>
    <div className="min-h-screen bg-background">
      <Header/>
      
      {activeTab === 'overview' && <Hero onGetStarted={() => setActiveTab('calculator')} />}
      
      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="calculator" className="flex items-center gap-2">
              <Calculator className="h-4 w-4" />
              Calculator
            </TabsTrigger>
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="profiles" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Profiles
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
                  <Calculator className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground">+12% from last month</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-success" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">₹12,45,000</div>
                  <p className="text-xs text-muted-foreground">+8% from last month</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Agents</CardTitle>
                  <Users className="h-4 w-4 text-info" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">156</div>
                  <p className="text-xs text-muted-foreground">+5 new this week</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
                  <TrendingUp className="h-4 w-4 text-warning" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">94.2%</div>
                  <p className="text-xs text-muted-foreground">+2.1% from last month</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2 shadow-card">
                <CardHeader>
                  <CardTitle>Features Overview</CardTitle>
                  <CardDescription>
                    Comprehensive borewell management system with advanced analytics
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-drilling-65">Drilling Types</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 6.5" Borewell Drilling</li>
                      <li>• 4.5" Borewell Drilling</li>
                      <li>• Re-bore Specialist Services</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-drilling-45">Multi-Role System</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Customers & Agents</li>
                      <li>• Drillers & Consultants</li>
                      <li>• Cross-role Agent Mode</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-rebore">Analytics & Insights</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Performance Tracking</li>
                      <li>• Revenue Analytics</li>
                      <li>• Payment Patterns</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-casing">Advanced Features</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Invoice Generation</li>
                      <li>• Inventory Management</li>
                      <li>• Geo-mapping Integration</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Get started with core features</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    variant="default" 
                    className="w-full justify-start bg-gradient-primary hover:shadow-glow transition-all duration-300"
                    onClick={() => setActiveTab('calculator')}
                  >
                    <Calculator className="mr-2 h-4 w-4" />
                    Cost Calculator
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-drilling-65 text-drilling-65 hover:bg-drilling-65 hover:text-white transition-all duration-300"
                    onClick={() => setActiveTab('profiles')}
                  >
                    <Users className="mr-2 h-4 w-4" />
                    Manage Profiles
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-drilling-45 text-drilling-45 hover:bg-drilling-45 hover:text-white transition-all duration-300"
                    onClick={() => setActiveTab('dashboard')}
                  >
                    <BarChart3 className="mr-2 h-4 w-4" />
                    View Analytics
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="calculator">
            <CostCalculator />
          </TabsContent>

          <TabsContent value="dashboard">
            <Dashboard />
          </TabsContent>

          <TabsContent value="profiles">
            <ProfileManager />
          </TabsContent>

          <TabsContent value="settings">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Settings</CardTitle>
                <CardDescription>
                  Configure your borewell management system
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  <Settings className="mx-auto h-12 w-12 mb-4" />
                  <p>Settings panel will be available after connecting to Supabase backend</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
