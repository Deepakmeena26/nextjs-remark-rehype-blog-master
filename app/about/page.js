import Image from 'next/image';

export default function About() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-32 bg-gray-100 dark:bg-gray-700 ">
        <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0 ">
              <div className="relative w-48 h-48 rounded-full overflow-hidden">
                <Image
                  src="/logo.jpg"
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center ">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h1>
              <p className="text-gray-600 dark:text-gray-50 text-lg mb-4">
                Hello! I&apos;m Deepak, a passionate software developer and tech enthusiast. I created this blog to share my experiences, tips, and tutorials on various programming languages and technologies. I believe that learning should be a continuous journey, and I&apos;m here to help others on their path to mastering the art of coding.
              </p>
              <p className="text-gray-600 dark:text-gray-50 text-lg">
                Whether you&apos;re just starting out or looking to sharpen your skills, you&apos;ll find a variety of resources and insights here. Let&apos;s explore the world of programming together!
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50 dark:bg-gray-800 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Deepak&apos;s Journey as a Coder</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-50">
              From curious beginner to seasoned developer, here&apos;s how Deepak navigated the world of programming.
            </p>
          </div>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <img src="/3.jpg" alt="Deepak as a beginner" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white dark:text-white">The Spark of Curiosity</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                Deepak&apos;s coding journey began during his school days when he first discovered the world of programming through Python. What started as a casual curiosity soon turned into a deep passion. He began building mini-projects, exploring web development, and diving into languages like JavaScript, Java, and C++. Over time, this enthusiasm led him to pursue a B.Tech in Computer Science at IIITDM Jabalpur, where he further honed his skills by working on real-time projects, contributing to open-source, and interning as a software developer.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <img src="/2.jpg" alt="Deepak learning new skills" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Diving Deeper</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                After grasping the fundamentals, Deepak&apos;s curiosity evolved into a disciplined pursuit of excellence. He delved deeper into core computer science concepts like data structures, algorithms, and object-oriented programming, solving over 700 problems on LeetCode and ranking in the top 4.56%. Simultaneously, he explored full-stack web development using React.js, Node.js, and MongoDB. To gain practical experience, he worked on real-world projects like Wanderlust and E-Commerce Sales Analysis, and sharpened his backend skills with Java and Spring Boot in his real-time chat app. Through internships at FUSION and Vidgyapan Mart, he seamlessly applied this growing expertise in collaborative environments, bridging the gap between theory and real-world application.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <img src="/1.jpg" alt="Deepak working on a big project" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Taking on Challenges</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                Taking on Challenges
                With several years of experience under his belt, Deepak began tackling more significant challenges. From contributing to open-source projects to developing his own applications, Deepak continued to push his limits, always looking for opportunities to learn and grow. His journey wasn&apos;t without its setbacks, but each obstacle was a stepping stone to becoming the skilled developer he is today.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <img src="/4.jpg" alt="Deepak mentoring others" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Giving Back</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                Today, Deepak stands not only as a skilled developer but also as a guiding force for aspiring coders. Whether it&apos;s helping peers debug complex problems, sharing insights on platforms like GitHub and LeetCode, or documenting projects to ease onboarding for new teammates, he consistently finds ways to uplift others. During his internship at FUSION, his well-structured documentation led to a 40% reduction in training time—an example of his passion for knowledge sharing. For Deepak, coding goes beyond solving problems—it&apos;s about building a community, empowering others, and growing together in the ever-evolving world of technology.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
