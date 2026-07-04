"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function Register() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    age: "",
    emergency_contact: "",
    experience: "",
    position: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      console.log("Submitting:", form);

      const { data, error } = await supabase
        .from("players")
        .insert([
          {
            full_name: form.full_name,
            email: form.email,
            phone: form.phone,
            age: form.age ? Number(form.age) : null,
            emergency_contact: form.emergency_contact,
            experience: form.experience,
            position: form.position,
          },
        ])
        .select();

      console.log("Returned data:", data);
      console.log("Returned error:", error);

      if (error) {
        console.error(error);
        alert(JSON.stringify(error, null, 2));
        setMessage("❌ Registration failed.");
      } else {
        setMessage("✅ Registration submitted successfully!");

        setForm({
          full_name: "",
          email: "",
          phone: "",
          age: "",
          emergency_contact: "",
          experience: "",
          position: "",
        });
      }
    } catch (err) {
      console.error("Caught exception:", err);
      alert(JSON.stringify(err, null, 2));
      setMessage("❌ Network error.");
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-blue-50 py-20 px-6 text-gray-900">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-5xl font-bold text-[#003DA5]">
          Player Registration
        </h1>

        <p className="mt-4 text-lg text-gray-700">
          Register now for the Fall 2026 GOAT League season.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-5 rounded-2xl border border-gray-200 bg-white p-8 shadow-lg"
        >
          <input
            type="text"
            name="full_name"
            placeholder="Full Name"
            value={form.full_name}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-700 p-4 focus:border-[#003DA5] focus:outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-700 p-4 focus:border-[#003DA5] focus:outline-none"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-700 p-4 focus:border-[#003DA5] focus:outline-none"
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={form.age}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-700 p-4 focus:border-[#003DA5] focus:outline-none"
          />

          <input
            type="text"
            name="emergency_contact"
            placeholder="Emergency Contact"
            value={form.emergency_contact}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-700 p-4 focus:border-[#003DA5] focus:outline-none"
          />

          <select
            name="experience"
            value={form.experience}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-700 p-4 focus:border-[#003DA5] focus:outline-none"
          >
            <option value="">Playing Experience</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>

          <select
            name="position"
            value={form.position}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-700 p-4 focus:border-[#003DA5] focus:outline-none"
          >
            <option value="">Preferred Position</option>
            <option value="Goalie">Goalie</option>
            <option value="Field Player">Field Player</option>
          </select>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-[#FDB927] py-4 text-lg font-bold text-[#003DA5] transition hover:bg-yellow-300 disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Registration"}
          </button>

          {message && (
            <p className="mt-4 text-center font-bold">
              {message}
            </p>
          )}
        </form>
      </div>
    </main>
  );
}