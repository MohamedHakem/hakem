'use client';

import { useEffect, useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Drawer } from '@/components/ui/drawer-original';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { questions } from '@/lib/data';
import { X } from 'lucide-react';
import { useLocalStorage } from '@/hooks/use-local-storage';
import QuestionCard from '@/components/klist/question-card';
import { Header } from '@/components/klist/header';
import FilterBar from '@/components/klist/filter-bar';
// import { StudyPlanSettings } from '@/components/klist/study-plan-settings';

export default function Page() {
  const [completedQuestions, setCompletedQuestions] = useLocalStorage<number[]>('completedQuestions', []);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [sortBy, setSortBy] = useState<'default' | 'difficulty' | 'timeEstimate'>('default');
  const [studyTime, setStudyTime] = useLocalStorage('studyTime', { hoursPerWeek: 5, weeks: 4 });
  const [streak, setStreak] = useLocalStorage('streak', 0);
  const { toast } = useToast();
  const isMobile = typeof window !== 'undefined' ? window.innerWidth <= 768 : false;

  useEffect(() => {
    const today = new Date().toDateString();
    const lastStudyDate = localStorage.getItem('lastStudyDate');

    if (lastStudyDate === today) {
      // Already studied today, do nothing
    } else if (new Date(lastStudyDate || '').toDateString() === new Date(Date.now() - 86400000).toDateString()) {
      // Studied yesterday, increment streak
      setStreak((s: number) => s + 1);
    } else {
      // Didn't study yesterday, reset streak
      setStreak(1);
    }

    localStorage.setItem('lastStudyDate', today);
  }, [setStreak]);

  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      const matchesSearch = q.title.toLowerCase().includes(search.toLowerCase());
      const matchesFilter =
        filter === 'all' ||
        (filter === 'completed' && completedQuestions.includes(q.id)) ||
        (filter === 'todo' && !completedQuestions.includes(q.id)) ||
        filter === q.difficulty.toLowerCase();
      return matchesSearch && matchesFilter;
    });
  }, [search, filter, completedQuestions]);

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
      <Header completedCount={completedQuestions.length} totalCount={questions.length} streak={streak} />

      <div className="my-6">
        <FilterBar
          filter={filter}
          setFilter={setFilter}
          sortBy={sortBy}
          setSortBy={(value) => setSortBy(value as 'default' | 'difficulty' | 'timeEstimate')}
          onOpenSearch={() => setIsSearchOpen(true)}
          isMobile={isMobile}
        />
      </div>

      {/* <StudyPlanSettings studyTime={studyTime} setStudyTime={setStudyTime} /> */}

      <p className="text-sm text-muted-foreground mb-6">
        The question list below is in the recommended order based on your study plan and filters!
      </p>

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

      <Drawer open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <Drawer>
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
      </Drawer>
    </div>
  );
}
