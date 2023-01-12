export function displaySortInfo(sortType, sortOrder) {
  const sortInfo = document.querySelector(".type-of-sort");
  if (sortType === "title" && sortOrder === "asc") {
    sortInfo.innerText += ` Title A-Z`;
  } else if (sortType === "title" && sortOrder === "desc") {
    sortInfo.innerText += ` Title Z-A`;
  } else if (sortType === "created" && sortOrder === "asc") {
    sortInfo.innerText += ` Oldest Posts`;
  } else if (sortType === "created" && sortOrder === "desc") {
    sortInfo.innerText += ` Newest Posts`;
  }
}
