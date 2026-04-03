"use client";

import { useState } from "react";
import { FaEnvelope, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/mahan207gh@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `New Portfolio Contact from ${name}`,
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setName("");
          setEmail("");
          setMessage("");
        }, 3000);
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-20 px-4 md:px-12 flex flex-col items-center z-10 relative"
    >
      {/* Section heading */}
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight text-center">
          Contact
        </h2>
      </div>

      <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch">
        {/* ─── LEFT SIDE ─── */}
        <div className="flex-1 flex flex-col justify-center">
          <h3
            className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-6"
            style={{ fontFamily: "Cal Sans, sans-serif" }}
          >
            Ready to bring your
            <br />
            vision to life?
          </h3>

          <p className="text-gray-400 leading-relaxed mb-8 max-w-md">
            Great products start with a simple conversation. Whether you&apos;re looking to build something from scratch or elevate an existing project, let&apos;s collaborate and make it a success.
          </p>

          {/* Email info */}
          <div className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/8 flex items-center justify-center group-hover:bg-white/[0.08] group-hover:border-white/15 transition-all duration-300">
              <FaEnvelope className="text-blue-400" size={16} />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Email</p>
              <p className="text-gray-300 text-sm">mahan207gh@gmail.com</p>
            </div>
          </div>
        </div>

        {/* ─── RIGHT SIDE: Contact Form ─── */}
        <div className="flex-1 w-full max-w-lg">
          <form
            onSubmit={handleSubmit}
            className="bg-white/[0.03] backdrop-blur-md border border-white/8 rounded-2xl p-6 md:p-8 hover:bg-white/[0.05] hover:border-white/15 transition-all duration-300 space-y-5"
          >
            {/* Name */}
            <div>
              <label className="block text-xs text-gray-500 uppercase tracking-widest font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
                className="w-full bg-white/[0.04] border border-white/8 rounded-xl px-4 py-3 text-sm text-gray-200 placeholder-gray-600 outline-none focus:border-blue-400/50 focus:bg-white/[0.06] transition-all duration-300"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs text-gray-500 uppercase tracking-widest font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full bg-white/[0.04] border border-white/8 rounded-xl px-4 py-3 text-sm text-gray-200 placeholder-gray-600 outline-none focus:border-blue-400/50 focus:bg-white/[0.06] transition-all duration-300"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs text-gray-500 uppercase tracking-widest font-semibold mb-2">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project..."
                required
                rows={5}
                className="w-full bg-white/[0.04] border border-white/8 rounded-xl px-4 py-3 text-sm text-gray-200 placeholder-gray-600 outline-none resize-none focus:border-blue-400/50 focus:bg-white/[0.06] transition-all duration-300"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 rounded-xl text-sm font-semibold tracking-wide flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer
                ${
                  submitted
                    ? "bg-green-500/20 text-green-400 border border-green-400/30"
                    : isSubmitting
                    ? "bg-white/5 text-gray-500 border border-white/8 cursor-wait"
                    : "bg-blue-500/15 text-blue-400 border border-blue-400/30 hover:bg-blue-500/25 hover:border-blue-400/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
                }
              `}
            >
              {submitted ? (
                <>Sent Successfully ✓</>
              ) : isSubmitting ? (
                <>Sending...</>
              ) : (
                <>
                  <FaPaperPlane size={14} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
