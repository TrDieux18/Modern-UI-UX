const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior Developer",
    image:
      "https://images.pexels.com/photos/220423/pexels-photo-220423.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    content:
      "This AI-powered design tool has transformed the way I work. It generates stunning designs in seconds, allowing me to focus on creativity and innovation. Highly recommended!",
  },
  {
    name: "Michael Lee",
    role: "Product Manager",
    image:
      "https://images.pexels.com/photos/220445/pexels-photo-220445.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    content:
      "The AI design assistant has been a game-changer for our team. It provides intelligent suggestions and automates repetitive tasks, saving us hours of work each week. It's like having a design expert on call 24/7!",
  },
  {
    name: "Emily Davis",
    role: "UX Designer",
    image:
      "https://images.pexels.com/photos/220451/pexels-photo-220451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    content:
      "I was skeptical at first, but this AI design tool exceeded my expectations. It understands my design preferences and generates personalized recommendations that have improved my workflow and creativity. It's a must-have for any designer!",
  },
];
export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-12">
          {/* Left side - Header  */}
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              What developers are saying about us
            </h2>
            <p className="mt-4 text-xl sm:text-lg text-gray-400 max-w-2xl mx-auto">
              Everything you need to create amazing designs, all in one place.
            </p>
          </div>
          {/* Right side - Testimonials  */}
          <div className="lg:w-1/2 w-full">
            <div className="space-y-6 sm:space-y-8">
              {testimonials.map((testimonial, key) => (
                <div
                  key={key}
                  className="bg-slate-900/50 p-4 sm:p-6 backdrop-blur-sm border border-slate-800 rounded-xl sm:rounded-2xl"
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="shrink-0">
                      <div
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold 
                      bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                      >
                        "
                      </div>
                    </div>
                    <div className="grow">
                      <p className="text-white text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">
                        {testimonial.content}
                      </p>
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="text-white font-semibold text-sm sm:text-base">
                            {testimonial.name}
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-400">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
