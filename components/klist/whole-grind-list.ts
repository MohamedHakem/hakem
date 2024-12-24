const grindlist = [
  {
    title: 'Week 1',
    questions: [
      {
        id: 1,
        title: 'Two Sum',
        difficulty: 'Easy',
        timeEstimate: 15,
        topics: ['Array'],
        leetCodeUrl: 'https://leetcode.com/problems/two-sum',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 2,
        title: 'Valid Parentheses',
        difficulty: 'Easy',
        timeEstimate: 20,
        topics: ['Stack'],
        leetCodeUrl: 'https://leetcode.com/problems/valid-parentheses',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 3,
        title: 'Merge Two Sorted Lists',
        difficulty: 'Easy',
        timeEstimate: 20,
        topics: ['Linked List'],
        leetCodeUrl: 'https://leetcode.com/problems/merge-two-sorted-lists',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 4,
        title: 'Best Time to Buy and Sell Stock',
        difficulty: 'Easy',
        timeEstimate: 20,
        topics: ['Array'],
        leetCodeUrl: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 5,
        title: 'Valid Palindrome',
        difficulty: 'Easy',
        timeEstimate: 15,
        topics: ['String'],
        leetCodeUrl: 'https://leetcode.com/problems/valid-palindrome',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 6,
        title: 'Invert Binary Tree',
        difficulty: 'Easy',
        timeEstimate: 15,
        topics: ['Binary Tree'],
        leetCodeUrl: 'https://leetcode.com/problems/invert-binary-tree',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 7,
        title: 'Valid Anagram',
        difficulty: 'Easy',
        timeEstimate: 15,
        topics: ['String'],
        leetCodeUrl: 'https://leetcode.com/problems/valid-anagram',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 8,
        title: 'Binary Search',
        difficulty: 'Easy',
        timeEstimate: 15,
        topics: ['Binary Search'],
        leetCodeUrl: 'https://leetcode.com/problems/binary-search',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 9,
        title: 'Flood Fill',
        difficulty: 'Easy',
        timeEstimate: 20,
        topics: ['Graph'],
        leetCodeUrl: 'https://leetcode.com/problems/flood-fill',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 10,
        title: 'Lowest Common Ancestor of a Binary Search Tree',
        difficulty: 'Easy',
        timeEstimate: 20,
        topics: ['Binary Search Tree'],
        leetCodeUrl: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 11,
        title: 'Balanced Binary Tree',
        difficulty: 'Easy',
        timeEstimate: 15,
        topics: ['Binary Tree'],
        leetCodeUrl: 'https://leetcode.com/problems/balanced-binary-tree',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 12,
        title: 'Linked List Cycle',
        difficulty: 'Easy',
        timeEstimate: 20,
        topics: ['Linked List'],
        leetCodeUrl: 'https://leetcode.com/problems/linked-list-cycle',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 13,
        title: 'Implement Queue using Stacks',
        difficulty: 'Easy',
        timeEstimate: 20,
        topics: ['Stack'],
        leetCodeUrl: 'https://leetcode.com/problems/implement-queue-using-stacks',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 14,
        title: 'First Bad Version',
        difficulty: 'Easy',
        timeEstimate: 20,
        topics: ['Binary Search'],
        leetCodeUrl: 'https://leetcode.com/problems/first-bad-version',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 15,
        title: 'Ransom Note',
        difficulty: 'Easy',
        timeEstimate: 15,
        topics: ['Hash Table'],
        leetCodeUrl: 'https://leetcode.com/problems/ransom-note',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 16,
        title: 'Climbing Stairs',
        difficulty: 'Easy',
        timeEstimate: 20,
        topics: ['Dynamic Programming'],
        leetCodeUrl: 'https://leetcode.com/problems/climbing-stairs',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 17,
        title: 'Longest Palindrome',
        difficulty: 'Easy',
        timeEstimate: 20,
        topics: ['String'],
        leetCodeUrl: 'https://leetcode.com/problems/longest-palindrome',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 18,
        title: 'Reverse Linked List',
        difficulty: 'Easy',
        timeEstimate: 20,
        topics: ['Linked List'],
        leetCodeUrl: 'https://leetcode.com/problems/reverse-linked-list',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 19,
        title: 'Majority Element',
        difficulty: 'Easy',
        timeEstimate: 20,
        topics: ['Array'],
        leetCodeUrl: 'https://leetcode.com/problems/majority-element',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 20,
        title: 'Add Binary',
        difficulty: 'Easy',
        timeEstimate: 15,
        topics: ['Binary'],
        leetCodeUrl: 'https://leetcode.com/problems/add-binary',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 21,
        title: 'Diameter of Binary Tree',
        difficulty: 'Easy',
        timeEstimate: 30,
        topics: ['Binary Tree'],
        leetCodeUrl: 'https://leetcode.com/problems/diameter-of-binary-tree',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 22,
        title: 'Middle of the Linked List',
        difficulty: 'Easy',
        timeEstimate: 20,
        topics: ['Linked List'],
        leetCodeUrl: 'https://leetcode.com/problems/middle-of-the-linked-list',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 23,
        title: 'Maximum Depth of Binary Tree',
        difficulty: 'Easy',
        timeEstimate: 15,
        topics: ['Binary Tree'],
        leetCodeUrl: 'https://leetcode.com/problems/maximum-depth-of-binary-tree',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 24,
        title: 'Contains Duplicate',
        difficulty: 'Easy',
        timeEstimate: 15,
        topics: ['Array'],
        leetCodeUrl: 'https://leetcode.com/problems/contains-duplicate',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 25,
        title: 'Meeting Rooms',
        difficulty: 'Easy',
        timeEstimate: 20,
        topics: ['Array'],
        leetCodeUrl: 'https://leetcode.com/problems/meeting-rooms',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 26,
        title: 'Roman to Integer',
        difficulty: 'Easy',
        timeEstimate: 20,
        topics: ['Math'],
        leetCodeUrl: 'https://leetcode.com/problems/roman-to-integer',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 27,
        title: 'Backspace String Compare',
        difficulty: 'Easy',
        timeEstimate: 15,
        topics: ['Stack'],
        leetCodeUrl: 'https://leetcode.com/problems/backspace-string-compare',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 28,
        title: 'Counting Bits',
        difficulty: 'Easy',
        timeEstimate: 15,
        topics: ['Binary'],
        leetCodeUrl: 'https://leetcode.com/problems/counting-bits',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 29,
        title: 'Same Tree',
        difficulty: 'Easy',
        timeEstimate: 20,
        topics: ['Binary Tree'],
        leetCodeUrl: 'https://leetcode.com/problems/same-tree',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 30,
        title: 'Number of 1 Bits',
        difficulty: 'Easy',
        timeEstimate: 15,
        topics: ['Binary'],
        leetCodeUrl: 'https://leetcode.com/problems/number-of-1-bits',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 31,
        title: 'Longest Common Prefix',
        difficulty: 'Easy',
        timeEstimate: 20,
        topics: ['String'],
        leetCodeUrl: 'https://leetcode.com/problems/longest-common-prefix',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 32,
        title: 'Single Number',
        difficulty: 'Easy',
        timeEstimate: 15,
        topics: ['Binary'],
        leetCodeUrl: 'https://leetcode.com/problems/single-number',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 33,
        title: 'Palindrome Linked List',
        difficulty: 'Easy',
        timeEstimate: 20,
        topics: ['Linked List'],
        leetCodeUrl: 'https://leetcode.com/problems/palindrome-linked-list',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 34,
        title: 'Move Zeroes',
        difficulty: 'Easy',
        timeEstimate: 20,
        topics: ['Array'],
        leetCodeUrl: 'https://leetcode.com/problems/move-zeroes',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 35,
        title: 'Symmetric Tree',
        difficulty: 'Easy',
        timeEstimate: 20,
        topics: ['Binary Tree'],
        leetCodeUrl: 'https://leetcode.com/problems/symmetric-tree',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 36,
        title: 'Missing Number',
        difficulty: 'Easy',
        timeEstimate: 15,
        topics: ['Binary'],
        leetCodeUrl: 'https://leetcode.com/problems/missing-number',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 37,
        title: 'Palindrome Number',
        difficulty: 'Easy',
        timeEstimate: 15,
        topics: ['Math'],
        leetCodeUrl: 'https://leetcode.com/problems/palindrome-number',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 38,
        title: 'Convert Sorted Array to Binary Search Tree',
        difficulty: 'Easy',
        timeEstimate: 20,
        topics: ['Binary Search Tree'],
        leetCodeUrl: 'https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 39,
        title: 'Reverse Bits',
        difficulty: 'Easy',
        timeEstimate: 15,
        topics: ['Binary'],
        leetCodeUrl: 'https://leetcode.com/problems/reverse-bits',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 40,
        title: 'Subtree of Another Tree',
        difficulty: 'Easy',
        timeEstimate: 20,
        topics: ['Binary Tree'],
        leetCodeUrl: 'https://leetcode.com/problems/subtree-of-another-tree',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 41,
        title: 'Squares of a Sorted Array',
        difficulty: 'Easy',
        timeEstimate: 20,
        topics: ['Array'],
        leetCodeUrl: 'https://leetcode.com/problems/squares-of-a-sorted-array',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 42,
        title: 'Maximum Subarray',
        difficulty: '',
        timeEstimate: 20,
        topics: ['Dynamic Programming'],
        leetCodeUrl: 'https://leetcode.com/problems/maximum-subarray',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 43,
        title: 'Insert Interval',
        difficulty: '',
        timeEstimate: 25,
        topics: ['Array'],
        leetCodeUrl: 'https://leetcode.com/problems/insert-interval',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 44,
        title: '01 Matrix',
        difficulty: '',
        timeEstimate: 30,
        topics: ['Graph'],
        leetCodeUrl: 'https://leetcode.com/problems/01-matrix',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 45,
        title: 'K Closest Points to Origin',
        difficulty: '',
        timeEstimate: 30,
        topics: ['Heap'],
        leetCodeUrl: 'https://leetcode.com/problems/k-closest-points-to-origin',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 46,
        title: 'Longest Substring Without Repeating Characters',
        difficulty: '',
        timeEstimate: 30,
        topics: ['String'],
        leetCodeUrl: 'https://leetcode.com/problems/longest-substring-without-repeating-characters',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 47,
        title: '3Sum',
        difficulty: '',
        timeEstimate: 30,
        topics: ['Array'],
        leetCodeUrl: 'https://leetcode.com/problems/3sum',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 48,
        title: 'Binary Tree Level Order Traversal',
        difficulty: '',
        timeEstimate: 20,
        topics: ['Binary Tree'],
        leetCodeUrl: 'https://leetcode.com/problems/binary-tree-level-order-traversal',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      }
    ]
  },
  {
    title: 'Week 2',
    questions: [
      {
        id: 1,
        title: 'Clone Graph',
        difficulty: '',
        timeEstimate: 25,
        topics: ['Graph'],
        leetCodeUrl: 'https://leetcode.com/problems/clone-graph',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 2,
        title: 'Evaluate Reverse Polish Notation',
        difficulty: '',
        timeEstimate: 30,
        topics: ['Stack'],
        leetCodeUrl: 'https://leetcode.com/problems/evaluate-reverse-polish-notation',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 3,
        title: 'Course Schedule',
        difficulty: '',
        timeEstimate: 30,
        topics: ['Graph'],
        leetCodeUrl: 'https://leetcode.com/problems/course-schedule',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 4,
        title: 'Implement Trie (Prefix Tree)',
        difficulty: '',
        timeEstimate: 35,
        topics: ['Trie'],
        leetCodeUrl: 'https://leetcode.com/problems/implement-trie-prefix-tree',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 5,
        title: 'Coin Change',
        difficulty: '',
        timeEstimate: 25,
        topics: ['Dynamic Programming'],
        leetCodeUrl: 'https://leetcode.com/problems/coin-change',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 6,
        title: 'Product of Array Except Self',
        difficulty: '',
        timeEstimate: 30,
        topics: ['Array'],
        leetCodeUrl: 'https://leetcode.com/problems/product-of-array-except-self',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 7,
        title: 'Min Stack',
        difficulty: '',
        timeEstimate: 20,
        topics: ['Stack'],
        leetCodeUrl: 'https://leetcode.com/problems/min-stack',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 8,
        title: 'Validate Binary Search Tree',
        difficulty: '',
        timeEstimate: 20,
        topics: ['Binary Search Tree'],
        leetCodeUrl: 'https://leetcode.com/problems/validate-binary-search-tree',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 9,
        title: 'Number of Islands',
        difficulty: '',
        timeEstimate: 25,
        topics: ['Graph'],
        leetCodeUrl: 'https://leetcode.com/problems/number-of-islands',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 10,
        title: 'Rotting Oranges',
        difficulty: '',
        timeEstimate: 30,
        topics: ['Graph'],
        leetCodeUrl: 'https://leetcode.com/problems/rotting-oranges',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 11,
        title: 'Search in Rotated Sorted Array',
        difficulty: '',
        timeEstimate: 30,
        topics: ['Binary Search'],
        leetCodeUrl: 'https://leetcode.com/problems/search-in-rotated-sorted-array',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 12,
        title: 'Combination Sum',
        difficulty: '',
        timeEstimate: 30,
        topics: ['Array'],
        leetCodeUrl: 'https://leetcode.com/problems/combination-sum',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 13,
        title: 'Permutations',
        difficulty: '',
        timeEstimate: 30,
        topics: ['Recursion'],
        leetCodeUrl: 'https://leetcode.com/problems/permutations',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 14,
        title: 'Merge Intervals',
        difficulty: '',
        timeEstimate: 30,
        topics: ['Array'],
        leetCodeUrl: 'https://leetcode.com/problems/merge-intervals',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 15,
        title: 'Lowest Common Ancestor of a Binary Tree',
        difficulty: '',
        timeEstimate: 25,
        topics: ['Binary Tree'],
        leetCodeUrl: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 16,
        title: 'Time Based Key-Value Store',
        difficulty: '',
        timeEstimate: 35,
        topics: ['Binary Search'],
        leetCodeUrl: 'https://leetcode.com/problems/time-based-key-value-store',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 17,
        title: 'Accounts Merge',
        difficulty: '',
        timeEstimate: 30,
        topics: ['Graph'],
        leetCodeUrl: 'https://leetcode.com/problems/accounts-merge',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 18,
        title: 'Sort Colors',
        difficulty: '',
        timeEstimate: 25,
        topics: ['Array'],
        leetCodeUrl: 'https://leetcode.com/problems/sort-colors',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 19,
        title: 'Word Break',
        difficulty: '',
        timeEstimate: 30,
        topics: ['Trie'],
        leetCodeUrl: 'https://leetcode.com/problems/word-break',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 20,
        title: 'Partition Equal Subset Sum',
        difficulty: '',
        timeEstimate: 30,
        topics: ['Dynamic Programming'],
        leetCodeUrl: 'https://leetcode.com/problems/partition-equal-subset-sum',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 21,
        title: 'String to Integer (atoi)',
        difficulty: '',
        timeEstimate: 25,
        topics: ['String'],
        leetCodeUrl: 'https://leetcode.com/problems/string-to-integer-atoi',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 22,
        title: 'Spiral Matrix',
        difficulty: '',
        timeEstimate: 25,
        topics: ['Matrix'],
        leetCodeUrl: 'https://leetcode.com/problems/spiral-matrix',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 23,
        title: 'Subsets',
        difficulty: '',
        timeEstimate: 30,
        topics: ['Recursion'],
        leetCodeUrl: 'https://leetcode.com/problems/subsets',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 24,
        title: 'Binary Tree Right Side View',
        difficulty: '',
        timeEstimate: 20,
        topics: ['Binary Tree'],
        leetCodeUrl: 'https://leetcode.com/problems/binary-tree-right-side-view',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 25,
        title: 'Longest Palindromic Substring',
        difficulty: '',
        timeEstimate: 25,
        topics: ['String'],
        leetCodeUrl: 'https://leetcode.com/problems/longest-palindromic-substring',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 26,
        title: 'Unique Paths',
        difficulty: '',
        timeEstimate: 20,
        topics: ['Dynamic Programming'],
        leetCodeUrl: 'https://leetcode.com/problems/unique-paths',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 27,
        title: 'Construct Binary Tree from Preorder and Inorder Traversal',
        difficulty: '',
        timeEstimate: 25,
        topics: ['Binary Tree'],
        leetCodeUrl: 'https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 28,
        title: 'Container With Most Water',
        difficulty: '',
        timeEstimate: 35,
        topics: ['Array'],
        leetCodeUrl: 'https://leetcode.com/problems/container-with-most-water',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 29,
        title: 'Letter Combinations of a Phone Number',
        difficulty: '',
        timeEstimate: 30,
        topics: ['Recursion'],
        leetCodeUrl: 'https://leetcode.com/problems/letter-combinations-of-a-phone-number',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 30,
        title: 'Word Search',
        difficulty: '',
        timeEstimate: 30,
        topics: ['Graph'],
        leetCodeUrl: 'https://leetcode.com/problems/word-search',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 31,
        title: 'Find All Anagrams in a String',
        difficulty: '',
        timeEstimate: 30,
        topics: ['String'],
        leetCodeUrl: 'https://leetcode.com/problems/find-all-anagrams-in-a-string',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 32,
        title: 'Minimum Height Trees',
        difficulty: '',
        timeEstimate: 30,
        topics: ['Graph'],
        leetCodeUrl: 'https://leetcode.com/problems/minimum-height-trees',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 33,
        title: 'Task Scheduler',
        difficulty: '',
        timeEstimate: 35,
        topics: ['Heap'],
        leetCodeUrl: 'https://leetcode.com/problems/task-scheduler',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      }
    ]
  },
  {
    title: 'Week 3',
    questions: [
      {
        id: 1,
        title: 'LRU Cache',
        difficulty: '',
        timeEstimate: 30,
        topics: ['Linked List'],
        leetCodeUrl: 'https://leetcode.com/problems/lru-cache',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 2,
        title: 'Kth Smallest Element in a BST',
        difficulty: '',
        timeEstimate: 25,
        topics: ['Binary Search Tree'],
        leetCodeUrl: 'https://leetcode.com/problems/kth-smallest-element-in-a-bst',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 3,
        title: 'Daily Temperatures',
        difficulty: '',
        timeEstimate: 30,
        topics: ['Stack'],
        leetCodeUrl: 'https://leetcode.com/problems/daily-temperatures',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 4,
        title: 'House Robber',
        difficulty: '',
        timeEstimate: 25,
        topics: ['Dynamic Programming'],
        leetCodeUrl: 'https://leetcode.com/problems/house-robber',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 5,
        title: 'Gas Station',
        difficulty: '',
        timeEstimate: 30,
        topics: ['Array'],
        leetCodeUrl: 'https://leetcode.com/problems/gas-station',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 6,
        title: 'Next Permutation',
        difficulty: '',
        timeEstimate: 30,
        topics: ['Recursion'],
        leetCodeUrl: 'https://leetcode.com/problems/next-permutation',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 7,
        title: 'Valid Sudoku',
        difficulty: '',
        timeEstimate: 35,
        topics: ['Matrix'],
        leetCodeUrl: 'https://leetcode.com/problems/valid-sudoku',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 8,
        title: 'Group Anagrams',
        difficulty: '',
        timeEstimate: 25,
        topics: ['String'],
        leetCodeUrl: 'https://leetcode.com/problems/group-anagrams',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 9,
        title: 'Maximum Product Subarray',
        difficulty: '',
        timeEstimate: 30,
        topics: ['Dynamic Programming'],
        leetCodeUrl: 'https://leetcode.com/problems/maximum-product-subarray',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 10,
        title: 'Design Add and Search Words Data Structure',
        difficulty: '',
        timeEstimate: 35,
        topics: ['Trie'],
        leetCodeUrl: 'https://leetcode.com/problems/design-add-and-search-words-data-structure',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 11,
        title: 'Pacific Atlantic Water Flow',
        difficulty: '',
        timeEstimate: 30,
        topics: ['Graph'],
        leetCodeUrl: 'https://leetcode.com/problems/pacific-atlantic-water-flow',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 12,
        title: 'Remove Nth Node From End of List',
        difficulty: '',
        timeEstimate: 20,
        topics: ['Linked List'],
        leetCodeUrl: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 13,
        title: 'Shortest Path to Get Food',
        difficulty: '',
        timeEstimate: 30,
        topics: ['Graph'],
        leetCodeUrl: 'https://leetcode.com/problems/shortest-path-to-get-food',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 14,
        title: 'Find the Duplicate Number',
        difficulty: '',
        timeEstimate: 20,
        topics: ['Binary'],
        leetCodeUrl: 'https://leetcode.com/problems/find-the-duplicate-number',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 15,
        title: 'Top K Frequent Words',
        difficulty: '',
        timeEstimate: 30,
        topics: ['Heap'],
        leetCodeUrl: 'https://leetcode.com/problems/top-k-frequent-words',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 16,
        title: 'Longest Increasing Subsequence',
        difficulty: '',
        timeEstimate: 30,
        topics: ['Dynamic Programming'],
        leetCodeUrl: 'https://leetcode.com/problems/longest-increasing-subsequence',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 17,
        title: 'Graph Valid Tree',
        difficulty: '',
        timeEstimate: 30,
        topics: ['Graph'],
        leetCodeUrl: 'https://leetcode.com/problems/graph-valid-tree',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 18,
        title: 'Course Schedule II',
        difficulty: '',
        timeEstimate: 35,
        topics: ['Graph'],
        leetCodeUrl: 'https://leetcode.com/problems/course-schedule-ii',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 19,
        title: 'Swap Nodes in Pairs',
        difficulty: '',
        timeEstimate: 25,
        topics: ['Linked List'],
        leetCodeUrl: 'https://leetcode.com/problems/swap-nodes-in-pairs',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 20,
        title: 'Path Sum II',
        difficulty: '',
        timeEstimate: 25,
        topics: ['Binary Tree'],
        leetCodeUrl: 'https://leetcode.com/problems/path-sum-ii',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 21,
        title: 'Longest Consecutive Sequence',
        difficulty: '',
        timeEstimate: 30,
        topics: ['Array'],
        leetCodeUrl: 'https://leetcode.com/problems/longest-consecutive-sequence',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 22,
        title: 'Rotate Array',
        difficulty: '',
        timeEstimate: 25,
        topics: ['Array'],
        leetCodeUrl: 'https://leetcode.com/problems/rotate-array',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 23,
        title: 'Odd Even Linked List',
        difficulty: '',
        timeEstimate: 25,
        topics: ['Linked List'],
        leetCodeUrl: 'https://leetcode.com/problems/odd-even-linked-list',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 24,
        title: 'Decode String',
        difficulty: '',
        timeEstimate: 30,
        topics: ['Stack'],
        leetCodeUrl: 'https://leetcode.com/problems/decode-string',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 25,
        title: 'Contiguous Array',
        difficulty: '',
        timeEstimate: 30,
        topics: ['Array'],
        leetCodeUrl: 'https://leetcode.com/problems/contiguous-array',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 26,
        title: 'Maximum Width of Binary Tree',
        difficulty: '',
        timeEstimate: 20,
        topics: ['Binary Tree'],
        leetCodeUrl: 'https://leetcode.com/problems/maximum-width-of-binary-tree',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 27,
        title: 'Find K Closest Elements',
        difficulty: '',
        timeEstimate: 30,
        topics: ['Heap'],
        leetCodeUrl: 'https://leetcode.com/problems/find-k-closest-elements',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 28,
        title: 'Longest Repeating Character Replacement',
        difficulty: '',
        timeEstimate: 30,
        topics: ['String'],
        leetCodeUrl: 'https://leetcode.com/problems/longest-repeating-character-replacement',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 29,
        title: 'Inorder Successor in BST',
        difficulty: '',
        timeEstimate: 30,
        topics: ['Binary Search Tree'],
        leetCodeUrl: 'https://leetcode.com/problems/inorder-successor-in-bst',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 30,
        title: 'Jump Game',
        difficulty: '',
        timeEstimate: 20,
        topics: ['Dynamic Programming'],
        leetCodeUrl: 'https://leetcode.com/problems/jump-game',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 31,
        title: 'Add Two Numbers',
        difficulty: '',
        timeEstimate: 25,
        topics: ['Linked List'],
        leetCodeUrl: 'https://leetcode.com/problems/add-two-numbers',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 32,
        title: 'Generate Parentheses',
        difficulty: '',
        timeEstimate: 25,
        topics: ['Recursion'],
        leetCodeUrl: 'https://leetcode.com/problems/generate-parentheses',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 33,
        title: 'Sort List',
        difficulty: '',
        timeEstimate: 25,
        topics: ['Linked List'],
        leetCodeUrl: 'https://leetcode.com/problems/sort-list',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 34,
        title: 'Number of Connected Components in an Undirected Graph',
        difficulty: '',
        timeEstimate: 30,
        topics: ['Graph'],
        leetCodeUrl: 'https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      }
    ]
  },
  {
    title: 'Week 4',
    questions: [
      {
        id: 1,
        title: 'Minimum Knight Moves',
        difficulty: '',
        timeEstimate: 35,
        topics: ['Graph'],
        leetCodeUrl: 'https://leetcode.com/problems/minimum-knight-moves',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 2,
        title: 'Subarray Sum Equals K',
        difficulty: '',
        timeEstimate: 35,
        topics: ['Array'],
        leetCodeUrl: 'https://leetcode.com/problems/subarray-sum-equals-k',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 3,
        title: 'Asteroid Collision',
        difficulty: '',
        timeEstimate: 30,
        topics: ['Stack'],
        leetCodeUrl: 'https://leetcode.com/problems/asteroid-collision',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 4,
        title: 'Random Pick with Weight',
        difficulty: '',
        timeEstimate: 25,
        topics: ['Math'],
        leetCodeUrl: 'https://leetcode.com/problems/random-pick-with-weight',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 5,
        title: 'Kth Largest Element in an Array',
        difficulty: '',
        timeEstimate: 30,
        topics: ['Heap'],
        leetCodeUrl: 'https://leetcode.com/problems/kth-largest-element-in-an-array',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 6,
        title: 'Maximal Square',
        difficulty: '',
        timeEstimate: 30,
        topics: ['Dynamic Programming'],
        leetCodeUrl: 'https://leetcode.com/problems/maximal-square',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 7,
        title: 'Rotate Image',
        difficulty: '',
        timeEstimate: 25,
        topics: ['Matrix'],
        leetCodeUrl: 'https://leetcode.com/problems/rotate-image',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 8,
        title: 'Binary Tree Zigzag Level Order Traversal',
        difficulty: '',
        timeEstimate: 25,
        topics: ['Binary Tree'],
        leetCodeUrl: 'https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 9,
        title: 'Design Hit Counter',
        difficulty: '',
        timeEstimate: 30,
        topics: ['Queue'],
        leetCodeUrl: 'https://leetcode.com/problems/design-hit-counter',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 10,
        title: 'Path Sum III',
        difficulty: '',
        timeEstimate: 35,
        topics: ['Binary Tree'],
        leetCodeUrl: 'https://leetcode.com/problems/path-sum-iii',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 11,
        title: 'Pow(x, n)',
        difficulty: '',
        timeEstimate: 20,
        topics: ['Math'],
        leetCodeUrl: 'https://leetcode.com/problems/powx-n',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 12,
        title: 'Search a 2D Matrix',
        difficulty: '',
        timeEstimate: 30,
        topics: ['Binary Search'],
        leetCodeUrl: 'https://leetcode.com/problems/search-a-2d-matrix',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 13,
        title: 'Largest Number',
        difficulty: '',
        timeEstimate: 20,
        topics: ['String'],
        leetCodeUrl: 'https://leetcode.com/problems/largest-number',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 14,
        title: 'Decode Ways',
        difficulty: '',
        timeEstimate: 25,
        topics: ['Dynamic Programming'],
        leetCodeUrl: 'https://leetcode.com/problems/decode-ways',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 15,
        title: 'Meeting Rooms II',
        difficulty: '',
        timeEstimate: 30,
        topics: ['Array'],
        leetCodeUrl: 'https://leetcode.com/problems/meeting-rooms-ii',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 16,
        title: 'Reverse Integer',
        difficulty: '',
        timeEstimate: 25,
        topics: ['Math'],
        leetCodeUrl: 'https://leetcode.com/problems/reverse-integer',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 17,
        title: 'Set Matrix Zeroes',
        difficulty: '',
        timeEstimate: 25,
        topics: ['Matrix'],
        leetCodeUrl: 'https://leetcode.com/problems/set-matrix-zeroes',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 18,
        title: 'Reorder List',
        difficulty: '',
        timeEstimate: 25,
        topics: ['Linked List'],
        leetCodeUrl: 'https://leetcode.com/problems/reorder-list',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 19,
        title: 'Encode and Decode Strings',
        difficulty: '',
        timeEstimate: 25,
        topics: ['String'],
        leetCodeUrl: 'https://leetcode.com/problems/encode-and-decode-strings',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 20,
        title: 'Cheapest Flights Within K Stops',
        difficulty: '',
        timeEstimate: 45,
        topics: ['Graph'],
        leetCodeUrl: 'https://leetcode.com/problems/cheapest-flights-within-k-stops',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 21,
        title: 'All Nodes Distance K in Binary Tree',
        difficulty: '',
        timeEstimate: 25,
        topics: ['Binary Tree'],
        leetCodeUrl: 'https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 22,
        title: '3Sum Closest',
        difficulty: '',
        timeEstimate: 30,
        topics: ['Array'],
        leetCodeUrl: 'https://leetcode.com/problems/3sum-closest',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 23,
        title: 'Rotate List',
        difficulty: '',
        timeEstimate: 25,
        topics: ['Linked List'],
        leetCodeUrl: 'https://leetcode.com/problems/rotate-list',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 24,
        title: 'Find Minimum in Rotated Sorted Array',
        difficulty: '',
        timeEstimate: 30,
        topics: ['Binary Search'],
        leetCodeUrl: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 25,
        title: 'Basic Calculator II',
        difficulty: '',
        timeEstimate: 30,
        topics: ['Stack'],
        leetCodeUrl: 'https://leetcode.com/problems/basic-calculator-ii',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 26,
        title: 'Combination Sum IV',
        difficulty: '',
        timeEstimate: 35,
        topics: ['Dynamic Programming'],
        leetCodeUrl: 'https://leetcode.com/problems/combination-sum-iv',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 27,
        title: 'Insert Delete GetRandom O(1)',
        difficulty: '',
        timeEstimate: 20,
        topics: ['Hash Table'],
        leetCodeUrl: 'https://leetcode.com/problems/insert-delete-getrandom-o1',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 28,
        title: 'Non-overlapping Intervals',
        difficulty: '',
        timeEstimate: 20,
        topics: ['Array'],
        leetCodeUrl: 'https://leetcode.com/problems/non-overlapping-intervals',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 29,
        title: 'Minimum Window Substring',
        difficulty: '',
        timeEstimate: 30,
        topics: ['String'],
        leetCodeUrl: 'https://leetcode.com/problems/minimum-window-substring',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 30,
        title: 'Serialize and Deserialize Binary Tree',
        difficulty: '',
        timeEstimate: 40,
        topics: ['Binary Tree'],
        leetCodeUrl: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 31,
        title: 'Trapping Rain Water',
        difficulty: '',
        timeEstimate: 35,
        topics: ['Stack'],
        leetCodeUrl: 'https://leetcode.com/problems/trapping-rain-water',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 32,
        title: 'Find Median from Data Stream',
        difficulty: '',
        timeEstimate: 30,
        topics: ['Heap'],
        leetCodeUrl: 'https://leetcode.com/problems/find-median-from-data-stream',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      }
    ]
  },
  {
    title: 'Week 5',
    questions: [
      {
        id: 1,
        title: 'Word Ladder',
        difficulty: '',
        timeEstimate: 45,
        topics: ['Graph'],
        leetCodeUrl: 'https://leetcode.com/problems/word-ladder',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 2,
        title: 'Basic Calculator',
        difficulty: '',
        timeEstimate: 40,
        topics: ['Stack'],
        leetCodeUrl: 'https://leetcode.com/problems/basic-calculator',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 3,
        title: 'Maximum Profit in Job Scheduling',
        difficulty: '',
        timeEstimate: 45,
        topics: ['Binary Search'],
        leetCodeUrl: 'https://leetcode.com/problems/maximum-profit-in-job-scheduling',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 4,
        title: 'Merge k Sorted Lists',
        difficulty: '',
        timeEstimate: 30,
        topics: ['Heap'],
        leetCodeUrl: 'https://leetcode.com/problems/merge-k-sorted-lists',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 5,
        title: 'Largest Rectangle in Histogram',
        difficulty: '',
        timeEstimate: 35,
        topics: ['Stack'],
        leetCodeUrl: 'https://leetcode.com/problems/largest-rectangle-in-histogram',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 6,
        title: 'Binary Tree Maximum Path Sum',
        difficulty: '',
        timeEstimate: 35,
        topics: ['Binary Tree'],
        leetCodeUrl: 'https://leetcode.com/problems/binary-tree-maximum-path-sum',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 7,
        title: 'Maximum Frequency Stack',
        difficulty: '',
        timeEstimate: 40,
        topics: ['Stack'],
        leetCodeUrl: 'https://leetcode.com/problems/maximum-frequency-stack',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 8,
        title: 'Median of Two Sorted Arrays',
        difficulty: '',
        timeEstimate: 40,
        topics: ['Binary Search'],
        leetCodeUrl: 'https://leetcode.com/problems/median-of-two-sorted-arrays',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 9,
        title: 'Longest Increasing Path in a Matrix',
        difficulty: '',
        timeEstimate: 40,
        topics: ['Graph'],
        leetCodeUrl: 'https://leetcode.com/problems/longest-increasing-path-in-a-matrix',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 10,
        title: 'Longest Valid Parentheses',
        difficulty: '',
        timeEstimate: 35,
        topics: ['Stack'],
        leetCodeUrl: 'https://leetcode.com/problems/longest-valid-parentheses',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 11,
        title: 'Design In-Memory File System',
        difficulty: '',
        timeEstimate: 40,
        topics: ['Trie'],
        leetCodeUrl: 'https://leetcode.com/problems/design-in-memory-file-system',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 12,
        title: 'Employee Free Time',
        difficulty: '',
        timeEstimate: 35,
        topics: ['Array'],
        leetCodeUrl: 'https://leetcode.com/problems/employee-free-time',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 13,
        title: 'Word Search II',
        difficulty: '',
        timeEstimate: 40,
        topics: ['Graph'],
        leetCodeUrl: 'https://leetcode.com/problems/word-search-ii',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 14,
        title: 'Alien Dictionary',
        difficulty: '',
        timeEstimate: 45,
        topics: ['Graph'],
        leetCodeUrl: 'https://leetcode.com/problems/alien-dictionary',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 15,
        title: 'Bus Routes',
        difficulty: '',
        timeEstimate: 45,
        topics: ['Graph'],
        leetCodeUrl: 'https://leetcode.com/problems/bus-routes',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 16,
        title: 'Sliding Window Maximum',
        difficulty: '',
        timeEstimate: 35,
        topics: ['Array'],
        leetCodeUrl: 'https://leetcode.com/problems/sliding-window-maximum',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 17,
        title: 'Palindrome Pairs',
        difficulty: '',
        timeEstimate: 40,
        topics: ['String'],
        leetCodeUrl: 'https://leetcode.com/problems/palindrome-pairs',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 18,
        title: 'Reverse Nodes in k-Group',
        difficulty: '',
        timeEstimate: 35,
        topics: ['Linked List'],
        leetCodeUrl: 'https://leetcode.com/problems/reverse-nodes-in-k-group',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 19,
        title: 'Sudoku Solver',
        difficulty: '',
        timeEstimate: 40,
        topics: ['Matrix'],
        leetCodeUrl: 'https://leetcode.com/problems/sudoku-solver',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 20,
        title: 'First Missing Positive',
        difficulty: '',
        timeEstimate: 35,
        topics: ['Hash Table'],
        leetCodeUrl: 'https://leetcode.com/problems/first-missing-positive',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 21,
        title: 'N-Queens',
        difficulty: '',
        timeEstimate: 40,
        topics: ['Recursion'],
        leetCodeUrl: 'https://leetcode.com/problems/n-queens',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      },
      {
        id: 22,
        title: 'Smallest Range Covering Elements from K Lists',
        difficulty: '',
        timeEstimate: 40,
        topics: ['Heap'],
        leetCodeUrl: 'https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists',
        videoUrl: 'https://youtube.com/watch?v=something',
        completed: false
      }
    ]
  }
];
