# Do You Love Me? ❤️

A playful and interactive web project featuring an evasive "No" button, floating heart animations, and a cute surprise when "Yes" is clicked. Perfect for romantic pranks, social media reels, and front-end practice.

---

## ✨ Features

- **Evasive "No" Button:** Runs away randomly whenever the user hovers or tries to tap it.
- **Cute Celebration:** Clicking "Yes" shows an animated heart loader followed by a sweet victory message and video.
- **Dynamic Background:** Continuous ambient floating hearts.
- **Interactive Cursor Trailing:** Spawns hearts that float upward following mouse cursor and touch movements.
- **Pure Vanilla Stack:** Built strictly with HTML5, CSS3, and modern JavaScript—no bulky frameworks or dependencies required.

---

## 🛠️ Tech Stack

- **HTML5:** Semantic markup and video embedding
- **CSS3:** Flexbox, Grid, keyframe animations, and gradient styling
- **JavaScript (ES6+):** DOM manipulation, random positioning algorithm, event listeners for mouse & touch

---

## 📁 Project Structure

```text
Do-You-Love-Me-Code/
├── index.html           # Main application entry point
├── style.css            # Styles, floating hearts & keyframe animations
├── script.js           # Core interactive logic (button evasion, cursor trail)
├── do_you_love_me.html  # Alternative version (embed support)
├── do_you_love_me.css   # Styles for alternative layout
├── do_you_love_me.js   # Script for alternative layout
├── Love me.mp4          # Success celebration video
├── Reply me love.mp4    # Intro prompt video
└── cute love gif.mp4    # Alternative prompt video
```

---

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/saklincodes/Do-You-Love-Me-Code.git
   ```

2. **Open the project:**
   Navigate into the directory and open `index.html` in your favorite web browser (or use Live Server in VS Code):
   ```bash
   cd Do-You-Love-Me-Code
   # Double click index.html or open with your browser
   ```

---

## 💡 How It Works

1. **Evasive Button:** The `mouseover` event listener calculates a random `(X, Y)` coordinate inside the container dimensions and updates `noBtn.style.left` and `noBtn.style.top`.
2. **Success Flow:** When the user clicks `Yes`:
   - The question box is hidden.
   - The heart loader animation activates for 3 seconds.
   - The result container reveals the celebratory video and text.

---

## 👤 Author

Created with ❤️ by **[@saklin_01](https://github.com/saklincodes)**

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) - feel free to use, modify, and share!
