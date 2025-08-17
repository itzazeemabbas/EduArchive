export default function Footer() {
  return (
    <footer className="mt-16 bg-white border-t border-gray-100">
      <div className="container-max py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-extrabold text-xl text-primary">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">EA</span>
              <span>EduArchive</span>
            </div>
            <p className="mt-3 text-sm text-gray-600">
              Your one-stop destination for academic resources and question papers.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="/search" className="hover:text-primary">Browse Papers</a></li>
              <li><a href="/about" className="hover:text-primary">About</a></li>
              <li><a href="/upload" className="hover:text-primary">Upload</a></li>
              <li><a href="/contact" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Support</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a className="hover:text-primary">Help Center</a></li>
              <li><a className="hover:text-primary">Privacy Policy</a></li>
              <li><a className="hover:text-primary">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Newsletter</h4>
            <div className="mt-3 flex">
              <input placeholder="Your email" className="flex-1 h-10 rounded-l-lg border border-gray-200 px-3 focus:outline-none focus:ring-2 focus:ring-primary/30"/>
              <button className="btn-primary rounded-l-none rounded-r-lg h-10 py-0">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-100 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} EduArchive. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
