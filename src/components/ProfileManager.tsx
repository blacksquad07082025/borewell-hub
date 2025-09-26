import { useState } from 'react';
import { Users, Plus, Star, Phone, MapPin, Briefcase, ToggleLeft, ToggleRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const ProfileManager = () => {
  const [selectedRole, setSelectedRole] = useState('all');
  const { toast } = useToast();

  // Mock profile data
  const profiles = [
    {
      id: 1,
      name: 'Ravi Kumar',
      role: 'Driller',
      specialty: '6.5" Specialist',
      phone: '+91 98765 43210',
      location: 'Bangalore Rural',
      experience: 8,
      rating: 4.8,
      isAgent: true,
      completedJobs: 45,
      brandColors: ['#2563eb', '#3b82f6', '#60a5fa'],
      avatar: '',
    },
    {
      id: 2,
      name: 'Priya Industries',
      role: 'Customer',
      specialty: 'Commercial Projects',
      phone: '+91 87654 32109',
      location: 'Tumkur District',
      experience: 12,
      rating: 4.5,
      isAgent: false,
      completedJobs: 28,
      brandColors: ['#059669', '#10b981', '#34d399'],
      avatar: '',
    },
    {
      id: 3,
      name: 'Suresh Babu',
      role: 'Consultant',
      specialty: 'Water Table Analysis',
      phone: '+91 76543 21098',
      location: 'Mandya Region',
      experience: 15,
      rating: 4.9,
      isAgent: true,
      completedJobs: 62,
      brandColors: ['#dc2626', '#ef4444', '#f87171'],
      avatar: '',
    },
    {
      id: 4,
      name: 'Lakshmi Transport',
      role: 'Driver',
      specialty: 'Heavy Equipment',
      phone: '+91 65432 10987',
      location: 'Mysore Hills',
      experience: 6,
      rating: 4.3,
      isAgent: false,
      completedJobs: 34,
      brandColors: ['#7c3aed', '#8b5cf6', '#a78bfa'],
      avatar: '',
    },
    {
      id: 5,
      name: 'Murthy Drilling Co.',
      role: 'Re-bore Specialist',
      specialty: 'Deep Re-bore',
      phone: '+91 54321 09876',
      location: 'Hassan District',
      experience: 20,
      rating: 4.7,
      isAgent: true,
      completedJobs: 89,
      brandColors: ['#ea580c', '#f97316', '#fb923c'],
      avatar: '',
    },
  ];

  const roleTypes = [
    'All',
    'Customer',
    'Agent',
    'Consultant',
    'Owner',
    'Driver',
    'Driller',
    'Affiliate Network Member',
    'Repair Technician',
    'Bore Motor & Equipment Vendor',
    'Re-bore Specialist',
  ];

  const filteredProfiles = selectedRole === 'all' 
    ? profiles 
    : profiles.filter(profile => profile.role.toLowerCase() === selectedRole.toLowerCase());

  const toggleAgentMode = (profileId: number) => {
    toast({
      title: "Agent Mode Updated",
      description: "Profile agent mode has been toggled successfully.",
    });
  };

  const createNewProfile = () => {
    toast({
      title: "Create New Profile",
      description: "This feature requires Supabase backend integration.",
    });
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Users className="h-6 w-6 text-primary" />
              <div>
                <CardTitle>Profile Management System</CardTitle>
                <CardDescription>
                  Manage all profiles with multi-role capabilities and agent mode
                </CardDescription>
              </div>
            </div>
            <Button onClick={createNewProfile} className="bg-gradient-primary">
              <Plus className="h-4 w-4 mr-2" />
              Add New Profile
            </Button>
          </div>
        </CardHeader>
      </Card>

      <Tabs defaultValue="profiles" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="profiles">All Profiles</TabsTrigger>
          <TabsTrigger value="create">Create Profile</TabsTrigger>
        </TabsList>

        <TabsContent value="profiles" className="space-y-6">
          {/* Filter Section */}
          <Card className="shadow-card">
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Label htmlFor="role-filter">Filter by Role:</Label>
                  <Select value={selectedRole} onValueChange={setSelectedRole}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      {roleTypes.map((role) => (
                        <SelectItem key={role} value={role.toLowerCase()}>
                          {role}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="text-sm text-muted-foreground">
                  {filteredProfiles.length} profiles found
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Profiles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProfiles.map((profile) => (
              <Card key={profile.id} className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={profile.avatar} alt={profile.name} />
                        <AvatarFallback className="bg-gradient-primary text-white">
                          {profile.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{profile.name}</h3>
                        <p className="text-sm text-muted-foreground">{profile.specialty}</p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleAgentMode(profile.id)}
                      className="p-1"
                    >
                      {profile.isAgent ? (
                        <ToggleRight className="h-5 w-5 text-success" />
                      ) : (
                        <ToggleLeft className="h-5 w-5 text-muted-foreground" />
                      )}
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge 
                      variant="outline" 
                      className={`border-${
                        profile.role === 'Driller' ? 'drilling-65' :
                        profile.role === 'Customer' ? 'success' :
                        profile.role === 'Consultant' ? 'info' :
                        profile.role === 'Driver' ? 'warning' :
                        'primary'
                      }`}
                    >
                      {profile.role}
                    </Badge>
                    {profile.isAgent && (
                      <Badge className="bg-success text-white">Agent Mode</Badge>
                    )}
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{profile.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{profile.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                      <span>{profile.experience} years experience</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{profile.rating}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {profile.completedJobs} jobs completed
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <div className="flex space-x-1">
                      {profile.brandColors.map((color, index) => (
                        <div
                          key={index}
                          className="w-4 h-4 rounded-full border border-muted"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">Brand Colors</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="create" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Create New Profile</CardTitle>
              <CardDescription>
                Add a new profile to your borewell management system
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Enter full name" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent>
                        {roleTypes.slice(1).map((role) => (
                          <SelectItem key={role} value={role.toLowerCase()}>
                            {role}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+91 XXXXX XXXXX" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" placeholder="Enter location" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Input id="experience" type="number" placeholder="0" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specialty">Specialty/Focus Area</Label>
                    <Input id="specialty" placeholder="e.g., 6.5 inch Specialist" />
                  </div>

                  <div className="space-y-2">
                    <Label>Brand Colors (Max 3)</Label>
                    <div className="flex space-x-2">
                      <Input type="color" className="w-16 h-10" defaultValue="#2563eb" />
                      <Input type="color" className="w-16 h-10" defaultValue="#3b82f6" />
                      <Input type="color" className="w-16 h-10" defaultValue="#60a5fa" />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="agent-mode" className="rounded" />
                    <Label htmlFor="agent-mode">Enable Agent Mode</Label>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <Button variant="outline">Cancel</Button>
                <Button onClick={createNewProfile} className="bg-gradient-primary">
                  Create Profile
                </Button>
              </div>

              <div className="text-center text-sm text-muted-foreground pt-4 border-t">
                Note: Profile creation and management requires Supabase backend integration for data persistence.
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfileManager;