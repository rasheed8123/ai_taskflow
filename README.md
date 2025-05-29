# TaskFlow - AI-Powered Task Manager

TaskFlow is a modern, AI-powered task management application that uses natural language processing to help you organize your tasks efficiently. Built with React, TypeScript, and OpenAI integration, it provides a beautiful and intuitive interface for managing your daily tasks.

![TaskFlow Screenshot](screenshot.png)

## 🌟 Features

- **Natural Language Task Input**: Add tasks using everyday language
- **AI-Powered Parsing**: Automatically extracts task details using OpenAI
- **Smart Task Organization**: 
  - Task name
  - Assignee
  - Due date & time
  - Priority levels (P1-P4)
- **Task Completion**: Mark tasks as complete/incomplete
- **Filtering System**: View all, active, or completed tasks
- **Beautiful UI**: Modern design with smooth animations
- **Responsive Design**: Works on all devices
- **Local Storage**: Tasks persist between sessions

## 👥 User Guide

### Adding Tasks

1. Type your task in natural language in the input field
2. Examples:
   - "Finish landing page by Aman due 11pm 20th June P2"
   - "Call client Rajeev tomorrow 5pm"
   - "Review pull requests by John next Monday P1"
3. Click "Add" or press Enter
4. The AI will parse your input and create a structured task

### Managing Tasks

- **Mark as Complete**: Click the checkbox icon next to a task
- **Filter Tasks**: Use the tabs at the top to view:
  - All tasks
  - Active tasks
  - Completed tasks
- **View Task Details**: Each task shows:
  - Task name
  - Assignee
  - Due date & time
  - Priority level

### Priority Levels

- **P1**: Highest priority (Red)
- **P2**: High priority (Orange)
- **P3**: Medium priority (Yellow) - Default
- **P4**: Low priority (Green)

## 👨‍💻 Developer Guide

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenAI API key

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rasheed8123/taskflow.git
   cd taskflow
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```
   VITE_OPENAI_API_KEY=your_openai_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

### Project Structure

```
src/
├── components/         # React components
│   ├── Header.tsx     # Application header
│   ├── TaskInput.tsx  # Task input component
│   └── TaskTable.tsx  # Task list component
├── context/           # React context
│   └── TaskContext.tsx # Task management context
├── types/             # TypeScript types
│   └── Task.ts        # Task interface
├── utils/             # Utility functions
│   └── openaiParser.ts # OpenAI integration
└── App.tsx            # Main application component
```

### Key Technologies

- **React**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **Framer Motion**: Animations
- **OpenAI API**: Natural language processing
- **date-fns**: Date formatting
- **Lucide Icons**: Icon library

### Development Workflow

1. **Adding Features**:
   - Create new components in `src/components/`
   - Add types in `src/types/`
   - Implement utilities in `src/utils/`

2. **Styling**:
   - Use Tailwind CSS classes
   - Add custom animations in `src/index.css`
   - Follow the existing design system

3. **Testing**:
   ```bash
   npm run test
   ```

4. **Building for Production**:
   ```bash
   npm run build
   ```

### Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📝 License

MIT License - feel free to use this project for your own purposes.

## 🙏 Acknowledgments

- OpenAI for the GPT API
- The React and Tailwind CSS communities
- All contributors to the project 