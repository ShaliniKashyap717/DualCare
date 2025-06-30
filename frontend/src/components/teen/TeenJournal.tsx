
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { BookOpen, Calendar, Edit } from 'lucide-react';
import TeenNavbar from './TeenNavbar';

interface JournalEntry {
  id: number;
  date: string;
  content: string;
  mood: string;
}

const TeenJournal: React.FC = () => {
  const [newEntry, setNewEntry] = useState('');
  const [entries, setEntries] = useState<JournalEntry[]>([
    {
      id: 1,
      date: '2024-01-15',
      content: 'Today was challenging. I had a difficult conversation with my friend about something that was bothering me. It felt scary at first, but I\'m glad I spoke up. I learned that communication really can help solve problems.',
      mood: 'Mixed'
    },
    {
      id: 2,
      date: '2024-01-10',
      content: 'I\'ve been feeling more confident lately. I tried out for the school play and even though I was nervous, I gave it my best shot. Win or lose, I\'m proud of myself for trying.',
      mood: 'Confident'
    }
  ]);

  const handleSaveEntry = () => {
    if (newEntry.trim()) {
      const entry: JournalEntry = {
        id: entries.length + 1,
        date: new Date().toISOString().split('T')[0],
        content: newEntry,
        mood: 'Reflective'
      };
      setEntries([entry, ...entries]);
      setNewEntry('');
    }
  };

  const journalPrompt = "What emotions did you experience today, and what situations or thoughts triggered them? How did you handle these feelings?";

  return (
    <div className="min-h-screen bg-gray-50">
      <TeenNavbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Personal Journal
          </h1>
          <p className="text-xl text-gray-600">
            Reflect on your emotions, experiences, and personal growth
          </p>
        </div>

        {/* New Entry Section */}
        <Card className="mb-8 border-0 shadow-lg bg-white">
          <CardHeader className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2">
              <Edit className="w-5 h-5" />
              Today's Journal Entry
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="mb-4 p-4 bg-pink-50 rounded-lg border-l-4 border-pink-400">
              <h3 className="font-medium text-gray-800 mb-2">Today's Reflection Prompt:</h3>
              <p className="text-gray-700 italic">{journalPrompt}</p>
            </div>
            <Textarea
              placeholder="Write about your day, your feelings, challenges you faced, or anything on your mind..."
              value={newEntry}
              onChange={(e) => setNewEntry(e.target.value)}
              rows={6}
              className="border-gray-300 focus:border-pink-500 mb-4"
            />
            <Button 
              onClick={handleSaveEntry}
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white"
            >
              Save Entry
            </Button>
          </CardContent>
        </Card>

        {/* Past Entries */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <BookOpen className="w-6 h-6" />
            Past Journal Entries
          </h2>
          
          {entries.map((entry) => (
            <Card key={entry.id} className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg text-gray-800 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-pink-500" />
                    {new Date(entry.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </CardTitle>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                    {entry.mood}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{entry.content}</p>
              </CardContent>
            </Card>
          ))}
          
          {entries.length === 0 && (
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="text-center py-12">
                <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No journal entries yet. Start writing your first entry above!</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeenJournal;
