"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPaperPlane } from "react-icons/fa";

export default function Contact({ hideTitle = false }: { hideTitle?: boolean }) {
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
      className="w-full min-h-screen flex flex-col items-center justify-center z-10 relative overflow-hidden py-12 sm:py-16 md:py-0 snap-end scroll-mt-20"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-linear-to-tr from-blue-600/5 to-purple-600/5 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none" />

      {/* Section heading */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`flex flex-col items-start w-full mb-6 sm:mb-10 ${hideTitle ? "hidden" : "lg:w-1/3 lg:sticky lg:top-32"}`}
      >
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-left leading-none text-transparent bg-clip-text bg-linear-to-t from-white/20 via-white/80 to-white uppercase">
          Contact
        </h2>
        <p className="text-blue-400 mt-2 sm:mt-4 text-[10px] sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold text-left">Get in touch</p>
      </motion.div>

      <div className="w-full flex flex-col lg:flex-row gap-6 sm:gap-12 lg:gap-20 items-center lg:items-stretch relative z-10">
        {/* ─── LEFT SIDE ─── */}
        <div className="flex-1 flex flex-col justify-center text-center lg:text-left">
          <h3
            className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-3 sm:mb-8 text-white drop-shadow-sm"
          >
            Ready to bring your<br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">vision to life?</span>
          </h3>

          <p className="text-gray-400 leading-relaxed mb-4 sm:mb-10 max-w-md mx-auto lg:mx-0 text-xs sm:text-base md:text-lg">
            Great products start with a simple conversation. Let&apos;s collaborate and make it a success.
          </p>

          {/* Email info */}
          <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 group cursor-default">
            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all duration-500 shadow-lg shrink-0">
              <FaEnvelope className="text-blue-400 group-hover:scale-110 transition-transform duration-300 text-xs sm:text-base" />
            </div>
            <div className="text-left">
              <p className="text-[8px] sm:text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold mb-0.5">Direct Email</p>
              <p className="text-xs sm:text-base text-gray-200 font-medium group-hover:text-blue-400 transition-colors duration-300">mahan207gh@gmail.com</p>
            </div>
          </div>
        </div>

        {/* ─── RIGHT SIDE: Contact Form ─── */}
        <div className="flex-1 w-full max-w-lg mt-6 lg:mt-0">
          <div className="relative p-[1px] rounded-3xl bg-linear-to-br from-white/10 to-transparent transition-all duration-700">
            <form
              onSubmit={handleSubmit}
              className="bg-[#0a0a0a]/60 backdrop-blur-xl rounded-2xl p-5 sm:p-8 md:p-10 space-y-4 sm:space-y-6 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="block text-[9px] text-gray-500 uppercase tracking-[0.2em] font-bold px-1">
                    Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    required
                    className="w-full bg-[#0a0a0a]/40 border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-200 placeholder-gray-600 outline-none focus:border-blue-500/50 focus:bg-[#0a0a0a]/80 focus:ring-4 focus:ring-blue-500/5 transition-all duration-300"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="block text-[9px] text-gray-500 uppercase tracking-[0.2em] font-bold px-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    className="w-full bg-[#0a0a0a]/40 border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-200 placeholder-gray-600 outline-none focus:border-blue-500/50 focus:bg-[#0a0a0a]/80 focus:ring-4 focus:ring-blue-500/5 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="block text-[9px] text-gray-500 uppercase tracking-[0.2em] font-bold px-1">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message..."
                  required
                  rows={3}
                  className="w-full bg-[#0a0a0a]/40 border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-200 placeholder-gray-600 outline-none resize-none focus:border-blue-500/50 focus:bg-[#0a0a0a]/80 focus:ring-4 focus:ring-blue-500/5 transition-all duration-300"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 sm:py-4 rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all duration-500 cursor-pointer overflow-hidden relative group/btn
                  ${
                    submitted
                      ? "bg-green-500/10 text-green-400 border border-green-500/30"
                      : isSubmitting
                      ? "bg-white/5 text-gray-500 border border-white/10 cursor-wait"
                      : "bg-linear-to-r from-blue-600 to-blue-500 text-white shadow-[0_10px_30px_-10px_rgba(59,130,246,0.5)] hover:shadow-[0_15px_40px_-10px_rgba(59,130,246,0.7)] hover:-translate-y-1 active:scale-[0.98]"
                  }
                `}
              >
                {submitted ? (
                  <>Sent Successfully ✓</>
                ) : isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    <FaPaperPlane size={12} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
