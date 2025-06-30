
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Clock, Plus, CheckCircle } from 'lucide-react';
import SeniorNavbar from './SeniorNavbar';

interface Activity {
  id: number;
  time: string;
  activity: string;
  duration: string;
  completed: boolean;
}

const SeniorPlanner: React.FC = () => {
  const [wakeUpTime, setWakeUpTime] = useState('');
  const [newActivity, setNewActivity] = useState('');
  const [activityTime, setActivityTime] = useState('');
  const [activityDuration, setActivityDuration] = useState('');
  const [activities, setActivities] = useState<Activity[]>([]);

  const handleAddActivity = () => {
    if (newActivity.trim() && activityTime && activityDuration) {
      const activity: Activity = {
        id: activities.length + 1,
        time: activityTime,
        activity: newActivity,
        duration: activityDuration,
        completed: false
      };
      setActivities([...activities, activity]);
      setNewActivity('');
      setActivityTime('');
      setActivityDuration('');
    }
  };

  const toggleActivity = (id: number) => {
    setActivities(activities.map(activity => 
      activity.id === id ? { ...activity, completed: !activity.completed } : activity
    ));
  };

  const completedCount = activities.filter(a => a.completed).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <SeniorNavbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Daily Activity Planner
          </h1>
          <p className="text-xl text-gray-600">
            Plan your day and stay organized with your daily activities
          </p>
        </div>

        {/* Wake Up Time */}
        <Card className="mb-6 border-0 shadow-lg bg-white">
          <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              When did you wake up today?
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <Input
              type="time"
              value={wakeUpTime}
              onChange={(e) => setWakeUpTime(e.target.value)}
              className="max-w-xs border-gray-300 focus:border-purple-500"
            />
          </CardContent>
        </Card>

        {/* Add Activity */}
        <Card className="mb-6 border-0 shadow-lg bg-white">
          <CardHeader>
            <CardTitle className="text-gray-800">Add New Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                placeholder="Activity (e.g., Morning walk)"
                value={newActivity}
                onChange={(e) => setNewActivity(e.target.value)}
                className="border-gray-300 focus:border-purple-500"
              />
              <Input
                type="time"
                value={activityTime}
                onChange={(e) => setActivityTime(e.target.value)}
                className="border-gray-300 focus:border-purple-500"
              />
              <Input
                placeholder="Duration (e.g., 1 hour)"
                value={activityDuration}
                onChange={(e) => setActivityDuration(e.target.value)}
                className="border-gray-300 focus:border-purple-500"
              />
            </div>
            <Button 
              onClick={handleAddActivity}
              className="bg-purple-500 hover:bg-purple-600 text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Activity
            </Button>
          </CardContent>
        </Card>

        {/* Activities List */}
        {activities.length > 0 && (
          <Card className="mb-6 border-0 shadow-lg bg-white">
            <CardHeader>
              <CardTitle className="text-gray-800">Today's Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {activities
                  .sort((a, b) => a.time.localeCompare(b.time))
                  .map((activity) => (
                  <div
                    key={activity.id}
                    className={`flex items-center justify-between p-4 rounded-lg border transition-all duration-200 ${
                      activity.completed 
                        ? 'bg-green-50 border-green-200' 
                        : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleActivity(activity.id)}
                        className={activity.completed ? 'text-green-600' : 'text-gray-400'}
                      >
                        <CheckCircle className="w-5 h-5" />
                      </Button>
                      <div>
                        <p className={`font-medium ${activity.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                          {activity.activity}
                        </p>
                        <p className="text-sm text-gray-500">
                          {activity.time} • {activity.duration}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Summary */}
        {activities.length > 0 && (
          <Card className="border-0 shadow-lg bg-white">
            <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-t-lg">
              <CardTitle>Today's Summary</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">{activities.length}</p>
                  <p className="text-sm text-gray-600">Total Activities</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="text-2xl font-bold text-green-600">{completedCount}</p>
                  <p className="text-sm text-gray-600">Completed</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <p className="text-2xl font-bold text-purple-600">
                    {activities.length > 0 ? Math.round((completedCount / activities.length) * 100) : 0}%
                  </p>
                  <p className="text-sm text-gray-600">Progress</p>
                </div>
              </div>
              {wakeUpTime && (
                <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                  <p className="text-center text-gray-700">
                    <span className="font-medium">Started your day at:</span> {wakeUpTime}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default SeniorPlanner;
