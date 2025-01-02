import React from 'react';

const PersonalInterests = () => {
  return (
    <section className="py-16 bg-softwhite animate-fade-in">
      <h2 className="text-3xl font-bold text-navy mb-8">Personal Interests</h2>
      <div className="max-w-2xl mx-auto text-left space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Skiing</h3>
          <p className="text-textdark leading-relaxed">
            Finding freedom and excitement on the slopes, challenging myself with new terrains
            and conditions.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Guitar</h3>
          <p className="text-textdark leading-relaxed">
            Exploring musical expression through guitar, from classical pieces to modern compositions.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Classic Films</h3>
          <p className="text-textdark leading-relaxed">
            Appreciating the artistry and storytelling of classic cinema, with a particular
            interest in film noir and French New Wave.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PersonalInterests;