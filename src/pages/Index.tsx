
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PaperForm from "@/components/PaperForm";
import PaperPreview from "@/components/PaperPreview";
import ResearchPaperGenerator from "@/components/ResearchPaperGenerator";
import { PaperConfig, GeneratedPaper } from "@/types/paper";

const Index = () => {
  const [activeTab, setActiveTab] = useState("form");
  const [paperConfig, setPaperConfig] = useState<PaperConfig | null>(null);
  const [generatedPaper, setGeneratedPaper] = useState<GeneratedPaper | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleFormSubmit = async (config: PaperConfig) => {
    setPaperConfig(config);
    setIsGenerating(true);
    setActiveTab("preview");
    
    // Simulate paper generation (in real app, this would call APIs)
    setTimeout(() => {
      const paper = ResearchPaperGenerator.generatePaper(config);
      setGeneratedPaper(paper);
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-6 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-serif font-bold">Academic Paper Generator</h1>
          <p className="mt-2 text-blue-100">AI-powered research assistant for generating high-quality academic papers</p>
        </div>
      </header>
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="form" className="text-lg">Paper Configuration</TabsTrigger>
            <TabsTrigger value="preview" className="text-lg">Paper Preview</TabsTrigger>
          </TabsList>
          
          <TabsContent value="form" className="mt-0">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <PaperForm onSubmit={handleFormSubmit} />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="preview" className="mt-0">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                {isGenerating ? (
                  <div className="flex flex-col items-center justify-center py-16">
                    <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
                    <p className="text-xl font-medium text-gray-700">Generating your paper...</p>
                    <p className="text-gray-500 mt-2">This may take a few moments</p>
                  </div>
                ) : (
                  generatedPaper ? (
                    <PaperPreview paper={generatedPaper} config={paperConfig!} />
                  ) : (
                    <div className="text-center py-16">
                      <h3 className="text-xl font-medium text-gray-700">No paper generated yet</h3>
                      <p className="text-gray-500 mt-2">Configure and generate a paper first</p>
                      <Button 
                        className="mt-4" 
                        onClick={() => setActiveTab("form")}
                      >
                        Go to Paper Configuration
                      </Button>
                    </div>
                  )
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      
      <footer className="bg-slate-800 text-slate-300 p-6">
        <div className="container mx-auto text-center">
          <p>© 2025 Academic Paper Generator. For educational purposes only.</p>
          <p className="text-sm mt-2">Generated content should be reviewed for accuracy.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
