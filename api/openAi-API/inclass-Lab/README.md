# 🧩 LiveLab 10: Build Your AI Micro Recommendation Engine

## 🎯 Objective

Work in teams to create a small AI-powered recommendation engine that takes user input, sends it to OpenAI via a Cloudflare Worker, and displays personalized responses. Your engine should feel interactive, fun, and aligned with your chosen concept!

---

## 🚀 Student Mission

**Goal:** Build an AI-powered micro recommendation engine.

### Step 0: Pick Your Concept (Choose ONE per team)

- 🎓 **AI Study Tip Generator**
- 💪 **AI Fitness Micro Coach**
- 👗 **AI Outfit Recommender**
- ⚡ **AI Productivity Booster**
- ✈️ **AI Travel Suggestion Tool**

### Team Roles (Optional but Recommended)

- **Driver:** Writes code
- **Navigator:** Guides logic and helps debug
- **Debugger:** Checks console and ensures API responses work
- **Designer:** Styles the output and organizes layout

---

## 📝 Lab Steps

### 1️⃣ Setup Your Project

✅ **You're already here!** This starter code includes:

- `index.html` → Basic structure with input, button, and display area
- `styles.css` → Basic styles for layout and cards
- `script.js` → Fetch function scaffolded for your API call

**To get started:**

1. Open this project in GitHub Codespaces or VS Code
2. Open `index.html` in a browser (or use Live Server extension)
3. Start customizing!

---

### 2️⃣ Design Your Interface

Decide how your app will look!

**Required elements (already in place):**

- ✅ Input box for user queries
- ✅ Submit button
- ✅ Display area for AI response(s)

**Optional "Level Up" features:**

- Display last 3 responses above new ones
- Chat bubbles for each message
- Colored or branded UI based on your chosen concept
- Custom fonts, icons, or emojis

**TODO:** Customize the HTML and CSS to match your concept!

---

### 3️⃣ Connect to the AI

Use the provided **Cloudflare Worker URL** to make your POST request.

**In `script.js`:**

1. Find the TODO comments
2. Complete the fetch request with:
   - Your Cloudflare Worker URL
   - `method: "POST"`
   - Headers: `"Content-Type": "application/json"`
   - Body: `JSON.stringify({ message: userInput })`

**Example structure (you'll implement this):**

```javascript
try {
  const res = await fetch("YOUR_CLOUDFLARE_WORKER_URL", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: userInput }),
  });

  if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

  const data = await res.json();
  displayResponse(data.reply); // Update the page
} catch (error) {
  displayResponse("Oops! Something went wrong. Try again.");
}
```

---

### 4️⃣ Implement Error Handling

Make your app user-friendly!

**TODO: Handle these scenarios:**

- Show a friendly message if the user submits nothing
- Show a friendly message if the API fails
- Ensure the app doesn't crash
- Use `console.error()` to help with debugging

---

### 5️⃣ Style Your App

Make the output easy to read and visually appealing!

**Styling tips:**

- Use cards, colors, and spacing to separate responses
- Add emojis, themed headers, or logos for your concept
- Consider using different background colors or fonts
- Make buttons and inputs accessible and intuitive

**Files to edit:**

- `styles.css` → Customize colors, fonts, layout
- `index.html` → Update text, placeholders, titles

---

### 6️⃣ Test & Iterate

**Testing checklist:**

- [ ] Enter sample queries for your chosen concept
- [ ] Check that API responses appear correctly
- [ ] Test error handling (try submitting empty input)
- [ ] Test with different types of questions
- [ ] Ask teammates for peer review
- [ ] Fix any bugs with formatting, display, or logic

---

### 7️⃣ Reflection Questions

**(Submit these with your project)**

1. What worked well in your AI micro recommendation engine?
2. What was challenging and how did you solve it?
3. How could you expand this project into a larger product?

---

## ✅ Submission Checklist

Before submitting, make sure you have:

- [ ] Input box, submit button, and display area implemented
- [ ] Fetch request sends user input to Cloudflare Worker
- [ ] Responses display dynamically
- [ ] Error handling implemented
- [ ] App styled according to your concept
- [ ] Reflection questions answered (in a comment or separate file)

---

## 🎓 Learning Objectives

By completing this lab, you will:

- Make POST requests to an external API
- Handle asynchronous JavaScript with `async/await`
- Implement error handling with `try/catch`
- Parse and display JSON data
- Build a user-friendly interface
- Work collaboratively in teams

---

## 🆘 Need Help?

**Common issues:**

- **"YOUR_CLOUDFLARE_WORKER_URL" error:** Replace this placeholder with your actual Worker URL
- **CORS errors:** Your Cloudflare Worker must allow requests from your domain
- **No response:** Check the console for errors, verify your fetch syntax
- **Empty response:** Check that your Worker returns `data.reply` or adjust accordingly

**Debugging tips:**

- Use `console.log()` to check variables
- Use browser DevTools (F12) to see network requests
- Test your Worker URL separately (e.g., with Postman or curl)

---

## 🚀 Optional Extensions

Want to go further? Try these:

- Add a loading animation while waiting for the AI
- Maintain conversation history (display last 3-5 messages)
- Style responses as chat bubbles
- Add a "Clear Chat" button
- Deploy your app to GitHub Pages or Vercel
- Add text-to-speech for AI responses
- Implement a typing animation effect

---

**© 2026 LiveLab 10 – Educational Use Only**
