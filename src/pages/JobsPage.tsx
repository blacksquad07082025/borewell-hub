import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

const JobsPage = () => {
  return (
    <div className="space-y-6">
      <Card className="shadow-card">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Briefcase className="h-6 w-6 text-primary" />
            <div>
              <CardTitle>Jobs & Projects</CardTitle>
              <CardDescription>
                Manage all your borewell projects and assignments
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12 text-muted-foreground">
            <Briefcase className="mx-auto h-16 w-16 mb-4 opacity-50" />
            <p className="text-lg font-medium mb-2">Jobs & Projects Management</p>
            <p>This feature will be available after connecting to Supabase backend</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobsPage;