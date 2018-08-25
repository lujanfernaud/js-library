function compareTitles(a, b) {
  if (a.title < b.title) { return 1 }
  if (a.title > b.title) { return -1 }

  return 0
}

function compareAuthors(a, b) {
  if (a.author < b.author) { return 1 }
  if (a.author > b.author) { return -1 }

  return 0
}

export {
  compareTitles,
  compareAuthors
}
