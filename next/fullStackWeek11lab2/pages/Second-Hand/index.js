import MeetupList from "../../components/meetups/MeetupList";
import { useContext } from "react";
import GlobalContext from "../store/globalContext"; // move out of /pages

function BoatSalesPage() {
  const globalCtx = useContext(GlobalContext);

  if (globalCtx?.theGlobalObject?.dataLoaded) {
    return <MeetupList meetups={globalCtx.theGlobalObject.meetings} />;
  }

  return <div>Loading data from database, please wait...</div>;
}

export default BoatSalesPage;
