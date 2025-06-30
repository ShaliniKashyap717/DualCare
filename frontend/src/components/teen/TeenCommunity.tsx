
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Heart, MessageCircle, Share2, Send } from 'lucide-react';
import TeenNavbar from './TeenNavbar';

const TeenCommunity: React.FC = () => {
  const [newStory, setNewStory] = useState('');
  const [storyTitle, setStoryTitle] = useState('');
  const [replyInputs, setReplyInputs] = useState<{[key: number]: string}>({});
  const [stories, setStories] = useState([
    {
      id: 1,
      title: 'How I Overcame Peer Pressure',
      author: 'Anonymous',
      content: 'I used to give in to peer pressure all the time until I learned to trust my own judgment. It started when my friends wanted me to skip class...',
      likes: 24,
      comments: 8,
      topic: 'Peer Pressure',
      color: 'bg-pink-500',
      liked: false,
      replies: [
        { id: 1, author: 'Sarah M.', content: 'Thank you for sharing this! It really helped me.', time: '2 hours ago' }
      ]
    },
    {
      id: 2,
      title: 'My Journey with Body Image',
      author: 'Sarah M.',
      content: 'Learning to love myself took time, but I discovered that true beauty comes from within. Here\'s how I changed my mindset...',
      likes: 18,
      comments: 12,
      topic: 'Body Image',
      color: 'bg-purple-500',
      liked: false,
      replies: []
    },
    {
      id: 3,
      title: 'Dealing with Academic Stress',
      author: 'Alex K.',
      content: 'Balancing school work and personal life seemed impossible until I found these strategies that actually work...',
      likes: 31,
      comments: 15,
      topic: 'Academic Pressure',
      color: 'bg-cyan-500',
      liked: true,
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
    'Peer Pressure', 'Body Image', 'Academic Pressure', 'Relationships', 
    'Cyberbullying', 'Loneliness', 'Identity Struggles', 'Mental Health'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <TeenNavbar />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Teen Community
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Share your experiences of how you've coped with peer pressure, body image issues, academic stress, and other challenges. Your story could help another teen.
          </p>
        </div>

        {/* Share Your Story Section */}
        <Card className="mb-8 border-0 shadow-lg bg-white hover-scale transition-all duration-300 animate-fade-in">
          <CardHeader className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-t-lg">
            <CardTitle className="text-2xl">Share Your Story</CardTitle>
            <p className="text-pink-100">Help others by sharing how you overcame challenges</p>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
            <Input
              placeholder="Story title (e.g., How I Overcame Peer Pressure)"
              value={storyTitle}
              onChange={(e) => setStoryTitle(e.target.value)}
              className="border-gray-300 focus:border-pink-500 transition-colors"
            />
            <Textarea
              placeholder="Share your story here... How did you cope? What strategies worked for you?"
              value={newStory}
              onChange={(e) => setNewStory(e.target.value)}
              rows={4}
              className="border-gray-300 focus:border-pink-500 transition-colors"
            />
            <Button 
              onClick={handleSubmitStory}
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white transition-all duration-200 transform hover:scale-105"
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
                className="border-gray-300 text-gray-700 hover:bg-pink-50 hover:border-pink-300 transition-all duration-200 hover:scale-105"
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
                    <CardTitle className="text-xl text-gray-800 mb-2 hover:text-pink-600 transition-colors">
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
                      <div key={reply.id} className="bg-gray-50 p-3 rounded-lg border-l-4 border-pink-400">
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
                    className="flex-1 border-gray-300 focus:border-pink-500"
                  />
                  <Button
                    onClick={() => handleReply(story.id)}
                    size="sm"
                    className="bg-pink-500 hover:bg-pink-600 text-white"
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
                  <button className="flex items-center gap-1 text-gray-500 hover:text-pink-500 transition-all duration-200 hover:scale-110">
                    <MessageCircle className="w-4 h-4" />
                    {story.comments}
                  </button>
                  <button className="flex items-center gap-1 text-gray-500 hover:text-pink-500 transition-all duration-200 hover:scale-110">
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

export default TeenCommunity;
