export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  tags: string[];
  image?: string;
}

export const articles: Article[] = [
//   {
//     slug: "getting-started-with-sheety",
//     title: "Getting Started with Sheety",
//     excerpt: "Learn how to transform your spreadsheets into powerful APIs in minutes with Sheety.",
//     content: `
//       <p>Sheety is the fastest way to turn your spreadsheets into APIs. Whether you're using Google Sheets or Excel, Sheety makes it easy to access your data programmatically.</p>
      
//       <h2>Why Use Sheety?</h2>
//       <p>Spreadsheets are powerful tools for organizing data, but accessing that data from your applications can be challenging. Sheety bridges this gap by providing a RESTful API for your spreadsheets.</p>
      
//       <h2>Quick Setup</h2>
//       <ol>
//         <li>Connect your Google Sheets or Excel account</li>
//         <li>Select the spreadsheet you want to turn into an API</li>
//         <li>Configure your API settings</li>
//         <li>Start making requests!</li>
//       </ol>
      
//       <h2>What's Next?</h2>
//       <p>Once you've set up your first API, explore our documentation to learn about authentication, webhooks, and advanced features.</p>
//     `,
//     author: "Sheety Team",
//     date: "2024-12-01",
//     tags: ["tutorial", "getting-started", "api"]
//   },
//   {
//     slug: "building-dynamic-websites",
//     title: "Building Dynamic Websites with Spreadsheet Data",
//     excerpt: "Discover how to create dynamic, data-driven websites using Sheety and your favorite frontend framework.",
//     content: `
//       <p>Modern websites need to be dynamic and data-driven. With Sheety, you can use spreadsheets as your content management system while keeping the developer experience smooth.</p>
      
//       <h2>The Power of Spreadsheets as a CMS</h2>
//       <p>Spreadsheets are familiar to everyone on your team. Non-technical team members can update content without touching code, while developers get a clean API to work with.</p>
      
//       <h2>Real-World Examples</h2>
//       <ul>
//         <li>Product catalogs</li>
//         <li>Blog posts and articles</li>
//         <li>Team directories</li>
//         <li>Event listings</li>
//         <li>Restaurant menus</li>
//       </ul>
      
//       <h2>Best Practices</h2>
//       <p>Keep your spreadsheet structure simple and consistent. Use clear column headers that will become your API field names. Consider caching responses for better performance.</p>
//     `,
//     author: "Sheety Team",
//     date: "2024-11-15",
//     tags: ["tutorial", "web-development", "cms"]
//   },
//   {
//     slug: "api-authentication-guide",
//     title: "Securing Your Sheety API",
//     excerpt: "Learn about authentication options and best practices for keeping your Sheety API secure.",
//     content: `
//       <p>Security is crucial when exposing your data through an API. Sheety provides multiple authentication methods to keep your data safe.</p>
      
//       <h2>Authentication Methods</h2>
//       <p>Sheety supports several authentication methods including API keys, Basic Auth, and Bearer tokens. Choose the method that best fits your use case.</p>
      
//       <h2>API Keys</h2>
//       <p>API keys are the simplest way to secure your API. Generate a key in your Sheety dashboard and include it in your requests.</p>
      
//       <h2>Environment Variables</h2>
//       <p>Never hardcode your API keys in your source code. Use environment variables to keep your credentials secure.</p>
      
//       <h2>Rate Limiting</h2>
//       <p>Be aware of rate limits and implement proper error handling in your applications. Cache responses when possible to reduce API calls.</p>
//     `,
//     author: "Sheety Team",
//     date: "2024-10-20",
//     tags: ["security", "authentication", "best-practices"]
//   }
];
