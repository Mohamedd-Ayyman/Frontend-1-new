
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, UserRound, FileText, Stethoscope } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      {/* Navigation */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Stethoscope className="h-8 w-8 text-blue-600 mr-2" />
              <h1 className="text-2xl font-bold text-blue-700">MediCare</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-600 hover:text-blue-700">Home</Link>
              <Link to="#services" className="text-gray-600 hover:text-blue-700">Services</Link>
              <Link to="#about" className="text-gray-600 hover:text-blue-700">About</Link>
              <Link to="#contact" className="text-gray-600 hover:text-blue-700">Contact</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button asChild variant="outline">
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Modern Healthcare Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Secure, accessible, and patient-centered healthcare management system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-lg py-6 px-8">
              <Link to="/signup">Get Started</Link>
            </Button>
            <Button asChild variant="outline" className="text-lg py-6 px-8">
              <Link to="/login">Existing Users</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 inline-flex mb-6">
                <UserRound className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Patient Portal</h3>
              <p className="text-gray-600">
                Securely access your medical records, manage appointments, and view prescriptions from anywhere.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 inline-flex mb-6">
                <Calendar className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Appointment Management</h3>
              <p className="text-gray-600">
                Schedule, reschedule, or cancel appointments with ease. Receive reminders for upcoming visits.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 inline-flex mb-6">
                <FileText className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Medical Records</h3>
              <p className="text-gray-600">
                Access your complete medical history, test results, and treatment plans in one secure location.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl mb-8">
            Join thousands of patients and healthcare providers who are already using our platform.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild variant="secondary" className="py-6 px-8 text-lg">
              <Link to="/signup">Create Account</Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent border-white hover:bg-white hover:text-blue-600 py-6 px-8 text-lg">
              <Link to="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4 text-gray-600">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center">
                <Stethoscope className="h-6 w-6 text-blue-600 mr-2" />
                <span className="text-xl font-bold text-blue-700">MediCare</span>
              </div>
              <p className="mt-4 max-w-xs">
                Providing modern healthcare solutions for patients and providers.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Product</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-blue-700">Features</a></li>
                  <li><a href="#" className="hover:text-blue-700">Pricing</a></li>
                  <li><a href="#" className="hover:text-blue-700">Testimonials</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-blue-700">About</a></li>
                  <li><a href="#" className="hover:text-blue-700">Careers</a></li>
                  <li><a href="#" className="hover:text-blue-700">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Support</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-blue-700">Help Center</a></li>
                  <li><a href="#" className="hover:text-blue-700">Privacy</a></li>
                  <li><a href="#" className="hover:text-blue-700">Terms</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center text-sm">
            <p>© {new Date().getFullYear()} MediCare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
