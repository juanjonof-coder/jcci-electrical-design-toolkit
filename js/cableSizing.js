function calculateCableSize() {

    const load =
    Number(
        document.getElementById(
            "load"
        ).value
    );

    const terminal =
    document.getElementById(
        "terminalRating"
    ).value;

    const result =
    document.getElementById(
        "resultBox"
    );

    if(load <= 0){

        result.innerHTML = `
        <h3>Error</h3>
        Please enter a valid load.
        `;

        return;

    }

    let selected = null;

    for(const conductor of NEC31016){

        let ampacity = 0;

        if(terminal === "60"){

            ampacity =
            conductor.a60;

        }

        else if(terminal === "75"){

            ampacity =
            conductor.a75;

        }

        else{

            ampacity =
            conductor.a90;

        }

        if(ampacity >= load){

            selected = {

                size:
                conductor.size,

                ampacity:
                ampacity

            };

            break;

        }

    }

    if(!selected){

        result.innerHTML = `
        <h3>No Suitable Conductor Found</h3>

        Load exceeds current database.
        `;

        return;

    }

    result.innerHTML = `

    <h2>
    Recommended Conductor
    </h2>

    <p>

    <strong>

    ${selected.size}

    </strong>

    </p>

    <hr>

    <p>

    Required Load:

    ${load} A

    </p>

    <p>

    Available Ampacity:

    ${selected.ampacity} A

    </p>

    <hr>

    <p>

    Code Basis:

    NEC 2023 Table 310.16

    </p>

    <p>

    Status:

    PASS

    </p>

    `;

}
