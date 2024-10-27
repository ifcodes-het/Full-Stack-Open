sequenceDiagram
Title: Visiting a single-page-app version of the notes app
participant Browser
participant Server

    Note left of Browser: Brower makes GET request /exampleapp/spa endpoint

    Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
    Server-->>Browser: spa (HTML)

    Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
    Server-->>Browser: main.css

    Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    Server-->>Browser: spa.js

    Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
    Server-->>Browser: data.json raw file - [{"content":"x","date":"2020-11-07T11:25:35.518Z"},...]

    note left of Browser: notes gets rendered on Browser
