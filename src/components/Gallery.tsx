import { GlowingButton } from '@/components/GlowingButton';
import { submissions } from "@/submissions"

export const Gallery = () => {
  return (
    <section id="gallery" className="py-16 border-t border-green-800/30 flex justify-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-400 font-mono mb-4">GALLERY</h2>
          <p className="text-gray-300 text-lg">Devboards designed and funded by hackclubers!</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center max-w-4xl mx-auto">
          {submissions.map((project, index) => (
            <div
              key={index}
              onClick={() => window.open(project.link, '_blank')}
              className="bg-black/50 border border-green-800/30 rounded-lg overflow-hidden hover:border-green-400/50 transition-all duration-300 group w-full max-w-sm cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={"/devboards/" + project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-green-400 text-black px-2 py-1 rounded text-sm font-mono font-bold">
                  ${project.grant}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-400 font-mono mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-3">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400 font-mono">by {project.creator}</span>
                  <div className="flex items-center space-x-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span className="text-xs text-green-400 font-mono">FUNDED</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-400 font-mono mb-7">Want to see your project here?</p>
          <GlowingButton
            text="SUBMIT YOUR DESIGN"
            primary={true}
            onClick={() => window.open('https://forms.hackclub.com/silicon', '_blank')}
          />
        </div>
      </div>
    </section>
  );
};