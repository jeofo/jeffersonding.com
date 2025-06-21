import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="bg-white text-black p-5 mx-auto">
      <div className="text-start mb-2 text-4xl">
        <h1>
          jefferson <b>ding</b>
        </h1>
      </div>
      <div className="flex gap-5">
        <div className="flex-1">
          <div>
            <h2>
              <b>me</b> AT <b>jeffdi</b> DOT <b>ng</b>
            </h2>
            <div className="my-8">
              <h3 className="text-2xl font-bold mt-8">currently</h3>
              <ul>
                <li>Software Development</li>
                <li>Web Design</li>
                <li>Problem Solving</li>
                <li>Learning New Technologies</li>
              </ul>
            </div>
          </div>

          <div>
            <h2>About Me</h2>
            <p>
              Hi there! I'm Jefferson Ding, a passionate developer who loves
              creating things that make a difference.
            </p>
            <div className="border border-black p-2.5 my-2.5">
              <h3>🎓 Education</h3>
              <p>[Placeholder: Your education details here]</p>
            </div>
            <div className="border border-black p-2.5 my-2.5">
              <h3>💼 Experience</h3>
              <p>[Placeholder: Your work experience here]</p>
            </div>
            <div className="border border-black p-2.5 my-2.5">
              <h3>🛠️ Skills</h3>
              <p>[Placeholder: Your technical skills here]</p>
            </div>
          </div>

          <div>
            <h2>My Projects</h2>
            <div className="border border-black p-2.5 my-2.5">
              <h3>🚀 Project 1</h3>
              <p>[Placeholder: Project description]</p>
              <p>
                <strong>Technologies:</strong> React, TypeScript
              </p>
            </div>
            <div className="border border-black p-2.5 my-2.5">
              <h3>🎮 Project 2</h3>
              <p>[Placeholder: Project description]</p>
              <p>
                <strong>Technologies:</strong> Node.js, JavaScript
              </p>
            </div>
            <div className="border border-black p-2.5 my-2.5">
              <h3>📱 Project 3</h3>
              <p>[Placeholder: Project description]</p>
              <p>
                <strong>Technologies:</strong> Python, Django
              </p>
            </div>
          </div>

          <div>
            <h2>Resume</h2>
            <div className="text-center my-5">
              <button className="border border-black px-5 py-2.5 bg-white cursor-pointer">
                📄 Download PDF Resume
              </button>
            </div>
            <div className="border border-black p-2.5 my-2.5">
              <h3>Professional Summary</h3>
              <p>[Placeholder: Your professional summary here]</p>
            </div>
            <div className="border border-black p-2.5 my-2.5">
              <h3>Work Experience</h3>
              <p>[Placeholder: Your work experience details]</p>
            </div>
            <div className="border border-black p-2.5 my-2.5">
              <h3>Education</h3>
              <p>[Placeholder: Your educational background]</p>
            </div>
          </div>

          <div>
            <h2>Contact Me</h2>
            <div className="flex gap-5 mb-5">
              <div className="border border-black p-2.5 flex-1">
                <h3>📧 Email</h3>
                <p>[Placeholder: your.email@example.com]</p>
              </div>
              <div className="border border-black p-2.5 flex-1">
                <h3>📱 Phone</h3>
                <p>[Placeholder: +1 (555) 123-4567]</p>
              </div>
            </div>
            <div className="border border-black p-2.5">
              <h3>Send me a message</h3>
              <form>
                <div className="mb-2.5">
                  <label>Name: </label>
                  <br />
                  <input
                    type="text"
                    className="w-full p-1 border border-black font-mono"
                    placeholder="Your name"
                  />
                </div>
                <div className="mb-2.5">
                  <label>Email: </label>
                  <br />
                  <input
                    type="email"
                    className="w-full p-1 border border-black font-mono"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="mb-2.5">
                  <label>Message: </label>
                  <br />
                  <textarea
                    rows={4}
                    className="w-full p-1 border border-black font-mono"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="border border-black px-5 py-2.5 bg-white cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div>
            <h2>Guestbook</h2>
            <div className="border border-black p-2.5 mb-5 bg-yellow-50">
              <p>
                <strong>Note:</strong> This is a classic website feature! Sign
                my guestbook to let me know you visited.
              </p>
            </div>
            <div className="border border-black p-2.5 mb-5">
              <h3>Leave a message</h3>
              <form>
                <div className="mb-2.5">
                  <label>Name: </label>
                  <br />
                  <input
                    type="text"
                    className="w-full p-1 border border-black font-mono"
                    placeholder="Your name"
                  />
                </div>
                <div className="mb-2.5">
                  <label>Message: </label>
                  <br />
                  <textarea
                    rows={3}
                    className="w-full p-1 border border-black font-mono"
                    placeholder="Leave a message in my guestbook..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="border border-black px-5 py-2.5 bg-white cursor-pointer"
                >
                  Sign Guestbook
                </button>
              </form>
            </div>
            <div>
              <h3>Recent Messages</h3>
              <div className="border border-black p-2.5">
                <p className="text-xs">
                  [No messages yet - be the first to sign!]
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-black mt-10 pt-5 text-center">
        <p>© {new Date().getFullYear()} jefferson ding. all rights reserved.</p>
        <p className="text-xs">
          built with{" "}
          <span className="text-2xl relative bottom-[-2.8px]">🎔</span> using
          typescript
        </p>
        <p className="text-xs text-center">
          last updated: {new Date(1750505370000).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default App;
