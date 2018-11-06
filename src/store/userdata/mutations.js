
export function updateUserDataState (state, data) {
  state.token = data.token
  state.displayname = data.displayname
  state.connected = data.connected
}
