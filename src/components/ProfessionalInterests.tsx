import React from 'react';

const ProfessionalInterests = () => {
  return (
    <section className="py-16 bg-softwhite animate-fade-in">
      <h2 className="text-3xl font-bold text-navy mb-8">Professional Interests</h2>
      <div className="max-w-2xl mx-auto text-left space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Cryptography</h3>
          <p className="text-textdark leading-relaxed">
            Exploring the intersection of mathematical theory and practical security implementations
            in modern cryptographic systems.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Large Language Models</h3>
          <p className="text-textdark leading-relaxed">
            Investigating the capabilities and limitations of LLMs, with a focus on their practical
            applications and ethical implications.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Physical AI Infrastructure</h3>
          <p className="text-textdark leading-relaxed">
            Studying the hardware and systems that power modern AI, from data centers to edge devices.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Energy Systems</h3>
          <p className="text-textdark leading-relaxed">
            Exploring sustainable and efficient energy solutions for computing infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalInterests;