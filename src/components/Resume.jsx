const TimelineItem = ({ title, company, period, description }) => (
  <div className="relative pl-8 pb-8 border-l-2 border-purple-200 last:border-0">
    <div className="absolute left-[-8px] top-0 w-4 h-4 bg-purple-600 rounded-full" />
    <h3 className="font-bold text-lg">{title}</h3>
    <p className="text-purple-600 mb-2">
      {company} • {period}
    </p>
    <p className="text-gray-600">{description}</p>
  </div>
)

const Resume = () => {
  const experience = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Corp",
      period: "2021 - Present",
      description: "Led frontend development for multiple projects, improving performance and user experience.",
    },
    {
      title: "Full Stack Developer",
      company: "Web Solutions Inc",
      period: "2019 - 2021",
      description: "Developed and maintained various web applications using modern technologies.",
    },
  ]

  const education = [
    {
      title: "Bachelor's in Computer Science",
      company: "University of Technology",
      period: "2015 - 2019",
      description: "Focused on software engineering and web technologies.",
    },
  ]

  return (
    (<section id="resume" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6">Work Experience</h3>
            <div className="space-y-6">
              {experience.map((item) => (
                <TimelineItem key={item.title} {...item} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((item) => (
                <TimelineItem key={item.title} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>)
  );
}

export default Resume

