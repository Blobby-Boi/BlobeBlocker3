function buypass() {
  if (!window.PaymentRequest) return alert("It cannot be used because it does not support Payment Request API");

  new PaymentRequest(
    [
      {
        supportedMethods: location.origin + "/payment-manifest.json",
        data: {
          url: document.querySelector("input").value
        },
      },
    ],
    {
      total: {
        label: "_",
        amount: {
          value: "1", currency: "USD"
        },
      },
    }
  ).show();
}

document.querySelector("button").onclick = buypass;
