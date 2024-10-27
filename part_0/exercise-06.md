sequenceDiagram
participant Browser
participant Server

    Title  Creating Notes using Single Page App(SPA)

    Note left of Browser: user types in note title and clicks the submit button. An HTTP POST request is made to new_note_spa address

    Browser->Server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa

    Note right of Server: The Content-Type in the request header informs the server that the POST request carries JSON data.
    Note over Server: The server runs JavaScript code to update the page by appending the new note to the existing content.

    Server-->Browser: {"message":"note created"}
    note left of Browser: note list gets rendered on Browser
