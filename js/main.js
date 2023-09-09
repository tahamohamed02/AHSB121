document.getElementById("year").innerHTML = new Date().getFullYear();
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

// Input vars
const resultBTN = document.getElementById("reciveRes");
const inputField = document.getElementById("input");
const textError = document.querySelector(".text-error");
const copyinput = document.getElementById("copyinput");
const copyres = document.getElementById("copyres");

// Results Inputs
let taxOF = document.getElementById("taxOF");
let TaxResult = document.getElementById("tax");
let userRecive = document.getElementById("userRes");
let mountShouldSend = document.getElementById("mountSh");

// Calculation

function changing() {
  if (inputField.value.toString().length > 25) {
    inputField.value = inputField.value.slice(0, 25);
    return Toast.fire({
      icon: "error",
      title: "Max 25 number",
    });
  }
  const pullTax = Math.round((inputField.value * 5) / 100);
  const fullValueToUser = Math.round(
    inputField.value - (inputField.value * 5) / 100
  );
  const howMuchToSend = Math.round((inputField.value * 20) / 19 + 1);
  taxOF.textContent = Number(inputField.value).toLocaleString();
  TaxResult.textContent = pullTax.toLocaleString();
  userRecive.textContent = fullValueToUser.toLocaleString();
  mountShouldSend.textContent = howMuchToSend.toLocaleString();
}

// Help Button
const helpBTN = document.getElementById("helpBTN");
helpBTN.addEventListener("click", () => {
  Swal.fire({
    title: "Need Help?",
    html: '<a href="" target="_blank" class="contact">Support Server</a>',
    imageUrl: 'https://cdn.discordapp.com/attachments/554554192648470528/976975694745702440/unknown.png',
    imageWidth: 500,
    imageHeight: 200,
    imageAlt: "Custom image",
  });
});

function manageCopyValue(lang) {
  if (lang == "arabic") {
    copyinput.value = `البوت سيأخذ: ${TaxResult.textContent}\nالمبلغ الذي سيستلمه الشخص: ${userRecive.textContent}\nالمبلغ الذي يجب تحويله لأستلام المبلغ كاملاً: ${mountShouldSend.textContent}`;
  } else {
    copyinput.value = `The bot will take: ${TaxResult.textContent}\nHow much will a person get?: ${userRecive.textContent}\nThe amount that must be transferred to receive the full amount: ${mountShouldSend.textContent}`;
  }
}

// Copy Method
copyres.addEventListener("click", () => {
  if (location.href.includes("index.html")) {
    manageCopyValue("arabic");
  } else {
    manageCopyValue("english");
  }
  copyinput.removeAttribute("hidden");
  copyinput.select();
  copyinput.setSelectionRange(0, 9999999999);
  document.execCommand("copy");
  copyinput.setAttribute("hidden", "");

  Toast.fire({
    icon: "success",
    title: "Copied",
  });
});

inputField.addEventListener('input', (e) => {
  if (inputField.value) {
    copyres.removeAttribute('disabled');
  } else {
    copyres.setAttribute('disabled', '');
  }
})


const ArrowDown = document.getElementById("arrow_down");
ArrowDown.addEventListener("click", () => {
  if (ArrowDown.innerHTML == '<i class="fas fa-chevron-down"></i>') {
    ArrowDown.innerHTML = '<i class="fas fa-chevron-up"></i>';
  } else {
    ArrowDown.innerHTML = '<i class="fas fa-chevron-down"></i>';
  }
});
