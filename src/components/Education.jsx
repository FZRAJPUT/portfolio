import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

const educationData = [
    {
        degree: "Bachelor of Computer Science and Engineering",
        school: "Baba Farid College of Engineering and Technology",
        year: "2022 - 2026",
        description: "Bathinda, India",
    },
    {
      degree: "Senior Secondry",
      school: "Sahid sandeep Senior Secondry Government School",
      year: "2021 - 2022",
      description: "Bathinda, India",
    },
    {
        degree: "High School",
        school: "Mata Sahib Kaur Memorial Public School",
        year: "2019 - 2020",
        description: "Bathinda, India",
      },
]

export default function Education() {
  return (
    <div id="education" className="space-y-6 sm:w-[768px] py-24">
        <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
      {educationData.map((edu, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center gap-4">
            <GraduationCap className="h-8 w-8 text-primary" />
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
      ))}
    </div>
  )
}
