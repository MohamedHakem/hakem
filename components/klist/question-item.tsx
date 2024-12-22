import { QuestionItemProps } from '@/lib/types';


export default function QuestionItem({ title, difficulty, timeEstimate, topics, completed = false }: QuestionItemProps) {
  return (
    <div className={`p-4 rounded-lg border ${completed ? 'bg-gray-50' : ''} hover:bg-gray-50 transition-colors`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-gray-500">1</span>
          <div>
            <h3 className="font-medium">{title}</h3>
            <div className="flex items-center gap-2 text-sm">
              <span
                className={`
                ${difficulty === 'Easy' ? 'text-green-600' : ''}
                ${difficulty === 'Medium' ? 'text-yellow-600' : ''}
                ${difficulty === 'Hard' ? 'text-red-600' : ''}
              `}
              >
                {difficulty}
              </span>
              <span className="text-gray-400">·</span>
              <span className="text-gray-500">{timeEstimate} mins</span>
              <span className="text-gray-400">·</span>
              <span className="text-gray-500">{topics}</span>
            </div>
          </div>
        </div>
        {completed ? (
          <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">✓</div>
        ) : null}
      </div>
    </div>
  );
}
