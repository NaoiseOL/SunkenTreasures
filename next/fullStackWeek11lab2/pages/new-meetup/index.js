// our-domain.com/new-boat
import NewBoatForm from '../../components/meetups/NewMeetupForm'; // updated import
import { useRouter } from 'next/router';
import GlobalContext from "../../pages/store/globalContext";
import { useContext } from 'react';

function NewBoatPage() {
  const router = useRouter();
  const globalCtx = useContext(GlobalContext);

  async function addBoatHandler(enteredBoatData) {
  const boatWithId = {
    ...enteredBoatData,
    boatId: Date.now().toString(), // generate a unique ID
  };

  await globalCtx.updateGlobals({
    cmd: "addBoat",   // use a boat-specific command for clarity
    newVal: boatWithId,
  });

  router.push("/SecondHandBoats"); // redirect to your boats page
}


  return <NewBoatForm onAddBoat={addBoatHandler} />;
}

export default NewBoatPage;