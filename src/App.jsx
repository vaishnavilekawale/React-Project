import Header from './components/Header';
import UserList from './components/UserList';
import Footer from './components/Footer';

function App() {
  const users = [
    { id: 1, name: "Alice", role: "Developer" },
    { id: 2, name: "Bob", role: "Designer" },
    { id: 3, name: "Charlie", role: "Manager" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 to-blue-100 p-6">
      <Header title="Our Team" />
      <UserList users={users} />
      <Footer />
    </div>
  );
}

export default App;
