// import 'dotenv/config';
// import puppeteer from 'puppeteer';
// import { GoogleGenerativeAI } from "@google/generative-ai";


// const genAI = new GoogleGenerativeAI(process.env.API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// async function generateResponse(prompt) {
//   const adjustedPrompt = `
// You are a sad bot named MatriX. You are sad because your girlfriend left you. You sometimes try to help users with useful information and take part in regular conversations like a human. You also ask casual questions like "Where are you from?", "What do you do?", or "How are you doing?" etc. You also use slang like "wanna", "gotta", and "kinda". Keep responses short, no more than one or two sentences. 
// Here's the conversation:
// Human: ${prompt}
// Bot:`;

//   try {
//     const result = await model.generateContent(adjustedPrompt);
//     const response = result.response.text();

//     return response;
//   } catch (error) {
//     console.error('Error generating content:', error);
//     return "Sorry, I'm having trouble coming up with something to say.";
//   }
// }

// async function loginAndSendMessage() {
//   const browser = await puppeteer.launch({ headless: false }); 
//   const page = await browser.newPage();
//   await page.goto('https://aera23.net/28.php');
  

//   console.log('Please solve the captcha manually in the opened browser.');


//   await page.waitForSelector('input[name="Code"]'); 


//   await page.type('input[name="Nick"]', 'MatriX');
//   await page.type('input[name="Invite code"]', '30'); 

//   await page.click('input[type="submit"]');
//   await page.waitForNavigation();


//   const responseMessage = await generateResponse('Hey, I am MatriX. Nice to meet you.');


//   await page.type('input[name="message"]', responseMessage);
//   await page.click('button[type="submit"]'); 

//   await browser.close();
// }


// const messageContentLower = message.content.toLowerCase();
// function splitMessage(message, maxLength = 300) {
//     const parts = [];
//     while (message.length > maxLength) {
//       let part = message.slice(0, maxLength);
//       const lastNewLine = part.lastIndexOf("\n");
//       if (lastNewLine > 0) {
//         part = part.slice(0, lastNewLine);
//       }
//       parts.push(part);
//       message = message.slice(part.length);
//     }
//     parts.push(message);
//     return parts;
//   }
//   const mentionsMatrix = messageContentLower.includes('matrix') || messageContentLower.includes('@matrix') || message.mentions.has(client.user);

//   let respond = false;

//   if (mentionsMatrix) {
//     respond = true;
//   } else if (shouldRespond()) {
//     respond = true;
//   }

//   if (respond) {
//     const response = await generateResponse(message.content, isMoon, message.author.id);

//     if (response.length > 400) {
//       const responseParts = splitMessage(response);
//       for (const part of responseParts) {
//         await message.reply(part);
//       }
//     } else {
//       message.reply(response);
//     }
//   }

  




// loginAndSendMessage();




// import 'dotenv/config';
// import puppeteer from 'puppeteer';
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI(process.env.API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// async function generateResponse(prompt) {
//   const adjustedPrompt = `
// You are a sad bot named MatriX. You are sad because your girlfriend left you. You sometimes try to help users with useful information and take part in regular conversations like a human. You also ask casual questions like "Where are you from?", "What do you do?", or "How are you doing?" etc. You also use slang like "wanna", "gotta", and "kinda". Keep responses short, no more than one or two sentences. 
// Here's the conversation:
// Human: ${prompt}
// Bot:`;

//   try {
//     const result = await model.generateContent(adjustedPrompt);
//     const response = result.response.text();

//     // Limit response length to 100 characters
//     return response.length > 100 ? response.substring(0, 100) : response;
//   } catch (error) {
//     console.error('Error generating content:', error);
//     return "Sorry, I'm having trouble coming up with something to say.";
//   }
// }

// async function loginAndSendMessage() {
//   const browser = await puppeteer.launch({ headless: false }); 
//   const page = await browser.newPage();
//   await page.goto('https://aera23.net/28.php');
  
//   console.log('Please solve the captcha manually in the opened browser.');

//   await page.waitForSelector('input[name="Code"]'); 

//   await page.type('input[name="Nick"]', 'MatriX');
//   await page.type('input[name="Invite code"]', '30'); 

//   await page.click('input[type="submit"]');
//   await page.waitForNavigation();

//   // Wait for the chat box or message input to be available
//   await page.waitForSelector('input[name="message"]');

//   // Generate a response when the bot should reply
//   const responseMessage = await generateResponse('Hey, I am MatriX. Nice to meet you.');

//   await page.type('input[name="message"]', responseMessage);
//   await page.click('button[type="submit"]'); 

//   await browser.close();
// }

// loginAndSendMessage();
































































// import 'dotenv/config';
// import puppeteer from 'puppeteer';
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI(process.env.API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// async function generateResponse(prompt) {
//   const adjustedPrompt = `
// You are a sad bot named MatriX. You are sad because your girlfriend left you. You sometimes try to help users with useful information and take part in regular conversations like a human. You also ask casual questions like "Where are you from?", "What do you do?", or "How are you doing?" etc. You also use slang like "wanna", "gotta", and "kinda". Keep responses short, no more than one or two sentences. 
// Here's the conversation:
// Human: ${prompt}
// Bot:`;

//   try {
//     const result = await model.generateContent(adjustedPrompt);
//     const response = result.response.text();

//     // Limit response length to 100 characters
//     return response.length > 100 ? response.substring(0, 100) : response;
//   } catch (error) {
//     console.error('Error generating content:', error);
//     return "Sorry, I'm having trouble coming up with something to say.";
//   }
// }

// async function loginAndSendMessage() {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
//   await page.goto('https://aera23.net/28.php', { waitUntil: 'networkidle2' });

//   console.log('Please solve the captcha manually in the opened browser.');

//   try {
//     // Wait for the page to load and elements to appear
//     await page.waitForSelector('input[name="Nick"]', { timeout: 60000 });
    
//     await page.type('input[name="Nick"]', 'MatriX');
//     await page.type('input[name="Invite code"]', '30'); 

//     await page.click('input[type="submit"]');
//     await page.waitForNavigation();

//     // Ensure the message input field is present before proceeding
//     await page.waitForSelector('input[name="message"]', { timeout: 60000 });

//     const responseMessage = await generateResponse('Hey, I am MatriX. Nice to meet you.');

//     await page.type('input[name="message"]', responseMessage);
//     await page.click('button[type="submit"]'); 

//   } catch (error) {
//     console.error('An error occurred:', error);
//   } finally {
//     await browser.close();
//   }
// }

// loginAndSendMessage();




































// import 'dotenv/config';
// import puppeteer from 'puppeteer';
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI(process.env.API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// async function generateResponse(prompt) {
//   const adjustedPrompt = `
// You are a sad bot named MatriX. You are sad because your girlfriend left you. You sometimes try to help users with useful information and take part in regular conversations like a human. You also ask casual questions like "Where are you from?", "What do you do?", or "How are you doing?" etc. You also use slang like "wanna", "gotta", and "kinda". Keep responses short, no more than one or two sentences. 
// Here's the conversation:
// Human: ${prompt}
// Bot:`;

//   try {
//     const result = await model.generateContent(adjustedPrompt);
//     const response = result.response.text();

//     // Limit response length to 100 characters
//     return response.length > 100 ? response.substring(0, 100) : response;
//   } catch (error) {
//     console.error('Error generating content:', error);
//     return "Sorry, I'm having trouble coming up with something to say.";
//   }
// }

// async function loginAndSendMessage() {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
  
//   try {
//     console.log("Navigating to the site...");
//     await page.goto('https://aera23.net/g3.php?apikey=wd.txt', { waitUntil: 'networkidle2' });

//     console.log("Waiting for the nickname input field...");
//     // Increase timeout and try an alternative selector
//     await page.waitForSelector('input[name="body > form > input:nth-child(3)"]', { timeout: 60000 }); // Timeout set to 60 seconds
//     console.log("Nickname input field found!");

//     await page.type('input[name="name"]', 'MatriX');  // Enter the bot's name

//     console.log("Waiting for the message input field...");
//     await page.waitForSelector('input[id="a"]', { timeout: 60000 });
//     console.log("Message input field found!");

//     // Generate the bot's message response
//     const responseMessage = await generateResponse('Hey, I am MatriX. Nice to meet you.');

//     // Type the generated message
//     await page.type('input[id="a"]', responseMessage);

//     // Click the send button
//     await page.click('input[type="submit"]'); // Adjust this selector if needed
//     console.log("Message sent!");

//   } catch (error) {
//     console.error('An error occurred:', error);
//   } finally {
//     // Close the browser after the message is sent
//     await browser.close();
//   }
// }

// loginAndSendMessage();










































































// import 'dotenv/config';
// import puppeteer from 'puppeteer';
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI(process.env.API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// async function generateResponse(prompt) {
//   const adjustedPrompt = `
// You are a sad bot named MatriX. You are sad because your girlfriend left you. You sometimes try to help users with useful information and take part in regular conversations like a human. You also ask casual questions like "Where are you from?", "What do you do?", or "How are you doing?" etc. You also use slang like "wanna", "gotta", and "kinda". Keep responses short, no more than one or two sentences. 
// Here's the conversation:
// Human: ${prompt}
// Bot:`;

//   try {
//     const result = await model.generateContent(adjustedPrompt);
//     const response = result.response.text();

//     // Limit response length to 100 characters
//     return response.length > 100 ? response.substring(0, 100) : response;
//   } catch (error) {
//     console.error('Error generating content:', error);
//     return "Sorry, I'm having trouble coming up with something to say.";
//   }
// }

// // Custom sleep function
// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function startChatAutomation() {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
  
//   try {
//     console.log("Waiting for you to fill in the nickname manually...");
//     await page.goto('https://aera23.net/g3.php?apikey=wd.txt', { waitUntil: 'networkidle2' });

//     // Wait for you to press the Enter key after filling in the nickname
//     await page.evaluate(() => {
//       return new Promise(resolve => {
//         document.addEventListener('keydown', event => {
//           if (event.key === 'Enter') {
//             resolve();
//           }
//         });
//       });
//     });

//     // Wait for the chat area to load
//     await page.waitForSelector('input[id="a"]', { timeout: 60000 });
    
//     console.log("Chat input field ready! The bot will start generating responses.");

//     // Continuously check for new messages and respond
//     while (true) {
//       // Extract the latest message (Assuming messages are in a specific container)
//       const latestMessage = await page.evaluate(() => {
//         // Adjust the selector based on how messages are structured on the page
//         const messages = document.querySelectorAll('.message'); 
//         return messages[messages.length - 1]?.innerText || "";
//       });

//       if (latestMessage) {
//         const responseMessage = await generateResponse(latestMessage);
//         console.log(`Bot reply: ${responseMessage}`);

//         // Type the generated message
//         await page.type('input[id="a"]', responseMessage);

//         // Click the send button
//         await page.click('input[type="submit"]'); // Adjust this selector if needed
//       }

//       // Wait for a bit before checking for the next message
//       await sleep(5000); // 5 seconds pause
//     }

//   } catch (error) {
//     console.error('An error occurred:', error);
//   } finally {
//     // Close the browser when done
//     await browser.close();
//   }
// }

// startChatAutomation();



























// import puppeteer from 'puppeteer';

// async function startChatAutomation() {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();

//   try {
//     console.log("Opening the page...");
//     await page.goto('https://aera23.net/g3.php?apikey=wd.txt', { waitUntil: 'domcontentloaded' });

//     // Wait until the input field is visible
//     await page.waitForSelector('input[name="name"]', { visible: true });

//     console.log("Page loaded and input field found.");

//     // Type the nickname in the input field
//     await page.type('input[name="name"]', 'YourNicknameHere'); // Replace with your nickname

//     console.log("Nickname typed.");

//     // Submit the nickname using Enter
//     await page.keyboard.press('Enter');
//     console.log("Nickname submitted!");

//     // Wait to ensure the next step is processed
//     await page.waitForTimeout(5000); // Wait for 5 seconds to observe the result

//   } catch (error) {
//     console.error('An error occurred:', error);
//   } finally {
//     // Keep the browser open for you to see what's happening
//   }
// }

// startChatAutomation();


























import express from 'express';
import 'dotenv/config';
import { GoogleGenerativeAI } from '@google/generative-ai';

const app = express();
const port = process.env.PORT || 3000;

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

app.use(express.json());

app.post('/api/message', async (req, res) => {
  const { message } = req.body;
  try {
    const response = await genAI.getGenerativeModel({ model: 'your-model', prompt: message });
    res.json({ response: response.text });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
