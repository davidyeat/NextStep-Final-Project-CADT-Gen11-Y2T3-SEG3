export default function AsideDetail({title}) {
    return (
        <aside className="lg:block lg:w-1/6 shrink-0">
            <div className="bg-white rounded-lg shadow-md sticky top-18.75">
                <nav className="p-4">
                    <h3 className="font-bold text-lg mb-4 border-b pb-2">
                        {title}
                    </h3>
                    <ul id="sidebar-nav" className="space-y-2">
                        <li>
                            <button className="flex font-sans text-[14px] font-medium items-center w-full text-left px-6 py-3 rounded-lg transition-all duration-200 bg-gray-200 text-black">
                                Overview
                            </button>
                        </li>
                        <li>
                            <button className="flex font-sans text-[14px] font-medium items-center w-full text-left px-6 py-3 rounded-lg transition-all duration-200 bg-gray-200 text-black">
                                Program
                            </button>
                        </li>
                        <li>
                            <button className="flex font-sans text-[14px] font-medium items-center w-full text-left px-6 py-3 rounded-lg transition-all duration-200 bg-gray-200 text-black">
                                Admission
                            </button>
                        </li>
                        <li>
                            <button className="flex font-sans text-[14px] font-medium items-center w-full text-left px-6 py-3 rounded-lg transition-all duration-200 bg-gray-200 text-black">
                                Scholarships
                            </button>
                        </li>
                        <li>
                            <button className="flex font-sans text-[14px] font-medium items-center w-full text-left px-6 py-3 rounded-lg transition-all duration-200 bg-gray-200 text-black">
                                Facilities
                            </button>
                        </li>
                        <li>
                            <button className="flex font-sans text-[14px] font-medium items-center w-full text-left px-6 py-3 rounded-lg transition-all duration-200 bg-gray-200 text-black">
                                Campus Life
                            </button>
                        </li>
                        <li>
                            <button className="flex font-sans text-[14px] font-medium items-center w-full text-left px-6 py-3 rounded-lg transition-all duration-200 bg-gray-200 text-black">
                                Location
                            </button>
                        </li>
                        <li>
                            <button className="flex font-sans text-[14px] font-medium items-center w-full text-left px-6 py-3 rounded-lg transition-all duration-200 bg-gray-200 text-black">
                                Contact
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}