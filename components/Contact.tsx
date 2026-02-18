"use client"

import { useState } from "react"

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    })

    if (res.ok) {
      setSuccess(true)
      setForm({ name: "", email: "", message: "" })
    }

    setLoading(false)
  }

  return (
    <section id="contact" className="py-24 px-6 max-w-3xl mx-auto scroll-mt-32 py-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get In Touch
        </h2>
        <p className="text-muted-foreground">
          Interested in working together? Let’s connect.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="group relative space-y-6 p-8 md:p-10
           rounded-2xl
           border border-gray-200 dark:border-gray-800
           bg-white/60 dark:bg-white/5
           backdrop-blur-xl
           shadow-sm
           transition-all duration-500
           hover:-translate-y-1 hover:shadow-2xl"
      >
        <div className="absolute top-0 left-0 w-full h-[2px] 
                bg-gradient-to-r 
                from-transparent via-black to-transparent
                dark:via-white
                opacity-0 group-hover:opacity-100 
                transition-opacity duration-500" />
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-xl
           bg-white/70 dark:bg-white/10
           border border-gray-300 dark:border-gray-700
           backdrop-blur
           outline-none
           transition-all duration-300
           focus:border-indigo-500
           focus:ring-2 focus:ring-indigo-500/20"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-xl
           bg-white/70 dark:bg-white/10
           border border-gray-300 dark:border-gray-700
           backdrop-blur
           outline-none
           transition-all duration-300
           focus:border-indigo-500
           focus:ring-2 focus:ring-indigo-500/20"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-xl
           bg-white/70 dark:bg-white/10
           border border-gray-300 dark:border-gray-700
           backdrop-blur
           outline-none
           transition-all duration-300
           focus:border-indigo-500
           focus:ring-2 focus:ring-indigo-500/20"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-xl
           bg-gradient-to-r from-indigo-600 to-purple-600
           text-white font-medium
           transition-all duration-300
           hover:scale-[1.02] hover:shadow-xl
           disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {success && (
          <p className="text-sm text-center font-medium
              text-emerald-600 dark:text-emerald-400
              animate-fade-in">
            Message sent successfully!
          </p>
        )}
      </form>
    </section>
  )
}
