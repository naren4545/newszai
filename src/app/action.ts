// 'use server'


// import { Article } from '@/app/types/article'

// import Cookies from 'js-cookie';
// const authToken = Cookies.get('authToken');
// // This would typically be replaced with a database


// export async function saveArticle(formData: FormData) {
//   const title = formData.get('title') as string;
//   const category = formData.get('category') as string;
//   const summary = formData.get('summary') as string;
//   const content = formData.get('content') as string;
//   const status = formData.get('status') as 'draft' | 'published';
//   const id = formData.get('id') as string || crypto.randomUUID();

//   const article = {
//     id,
//     title,
//     category,
//     summary,
//     content,
//     thumbnail: '/placeholder.svg',
//     status,
//     createdAt: new Date(),
//     updatedAt: new Date(),
//   };

//   console.log(article, "Article to be saved");

//   try {
//     const response = await fetch('https://api.newszai.com/api/news', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer YOUR_BEARER_TOKEN`, // Replace with your actual Bearer token
//       },
//       body: JSON.stringify({
//         source: 'test', // Replace with actual source if needed
//         source_website: 'https://test.com', // Replace with actual source_website
//         type: status === 'published' ? 'published' : 'draft',
//         headline: title,
//         link: 'https://test.com', // Replace with actual link if needed
//         image: '/placeholder.svg', // Replace with actual image URL
//         dateTime: new Date().toISOString(),
//         category,
//         summary,
//       }),
//     });

//     if (!response.ok) {
//       throw new Error(`Error: ${response.status} ${response.statusText}`);
//     }

//     const result = await response.json();
//     console.log(result, "Article saved successfully");
//     return result;
//   } catch (error) {
//     console.error("Error saving article:", error);
//     throw error;
//   }
// }


// export async function getArticles(status?: 'draft' | 'published') {
//   if (status) {
//     return articles.filter(article => article.status === status)
//   }
//   console.log(articles,"articles2")
//   return articles
// }

// export async function getArticle(id: string) {
//   return articles.find(article => article.id === id)
// }

