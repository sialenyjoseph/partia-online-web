export default function PartiaOnlineWebsite() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900 opacity-80"></div>

        <div className="relative z-10 max-w-3xl">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tight">
            Partia Online
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Miesto kde vznikajú priateľstvá, zábava a nezabudnuteľné momenty.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://discord.gg/yourinvite"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl bg-purple-600 hover:bg-purple-500 transition-all duration-300 text-lg font-bold shadow-2xl"
            >
              Join Discord
            </a>

            <a
              href="#about"
              className="px-8 py-4 rounded-2xl border border-gray-600 hover:border-purple-500 hover:text-purple-400 transition-all duration-300 text-lg font-bold"
            >
              O Serveri
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 px-6 bg-zinc-950"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-purple-400">
              O našom serveri
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Partia Online je komunita ľudí ktorí sa chcú zabaviť,
              hrať hry, rozprávať sa na voice chatoch a spoznávať nových
              kamarátov.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              Nájdeš u nás gaming, eventy, memes, music botov, aktívny
              chat a super komunitu.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800 shadow-xl">
              <h3 className="text-2xl font-bold mb-2">🎮 Gaming</h3>
              <p className="text-gray-400">
                Hry, voice chaty a spoločné večery.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800 shadow-xl">
              <h3 className="text-2xl font-bold mb-2">🎉 Eventy</h3>
              <p className="text-gray-400">
                Community eventy a súťaže.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800 shadow-xl">
              <h3 className="text-2xl font-bold mb-2">🎵 Music</h3>
              <p className="text-gray-400">
                Music boti a chill atmosféra.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800 shadow-xl">
              <h3 className="text-2xl font-bold mb-2">💬 Chat</h3>
              <p className="text-gray-400">
                Aktívna a priateľská komunita.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rules */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-blue-400">
            Pravidlá Servera
          </h2>

          <div className="grid gap-6 text-left">
            {[
              "Rešpektuj všetkých členov servera.",
              "Žiadny spam alebo toxicita.",
              "Nevytváraj konflikty.",
              "Počúvaj adminov a moderátorov.",
            ].map((rule, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl"
              >
                <p className="text-lg text-gray-300">
                  {index + 1}. {rule}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-purple-400">
            Náš Team
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Owner",
                role: "Majiteľ Servera",
              },
              {
                name: "Admin",
                role: "Správa Komunity",
              },
              {
                name: "Moderator",
                role: "Pomoc a Moderácia",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-black border border-zinc-800 rounded-3xl p-8 shadow-2xl"
              >
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-blue-500 mb-6"></div>

                <h3 className="text-2xl font-bold mb-2">
                  {member.name}
                </h3>

                <p className="text-gray-400">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 text-center bg-gradient-to-r from-purple-900 to-blue-900">
        <h2 className="text-5xl font-extrabold mb-6">
          Pridaj sa k nám
        </h2>

        <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
          Staň sa súčasťou komunity Partia Online ešte dnes.
        </p>

        <a
          href="https://discord.gg/yourinvite"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-5 rounded-2xl bg-white text-black font-bold text-xl hover:scale-105 transition-all duration-300"
        >
          Vstúpiť na Discord
        </a>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-zinc-800 bg-black text-gray-500">
        © 2026 Partia Online • All Rights Reserved
      </footer>
    </div>
  );
}
