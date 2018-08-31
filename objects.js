var playlist = {
  Maggie: 'Alaska',
  Dio: 'Holy Diver'
}

function updatePlaylist(playlist, artistName, songTitle) = {
  return Object.assign({}, playlist, { [artistName]: songTitle })
}

