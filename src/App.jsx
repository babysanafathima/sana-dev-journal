import { useEffect, useState } from 'react';
import './App.css';

/* =========================================
   SANA.DEV JOURNAL — ARTICLE COLLECTION
========================================= */

const articles = [
  {
    id: 1,
    category: 'REACT',
    date: 'NOV 20, 2026',
    readTime: '12 MIN READ',
    title: 'Understanding React Components: A Complete Guide',
    excerpt:
      'A practical deep dive into React components, JSX, props, state, rendering and composition. Learn how to build interfaces that are reusable, understandable and maintainable.',
    featured: true,
    sections: [
      {
        title: 'Introduction: Why components matter',
        content: `Imagine building a website with a navigation bar, hero section, product cards, sidebar and footer. You could write all the markup and logic inside one enormous component. Initially, this might seem simple. But as the application grows, finding code, fixing bugs and introducing new features becomes increasingly difficult.

React approaches this problem through components.

A component represents an independent, reusable part of a user interface. Instead of treating a webpage as one large structure, we divide it into smaller pieces with clear responsibilities.

For example, an online store might contain a Navbar, ProductCard, SearchBar, ShoppingCart and Footer. Each component handles a particular part of the interface.

This approach is useful because we can understand, test and improve individual parts without constantly modifying the entire application.

Component-based development is one of the most important ideas to understand before building larger React applications.`,
      },
      {
        title: 'What exactly is a React component?',
        content: `A React component is a JavaScript function that returns a description of the user interface.

Modern React applications primarily use function components. A component can receive information, execute logic and return JSX describing what should appear on the screen.

Consider a simple welcome message. Instead of writing the same heading repeatedly, we can create a Welcome component and reuse it.

Component names must begin with a capital letter. This helps React distinguish custom components from built-in HTML elements.

When React encounters <Welcome />, it knows that it should render our custom component.

A good component name should communicate its responsibility. Names such as UserProfile, ProductCard and NavigationBar are easier to understand than generic names such as Box or Item.`,
        code: `function Welcome() {
  return <h1>Welcome to React!</h1>;
}

function App() {
  return (
    <main>
      <Welcome />
    </main>
  );
}

export default App;`,
      },
      {
        title: 'Understanding JSX',
        content: `JSX stands for JavaScript XML. It is a syntax extension that allows developers to write HTML-like markup inside JavaScript.

JSX makes user interfaces easier to describe because the structure of the interface stays close to the logic responsible for rendering it.

However, JSX is not exactly HTML. It follows some important rules.

Use className instead of class when assigning CSS classes. Use htmlFor instead of for when connecting a label to an input. Every element must be properly closed.

A component must return one parent element. When multiple sibling elements need to be returned, we can use a parent element or a React Fragment.

We can also insert JavaScript expressions inside JSX using curly braces. This allows us to display variables, calculate values and conditionally render content.

Development tools such as Vite transform JSX into JavaScript that browsers can execute.`,
        code: `function Profile() {
  const name = 'Sana';
  const role = 'Frontend Developer';

  return (
    <div className="profile">
      <h2>Hello, {name}!</h2>
      <p>{role}</p>
      <p>Welcome to my developer journal.</p>
    </div>
  );
}`,
      },
      {
        title: 'Props: Passing data between components',
        content: `Components become much more useful when they can receive different information.

React provides props, short for properties, to pass data from a parent component to a child component.

Imagine displaying several article cards on a blog. Every card has a title, description and category, but the information is different.

Creating a separate component for every article would lead to unnecessary repetition. Instead, we can build one ArticleCard component and pass different information through props.

Props are read-only from the perspective of the receiving component. A child component should not directly modify the props it receives.

This creates a predictable flow of information from parent components to their children.

Destructuring props in the function parameters is a common way to make component code easier to read.`,
        code: `function ArticleCard({ title, category, excerpt }) {
  return (
    <article className="article-card">
      <span>{category}</span>
      <h2>{title}</h2>
      <p>{excerpt}</p>
    </article>
  );
}

function App() {
  return (
    <div>
      <ArticleCard
        category="REACT"
        title="Understanding Components"
        excerpt="Learn how reusable components work."
      />

      <ArticleCard
        category="JAVASCRIPT"
        title="Learning JavaScript"
        excerpt="Explore essential JavaScript concepts."
      />
    </div>
  );
}`,
      },
      {
        title: 'Rendering lists with map()',
        content: `Real applications frequently display information stored in arrays. A blog might contain dozens of articles, while an online store might contain hundreds of products.

Manually creating a component for every item would be inefficient.

JavaScript provides the map() method, which allows us to transform each array item into a React element.

React also needs a key for every element in a rendered list. Keys help React identify which items have changed, been added or removed.

Whenever possible, use a stable unique identifier from your data instead of the array index. This becomes particularly important when users can add, remove or reorder items.

This pattern is useful for article lists, navigation menus, product collections and dashboard statistics.`,
        code: `const articles = [
  { id: 1, title: 'React Components' },
  { id: 2, title: 'JavaScript Basics' },
  { id: 3, title: 'Responsive CSS' }
];

function ArticleList() {
  return (
    <div>
      {articles.map((article) => (
        <div key={article.id}>
          <h3>{article.title}</h3>
        </div>
      ))}
    </div>
  );
}`,
      },
      {
        title: 'State: Making components interactive',
        content: `So far, our components have displayed information. But what happens when a user clicks a button, types into an input or changes a selection?

React state allows components to remember information between renders.

The useState Hook is commonly used to add state to function components. It returns two values: the current state and a function that updates that state.

When state changes, React schedules a new render so the interface can reflect the updated information.

Consider a simple counter. We begin with a value of zero. Every time the user clicks the button, the state increases.

Notice that we do not directly modify the count variable. We use its setter function instead.

When the next state depends on the previous state, using an updater function such as setCount(previous => previous + 1) is a reliable approach.`,
        code: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((previous) => previous + 1);
  }

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={handleClick}>
        Increase
      </button>
    </div>
  );
}`,
      },
      {
        title: 'Component composition and reusability',
        content: `Component composition means building larger interfaces by combining smaller components.

For example, a dashboard might contain a Navbar, Sidebar, StatisticsCard, RecentActivity and Footer component.

Each component handles a focused responsibility, while the parent component determines how those pieces fit together.

Reusable components should be designed around clear responsibilities. A button should handle button presentation and interaction, while a dashboard should organize the larger page layout.

A useful component does not need to be complicated. Even a small component can improve readability when it represents a meaningful piece of the interface.

However, splitting every tiny piece of markup into its own component can create unnecessary complexity. The goal is not to create as many components as possible. The goal is to make the application easier to understand and maintain.`,
        code: `function Navbar() {
  return <nav>My Dashboard</nav>;
}

function StatisticsCard({ label, value }) {
  return (
    <div className="statistics-card">
      <p>{label}</p>
      <h2>{value}</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <main>
      <Navbar />

      <StatisticsCard
        label="Total Projects"
        value="12"
      />

      <StatisticsCard
        label="Completed Tasks"
        value="48"
      />
    </main>
  );
}`,
      },
      {
        title: 'Common mistakes beginners should avoid',
        content: `Learning React involves making mistakes. Recognizing common problems early can save considerable debugging time.

1. Using lowercase component names. Custom components should begin with uppercase letters.

2. Forgetting list keys. Give rendered list items stable, unique keys.

3. Mutating state directly. Use the setter function returned by useState.

4. Modifying props. Treat props as read-only information.

5. Returning multiple JSX elements without a parent. Use a parent element or Fragment.

6. Putting the entire application inside one component. Separate meaningful responsibilities.

7. Using array indexes as keys without considering whether the list can change.

8. Copying code without understanding it. Experiment with examples and try explaining what each part does.

These are not unusual mistakes. They are part of the learning process. What matters is developing the habit of understanding why a problem occurs and how to solve it.`,
      },
      {
        title: 'Best practices for writing React components',
        content: `Keep components focused. A component should ideally have one clear responsibility.

Choose meaningful names. Names such as ProductCard, UserProfile and NavigationBar communicate their purpose immediately.

Use props for configuration. Reusable components should receive the information they need instead of depending on hardcoded values.

Keep state close to where it is needed. If several components need the same state, consider moving it to their nearest common parent.

Avoid unnecessary duplication. Extract repeated logic or markup when doing so improves clarity.

Use semantic HTML elements. An article should generally be represented by an article element, while navigation belongs inside nav.

Finally, remember that readable code is valuable. A solution that works is important, but a solution another developer can understand and maintain is even better.`,
      },
      {
        title: 'Final thoughts and practical challenge',
        content: `React components are the foundation of modern React development. Once you understand how components, JSX, props, lists and state work together, you can begin building more complex applications.

The best way to strengthen your understanding is through practice.

YOUR PRACTICAL CHALLENGE:

Build a small developer profile page using React.

Create these components:

• ProfileHeader — display your name and professional role.
• SkillCard — display one skill and its level.
• ProjectCard — display a project title and description.
• ProjectList — render multiple projects using map().
• ProfilePage — combine all the components.

Try passing information through props and displaying a small interactive feature using useState.

Do not simply copy the examples. Write the components yourself, test them and understand why they work.

Keep learning. Keep building.`,
      },
    ],
  },

  {
    id: 2,
    category: 'JAVASCRIPT',
    date: 'NOV 16, 2026',
    readTime: '10 MIN READ',
    title: 'JavaScript Concepts Every Developer Should Know',
    excerpt:
      'Go beyond syntax and understand the JavaScript concepts behind interactive applications, cleaner code and modern frontend development.',
    sections: [
      {
        title: 'Why JavaScript matters',
        content: `HTML gives a webpage its structure. CSS controls its presentation. JavaScript brings it to life.

JavaScript allows us to respond to user actions, validate forms, update interfaces, communicate with APIs and manage application data.

It is also the programming language behind popular frontend libraries and frameworks such as React.

Learning JavaScript is not simply about memorizing methods or syntax. It is about understanding how data moves through a program and how different parts of an application work together.

When JavaScript fundamentals become stronger, learning React and other tools becomes considerably easier.`,
      },
      {
        title: 'Variables, data types and scope',
        content: `Variables allow us to store information that a program can use later.

JavaScript provides const, let and var. In modern development, const and let are generally preferred.

Use const when a variable does not need to be reassigned. Use let when its value needs to change. Avoid var in most modern code because its function-scoped behaviour can lead to unexpected results.

JavaScript has seven primitive types: string, number, bigint, boolean, undefined, symbol and null. Objects, including arrays and functions, are reference types. The typeof operator is useful for inspecting values, although typeof null returns the historical result \"object\".

Scope determines where a variable can be accessed. Global scope is available throughout the relevant script environment; top-level bindings in an ES module are scoped to that module. Function scope belongs to a function, and block scope is created by blocks such as those used with if statements and loops. let and const are block-scoped; var is function-scoped.

JavaScript uses lexical scope: access to a variable is determined by where code is written, not where a function is called. A const binding cannot be reassigned, but an object or array stored in that binding can still be changed. Prefer const by default, use let when reassignment is needed, and avoid var in most modern code.`,
        code: `const developer = 'Sana';
let completedProjects = 2;

completedProjects = 3;

const skills = ['HTML', 'CSS', 'JavaScript'];
skills.push('React'); // The array can still be mutated.

if (completedProjects > 0) {
  const status = 'Making progress';
  console.log(status);
}

console.log(developer);
console.log(completedProjects);
console.log(skills);`,
      },
      {
        title: 'Functions and reusable logic',
        content: `Functions allow us to organize instructions into reusable blocks.

A function can receive information through parameters, perform an operation and return a result. Parameters are the names in the function definition; arguments are the actual values supplied when the function is called. A return statement sends a value back to the caller and ends that function's execution.

JavaScript supports function declarations, function expressions and arrow functions. Function declarations are hoisted with their function body, while function expressions are assigned to variables. Arrow functions offer concise syntax and are common in callbacks and array methods.

Arrow functions do not create their own this value; they use this from the surrounding lexical scope. Regular functions have their own this depending on how they are called. This distinction matters in object methods, event handlers and callbacks.

A good function should have a clear purpose. If a function performs too many unrelated tasks, consider dividing it into smaller functions. Readable functions are easier to test, reuse and maintain.`,
        code: `function calculateTotal(price, quantity) {
  return price * quantity;
}

const total = calculateTotal(250, 3);

const greet = (name) => \`Hello, \${name}!\`;

const double = (number) => number * 2;

console.log(total);       // 750
console.log(greet('Sana'));
console.log(double(5));   // 10`,
      },
      {
        title: 'Arrays and important array methods',
        content: `Arrays are used to store collections of information. They are extremely common in frontend applications.

Imagine an application containing a list of projects. Each project has a title, description and status.

Instead of creating separate variables for every project, we can store them inside an array.

Three particularly useful methods are map(), filter() and find().

map() creates a new array by transforming each item.

filter() creates a new array containing items that satisfy a condition.

find() returns the first item that satisfies a condition, or undefined when no match is found.

These methods are useful for search functionality, category filtering, dashboards and dynamic lists.

Remember that map() and filter() return new arrays and do not mutate the original array. find() returns one matching element, not an array. These methods do not automatically deep-copy nested objects: returned elements may still refer to the same objects held in the original array. Choose the method based on the result you need, rather than using map() for every iteration.`,
        code: `const projects = [
  { id: 1, title: 'BookVault', completed: true },
  { id: 2, title: 'WebCanvas Studio', completed: true },
  { id: 3, title: 'Portfolio', completed: false }
];

const titles = projects.map(
  project => project.title
);

const completed = projects.filter(
  project => project.completed
);

const portfolio = projects.find(
  project => project.title === 'Portfolio'
);

console.log(titles);
console.log(completed);
console.log(portfolio);`,
      },
      {
        title: 'Objects and destructuring',
        content: `Objects allow us to organize related information using key-value pairs.

A user object might contain a name, email, role and list of skills. This is a natural way to represent real application data.

Destructuring allows us to extract values from objects and arrays without repeatedly writing their full property paths.

It makes code more concise, particularly when working with API responses and React props.

The spread syntax (...) is also useful when creating a shallow copy or combining properties. It is common in React when updating state without mutating the existing object. A shallow copy creates a new outer object, but nested objects are still shared references.

Understanding objects, destructuring and spread syntax is important because API responses and application state commonly use object-shaped data.`,
        code: `const user = {
  name: 'Sana',
  role: 'Frontend Developer',
  location: 'Kerala'
};

const { name, role } = user;
const updatedUser = { ...user, role: 'React Developer' };

console.log(name);
console.log(role);
console.log(updatedUser);

const skills = ['HTML', 'CSS', 'React'];
const [firstSkill, secondSkill] = skills;
const moreSkills = [...skills, 'JavaScript'];

console.log(firstSkill, secondSkill);
console.log(moreSkills);`,
      },
      {
        title: 'Understanding asynchronous JavaScript',
        content: `Some operations take time to complete. Examples include requesting information from an API, loading data from a server and reading files.

JavaScript uses asynchronous programming patterns to manage these operations without blocking the entire application.

Promises represent the eventual result of an asynchronous operation. A promise can be pending, fulfilled or rejected.

The async and await keywords make asynchronous code easier to read.

When using await, execution of the surrounding async function pauses until that awaited promise settles. It does not block the browser's main thread from handling other work. Once a promise is fulfilled or rejected, it is settled and does not change to another state.

An HTTP response with a 404 or 500 status does not normally make fetch() reject. Check response.ok and throw an error when the status is not successful. Use try and catch to handle network failures and errors raised by your own checks, then provide useful feedback to the user.`,
        code: `async function loadUsers() {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    );

    if (!response.ok) {
      throw new Error('Unable to load users');
    }

    const users = await response.json();

    console.log(users);
  } catch (error) {
    console.error(error.message);
  }
}

loadUsers();`,
      },
      {
        title: 'The event loop and callbacks',
        content: `JavaScript executes code using a call stack and an event loop. Understanding the basic idea helps explain why asynchronous operations behave differently from ordinary statements.

Synchronous code executes in sequence. Asynchronous work can schedule callbacks or promise reactions to run later.

For example, setTimeout schedules a callback as a task. Its delay is a minimum waiting period, not a guarantee that the callback runs at that exact time. It can run only when the current JavaScript work has finished and the event loop can process the task.

Promise reactions, including callbacks passed to then(), are queued as microtasks. After the current synchronous task completes, the runtime drains the microtask queue before moving on to the next task such as a timer callback. This explains why promise callbacks commonly run before a setTimeout(..., 0) callback.

You do not need to memorize every internal detail immediately. Start by experimenting with small examples and observing the execution order.`,
        code: `console.log('First');

setTimeout(() => {
  console.log('Third');
}, 0);

Promise.resolve().then(() => {
  console.log('Second');
});

console.log('Last');

// First
// Last
// Second
// Third`,
      },
      {
        title: 'How to practise JavaScript effectively',
        content: `Watching tutorials can introduce new concepts, but understanding grows when you apply those concepts independently.

Build small features such as a search filter, calculator, form validation system, task manager or shopping cart.

When you encounter an unfamiliar method, try to understand what it accepts, what it returns and whether it changes the original data.

Use browser developer tools to inspect values and investigate errors. Practise tracing a value through a function, predicting the output before running code, and writing small tests for edge cases.

Most importantly, practise explaining your code in your own words. If you can describe why a solution works, you are moving beyond memorization towards genuine understanding.`,
      },
      {
        title: 'Final thoughts and practical challenge',
        content: `JavaScript is much more than a language used to make buttons clickable. It provides the logic behind modern interactive applications.

Understanding variables, functions, arrays, objects, scope and asynchronous programming creates a strong foundation for frontend development.

PRACTICAL CHALLENGE:

Create a small project dashboard.

1. Store project information in an array of objects.
2. Use map() to display all projects.
3. Use filter() to show completed projects.
4. Use find() to locate one project.
5. Add a search input to filter projects by title.
6. Display a message when no results are found.

Try completing the challenge without copying a tutorial.

The objective is not to write the shortest code. It is to understand the solution you create.`,
      },
    ],
  },

  {
    id: 3,
    category: 'DEVELOPMENT',
    date: 'NOV 20, 2026',
    readTime: '10 MIN READ',
    title: 'My Journey Into Frontend Development',
    excerpt:
      'A personal story about discovering web development, building projects, navigating unexpected interruptions and continuing to grow as a developer.',
    sections: [
      {
        title: 'It started with computer science',
        content: `My journey into frontend development did not begin with a perfect plan or a clear picture of what my future career would look like.

It started with my interest in computer science.

During my B.Sc. Computer Science studies, I began exploring how technology works and how software can be used to solve problems. I knew that I wanted to build something of my own, but I was still discovering which area of development interested me the most.

Web development gradually caught my attention.

There was something exciting about the idea that a person could write code and turn it into a website that someone else could actually use.

That became the beginning of my journey.`,
      },
      {
        title: 'My first experience with HTML and CSS',
        content: `HTML was one of the first technologies that helped me understand how websites are structured.

At first, it was about learning elements, headings, paragraphs, images, links and forms. These concepts seemed simple individually, but together they made it possible to create an actual webpage.

Then came CSS.

That was when web development became more creative for me. I started learning about colours, spacing, typography, layouts and responsive design.

I realized that writing code was not only about making something function. It was also about thinking carefully about how people would experience the result.

I enjoyed experimenting with designs, changing styles and watching a plain structure turn into something more polished.

Gradually, I became more comfortable with HTML and CSS, and I started understanding how the different parts of a webpage worked together.`,
      },
      {
        title: 'JavaScript changed the way I thought',
        content: `Static webpages were interesting, but I wanted to understand how websites could respond to users.

That curiosity led me to JavaScript.

This was a different kind of learning experience. HTML and CSS helped me build structure and presentation, while JavaScript introduced programming logic.

Variables, functions, conditions, arrays, objects and DOM manipulation required me to think differently.

Sometimes a concept that looked easy in a tutorial became difficult when I tried to solve a problem independently.

I learned that understanding an example and creating a solution from scratch are two different skills.

Instead of treating every error as a failure, I started seeing debugging as part of the process.

JavaScript taught me that frontend development requires both creativity and logical thinking.`,
      },
      {
        title: 'Discovering React and a new way to build',
        content: `Around July 2026, I began exploring React and developing a deeper understanding of frontend development.

React introduced me to a more structured approach to building user interfaces.

Components helped me divide a page into reusable pieces. Props allowed information to move between components. State made interfaces interactive.

At first, these ideas required some adjustment. I had to understand that React was not simply another way to write HTML. It encouraged me to think about interfaces in terms of data, components and state changes.

I started exploring hooks such as useState, useEffect, useContext and useReducer.

The more I practised, the more I understood why component-based development is useful for larger applications.

I also realized that learning a framework does not replace learning JavaScript. A strong understanding of the fundamentals makes React much easier to understand.

Around September, Python also became part of my broader full-stack learning journey, opening another area of development for me to explore.`,
      },
      {
        title: 'Turning what I learned into projects',
        content: `At some point, I understood that learning concepts was not enough. I needed to build things and face the problems that appeared during implementation.

One of my projects was BookVault, a book management application built using JavaScript.

It involved working with data, implementing CRUD operations, handling search and filtering, and using Local Storage for login-related functionality. I also worked with JSON Server during development.

The project helped me understand how individual JavaScript concepts connect inside a working application.

Later, I worked on WebCanvas Studio, a React and Vite project. I explored Context API and useReducer to manage application state.

I also contributed to a College Management System as part of an academic team project. Although it was a group project, I handled the styling individually.

Each project taught me something different. I learned that the difficult part is not always writing a component. Sometimes it is deciding how the application should be organized, how information should flow and how different features should work together.`,
      },
      {
        title: 'An unexpected pause, not the end',
        content: `My learning journey has not followed a perfectly straight path.

On September 3, 2026, my father's accident brought unexpected responsibilities into my life. My priorities changed, and I had to step away from my regular learning and coding routine to give more attention to my family.

It was not a break caused by failure, a lack of interest or a decision to give up development. It was a difficult personal circumstance that required my attention.

Naturally, having less time to practise affected my learning rhythm. Returning to code after an interruption can feel challenging, especially when familiar concepts need revision.

But my interest in technology never disappeared.

Even with limited time and changing circumstances, I continued searching for learning opportunities, exploring development concepts and practising whenever possible.

I have come to understand that a learning journey does not always move at the same pace. Sometimes life changes the schedule, and progress looks different for a while.

That does not mean the journey has ended.`,
      },
      {
        title: 'Learning in the age of AI',
        content: `AI coding tools have changed how many developers approach their work.

They can explain errors, suggest implementations, generate examples and help explore unfamiliar concepts. I also see value in using these tools while learning.

But there is something important I do not want to lose: the ability to understand my own code.

Getting a working solution is not the same as knowing why it works.

I want to become comfortable reading generated code, questioning it, testing it and modifying it when necessary.

My goal is not to avoid AI tools. It is to use them as assistants while continuing to develop my own reasoning and technical skills.

For me, that balance is important if I want to become an independent developer.`,
      },
      {
        title: 'Where I am today',
        content: `Today, I see myself as a frontend developer in progress.

I have learned HTML, CSS, JavaScript and React. I have worked on personal and academic projects, explored application state and built interfaces that connect different features.

I still have things to improve. I want to become stronger at JavaScript, understand React more deeply, write cleaner code and become more independent when solving technical problems.

I also want to keep building projects that demonstrate practical skills rather than simply collecting certificates or following tutorials.

I am still actively searching for opportunities to learn, practising whenever I can and exploring ways to improve my technical skills.

I may not always have the same amount of time to dedicate to coding, but I have not stopped wanting to grow.

There is still a lot to learn, but I am no longer at the same starting point where I began.`,
      },
      {
        title: 'The journey is still being written',
        content: `I am sharing this journey because I know that learning development can sometimes feel overwhelming.

You might start with HTML and wonder how people build complete applications. You might learn JavaScript and struggle with logic. You might start React and feel confused by components and state.

That does not mean you are not capable of becoming a developer.

Progress is not always visible every day. Sometimes it happens when you finally understand an old concept, solve an error without help or build something that previously seemed difficult.

I am still learning, still experimenting and still discovering what I can build.

This journal is one way of documenting that process.

I do not want to present myself as someone who already knows everything. I want to share the experience of becoming better, one project and one lesson at a time.

My journey has had interruptions, but it has not lost its direction.

And this is only one chapter of the journey.`,
      },
    ],
  },

  {
    id: 4,
    category: 'CSS',
    date: 'NOV 08, 2026',
    readTime: '9 MIN READ',
    title: 'The Art of Building Responsive Layouts',
    excerpt:
      'A practical guide to responsive web design, from flexible layouts and CSS Grid to mobile-first thinking and real-device testing.',
    sections: [
      {
        title: 'Responsive design is more than screen size',
        content: `A website can look impressive on a desktop and still be frustrating to use on a mobile device.

Text might become too small, navigation might overflow, cards might become too narrow and buttons might be difficult to tap.

Responsive design addresses these problems by allowing a layout to adapt to the available space, input method and viewing conditions. It is not simply about shrinking a desktop website. It is about choosing an appropriate layout while keeping content and interactions usable.

A responsive page also needs the viewport meta tag so mobile browsers use the device's layout width rather than rendering the page as a scaled-down desktop canvas. Include \`<meta name="viewport" content="width=device-width, initial-scale=1">\` inside the document head.

A good responsive interface keeps content readable, controls usable and information properly organized across devices. It should also preserve semantic structure, keyboard access and visible focus indicators rather than relying on visual layout alone.`,
      },
      {
        title: 'Start with a flexible foundation',
        content: `A common mistake is building a page around fixed dimensions.

For example, a container with a width of 1200px may look correct on a large screen but overflow on a smaller device.

Flexible units such as percentages, rem, vw and max-width can help create layouts that adapt more naturally.

CSS functions such as min(), max() and clamp() provide even more control.

Instead of setting a heading to one fixed size, clamp() can allow it to grow within a defined range.

The objective is to give elements room to adapt while maintaining sensible limits. Use min-width: 0 on flex or grid children when long content needs permission to shrink, and avoid fixed widths unless the design genuinely requires them.`,
        code: `.container {
  width: min(90%, 1200px);
  margin-inline: auto;
}

.heading {
  font-size: clamp(2rem, 5vw, 4.5rem);
}

.card {
  width: 100%;
  max-width: 420px;
  min-width: 0;
}`,
      },
      {
        title: 'Using Flexbox for flexible layouts',
        content: `Flexbox is a one-dimensional layout system. It is especially useful when arranging items in a row or column.

For example, a navigation bar might place a logo on the left and navigation links on the right.

The justify-content property controls alignment along the main axis, while align-items controls alignment along the cross axis.

Flexbox also supports wrapping, which is useful when items cannot fit on one line. The main axis follows flex-direction: it is horizontal for row and vertical for column. The cross axis runs perpendicular to it. This means justify-content aligns along the main axis and align-items along the cross axis, even when the direction changes.

Understanding these axes makes Flexbox much easier to work with.`,
        code: `.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}`,
      },
      {
        title: 'Using CSS Grid for page structure',
        content: `CSS Grid is a two-dimensional layout system. It allows us to manage rows and columns together.

Grid is particularly useful for article collections, product galleries, dashboards and complex page layouts.

The repeat() and minmax() functions make it possible to create flexible columns without manually defining every screen size.

The auto-fit keyword lets the browser fit as many tracks as the available space allows. With minmax(), each track can have a minimum and flexible maximum. For layouts that must also work below the nominal card minimum, use minmax(min(100%, 250px), 1fr) so a single column can shrink to the container width instead of causing overflow.

This can reduce the number of media queries required for straightforward card layouts.`,
        code: `.article-grid {
  display: grid;
  grid-template-columns:
    repeat(auto-fit, minmax(min(100%, 250px), 1fr));
  gap: 24px;
}`,
      },
      {
        title: 'Media queries and responsive breakpoints',
        content: `Sometimes a layout needs more than flexible sizing. Navigation may need to change direction, columns may need to stack, or spacing may need to become smaller.

Media queries allow us to apply styles when certain conditions are met.

A breakpoint should be selected based on the content rather than simply following a fixed list of device models.

For example, if a navigation bar becomes crowded at a particular width, that is a useful signal that its layout needs to change.

Avoid creating too many breakpoints. A well-designed flexible layout often needs fewer adjustments than a rigid one. Test the content at intermediate widths as well as common phone and desktop sizes; a layout can break between the device presets shown in developer tools.`,
        code: `.layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

@media (max-width: 700px) {
  .layout {
    grid-template-columns: 1fr;
  }
}`,
      },
      {
        title: 'Mobile-first development',
        content: `Mobile-first design means starting with the smaller layout and progressively enhancing it for larger screens.

This encourages us to focus on the most important content and interactions first.

A mobile layout might use a single column, compact navigation and simplified spacing. As more screen space becomes available, additional columns and larger layouts can be introduced.

In CSS, mobile-first styles are usually written as the base rules, with min-width media queries adding enhancements for larger viewports. Mobile-first development is not a rule every project must follow, but it is a useful strategy for many content-focused and application interfaces.`,
      },
      {
        title: 'Common responsive design problems',
        content: `Horizontal scrolling is one of the most common issues. It often happens when an element has a fixed width or an image exceeds its container.

Images should generally use max-width: 100% and height: auto. For decorative or cropped card images, object-fit: cover can control how the image fills its frame; provide meaningful alt text for informative images. Long URLs, unbroken words and wide tables can also force overflow, so use appropriate wrapping or a deliberate horizontal scroll region for genuinely wide data.

Another problem is text that becomes difficult to read because its size or line length is unsuitable.

Navigation is another important area. A menu that works with a mouse on desktop might be difficult to use with touch controls on mobile.

Also check for buttons that are too close together, overlapping elements, excessive empty space and forms that are difficult to complete.

Responsive design requires testing, not just writing media queries. Also check keyboard navigation, focus visibility, readable contrast, touch target spacing and whether zooming remains usable.`,
      },
      {
        title: 'Testing and practical challenge',
        content: `Browser developer tools allow us to preview different viewport sizes, inspect elements and investigate layout problems.

However, a responsive preview is not a complete replacement for testing on real devices.

Check whether the page can scroll naturally, whether text remains readable and whether interactive elements are comfortable to use.

PRACTICAL CHALLENGE:

Build a responsive portfolio project section.

1. Display three project cards using CSS Grid.
2. Make the cards adapt automatically to available width.
3. Use Flexbox to align each card's content.
4. Add a mobile breakpoint.
5. Test for horizontal overflow.
6. Check navigation and buttons on a narrow screen.

A good responsive layout should feel intentional at every size, not like a desktop page that has simply been squeezed.`,
      },
    ],
  },

  {
    id: 5,
    category: 'DEVELOPMENT',
    date: 'NOV 04, 2026',
    readTime: '9 MIN READ',
    title: 'What I Learned From Building My First Projects',
    excerpt:
      'Real lessons from building applications, working with data, debugging problems and turning development concepts into practical experience.',
    sections: [
      {
        title: 'The difference between learning and building',
        content: `When we learn web development, tutorials often show us a clear sequence of steps. The instructor writes code, explains the result and moves to the next concept.

But building an application independently feels different.

Suddenly, there are decisions to make. What should the page contain? Where should the data come from? How should the components communicate? What happens when something goes wrong?

Projects expose the gaps that tutorials sometimes hide. A feature that looks simple on screen may require decisions about data shape, state, validation, error handling and empty states.

That is why I consider practical projects an important part of learning. They force us to connect concepts instead of treating every topic as a separate lesson. They also create something concrete that can be tested, reviewed and explained.`,
      },
      {
        title: 'BookVault: Working with JavaScript and data',
        content: `BookVault was one of the projects that helped me understand how JavaScript concepts work together in an application.

It was a book management application built using JavaScript rather than React.

I worked with features such as creating, reading, updating and deleting records. These operations are commonly called CRUD.

I also explored search, filtering, dashboard statistics and Local Storage for login-related functionality. JSON Server was used during development to provide a local API.

This project helped me understand that application development involves more than displaying information.

Data must be organized, updated and presented correctly. User interactions need to produce predictable results, and different features must work together.

It also gave me a better appreciation for JavaScript array methods and data handling. One lesson was that the interface should reflect the actual data state: after an item is edited or deleted, the displayed list and any summary values need to stay consistent. Search and filters should also handle an empty query and a no-match result deliberately.

Using Local Storage for login-related functionality was a learning exercise, not a substitute for secure server-side authentication. Browser storage is accessible to client-side scripts and should never be treated as a place for passwords or sensitive credentials.`,
      },
      {
        title: 'WebCanvas Studio: Understanding React architecture',
        content: `WebCanvas Studio gave me an opportunity to apply React concepts in a more structured application.

Working with React and Vite introduced me to component-based development and a more organized way of building interfaces.

I explored Context API and useReducer for managing application state.

useReducer was particularly interesting because it helped me understand how state transitions can be organized around actions.

Instead of scattering related state updates throughout the application, a reducer can centralize the logic that determines how state changes.

The project also reinforced the importance of reusable components and keeping the interface consistent. Context can make shared state available to components without passing props through every intermediate level. useReducer is useful when state transitions are related or depend on explicit actions; it is not automatically necessary for every small piece of state.

It helped me connect individual React concepts with the architecture of a larger application and consider how an action in one part of the interface should affect the rest of the application.`,
      },
      {
        title: 'A team project and individual responsibility',
        content: `I also worked on a College Management System as part of an academic team project.

The project involved technologies such as HTML, CSS, JavaScript, PHP and MySQL.

Although the application was developed as a group project, I handled the styling individually.

This gave me an opportunity to focus on the presentation and visual consistency of the interface while working within a larger shared project.

It also reminded me that software development often involves collaboration. Different people can contribute different responsibilities towards one shared result.

Being responsible for one part of a project still requires understanding how that part fits into the overall application. Styling also involves more than choosing colours: layout consistency, spacing, typography, responsive behaviour and clear visual hierarchy all affect whether the interface feels coherent.`,
      },
      {
        title: 'Debugging is a development skill',
        content: `One of the most important lessons from building projects is that errors are normal.

A button might not trigger the expected action. A filter might return the wrong results. A component might display outdated information. An API request might fail.

The first reaction should not be to rewrite everything.

Start by identifying the actual problem. Read the error message, inspect the relevant values and narrow down the part of the application responsible.

Browser developer tools and console messages can provide useful information.

Change one thing at a time and test the result. Once a fix works, check the nearby behaviour that could have been affected and, when practical, keep a small reproducible test case.

Debugging becomes easier when we approach it systematically instead of randomly changing code until something appears to work.`,
      },
      {
        title: 'The importance of application structure',
        content: `A project can work correctly and still be difficult to maintain.

For example, placing all application logic, data and interface elements inside one large component may be convenient at first. But as more features are added, the code becomes harder to navigate.

Separating meaningful components, using clear names and organizing responsibilities helps prevent this problem.

It is also important to understand where application state belongs. State used by several components may need to be managed by a shared parent or an appropriate state management solution.

Good structure is not about following complicated architecture patterns for every small project. It is about making reasonable decisions that support the current needs of the application. Keep data, presentation and side effects understandable; extract a component when it has a clear responsibility or meaningful reuse, not simply to reduce line count.

A project structure should help someone locate the code they need. Consistent file names, focused components and a useful README are small choices that make a repository easier to work with.`,
      },
      {
        title: 'What I would do differently next time',
        content: `If I started these projects again, I would spend more time planning the features before writing code.

I would identify the main user actions, define the data structure and decide which components need to be reusable.

I would also test features individually instead of waiting until the end to discover several problems at once.

Another important improvement would be documenting decisions and keeping the project repository organized.

Most importantly, I would make sure I understand every major part of the code rather than focusing only on getting a working result. I would also write down the expected behaviour for each feature, test edge cases such as empty data and invalid input, and commit working milestones so changes are easier to track.`,
      },
      {
        title: 'Final thoughts',
        content: `My first projects were not perfect, and that is exactly why they were useful.

They helped me move beyond isolated exercises and understand the practical decisions involved in building software.

I learned about data, application state, debugging, reusable interfaces and the importance of structure.

A project does not need to be enormous to teach valuable lessons. A small application that you understand deeply can be more useful than a large application you cannot explain.

Build something. Make mistakes. Fix them. Review your work.

Every completed project gives you another opportunity to become a better developer.`,
      },
    ],
  },

  {
    id: 6,
    category: 'DEVELOPMENT',
    date: 'OCT 29, 2026',
    readTime: '9 MIN READ',
    title: 'Learning to Think Like a Developer',
    excerpt:
      'Develop problem-solving skills, understand unfamiliar code, debug independently and build the engineering judgement needed beyond writing syntax.',
    sections: [
      {
        title: 'A developer does more than write code',
        content: `When someone begins learning programming, it is natural to focus on syntax.

We learn variables, functions, conditions, loops and different methods. We practise writing code that produces the expected result.

But professional development involves much more than remembering syntax.

Developers need to understand problems, make decisions, investigate unexpected behaviour and communicate solutions.

Knowing how to write code is important. Knowing what to build, why a particular approach makes sense and how to improve it is equally important.`,
      },
      {
        title: 'Understand the problem before writing code',
        content: `One of the most useful habits is to pause before opening the code editor.

Suppose you need to build a search feature for an article collection.

Before writing the implementation, ask a few questions.

What information should be searchable? Should the search match titles, descriptions or both? Should matching ignore uppercase and lowercase letters? What should happen when there are no results?

These questions help define the expected behaviour.

Once the problem is clear, divide it into smaller steps.

A developer who understands the requirements can choose a more appropriate implementation and avoid unnecessary complexity. These decisions can be written as acceptance criteria: short, observable statements describing what must be true for the feature to be considered complete. For example, a search should match without case sensitivity and should show a clear empty state when nothing matches.`,
      },
      {
        title: 'Break large problems into smaller tasks',
        content: `Large problems can feel intimidating because they contain many smaller problems hidden inside them.

Breaking a feature into smaller tasks makes it easier to understand and test.

For example, a project dashboard could be divided into:

1. Create the project data structure.
2. Display the projects.
3. Add a search input.
4. Implement filtering.
5. Display project statistics.
6. Handle empty results.

Each step has a clear purpose and can be tested independently. A small checklist also makes progress visible and reduces the temptation to solve every part at once.

This approach also makes debugging easier because the possible source of a problem is more limited.`,
      },
      {
        title: 'Read code instead of only writing it',
        content: `Reading unfamiliar code is an important development skill.

When you open a component written by someone else, try to understand its structure before changing anything.

Identify the inputs, state variables, event handlers and rendered elements.

Follow how information moves between components.

When you see an unfamiliar method, investigate what it does and why it is being used.

A useful exercise is to predict the output of a small code example before running it.

This develops the ability to reason about code instead of depending entirely on trial and error. A practical reading routine is to start at the component entry point, identify its props and state, follow event handlers, and then trace the data used to render the interface. Make a small prediction, run the code and compare the result with your expectation.`,
      },
      {
        title: 'Debugging with a systematic approach',
        content: `Debugging is not simply searching for a solution online. It is the process of identifying why actual behaviour differs from expected behaviour.

Start by reproducing the problem.

Read the error message and identify the relevant file and line.

Inspect variable values using console.log or browser developer tools.

Reduce the problem to the smallest example that still produces the issue.

Then make one focused change and test again.

Avoid changing several unrelated parts at once. Otherwise, even if the issue disappears, you may not understand which change fixed it.

Developers become more effective at debugging through repeated practice and careful observation. A useful sequence is: reproduce the issue, state the expected and actual behaviour, form one hypothesis, run a focused check, apply one change and verify the fix. This is more reliable than making several guesses at once.`,
      },
      {
        title: 'Use AI tools without losing your reasoning',
        content: `AI coding assistants can explain unfamiliar concepts, suggest solutions, generate examples and help investigate errors.

They can be useful learning tools, especially when exploring a technology for the first time.

However, accepting generated code without understanding it creates a problem.

You might have an application that works but struggle to modify it when the requirements change.

A better approach is to treat AI as a collaborator.

Ask it to explain unfamiliar code. Check whether the proposed solution fits your requirements. Test the implementation and experiment with small changes.

Try to recreate important parts independently after understanding them.

The objective is to become more capable with these tools, not dependent on them. A practical AI-assisted workflow is to ask for an explanation or alternative, inspect the proposed code, verify it against official documentation where needed, run it, test edge cases and make sure you can explain every important line before keeping it. Never paste secrets, private keys or sensitive user data into an AI prompt.`,
      },
      {
        title: 'Develop habits that improve technical judgement',
        content: `Technical judgement develops gradually through experience.

Some useful habits include choosing clear variable names, keeping functions focused, avoiding unnecessary duplication and testing important behaviour.

Before introducing a new library or abstraction, consider whether the problem actually needs it.

Before copying a solution, understand its trade-offs.

When something works, ask whether the implementation is also readable and maintainable.

There is rarely only one possible solution to a programming problem. Learning to compare alternatives is part of becoming an experienced developer. Consider correctness, readability, accessibility, performance, security and the cost of maintaining the solution. The simplest solution that meets the requirements is often the best starting point.`,
      },
      {
        title: 'A practical exercise in developer thinking',
        content: `Try approaching a simple task without immediately writing code.

Imagine building a task management application.

First, describe what the user should be able to do.

Then define what information each task needs. Think about how tasks will be added, updated and removed.

Identify the components required to display the interface.

Decide where the task data should be stored.

Consider what happens when the user has no tasks or enters an empty title.

Only after answering these questions should you start implementing the feature.

Before coding, write down a few acceptance criteria: a task can be added with a valid title; an existing task can be marked complete; a task can be deleted; blank titles are rejected; and an empty task list has a helpful message. Then sketch the data shape and the smallest sequence of steps that satisfies those criteria.

This exercise trains you to think about requirements, data, behaviour and edge cases before focusing on syntax.`,
      },
      {
        title: 'Final thoughts: Think, build and improve',
        content: `Becoming a developer is not about knowing every programming language or memorizing every framework API.

It is about developing the ability to understand problems and create useful solutions.

There will always be unfamiliar tools, new concepts and unexpected errors. The important skill is knowing how to approach them.

Keep strengthening your fundamentals. Build projects that challenge you. Read code written by others. Practise debugging and learn to explain your decisions.

Most importantly, give yourself time to develop these skills.

The goal is not just to become someone who can write code. It is to become someone who understands the code they write and can use it to solve real problems.`,
      },
    ],
  },
];

/* =========================================
   REUSABLE COMPONENTS
========================================= */

function ArticleCard({ article, index, onOpen }) {
  return (
    <button
      type="button"
      className={`article-card editorial-card card-${index + 1}`}
      onClick={() => onOpen(article)}
      aria-label={`Read ${article.title}`}
    >
      <div className="card-topline">
        <span>{article.category}</span>
        <span>{article.readTime}</span>
      </div>

      <div className="card-body">
        <span className="card-date">{article.date}</span>
        <h3>{article.title}</h3>
        <p>{article.excerpt}</p>
      </div>

      <div className="card-bottom">
        <span>READ ARTICLE</span>
        <span className="card-arrow" aria-hidden="true">
          ↗
        </span>
      </div>
    </button>
  );
}

function renderInlineContent(text) {
  return text.split(/(`[^`]+`)/g).map((part, index) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={index}>{part.slice(1, -1)}</code>;
    }

    return part;
  });
}

function ArticleSection({ section, index }) {
  const paragraphs = section.content.split('\n\n');

  return (
    <section id={`article-section-${index}`} className="article-section">
      <span className="section-number">
        CHAPTER {String(index + 1).padStart(2, '0')}
      </span>

      <h2>{section.title}</h2>

      {paragraphs.map((paragraph, paragraphIndex) => {
        const lines = paragraph
          .split('\n')
          .map((line) => line.trim())
          .filter(Boolean);
        const isOrderedList =
          lines.length > 0 && lines.every((line) => /^\d+[.)]\s+/.test(line));
        const isBulletList =
          lines.length > 0 && lines.every((line) => /^[•*-]\s+/.test(line));

        if (isOrderedList) {
          return (
            <ol key={paragraphIndex}>
              {lines.map((line, lineIndex) => (
                <li key={lineIndex}>
                  {renderInlineContent(line.replace(/^\d+[.)]\s+/, ''))}
                </li>
              ))}
            </ol>
          );
        }

        if (isBulletList) {
          return (
            <ul key={paragraphIndex}>
              {lines.map((line, lineIndex) => (
                <li key={lineIndex}>
                  {renderInlineContent(line.replace(/^[•*-]\s+/, ''))}
                </li>
              ))}
            </ul>
          );
        }

        return <p key={paragraphIndex}>{renderInlineContent(paragraph)}</p>;
      })}

      {section.code && (
        <pre>
          <code>{section.code}</code>
        </pre>
      )}
    </section>
  );
}

/* =========================================
   MAIN APPLICATION
========================================= */

function App() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [readingProgress, setReadingProgress] = useState(0);

  const featuredArticle = articles.find((article) => article.featured);

  const latestArticles = articles.filter((article) => !article.featured);

  const categories = ['ALL', 'REACT', 'JAVASCRIPT', 'CSS', 'DEVELOPMENT'];

  /* SEARCH AND FILTER */

  const filteredArticles = articles.filter((article) => {
    const query = searchQuery.trim().toLowerCase();

    const searchableContent = [
      article.title,
      article.excerpt,
      article.category,
      ...article.sections.map((section) => section.title),
      ...article.sections.map((section) => section.content),
      ...article.sections.map((section) => section.code || ''),
    ]
      .join(' ')
      .toLowerCase();

    const matchesSearch = searchableContent.includes(query);

    // Keep the featured story separate in the default ALL view.
    // Include it in specific topic/category results so no category is empty.
    const isVisibleInAllView = activeCategory !== 'ALL' || !article.featured;

    const frontendCategories = ['REACT', 'JAVASCRIPT', 'CSS', 'DEVELOPMENT'];

    const matchesCategory =
      activeCategory === 'ALL' ||
      (activeCategory === 'FRONTEND'
        ? frontendCategories.includes(article.category)
        : article.category === activeCategory);

    return matchesSearch && isVisibleInAllView && matchesCategory;
  });

  /* READING PROGRESS */

  useEffect(() => {
    if (!selectedArticle) {
      setReadingProgress(0);
      return;
    }

    const updateProgress = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;

      setReadingProgress(Math.min(100, Math.max(0, progress)));
    };

    updateProgress();

    window.addEventListener('scroll', updateProgress);
    window.addEventListener('resize', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, [selectedArticle]);

  /* SCROLL TO TOP WHEN PAGE CHANGES */

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  }, [selectedArticle]);

  /* NAVIGATION FUNCTIONS */

  const openArticle = (article) => {
    setSelectedArticle(article);
    setReadingProgress(0);
  };

  const goHome = () => {
    setSelectedArticle(null);
  };
  const exploreMoreArticles = () => {
    setSelectedArticle(null);

    window.setTimeout(() => {
      document.getElementById('latest-articles')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 100);
  };

  const scrollToSection = (index) => {
    document.getElementById(`article-section-${index}`)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const scrollToArticles = () => {
    document.getElementById('latest-articles')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const selectTopic = (category) => {
    setActiveCategory(category);
    setSearchQuery('');

    document.getElementById('latest-articles')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  /* =========================================
     ARTICLE READING PAGE
  ========================================= */

  const renderArticlePage = () => (
    <main className="article-page">
      <button type="button" className="back-link" onClick={goHome}>
        ← BACK TO JOURNAL
      </button>

      <header className="article-header">
        <span className="eyebrow">
          {selectedArticle.category} / {selectedArticle.date}
        </span>

        <h1>{selectedArticle.title}</h1>

        <p className="article-description">{selectedArticle.excerpt}</p>

        <div className="reading-info">
          <span>BY BABY SANA FATHIMA</span>
          <span>{selectedArticle.readTime}</span>
        </div>
      </header>

      <nav className="table-of-contents" aria-label="Article table of contents">
        <span className="eyebrow">IN THIS ARTICLE</span>

        {selectedArticle.sections.map((section, index) => (
          <button
            type="button"
            key={section.title}
            onClick={() => scrollToSection(index)}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            {section.title}
          </button>
        ))}
      </nav>

      <div className="article-content">
        {selectedArticle.sections.map((section, index) => (
          <ArticleSection key={section.title} section={section} index={index} />
        ))}
      </div>

      <div className="article-end">
        <span>—</span>
        <p>Thanks for reading. Keep learning, keep building.</p>

        <button type="button" onClick={exploreMoreArticles}>
          EXPLORE MORE ARTICLES ↗
        </button>
      </div>
    </main>
  );

  /* =========================================
     HOMEPAGE
  ========================================= */

  const renderHomePage = () => (
    <main>
      {/* HERO */}

      <section className="hero editorial-hero" id="home">
        <div className="hero-layout">
          <div className="hero-copy">
            <div className="hero-label">
              <span className="status-dot" />
              INDEPENDENT DEVELOPER JOURNAL
            </div>

            <p className="hero-edition">
              THE DIGITAL NOTEBOOK · VOL. 01 / 2026
            </p>

            <h1>
              Ideas.
              <br />
              Code.
              <br />
              <em>Experiments.</em>
            </h1>

            <p className="hero-description">
              A space for exploring the web, understanding technology and
              documenting the process of becoming a better developer. Real
              lessons, practical experiments and thoughts from behind the
              screen.
            </p>

            <button
              type="button"
              className="hero-cta"
              onClick={scrollToArticles}
            >
              EXPLORE THE JOURNAL <span>↗</span>
            </button>
          </div>

          <div className="hero-art" aria-label="Decorative code illustration">
            <div className="hero-art-top">
              <span>CREATIVE PROCESS</span>
              <span>001 — 026</span>
            </div>

            <div className="hero-code" aria-label="Code example">
              <div className="hero-code-line">
                <span className="code-muted">01</span>
                <span>
                  <span className="code-purple">const</span> idea ={' '}
                  <span className="code-green">'curiosity'</span>;
                </span>
              </div>

              <div className="hero-code-line">
                <span className="code-muted">02</span>
                <span>
                  <span className="code-purple">while</span> (learning) {'{'}
                </span>
              </div>

              <div className="hero-code-line">
                <span className="code-muted">03</span>
                <span>&nbsp;&nbsp;build();</span>
              </div>

              <div className="hero-code-line">
                <span className="code-muted">04</span>
                <span>&nbsp;&nbsp;experiment();</span>
              </div>

              <div className="hero-code-line">
                <span className="code-muted">05</span>
                <span>&nbsp;&nbsp;improve();</span>
              </div>

              <div className="hero-code-line">
                <span className="code-muted">06</span>
                <span>{'}'}</span>
              </div>
            </div>

            <div className="hero-art-bottom">
              <span>THINK · BUILD · REPEAT</span>
              <span>✳</span>
            </div>

            <div className="hero-art-stamp">
              S<span>.</span>D
            </div>
          </div>
        </div>

        <div className="hero-index">
          <span>EST. 2026</span>
          <span>ISSUE NO. 001</span>
          <span>MADE WITH CURIOSITY</span>
        </div>
      </section>

      {/* FEATURED ARTICLE */}

      <section className="featured-section">
        <div className="section-topline">
          <span className="eyebrow">01 / EDITOR'S PICK</span>
          <span className="eyebrow">FEATURED STORY</span>
        </div>

        <button
          type="button"
          className="featured-card"
          onClick={() => openArticle(featuredArticle)}
        >
          <div className="featured-visual">
            <span className="featured-symbol">{'</>'}</span>
            <span className="featured-visual-caption">
              BUILD · LEARN · REPEAT
            </span>
          </div>

          <div className="featured-content">
            <span className="eyebrow">
              {featuredArticle.category} / {featuredArticle.readTime}
            </span>

            <h2>{featuredArticle.title}</h2>

            <p>{featuredArticle.excerpt}</p>

            <span className="featured-link">
              READ THE STORY <span>↗</span>
            </span>
          </div>
        </button>
      </section>

      {/* LATEST ARTICLES */}

      <section
        className="articles-section publication-section"
        id="latest-articles"
      >
        <div className="section-heading">
          <div>
            <span className="eyebrow">02 / THE LIBRARY</span>
            <h2>
              Latest <em>stories.</em>
            </h2>
          </div>

          <p>
            Technical notes, practical lessons and observations from the
            developer's desk.
          </p>
        </div>

        <div className="article-controls">
          <input
            type="search"
            aria-label="Search articles"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />

          <div className="category-filters">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                className={activeCategory === category ? 'active' : ''}
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="article-grid">
          {filteredArticles.map((article, index) => (
            <ArticleCard
              key={article.id}
              article={article}
              index={index}
              onOpen={openArticle}
            />
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="no-results">
            <h3>No stories found.</h3>
            <p>Try another keyword or category.</p>
          </div>
        )}
      </section>

      {/* TOPICS */}

      <section className="topics-section">
        <span className="eyebrow">03 / EXPLORE BY TOPIC</span>

        <h2>
          A little bit of <em>everything.</em>
        </h2>

        <div className="topics-list">
          {[
            ['01', 'Frontend Development', 'FRONTEND'],
            ['02', 'JavaScript & Logic', 'JAVASCRIPT'],
            ['03', 'Design & CSS', 'CSS'],
            ['04', 'Learning in Public', 'MY JOURNEY'],
            ['05', 'Developer Life', 'CAREER'],
          ].map(([number, label, category]) => (
            <button
              type="button"
              key={number}
              onClick={() => selectTopic(category)}
            >
              <span>{number}</span>
              <strong>{label}</strong>
              <span className="topic-arrow">↗</span>
            </button>
          ))}
        </div>
      </section>

      {/* ABOUT */}

      <section className="about-section editorial-about" id="about">
        <div className="about-heading">
          <span className="eyebrow">04 / THE PERSON BEHIND THE NOTES</span>

          <h2>
            Hello, I'm <em>Sana.</em>
          </h2>
        </div>

        <div className="about-content">
          <p>
            I'm a Computer Science graduate with a growing passion for frontend
            development and creating meaningful digital experiences. I enjoy
            exploring how design, technology and problem-solving come together
            to build useful things for the web.
          </p>

          <p>
            My development journey includes working with HTML, CSS, JavaScript
            and React. Through projects like BookVault and WebCanvas Studio,
            I've explored interactive interfaces, CRUD operations, application
            state and reusable components.
          </p>

          <p>
            I'm particularly interested in writing cleaner code, understanding
            how applications work behind the scenes and becoming a more
            independent problem-solver. I believe the best way to learn
            development is to keep experimenting, building and improving.
          </p>

          <a
            href="https://github.com/babysanafathima"
            target="_blank"
            rel="noreferrer"
          >
            EXPLORE MY PROJECTS ON GITHUB ↗
          </a>
        </div>
      </section>

      {/* CLOSING NOTE */}

      <section className="closing-note">
        <span className="eyebrow">A NOTE BEFORE YOU LEAVE · 01</span>

        <h2>
          Still learning.
          <br />
          <em>Still building.</em>
        </h2>

        <p>
          Every project teaches something. Every mistake opens a new path. This
          journal is a collection of lessons, experiments, and ideas gathered
          along the way.
        </p>

        <p>
          If you're building something of your own, keep going. The best work
          often begins with curiosity and grows through consistency.
        </p>
        <span className="closing-signature">— SANA.DEV JOURNAL</span>
      </section>
    </main>
  );

  /* =========================================
     APPLICATION OUTPUT
  ========================================= */

  return (
    <div className="journal">
      {selectedArticle && (
        <div
          className="reading-progress-track"
          role="progressbar"
          aria-label="Article reading progress"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={Math.round(readingProgress)}
        >
          <div
            className="reading-progress-fill"
            style={{ width: `${readingProgress}%` }}
          />
        </div>
      )}

      <header className="navbar">
        <a
          href="#home"
          className="logo"
          onClick={(event) => {
            event.preventDefault();
            goHome();
          }}
        >
          <span className="logo-mark">S</span>

          <span className="logo-copy">
            <strong>
              SANA<span className="logo-dot">.</span>DEV
            </strong>
            <small>THE DEVELOPER JOURNAL</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <button type="button" onClick={goHome}>
            HOME
          </button>

          <button
            type="button"
            onClick={() => {
              goHome();
              window.setTimeout(scrollToArticles, 50);
            }}
          >
            ARTICLES
          </button>

          <a
            href="#about"
            onClick={() => {
              if (selectedArticle) {
                goHome();
              }
            }}
          >
            ABOUT
          </a>
        </nav>

        <a className="nav-contact" href="mailto:babysanahfathima@gmail.com">
          LET'S CONNECT ↗
        </a>
      </header>

      {selectedArticle ? renderArticlePage() : renderHomePage()}

      <footer className="footer editorial-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a
              href="#home"
              className="logo"
              onClick={(event) => {
                event.preventDefault();
                goHome();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span className="logo-mark">S</span>

              <span className="logo-copy">
                <strong>
                  SANA<span className="logo-dot">.</span>DEV
                </strong>
                <small>THE DEVELOPER JOURNAL</small>
              </span>
            </a>

            <p>
              An independent developer journal documenting ideas, experiments,
              lessons and the process of building for the web.
            </p>
          </div>

          <div className="footer-navigation">
            <span className="eyebrow">EXPLORE THE JOURNAL</span>

            <a
              href="#home"
              onClick={(event) => {
                event.preventDefault();
                goHome();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Home
            </a>

            <a
              href="#latest-articles"
              onClick={(event) => {
                event.preventDefault();
                goHome();
                window.location.hash = 'latest-articles';
              }}
            >
              Articles
            </a>

            <a
              href="#about"
              onClick={(event) => {
                event.preventDefault();
                goHome();
                window.location.hash = 'about';
              }}
            >
              About
            </a>

            <a
              href="https://github.com/babysanafathima"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 SANA.DEV JOURNAL</span>
          <span>CREATED BY BABY SANA FATHIMA </span>
          <span>BUILT WITH CURIOSITY & CODE.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
