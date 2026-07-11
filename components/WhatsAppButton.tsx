"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/constants";

export function WhatsAppButton() {
  const message = encodeURIComponent("Hello! I'm interested in your recruitment services.");
  const url = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${message}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle size={26} className="text-white fill-white" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
    </motion.a>
  );
}
