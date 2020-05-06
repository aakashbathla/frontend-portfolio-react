export const addHash = () => {
  const hash = window.location.hash
  if (hash) {
    var els = document.querySelectorAll(`a[href='${hash}']`)
    els.forEach(el => {
      el.classList.add("current")
    })
    // if (els[0] && els[1]) {
    //   els[0].classList.add("current")
    //   els[1].classList.add("current")
    //   setTimeout(() => {
    //     if (els[2]) {
    //       els[2].classList.add("current")
    //     }
    //   }, 0)
    // }
  }
}
export const removeHash = () => {
  var els = document.querySelectorAll(`a`)
  els.forEach(el => {
    el.classList.contains("current")
    el.classList.remove("current")
  })
}
