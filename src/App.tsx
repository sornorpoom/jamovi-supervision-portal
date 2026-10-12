import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExecutiveView } from './components/ExecutiveView';
import { ChapterViewer } from './components/ChapterViewer';
import { ApaTableSection } from './components/ApaTableSection';
import { StatsCalculator } from './components/StatsCalculator';
import { DownloadCenter } from './components/DownloadCenter';
import { ReferencesSection } from './components/ReferencesSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('hero');

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      
      {/* Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'hero' && (
          <>
            <Hero
              onStartLearning={() => setActiveTab('chapters')}
              onExploreRubrics={() => setActiveTab('policy-rubrics')}
              onGoToApa={() => setActiveTab('apa-tables')}
            />
            <ChapterViewer />
            <ExecutiveView />
            <ApaTableSection />
            <StatsCalculator />
            <DownloadCenter />
            <ReferencesSection />
          </>
        )}

        {activeTab === 'chapters' && <ChapterViewer />}
        {activeTab === 'policy-rubrics' && <ExecutiveView />}
        {activeTab === 'apa-tables' && <ApaTableSection />}
        {activeTab === 'calculator' && <StatsCalculator />}
        {activeTab === 'downloads' && <DownloadCenter />}
        {activeTab === 'references' && <ReferencesSection />}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
