import React from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black p-4 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold">Welcome to JAS Style</h1>
        <p className="text-lg mt-2">Your one-stop shop for trendy clothes and bags</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {[1, 2, 3].map((item) => (
          <div key={item} className="rounded-2xl shadow-lg p-4 border">
            <img
              src={`https://via.placeholder.com/300x300?text=Product+${item}`}
              alt={`Product ${item}`}
              className="w-full h-auto rounded-xl mb-2"
            />
            <h2 className="text-xl font-semibold">Product {item}</h2>
            <p className="text-sm text-gray-500">₱499.00 - Stylish and affordable</p>
            <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded">Add to Cart</button>
          </div>
        ))}
      </motion.div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-center pt-10"
      >
        <p>Follow us on:
          <a href="https://tiktok.com" className="text-blue-500 ml-2">TikTok</a>,
          <a href="https://facebook.com" className="text-blue-500 ml-2">Facebook</a>,
          <a href="https://youtube.com" className="text-blue-500 ml-2">YouTube</a>
        </p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Iglesia_ni_Cristo_flag.svg/320px-Iglesia_ni_Cristo_flag.svg.png"
          alt="Iglesia Ni Cristo Flag"
          className="w-16 mx-auto mt-4"
        />
      </motion.footer>
    </div>
  );
}