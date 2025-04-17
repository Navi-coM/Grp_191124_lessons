const users = [
    { id: 1, name: 'Ivan', city: 'Dnipro' },
    { id: 2, name: 'Iryna', city: 'Zurich' },
    { id: 3, name: 'Oleh', city: 'Malme' },
    { id: 4, name: 'Alina', city: 'Kyiv' },
];

const UserList = () => {
    return (
        <div className="user__list">
            <h2>User List</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id} className="user__item">
                        <span>{user.id}.</span>
                        <span>{user.name} - </span> 
                        <span>{user.city}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;