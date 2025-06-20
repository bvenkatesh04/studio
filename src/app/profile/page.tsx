
import { userProfile, courses as allCourses } from '@/lib/data';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import CourseCard from '@/components/custom/CourseCard';
import { User, Edit3, Lock, BookOpen, CheckSquare } from 'lucide-react';
import { Progress } from "@/components/ui/progress";

export default function ProfilePage() {
  const { name, email, avatarUrl, bio, coursesEnrolled, coursesCompleted, progress } = userProfile;

  const getCourseProgressPercentage = (courseId: string) => {
    const course = allCourses.find(c => c.id === courseId);
    if (!course) return 0;
    const courseProgress = progress?.find(p => p.courseId === courseId);
    if (!courseProgress || course.modules.length === 0) return 0;
    return (courseProgress.completedModules.length / course.modules.length) * 100;
  };

  return (
    <div className="space-y-8">
      <Card className="bg-card shadow-xl overflow-hidden">
        <CardHeader className="bg-secondary p-8 flex flex-col md:flex-row items-center gap-6">
          <Avatar className="h-24 w-24 border-4 border-primary">
            <AvatarImage src={avatarUrl} alt={name} data-ai-hint="profile avatar" />
            <AvatarFallback className="text-3xl bg-primary text-primary-foreground">
              {name.split(' ').map(n => n[0]).join('').toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="text-center md:text-left">
            <CardTitle className="text-3xl font-bold font-headline text-primary-foreground">{name}</CardTitle>
            <CardDescription className="text-muted-foreground mt-1">{email}</CardDescription>
            {bio && <p className="text-sm text-muted-foreground mt-2 max-w-md">{bio}</p>}
          </div>
          <Button variant="outline" className="ml-auto mt-4 md:mt-0 self-start md:self-center border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
            <Edit3 className="mr-2 h-4 w-4" /> Edit Profile
          </Button>
        </CardHeader>
        <CardContent className="p-6">
          <Tabs defaultValue="my-courses" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 mb-6 bg-background">
              <TabsTrigger value="my-courses" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"><BookOpen className="mr-2 h-4 w-4 hidden sm:inline-block"/>My Courses</TabsTrigger>
              <TabsTrigger value="progress" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"><CheckSquare className="mr-2 h-4 w-4 hidden sm:inline-block"/>Progress</TabsTrigger>
              <TabsTrigger value="settings" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"><User className="mr-2 h-4 w-4 hidden sm:inline-block"/>Account</TabsTrigger>
            </TabsList>

            <TabsContent value="my-courses">
              <h2 className="text-2xl font-semibold mb-4 text-primary-foreground">Enrolled Courses</h2>
              {coursesEnrolled.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {coursesEnrolled.map(course => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">You are not enrolled in any courses yet.</p>
              )}

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary-foreground">Completed Courses</h2>
              {coursesCompleted.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {coursesCompleted.map(course => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">You have not completed any courses yet.</p>
              )}
            </TabsContent>
            
            <TabsContent value="progress">
              <h2 className="text-2xl font-semibold mb-6 text-primary-foreground">My Learning Progress</h2>
              {coursesEnrolled.length > 0 ? (
                <div className="space-y-6">
                  {coursesEnrolled.map(course => {
                    const percentage = getCourseProgressPercentage(course.id);
                    return (
                      <Card key={course.id} className="bg-secondary">
                        <CardHeader>
                          <CardTitle className="text-xl text-primary-foreground">{course.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between mb-1">
                            <p className="text-sm text-muted-foreground">Progress</p>
                            <p className="text-sm font-medium text-primary">{percentage.toFixed(0)}%</p>
                          </div>
                          <Progress value={percentage} className="w-full h-2 [&>div]:bg-primary" />
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              ) : (
                 <p className="text-muted-foreground">No active courses to track progress for.</p>
              )}
            </TabsContent>

            <TabsContent value="settings">
              <Card className="bg-secondary">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary-foreground">Account Settings</CardTitle>
                  <CardDescription className="text-muted-foreground">Manage your account details and preferences.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-primary-foreground">Full Name</Label>
                    <Input id="name" defaultValue={name} className="bg-background border-primary/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-primary-foreground">Email Address</Label>
                    <Input id="email" type="email" defaultValue={email} className="bg-background border-primary/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio" className="text-primary-foreground">Bio</Label>
                    <Textarea id="bio" defaultValue={bio} className="bg-background border-primary/50 min-h-[100px]" />
                  </div>
                  <Button className="bg-primary hover:bg-primary/80 text-primary-foreground"><User className="mr-2 h-4 w-4"/>Update Profile</Button>
                  
                  <hr className="border-border/50 my-6" />

                  <h3 className="text-xl font-semibold text-primary-foreground">Change Password</h3>
                   <div className="space-y-2">
                    <Label htmlFor="current-password" className="text-primary-foreground">Current Password</Label>
                    <Input id="current-password" type="password" className="bg-background border-primary/50" />
                  </div>
                   <div className="space-y-2">
                    <Label htmlFor="new-password" className="text-primary-foreground">New Password</Label>
                    <Input id="new-password" type="password" className="bg-background border-primary/50" />
                  </div>
                   <div className="space-y-2">
                    <Label htmlFor="confirm-password" className="text-primary-foreground">Confirm New Password</Label>
                    <Input id="confirm-password" type="password" className="bg-background border-primary/50" />
                  </div>
                  <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
                    <Lock className="mr-2 h-4 w-4" /> Change Password
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
