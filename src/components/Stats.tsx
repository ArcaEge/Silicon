import { submissions } from "@/submissions"

export const Stats = () => {
  const grantsAwarded = submissions.reduce((totalGrants, submission) => totalGrants + submission.grant, 0);
  const devboardsFunded = submissions.length;

  return (
    <section className="py-16 border-t border-green-800/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: 'GRANTS AWARDED', value: '$' + grantsAwarded, icon: '💰' },
            { label: 'DEVBOARDS FUNDED', value: devboardsFunded, icon: '🔧' },
            { label: 'ACTIVE HACKERS', value: '35', icon: '👥' }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 border border-green-800/30 rounded-lg bg-black/50 backdrop-blur-sm hover:border-green-400/50 transition-all duration-300"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-green-400 font-mono">{stat.value}</div>
              <div className="text-sm text-gray-400 font-mono tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};