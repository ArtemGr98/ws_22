import {connect} from "react-redux";
import React from "react";
import Profile from "./Profile";
import {
    addPost,
    setProfileInfo,
    setStatus,
    updateStatus
} from "../../redux/actions/actionsCreators";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = this.props.authMeId
        }
        this.props.setProfileInfo(userId)
        this.props.setStatus(userId)
    }

    render() {
        return <Profile {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile.profileInfo,
        authMeId: state.authMe.id,
        postData: state.profile.postData,
        status: state.profile.status
    }
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default compose(
    connect(mapStateToProps, {setProfileInfo, addPost, setStatus, updateStatus}),
    withAuthRedirect,
    withRouter
)(ProfileContainer)
