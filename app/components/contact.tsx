"use client";

import { useState, useRef } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending
    await new Promise((r) => setTimeout(r, 1500));

    setSubmitted(true);
    setIsSubmitting(false);
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setEmail("");
      setMessage("");
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="w-full py-20 px-4 md:px-12 flex flex-col items-center z-10 relative"
    >
      {/* Centered section heading — matching other sections */}
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight text-center">
          Contact
        </h2>
      </div>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        {/* ─── LEFT SIDE: Info (No background) ─── */}
        <div className="flex-1 flex flex-col items-start pt-2">
          <h3
            className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-6"
            style={{ fontFamily: "Cal Sans, sans-serif" }}
          >
            Let&apos;s build something
            <br />
            amazing together.
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed mb-2">
            I create meaningful experiences at the intersection of design and
            code.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            Whether you have a question or a project in mind, feel free to
            deploy a message via the terminal below!
          </p>

          {/* Email */}
          <div className="flex items-center gap-4">
            <span
              className="text-blue-400 text-xs font-bold tracking-widest"
              style={{ fontFamily: "monospace" }}
            >
              EMAIL:
            </span>
            <span className="text-gray-300 text-sm" style={{ fontFamily: "monospace" }}>
              your.email@example.com
            </span>
          </div>
        </div>

        {/* ─── RIGHT SIDE: Linux Terminal Contact Form ─── */}
        <div className="flex-1 w-full max-w-xl group">
          {/* Gradient border wrapper — matching hero code block */}
          <div className="relative p-[1px] rounded-xl bg-white/10 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] transition-all duration-500 group-hover:scale-[1.01]">
            <div className="bg-[#0f111a] rounded-[10px] overflow-hidden h-full w-full">
              {/* ─── Linux Title Bar ─── */}
              <div className="flex justify-between items-center border-b border-gray-800/60 px-4 py-2">
                <div className="text-xs text-gray-500 font-sans tracking-tight">
                  message_payload.sh
                </div>
                <div className="flex items-center">
                  {/* Minimize */}
                  <div className="w-8 h-8 flex items-center justify-center hover:bg-white/10 text-gray-400 transition-colors cursor-pointer rounded-sm">
                    <svg width="10" height="1" viewBox="0 0 10 1" fill="currentColor"><rect width="10" height="1" /></svg>
                  </div>
                  {/* Maximize */}
                  <div className="w-8 h-8 flex items-center justify-center hover:bg-white/10 text-gray-400 transition-colors cursor-pointer rounded-sm">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor"><rect x="0.5" y="0.5" width="9" height="9" /></svg>
                  </div>
                  {/* Close */}
                  <div className="w-8 h-8 flex items-center justify-center hover:bg-red-500 hover:text-white text-gray-400 transition-colors cursor-pointer rounded-sm">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><path d="M1 0.292969L0.292969 1L4.29297 5L0.292969 9L1 9.70703L5 5.70703L9 9.70703L9.70703 9L5.70703 5L9.70703 1L9 0.292969L5 4.29297L1 0.292969Z"/></svg>
                  </div>
                </div>
              </div>

              {/* ─── Terminal Body ─── */}
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="px-6 py-6 font-mono text-sm space-y-5"
              >
                {/* Prompt line */}
                <p className="mb-4 leading-loose tracking-wide">
                  <span className="text-green-400">guest@linux</span>
                  <span className="text-gray-500">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-gray-500">$ </span>
                  <span className="text-gray-300">
                    sudo init contact --form
                  </span>
                </p>

                {/* NAME */}
                <div>
                  <label className="block text-blue-400 font-bold text-xs tracking-widest mb-2">
                    NAME:
                  </label>
                  <div className="relative">
                    <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-400/40 rounded-full" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name..."
                      required
                      className="w-full bg-transparent border-none outline-none text-gray-300 placeholder-gray-600 py-1.5 pl-3 focus:placeholder-gray-500 transition-colors"
                    />
                  </div>
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block text-blue-400 font-bold text-xs tracking-widest mb-2">
                    EMAIL:
                  </label>
                  <div className="relative">
                    <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-400/40 rounded-full" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="w-full bg-transparent border-none outline-none text-gray-300 placeholder-gray-600 py-1.5 pl-3 focus:placeholder-gray-500 transition-colors"
                    />
                  </div>
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="block text-blue-400 font-bold text-xs tracking-widest mb-2">
                    MESSAGE:
                  </label>
                  <div className="relative">
                    <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-400/40 rounded-full" />
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type your message here..."
                      required
                      rows={4}
                      className="w-full bg-transparent border-none outline-none text-gray-300 placeholder-gray-600 py-1.5 pl-3 resize-none focus:placeholder-gray-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Comment */}
                <p className="text-gray-600 text-xs tracking-wide pt-2">
                  {submitted
                    ? "/* Message deployed successfully! */"
                    : "/* Ready to deploy your message. */"}
                </p>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 rounded-md border text-sm font-bold tracking-[0.25em] transition-all duration-300 cursor-pointer
                    ${
                      submitted
                        ? "border-green-400 text-green-400 shadow-[0_0_20px_rgba(74,222,128,0.15)]"
                        : isSubmitting
                        ? "border-yellow-400/50 text-yellow-400/50 cursor-wait"
                        : "border-cyan-400/60 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]"
                    }
                  `}
                  style={{ fontFamily: "monospace" }}
                >
                  {submitted
                    ? "[ DEPLOYED ✓ ]"
                    : isSubmitting
                    ? "[ DEPLOYING... ]"
                    : "[ COMMIT & PUSH ]"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
