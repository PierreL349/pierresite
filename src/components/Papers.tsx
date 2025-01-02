import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useToast } from './ui/use-toast';

interface Paper {
  title: string;
  date: string;
}

const Papers = () => {
  const [emailInputs, setEmailInputs] = useState<{ [key: string]: string }>({});
  const { toast } = useToast();

  const papers: Paper[] = [
    {
      title: "Implementation of Zero-Knowledge Proofs, ERC 721/1155 Tokenization, and Smart Contracts in Determining Proof-of-Ownership of Real World Assets",
      date: "March 2022"
    },
    {
      title: "Towards a Sustainable Middle Eastern Energy Landscape: Battery Energy Storage Systems (BESS) and Decentralized Transmission Implementations",
      date: "October 2023"
    },
    {
      title: "Advanced Hyperscale Data Center Strategy and Optimization for LLM Training and Finetuning",
      date: "September 2024"
    },
    {
      title: "Social VQA Systems: Pioneering AI Agents in Visual Intelligence and Human Connection",
      date: "(In Progress)"
    }
  ];

  const handleEmailSubmit = (title: string) => {
    const email = emailInputs[title];
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter an email address",
        variant: "destructive"
      });
      return;
    }
    
    if (!email.includes('@')) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Request Sent",
      description: "Thank you for your interest. We'll be in touch soon.",
    });
    
    // Reset the input
    setEmailInputs(prev => ({
      ...prev,
      [title]: ''
    }));
  };

  return (
    <section className="py-12 animate-fade-in">
      <h2 className="text-3xl font-bold mb-8 text-softwhite">Papers</h2>
      <div className="space-y-8">
        {papers.map((paper, index) => (
          <div key={index} className="bg-navy/50 p-6 rounded-lg border border-accent/20">
            <div className="mb-4">
              <h3 className="text-xl font-medium text-softwhite italic mb-2">{paper.title}</h3>
              <p className="text-softwhite/60">{paper.date}</p>
            </div>
            <div className="flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={emailInputs[paper.title] || ''}
                onChange={(e) => setEmailInputs(prev => ({
                  ...prev,
                  [paper.title]: e.target.value
                }))}
                className="max-w-xs bg-navy/70 text-softwhite"
              />
              <Button 
                onClick={() => handleEmailSubmit(paper.title)}
                className="bg-accent hover:bg-accent/80 text-softwhite"
              >
                Request Access
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Papers;
