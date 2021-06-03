function save(){
  browser.storage.sync.set({
    text: document.getElementById("note").value
  })
}

function restore(){
  function setText(result) {
    document.getElementById("note").value = result.text || ""
  }

  function error(){
    console.log("an error occured when loading data")
    console.log(error)
  }
let data = browser.storage.sync.get("text")
data.then(setText, error)
}

document.addEventListener("DOMContentLoaded", restore)
document.getElementById("note").addEventListener("blur", save)
