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
    success: (data) => {
      alert(data.formMessage);
      form.find("input").each(function () {
        this.removeAttribute("disabled");
        this.value = "";
      });
    },
  });
});
