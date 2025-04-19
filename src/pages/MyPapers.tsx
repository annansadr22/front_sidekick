
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Book } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MyPapers = () => {
  const navigate = useNavigate();
  
  // Sample data for papers
  const papers = [
    {
      id: 1,
      title: "The Impact of AI on Modern Society",
      date: "2025-04-19",
      status: "Completed",
    },
    {
      id: 2,
      title: "Climate Change and Global Economics",
      date: "2025-04-18",
      status: "In Progress",
    },
  ];

  const handleDownload = (paperId: number) => {
    // Simple mock download - in a real app this would download the actual paper
    console.log("Downloading paper:", paperId);
    
    // Create a fake PDF content
    const content = "This is a sample paper content for paper ID: " + paperId;
    
    // Create a Blob with the content
    const blob = new Blob([content], { type: 'text/plain' });
    
    // Create a link element
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `paper-${paperId}.txt`;
    
    // Append to the document, click and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Book className="h-6 w-6" />
            My Generated Papers
          </h1>
          <Button onClick={() => navigate("/")}>
            Generate New Paper
          </Button>
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
                  <TableCell>{paper.date}</TableCell>
                  <TableCell>{paper.status}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="outline"
                      onClick={() => handleDownload(paper.id)}
                    >
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
