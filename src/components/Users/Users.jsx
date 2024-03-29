import User from "./User";
import Pagination from "../common/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { changePage, setUsers } from "../../redux/users/users";
import Loader from "../common/Loader/Loader";

const Users = () => {
    const usersState = useSelector(state => state.users)
    const isLoader = useSelector(state => state.users.isLoader)
    const {usersInfo, currentPage, countUsers} = usersState
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setUsers(currentPage, countUsers))
    }, [dispatch, currentPage, countUsers])

    const onChangePage = (pageNum) => {
        dispatch(changePage(pageNum))
        dispatch(setUsers(pageNum, countUsers))
    }

    return (
        <div>
            <Pagination {...usersState} onChangePage={onChangePage} />
            {isLoader && <Loader />}
            {usersInfo.map(user => {
                return (
                    <User user={user} key={user.id}/>
                )
            })}
        </div>
    )
}

export default Users