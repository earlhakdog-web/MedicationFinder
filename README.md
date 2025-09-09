import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";


export default function MedicationWebsite() {
const [search, setSearch] = useState("");


const medications = [
{ name: "Paracetamol", category: "Pain Relief", desc: "Used to reduce fever and relieve mild to moderate pain such as headaches, muscle aches, and toothaches." },
{ name: "Amoxicillin", category: "Antibiotic", desc: "An antibiotic that treats bacterial infections like pneumonia, bronchitis, and infections of the ear, nose, throat, or skin." },
{ name: "Loperamide", category: "Digestive", desc: "Used to control and reduce the frequency of diarrhea by slowing down bowel movement." },
{ name: "Cetirizine", category: "Allergy", desc: "An antihistamine that helps relieve allergy symptoms such as runny nose, sneezing, and itchy or watery eyes." },
{ name: "Metformin", category: "Diabetes", desc: "A medication for managing type 2 diabetes by lowering blood sugar levels and improving the body’s response to insulin." },
{ name: "Salbutamol", category: "Respiratory", desc: "A bronchodilator used to relieve symptoms of asthma and chronic obstructive pulmonary disease (COPD) by relaxing airway muscles." }
];


const filteredMeds = medications.filter(
(med) =>
med.name.toLowerCase().includes(search.toLowerCase()) ||
med.category.toLowerCase().includes(search.toLowerCase())
);


return (
<div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
{/* HEADER */}
<header className="sticky top-0 z-50 bg-white border-b border-emerald-300 shadow-sm">
<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<img src="/adnu-logo.png" alt="ADNU Logo" className="w-12 h-12" />
<h1 className="font-bold text-xl text-emerald-700">Luke4Med</h1>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm">
<a href="#about" className="hover:text-emerald-600">About</a>
<a href="#medications" className="hover:text-emerald-600">Medications</a>
<a href="#contact" className="hover:text-emerald-600">Contact</a>
</nav>
</div>
</header>


{/* HERO */}
<section className="bg-emerald-600 text-white py-16">
<div className="max-w-4xl mx-auto px-6 text-center">
<motion.h2 initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-4xl font-extrabold">Welcome to Luke4Med</motion.h2>
<p className="mt-4 text-lg text-emerald-100">A simple guide for people who want to understand medications and their purposes. Clear, reliable, and easy to read.</p>
</div>
</section>


{/* ABOUT */}
<section id="about" className="max-w-5xl mx-auto px-6 py-16">
<h3 className="text-2xl font-bold text-emerald-700">About This Website</h3>
<p className="mt-4 text-slate-600">Luke4Med is designed for individuals who may lack knowledge about medications. Our goal is to provide short, clear, and accurate descriptions of commonly used drugs, their purposes, and safe use information.</p>
</section>


{/* MEDICATIONS */}
<section id="medications" className="bg-white border-t border-emerald-200 py-16">
<div className="max-w-6xl mx-auto px-6">
<h3 className="text-2xl font-bold text-emerald-700">Common Medications</h3>
<p className="mt-2 text-slate-600">Browse through some commonly used medications and their purposes.</p>


{/* Search Bar */}
<div className="mt-6 mb-8 flex justify-center">
<input
type="text"
value={search}
onChange={(e) => setSearch(e.target.value)}
placeholder="Search by name or category..."
className="w-full max-w-md p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-emerald-500"
/>
</div>


{/* Medication Grid */}
<div className="mt-8 grid gap-6 md:grid-cols-3">
{filteredMeds.length > 0 ? (
filteredMeds.map((med, idx) => (
<Card key={idx} className="border border-emerald-200 shadow-sm hover:shadow-md transition-shadow">
<CardContent>
<h4 className="font-semibold text-emerald-700">{med.name}</h4>
