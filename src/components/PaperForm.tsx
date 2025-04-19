
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PaperConfig } from "@/types/paper";

const formSchema = z.object({
  topic: z.string().min(5, {
    message: "Topic must be at least 5 characters.",
  }),
  keywords: z.string().min(3, {
    message: "Please enter at least one keyword.",
  }),
  audience: z.string({
    required_error: "Please select an audience type.",
  }),
  tone: z.string({
    required_error: "Please select a tone.",
  }),
  pageLength: z.string({
    required_error: "Please select page length range.",
  }),
  citationStyle: z.string({
    required_error: "Please select a citation style.",
  }),
  outputFormat: z.string({
    required_error: "Please select an output format.",
  }),
});

interface PaperFormProps {
  onSubmit: (config: PaperConfig) => void;
}

const PaperForm = ({ onSubmit }: PaperFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: "",
      keywords: "",
      audience: "researchers",
      tone: "academic",
      pageLength: "5-10",
      citationStyle: "APA",
      outputFormat: "Markdown",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    // Process form values
    const config: PaperConfig = {
      topic: values.topic,
      keywords: values.keywords.split(",").map(k => k.trim()),
      audience: values.audience,
      tone: values.tone,
      pageLength: {
        min: parseInt(values.pageLength.split("-")[0]),
        max: parseInt(values.pageLength.split("-")[1]),
      },
      citationStyle: values.citationStyle,
      outputFormat: values.outputFormat,
    };
    
    onSubmit(config);
  };

  return (
    <div>
      <h2 className="text-2xl font-serif font-semibold mb-6">Configure Your Research Paper</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="topic"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Research Topic</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Enter your research topic or question" 
                    className="resize-none" 
                    {...field} 
                  />
                </FormControl>
                <FormDescription>
                  Be specific about what you want to research
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="keywords"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Focus Keywords</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Enter comma-separated keywords" 
                    {...field} 
                  />
                </FormControl>
                <FormDescription>
                  Example: machine learning, neural networks, AI ethics
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="audience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Target Audience</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select audience" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="students">Students</SelectItem>
                      <SelectItem value="researchers">Academic Researchers</SelectItem>
                      <SelectItem value="policymakers">Policy Makers</SelectItem>
                      <SelectItem value="general">General Public</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="tone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Writing Tone</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select tone" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="academic">Academic</SelectItem>
                      <SelectItem value="neutral">Neutral</SelectItem>
                      <SelectItem value="persuasive">Persuasive</SelectItem>
                      <SelectItem value="analytical">Analytical</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FormField
              control={form.control}
              name="pageLength"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Page Length</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select length" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="3-5">3-5 pages</SelectItem>
                      <SelectItem value="5-10">5-10 pages</SelectItem>
                      <SelectItem value="10-15">10-15 pages</SelectItem>
                      <SelectItem value="15-20">15-20 pages</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="citationStyle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Citation Style</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select style" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="APA">APA</SelectItem>
                      <SelectItem value="MLA">MLA</SelectItem>
                      <SelectItem value="Chicago">Chicago</SelectItem>
                      <SelectItem value="IEEE">IEEE</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="outputFormat"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Output Format</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select format" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Markdown">Markdown</SelectItem>
                      <SelectItem value="PDF">PDF (simulation)</SelectItem>
                      <SelectItem value="DOCX">DOCX (simulation)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="pt-4">
            <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800">
              Generate Research Paper
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default PaperForm;
