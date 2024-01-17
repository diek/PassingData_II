const ListUsers = ({ users }) => {
  console.log(users);
  return (
    <ol className="user-list">
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ol>
  );
};

export default ListUsers;
