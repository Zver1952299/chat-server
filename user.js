let users = [];

const findUser = (user) => {
  console.log(user);
  const userName = user.name.trim().toLowerCase();
  const userRoom = user.room.trim().toLowerCase();

  return users.find(
    (u) => u.name.trim().toLowerCase() === userName && u.room.trim().toLowerCase() === userRoom,
  );
};

const addUser = (user) => {
  const isExist = findUser(user);

  !isExist && users.push(user);

  const currentUser = isExist || user;

  return { isExist: !!isExist, user: currentUser };
};

const getRoomUsers = (room) => users.filter((u) => u.room === room);

const removeUser = (user) => {
  const found = findUser(user);

  if (found) {
    users = users.filter(({ room, name }) => room === found.room && name !== found.name);
  }

  return found;
};

module.exports = { addUser, findUser, getRoomUsers, removeUser };
