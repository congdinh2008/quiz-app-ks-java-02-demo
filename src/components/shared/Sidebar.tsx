const Sidebar = () => {
    return (
        <div className="w-64 h-full bg-gray-800 text-white p-4">
            <h2 className="text-2xl font-bold mb-4">Menu</h2>
            <ul>
                <li className="mb-2"><a href="#" className="hover:underline">Dashboard</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">Quiz Management</a></li>
            </ul>
        </div>
    );
}
export default Sidebar;