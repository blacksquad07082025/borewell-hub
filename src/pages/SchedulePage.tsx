import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

const SchedulePage = () => {
  return (
    <div className="space-y-6">
      <Card className="shadow-card">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Calendar className="h-6 w-6 text-primary" />
            <div>
              <CardTitle>Schedule</CardTitle>
              <CardDescription>
                Manage project schedules and appointments
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12 text-muted-foreground">
            <Calendar className="mx-auto h-16 w-16 mb-4 opacity-50" />
            <p className="text-lg font-medium mb-2">Schedule Management</p>
            <p>This feature will be available after connecting to Supabase backend</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SchedulePage;