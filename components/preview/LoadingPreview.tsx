import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function LoadingPreview({ message }: { message:string }) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}>
        <Sparkles size={50}/>
      </motion.div>
      <p className="mt-6 text-xl font-semibold">{message}</p>
    </div>
  )
}