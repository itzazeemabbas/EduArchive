// export default function About() {
//   return (
//     <section className="container-max py-16">
//       <div className="max-w-3xl">
//         <h1 className="text-4xl font-extrabold">About EduArchive</h1>
//         <p className="mt-4 text-gray-600">
//           EduArchive is a community-driven platform to discover, share and organize past question papers,
//           assignments, and course resources from universities worldwide.
//         </p>
//         <div className="mt-8 grid gap-6 md:grid-cols-3">
//           <div className="card p-6">
//             <h3 className="font-semibold">Our Mission</h3>
//             <p className="mt-2 text-sm text-gray-600">Make exam prep faster, fairer and accessible for all students.</p>
//           </div>
//           <div className="card p-6">
//             <h3 className="font-semibold">Our Vision</h3>
//             <p className="mt-2 text-sm text-gray-600">Become the largest open library of academic question papers.</p>
//           </div>
//           <div className="card p-6">
//             <h3 className="font-semibold">Community</h3>
//             <p className="mt-2 text-sm text-gray-600">Built with love by students, for students.</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }



import { GraduationCap, Target, Users } from "lucide-react";

export default function About() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <div className="container-max py-20 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900">
          About <span className="text-primary">EduArchive</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          EduArchive is a community-driven platform to discover, share and organize past 
          question papers, assignments, and course resources from universities worldwide.
        </p>
      </div>

      {/* Mission, Vision, Community */}
      <div className="container-max pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card p-8 hover:shadow-lg transition rounded-2xl text-center">
            <div className="flex justify-center mb-4">
              <Target className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Our Mission</h3>
            <p className="mt-3 text-gray-600">
              Make exam prep faster, fairer and accessible for all students.
            </p>
          </div>

          <div className="card p-8 hover:shadow-lg transition rounded-2xl text-center">
            <div className="flex justify-center mb-4">
              <GraduationCap className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Our Vision</h3>
            <p className="mt-3 text-gray-600">
              Become the largest open library of academic question papers.
            </p>
          </div>

          <div className="card p-8 hover:shadow-lg transition rounded-2xl text-center">
            <div className="flex justify-center mb-4">
              <Users className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Community</h3>
            <p className="mt-3 text-gray-600">
              Built with love by students, for students.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-primary text-white py-16 text-center">
        <h2 className="text-3xl font-bold">Join the EduArchive Community</h2>
        <p className="mt-3 text-blue-100">
          Together, let’s make education resources accessible for everyone 🚀
        </p>
        <button className="btn-white mt-6">Get Started</button>
      </div>
    </section>
  );
}
