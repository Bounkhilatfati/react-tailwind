import CreateAccount from "./components/CreateAccount";
import DeleteAccount from "./components/DeleteAccount";
function App() {
  return (
    <div className="flex width-80 py-3 bg-gradient-to-b from-[#33A4E399] to-[#B0EFB399] custom:flex-row flex-col space-y-3 items-center custom:items-start custom:space-y-0 custom:justify-center">
      <CreateAccount />
      <DeleteAccount />
    </div>
  );
}

export default App;
