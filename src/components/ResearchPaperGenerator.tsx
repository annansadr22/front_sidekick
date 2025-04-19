import { useState } from "react";
import { PaperConfig, GeneratedPaper } from "@/types/paper";
import PaperForm from "./PaperForm";
import { generatePaperFromAPI } from "@/lib/api";

const ResearchPaperGenerator = () => {
  const [paper, setPaper] = useState<GeneratedPaper | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (config: PaperConfig) => {
    setLoading(true);
    try {
      const result = await generatePaperFromAPI(config);
      setPaper(result);
    } catch (err) {
      console.error("Failed to generate paper:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <PaperForm onSubmit={handleSubmit} />

      {loading && (
        <div className="mt-8 text-center text-blue-600 font-medium">
          Generating your research paper with AI...
        </div>
      )}

      {paper && (
        <div className="mt-10 space-y-6">
          <h2 className="text-2xl font-bold">{paper.title}</h2>

          <section>
            <h3 className="text-lg font-semibold">Abstract</h3>
            <p>{paper.abstract}</p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">Introduction</h3>
            <p>{paper.introduction}</p>
          </section>

          {paper.sections.map((section, index) => (
            <section key={index}>
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: section.content }} />
            </section>
          ))}

          <section>
            <h3 className="text-lg font-semibold">Conclusion</h3>
            <p>{paper.conclusion}</p>
          </section>

          {paper.references.length > 0 && (
            <section>
              <h3 className="text-lg font-semibold">References</h3>
              <ul className="list-disc pl-6">
                {paper.references.map((ref, index) => (
                  <li key={index}>
                    <span>{ref.authors.join(", ")} ({ref.year}). </span>
                    <strong>{ref.title}.</strong> {ref.source}
                    {ref.url && (
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline ml-1"
                      >
                        [link]
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      )}
    </div>
  );
};

export default ResearchPaperGenerator;
