import React from 'react';

const ProfessionalInterests = () => {
  return (
    <section className="py-16 bg-navy animate-fade-in">
      <h2 className="text-3xl font-bold text-softwhite mb-8">Professional Interests</h2>
      <div className="max-w-2xl mx-auto text-left space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-softwhite">Cryptography</h3>
          <p className="text-softwhite/80 leading-relaxed">
            Exploring the intersection of mathematical theory and practical security implementations
            in modern cryptographic systems.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-softwhite">Large Language Models</h3>
          <p className="text-softwhite/80 leading-relaxed">
            Investigating the capabilities and limitations of LLMs, with a focus on their practical
            applications and ethical implications.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-softwhite">Physical AI Infrastructure</h3>
          <p className="text-softwhite/80 leading-relaxed">
            Studying the hardware and systems that power modern AI, from data centers to edge devices.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-softwhite">Energy Systems</h3>
          <p className="text-softwhite/80 leading-relaxed">
            Exploring sustainable and efficient energy solutions for computing infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalInterests;