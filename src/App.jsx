import AppBar from "@/components/AppBar";
import Dialog from "@/components/Dialog";
import { useSelector, useDispatch } from "react-redux";
import { openDialog, closeDialog } from "@/features/counterSlice";
import AppRoutes from "./routes"; // Import the routes file

function App() {
  const showDialog = useSelector((state) => state.counter.showDialog);
  const auth = useSelector((state) => state.counter.auth);
  const dispatch = useDispatch();
 // Authentication state

  const handleDialog = () => dispatch(openDialog());
  const handleClose = () => dispatch(closeDialog());

  return (
    <>
      <Dialog show={showDialog} handleClose={handleClose} />
      <AppBar dialogAction={handleDialog} />
      <AppRoutes auth={auth} /> {/* Render all routes from the separate file */}
      </>
  );
}

export default App;