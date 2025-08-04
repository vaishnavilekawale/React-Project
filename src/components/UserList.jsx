import UserCard from './UserCard';

function UserList({ users }) {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {users.map((user) => (
        <UserCard key={user.id} name={user.name} role={user.role} />
      ))}
    </div>
  );
}

export default UserList;
