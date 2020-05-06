export const addHash = () => {
  const hash = window.location.hash
  if (hash) {
    var els = document.querySelectorAll(`a[href='${hash}']`)
    els.forEach(el => {
      el.classList.add("current")
    })
  }
}
export const removeHash = () => {
  var els = document.querySelectorAll(`a`)
  els.forEach(el => {
    el.classList.contains("current")
    el.classList.remove("current")
  })
}
