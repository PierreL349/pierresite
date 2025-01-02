import React from 'react';

const WorkExperience = () => {
  return (
    <section className="py-16 animate-fade-in">
      <h2 className="text-3xl font-bold text-softwhite mb-8">Work Experience</h2>
      <div className="max-w-2xl mx-auto text-left space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-softwhite">Technical Product Manager</h3>
          <p className="text-softwhite/80 leading-relaxed">
            Led cross-functional teams in developing and launching enterprise software solutions.
            Managed product roadmaps, coordinated with stakeholders, and drove technical
            decision-making processes.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-softwhite">Quantitative Trading</h3>
          <p className="text-softwhite/80 leading-relaxed">
            Developed and implemented statistical arbitrage strategies for Bitcoin trading.
            Applied advanced mathematical models to identify market inefficiencies and
            optimize trading algorithms.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-softwhite">Current Project: Visual Question Answering</h3>
          <p className="text-softwhite/80 leading-relaxed">
            Developing a VQA model to enhance human-computer interaction on social media platforms.
            This technology enables more natural and context-aware communication between users and AI systems,
            improving content moderation, accessibility, and user engagement through intelligent
            image understanding and response generation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;