import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HobbyList from '../components/Redux/HobbyList';
import { addNewHobby, setActiveHobby } from '../actions/hobby'

HomePage.propTypes = {

}

const randomId = () => {
    return 1000 + Math.trunc((Math.random() * 9000))
}

function HomePage(props) {
   
    const hobbyList = useSelector(state => state.hobby.list);
    const activeId = useSelector(state => state.hobby.activeId);
    const dispatch = useDispatch();
    console.log('Hobby List: ', hobbyList); 
    
    const handleAddHobby = () => {
        const newId = randomId();

        const newHobby = {
            // id: casual.uuid,
            // title: casual.title,
            id: newId,
            title: `Hobby ${newId}`,
        }

        const action = addNewHobby(newHobby);
        dispatch(action);
    }

    const handleHobbyClick = (hobby) => {
        const action = setActiveHobby(hobby);
        dispatch(action);
    }

    return (
        <div className='home-page'>
            <h1>Home Page</h1>
            <button onClick={handleAddHobby}>Random hobby</button>
            <HobbyList hobbyList={hobbyList} activeId={activeId} onHobbyClick={handleHobbyClick} />
        </div>
    )
}

export default HomePage