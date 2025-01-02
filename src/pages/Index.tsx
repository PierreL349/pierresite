import React from 'react';
import Header from '../components/Header';
import Education from '../components/Education';
import ProfessionalInterests from '../components/ProfessionalInterests';
import WorkExperience from '../components/WorkExperience';
import PersonalInterests from '../components/PersonalInterests';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <Header />
        <Education />
        <ProfessionalInterests />
        <WorkExperience />
        <PersonalInterests />
      </div>
    </div>
  );
};

export default Index;