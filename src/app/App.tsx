import { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: 'The Art of Minimalist Living',
      date: 'May 2026',
      category: 'Lifestyle',
      excerpt: 'Exploring the profound beauty found in simplicity, restraint, and intentional curation of our daily environments.',
      image: 'https://images.unsplash.com/photo-1531347058246-6dfef49b7b7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      readTime: '8 min read'
    },
    {
      id: 2,
      title: 'Timeless Design Principles',
      date: 'April 2026',
      category: 'Design',
      excerpt: 'An examination of enduring design philosophies that transcend trends and create lasting visual impact.',
      image: 'https://images.unsplash.com/photo-1640270712121-ae4a538a8ffc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      readTime: '6 min read'
    },
    {
      id: 3,
      title: 'The Essence of Luxury',
      date: 'March 2026',
      category: 'Culture',
      excerpt: 'Understanding luxury as the mastery of subtlety, where perfection lies in what remains unsaid.',
      image: 'https://images.unsplash.com/photo-1762605135321-d025ebbd13d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      readTime: '10 min read'
    },
    {
      id: 4,
      title: 'Curated Spaces',
      date: 'February 2026',
      category: 'Architecture',
      excerpt: 'The deliberate act of creating environments that speak through silence and breathe through negative space.',
      image: 'https://images.unsplash.com/photo-1624533523809-3d27d9ea6d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      readTime: '7 min read'
    },
    {
      id: 5,
      title: 'Editorial Excellence',
      date: 'January 2026',
      category: 'Writing',
      excerpt: 'The craft of storytelling through considered prose, where every word earns its place on the page.',
      image: 'https://images.unsplash.com/photo-1769490315625-6e669d53e698?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      readTime: '9 min read'
    },
    {
      id: 6,
      title: 'Refined Aesthetics',
      date: 'December 2025',
      category: 'Art',
      excerpt: 'A meditation on the intersection of restraint and expression in contemporary visual culture.',
      image: 'https://images.unsplash.com/photo-1618510120934-8e95e3ee8033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      readTime: '5 min read'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-[#F9F8F6] relative">
      {/* Visible Grid Lines */}
      <div className="fixed inset-0 pointer-events-none z-50 hidden lg:block">
        <div className="max-w-[1600px] mx-auto h-full relative px-16">
          <div className="absolute left-16 top-0 w-px h-full bg-[#1A1A1A]/20"></div>
          <div className="absolute left-[33%] top-0 w-px h-full bg-[#1A1A1A]/20"></div>
          <div className="absolute right-[33%] top-0 w-px h-full bg-[#1A1A1A]/20"></div>
          <div className="absolute right-16 top-0 w-px h-full bg-[#1A1A1A]/20"></div>
        </div>
      </div>

      {/* Paper Noise Texture */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.02]">
        <svg className="w-full h-full">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* Navigation */}
      <nav className="border-b border-[#1A1A1A]/10 relative z-10">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 py-6 flex justify-between items-center">
          <div className="font-['Playfair_Display'] text-2xl">Editorial</div>
          <div className="flex gap-8 items-center">
            <a href="#posts" className="text-xs uppercase tracking-[0.25em] text-[#6C6863] hover:text-[#D4AF37] transition-colors duration-500">Journal</a>
            <a href="#about" className="text-xs uppercase tracking-[0.25em] text-[#6C6863] hover:text-[#D4AF37] transition-colors duration-500">About</a>
            <a href="#subscribe" className="text-xs uppercase tracking-[0.25em] text-[#6C6863] hover:text-[#D4AF37] transition-colors duration-500">Subscribe</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 border-b border-[#1A1A1A]/10">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-start-2 lg:col-span-10">
              {/* Decorative Line and Label */}
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-8 md:w-12 bg-[#1A1A1A]"></div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#6C6863]">ISSUE / 2026</span>
              </div>

              {/* Hero Headline with Mixed Italics */}
              <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl lg:text-9xl leading-[0.9] tracking-tight mb-12">
                <span className="block">Curated</span>
                <span className="block italic text-[#D4AF37]">Excellence</span>
                <span className="block">in Every Detail</span>
              </h1>

              {/* Hero Description */}
              <div className="max-w-xl">
                <p className="text-base md:text-lg leading-relaxed text-[#1A1A1A] mb-8">
                  A journal dedicated to the art of intentional living, refined aesthetics, and the timeless pursuit of beauty through restraint.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section id="posts" className="relative z-10 py-24 md:py-32">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          {/* Section Header */}
          <div className="mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#6C6863]">LATEST ENTRIES</span>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-6xl mt-4">Recent <span className="italic text-[#D4AF37]">Thoughts</span></h2>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
            {blogPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                {/* Image Container */}
                <div className="aspect-[4/5] overflow-hidden mb-6 relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1500ms] shadow-[0_4px_20px_rgba(0,0,0,0.06)] group-hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
                  />
                  {/* Vertical Label */}
                  <div className="absolute left-4 top-4 hidden lg:block">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white" style={{ writingMode: 'vertical-rl' }}>
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Post Meta */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#6C6863]">{post.category}</span>
                  <div className="h-px w-8 bg-[#1A1A1A]/20"></div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#6C6863]">{post.date}</span>
                </div>

                {/* Post Title */}
                <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl mb-3 group-hover:text-[#D4AF37] transition-colors duration-500">
                  {post.title}
                </h3>

                {/* Post Excerpt */}
                <p className="text-sm leading-relaxed text-[#6C6863] mb-4">
                  {post.excerpt}
                </p>

                {/* Read Time */}
                <span className="text-xs uppercase tracking-[0.2em] text-[#1A1A1A]">{post.readTime}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Drop Cap */}
      <section id="about" className="relative z-10 border-t border-[#1A1A1A]/10 py-24 md:py-32 bg-[#1A1A1A]">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-start-3 lg:col-span-8">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#EBE5DE]/60 mb-8 block">ABOUT</span>

              <h2 className="font-['Playfair_Display'] text-4xl md:text-6xl text-[#F9F8F6] mb-12">
                The <span className="italic text-[#D4AF37]">Philosophy</span>
              </h2>

              <div className="max-w-3xl">
                <p className="text-base md:text-lg leading-relaxed text-[#EBE5DE]/80 mb-8">
                  <span className="float-left font-['Playfair_Display'] text-7xl leading-[0.8] mr-3 text-[#D4AF37]">E</span>
                  ditorial is a celebration of the deliberate, the considered, and the timeless. We believe that true luxury emerges not from excess, but from the careful curation of what remains—the perfect balance between presence and absence, boldness and restraint.
                </p>

                <p className="text-base md:text-lg leading-relaxed text-[#EBE5DE]/80 mb-8">
                  Through thoughtfully crafted essays, visual explorations, and cultural observations, we examine the intersections of design, lifestyle, and aesthetic philosophy. Each piece is an invitation to slow down, to notice, to appreciate the profound beauty found in simplicity.
                </p>

                <p className="text-base md:text-lg leading-relaxed text-[#EBE5DE]/80">
                  This is a space for those who understand that elegance whispers rather than shouts, and that the most powerful statements are often the most understated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="subscribe" className="relative z-10 border-t border-[#1A1A1A]/10 py-24 md:py-32">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-start-3 lg:col-span-8">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#6C6863] mb-8 block">NEWSLETTER</span>

              <h2 className="font-['Playfair_Display'] text-4xl md:text-6xl mb-6">
                Subscribe for <span className="italic text-[#D4AF37]">Curated</span> Insights
              </h2>

              <p className="text-base md:text-lg leading-relaxed text-[#6C6863] mb-12 max-w-2xl">
                Receive thoughtfully selected essays, design discoveries, and cultural observations delivered directly to your inbox. Published monthly.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full bg-transparent border-b border-[#1A1A1A] h-12 px-0 py-2 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors duration-500 placeholder:font-['Playfair_Display'] placeholder:italic placeholder:text-[#6C6863]"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="relative h-12 px-8 md:px-10 bg-[#1A1A1A] text-white text-xs uppercase tracking-[0.2em] overflow-hidden group shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-shadow duration-500"
                >
                  <span className="absolute inset-0 bg-[#D4AF37] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
                  <span className="relative z-10">Subscribe</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#1A1A1A]/10 py-12">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="font-['Playfair_Display'] text-xl">Editorial</div>

            <div className="flex gap-8">
              <a href="#" className="text-xs uppercase tracking-[0.25em] text-[#6C6863] hover:text-[#D4AF37] transition-colors duration-500">Instagram</a>
              <a href="#" className="text-xs uppercase tracking-[0.25em] text-[#6C6863] hover:text-[#D4AF37] transition-colors duration-500">Twitter</a>
              <a href="#" className="text-xs uppercase tracking-[0.25em] text-[#6C6863] hover:text-[#D4AF37] transition-colors duration-500">Email</a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-[#1A1A1A]/10">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#6C6863]">
              © 2026 Editorial. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}