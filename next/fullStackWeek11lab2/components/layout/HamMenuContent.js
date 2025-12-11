import classes from './HamMenuContent.module.css'
import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import GlobalContext from "../../pages/store/globalContext"

export default function HamMenuContent(props) {
    const globalCtx = useContext(GlobalContext)
    const router = useRouter()
    const [popupToggle, setPopupToggle] = useState(false)

    if (globalCtx.theGlobalObject.hideHamMenu) {
        return null
    }

    // Map display titles to actual folder names
    const routeMap = {
        'Boats': 'Boats',             // matches pages/Boats/index.js
        'New Meetup': 'new-meetup' // matches pages/new-meetup/index.js
        // add more mappings if needed
    }

    function clicked(itemName) {
        globalCtx.updateGlobals({ cmd: 'hideHamMenu', newVal: true })
        const route = routeMap[itemName] || itemName
        router.push(`/${route}`) 
    }

    function closeMe() {
        globalCtx.updateGlobals({ cmd: 'hideHamMenu', newVal: true })
        setPopupToggle(!popupToggle)
    }

    const contentJsx = props.contents.map((item, index) => (
        <div 
            className={classes.menuItem} 
            key={index} 
            onClick={() => clicked(item.title)}
        >
            {item.title}
        </div>
    ))

    return (
        <div className={classes.background} onClick={closeMe}>
            <div className={classes.mainContent}>
                {contentJsx}
            </div>
        </div>
    )
}
