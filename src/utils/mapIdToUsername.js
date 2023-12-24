function mapUserIdToName(userId,users) {
  const user = users.find(user => user.id === userId);
  return user ? user.name :null
}

export default mapUserIdToName

