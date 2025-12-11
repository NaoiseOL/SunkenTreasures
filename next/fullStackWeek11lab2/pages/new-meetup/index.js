// our-domain.com/new-boat
import NewBoatForm from '../../components/meetups/NewMeetupForm'; // updated import
import { useRouter } from 'next/router';
import GlobalContext from "../../pages/store/globalContext";
import { useContext } from 'react';

function NewBoatPage() {
  const router = useRouter();
  const globalCtx = useContext(GlobalContext);

  async function addBoatHandler(enteredBoatData) {
    // still uses the same global update command, but with boat data
    await globalCtx.updateGlobals({ cmd: 'addMeeting', newVal: enteredBoatData });
    router.push('/'); // redirect back to homepage
  }

  return <NewBoatForm onAddBoat={addBoatHandler} />;
}

export default NewBoatPage;