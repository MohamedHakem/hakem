'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Circle, ExternalLink, PlayCircle } from 'lucide-react'
import { toggleCompleted } from '@/lib/actions'

interface QuestionCardProps {
  id: number
  title: string
  difficulty: "Easy" | "Medium" | "Hard"
  timeEstimate: number
  topics: string[]
  leetCodeUrl: string
  videoUrl?: string
  completed: boolean
}

export default function QuestionCard({
  id,
  title,
  difficulty,
  timeEstimate,
  topics,
  leetCodeUrl,
  videoUrl,
  completed: initialCompleted
}: QuestionCardProps) {
  const [completed, setCompleted] = useState(initialCompleted)

  const handleToggleCompleted = async () => {
    const newCompleted = !completed
    setCompleted(newCompleted)
    await toggleCompleted(id, newCompleted)
  }

  return (
    <div className={`group flex items-center gap-4 rounded-lg border p-3 transition-colors ${completed ? 'bg-green-50 opacity-75' : 'hover:bg-muted/50'}`}>
      {/* Status & Number */}
      <div className="flex items-center gap-3">
        <button 
          onClick={handleToggleCompleted}
          className={`text-muted-foreground hover:text-primary transition-colors ${completed ? 'text-green-500' : ''}`}
        >
          {completed ? (
            <CheckCircle className="h-5 w-5" />
          ) : (
            <Circle className="h-5 w-5" />
          )}
        </button>
        <span className="text-sm text-muted-foreground">{id}</span>
      </div>

      {/* Question Info */}
      <div className="flex flex-1 items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="font-medium leading-none">{title}</h3>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className={`
              font-medium
              ${difficulty === 'Easy' ? 'text-green-600' : ''}
              ${difficulty === 'Medium' ? 'text-yellow-600' : ''}
              ${difficulty === 'Hard' ? 'text-red-600' : ''}
            `}>
              {difficulty}
            </span>
            <span className="text-muted-foreground">·</span>
            <span className="text-muted-foreground">{timeEstimate} min</span>
            <span className="text-muted-foreground">·</span>
            <div className="flex flex-wrap gap-1">
              {topics.map((topic) => (
                <Badge key={topic} variant="secondary" className="text-xs">
                  {topic}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="h-8 w-8"
          >
            <a href={leetCodeUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              <span className="sr-only">Open in LeetCode</span>
            </a>
          </Button>
          {videoUrl && (
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="h-8 w-8 bg-red-100 hover:bg-red-200"
            >
              <a href={videoUrl} target="_blank" rel="noopener noreferrer">
                <PlayCircle className="h-4 w-4 text-red-500" />
                <span className="sr-only">Watch video solution</span>
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

