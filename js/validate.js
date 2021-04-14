function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.

  // get the value of latitude and longitude
  const latitude = document.querySelector("#latitude").value;
  const longitude = document.querySelector("#longitude").value;

  // if latitude not achieve the condition
  if (!(latitude >= -90 && latitude <= 90)) {
    event.preventDefault(); // stop the submitting
    document.querySelector(".spanLongitude").textContent = "*"; //reset longitude warning
    document.querySelector(".spanLatitude").textContent =
      "* must be a valid Latitude (-90 to 90)"; // set latitude warning

    // else if longitude not achieve the condition
  } else if (!(longitude >= -180 && longitude <= 180)) {
    event.preventDefault(); // stop the submitting
    document.querySelector(".spanLatitude").textContent = "*"; //reset latitude warning
    document.querySelector(".spanLongitude").textContent =
      "* must be a valid Longitude (-180 to 180)"; // set longitude warning

    // if latitude and longitude both achieve their conditions
  } else {
    document.querySelector(".spanLatitude").textContent = "*"; //reset latitude warning
    document.querySelector(".spanLongitude").textContent = "*"; //reset longitude warning
  }

  console.log(
    "TODO - validate the longitude, latitude values before submitting"
  );
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = validate;
};
