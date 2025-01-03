import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useToast } from './ui/use-toast';

interface Paper {
  title: string;
  date: string;
  abstract: string;
}

const Papers = () => {
  const [emailInputs, setEmailInputs] = useState<{ [key: string]: string }>({});
  const { toast } = useToast();

  const papers: Paper[] = [
    {
      title: "Implementation of Zero-Knowledge Proofs, ERC 721/1155 Tokenization, and Smart Contracts in Determining Proof-of-Ownership of Real World Assets",
      date: "March 2022",
      abstract: "Despite many precautions taken in the distribution of Real World Assets (RWAs) to maintain correct titling, the precautions oftentimes are not modernized or are focused heavily on gaining profit. Utilizing Zero-Knowledge Proofs, specifically zk-SNARKs (zero-knowledge succinct non-interactive arguments of knowledge) and zk-STARKs to determine the credibility of certain legal documents regarding titling and deeds of RWAs unlocks a new potential for assets: storage on the blockchain with credibility by nature. Putting RWAs on chain as an NFT (Non-Fungible Token), either ERC721 or ERC1155 depending on the quantity of asset, automatically allows the titling to be immutably viewed, subsequently making title transferring immutable and making proof of ownership a seamless process."
    },
    {
      title: "Towards a Sustainable Middle Eastern Energy Landscape: Battery Energy Storage Systems (BESS) and Decentralized Transmission Implementations",
      date: "October 2023",
      abstract: "The Middle East’s centralized, fossil-fuel-dependent energy systems face critical structural and environmental challenges, with over 80% of electricity derived from hydrocarbons and transmission losses exceeding 15% in some regions. This paper evaluates the transformative potential of Battery Energy Storage Systems (BESS) and decentralized transmission frameworks in addressing these issues. BESS technologies, with discharge efficiencies exceeding 90%, enable high-resolution integration of intermittent renewable energy, stabilizing grids under variable load conditions. Decentralized transmission, leveraging modular grid nodes and adaptive load balancing, reduces inefficiencies and ensures energy access in under-resourced areas. Case studies from the Gulf Cooperation Council (GCC) demonstrate that integrating BESS with decentralized networks could cut carbon emissions by up to 30% while enhancing energy resilience against peak demand surges and climate-driven disruptions. However, entrenched fossil fuel subsidies, which account for over $50 billion annually, and fragmented regulatory frameworks inhibit widespread adoption. This paper argues that strategic investments in these technologies could redefine the Middle East’s energy landscape, transitioning from a centralized, emissions-intensive system to a distributed, low-carbon architecture that aligns with global sustainability goals and regional equity imperatives."
    },
    {
      title: "Advanced Hyperscale Data Center Strategy and Optimization for LLM Training and Finetuning",
      date: "September 2024",
      abstract: "The rise of large language models (LLMs) has pushed hyperscale data centers to their limits, demanding unprecedented levels of computational power, efficient networking, and sustainable energy use. We explore how adaptive cooling systems and AI-driven waste heat recovery optimize energy efficiency, achieving lower Power Usage Effectiveness (PUE) metrics tailored to the energy intensity of LLM workloads. High-performance networking solutions are analyzed for their ability to deliver the low-latency, high-bandwidth interconnects necessary for distributed AI training, emphasizing scalable fabrics and communication strategies for parallel processing. The role of automation in predictive maintenance and workload orchestration is also examined, showing how AI-driven systems enhance throughput and reduce downtime. This paper provides a pragmatic roadmap for hyperscale data centers to scale effectively with the growing demands of LLMs, balancing sustainability with the computational intensity required for cutting-edge AI advancements. It underscores the importance of innovation in energy, networking, and operations to transform theoretical AI breakthroughs into scalable, real-world applications."
    },
    {
      title: "Social VQA Systems: Pioneering AI Agents in Visual Intelligence and Human Connection",
      date: "(In Progress)",
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
              <p className="text-softwhite/60 mb-4">{paper.date}</p>
              <p className="text-softwhite/80 mb-4">{paper.abstract}</p>
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
                className="bg-accent/90 hover:bg-accent/80 text-softwhite"
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

