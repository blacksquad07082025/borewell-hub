import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  Users, 
  Calculator,
  MapPin,
  UserPlus
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const navigate = useNavigate();

  const quickActions = [
    { 
      title: "New Quote", 
      icon: Calculator, 
      action: () => navigate('/calculator'),
      variant: "default" as const,
      className: "bg-primary text-primary-foreground hover:bg-primary/90"
    },
    { 
      title: "Manage Profiles", 
      icon: Users, 
      action: () => navigate('/profiles'),
      variant: "outline" as const 
    },
    { 
      title: "Generate Invoice", 
      icon: FileText, 
      action: () => navigate('/invoices'),
      variant: "outline" as const 
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'borewell',
      title: 'New 6.5" borewell job in Pune',
      description: 'Depth: 350ft • Assigned to Rajesh Kumar',
      icon: MapPin,
      iconColor: 'text-primary'
    },
    {
      id: 2,
      type: 'invoice',
      title: 'Invoice #INV-2024-045 paid',
      description: 'Amount: ₹45,000 • Customer: Mumbai Industries',
      icon: FileText,
      iconColor: 'text-success'
    },
    {
      id: 3,
      type: 'agent',
      title: 'New agent registered',
      description: 'Priya Sharma • Consultant • Mumbai',
      icon: UserPlus,
      iconColor: 'text-warning'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-2xl">Quick Actions</CardTitle>
          <CardDescription>
            Access key features quickly
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickActions.map((action, index) => (
              <Button
                key={index}
                variant={action.variant}
                size="lg"
                onClick={action.action}
                className={`h-20 flex flex-col items-center justify-center space-y-2 ${action.className || ''}`}
              >
                <action.icon className="h-6 w-6" />
                <span className="text-sm font-medium">{action.title}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-xl">Recent Activity</CardTitle>
          <CardDescription>
            Latest updates and activities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start space-x-4 p-4 rounded-lg border hover:bg-muted/50 transition-colors"
              >
                <div className={`p-2 rounded-lg bg-muted ${activity.iconColor}`}>
                  <activity.icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground">
                    {activity.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {activity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
            <FileText className="h-4 w-4 text-success" />
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
            <MapPin className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.2%</div>
            <p className="text-xs text-muted-foreground">+2.1% from last month</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;