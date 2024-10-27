sequenceDiagram
participant browser
participant server

    Note left of browser: The user inputs the note title and clicks on save

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    Note right of browser: The note title input is submitted to the server endpoint new_note
    activate server
    server-->>browser: A server response with status 302. A Url redirect.
    Note right of browser: The response includes the URL path for redirection (/exampleapp/notes), prompting the browser to navigate to that route.
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser begins running the JavaScript code to retrieve the JSON data from the server.

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server

    Note right of browser: The browser runs the callback function to display the notes.
