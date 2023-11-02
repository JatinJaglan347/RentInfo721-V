$(document).ready(function () {
    $("#roomInfoForm").on("submit", function (e) {
        e.preventDefault();

        // Show the loader and hide the submit button
        $("#loader").show();
        $("#submitButton").hide();

        // Perform the form submission
        $.ajax({
            url: $(this).attr("action"),
            method: "POST",
            data: $(this).serialize(),
            success: function (response) {
                // Handle the response as needed
                console.log(response);
                // Hide the loader and show the submit button
                $("#loader").hide();
                $("#submitButton").show();

                // Reload the page to clear the form and start over
                window.location.reload();
            },
            error: function (error) {
                console.error(error);
                // Hide the loader and show the submit button
                $("#loader").hide();
                $("#submitButton").show();
            }
        });
    });
});
