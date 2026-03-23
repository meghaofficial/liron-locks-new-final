import { FaInstagram } from "react-icons/fa";

const posts = [
  {
    type: "image",
    src: "https://www.instagram.com/reel/DTudVI-D68l/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    link: "https://www.instagram.com/p/DTudVI-D68l",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
    link: "https://instagram.com",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1617806118233-18e1de247200",
    link: "https://instagram.com",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0",
    link: "https://instagram.com",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
    link: "https://instagram.com",
  },
];

export default function InstagramSection() {
  const duplicated = [...posts, ...posts]; // for infinite loop

  return (
    <section className="py-16 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-10">

        <div className="flex justify-center items-center gap-2 mb-2">
          <span className="w-6 h-0.5 bg-yellow-500"></span>
          <p className="text-gray-500 text-sm font-medium">Follow Us</p>
        </div>

        <h2 className="text-4xl font-bold">
          Follow Us On <span className="text-brand">Instagram</span>
        </h2>

      </div>

      {/* Scrolling Container */}
      <div className="relative w-full overflow-hidden">

        <div className="flex gap-6 animate-scroll">

          {duplicated.map((post, i) => (
            <a
              key={i}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative min-w-65 h-80 rounded-2xl overflow-hidden group"
            >

              {post.type === "image" ? (
                <img
                  src={post.src}
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  src={post.src}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                />
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                <FaInstagram className="text-white text-3xl" />
              </div>

            </a>
          ))}

        </div>

      </div>
    </section>
  );
}