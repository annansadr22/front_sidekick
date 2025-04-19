// ✅ Updated MyPapers.tsx to fetch live papers from backend
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Book } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Paper {
  id: number;
  title: string;
  abstract: string;
  created_at: string;
}

const MyPapers = () => {
  const navigate = useNavigate();
  const [papers, setPapers] = useState<Paper[]>([]);

  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    if (!user_id) return;

    fetch(`http://127.0.0.1:8000/papers?user_id=${user_id}`)
      .then((res) => res.json())
      .then(setPapers)
      .catch((err) => console.error("Error fetching papers:", err));
  }, []);

  const handleDownload = (paperId: number) => {
    const paper = papers.find((p) => p.id === paperId);
    if (!paper) return;

    const content = `${paper.title}\n\n${paper.abstract}`;
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `paper-${paperId}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Book className="h-6 w-6" /> My Generated Papers
          </h1>
          <Button onClick={() => navigate("/")}>Generate New Paper</Button>
        </div>

        <div className="bg-white rounded-lg shadow">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {papers.map((paper) => (
                <TableRow key={paper.id}>
                  <TableCell className="font-medium">{paper.title}</TableCell>
                  <TableCell>{new Date(paper.created_at).toLocaleDateString()}</TableCell>
                  <TableCell>Completed</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" onClick={() => handleDownload(paper.id)}>
                      Download
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default MyPapers;
