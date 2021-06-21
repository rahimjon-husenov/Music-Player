import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMusic} from '@fortawesome/free-solid-svg-icons'

const Nav = ({libraryStatus,setLibraryStatus}) => {
    return(
        <nav>
            <h1>Sounds</h1>
            <button className="librarysound" onClick={()=> setLibraryStatus(!libraryStatus)}>
                Library sound
                <FontAwesomeIcon icon={faMusic}  />
            </button>
        </nav>
    )
}
export default Nav

