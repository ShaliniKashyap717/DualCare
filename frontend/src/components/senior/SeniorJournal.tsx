
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { BookOpen, Calendar, Edit } from 'lucide-react';
import SeniorNavbar from './SeniorNavbar';

interface JournalEntry {
  id: number;
  date: string;
  content: string;
  mood: string;
}

const SeniorJournal: React.FC = () => {
  const [newEntry, setNewEntry] = useState('');
  const [entries, setEntries] = useState<JournalEntry[]>([
    {
      id: 1,
      date: '2024-01-15',
      content: 'Today I called my granddaughter and we talked for an hour. She told me about her new job and I shared some advice from my own career. It reminded me how valuable these connections are and how much wisdom I have to offer.',
      mood: 'Grateful'
    },
    {
      id: 2,
      date: '2024-01-10',
      content: 'I\'ve been thinking about my late husband a lot today. Instead of feeling sad, I found myself smiling at the memories we shared. I realize that carrying his love with me is a gift, not a burden.',
      mood: 'Reflective'
    }
  ]);

  const handleSaveEntry = () => {
    if (newEntry.trim()) {
      const entry: JournalEntry = {
        id: entries.length + 1,
        date: new Date().toISOString().split('T')[0],
        content: newEntry,
        mood: 'Thoughtful'
      };
      setEntries([entry, ...entries]);
      setNewEntry('');
    }
  };

  const journalPrompt = "What memories brought you joy today? What wisdom from your life experiences might help someone facing similar challenges?";

  return (
    <div className="min-h-screen bg-gray-50">
      <SeniorNavbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Life Reflections Journal
          </h1>
          <p className="text-xl text-gray-600">
            Capture your thoughts, memories, and the wisdom you've gained
          </p>
        </div>

        {/* New Entry Section */}
        <Card className="mb-8 border-0 shadow-lg bg-white">
          <CardHeader className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2">
              <Edit className="w-5 h-5" />
              Today's Journal Entry
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="mb-4 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-400">
              <h3 className="font-medium text-gray-800 mb-2">Today's Reflection Prompt:</h3>
              <p className="text-gray-700 italic">{journalPrompt}</p>
            </div>
            <Textarea
              placeholder="Reflect on your day, share a memory, or write about something meaningful to you..."
              value={newEntry}
              onChange={(e) => setNewEntry(e.target.value)}
              rows={6}
              className="border-gray-300 focus:border-purple-500 mb-4"
            />
            <Button 
              onClick={handleSaveEntry}
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
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
                    <Calendar className="w-5 h-5 text-purple-500" />
                    {new Date(entry.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </CardTitle>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
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

export default SeniorJournal;
