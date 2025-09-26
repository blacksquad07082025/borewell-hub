import { BarChart3, TrendingUp, Users, DollarSign, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const Dashboard = () => {
  // Mock data for demonstration
  const projectsData = [
    { type: '6.5" Borewell', count: 12, percentage: 45, color: 'drilling-65' },
    { type: '4.5" Borewell', count: 8, percentage: 30, color: 'drilling-45' },
    { type: 'Re-bore', count: 4, percentage: 25, color: 'rebore' },
  ];

  const recentProjects = [
    { id: 1, location: 'Bangalore Rural', type: '6.5"', depth: 350, status: 'In Progress', driller: 'Ravi Kumar' },
    { id: 2, location: 'Tumkur District', type: '4.5"', depth: 280, status: 'Completed', driller: 'Suresh Babu' },
    { id: 3, location: 'Mandya Region', type: 'Re-bore', depth: 420, status: 'Planning', driller: 'Murthy' },
    { id: 4, location: 'Mysore Hills', type: '6.5"', depth: 480, status: 'In Progress', driller: 'Rajesh' },
  ];

  const performanceMetrics = [
    { label: 'Average Depth', value: '385 ft', trend: '+12%', icon: TrendingUp },
    { label: 'Completion Rate', value: '94.2%', trend: '+2.1%', icon: BarChart3 },
    { label: 'Active Teams', value: '8', trend: '+1', icon: Users },
    { label: 'Monthly Revenue', value: '₹4.2L', trend: '+18%', icon: DollarSign },
  ];

  return (
    <div className="space-y-6">
      <Card className="shadow-card">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <BarChart3 className="h-6 w-6 text-primary" />
            <div>
              <CardTitle>Performance Dashboard</CardTitle>
              <CardDescription>
                Comprehensive analytics and insights for your borewell operations
              </CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {performanceMetrics.map((metric, index) => (
          <Card key={index} className="bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                  <p className="text-2xl font-bold">{metric.value}</p>
                  <p className="text-xs text-success">{metric.trend} from last month</p>
                </div>
                <div className="p-3 bg-primary/10 rounded-lg">
                  <metric.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Project Distribution */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Project Distribution</CardTitle>
            <CardDescription>Breakdown by borewell types</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {projectsData.map((project, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{project.type}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground">{project.count} projects</span>
                    <Badge 
                      variant="outline" 
                      className={`border-${project.color} text-${project.color}`}
                    >
                      {project.percentage}%
                    </Badge>
                  </div>
                </div>
                <Progress value={project.percentage} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Revenue Analytics */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Revenue Analytics</CardTitle>
            <CardDescription>Monthly performance trends</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-success/10 rounded-lg">
                  <p className="text-2xl font-bold text-success">₹12.4L</p>
                  <p className="text-sm text-muted-foreground">This Month</p>
                </div>
                <div className="text-center p-4 bg-warning/10 rounded-lg">
                  <p className="text-2xl font-bold text-warning">₹10.5L</p>
                  <p className="text-sm text-muted-foreground">Last Month</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Highest Sale</span>
                  <span className="font-medium">₹2,45,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Average Sale</span>
                  <span className="font-medium">₹1,25,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Lowest Sale</span>
                  <span className="font-medium">₹85,000</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Projects */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Recent Projects</CardTitle>
          <CardDescription>Latest borewell operations and their status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentProjects.map((project) => (
              <div key={project.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{project.location}</p>
                    <p className="text-sm text-muted-foreground">
                      {project.type} Borewell • {project.depth}ft • {project.driller}
                    </p>
                  </div>
                </div>
                <Badge 
                  variant={project.status === 'Completed' ? 'default' : 
                          project.status === 'In Progress' ? 'secondary' : 'outline'}
                  className={
                    project.status === 'Completed' ? 'bg-success text-white' :
                    project.status === 'In Progress' ? 'bg-warning text-white' : ''
                  }
                >
                  {project.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Payment Patterns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Payment Patterns</CardTitle>
            <CardDescription>Customer payment behavior analysis</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Weekly Payments</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-muted rounded-full h-2">
                    <div className="bg-success w-3/4 h-2 rounded-full"></div>
                  </div>
                  <span className="text-xs text-muted-foreground">75%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Monthly Payments</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-muted rounded-full h-2">
                    <div className="bg-info w-1/2 h-2 rounded-full"></div>
                  </div>
                  <span className="text-xs text-muted-foreground">50%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Quarterly Payments</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-muted rounded-full h-2">
                    <div className="bg-warning w-1/4 h-2 rounded-full"></div>
                  </div>
                  <span className="text-xs text-muted-foreground">25%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Equipment Usage</CardTitle>
            <CardDescription>Most used casing types and equipment</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">8 Gauge Casing</span>
                <Badge variant="outline" className="border-casing text-casing">42%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">10 Gauge Casing</span>
                <Badge variant="outline" className="border-drilling-65 text-drilling-65">35%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">6 Gauge Casing</span>
                <Badge variant="outline" className="border-drilling-45 text-drilling-45">23%</Badge>
              </div>
            </div>
            
            <div className="pt-4 border-t">
              <div className="flex justify-between text-sm">
                <span>Average Casing Length</span>
                <span className="font-medium">280 ft</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;