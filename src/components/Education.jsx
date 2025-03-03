import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Computer Science and Engineering",
    school: "Baba Farid College of Engineering and Technology",
    year: "2022 - 2026",
    description: "Bathinda, India",
  },
  {
    degree: "Senior Secondary",
    school: "Sahid Sandeep Senior Secondary Government School",
    year: "2021 - 2022",
    description: "Bathinda, India",
  },
  {
    degree: "High School",
    school: "Mata Sahib Kaur Memorial Public School",
    year: "2019 - 2020",
    description: "Bathinda, India",
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div 
      id="education"
      ref={ref} 
      className="space-y-6 sm:w-[768px] py-24"
      initial={{ opacity: 0, y: 50 }} 
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} 
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
      
      {educationData.map((edu, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: index * 0.2, duration: 0.5, ease: "easeOut" }}
        >
          <Card className="overflow-hidden">
            <CardHeader className="flex flex-row items-center gap-4">
              <motion.div 
                initial={{ rotateY: 180 }} 
                animate={isInView ? { rotateY: 0 } : { rotateY: 180 }} 
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <GraduationCap className="h-8 w-8 text-primary" />
              </motion.div>
              <div>
                <CardTitle className="text-xl">{edu.degree}</CardTitle>
                <p className="text-sm text-muted-foreground">{edu.school}</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm font-medium text-primary">{edu.year}</p>
              <p className="mt-2 text-sm text-muted-foreground">{edu.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
