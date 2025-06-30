
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import TeenNavbar from './TeenNavbar';

const TeenArticle: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const articles: { [key: string]: any } = {
    '1': {
      title: 'Understanding and Managing Peer Pressure',
      emoji: '👥',
      gradient: 'bg-gradient-primary',
      content: `
        Peer pressure is a natural part of teenage life, but it doesn't have to control your decisions. Here's how to navigate it:

        **What is Peer Pressure?**
        Peer pressure occurs when friends or classmates influence you to act, think, or look a certain way. It can be direct (someone telling you what to do) or indirect (feeling like you need to fit in).

        **Types of Peer Pressure:**
        • Direct: "Come on, everyone's doing it!"
        • Indirect: Feeling left out when others participate in activities you're unsure about
        • Positive: Friends encouraging healthy habits or academic success
        • Negative: Pressure to engage in risky or harmful behaviors

        **Strategies to Handle Peer Pressure:**
        1. **Know Your Values**: Be clear about what matters to you and what you stand for
        2. **Practice Saying No**: It's okay to decline invitations that make you uncomfortable
        3. **Find Like-minded Friends**: Surround yourself with people who respect your boundaries
        4. **Have an Exit Strategy**: Plan how to leave situations that feel wrong
        5. **Talk to Trusted Adults**: Parents, teachers, or counselors can offer guidance

        **Remember:**
        True friends will respect your decisions and won't pressure you to do things that make you uncomfortable. Your worth isn't determined by how well you fit in with others.
      `
    },
    '2': {
      title: 'Navigating Breakups & Romantic Relationships',
      emoji: '💕',
      gradient: 'bg-gradient-warm',
      content: `
        Teenage relationships can be intense and meaningful, but they also come with challenges. Here's how to navigate them healthily:

        **Healthy Relationship Signs:**
        • Mutual respect and trust
        • Open, honest communication
        • Supporting each other's goals and friendships
        • Feeling comfortable being yourself
        • Resolving conflicts respectfully

        **Red Flags to Watch For:**
        • Controlling behavior or jealousy
        • Pressure to do things you're not ready for
        • Isolation from friends and family
        • Verbal, emotional, or physical abuse
        • Constant criticism or put-downs

        **Dealing with Breakups:**
        1. **Allow Yourself to Grieve**: It's normal to feel sad, angry, or confused
        2. **Lean on Support**: Talk to friends, family, or a counselor
        3. **Avoid Revenge or Drama**: Don't try to hurt your ex or spread rumors
        4. **Focus on Self-Care**: Eat well, exercise, and do things you enjoy
        5. **Learn and Grow**: Reflect on what you learned from the relationship

        **Moving Forward:**
        Remember that first loves and teenage relationships are learning experiences. They help you understand what you want in future relationships and teach you about yourself.
      `
    },
    '3': {
      title: 'Building a Positive Body Image',
      emoji: '💪',
      gradient: 'bg-gradient-secondary',
      content: `
        Your relationship with your body is one of the most important relationships you'll have. Here's how to nurture it:

        **Understanding Body Image:**
        Body image is how you think and feel about your body. It's influenced by media, peers, family, and personal experiences. A positive body image means accepting and appreciating your body as it is.

        **Factors That Affect Body Image:**
        • Social media and unrealistic beauty standards
        • Comments from others about appearance
        • Comparison with peers
        • Puberty and body changes
        • Cultural and family messages about bodies

        **Building Body Positivity:**
        1. **Practice Gratitude**: Thank your body for what it does for you
        2. **Limit Media Exposure**: Unfollow accounts that make you feel bad about yourself
        3. **Focus on Health**: Eat nutritious foods and exercise for energy, not appearance
        4. **Challenge Negative Thoughts**: Question critical inner voices
        5. **Surround Yourself with Positivity**: Choose friends who uplift you

        **Self-Care Practices:**
        • Wear clothes that make you feel comfortable and confident
        • Engage in activities you enjoy, regardless of skill level
        • Practice mindfulness and body appreciation exercises
        • Seek support if body image concerns interfere with daily life

        **Remember:**
        Your worth is not determined by your appearance. You are valuable, lovable, and deserving of respect exactly as you are.
      `
    }
  };

  const article = articles[id || '1'] || articles['1'];

  return (
    <div className="min-h-screen">
      <TeenNavbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button
          onClick={() => navigate('/teen-dashboard')}
          variant="ghost"
          className="mb-6 text-pink-600 hover:text-pink-700"
        >
          ← Back to Home
        </Button>

        <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
          <div className={`h-4 ${article.gradient}`}></div>
          <CardHeader className="text-center">
            <div className="text-6xl mb-4">{article.emoji}</div>
            <CardTitle className="text-3xl text-gradient mb-4">
              {article.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {article.content.split('\n').map((paragraph: string, index: number) => {
                if (paragraph.trim() === '') return null;
                
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return (
                    <h3 key={index} className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                      {paragraph.slice(2, -2)}
                    </h3>
                  );
                }
                
                if (paragraph.startsWith('•')) {
                  return (
                    <li key={index} className="text-gray-700 ml-4 mb-2">
                      {paragraph.slice(1).trim()}
                    </li>
                  );
                }
                
                if (/^\d+\./.test(paragraph.trim())) {
                  return (
                    <li key={index} className="text-gray-700 ml-4 mb-2 list-decimal">
                      {paragraph.replace(/^\d+\.\s*/, '')}
                    </li>
                  );
                }
                
                return (
                  <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TeenArticle;
