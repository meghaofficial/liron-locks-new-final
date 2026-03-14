const blogs = [
  {
    title: "Furniture Trends 2024: What's Hot and What's Not",
    image:
      "https://res.cloudinary.com/dlmdsldqn/image/upload/v1772560325/1772559873415_v3bill.png",
    date: "15 April 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    title: "The Ultimate Guide to Choosing the Perfect Sofa",
    image:
      "https://res.cloudinary.com/dlmdsldqn/image/upload/v1772560325/1772559695793_kxqpye.png",
    date: "14 April 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    title: "Choosing the Right Dining Table for Your Lifestyle",
    image:
      "https://res.cloudinary.com/dlmdsldqn/image/upload/v1772555408/Picsart_26-03-03_21-58-58-685_kj13qo.jpg",
    date: "12 April 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
];

export default function NewsBlogs() {
  return (
    <section className="bg-white py-16 sm:px-18 px-5">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">

          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-0.5 bg-yellow-500"></span>
              <p className="text-gray-500 text-sm font-medium">
                News & Blogs
              </p>
            </div>

            <h2 className="text-4xl font-bold leading-tight">
              Our Latest <br />
              <span className="text-brand">News & Blogs</span>
            </h2>
          </div>

          <button className="mt-6 md:mt-0 bg-brand cursor-pointer text-white px-6 py-3 rounded-full font-medium">
            View All Blogs
          </button>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogs.map((blog, index) => (
            <div key={index} className="group">

              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={blog.image}
                  className="w-full h-60 object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Date badge */}
                <div className="absolute bottom-0 left-[30%] bg-yellow-500 text-black px-4 py-1 rounded-t-md text-sm font-medium shadow tracking-wider text-[13px]">
                  {blog.date}
                </div>
              </div>

              {/* Content */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold leading-snug mb-3">
                  {blog.title}
                </h3>

                <p className="text-gray-500 text-sm mb-4">
                  {blog.description}
                </p>

                <a
                  href="#"
                  className="text-brand font-medium underline text-[14px]"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}