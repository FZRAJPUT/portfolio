const Hero = () => {
  return (
    (<section id="home" className="pt-20 pb-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div
          className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          <h1
            className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gray-800">
            Hi, I'm Subhash
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl">
            A passionate full-stack developer crafting beautiful and functional web experiences
          </p>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-gray-900 text-white rounded-[20px] transition-colors">
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-50 transition-colors">
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>)
  );
}

export default Hero

