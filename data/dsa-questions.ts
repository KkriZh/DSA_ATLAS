export interface Problem {
  id: number;
  name: string;
  difficulty: "Easy" | "Medium" | "Hard";
  leetcode?: string;
  gfg?: string;
  completed?: boolean;
}

export interface Topic {
  id: string;
  name: string;
  problems: Problem[];
}

export interface Step {
  id: string;
  title: string;
  topics: Topic[];
}

export const dsaSteps: Step[] = [
  {
    id: "step1",
    title: "Learn the Basics",
    topics: [
      {
        id: "basics-1",
        name: "Things to Know in C++/Java/Python or any language",
        problems: [
          {
            id: 1,
            name: "User Input / Output",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/",
            gfg: "https://www.geeksforgeeks.org/basic-input-output-c/"
          },
          {
            id: 2,
            name: "Data Types",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/data-types-in-c/"
          },
          {
            id: 3,
            name: "If Else statements",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/decision-making-c-c-else-nested-else/"
          },
          {
            id: 4,
            name: "Switch Statement",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/switch-statement-cc/"
          },
          {
            id: 5,
            name: "What are arrays, strings",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/arrays-in-c-cpp/"
          },
          {
            id: 6,
            name: "For loops",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/loops-in-c-and-cpp/"
          },
          {
            id: 7,
            name: "While loops",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/c-c-while-loop-with-examples/"
          },
          {
            id: 8,
            name: "Functions (Pass by Reference and Value)",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/functions-in-c/"
          },
          {
            id: 9,
            name: "Time Complexity",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/understanding-time-complexity-simple-examples/"
          }
        ]
      },
      {
        id: "basics-2",
        name: "Build-up Logical Thinking",
        problems: [
          {
            id: 10,
            name: "Pattern-1: Simple Pattern",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/programs-printing-pyramid-patterns-c/"
          },
          {
            id: 11,
            name: "Pattern-2: Inverted Pattern",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/programs-printing-pyramid-patterns-c/"
          },
          {
            id: 12,
            name: "Pattern-3: Number Pattern",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/programs-printing-pyramid-patterns-c/"
          },
          {
            id: 13,
            name: "Pattern-4: Star Pattern",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/programs-printing-pyramid-patterns-c/"
          },
          {
            id: 14,
            name: "Pattern-5: Triangle Pattern",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/programs-printing-pyramid-patterns-c/"
          }
        ]
      },
      {
        id: "basics-3",
        name: "Learn STL/Collections/Built-in Libraries",
        problems: [
          {
            id: 15,
            name: "C++ STL",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/the-c-standard-template-library-stl/"
          },
          {
            id: 16,
            name: "Java Collections",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/collections-in-java-2/"
          },
          {
            id: 17,
            name: "Python Collections",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/python-collections-module/"
          }
        ]
      },
      {
        id: "basics-4",
        name: "Know Basic Maths",
        problems: [
          {
            id: 18,
            name: "Count Digits",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/number-of-digits-one/",
            gfg: "https://www.geeksforgeeks.org/program-count-digits-integer-3-different-methods/"
          },
          {
            id: 19,
            name: "Reverse a Number",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/reverse-integer/",
            gfg: "https://www.geeksforgeeks.org/write-a-program-to-reverse-digits-of-a-number/"
          },
          {
            id: 20,
            name: "Check Palindrome",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/palindrome-number/",
            gfg: "https://www.geeksforgeeks.org/check-if-a-number-is-palindrome/"
          },
          {
            id: 21,
            name: "GCD or HCF",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/greatest-common-divisor-of-strings/",
            gfg: "https://www.geeksforgeeks.org/c-program-find-gcd-hcf-two-numbers/"
          },
          {
            id: 22,
            name: "Armstrong Numbers",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/armstrong-number/",
            gfg: "https://www.geeksforgeeks.org/program-for-armstrong-numbers/"
          },
          {
            id: 23,
            name: "Print all Divisors",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/find-divisors-natural-number-set-1/"
          },
          {
            id: 24,
            name: "Check for Prime",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/count-primes/",
            gfg: "https://www.geeksforgeeks.org/primality-test-set-1-introduction-and-school-method/"
          }
        ]
      },
      {
        id: "basics-5",
        name: "Learn Basic Recursion",
        problems: [
          {
            id: 25,
            name: "Understand recursion by printing something N times",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/introduction-to-recursion-data-structure-and-algorithm-tutorials/"
          },
          {
            id: 26,
            name: "Print 1 to N using Recursion",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/print-1-to-n-without-using-loops/"
          },
          {
            id: 27,
            name: "Print N to 1 using Recursion",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/print-n-to-1-without-loop/"
          },
          {
            id: 28,
            name: "Sum of first N Numbers",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/program-find-sum-first-n-natural-numbers/"
          },
          {
            id: 29,
            name: "Factorial of N numbers",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/factorial-trailing-zeroes/",
            gfg: "https://www.geeksforgeeks.org/program-for-factorial-of-a-number/"
          },
          {
            id: 30,
            name: "Reverse an Array",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/reverse-string/",
            gfg: "https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/"
          },
          {
            id: 31,
            name: "Check if a string is palindrome or not",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/valid-palindrome/",
            gfg: "https://www.geeksforgeeks.org/c-program-check-given-string-palindrome/"
          },
          {
            id: 32,
            name: "Fibonacci Number",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/fibonacci-number/",
            gfg: "https://www.geeksforgeeks.org/program-for-nth-fibonacci-number/"
          }
        ]
      },
      {
        id: "basics-6",
        name: "Learn Basic Hashing",
        problems: [
          {
            id: 33,
            name: "Counting frequencies of array elements",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/counting-frequencies-of-array-elements/"
          },
          {
            id: 34,
            name: "Find the highest/lowest frequency element",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/frequent-element-array/"
          },
          {
            id: 35,
            name: "Hashing using Map",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/map-associative-containers-the-c-standard-template-library-stl/"
          }
        ]
      }
    ]
  },
  {
    id: "step2",
    title: "Learn Important Sorting Techniques",
    topics: [
      {
        id: "sorting-1",
        name: "Sorting-I",
        problems: [
          {
            id: 36,
            name: "Selection Sort",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/sort-an-array/",
            gfg: "https://www.geeksforgeeks.org/selection-sort/"
          },
          {
            id: 37,
            name: "Bubble Sort",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/sort-an-array/",
            gfg: "https://www.geeksforgeeks.org/bubble-sort/"
          },
          {
            id: 38,
            name: "Insertion Sort",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/insertion-sort-list/",
            gfg: "https://www.geeksforgeeks.org/insertion-sort/"
          }
        ]
      },
      {
        id: "sorting-2",
        name: "Sorting-II",
        problems: [
          {
            id: 39,
            name: "Merge Sort",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/sort-an-array/",
            gfg: "https://www.geeksforgeeks.org/merge-sort/"
          },
          {
            id: 40,
            name: "Recursive Bubble Sort",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/recursive-bubble-sort/"
          },
          {
            id: 41,
            name: "Recursive Insertion Sort",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/recursive-insertion-sort/"
          },
          {
            id: 42,
            name: "Quick Sort",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/sort-an-array/",
            gfg: "https://www.geeksforgeeks.org/quick-sort/"
          }
        ]
      }
    ]
  },
  {
    id: "step3",
    title: "Solve Problems on Arrays",
    topics: [
      {
        id: "arrays-1",
        name: "Easy",
        problems: [
          {
            id: 43,
            name: "Largest Element in an Array",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/largest-number/",
            gfg: "https://www.geeksforgeeks.org/c-program-find-largest-element-array/"
          },
          {
            id: 44,
            name: "Second Largest Element in an Array",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/find-second-largest-element-array/"
          },
          {
            id: 45,
            name: "Check if the array is sorted",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/",
            gfg: "https://www.geeksforgeeks.org/program-check-array-sorted-not-iterative-recursive/"
          },
          {
            id: 46,
            name: "Remove duplicates from Sorted array",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
            gfg: "https://www.geeksforgeeks.org/remove-duplicates-sorted-array/"
          },
          {
            id: 47,
            name: "Left Rotate an array by one place",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/rotate-array/",
            gfg: "https://www.geeksforgeeks.org/program-for-array-rotation-continued-reversal-algorithm/"
          },
          {
            id: 48,
            name: "Left rotate an array by D places",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/rotate-array/",
            gfg: "https://www.geeksforgeeks.org/array-rotation/"
          },
          {
            id: 49,
            name: "Move Zeros to end",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/move-zeroes/",
            gfg: "https://www.geeksforgeeks.org/move-zeroes-end-array/"
          },
          {
            id: 50,
            name: "Linear Search",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
            gfg: "https://www.geeksforgeeks.org/linear-search/"
          },
          {
            id: 51,
            name: "Union of Two Sorted Arrays",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/union-and-intersection-of-two-sorted-arrays-2/"
          },
          {
            id: 52,
            name: "Find the missing number in an array",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/missing-number/",
            gfg: "https://www.geeksforgeeks.org/find-the-missing-number/"
          },
          {
            id: 53,
            name: "Maximum Consecutive Ones",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/max-consecutive-ones/",
            gfg: "https://www.geeksforgeeks.org/count-maximum-consecutive-ones-binary-array/"
          },
          {
            id: 54,
            name: "Find the number that appears once",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/single-number/",
            gfg: "https://www.geeksforgeeks.org/find-element-appears-array-every-element-appears-twice/"
          },
          {
            id: 55,
            name: "Longest subarray with given sum K(Positives)",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/longest-sub-array-sum-k/"
          },
          {
            id: 56,
            name: "Longest subarray with sum K (Positives + Negatives)",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/longest-sub-array-sum-k/"
          }
        ]
      },
      {
        id: "arrays-2",
        name: "Medium",
        problems: [
          {
            id: 57,
            name: "2Sum Problem",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/two-sum/",
            gfg: "https://www.geeksforgeeks.org/given-an-array-a-and-a-number-x-check-for-pair-in-a-with-sum-as-x/"
          },
          {
            id: 58,
            name: "Sort an array of 0's 1's and 2's",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/sort-colors/",
            gfg: "https://www.geeksforgeeks.org/sort-an-array-of-0s-1s-and-2s/"
          },
          {
            id: 59,
            name: "Majority Element (>n/2 times)",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/majority-element/",
            gfg: "https://www.geeksforgeeks.org/majority-element/"
          },
          {
            id: 60,
            name: "Kadane's Algorithm, maximum subarray sum",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/maximum-subarray/",
            gfg: "https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/"
          },
          {
            id: 61,
            name: "Print subarray with maximum subarray sum",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/print-the-maximum-subarray-sum/"
          },
          {
            id: 62,
            name: "Stock Buy and Sell",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
            gfg: "https://www.geeksforgeeks.org/best-time-to-buy-and-sell-stock/"
          },
          {
            id: 63,
            name: "Rearrange the array in alternating positive and negative items",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/rearrange-array-elements-by-sign/",
            gfg: "https://www.geeksforgeeks.org/rearrange-array-alternating-positive-negative-items-o1-extra-space/"
          },
          {
            id: 64,
            name: "Next Permutation",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/next-permutation/",
            gfg: "https://www.geeksforgeeks.org/next-permutation/"
          },
          {
            id: 65,
            name: "Leaders in an Array",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/leaders-in-an-array/"
          },
          {
            id: 66,
            name: "Longest Consecutive Sequence in an Array",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/longest-consecutive-sequence/",
            gfg: "https://www.geeksforgeeks.org/longest-consecutive-subsequence/"
          },
          {
            id: 67,
            name: "Set Matrix Zeros",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/set-matrix-zeroes/",
            gfg: "https://www.geeksforgeeks.org/a-boolean-matrix-question/"
          },
          {
            id: 68,
            name: "Rotate Matrix by 90 degrees",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/rotate-image/",
            gfg: "https://www.geeksforgeeks.org/rotate-a-matrix-by-90-degree-in-clockwise-direction-without-using-any-extra-space/"
          },
          {
            id: 69,
            name: "Print the matrix in spiral manner",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/spiral-matrix/",
            gfg: "https://www.geeksforgeeks.org/print-a-given-matrix-in-spiral-form/"
          },
          {
            id: 70,
            name: "Count subarrays with given sum",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/subarray-sum-equals-k/",
            gfg: "https://www.geeksforgeeks.org/number-subarrays-sum-exactly-equal-k/"
          }
        ]
      },
      {
        id: "arrays-3",
        name: "Hard",
        problems: [
          {
            id: 71,
            name: "Pascal's Triangle",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/pascals-triangle/",
            gfg: "https://www.geeksforgeeks.org/pascal-triangle/"
          },
          {
            id: 72,
            name: "Majority Element (n/3 times)",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/majority-element-ii/",
            gfg: "https://www.geeksforgeeks.org/n3-repeated-number-array-o1-space/"
          },
          {
            id: 73,
            name: "3-sum problem",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/3sum/",
            gfg: "https://www.geeksforgeeks.org/find-a-triplet-that-sum-to-a-given-value/"
          },
          {
            id: 74,
            name: "4-sum problem",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/4sum/",
            gfg: "https://www.geeksforgeeks.org/find-four-numbers-with-sum-equal-to-given-sum/"
          },
          {
            id: 75,
            name: "Number of subarrays with xor K",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/",
            gfg: "https://www.geeksforgeeks.org/count-number-subarrays-given-xor/"
          },
          {
            id: 76,
            name: "Merge Overlapping Subintervals",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/merge-intervals/",
            gfg: "https://www.geeksforgeeks.org/merging-intervals/"
          },
          {
            id: 77,
            name: "Merge two sorted arrays without extra space",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/merge-sorted-array/",
            gfg: "https://www.geeksforgeeks.org/merge-two-sorted-arrays-o1-extra-space/"
          },
          {
            id: 78,
            name: "Find the repeating and missing number",
            difficulty: "Hard",
            gfg: "https://www.geeksforgeeks.org/find-a-repeating-and-a-missing-number/"
          },
          {
            id: 79,
            name: "Count Inversions",
            difficulty: "Hard",
            gfg: "https://www.geeksforgeeks.org/counting-inversions/"
          },
          {
            id: 80,
            name: "Reverse Pairs",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/reverse-pairs/",
            gfg: "https://www.geeksforgeeks.org/count-reverse-pairs-array/"
          },
          {
            id: 81,
            name: "Maximum Product Subarray",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/maximum-product-subarray/",
            gfg: "https://www.geeksforgeeks.org/maximum-product-subarray/"
          }
        ]
      }
    ]
  },
  {
    id: "step4",
    title: "Binary Search [1D, 2D Arrays, Search Space]",
    topics: [
      {
        id: "binarysearch-1",
        name: "BS on 1D Arrays",
        problems: [
          {
            id: 82,
            name: "Binary Search",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/binary-search/",
            gfg: "https://www.geeksforgeeks.org/binary-search/"
          },
          {
            id: 83,
            name: "Implement Lower Bound",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
            gfg: "https://www.geeksforgeeks.org/lower_bound-in-cpp/"
          },
          {
            id: 84,
            name: "Implement Upper Bound",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/upper_bound-in-cpp/"
          },
          {
            id: 85,
            name: "Search Insert Position",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/search-insert-position/",
            gfg: "https://www.geeksforgeeks.org/search-insert-position-of-k-in-a-sorted-array/"
          },
          {
            id: 86,
            name: "Floor/Ceil in Sorted Array",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/floor-in-a-sorted-array/"
          },
          {
            id: 87,
            name: "Find First and Last Position of Element",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
            gfg: "https://www.geeksforgeeks.org/find-first-and-last-positions-of-an-element-in-a-sorted-array/"
          },
          {
            id: 88,
            name: "Count Occurrences in Sorted Array",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/count-number-of-occurrences-or-frequency-in-a-sorted-array/"
          },
          {
            id: 89,
            name: "Search in Rotated Sorted Array I",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
            gfg: "https://www.geeksforgeeks.org/search-an-element-in-a-sorted-and-pivoted-array/"
          },
          {
            id: 90,
            name: "Search in Rotated Sorted Array II",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/",
            gfg: "https://www.geeksforgeeks.org/search-an-element-in-a-sorted-and-rotated-array-with-duplicates/"
          },
          {
            id: 91,
            name: "Find Minimum in Rotated Sorted Array",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
            gfg: "https://www.geeksforgeeks.org/find-minimum-element-in-a-sorted-and-rotated-array/"
          },
          {
            id: 92,
            name: "Find out how many times array has been rotated",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/find-rotation-count-rotated-sorted-array/"
          },
          {
            id: 93,
            name: "Single Element in Sorted Array",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/single-element-in-a-sorted-array/",
            gfg: "https://www.geeksforgeeks.org/find-the-element-that-appears-once-in-a-sorted-array/"
          },
          {
            id: 94,
            name: "Find Peak Element",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/find-peak-element/",
            gfg: "https://www.geeksforgeeks.org/find-a-peak-in-a-given-array/"
          }
        ]
      },
      {
        id: "binarysearch-2",
        name: "BS on Answers",
        problems: [
          {
            id: 95,
            name: "Finding Sqrt of a number using Binary Search",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/sqrtx/",
            gfg: "https://www.geeksforgeeks.org/square-root-of-an-integer/"
          },
          {
            id: 96,
            name: "Find the Nth root of a number using Binary Search",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/n-th-root-number/"
          },
          {
            id: 97,
            name: "Koko Eating Bananas",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/koko-eating-bananas/",
            gfg: "https://www.geeksforgeeks.org/koko-eating-bananas/"
          },
          {
            id: 98,
            name: "Minimum days to make M bouquets",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/",
            gfg: "https://www.geeksforgeeks.org/minimum-days-to-make-m-bouquets/"
          },
          {
            id: 99,
            name: "Find the smallest Divisor",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/",
            gfg: "https://www.geeksforgeeks.org/find-smallest-divisor-given-threshold/"
          },
          {
            id: 100,
            name: "Capacity to Ship Packages within D Days",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/",
            gfg: "https://www.geeksforgeeks.org/capacity-to-ship-packages-within-d-days/"
          },
          {
            id: 101,
            name: "Kth Missing Positive Number",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/kth-missing-positive-number/",
            gfg: "https://www.geeksforgeeks.org/kth-missing-element-increasing-sequence-not-present-given-sequence/"
          },
          {
            id: 102,
            name: "Aggressive Cows",
            difficulty: "Hard",
            gfg: "https://www.geeksforgeeks.org/aggressive-cows-problem-binary-search/"
          },
          {
            id: 103,
            name: "Allocate Books",
            difficulty: "Hard",
            gfg: "https://www.geeksforgeeks.org/allocate-minimum-number-pages/"
          },
          {
            id: 104,
            name: "Split Array - Largest Sum",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/split-array-largest-sum/",
            gfg: "https://www.geeksforgeeks.org/split-array-largest-sum/"
          },
          {
            id: 105,
            name: "Painter's Partition",
            difficulty: "Hard",
            gfg: "https://www.geeksforgeeks.org/painters-partition-problem/"
          },
          {
            id: 106,
            name: "Minimize Max Distance to Gas Station",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/minimize-max-distance-to-gas-station/",
            gfg: "https://www.geeksforgeeks.org/minimize-max-distance-gas-station/"
          },
          {
            id: 107,
            name: "Median of 2 sorted arrays",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
            gfg: "https://www.geeksforgeeks.org/median-of-two-sorted-arrays-of-different-sizes/"
          },
          {
            id: 108,
            name: "Kth element of 2 sorted arrays",
            difficulty: "Hard",
            gfg: "https://www.geeksforgeeks.org/k-th-element-two-sorted-arrays/"
          }
        ]
      },
      {
        id: "binarysearch-3",
        name: "BS on 2D Arrays",
        problems: [
          {
            id: 109,
            name: "Find the row with maximum number of 1's",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/find-row-number-binary-matrix-maximum-number-1s/"
          },
          {
            id: 110,
            name: "Search in a 2D Matrix",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/search-a-2d-matrix/",
            gfg: "https://www.geeksforgeeks.org/search-in-row-wise-and-column-wise-sorted-matrix/"
          },
          {
            id: 111,
            name: "Search in a row and column wise sorted matrix",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/search-a-2d-matrix-ii/",
            gfg: "https://www.geeksforgeeks.org/search-in-row-wise-and-column-wise-sorted-matrix/"
          },
          {
            id: 112,
            name: "Find Peak Element (2D Matrix)",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/find-a-peak-element-ii/",
            gfg: "https://www.geeksforgeeks.org/find-peak-element-2d-array/"
          },
          {
            id: 113,
            name: "Matrix Median",
            difficulty: "Hard",
            gfg: "https://www.geeksforgeeks.org/find-median-row-wise-sorted-matrix/"
          }
        ]
      }
    ]
  },
  {
    id: "step5",
    title: "Strings [Basic and Medium]",
    topics: [
      {
        id: "strings-1",
        name: "Basic and Easy String Problems",
        problems: [
          {
            id: 114,
            name: "Remove outermost Paranthesis",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/remove-outermost-parentheses/",
            gfg: "https://www.geeksforgeeks.org/remove-outermost-parentheses/"
          },
          {
            id: 115,
            name: "Reverse words in a string",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/reverse-words-in-a-string/",
            gfg: "https://www.geeksforgeeks.org/reverse-words-in-a-given-string/"
          },
          {
            id: 116,
            name: "Largest odd number in a string",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/largest-odd-number-in-string/",
            gfg: "https://www.geeksforgeeks.org/largest-odd-number-string/"
          },
          {
            id: 117,
            name: "Longest Common Prefix",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/longest-common-prefix/",
            gfg: "https://www.geeksforgeeks.org/longest-common-prefix-using-sorting/"
          },
          {
            id: 118,
            name: "Isomorphic String",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/isomorphic-strings/",
            gfg: "https://www.geeksforgeeks.org/check-if-two-given-strings-are-isomorphic-to-each-other/"
          },
          {
            id: 119,
            name: "Check whether one string is a rotation of another",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/rotate-string/",
            gfg: "https://www.geeksforgeeks.org/a-program-to-check-if-strings-are-rotations-of-each-other/"
          },
          {
            id: 120,
            name: "Check if two strings are anagram of each other",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/valid-anagram/",
            gfg: "https://www.geeksforgeeks.org/check-whether-two-strings-are-anagram-of-each-other/"
          }
        ]
      },
      {
        id: "strings-2",
        name: "Medium String Problems",
        problems: [
          {
            id: 121,
            name: "Sort Characters by frequency",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/sort-characters-by-frequency/",
            gfg: "https://www.geeksforgeeks.org/sort-string-characters-frequency/"
          },
          {
            id: 122,
            name: "Maximum Nesting Depth of Paranthesis",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/",
            gfg: "https://www.geeksforgeeks.org/find-maximum-depth-nested-parenthesis-string/"
          },
          {
            id: 123,
            name: "Roman Number to Integer",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/roman-to-integer/",
            gfg: "https://www.geeksforgeeks.org/converting-roman-numerals-decimal-lying-1-3999/"
          },
          {
            id: 124,
            name: "Integer to Roman",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/integer-to-roman/",
            gfg: "https://www.geeksforgeeks.org/converting-decimal-number-lying-between-1-to-3999-to-roman-numerals/"
          },
          {
            id: 125,
            name: "Implement Atoi",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/string-to-integer-atoi/",
            gfg: "https://www.geeksforgeeks.org/write-your-own-atoi/"
          },
          {
            id: 126,
            name: "Count Number of Substrings",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/count-number-of-substrings-with-exactly-k-distinct-characters/"
          },
          {
            id: 127,
            name: "Longest Palindromic Substring",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/longest-palindromic-substring/",
            gfg: "https://www.geeksforgeeks.org/longest-palindrome-substring-set-1/"
          },
          {
            id: 128,
            name: "Sum of Beauty of all substring",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/sum-of-beauty-of-all-substrings/",
            gfg: "https://www.geeksforgeeks.org/sum-of-beauty-of-all-substrings/"
          },
          {
            id: 129,
            name: "Reverse Every Word in A String",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/reverse-individual-words/"
          }
        ]
      }
    ]
  },
  {
    id: "step6",
    title: "Learn LinkedList [Single LL, Double LL, Medium, Hard Problems]",
    topics: [
      {
        id: "ll-1",
        name: "Learn 1D LinkedList",
        problems: [
          {
            id: 130,
            name: "Introduction to LinkedList",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/data-structures/linked-list/"
          },
          {
            id: 131,
            name: "Inserting a node in LinkedList",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/linked-list-set-2-inserting-a-node/"
          },
          {
            id: 132,
            name: "Deleting a node in LinkedList",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/delete-node-in-a-linked-list/",
            gfg: "https://www.geeksforgeeks.org/linked-list-set-3-deleting-node/"
          },
          {
            id: 133,
            name: "Find the length of the linkedlist",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/find-length-of-a-linked-list-iterative-and-recursive/"
          },
          {
            id: 134,
            name: "Search an element in the LinkedList",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/search-an-element-in-a-linked-list-iterative-and-recursive/"
          }
        ]
      },
      {
        id: "ll-2",
        name: "Learn Doubly LinkedList",
        problems: [
          {
            id: 135,
            name: "Introduction to Doubly LinkedList",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/doubly-linked-list/"
          },
          {
            id: 136,
            name: "Insert a node in Doubly LinkedList",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/doubly-linked-list-set-1-introduction-and-insertion/"
          },
          {
            id: 137,
            name: "Delete a node in Doubly LinkedList",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/delete-a-node-in-a-doubly-linked-list/"
          },
          {
            id: 138,
            name: "Reverse a Doubly LinkedList",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/reverse-linked-list/",
            gfg: "https://www.geeksforgeeks.org/reverse-a-doubly-linked-list/"
          }
        ]
      },
      {
        id: "ll-3",
        name: "Medium Problems of LL",
        problems: [
          {
            id: 139,
            name: "Middle of LinkedList",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/middle-of-the-linked-list/",
            gfg: "https://www.geeksforgeeks.org/write-a-c-function-to-print-the-middle-of-the-linked-list/"
          },
          {
            id: 140,
            name: "Reverse a LinkedList",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/reverse-linked-list/",
            gfg: "https://www.geeksforgeeks.org/reverse-a-linked-list/"
          },
          {
            id: 141,
            name: "Detect a loop in LinkedList",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/linked-list-cycle/",
            gfg: "https://www.geeksforgeeks.org/detect-loop-in-a-linked-list/"
          },
          {
            id: 142,
            name: "Find the starting point in LL",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/linked-list-cycle-ii/",
            gfg: "https://www.geeksforgeeks.org/find-first-node-of-loop-in-a-linked-list/"
          },
          {
            id: 143,
            name: "Length of Loop in LL",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/find-length-of-loop-in-linked-list/"
          },
          {
            id: 144,
            name: "Check if LL is palindrome or not",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/palindrome-linked-list/",
            gfg: "https://www.geeksforgeeks.org/function-to-check-if-a-singly-linked-list-is-palindrome/"
          },
          {
            id: 145,
            name: "Segregate odd and even nodes in LL",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/odd-even-linked-list/",
            gfg: "https://www.geeksforgeeks.org/segregate-even-and-odd-elements-in-a-linked-list/"
          },
          {
            id: 146,
            name: "Remove Nth node from the back of the LL",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
            gfg: "https://www.geeksforgeeks.org/remove-nth-node-from-end-of-the-linked-list/"
          },
          {
            id: 147,
            name: "Delete the middle node of LL",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/",
            gfg: "https://www.geeksforgeeks.org/delete-middle-of-linked-list/"
          },
          {
            id: 148,
            name: "Sort List",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/sort-list/",
            gfg: "https://www.geeksforgeeks.org/merge-sort-for-linked-list/"
          },
          {
            id: 149,
            name: "Sort a LL of 0's, 1's and 2's",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/sort-a-linked-list-of-0s-1s-or-2s/"
          },
          {
            id: 150,
            name: "Find intersection of Two Linked Lists",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/intersection-of-two-linked-lists/",
            gfg: "https://www.geeksforgeeks.org/write-a-function-to-get-the-intersection-point-of-two-linked-lists/"
          },
          {
            id: 151,
            name: "Add 1 to a number represented by LL",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/add-1-number-represented-linked-list/"
          },
          {
            id: 152,
            name: "Add two numbers in LinkedList",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/add-two-numbers/",
            gfg: "https://www.geeksforgeeks.org/add-two-numbers-represented-by-linked-lists/"
          }
        ]
      },
      {
        id: "ll-4",
        name: "Medium Problems of DLL",
        problems: [
          {
            id: 153,
            name: "Delete all occurrences of a key in DLL",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/delete-occurrences-given-key-doubly-linked-list/"
          },
          {
            id: 154,
            name: "Find pairs with given sum in DLL",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/find-pairs-given-sum-doubly-linked-list/"
          },
          {
            id: 155,
            name: "Remove duplicates from sorted DLL",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/remove-duplicates-sorted-doubly-linked-list/"
          }
        ]
      },
      {
        id: "ll-5",
        name: "Hard Problems of LL",
        problems: [
          {
            id: 156,
            name: "Reverse LL in groups of size k",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/reverse-nodes-in-k-group/",
            gfg: "https://www.geeksforgeeks.org/reverse-a-list-in-groups-of-given-size/"
          },
          {
            id: 157,
            name: "Rotate a LinkedList",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/rotate-list/",
            gfg: "https://www.geeksforgeeks.org/rotate-a-linked-list/"
          },
          {
            id: 158,
            name: "Flattening a LinkedList",
            difficulty: "Hard",
            gfg: "https://www.geeksforgeeks.org/flattening-a-linked-list/"
          },
          {
            id: 159,
            name: "Clone a LinkedList with random and next pointer",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/copy-list-with-random-pointer/",
            gfg: "https://www.geeksforgeeks.org/clone-linked-list-next-random-pointer-o1-space/"
          }
        ]
      }
    ]
  },
  {
    id: "step7",
    title: "Recursion [PatternWise]",
    topics: [
      {
        id: "recursion-1",
        name: "Get a Strong Hold",
        problems: [
          {
            id: 160,
            name: "Recursive Implementation of atoi()",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/recursive-implementation-of-atoi/"
          },
          {
            id: 161,
            name: "Pow(x, n)",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/powx-n/",
            gfg: "https://www.geeksforgeeks.org/write-a-c-program-to-calculate-powxn/"
          },
          {
            id: 162,
            name: "Count Good numbers",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/count-good-numbers/",
            gfg: "https://www.geeksforgeeks.org/count-of-n-digit-numbers-having-all-distinct-digits/"
          },
          {
            id: 163,
            name: "Sort a stack using recursion",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/sort-a-stack-using-recursion/"
          },
          {
            id: 164,
            name: "Reverse a stack using recursion",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/reverse-a-stack-using-recursion/"
          }
        ]
      },
      {
        id: "recursion-2",
        name: "Subsequences Pattern",
        problems: [
          {
            id: 165,
            name: "Generate all binary strings",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/generate-binary-strings-without-consecutive-1s/"
          },
          {
            id: 166,
            name: "Generate Paranthesis",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/generate-parentheses/",
            gfg: "https://www.geeksforgeeks.org/print-all-combinations-of-balanced-parentheses/"
          },
          {
            id: 167,
            name: "Print all subsequences/Power Set",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/subsets/",
            gfg: "https://www.geeksforgeeks.org/power-set/"
          },
          {
            id: 168,
            name: "Learn All Patterns of Subsequences",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/generating-all-possible-subsequences-using-recursion/"
          },
          {
            id: 169,
            name: "Count all subsequences with sum K",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/count-of-subsets-with-sum-equal-to-x/"
          },
          {
            id: 170,
            name: "Check if there exists a subsequence with sum K",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/subset-sum-problem-dp-25/"
          },
          {
            id: 171,
            name: "Combination Sum",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/combination-sum/",
            gfg: "https://www.geeksforgeeks.org/combinational-sum/"
          },
          {
            id: 172,
            name: "Combination Sum-II",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/combination-sum-ii/",
            gfg: "https://www.geeksforgeeks.org/combinational-sum/"
          },
          {
            id: 173,
            name: "Subset Sum-I",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/subsets/",
            gfg: "https://www.geeksforgeeks.org/backtracking-to-find-all-subsets/"
          },
          {
            id: 174,
            name: "Subset Sum-II",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/subsets-ii/",
            gfg: "https://www.geeksforgeeks.org/finding-all-subsets-of-a-given-set-in-java/"
          },
          {
            id: 175,
            name: "Combination Sum - III",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/combination-sum-iii/",
            gfg: "https://www.geeksforgeeks.org/combinational-sum/"
          },
          {
            id: 176,
            name: "Letter Combinations of a Phone number",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
            gfg: "https://www.geeksforgeeks.org/find-possible-words-phone-digits/"
          }
        ]
      },
      {
        id: "recursion-3",
        name: "Hard Problems",
        problems: [
          {
            id: 177,
            name: "Palindrome Partitioning",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/palindrome-partitioning/",
            gfg: "https://www.geeksforgeeks.org/palindrome-partitioning-dp-17/"
          },
          {
            id: 178,
            name: "Word Search",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/word-search/",
            gfg: "https://www.geeksforgeeks.org/search-a-word-in-a-2d-grid-of-characters/"
          },
          {
            id: 179,
            name: "N Queen",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/n-queens/",
            gfg: "https://www.geeksforgeeks.org/n-queen-problem-backtracking-3/"
          },
          {
            id: 180,
            name: "Rat in a Maze",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/rat-in-a-maze-backtracking-2/"
          },
          {
            id: 181,
            name: "Word Break",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/word-break/",
            gfg: "https://www.geeksforgeeks.org/word-break-problem-dp-32/"
          },
          {
            id: 182,
            name: "M Coloring Problem",
            difficulty: "Hard",
            gfg: "https://www.geeksforgeeks.org/m-coloring-problem-backtracking-5/"
          },
          {
            id: 183,
            name: "Sudoku Solver",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/sudoku-solver/",
            gfg: "https://www.geeksforgeeks.org/sudoku-backtracking-7/"
          },
          {
            id: 184,
            name: "Expression Add Operators",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/expression-add-operators/",
            gfg: "https://www.geeksforgeeks.org/generate-all-possible-expressions-by-adding-operators/"
          }
        ]
      }
    ]
  },
  {
    id: "step8",
    title: "Bit Manipulation [Concepts and Problems]",
    topics: [
      {
        id: "bit-1",
        name: "Learn Bit Manipulation",
        problems: [
          {
            id: 185,
            name: "Introduction to Bit Manipulation",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/bits-manipulation-important-tactics/"
          },
          {
            id: 186,
            name: "Check if the i-th bit is set or not",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/check-whether-k-th-bit-set-not/"
          },
          {
            id: 187,
            name: "Check if a number is odd or not",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/check-if-a-number-is-odd-or-even-using-bitwise-operators/"
          },
          {
            id: 188,
            name: "Check if a number is power of 2 or not",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/power-of-two/",
            gfg: "https://www.geeksforgeeks.org/program-to-find-whether-a-no-is-power-of-two/"
          },
          {
            id: 189,
            name: "Count the number of set bits",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/number-of-1-bits/",
            gfg: "https://www.geeksforgeeks.org/count-set-bits-in-an-integer/"
          },
          {
            id: 190,
            name: "Set/Unset the rightmost unset bit",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/set-rightmost-unset-bit/"
          },
          {
            id: 191,
            name: "Swap two numbers",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/swap-two-numbers-without-using-temporary-variable/"
          },
          {
            id: 192,
            name: "Divide two integers without using multiplication, division and mod operator",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/divide-two-integers/",
            gfg: "https://www.geeksforgeeks.org/divide-two-integers-without-using-multiplication-division-mod-operator/"
          }
        ]
      },
      {
        id: "bit-2",
        name: "Interview Problems",
        problems: [
          {
            id: 193,
            name: "Count number of bits to be flipped to convert A to B",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/count-number-of-bits-to-be-flipped-to-convert-a-to-b/"
          },
          {
            id: 194,
            name: "Find the number that appears odd number of times",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/find-the-number-occurring-odd-number-of-times/"
          },
          {
            id: 195,
            name: "Power Set",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/subsets/",
            gfg: "https://www.geeksforgeeks.org/power-set/"
          },
          {
            id: 196,
            name: "Find xor of numbers from L to R",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/calculate-xor-1-n/"
          },
          {
            id: 197,
            name: "Find the two numbers appearing odd number of times",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/find-two-odd-occurring-elements-in-an-array/"
          }
        ]
      },
      {
        id: "bit-3",
        name: "Advanced Maths",
        problems: [
          {
            id: 198,
            name: "Print Prime Factors of a Number",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/print-all-prime-factors-of-a-given-number/"
          },
          {
            id: 199,
            name: "All Divisors of a Number",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/find-divisors-natural-number-set-1/"
          },
          {
            id: 200,
            name: "Sieve of Eratosthenes",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/count-primes/",
            gfg: "https://www.geeksforgeeks.org/sieve-of-eratosthenes/"
          },
          {
            id: 201,
            name: "Find Prime Factorization using Sieve",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/prime-factorization-using-sieve-olog-n-multiple-queries/"
          },
          {
            id: 202,
            name: "Power(n, x)",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/powx-n/",
            gfg: "https://www.geeksforgeeks.org/write-a-c-program-to-calculate-powxn/"
          }
        ]
      }
    ]
  },
  {
    id: "step9",
    title: "Stack and Queues [Learning, Pre-In-Post-fix, Monotonic Stack]",
    topics: [
      {
        id: "stack-1",
        name: "Learning",
        problems: [
          {
            id: 203,
            name: "Implement Stack using Arrays",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/stack-data-structure-introduction-program/"
          },
          {
            id: 204,
            name: "Implement Queue using Arrays",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/queue-set-1introduction-and-array-implementation/"
          },
          {
            id: 205,
            name: "Implement Stack using Queue",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/implement-stack-using-queues/",
            gfg: "https://www.geeksforgeeks.org/implement-stack-using-queue/"
          },
          {
            id: 206,
            name: "Implement Queue using Stack",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/implement-queue-using-stacks/",
            gfg: "https://www.geeksforgeeks.org/queue-using-stacks/"
          },
          {
            id: 207,
            name: "Check for balanced paranthesis",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/valid-parentheses/",
            gfg: "https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/"
          },
          {
            id: 208,
            name: "Implement Min Stack",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/min-stack/",
            gfg: "https://www.geeksforgeeks.org/design-a-stack-that-supports-getmin-in-o1-time-and-o1-extra-space/"
          }
        ]
      },
      {
        id: "stack-2",
        name: "Prefix, Infix, Postfix Conversion Problems",
        problems: [
          {
            id: 209,
            name: "Infix to Postfix Conversion",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/stack-set-2-infix-to-postfix/"
          },
          {
            id: 210,
            name: "Prefix to Infix Conversion",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/prefix-infix-conversion/"
          },
          {
            id: 211,
            name: "Prefix to Postfix Conversion",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/prefix-postfix-conversion/"
          },
          {
            id: 212,
            name: "Postfix to Prefix Conversion",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/postfix-prefix-conversion/"
          },
          {
            id: 213,
            name: "Postfix to Infix Conversion",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/postfix-to-infix/"
          },
          {
            id: 214,
            name: "Infix to Prefix Conversion",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/convert-infix-prefix-expression/"
          }
        ]
      },
      {
        id: "stack-3",
        name: "Monotonic Stack/Queue Problems",
        problems: [
          {
            id: 215,
            name: "Next Greater Element",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/next-greater-element-i/",
            gfg: "https://www.geeksforgeeks.org/next-greater-element/"
          },
          {
            id: 216,
            name: "Next Greater Element II",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/next-greater-element-ii/",
            gfg: "https://www.geeksforgeeks.org/next-greater-element-in-same-order-as-input/"
          },
          {
            id: 217,
            name: "Next Smaller Element",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/next-smaller-element/"
          },
          {
            id: 218,
            name: "Number of NGEs to the right",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/number-nges-right/"
          },
          {
            id: 219,
            name: "Trapping Rainwater",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/trapping-rain-water/",
            gfg: "https://www.geeksforgeeks.org/trapping-rain-water/"
          },
          {
            id: 220,
            name: "Sum of subarray minimum",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/sum-of-subarray-minimums/",
            gfg: "https://www.geeksforgeeks.org/sum-of-minimum-elements-of-all-subarrays/"
          },
          {
            id: 221,
            name: "Stock span problem",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/online-stock-span/",
            gfg: "https://www.geeksforgeeks.org/the-stock-span-problem/"
          },
          {
            id: 222,
            name: "Asteroid Collision",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/asteroid-collision/",
            gfg: "https://www.geeksforgeeks.org/asteroid-collision/"
          },
          {
            id: 223,
            name: "Sum of subarray ranges",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/sum-of-subarray-ranges/",
            gfg: "https://www.geeksforgeeks.org/sum-of-all-subarray-ranges/"
          },
          {
            id: 224,
            name: "Remove k digits",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/remove-k-digits/",
            gfg: "https://www.geeksforgeeks.org/build-lowest-number-removing-n-digits-given-number/"
          },
          {
            id: 225,
            name: "Largest rectangle in a histogram",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
            gfg: "https://www.geeksforgeeks.org/largest-rectangle-under-histogram/"
          },
          {
            id: 226,
            name: "Maximal Rectangles",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/maximal-rectangle/",
            gfg: "https://www.geeksforgeeks.org/maximum-size-rectangle-binary-sub-matrix-1s/"
          }
        ]
      },
      {
        id: "stack-4",
        name: "Implementation Problems",
        problems: [
          {
            id: 227,
            name: "Sliding Window maximum",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/sliding-window-maximum/",
            gfg: "https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/"
          },
          {
            id: 228,
            name: "LRU cache",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/lru-cache/",
            gfg: "https://www.geeksforgeeks.org/lru-cache-implementation/"
          },
          {
            id: 229,
            name: "LFU cache",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/lfu-cache/",
            gfg: "https://www.geeksforgeeks.org/least-frequently-used-lfu-cache-implementation/"
          }
        ]
      }
    ]
  },
  {
    id: "step10",
    title: "Sliding Window & Two Pointer Combined Problems",
    topics: [
      {
        id: "sliding-1",
        name: "Medium Problems",
        problems: [
          {
            id: 230,
            name: "Longest Substring Without Repeating Characters",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
            gfg: "https://www.geeksforgeeks.org/length-of-the-longest-substring-without-repeating-characters/"
          },
          {
            id: 231,
            name: "Max Consecutive Ones III",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/max-consecutive-ones-iii/",
            gfg: "https://www.geeksforgeeks.org/maximize-consecutive-1s-flipping-k-0s/"
          },
          {
            id: 232,
            name: "Fruit Into Baskets",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/fruit-into-baskets/",
            gfg: "https://www.geeksforgeeks.org/longest-subarray-sum-elements-atmost-k/"
          },
          {
            id: 233,
            name: "longest repeating character replacement",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/longest-repeating-character-replacement/",
            gfg: "https://www.geeksforgeeks.org/longest-substring-with-at-most-k-distinct-characters/"
          },
          {
            id: 234,
            name: "Binary subarray with sum",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/binary-subarrays-with-sum/",
            gfg: "https://www.geeksforgeeks.org/count-of-subarrays-with-sum-equal-to-x/"
          },
          {
            id: 235,
            name: "Count number of nice subarrays",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/count-number-of-nice-subarrays/",
            gfg: "https://www.geeksforgeeks.org/count-subarrays-with-k-odd-elements/"
          },
          {
            id: 236,
            name: "Number of substring containing all three characters",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/",
            gfg: "https://www.geeksforgeeks.org/count-of-substrings-containing-all-vowels/"
          },
          {
            id: 237,
            name: "Maximum point you can obtain from cards",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/",
            gfg: "https://www.geeksforgeeks.org/maximize-sum-of-k-elements-selected-from-a-circular-array/"
          }
        ]
      },
      {
        id: "sliding-2",
        name: "Hard Problems",
        problems: [
          {
            id: 238,
            name: "Longest Substring with At Most K Distinct Characters",
            difficulty: "Hard",
            gfg: "https://www.geeksforgeeks.org/longest-substring-with-at-most-k-distinct-characters/"
          },
          {
            id: 239,
            name: "Subarray with k different integers",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/subarrays-with-k-different-integers/",
            gfg: "https://www.geeksforgeeks.org/count-of-subarrays-having-exactly-k-distinct-elements/"
          },
          {
            id: 240,
            name: "Minimum Window Substring",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/minimum-window-substring/",
            gfg: "https://www.geeksforgeeks.org/find-the-smallest-window-in-a-string-containing-all-characters-of-another-string/"
          },
          {
            id: 241,
            name: "Minimum Window Subsequence",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/minimum-window-subsequence/",
            gfg: "https://www.geeksforgeeks.org/minimum-window-subsequence/"
          }
        ]
      }
    ]
  },
  {
    id: "step11",
    title: "Heaps [Learning, Medium, Hard Problems]",
    topics: [
      {
        id: "heap-1",
        name: "Learning",
        problems: [
          {
            id: 242,
            name: "Introduction to Priority Queues using Binary Heaps",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/priority-queue-set-1-introduction/"
          },
          {
            id: 243,
            name: "Min Heap and Max Heap Implementation",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/binary-heap/"
          },
          {
            id: 244,
            name: "Check if an array represents a heap",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/how-to-check-if-a-given-array-represents-a-binary-heap/"
          },
          {
            id: 245,
            name: "Convert min heap to max heap",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/convert-min-heap-to-max-heap/"
          }
        ]
      },
      {
        id: "heap-2",
        name: "Medium Problems",
        problems: [
          {
            id: 246,
            name: "Kth Largest Element in an Array",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
            gfg: "https://www.geeksforgeeks.org/kth-smallestlargest-element-unsorted-array/"
          },
          {
            id: 247,
            name: "Kth Smallest Element in an Array",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/kth-smallestlargest-element-unsorted-array/"
          },
          {
            id: 248,
            name: "Sort K sorted array",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/nearly-sorted-algorithm/"
          },
          {
            id: 249,
            name: "Merge K Sorted Arrays",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/merge-k-sorted-arrays/"
          },
          {
            id: 250,
            name: "Replace each element by its rank in the array",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/replace-elements-by-its-rank-in-the-array/"
          },
          {
            id: 251,
            name: "Task Scheduler",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/task-scheduler/",
            gfg: "https://www.geeksforgeeks.org/task-scheduling-problem/"
          },
          {
            id: 252,
            name: "Hands of Straights",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/hand-of-straights/",
            gfg: "https://www.geeksforgeeks.org/check-if-it-is-possible-to-make-groups-of-given-size-with-consecutive-elements/"
          }
        ]
      },
      {
        id: "heap-3",
        name: "Hard Problems",
        problems: [
          {
            id: 253,
            name: "Design Twitter",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/design-twitter/",
            gfg: "https://www.geeksforgeeks.org/design-a-data-structure-for-a-feed-system/"
          },
          {
            id: 254,
            name: "Connect n ropes with minimum cost",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/connect-n-ropes-minimum-cost/"
          },
          {
            id: 255,
            name: "Kth Largest Element in a Stream",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/kth-largest-element-in-a-stream/",
            gfg: "https://www.geeksforgeeks.org/kth-largest-element-in-a-stream/"
          },
          {
            id: 256,
            name: "Maximum Sum Combination",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/k-maximum-sum-combinations-two-arrays/"
          },
          {
            id: 257,
            name: "Find Median from Data Stream",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/find-median-from-data-stream/",
            gfg: "https://www.geeksforgeeks.org/median-of-stream-of-integers-running-integers/"
          }
        ]
      }
    ]
  },
  {
    id: "step12",
    title: "Greedy Algorithms [Easy, Medium/Hard Problems]",
    topics: [
      {
        id: "greedy-1",
        name: "Easy Problems",
        problems: [
          {
            id: 258,
            name: "Assign Cookies",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/assign-cookies/",
            gfg: "https://www.geeksforgeeks.org/assign-cookies-problem/"
          },
          {
            id: 259,
            name: "Lemonade Change",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/lemonade-change/",
            gfg: "https://www.geeksforgeeks.org/lemonade-change-problem/"
          },
          {
            id: 260,
            name: "Valid Parenthesis Checker",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/valid-parenthesis-string/",
            gfg: "https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/"
          },
          {
            id: 261,
            name: "Fractional Knapsack",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/fractional-knapsack-problem/"
          },
          {
            id: 262,
            name: "Find minimum number of coins",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/find-minimum-number-of-coins-that-make-a-change/"
          }
        ]
      },
      {
        id: "greedy-2",
        name: "Medium/Hard Problems",
        problems: [
          {
            id: 263,
            name: "N meetings in one room",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/find-maximum-meetings-in-one-room/"
          },
          {
            id: 264,
            name: "Jump Game",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/jump-game/",
            gfg: "https://www.geeksforgeeks.org/minimum-number-of-jumps-to-reach-end-of-a-given-array/"
          },
          {
            id: 265,
            name: "Jump Game II",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/jump-game-ii/",
            gfg: "https://www.geeksforgeeks.org/minimum-number-of-jumps-to-reach-end-of-a-given-array/"
          },
          {
            id: 266,
            name: "Minimum Platforms",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/minimum-number-platforms-required-railwaybus-station/"
          },
          {
            id: 267,
            name: "Job Sequencing Problem",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/job-sequencing-problem/"
          },
          {
            id: 268,
            name: "Candy",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/candy/",
            gfg: "https://www.geeksforgeeks.org/minimum-increment-decrement-to-make-array-non-increasing/"
          },
          {
            id: 269,
            name: "Program for Shortest Job First scheduling",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/program-for-shortest-job-first-or-sjf-cpu-scheduling/"
          },
          {
            id: 270,
            name: "Page Faults in LRU",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/program-page-replacement-algorithms-set-1-lru/"
          },
          {
            id: 271,
            name: "Insert Interval",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/insert-interval/",
            gfg: "https://www.geeksforgeeks.org/insert-in-sorted-and-non-overlapping-interval-array/"
          },
          {
            id: 272,
            name: "Merge Intervals",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/merge-intervals/",
            gfg: "https://www.geeksforgeeks.org/merging-intervals/"
          },
          {
            id: 273,
            name: "Non-overlapping Intervals",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/non-overlapping-intervals/",
            gfg: "https://www.geeksforgeeks.org/minimum-number-of-intervals-to-remove-to-make-the-rest-non-overlapping/"
          }
        ]
      }
    ]
  },
  {
    id: "step13",
    title: "Binary Trees [Traversals, Medium and Hard Problems]",
    topics: [
      {
        id: "bt-1",
        name: "Traversals",
        problems: [
          {
            id: 274,
            name: "Introduction to Trees",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/binary-tree-data-structure/"
          },
          {
            id: 275,
            name: "Binary Tree Representation",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/binary-tree-array-implementation/"
          },
          {
            id: 276,
            name: "Binary Tree Traversals - Inorder Preorder Postorder",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
            gfg: "https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/"
          },
          {
            id: 277,
            name: "Preorder Traversal",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/binary-tree-preorder-traversal/",
            gfg: "https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/"
          },
          {
            id: 278,
            name: "Inorder Traversal",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
            gfg: "https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/"
          },
          {
            id: 279,
            name: "Postorder Traversal",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/binary-tree-postorder-traversal/",
            gfg: "https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/"
          },
          {
            id: 280,
            name: "Level Order Traversal",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
            gfg: "https://www.geeksforgeeks.org/level-order-tree-traversal/"
          },
          {
            id: 281,
            name: "Iterative Preorder Traversal",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/iterative-preorder-traversal/"
          },
          {
            id: 282,
            name: "Iterative Inorder Traversal",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/inorder-tree-traversal-without-recursion/"
          },
          {
            id: 283,
            name: "Iterative Postorder Traversal using 2 stacks",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/iterative-postorder-traversal/"
          },
          {
            id: 284,
            name: "Iterative Postorder Traversal using 1 stack",
            difficulty: "Hard",
            gfg: "https://www.geeksforgeeks.org/iterative-postorder-traversal-using-stack/"
          },
          {
            id: 285,
            name: "All Traversals in One",
            difficulty: "Hard",
            gfg: "https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/"
          }
        ]
      },
      {
        id: "bt-2",
        name: "Medium Problems",
        problems: [
          {
            id: 286,
            name: "Height of Binary Tree",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
            gfg: "https://www.geeksforgeeks.org/write-a-c-program-to-find-the-maximum-depth-or-height-of-a-tree/"
          },
          {
            id: 287,
            name: "Check if the tree is height-balanced or not",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/balanced-binary-tree/",
            gfg: "https://www.geeksforgeeks.org/how-to-determine-if-a-binary-tree-is-balanced/"
          },
          {
            id: 288,
            name: "Diameter of Binary Tree",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/diameter-of-binary-tree/",
            gfg: "https://www.geeksforgeeks.org/diameter-of-a-binary-tree/"
          },
          {
            id: 289,
            name: "Maximum Path Sum",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
            gfg: "https://www.geeksforgeeks.org/find-maximum-path-sum-in-a-binary-tree/"
          },
          {
            id: 290,
            name: "Check if two trees are identical or not",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/same-tree/",
            gfg: "https://www.geeksforgeeks.org/write-c-code-to-determine-if-two-trees-are-identical/"
          },
          {
            id: 291,
            name: "Zigzag Traversal of Binary Tree",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
            gfg: "https://www.geeksforgeeks.org/zigzag-tree-traversal/"
          },
          {
            id: 292,
            name: "Boundary Traversal",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/boundary-traversal-of-binary-tree/"
          },
          {
            id: 293,
            name: "Vertical Order Traversal",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/",
            gfg: "https://www.geeksforgeeks.org/print-binary-tree-vertical-order/"
          },
          {
            id: 294,
            name: "Top View of Binary Tree",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/print-nodes-top-view-binary-tree/"
          },
          {
            id: 295,
            name: "Bottom View of Binary Tree",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/bottom-view-binary-tree/"
          },
          {
            id: 296,
            name: "Right/Left View of Binary Tree",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/binary-tree-right-side-view/",
            gfg: "https://www.geeksforgeeks.org/print-right-view-binary-tree-2/"
          },
          {
            id: 297,
            name: "Symmetric Binary Tree",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/symmetric-tree/",
            gfg: "https://www.geeksforgeeks.org/symmetric-tree-tree-which-is-mirror-image-of-itself/"
          }
        ]
      },
      {
        id: "bt-3",
        name: "Hard Problems",
        problems: [
          {
            id: 298,
            name: "Root to Node Path in Binary Tree",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/print-path-root-given-node-binary-tree/"
          },
          {
            id: 299,
            name: "LCA in Binary Tree",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
            gfg: "https://www.geeksforgeeks.org/lowest-common-ancestor-binary-tree-set-1/"
          },
          {
            id: 300,
            name: "Maximum Width of Binary Tree",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/maximum-width-of-binary-tree/",
            gfg: "https://www.geeksforgeeks.org/maximum-width-of-a-binary-tree/"
          },
          {
            id: 301,
            name: "Children Sum Property",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/check-for-children-sum-property-in-a-binary-tree/"
          },
          {
            id: 302,
            name: "Print all the Nodes at a distance of K in Binary Tree",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/",
            gfg: "https://www.geeksforgeeks.org/print-nodes-distance-k-given-node-binary-tree/"
          },
          {
            id: 303,
            name: "Minimum time taken to BURN the Binary Tree from a Node",
            difficulty: "Hard",
            gfg: "https://www.geeksforgeeks.org/burn-the-binary-tree-starting-from-the-target-node/"
          },
          {
            id: 304,
            name: "Count total Nodes in a COMPLETE Binary Tree",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/count-complete-tree-nodes/",
            gfg: "https://www.geeksforgeeks.org/count-number-nodes-given-binary-tree/"
          },
          {
            id: 305,
            name: "Construct Binary Tree from Preorder and Inorder Traversal",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
            gfg: "https://www.geeksforgeeks.org/construct-tree-from-given-inorder-and-preorder-traversal/"
          },
          {
            id: 306,
            name: "Construct Binary Tree from Postorder and Inorder Traversal",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/",
            gfg: "https://www.geeksforgeeks.org/construct-a-binary-tree-from-postorder-and-inorder/"
          },
          {
            id: 307,
            name: "Serialize and Deserialize Binary Tree",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
            gfg: "https://www.geeksforgeeks.org/serialize-deserialize-binary-tree/"
          },
          {
            id: 308,
            name: "Morris Preorder Traversal",
            difficulty: "Hard",
            gfg: "https://www.geeksforgeeks.org/morris-traversal-for-preorder/"
          },
          {
            id: 309,
            name: "Morris Inorder Traversal",
            difficulty: "Hard",
            gfg: "https://www.geeksforgeeks.org/inorder-tree-traversal-without-recursion-and-without-stack/"
          },
          {
            id: 310,
            name: "Flatten Binary Tree to LinkedList",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
            gfg: "https://www.geeksforgeeks.org/flatten-a-binary-tree-into-linked-list/"
          }
        ]
      }
    ]
  },
  {
    id: "step14",
    title: "Binary Search Trees [Concept and Problems]",
    topics: [
      {
        id: "bst-1",
        name: "Concept",
        problems: [
          {
            id: 311,
            name: "Introduction to Binary Search Trees",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/binary-search-tree-data-structure/"
          },
          {
            id: 312,
            name: "Search in a Binary Search Tree",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/search-in-a-binary-search-tree/",
            gfg: "https://www.geeksforgeeks.org/binary-search-tree-set-1-search-and-insertion/"
          },
          {
            id: 313,
            name: "Find Min/Max in BST",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/find-the-minimum-element-in-a-binary-search-tree/"
          },
          {
            id: 314,
            name: "Ceil in a BST",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/floor-and-ceil-from-a-bst/"
          },
          {
            id: 315,
            name: "Floor in a BST",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/floor-in-binary-search-tree-bst/"
          },
          {
            id: 316,
            name: "Insert a given Node in Binary Search Tree",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/insert-into-a-binary-search-tree/",
            gfg: "https://www.geeksforgeeks.org/binary-search-tree-set-1-search-and-insertion/"
          },
          {
            id: 317,
            name: "Delete a Node in Binary Search Tree",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/delete-node-in-a-bst/",
            gfg: "https://www.geeksforgeeks.org/binary-search-tree-set-2-delete/"
          }
        ]
      },
      {
        id: "bst-2",
        name: "Practice Problems",
        problems: [
          {
            id: 318,
            name: "Kth Smallest/Largest Element in BST",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
            gfg: "https://www.geeksforgeeks.org/find-k-th-smallest-element-in-bst-order-statistics-in-bst/"
          },
          {
            id: 319,
            name: "Check if a tree is a BST or BT",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/validate-binary-search-tree/",
            gfg: "https://www.geeksforgeeks.org/a-program-to-check-if-a-binary-tree-is-bst-or-not/"
          },
          {
            id: 320,
            name: "LCA in Binary Search Tree",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
            gfg: "https://www.geeksforgeeks.org/lowest-common-ancestor-in-a-binary-search-tree/"
          },
          {
            id: 321,
            name: "Construct a BST from a preorder traversal",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/",
            gfg: "https://www.geeksforgeeks.org/construct-bst-from-given-preorder-traversal-set-2/"
          },
          {
            id: 322,
            name: "Inorder Successor/Predecessor in BST",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/inorder-successor-in-bst/",
            gfg: "https://www.geeksforgeeks.org/inorder-successor-in-binary-search-tree/"
          },
          {
            id: 323,
            name: "BST Iterator",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/binary-search-tree-iterator/",
            gfg: "https://www.geeksforgeeks.org/binary-search-tree-iterator/"
          },
          {
            id: 324,
            name: "Two Sum In BST",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/two-sum-iv-input-is-a-bst/",
            gfg: "https://www.geeksforgeeks.org/find-a-pair-with-given-sum-in-bst/"
          },
          {
            id: 325,
            name: "Recover BST",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/recover-binary-search-tree/",
            gfg: "https://www.geeksforgeeks.org/fix-two-swapped-nodes-of-bst/"
          },
          {
            id: 326,
            name: "Largest BST in Binary Tree",
            difficulty: "Hard",
            gfg: "https://www.geeksforgeeks.org/largest-bst-binary-tree-set-2/"
          }
        ]
      }
    ]
  },
  {
    id: "step15",
    title: "Graphs [Problems on BFS/DFS, Topo Sort, MST, Shortest Paths]",
    topics: [
      {
        id: "graph-1",
        name: "Learning",
        problems: [
          {
            id: 327,
            name: "Graph Representation",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/graph-and-its-representations/"
          },
          {
            id: 328,
            name: "BFS of Graph",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/"
          },
          {
            id: 329,
            name: "DFS of Graph",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/"
          },
          {
            id: 330,
            name: "Number of Provinces",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/number-of-provinces/",
            gfg: "https://www.geeksforgeeks.org/connected-components-in-an-undirected-graph/"
          },
          {
            id: 331,
            name: "Connected Components in Graph",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
            gfg: "https://www.geeksforgeeks.org/connected-components-in-an-undirected-graph/"
          },
          {
            id: 332,
            name: "Rotting Oranges",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/rotting-oranges/",
            gfg: "https://www.geeksforgeeks.org/minimum-time-required-so-that-all-oranges-become-rotten/"
          },
          {
            id: 333,
            name: "Flood Fill",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/flood-fill/",
            gfg: "https://www.geeksforgeeks.org/flood-fill-algorithm-implement-fill-paint/"
          },
          {
            id: 334,
            name: "Detect Cycle in an Undirected Graph using BFS",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/detect-cycle-undirected-graph/"
          },
          {
            id: 335,
            name: "Detect Cycle in an Undirected Graph using DFS",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/detect-cycle-undirected-graph/"
          },
          {
            id: 336,
            name: "0/1 Matrix (Nearest Cell having 1)",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/01-matrix/",
            gfg: "https://www.geeksforgeeks.org/distance-nearest-cell-1-binary-matrix/"
          },
          {
            id: 337,
            name: "Surrounded Regions",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/surrounded-regions/",
            gfg: "https://www.geeksforgeeks.org/given-matrix-o-x-replace-o-x-surrounded-x/"
          },
          {
            id: 338,
            name: "Number of Enclaves",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/number-of-enclaves/",
            gfg: "https://www.geeksforgeeks.org/count-cells-in-a-matrix-from-which-all-cells-of-the-matrix-can-be-reached/"
          },
          {
            id: 339,
            name: "Word Ladder I",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/word-ladder/",
            gfg: "https://www.geeksforgeeks.org/word-ladder-length-of-shortest-chain-to-reach-a-target-word/"
          },
          {
            id: 340,
            name: "Word Ladder II",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/word-ladder-ii/",
            gfg: "https://www.geeksforgeeks.org/word-ladder-set-2-bi-directional-bfs/"
          },
          {
            id: 341,
            name: "Number of Distinct Islands",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/number-of-distinct-islands/",
            gfg: "https://www.geeksforgeeks.org/find-number-of-distinct-islands-in-a-2d-matrix/"
          },
          {
            id: 342,
            name: "Bipartite Graph using BFS",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/is-graph-bipartite/",
            gfg: "https://www.geeksforgeeks.org/bipartite-graph/"
          },
          {
            id: 343,
            name: "Bipartite Graph using DFS",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/bipartite-graph/"
          },
          {
            id: 344,
            name: "Detect cycle in a directed graph using DFS",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/detect-cycle-in-a-graph/"
          },
          {
            id: 345,
            name: "Eventually Safe States",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/find-eventual-safe-states/",
            gfg: "https://www.geeksforgeeks.org/find-eventual-safe-states-of-the-graph/"
          }
        ]
      },
      {
        id: "graph-2",
        name: "Topo Sort and Problems",
        problems: [
          {
            id: 346,
            name: "Topological Sort using DFS",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/topological-sorting/"
          },
          {
            id: 347,
            name: "Kahn's Algorithm (Topological Sort using BFS)",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/topological-sorting-indegree-based-solution/"
          },
          {
            id: 348,
            name: "Detect Cycle in Directed Graph using BFS (Kahn's Algo)",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/detect-cycle-in-a-directed-graph-using-bfs/"
          },
          {
            id: 349,
            name: "Course Schedule I",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/course-schedule/",
            gfg: "https://www.geeksforgeeks.org/find-whether-it-is-possible-to-finish-all-tasks-or-not-from-given-dependencies/"
          },
          {
            id: 350,
            name: "Course Schedule II",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/course-schedule-ii/",
            gfg: "https://www.geeksforgeeks.org/find-the-ordering-of-tasks-from-given-dependencies/"
          },
          {
            id: 351,
            name: "Find Eventual Safe States using BFS",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/find-eventual-safe-states-of-the-graph/"
          },
          {
            id: 352,
            name: "Alien Dictionary",
            difficulty: "Hard",
            gfg: "https://www.geeksforgeeks.org/given-sorted-dictionary-find-precedence-characters/"
          }
        ]
      },
      {
        id: "graph-3",
        name: "Shortest Path Algorithms",
        problems: [
          {
            id: 353,
            name: "Shortest Path in UG with unit weights",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/shortest-path-unweighted-graph/"
          },
          {
            id: 354,
            name: "Shortest Path in DAG",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/shortest-path-for-directed-acyclic-graphs/"
          },
          {
            id: 355,
            name: "Dijkstra's Algorithm",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/"
          },
          {
            id: 356,
            name: "Print Shortest Path using Dijkstra's",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/printing-paths-dijkstras-shortest-path-algorithm/"
          },
          {
            id: 357,
            name: "Shortest path in a binary maze",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/shortest-path-in-a-binary-maze/"
          },
          {
            id: 358,
            name: "Path with minimum effort",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/path-with-minimum-effort/",
            gfg: "https://www.geeksforgeeks.org/minimum-effort-path/"
          },
          {
            id: 359,
            name: "Cheapest Flights Within K Stops",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
            gfg: "https://www.geeksforgeeks.org/cheapest-flights-within-k-stops/"
          },
          {
            id: 360,
            name: "Network Delay Time",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/network-delay-time/",
            gfg: "https://www.geeksforgeeks.org/network-delay-time/"
          },
          {
            id: 361,
            name: "Minimum Multiplications to reach End",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/minimum-multiplications-to-reach-end/"
          },
          {
            id: 362,
            name: "Number of Ways to Arrive at Destination",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/",
            gfg: "https://www.geeksforgeeks.org/number-of-ways-to-arrive-at-destination/"
          },
          {
            id: 363,
            name: "Bellman Ford Algorithm",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/bellman-ford-algorithm-dp-23/"
          },
          {
            id: 364,
            name: "Floyd Warshall Algorithm",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/floyd-warshall-algorithm-dp-16/"
          },
          {
            id: 365,
            name: "Find the City with the smallest number of neighbors at a threshold distance",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/",
            gfg: "https://www.geeksforgeeks.org/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/"
          }
        ]
      },
      {
        id: "graph-4",
        name: "Minimum Spanning Tree",
        problems: [
          {
            id: 366,
            name: "Prim's Algorithm",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/prims-minimum-spanning-tree-mst-greedy-algo-5/"
          },
          {
            id: 367,
            name: "Disjoint Set [Union by Rank]",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/union-find/"
          },
          {
            id: 368,
            name: "Disjoint Set [Union by Size]",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/union-find-algorithm-set-2-union-by-rank/"
          },
          {
            id: 369,
            name: "Kruskal's Algorithm",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/"
          },
          {
            id: 370,
            name: "Number of operations to make network connected",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/number-of-operations-to-make-network-connected/",
            gfg: "https://www.geeksforgeeks.org/number-of-operations-to-make-network-connected/"
          },
          {
            id: 371,
            name: "Most Stones Removed with Same Row or Column",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/",
            gfg: "https://www.geeksforgeeks.org/maximum-stones-removed-same-row-column/"
          },
          {
            id: 372,
            name: "Accounts Merge",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/accounts-merge/",
            gfg: "https://www.geeksforgeeks.org/merge-accounts/"
          },
          {
            id: 373,
            name: "Number of Islands II",
            difficulty: "Hard",
            gfg: "https://www.geeksforgeeks.org/number-of-islands-set-2-using-disjoint-set/"
          },
          {
            id: 374,
            name: "Making a Large Island",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/making-a-large-island/",
            gfg: "https://www.geeksforgeeks.org/maximum-size-island-adding-one-land-cell/"
          },
          {
            id: 375,
            name: "Swim in Rising Water",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/swim-in-rising-water/",
            gfg: "https://www.geeksforgeeks.org/swim-in-rising-water/"
          }
        ]
      },
      {
        id: "graph-5",
        name: "Other Algorithms",
        problems: [
          {
            id: 376,
            name: "Bridges in Graph (Tarjan's Algorithm)",
            difficulty: "Hard",
            gfg: "https://www.geeksforgeeks.org/bridge-in-a-graph/"
          },
          {
            id: 377,
            name: "Articulation Point",
            difficulty: "Hard",
            gfg: "https://www.geeksforgeeks.org/articulation-points-or-cut-vertices-in-a-graph/"
          },
          {
            id: 378,
            name: "Kosaraju's Algorithm (Strongly Connected Components)",
            difficulty: "Hard",
            gfg: "https://www.geeksforgeeks.org/strongly-connected-components/"
          }
        ]
      }
    ]
  },
  {
    id: "step16",
    title: "Dynamic Programming [Patterns and Problems]",
    topics: [
      {
        id: "dp-1",
        name: "1D DP",
        problems: [
          {
            id: 379,
            name: "Introduction to DP",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/dynamic-programming/"
          },
          {
            id: 380,
            name: "Climbing Stairs",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/climbing-stairs/",
            gfg: "https://www.geeksforgeeks.org/count-ways-reach-nth-stair/"
          },
          {
            id: 381,
            name: "Frog Jump (DP-3)",
            difficulty: "Easy",
            gfg: "https://www.geeksforgeeks.org/minimum-cost-to-reach-the-top-of-the-floor-by-climbing-stairs/"
          },
          {
            id: 382,
            name: "Frog Jump with K Distance (DP-4)",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/minimum-cost-to-reach-end-of-array-when-a-maximum-jump-of-k-index-is-allowed/"
          },
          {
            id: 383,
            name: "Maximum sum of non-adjacent elements (House Robber) (DP-5)",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/house-robber/",
            gfg: "https://www.geeksforgeeks.org/find-maximum-possible-stolen-value-houses/"
          },
          {
            id: 384,
            name: "House Robber 2 (DP-6)",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/house-robber-ii/",
            gfg: "https://www.geeksforgeeks.org/maximum-sum-such-that-no-two-elements-are-adjacent/"
          },
          {
            id: 385,
            name: "Ninja's Training (DP-7)",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/maximum-sum-such-that-no-two-elements-are-adjacent/"
          }
        ]
      },
      {
        id: "dp-2",
        name: "2D/3D DP and DP on Grids",
        problems: [
          {
            id: 386,
            name: "Grid Unique Paths (DP-8)",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/unique-paths/",
            gfg: "https://www.geeksforgeeks.org/count-possible-paths-top-left-bottom-right-nxm-matrix/"
          },
          {
            id: 387,
            name: "Grid Unique Paths 2 (DP-9)",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/unique-paths-ii/",
            gfg: "https://www.geeksforgeeks.org/unique-paths-in-a-grid-with-obstacles/"
          },
          {
            id: 388,
            name: "Minimum path sum in Grid (DP-10)",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/minimum-path-sum/",
            gfg: "https://www.geeksforgeeks.org/minimum-cost-path-left-right-bottom-moves-allowed/"
          },
          {
            id: 389,
            name: "Minimum path sum in Triangular Grid (DP-11)",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/triangle/",
            gfg: "https://www.geeksforgeeks.org/minimum-sum-path-triangle/"
          },
          {
            id: 390,
            name: "Minimum/Maximum Falling Path Sum (DP-12)",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/minimum-falling-path-sum/",
            gfg: "https://www.geeksforgeeks.org/minimum-sum-falling-path/"
          },
          {
            id: 391,
            name: "3D DP: Ninja and his friends (DP-13)",
            difficulty: "Hard",
            gfg: "https://www.geeksforgeeks.org/collect-maximum-coins-before-hitting-a-dead-end/"
          }
        ]
      },
      {
        id: "dp-3",
        name: "DP on Subsequences",
        problems: [
          {
            id: 392,
            name: "Subset sum equal to target (DP-14)",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/partition-equal-subset-sum/",
            gfg: "https://www.geeksforgeeks.org/subset-sum-problem-dp-25/"
          },
          {
            id: 393,
            name: "Partition Equal Subset Sum (DP-15)",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/partition-equal-subset-sum/",
            gfg: "https://www.geeksforgeeks.org/partition-problem-dp-18/"
          },
          {
            id: 394,
            name: "Partition Set Into 2 Subsets With Min Absolute Sum Diff (DP-16)",
            difficulty: "Hard",
            gfg: "https://www.geeksforgeeks.org/partition-a-set-into-two-subsets-such-that-the-difference-of-subset-sums-is-minimum/"
          },
          {
            id: 395,
            name: "Count Subsets with Sum K (DP-17)",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/count-of-subsets-with-sum-equal-to-x/"
          },
          {
            id: 396,
            name: "Count Partitions with Given Difference (DP-18)",
            difficulty: "Hard",
            gfg: "https://www.geeksforgeeks.org/count-of-subsets-with-given-difference/"
          },
          {
            id: 397,
            name: "0/1 Knapsack (DP-19)",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/"
          },
          {
            id: 398,
            name: "Minimum Coins (DP-20)",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/coin-change/",
            gfg: "https://www.geeksforgeeks.org/find-minimum-number-of-coins-that-make-a-change/"
          },
          {
            id: 399,
            name: "Target Sum (DP-21)",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/target-sum/",
            gfg: "https://www.geeksforgeeks.org/count-of-subsets-with-given-difference/"
          },
          {
            id: 400,
            name: "Coin Change 2 (DP-22)",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/coin-change-2/",
            gfg: "https://www.geeksforgeeks.org/coin-change-dp-7/"
          },
          {
            id: 401,
            name: "Unbounded Knapsack (DP-23)",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/unbounded-knapsack-repetition-items-allowed/"
          },
          {
            id: 402,
            name: "Rod Cutting Problem (DP-24)",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/cutting-a-rod-dp-13/"
          }
        ]
      },
      {
        id: "dp-4",
        name: "DP on Strings",
        problems: [
          {
            id: 403,
            name: "Longest Common Subsequence (DP-25)",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/longest-common-subsequence/",
            gfg: "https://www.geeksforgeeks.org/longest-common-subsequence-dp-4/"
          },
          {
            id: 404,
            name: "Print Longest Common Subsequence (DP-26)",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/printing-longest-common-subsequence/"
          },
          {
            id: 405,
            name: "Longest Common Substring (DP-27)",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/longest-common-substring-dp-29/"
          },
          {
            id: 406,
            name: "Longest Palindromic Subsequence (DP-28)",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/longest-palindromic-subsequence/",
            gfg: "https://www.geeksforgeeks.org/longest-palindromic-subsequence-dp-12/"
          },
          {
            id: 407,
            name: "Minimum insertions to make string palindrome (DP-29)",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/",
            gfg: "https://www.geeksforgeeks.org/minimum-insertions-to-form-a-palindrome-dp-28/"
          },
          {
            id: 408,
            name: "Minimum Insertions/Deletions to Convert String A to String B (DP-30)",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/delete-operation-for-two-strings/",
            gfg: "https://www.geeksforgeeks.org/minimum-number-deletions-insertions-transform-one-string-another/"
          },
          {
            id: 409,
            name: "Shortest Common Supersequence (DP-31)",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/shortest-common-supersequence/",
            gfg: "https://www.geeksforgeeks.org/shortest-common-supersequence/"
          },
          {
            id: 410,
            name: "Distinct Subsequences (DP-32)",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/distinct-subsequences/",
            gfg: "https://www.geeksforgeeks.org/count-distinct-occurrences-as-a-subsequence/"
          },
          {
            id: 411,
            name: "Edit Distance (DP-33)",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/edit-distance/",
            gfg: "https://www.geeksforgeeks.org/edit-distance-dp-5/"
          },
          {
            id: 412,
            name: "Wildcard Matching (DP-34)",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/wildcard-matching/",
            gfg: "https://www.geeksforgeeks.org/wildcard-pattern-matching/"
          }
        ]
      },
      {
        id: "dp-5",
        name: "DP on Stocks",
        problems: [
          {
            id: 413,
            name: "Buy and Sell Stock (DP-35)",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
            gfg: "https://www.geeksforgeeks.org/best-time-to-buy-and-sell-stock/"
          },
          {
            id: 414,
            name: "Buy and Sell Stock II (DP-36)",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",
            gfg: "https://www.geeksforgeeks.org/stock-buy-sell/"
          },
          {
            id: 415,
            name: "Buy and Sell Stock III (DP-37)",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/",
            gfg: "https://www.geeksforgeeks.org/maximum-profit-by-buying-and-selling-a-share-at-most-twice/"
          },
          {
            id: 416,
            name: "Buy and Sell Stock IV (DP-38)",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/",
            gfg: "https://www.geeksforgeeks.org/maximum-profit-by-buying-and-selling-a-share-at-most-k-times/"
          },
          {
            id: 417,
            name: "Buy and Sell Stocks With Cooldown (DP-39)",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/",
            gfg: "https://www.geeksforgeeks.org/stock-buy-sell-k-transactions-allowed/"
          },
          {
            id: 418,
            name: "Buy and Sell Stocks With Transaction Fee (DP-40)",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/",
            gfg: "https://www.geeksforgeeks.org/buy-and-sell-a-share-at-most-twice/"
          }
        ]
      },
      {
        id: "dp-6",
        name: "DP on LIS",
        problems: [
          {
            id: 419,
            name: "Longest Increasing Subsequence (DP-41)",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/longest-increasing-subsequence/",
            gfg: "https://www.geeksforgeeks.org/longest-increasing-subsequence-dp-3/"
          },
          {
            id: 420,
            name: "Printing Longest Increasing Subsequence (DP-42)",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/construction-of-longest-increasing-subsequence-using-dynamic-programming/"
          },
          {
            id: 421,
            name: "Longest Increasing Subsequence (Binary Search) (DP-43)",
            difficulty: "Hard",
            gfg: "https://www.geeksforgeeks.org/longest-monotonically-increasing-subsequence-size-n-log-n/"
          },
          {
            id: 422,
            name: "Largest Divisible Subset (DP-44)",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/largest-divisible-subset/",
            gfg: "https://www.geeksforgeeks.org/largest-divisible-subset-array/"
          },
          {
            id: 423,
            name: "Longest String Chain (DP-45)",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/longest-string-chain/",
            gfg: "https://www.geeksforgeeks.org/longest-string-chain/"
          },
          {
            id: 424,
            name: "Longest Bitonic Subsequence (DP-46)",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/longest-bitonic-subsequence-dp-15/"
          },
          {
            id: 425,
            name: "Number of Longest Increasing Subsequence (DP-47)",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/number-of-longest-increasing-subsequence/",
            gfg: "https://www.geeksforgeeks.org/count-of-longest-increasing-subsequences/"
          }
        ]
      },
      {
        id: "dp-7",
        name: "MCM DP | Partition DP",
        problems: [
          {
            id: 426,
            name: "Matrix Chain Multiplication (DP-48)",
            difficulty: "Hard",
            gfg: "https://www.geeksforgeeks.org/matrix-chain-multiplication-dp-8/"
          },
          {
            id: 427,
            name: "Matrix Chain Multiplication (Tabulation) (DP-49)",
            difficulty: "Hard",
            gfg: "https://www.geeksforgeeks.org/printing-brackets-matrix-chain-multiplication-problem/"
          },
          {
            id: 428,
            name: "Minimum Cost to Cut the Stick (DP-50)",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/minimum-cost-to-cut-a-stick/",
            gfg: "https://www.geeksforgeeks.org/minimum-cost-to-cut-a-board-into-squares/"
          },
          {
            id: 429,
            name: "Burst Balloons (DP-51)",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/burst-balloons/",
            gfg: "https://www.geeksforgeeks.org/burst-balloon-to-maximize-coins/"
          },
          {
            id: 430,
            name: "Evaluate Boolean Expression to True (DP-52)",
            difficulty: "Hard",
            gfg: "https://www.geeksforgeeks.org/boolean-parenthesization-problem-dp-37/"
          },
          {
            id: 431,
            name: "Palindrome Partitioning II (DP-53)",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/palindrome-partitioning-ii/",
            gfg: "https://www.geeksforgeeks.org/palindrome-partitioning-dp-17/"
          },
          {
            id: 432,
            name: "Partition Array for Maximum Sum (DP-54)",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/partition-array-for-maximum-sum/",
            gfg: "https://www.geeksforgeeks.org/partition-into-two-subarrays-of-lengths-k-and-n-k-such-that-the-difference-of-sums-is-maximum/"
          }
        ]
      },
      {
        id: "dp-8",
        name: "DP on Squares",
        problems: [
          {
            id: 433,
            name: "Maximum Rectangle Area with all 1's (DP-55)",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/maximal-rectangle/",
            gfg: "https://www.geeksforgeeks.org/maximum-size-rectangle-binary-sub-matrix-1s/"
          },
          {
            id: 434,
            name: "Count Square Submatrices with All Ones (DP-56)",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/count-square-submatrices-with-all-ones/",
            gfg: "https://www.geeksforgeeks.org/count-square-submatrices-with-all-ones/"
          }
        ]
      }
    ]
  },
  {
    id: "step17",
    title: "Tries",
    topics: [
      {
        id: "trie-1",
        name: "Theory",
        problems: [
          {
            id: 435,
            name: "Implement Trie (Prefix Tree)",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/implement-trie-prefix-tree/",
            gfg: "https://www.geeksforgeeks.org/trie-insert-and-search/"
          },
          {
            id: 436,
            name: "Implement Trie II",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/trie-delete/"
          }
        ]
      },
      {
        id: "trie-2",
        name: "Problems",
        problems: [
          {
            id: 437,
            name: "Longest String with All Prefixes",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/longest-word-in-dictionary/"
          },
          {
            id: 438,
            name: "Number of Distinct Substrings in a String",
            difficulty: "Hard",
            gfg: "https://www.geeksforgeeks.org/count-distinct-substrings-string-using-suffix-trie/"
          },
          {
            id: 439,
            name: "Bit PreRequisites for TRIE Problems",
            difficulty: "Medium",
            gfg: "https://www.geeksforgeeks.org/bits-manipulation-important-tactics/"
          },
          {
            id: 440,
            name: "Maximum XOR of two numbers in an array",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/",
            gfg: "https://www.geeksforgeeks.org/find-two-numbers-maximum-xor/"
          },
          {
            id: 441,
            name: "Maximum XOR With an Element From Array",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/maximum-xor-with-an-element-from-array/",
            gfg: "https://www.geeksforgeeks.org/maximum-xor-subset/"
          }
        ]
      }
    ]
  },
  {
    id: "step18",
    title: "Strings - Part II",
    topics: [
      {
        id: "string-adv-1",
        name: "Pattern Matching Algorithms",
        problems: [
          {
            id: 442,
            name: "Z-Algorithm",
            difficulty: "Hard",
            gfg: "https://www.geeksforgeeks.org/z-algorithm-linear-time-pattern-searching-algorithm/"
          },
          {
            id: 443,
            name: "KMP Algorithm / LPS(pi) Array",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/",
            gfg: "https://www.geeksforgeeks.org/kmp-algorithm-for-pattern-searching/"
          },
          {
            id: 444,
            name: "Minimum Characters needed to be inserted in the beginning to make it Palindromic",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/shortest-palindrome/",
            gfg: "https://www.geeksforgeeks.org/minimum-characters-added-front-make-string-palindrome/"
          },
          {
            id: 445,
            name: "Check for Anagrams",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/valid-anagram/",
            gfg: "https://www.geeksforgeeks.org/check-whether-two-strings-are-anagram-of-each-other/"
          },
          {
            id: 446,
            name: "Count and Say",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/count-and-say/",
            gfg: "https://www.geeksforgeeks.org/look-and-say-sequence/"
          },
          {
            id: 447,
            name: "Rabin Karp Algorithm",
            difficulty: "Hard",
            gfg: "https://www.geeksforgeeks.org/rabin-karp-algorithm-for-pattern-searching/"
          }
        ]
      }
    ]
  }
];
