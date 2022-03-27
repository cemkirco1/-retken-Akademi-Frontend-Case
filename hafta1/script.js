  //elle giriş fun
 function keyboardInputHandler(e) {
  //ekrandaki yazıyı yazdır
  let res = document.getElementById("result");

  //numaralar
  if (e.key === "0") {
    res.value += "0";
  } else if (e.key === "1") {
    res.value += "1";
  } else if (e.key === "2") {
    res.value += "2";
  } else if (e.key === "3") {
    res.value += "3";
  } else if (e.key === "4") {
    res.value += "4";
  } else if (e.key === "5") {
    res.value += "5";
  } else if (e.key === "6") {
    res.value += "6";
  } else if (e.key === "7") {
    res.value += "7";
  } else if (e.key === "7") {
    res.value += "7";
  } else if (e.key === "8") {
    res.value += "8";
  } else if (e.key === "9") {
    res.value += "9";
  }

  //dört işlemler
  if (e.key === "+") {
    res.value += "+";
  } else if (e.key === "-") {
    res.value += "-";
  } else if (e.key === "*") {
    res.value += "*";
  } else if (e.key === "/") {
    res.value += "/";
  }

  //decimal yapma
  if (e.key === ".") {
    res.value += ".";
  }

  //eşittir
  if (e.key === "Enter") {
    res.value = eval(result.value || null);
  }

  //klavyeden sil
  if (e.key === "Backspace") {
    let resultInput = res.value;

    //sil
    res.value = resultInput.substring(0, res.value.length - 1);
  }
}

// ekranı temizleme
function clearScreen() {
  document.getElementById("result").value = "";
}
// ekrana yaz
function ekranaYaz(value) {
  let res = document.getElementById("result");
  if (!res.value) {
    res.value = "";
  }
  res.value += value;
}
