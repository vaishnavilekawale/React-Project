function UserCard({ name, role }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-60 text-center hover:scale-105 transition-transform">
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-500">{role}</p>
    </div>
  );
}

export default UserCard;
