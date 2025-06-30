
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SeniorNavbar from './SeniorNavbar';

const SeniorArticle: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const articles: { [key: string]: any } = {
    '1': {
      title: 'Overcoming Loneliness & Isolation',
      emoji: '🤝',
      gradient: 'bg-gradient-ocean',
      content: `
        Loneliness is a common experience in later life, but it doesn't have to define your golden years. Here's how to build meaningful connections:

        **Understanding Loneliness:**
        Loneliness isn't just about being alone - it's about feeling disconnected from others. Even people surrounded by family and friends can feel lonely if they don't feel understood or valued.

        **Common Causes:**
        • Loss of spouse, friends, or family members
        • Retirement and loss of workplace relationships
        • Health issues that limit mobility
        • Changes in living situations
        • Feeling misunderstood by younger generations

        **Building Connections:**
        1. **Join Community Groups**: Senior centers, religious organizations, hobby clubs
        2. **Volunteer**: Share your skills and experience while meeting like-minded people
        3. **Stay in Touch**: Regular calls or visits with family and old friends
        4. **Learn Technology**: Use video calls, social media, or messaging apps
        5. **Consider a Pet**: Companionship and routine can greatly reduce loneliness

        **Quality Over Quantity:**
        Focus on building a few meaningful relationships rather than trying to socialize with many people. Deep connections are more fulfilling than surface-level interactions.

        **Professional Support:**
        If loneliness becomes overwhelming, consider speaking with a counselor or therapist who specializes in senior issues. There's no shame in seeking help.

        **Remember:**
        Your life experience and wisdom are valuable. You have much to offer in relationships, and there are people who would benefit from knowing you.
      `
    },
    '2': {
      title: 'Finding New Purpose After Major Life Changes',
      emoji: '🎯',
      gradient: 'bg-gradient-warm',
      content: `
        Retirement, health changes, or loss of loved ones can leave you questioning your purpose. Here's how to discover new meaning:

        **Understanding Purpose:**
        Purpose gives your life direction and meaning. It's about feeling that what you do matters and that you're making a positive difference, no matter how small.

        **Common Challenges:**
        • Feeling useless after retirement
        • Loss of identity tied to career or role
        • Physical limitations affecting previous activities
        • Feeling like you're a burden to others
        • Struggling to find motivation for daily activities

        **Discovering New Purpose:**
        1. **Reflect on Your Values**: What has always been important to you?
        2. **Use Your Experience**: Mentor younger people or share your knowledge
        3. **Help Others**: Volunteer for causes you care about
        4. **Create and Learn**: Take up new hobbies or revisit old ones
        5. **Family Legacy**: Share stories, create photo albums, teach skills

        **Small Purposes Matter:**
        Purpose doesn't have to be grand. It can be:
        • Caring for a garden or plants
        • Being a reliable friend to someone
        • Maintaining family traditions
        • Learning something new each day
        • Being a positive presence in your community

        **Redefining Success:**
        Success in later life isn't about achievement or productivity - it's about contentment, relationships, and personal fulfillment.

        **Remember:**
        Every stage of life has its own gifts and purposes. Your current chapter may look different, but it can be just as meaningful and fulfilling.
      `
    },
    '3': {
      title: 'Navigating Grief & Bereavement',
      emoji: '🕊️',
      gradient: 'bg-gradient-cool',
      content: `
        Grief is love with nowhere to go. As we age, we may face multiple losses. Here's how to navigate this difficult journey:

        **Understanding Grief:**
        Grief isn't just about death - we can grieve the loss of health, independence, roles, or dreams. Each loss is valid and deserves acknowledgment.

        **Types of Loss:**
        • Death of spouse, friends, or family members
        • Loss of health or physical abilities
        • Loss of independence or living situation changes
        • Loss of roles (parent, professional, caregiver)
        • Loss of future plans or dreams

        **The Grief Process:**
        Grief isn't linear. You might experience:
        • Denial and disbelief
        • Anger and frustration
        • Bargaining and "what if" thoughts
        • Depression and sadness
        • Acceptance and adaptation

        **Healthy Coping Strategies:**
        1. **Allow Yourself to Grieve**: Don't rush the process or judge your feelings
        2. **Maintain Routines**: Structure can provide comfort and stability
        3. **Stay Connected**: Accept support from others and share your feelings
        4. **Honor Memories**: Create rituals, photo albums, or memorial practices
        5. **Take Care of Your Health**: Eat well, rest, and stay active

        **When to Seek Help:**
        Consider professional support if:
        • Grief interferes with daily functioning for extended periods
        • You have thoughts of self-harm
        • You're unable to care for yourself
        • Substance use becomes a coping mechanism

        **Creating Meaning:**
        Many people find comfort in:
        • Continuing the deceased's charitable work
        • Sharing their stories with others
        • Creating something in their memory
        • Finding ways to help others facing similar losses

        **Remember:**
        Grief is the price we pay for love. Healing doesn't mean forgetting - it means learning to carry your love in a new way.
      `
    }
  };

  const article = articles[id || '1'] || articles['1'];

  return (
    <div className="min-h-screen">
      <SeniorNavbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button
          onClick={() => navigate('/senior-dashboard')}
          variant="ghost"
          className="mb-6 text-purple-600 hover:text-purple-700"
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

export default SeniorArticle;
