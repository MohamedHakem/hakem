'use client';

import QuestionCard from '@/components/klist/question-card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Drawer } from '@/components/ui/drawer-original';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { questions } from '@/lib/data';
import { allTopics } from '@/lib/klist-question-topics';
import { Filter, Search, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

export default function Page() {
  const [completedQuestions, setCompletedQuestions] = useState<number[]>([]);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'default' | 'difficulty' | 'timeEstimate'>('default');
  const [studyTime, setStudyTime] = useState({ hoursPerWeek: 5, weeks: 4 });
  const [streak, setStreak] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    const savedData = localStorage.getItem('grind75Data');
    if (savedData) {
      const { completedQuestions, studyTime, streak, lastStudyDate } = JSON.parse(savedData);
      setCompletedQuestions(completedQuestions);
      setStudyTime(studyTime);

      const today = new Date().toDateString();
      if (lastStudyDate === today) {
        setStreak(streak);
      } else if (new Date(lastStudyDate).toDateString() === new Date(Date.now() - 86400000).toDateString()) {
        setStreak(streak + 1);
      } else {
        setStreak(1);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'grind75Data',
      JSON.stringify({
        completedQuestions,
        studyTime,
        streak,
        lastStudyDate: new Date().toDateString()
      })
    );
  }, [completedQuestions, studyTime, streak]);

  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      const matchesSearch = q.title.toLowerCase().includes(search.toLowerCase());
      const matchesFilter =
        filter === 'all' ||
        (filter === 'completed' && completedQuestions.includes(q.id)) ||
        (filter === 'todo' && !completedQuestions.includes(q.id)) ||
        filter === q.difficulty.toLowerCase();
      const matchesTopics = selectedTopics.length === 0 || selectedTopics.some((t) => q.topics.includes(t));
      return matchesSearch && matchesFilter && matchesTopics;
    });
  }, [search, filter, selectedTopics, completedQuestions]);

  const sortedQuestions = useMemo(() => {
    return [...filteredQuestions].sort((a, b) => {
      if (sortBy === 'difficulty') {
        const difficultyOrder: { [key: string]: number } = { Easy: 1, Medium: 2, Hard: 3 };
        return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
      } else if (sortBy === 'timeEstimate') {
        return a.timeEstimate - b.timeEstimate;
      }
      // Default order is the recommended order based on weeks and hours per week
      return a.id - b.id;
    });
  }, [filteredQuestions, sortBy]);

  const toggleCompleted = (id: number) => {
    setCompletedQuestions((prev) => {
      const newCompleted = prev.includes(id) ? prev.filter((qId) => qId !== id) : [...prev, id];

      if (!prev.includes(id)) {
        toast({
          title: 'Question Completed! 🎉',
          description: 'Great job! Keep up the good work!'
        });
      }

      return newCompleted;
    });
  };

  const studyPlan = useMemo(() => {
    const totalMinutes = studyTime.hoursPerWeek * studyTime.weeks * 60;
    let remainingTime = totalMinutes;
    return sortedQuestions.filter((question) => {
      if (!completedQuestions.includes(question.id) && remainingTime >= question.timeEstimate) {
        remainingTime -= question.timeEstimate;
        return true;
      }
      return false;
    });
  }, [sortedQuestions, completedQuestions, studyTime]);

  return (
    <div className="mx-auto max-w-4xl p-4">
      {/* Compact Header */}
      <div className="mb-6 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Grind 75</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium">🔥 {streak} day streak</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>
                {completedQuestions.length} / {questions.length} completed
              </span>
              <Progress value={(completedQuestions.length / questions.length) * 100} className="w-32 h-2 bg-green-100">
                <div
                  className="h-full bg-green-500 rounded-full"
                  style={{ width: `${(completedQuestions.length / questions.length) * 100}%` }}
                />
              </Progress>
            </div>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <Button variant="outline" size="sm" className="w-9 px-0" onClick={() => setIsSearchOpen(true)}>
            <Search className="h-4 w-4" />
          </Button>
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Filter by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Questions</SelectItem>
              <SelectItem value="todo">To Do</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="easy">Easy</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="hard">Hard</SelectItem>
            </SelectContent>
          </Select>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm" className="h-9">
                <Filter className="mr-2 h-4 w-4" />
                Topics
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 max-h-[400px] overflow-y-auto">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Select Topics</h4>
                  <p className="text-sm text-muted-foreground">Choose the topics you want to focus on.</p>
                </div>
                <div className="grid gap-2">
                  {allTopics.map((topic) => (
                    <div key={topic} className="flex items-center space-x-2">
                      <Checkbox
                        id={topic}
                        checked={selectedTopics.includes(topic)}
                        onCheckedChange={(checked) => {
                          setSelectedTopics((prev) => (checked ? [...prev, topic] : prev.filter((t) => t !== topic)));
                        }}
                      />
                      <Label htmlFor={topic}>{topic}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </PopoverContent>
          </Popover>
          <Select value={sortBy} onValueChange={(value) => setSortBy(value as 'default' | 'difficulty' | 'timeEstimate')}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Recommended</SelectItem>
              <SelectItem value="difficulty">Difficulty</SelectItem>
              <SelectItem value="timeEstimate">Time Estimate</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Study Plan Settings */}
      <div className="mb-6 p-4 border rounded-lg bg-muted/50">
        <h2 className="text-lg font-semibold mb-4">Study Plan</h2>
        <div className="flex items-center gap-4 mb-4">
          <div>
            <Label htmlFor="hours-per-week">Hours per week:</Label>
            <Select
              value={studyTime.hoursPerWeek.toString()}
              onValueChange={(value) => setStudyTime((prev) => ({ ...prev, hoursPerWeek: parseInt(value) }))}
            >
              <SelectTrigger id="hours-per-week" className="w-[100px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 10, 15, 20].map((hours) => (
                  <SelectItem key={hours} value={hours.toString()}>
                    {hours}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="weeks">Weeks:</Label>
            <Select
              value={studyTime.weeks.toString()}
              onValueChange={(value) => setStudyTime((prev) => ({ ...prev, weeks: parseInt(value) }))}
            >
              <SelectTrigger id="weeks" className="w-[100px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 4, 8, 12, 16, 20, 24].map((weeks) => (
                  <SelectItem key={weeks} value={weeks.toString()}>
                    {weeks}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          Your study plan is set to {studyTime.hoursPerWeek} hours per week for {studyTime.weeks} weeks. The question
          list below is filtered based on this plan.
        </p>
      </div>

      {/* Questions List */}
      <div className="space-y-2">
        {studyPlan.map((question) => (
          <QuestionCard
            key={question.id}
            {...question}
            completed={completedQuestions.includes(question.id)}
            onToggleCompleted={() => toggleCompleted(question.id)}
          />
        ))}
      </div>

      {/* Search Drawer */}
      <Drawer open={isSearchOpen} onClose={() => setIsSearchOpen(false)}>
        <div className="p-4">
          <div className="flex items-center mb-4">
            <Input
              type="text"
              placeholder="Search questions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-grow"
            />
            <Button variant="ghost" onClick={() => setIsSearchOpen(false)} className="ml-2">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-2">
            {filteredQuestions.map((question) => (
              <div key={question.id} className="p-2 hover:bg-muted rounded">
                {question.title}
              </div>
            ))}
          </div>
        </div>
      </Drawer>
    </div>
  );
}
