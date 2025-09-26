import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

const LocationsPage = () => {
  return (
    <div className="space-y-6">
      <Card className="shadow-card">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <MapPin className="h-6 w-6 text-primary" />
            <div>
              <CardTitle>Locations</CardTitle>
              <CardDescription>
                Manage project locations and geo-mapping
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12 text-muted-foreground">
            <MapPin className="mx-auto h-16 w-16 mb-4 opacity-50" />
            <p className="text-lg font-medium mb-2">Location Management</p>
            <p>This feature will be available after connecting to Supabase backend</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LocationsPage;