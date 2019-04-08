import { createContext, Component } from 'react';

export const UserContext = createContext();

class UserProvider extends Component {
  state = {
    user: true
  };

  changeUserState = () => {
    this.setState({
      user: !this.state.user
    });
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state.user,
          changeUserState: this.changeUserState
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

const UserConsumer = UserContext.Consumer;

export default UserProvider;
export { UserConsumer };
