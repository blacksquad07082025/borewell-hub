import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Wrench } from 'lucide-react';

const MaintenancePage = () => {
  return (
    <div className="space-y-6">
      <Card className="shadow-card">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Wrench className="h-6 w-6 text-primary" />
            <div>
              <CardTitle>Maintenance</CardTitle>
              <CardDescription>
                Equipment maintenance tracking and scheduling
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12 text-muted-foreground">
            <Wrench className="mx-auto h-16 w-16 mb-4 opacity-50" />
            <p className="text-lg font-medium mb-2">Maintenance Management</p>
            <p>This feature will be available after connecting to Supabase backend</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MaintenancePage;