
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Heart, MessageCircle, Share2, Send } from 'lucide-react';
import SeniorNavbar from './SeniorNavbar';

const SeniorCommunity: React.FC = () => {
  const [newStory, setNewStory] = useState('');
  const [storyTitle, setStoryTitle] = useState('');
  const [replyInputs, setReplyInputs] = useState<{[key: number]: string}>({});
  const [stories, setStories] = useState([
    {
      id: 1,
      title: 'Finding Purpose After Retirement',
      author: 'Margaret S.',
      content: 'After 40 years in teaching, retirement felt empty until I discovered volunteering at the local library. Now I help children learn to read...',
      likes: 34,
      comments: 18,
      topic: 'Purpose',
      color: 'bg-blue-500',
      liked: false,
      replies: [
        { id: 1, author: 'Robert K.', content: 'This inspired me to look for volunteer opportunities too.', time: '1 day ago' }
      ]
    },
    {
      id: 2,
      title: 'Coping with the Loss of My Spouse',
      author: 'Robert K.',
      content: 'Losing my wife of 50 years was the hardest thing I\'ve ever faced. Here\'s how I learned to carry on while honoring her memory...',
      likes: 42,
      comments: 23,
      topic: 'Grief',
      color: 'bg-purple-500',
      liked: true,
      replies: []
    },
    {
      id: 3,
      title: 'Staying Connected with Technology',
      author: 'Dorothy L.',
      content: 'At 75, I learned to use video calls to stay close to my grandchildren. It\'s never too late to learn something new...',
      likes: 28,
      comments: 15,
      topic: 'Technology',
      color: 'bg-green-500',
      liked: false,
      replies: []
    }
  ]);

  const handleSubmitStory = () => {
    if (newStory.trim() && storyTitle.trim()) {
      const story = {
        id: stories.length + 1,
        title: storyTitle,
        author: 'You',
        content: newStory,
        likes: 0,
        comments: 0,
        topic: 'General',
        color: 'bg-yellow-500',
        liked: false,
        replies: []
      };
      setStories([story, ...stories]);
      setNewStory('');
      setStoryTitle('');
    }
  };

  const handleLike = (storyId: number) => {
    setStories(stories.map(story => 
      story.id === storyId 
        ? { 
            ...story, 
            liked: !story.liked, 
            likes: story.liked ? story.likes - 1 : story.likes + 1 
          }
        : story
    ));
  };

  const handleReply = (storyId: number) => {
    const replyText = replyInputs[storyId];
    if (replyText?.trim()) {
      setStories(stories.map(story => 
        story.id === storyId 
          ? {
              ...story,
              replies: [...story.replies, {
                id: story.replies.length + 1,
                author: 'You',
                content: replyText,
                time: 'Just now'
              }],
              comments: story.comments + 1
            }
          : story
      ));
      setReplyInputs({ ...replyInputs, [storyId]: '' });
    }
  };

  const topics = [
    'Grief & Loss', 'Health Issues', 'Isolation', 'Purpose', 'Independence', 
    'Technology', 'Family', 'Retirement'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SeniorNavbar />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Senior Community
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Share your experiences of how you've coped with the death of loved ones, isolation, health issues, and life transitions. Your wisdom can guide others.
          </p>
        </div>

        {/* Share Your Story Section */}
        <Card className="mb-8 border-0 shadow-lg bg-white hover-scale transition-all duration-300 animate-fade-in">
          <CardHeader className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-t-lg">
            <CardTitle className="text-2xl">Share Your Wisdom</CardTitle>
            <p className="text-purple-100">Your life experiences can help others navigate similar challenges</p>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
            <Input
              placeholder="Story title (e.g., How I Found Purpose After Retirement)"
              value={storyTitle}
              onChange={(e) => setStoryTitle(e.target.value)}
              className="border-gray-300 focus:border-purple-500 transition-colors"
            />
            <Textarea
              placeholder="Share your experience here... What challenges did you face? How did you overcome them?"
              value={newStory}
              onChange={(e) => setNewStory(e.target.value)}
              rows={4}
              className="border-gray-300 focus:border-purple-500 transition-colors"
            />
            <Button 
              onClick={handleSubmitStory}
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white transition-all duration-200 transform hover:scale-105"
            >
              Share Story
            </Button>
          </CardContent>
        </Card>

        {/* Topics Filter */}
        <div className="mb-8 animate-fade-in">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Browse by Topic</h3>
          <div className="flex flex-wrap gap-2">
            {topics.map((topic, index) => (
              <Button
                key={topic}
                variant="outline"
                size="sm"
                className="border-gray-300 text-gray-700 hover:bg-purple-50 hover:border-purple-300 transition-all duration-200 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {topic}
              </Button>
            ))}
          </div>
        </div>

        {/* Stories Feed */}
        <div className="space-y-6">
          {stories.map((story, index) => (
            <Card 
              key={story.id} 
              className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300 animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-3 py-1 ${story.color} text-white text-xs rounded-full font-medium shadow-sm`}>
                        {story.topic}
                      </span>
                      <span className="text-sm text-gray-500">by {story.author}</span>
                    </div>
                    <CardTitle className="text-xl text-gray-800 mb-2 hover:text-purple-600 transition-colors">
                      {story.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {story.content}
                </p>

                {/* Replies */}
                {story.replies.length > 0 && (
                  <div className="mb-4 space-y-2">
                    <h4 className="font-medium text-gray-800">Replies:</h4>
                    {story.replies.map((reply) => (
                      <div key={reply.id} className="bg-gray-50 p-3 rounded-lg border-l-4 border-purple-400">
                        <div className="flex justify-between items-start mb-1">
                          <span className="text-sm font-medium text-gray-800">{reply.author}</span>
                          <span className="text-xs text-gray-500">{reply.time}</span>
                        </div>
                        <p className="text-sm text-gray-700">{reply.content}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Reply Input */}
                <div className="mb-4 flex gap-2">
                  <Input
                    placeholder="Write a reply..."
                    value={replyInputs[story.id] || ''}
                    onChange={(e) => setReplyInputs({ ...replyInputs, [story.id]: e.target.value })}
                    className="flex-1 border-gray-300 focus:border-purple-500"
                  />
                  <Button
                    onClick={() => handleReply(story.id)}
                    size="sm"
                    className="bg-purple-500 hover:bg-purple-600 text-white"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>

                <div className="flex items-center gap-6 text-sm">
                  <button 
                    onClick={() => handleLike(story.id)}
                    className={`flex items-center gap-1 transition-all duration-200 hover:scale-110 ${
                      story.liked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${story.liked ? 'fill-current' : ''}`} />
                    {story.likes}
                  </button>
                  <button className="flex items-center gap-1 text-gray-500 hover:text-purple-500 transition-all duration-200 hover:scale-110">
                    <MessageCircle className="w-4 h-4" />
                    {story.comments}
                  </button>
                  <button className="flex items-center gap-1 text-gray-500 hover:text-purple-500 transition-all duration-200 hover:scale-110">
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeniorCommunity;
