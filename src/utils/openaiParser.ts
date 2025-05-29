import { Priority } from '../types/Task';

interface ParsedTask {
  name: string;
  assignee: string | null;
  dueDate: Date | null;
  priority: Priority;
}

export async function parseTaskWithOpenAI(input: string): Promise<ParsedTask> {
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `You are a task parser. Extract the following information from the input:
            1. Task name
            2. Assignee (if any)
            3. Due date and time (if any)
            4. Priority (P1, P2, P3, or P4, default to P3 if not specified)
            
            Return the result in JSON format with these fields:
            {
              "name": "string",
              "assignee": "string or null",
              "dueDate": "ISO date string or null",
              "priority": "P1|P2|P3|P4"
            }`
          },
          {
            role: 'user',
            content: input
          }
        ],
        temperature: 0.3,
      }),
    });

    const data = await response.json();
    const parsedResult = JSON.parse(data.choices[0].message.content);

    return {
      name: parsedResult.name,
      assignee: parsedResult.assignee,
      dueDate: parsedResult.dueDate ? new Date(parsedResult.dueDate) : null,
      priority: parsedResult.priority,
    };
  } catch (error) {
    console.error('Error parsing task with OpenAI:', error);
    // Fallback to basic parsing if OpenAI fails
    return {
      name: input.trim(),
      assignee: null,
      dueDate: null,
      priority: 'P3',
    };
  }
} 