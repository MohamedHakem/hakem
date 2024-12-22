import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ChevronDown } from 'lucide-react';
import QuestionItem from '@/components/klist/question-item';
import { questions } from '@/lib/data';

export default function Page() {
  return (
    <div className="grid min-h-screen md:grid-cols-[240px_1fr]">
      {/* Sidebar */}
      <div className="border-r p-4 space-y-4">
        <h2 className="font-semibold mb-2">SCHEDULE</h2>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <input type="checkbox" className="rounded border-gray-300" />
            <span>1 hour per week</span>
          </div>
        </div>

        <h2 className="font-semibold mb-2">DIFFICULTY</h2>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <input type="checkbox" checked className="rounded border-gray-300" />
            <span className="text-green-600">Easy</span>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" checked className="rounded border-gray-300" />
            <span className="text-yellow-600">Medium</span>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" checked className="rounded border-gray-300" />
            <span className="text-red-600">Hard</span>
          </div>
        </div>

        <h2 className="font-semibold mb-2">TOPICS</h2>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <input type="checkbox" checked className="rounded border-gray-300" />
            <span>All topics selected</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Grind 23 questions</h1>

        <div className="max-w-3xl">
          {/* Question Summary */}
          <div className="mb-8 space-y-6">
            <div className="grid gap-4">
              <h3 className="font-semibold">Question Summary</h3>
              <div className="grid gap-8 md:grid-cols-3">
                <div>
                  <h4 className="text-sm text-gray-500 mb-2">TIME NEEDED</h4>
                  <p className="font-semibold">16 HOURS</p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 mb-2">DIFFICULTY</h4>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      Easy: 15
                    </Badge>
                    <Badge variant="outline" className="text-yellow-600 border-yellow-600">
                      Medium: 5
                    </Badge>
                    <Badge variant="outline" className="text-red-600 border-red-600">
                      Hard: 3
                    </Badge>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 mb-2">TOPICS</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Array</Badge>
                    <Badge variant="secondary">String</Badge>
                    <Badge variant="secondary">Binary Tree</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500">COMPLETED 1 / 23</span>
                <span className="text-sm text-gray-500">4%</span>
              </div>
              <Progress value={4} className="h-2" />
            </div>
          </div>

          {/* Questions List */}
          <div className="space-y-4">
            <div className="flex gap-4">
              <Button variant="outline" size="sm">
                Based on Preferences
              </Button>
              <Button variant="outline" size="sm">
                Order by Difficulty
              </Button>
              <Button variant="outline" size="sm">
                Order by Topics <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="week-1">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex justify-between items-center w-full">
                    <span className="font-semibold">Week 1</span>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-500">1/19</span>
                      <Progress value={5} className="w-32 h-2" />
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {questions.map((question, index) => (
                      <QuestionItem key={index} {...question} />
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
