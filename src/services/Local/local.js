function getLocalFollow() {
  return JSON.parse(localStorage.getItem(`isFollowing`));
}
function setLocalFollow(followData) {
  localStorage.setItem(`isFollowing`, JSON.stringify(followData));
}

export { getLocalFollow, setLocalFollow };
