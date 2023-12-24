function mapUserIdToName(userId,users) {
  const user = users.find(user => user.id === userId);
  return user ? user :null
}

export default mapUserIdToName

