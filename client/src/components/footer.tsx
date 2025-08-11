export default function Footer() {
  return (
    <footer id="contact" className="bg-arc-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-arc-dark font-bold text-sm">A</span>
            </div>
            <span className="font-medium text-lg">ARC LAO SOLE COMPANY LTD</span>
          </div>
          
          <div className="text-gray-400 text-sm">
            BAN PHONETHAN, SAYSETHA, VIENTIANE, LAO PDR
          </div>
          
          <div className="text-gray-400 text-sm">
            Email: info@arclao.com
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">© 2019 ARC Lao. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
