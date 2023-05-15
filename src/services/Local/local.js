function getLocalFollow() {
  return JSON.parse(localStorage.getItem(`isFollowing`));
}
function changeLocalFollow(followData) {
  localStorage.setItem(`isFollowing`, JSON.stringify(followData));
}

export { getLocalFollow, changeLocalFollow };
