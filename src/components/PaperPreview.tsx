
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GeneratedPaper, PaperConfig } from "@/types/paper";
import { formatCitation } from "@/utils/citationFormatter";

interface PaperPreviewProps {
  paper: GeneratedPaper;
  config: PaperConfig;
}

const PaperPreview = ({ paper, config }: PaperPreviewProps) => {
  const [viewMode, setViewMode] = useState<"preview" | "plain">("preview");

  const downloadPaper = () => {
    // In a real app, this would generate an actual file based on the output format
    alert(`Paper would be downloaded in ${config.outputFormat} format`);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-serif font-semibold">Your Generated Paper</h2>
        <div className="flex gap-4">
          <Select value={viewMode} onValueChange={(v) => setViewMode(v as "preview" | "plain")}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="View mode" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="preview">Preview</SelectItem>
              <SelectItem value="plain">Plain Text</SelectItem>
            </SelectContent>
          </Select>
          <Button 
            className="bg-blue-700 hover:bg-blue-800"
            onClick={downloadPaper}
          >
            Download {config.outputFormat}
          </Button>
        </div>
      </div>

      {viewMode === "preview" ? (
        <div className="bg-white border border-gray-200 p-8 font-serif">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-4">{paper.title}</h1>
            <p className="text-gray-600 italic">Generated for academic purposes</p>
          </div>
          
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-2">Abstract</h2>
            <p className="text-gray-800">{paper.abstract}</p>
          </section>
          
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-2">Introduction</h2>
            <div dangerouslySetInnerHTML={{ __html: paper.introduction }} />
          </section>
          
          {paper.sections.map((section, index) => (
            <section key={index} className="mb-6">
              <h2 className="text-xl font-bold mb-2">{section.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: section.content }} />
            </section>
          ))}
          
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-2">Conclusion</h2>
            <div dangerouslySetInnerHTML={{ __html: paper.conclusion }} />
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-4">References</h2>
            <ul className="space-y-2 list-none">
              {paper.references.map((ref, index) => (
                <li key={index} className="pl-8 -indent-8">
                  {formatCitation(ref, config.citationStyle)}
                </li>
              ))}
            </ul>
          </section>
        </div>
      ) : (
        <div className="bg-gray-100 p-4 font-mono text-sm whitespace-pre-wrap rounded overflow-auto max-h-[70vh]">
          <div>
            # {paper.title}
            
            ## Abstract
            
            {paper.abstract}
            
            ## Introduction
            
            {paper.introduction.replace(/<[^>]*>/g, '')}
            
            {paper.sections.map((section) => `## ${section.title}\n\n${section.content.replace(/<[^>]*>/g, '')}\n\n`).join('')}
            
            ## Conclusion
            
            {paper.conclusion.replace(/<[^>]*>/g, '')}
            
            ## References
            
            {paper.references.map((ref, i) => `${i+1}. ${formatCitation(ref, config.citationStyle).replace(/<[^>]*>/g, '')}\n`).join('')}
          </div>
        </div>
      )}
    </div>
  );
};

export default PaperPreview;
