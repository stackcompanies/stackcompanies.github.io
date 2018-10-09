
// Copyright (C) 2018 STACK COMPANIES, INC. All rights reserved.
// TODO: automated support system with ticket numbers

"use strict";

let emailPattern = "^[a-zA-z\\d._-]+[@][a-zA-z\\d._-]+[.][a-z]+$";

$(function () {

    $("#asset").change(function () {

        if ($("#asset").val() === "Other") {
            $("#other-row").show();
        }
        else {
            $("#other-row").hide();
        }
    });
});

function resetErrors() {

    let fields = ["name", "email", "asset", "other", "issue"];

    fields.forEach(function (field) {

        $("#" + field).removeClass("is-invalid");
    });
}

function submitForm() {

    resetErrors();
    var error = false;

    let name = $("#name").val().trim();
    let email = $("#email").val().trim();
    let asset = $("#asset").val();
    let other = $("#other").val();
    let issue = $("#issue").val().trim();

    let re = new RegExp(emailPattern, "g");

    if (!re.test(email)) {
        $("#email").addClass("is-invalid");
        error = true;
    }

    if (asset === null) {
        $("#asset").addClass("is-invalid");
        error = true;
    }

    if (asset === "Other" && other === "") {
        $("#other").addClass("is-invalid");
        error = true;
    }

    if (issue === "") {
        $("#issue").addClass("is-invalid");
        error = true;
    }

    if (!error) {
        // ###

        $("#inquiry").hide();
        $("#submitted").show();
    }
}