$("#createFormUser").on("submit", (event) => {
  event.preventDefault();
  let data = {};
  let form = $(event.target);
  form.find("input").each(function () {
    this.setAttribute("disabled", true);
    data[this.name] = this.value;
  });
  $.ajax({
    method: "POST",
    data: data,
    url: "/users/create",
    success: (data) => {
      const options = {
        style: {
          main: {
            background: "#222",
            color: "#fff",
          },
        },
      };
      iqwerty.toast.toast(data.formMessage, options);
      if (data.success == "true") {
        form.find("input").each(function () {
          this.removeAttribute("disabled");
          this.value = "";
        });
      } else {
        form.find("input").each(function () {
          this.removeAttribute("disabled");
        });
      }
    },
    error: (data) => {
      alert(data.responseJSON);
    },
  });
});
