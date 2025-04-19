
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Book } from "lucide-react";

const MyPapers = () => {
  // TODO: Replace with actual data fetching
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
    // TODO: Implement actual download logic
    console.log("Downloading paper:", paperId);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Book className="h-6 w-6" />
            My Generated Papers
          </h1>
          <Button onClick={() => window.location.href = "/"}>
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
