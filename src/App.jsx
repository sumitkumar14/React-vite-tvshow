import  AppBar from '@/components/AppBar'
import { useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "@/components/Home";
import About from "@/components/About";
import ShowTvSeries from '@/Views/ShowTvseries'
import ShowTvSeriesDetails from '@/Views/ShowTvSeriesDetails'
import Dialog from "@/components/Dialog";
import { useSelector, useDispatch } from "react-redux";
import { openDialog, closeDialog } from "@/features/counterSlice";
import './App.css'

function App() {
  const showDialog = useSelector((state) => state.counter.showDialog);
  const dispatch = useDispatch();

  const handleDialog = useCallback(() => {
    dispatch(openDialog());
  }, [dispatch]);

  const handleClose = useCallback(() => {
    dispatch(closeDialog());
  }, [dispatch]);


  return (
    <>
    {showDialog}
        <div>
            <Dialog show={showDialog} handleClose={handleClose} />
        </div>

    <AppBar dialogAction={handleDialog}/>
     <Routes>
      <Route path="/" element={<ShowTvSeries />} />
      <Route path="/ShowTvSeriesDetails/:id" element={<ShowTvSeriesDetails />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </>
  )
}

export default App
