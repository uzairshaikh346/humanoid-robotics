# Data Model: Docusaurus Book for Physical AI & Humanoid Robotics

## Entities

### Chapter
- **Fields**:
  - id: string (unique identifier for the chapter)
  - title: string (chapter title)
  - module: string (which module the chapter belongs to)
  - content: string (the actual chapter content in MDX format)
  - learningObjectives: array of strings (list of learning objectives)
  - codeExamples: array of objects (code snippets with language specification)
  - diagrams: array of Mermaid diagrams
  - callouts: array of objects (info/warning/tip callouts with content)
  - exercises: array of objects (practice exercises)
  - keyTakeaways: array of strings (key points summary)
  - nextChapter: string (reference to the next chapter in sequence)
  - prevChapter: string (reference to the previous chapter in sequence)

### Module
- **Fields**:
  - id: string (unique identifier for the module)
  - title: string (module title)
  - description: string (brief description of the module)
  - chapters: array of Chapter objects (ordered list of chapters in the module)
  - order: number (sequence of the module in the book)

### Book
- **Fields**:
  - title: string (the book title)
  - description: string (brief description of the book)
  - modules: array of Module objects (ordered list of all modules)
  - authors: array of objects (author information)
  - navigation: object (sidebar navigation configuration)

## Relationships
- Book contains many Modules (one-to-many)
- Module contains many Chapters (one-to-many)

## Validation Rules
- Each Chapter must belong to exactly one Module
- Each Chapter must have a unique title within its Module
- Each Module must have a unique title in the Book
- Each Chapter must contain at least one learning objective
- Each Chapter must contain at least one key takeaway
- Content field must be in valid MDX format
- The book must contain exactly 4 modules as specified
- The book must contain exactly 20 chapters as specified

## State Transitions
N/A - This is a static documentation site with no state changes in the data model.