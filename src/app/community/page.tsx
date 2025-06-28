"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import {
  Users,
  MessageSquare,
  Calendar,
  Trophy,
  BookOpen,
  Search,
  Filter,
  Heart,
  MessageCircle,
  MapPin,
  Clock,
  Star,
  Github,
  Linkedin,
  Twitter,
  Globe,
  UserPlus,
  CheckCircle,
  Target,
  Flame,
  Award,
  GraduationCap
} from 'lucide-react';

import { communityMembers, forumPosts, events, achievements, studyGroups } from '@/lib/communityData';
import type { CommunityMember, ForumPost, Event, Achievement, StudyGroup } from '@/types/community';

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const MemberCard = ({ member }: { member: CommunityMember }) => (
    <motion.div variants={itemVariants}>
      <Card className="h-full hover:shadow-lg transition-shadow duration-300 warm-glow">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                {member.isOnline && (
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                )}
              </div>
              <div>
                <h3 className="font-semibold text-base">{member.name}</h3>
                <p className="text-xs text-muted-foreground">{member.title}</p>
                <div className="flex items-center text-xs text-muted-foreground mt-1">
                  <MapPin className="h-3 w-3 mr-1" />
                  {member.location}
                </div>
              </div>
            </div>
            <div className="flex space-x-1">
              {member.socialLinks.github && (
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                  <Github className="h-3 w-3" />
                </Button>
              )}
              {member.socialLinks.linkedin && (
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                  <Linkedin className="h-3 w-3" />
                </Button>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{member.bio}</p>
          
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Reputation</span>
              <span className="font-medium">{member.reputation.toLocaleString()}</span>
            </div>
            
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Courses</span>
              <span className="font-medium">{member.coursesCompleted}</span>
            </div>

            <div className="flex flex-wrap gap-1">
              {member.skills.slice(0, 3).map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
              {member.skills.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{member.skills.length - 3}
                </Badge>
              )}
            </div>

            <div className="flex space-x-1">
              {member.badges.slice(0, 3).map((badge) => (
                <div
                  key={badge.id}
                  className="text-sm"
                  title={badge.name}
                >
                  {badge.icon}
                </div>
              ))}
            </div>
          </div>

          <Button className="w-full mt-3" variant="outline" size="sm">
            <UserPlus className="h-3 w-3 mr-2" />
            Connect
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );

  const ForumPostCard = ({ post }: { post: ForumPost }) => (
    <motion.div variants={itemVariants}>
      <Card className="hover:shadow-md transition-shadow duration-300 warm-glow">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                {post.isPinned && (
                  <Badge variant="secondary" className="text-xs">
                    📌 Pinned
                  </Badge>
                )}
                {post.isSolved && (
                  <Badge variant="default" className="text-xs bg-green-600">
                    ✓ Solved
                  </Badge>
                )}
                <Badge variant="outline" className="text-xs">
                  {post.category}
                </Badge>
              </div>
              <h3 className="font-semibold text-base mb-2">{post.title}</h3>
              <p className="text-xs text-muted-foreground line-clamp-2">{post.content}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Avatar className="h-5 w-5">
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback className="text-xs">
                    {post.author.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <span className="text-xs font-medium">{post.author.name}</span>
              </div>
              <span className="text-xs text-muted-foreground">
                {new Date(post.createdAt).toLocaleDateString()}
              </span>
            </div>
            
            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Heart className={`h-3 w-3 ${post.isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                <span>{post.likes}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MessageCircle className="h-3 w-3" />
                <span>{post.replies}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-1 mt-3">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                #{tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  const EventCard = ({ event }: { event: Event }) => (
    <motion.div variants={itemVariants}>
      <Card className="h-full hover:shadow-lg transition-shadow duration-300 warm-glow">
        <div className="relative h-24 bg-gradient-to-r from-primary/20 to-primary/10 rounded-t-lg">
          <div className="absolute top-2 right-2">
            <Badge variant={event.isVirtual ? "secondary" : "default"} className="text-xs">
              {event.isVirtual ? '🌐 Virtual' : '📍 In-Person'}
            </Badge>
          </div>
          <div className="absolute bottom-2 left-2">
            <Badge variant="outline" className="text-xs bg-white/90">
              {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
            </Badge>
          </div>
        </div>
        
        <CardHeader className="pb-3">
          <CardTitle className="text-base">{event.title}</CardTitle>
          <CardDescription className="line-clamp-2 text-xs">{event.description}</CardDescription>
        </CardHeader>
        
        <CardContent className="pt-0">
          <div className="space-y-2 text-xs">
            <div className="flex items-center text-muted-foreground">
              <Calendar className="h-3 w-3 mr-2" />
              {new Date(event.date).toLocaleDateString()} at {event.time}
            </div>
            <div className="flex items-center text-muted-foreground">
              <Clock className="h-3 w-3 mr-2" />
              {event.duration}
            </div>
            <div className="flex items-center text-muted-foreground">
              <MapPin className="h-3 w-3 mr-2" />
              {event.location}
            </div>
            <div className="flex items-center text-muted-foreground">
              <Users className="h-3 w-3 mr-2" />
              {event.attendees}/{event.maxAttendees} attendees
            </div>
          </div>

          <div className="flex items-center space-x-2 mt-3">
            <Avatar className="h-5 w-5">
              <AvatarImage src={event.organizer.avatar} alt={event.organizer.name} />
              <AvatarFallback className="text-xs">
                {event.organizer.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <span className="text-xs text-muted-foreground">by {event.organizer.name}</span>
          </div>

          <Button 
            className="w-full mt-3" 
            variant={event.isRegistered ? "secondary" : "default"}
            size="sm"
          >
            {event.isRegistered ? (
              <>
                <CheckCircle className="h-3 w-3 mr-2" />
                Registered
              </>
            ) : (
              'Register Now'
            )}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );

  const AchievementCard = ({ achievement }: { achievement: Achievement }) => (
    <motion.div variants={itemVariants}>
      <Card className={`h-full transition-all duration-300 ${achievement.isCompleted ? 'bg-primary/5 border-primary/20' : 'hover:shadow-md'} warm-glow`}>
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div className={`text-lg ${achievement.isCompleted ? 'grayscale-0' : 'grayscale'}`}>
                {achievement.icon}
              </div>
              <div>
                <h3 className="font-semibold text-sm">{achievement.title}</h3>
                <p className="text-xs text-muted-foreground">{achievement.description}</p>
              </div>
            </div>
            {achievement.isCompleted && (
              <CheckCircle className="h-4 w-4 text-primary" />
            )}
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-2">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>Progress</span>
                <span>{achievement.progress}/{achievement.maxProgress}</span>
              </div>
              <Progress 
                value={(achievement.progress / achievement.maxProgress) * 100} 
                className="h-2"
              />
            </div>
            <div className="text-xs">
              <span className="text-muted-foreground">Reward: </span>
              <span className="font-medium">{achievement.reward}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  const StudyGroupCard = ({ group }: { group: StudyGroup }) => (
    <motion.div variants={itemVariants}>
      <Card className="h-full hover:shadow-lg transition-shadow duration-300 warm-glow">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-base">{group.name}</h3>
              <p className="text-xs text-primary font-medium">{group.course}</p>
            </div>
            <Badge variant={group.isJoined ? "default" : "outline"} className="text-xs">
              {group.isJoined ? 'Joined' : 'Available'}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{group.description}</p>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Members</span>
              <span>{group.members.length}/{group.maxMembers}</span>
            </div>
            
            <div className="flex items-center text-xs text-muted-foreground">
              <Calendar className="h-3 w-3 mr-2" />
              Next meeting: {new Date(group.nextMeeting).toLocaleDateString()}
            </div>

            <div className="flex -space-x-2">
              {group.members.slice(0, 4).map((member) => (
                <Avatar key={member.id} className="h-6 w-6 border-2 border-white">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback className="text-xs">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
              ))}
              {group.members.length > 4 && (
                <div className="h-6 w-6 rounded-full bg-muted border-2 border-white flex items-center justify-center text-xs font-medium">
                  +{group.members.length - 4}
                </div>
              )}
            </div>
          </div>

          <Button 
            className="w-full mt-3" 
            variant={group.isJoined ? "secondary" : "default"}
            size="sm"
          >
            {group.isJoined ? 'View Group' : 'Join Group'}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <div className="container mx-auto px-4 py-6">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="space-y-6"
      >
        {/* Header */}
        <motion.section variants={itemVariants} className="text-center">
          <h1 className="text-3xl font-bold font-headline mb-3 text-primary">
            TechFarm Community
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Connect, learn, and grow with fellow tech enthusiasts. Share knowledge, join study groups, and advance your career together.
          </p>
        </motion.section>

        {/* Community Stats */}
        <motion.section variants={itemVariants}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Card className="text-center p-3 warm-glow">
              <div className="text-xl font-bold text-primary">{communityMembers.length}K+</div>
              <div className="text-xs text-muted-foreground">Members</div>
            </Card>
            <Card className="text-center p-3 warm-glow">
              <div className="text-xl font-bold text-primary">{forumPosts.length}K+</div>
              <div className="text-xs text-muted-foreground">Discussions</div>
            </Card>
            <Card className="text-center p-3 warm-glow">
              <div className="text-xl font-bold text-primary">{events.length}+</div>
              <div className="text-xs text-muted-foreground">Events</div>
            </Card>
            <Card className="text-center p-3 warm-glow">
              <div className="text-xl font-bold text-primary">{studyGroups.length}+</div>
              <div className="text-xs text-muted-foreground">Study Groups</div>
            </Card>
          </div>
        </motion.section>

        {/* Main Content */}
        <motion.section variants={itemVariants}>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview" className="flex items-center space-x-2">
                <Users className="h-3 w-3" />
                <span className="hidden sm:inline text-xs">Overview</span>
              </TabsTrigger>
              <TabsTrigger value="members" className="flex items-center space-x-2">
                <Users className="h-3 w-3" />
                <span className="hidden sm:inline text-xs">Members</span>
              </TabsTrigger>
              <TabsTrigger value="forum" className="flex items-center space-x-2">
                <MessageSquare className="h-3 w-3" />
                <span className="hidden sm:inline text-xs">Forum</span>
              </TabsTrigger>
              <TabsTrigger value="events" className="flex items-center space-x-2">
                <Calendar className="h-3 w-3" />
                <span className="hidden sm:inline text-xs">Events</span>
              </TabsTrigger>
              <TabsTrigger value="achievements" className="flex items-center space-x-2">
                <Trophy className="h-3 w-3" />
                <span className="hidden sm:inline text-xs">Progress</span>
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                  {/* Recent Forum Posts */}
                  <div>
                    <h2 className="text-xl font-semibold mb-3">Recent Discussions</h2>
                    <div className="space-y-3">
                      {forumPosts.slice(0, 3).map((post) => (
                        <ForumPostCard key={post.id} post={post} />
                      ))}
                    </div>
                  </div>

                  {/* Upcoming Events */}
                  <div>
                    <h2 className="text-xl font-semibold mb-3">Upcoming Events</h2>
                    <div className="grid md:grid-cols-2 gap-3">
                      {events.slice(0, 2).map((event) => (
                        <EventCard key={event.id} event={event} />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Active Members */}
                  <div>
                    <h2 className="text-lg font-semibold mb-3">Active Members</h2>
                    <div className="space-y-2">
                      {communityMembers.filter(m => m.isOnline).slice(0, 4).map((member) => (
                        <div key={member.id} className="flex items-center space-x-2 p-2 rounded-lg bg-muted/50">
                          <div className="relative">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={member.avatar} alt={member.name} />
                              <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-green-500 border border-white rounded-full"></div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium truncate text-xs">{member.name}</p>
                            <p className="text-xs text-muted-foreground truncate">{member.title}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Study Groups */}
                  <div>
                    <h2 className="text-lg font-semibold mb-3">Popular Study Groups</h2>
                    <div className="space-y-2">
                      {studyGroups.slice(0, 3).map((group) => (
                        <div key={group.id} className="p-2 rounded-lg bg-muted/50">
                          <h3 className="font-medium text-xs">{group.name}</h3>
                          <p className="text-xs text-muted-foreground mt-1">{group.members.length}/{group.maxMembers} members</p>
                          <div className="flex -space-x-1 mt-1">
                            {group.members.slice(0, 3).map((member) => (
                              <Avatar key={member.id} className="h-5 w-5 border border-white">
                                <AvatarImage src={member.avatar} alt={member.name} />
                                <AvatarFallback className="text-xs">
                                  {member.name.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                              </Avatar>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Members Tab */}
            <TabsContent value="members" className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-3 w-3 text-muted-foreground" />
                  <Input
                    placeholder="Search members..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9 h-9 text-sm"
                  />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="h-3 w-3 mr-2" />
                  Filter
                </Button>
              </div>

              <motion.div
                variants={containerVariants}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {communityMembers.map((member) => (
                  <MemberCard key={member.id} member={member} />
                ))}
              </motion.div>
            </TabsContent>

            {/* Forum Tab */}
            <TabsContent value="forum" className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-3 w-3 text-muted-foreground" />
                  <Input
                    placeholder="Search discussions..."
                    className="pl-9 h-9 text-sm"
                  />
                </div>
                <Button size="sm">
                  <MessageSquare className="h-3 w-3 mr-2" />
                  New Discussion
                </Button>
              </div>

              <motion.div variants={containerVariants} className="space-y-3">
                {forumPosts.map((post) => (
                  <ForumPostCard key={post.id} post={post} />
                ))}
              </motion.div>
            </TabsContent>

            {/* Events Tab */}
            <TabsContent value="events" className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-3 w-3 text-muted-foreground" />
                  <Input
                    placeholder="Search events..."
                    className="pl-9 h-9 text-sm"
                  />
                </div>
                <Button size="sm">
                  <Calendar className="h-3 w-3 mr-2" />
                  Create Event
                </Button>
              </div>

              <motion.div
                variants={containerVariants}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {events.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </motion.div>
            </TabsContent>

            {/* Achievements Tab */}
            <TabsContent value="achievements" className="space-y-4">
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                  <div>
                    <h2 className="text-xl font-semibold mb-3">Your Achievements</h2>
                    <motion.div
                      variants={containerVariants}
                      className="grid md:grid-cols-2 gap-3"
                    >
                      {achievements.map((achievement) => (
                        <AchievementCard key={achievement.id} achievement={achievement} />
                      ))}
                    </motion.div>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-3">Study Groups</h2>
                    <motion.div
                      variants={containerVariants}
                      className="grid md:grid-cols-2 gap-3"
                    >
                      {studyGroups.map((group) => (
                        <StudyGroupCard key={group.id} group={group} />
                      ))}
                    </motion.div>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Progress Summary */}
                  <Card className="warm-glow">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 text-base">
                        <Trophy className="h-4 w-4 text-primary" />
                        <span>Progress Summary</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs">Courses Completed</span>
                        <span className="font-semibold text-xs">8/12</span>
                      </div>
                      <Progress value={67} className="h-2" />
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs">Community Reputation</span>
                        <span className="font-semibold text-xs">2,450</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs">Achievements Unlocked</span>
                        <span className="font-semibold text-xs">3/8</span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Leaderboard */}
                  <Card className="warm-glow">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 text-base">
                        <Star className="h-4 w-4 text-primary" />
                        <span>Top Contributors</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {communityMembers
                        .sort((a, b) => b.reputation - a.reputation)
                        .slice(0, 5)
                        .map((member, index) => (
                          <div key={member.id} className="flex items-center space-x-2">
                            <div className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                              {index + 1}
                            </div>
                            <Avatar className="h-6 w-6">
                              <AvatarImage src={member.avatar} alt={member.name} />
                              <AvatarFallback className="text-xs">
                                {member.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-medium truncate">{member.name}</p>
                              <p className="text-xs text-muted-foreground">{member.reputation.toLocaleString()} pts</p>
                            </div>
                          </div>
                        ))}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.section>
      </motion.div>
    </div>
  );
}