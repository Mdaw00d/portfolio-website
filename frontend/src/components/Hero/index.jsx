import { portfolioProfile } from '../../data/portfolioData'

function Hero() {
  const whatsappNumber = '923330262115'
  const whatsappMessage = 'Hi Muhammad Dawood! I would like to hire you for a project.'
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <section
      id="home"
      className="section-padding min-h-screen flex items-start justify-center pt-24 md:pt-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
      aria-label="Portfolio introduction"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 px-4">
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-12 md:gap-20">
          {/* Profile Picture with enhanced styling */}
          <div className="flex-shrink-0 animate-fade-in">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="/img.jpg"
                alt={portfolioProfile.name}
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover ring-4 ring-gray-800 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Name and Bio with animations */}
          <div className="flex-1 text-center md:text-left max-w-2xl animate-slide-up">
            <div className="space-y-6">
              <div>
                <h1 className="heading-1">
                  {portfolioProfile.name}
                </h1>
              </div>

              <div>
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold accent-color">
                  {portfolioProfile.title}
                </p>
              </div>

              <div>
                <p className="body-text text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0">
                  {portfolioProfile.bio}
                </p>
              </div>

              {/* CTA button */}
              <div className="pt-4">
                <div className="flex gap-4 justify-center md:justify-start">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-block"
                  >
                    Hire Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
