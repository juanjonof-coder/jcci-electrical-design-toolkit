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
        Please enter a valid load.
        `;

        return;

    }

    let selected = null;

    for(let conductor of NEC31016){

        let ampacity;

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
        No conductor found.
        `;

        return;

    }

    result.innerHTML = `

    <h3>
    Recommended Conductor
    </h3>

    <p>

    <strong>

    ${selected.size}

    </strong>

    </p>

    <p>

    Base Ampacity:

    ${selected.ampacity} A

    </p>

    <hr>

    <p>

    Source:

    NEC Table 310.16

    </p>

    <p>

    Status:

    PASS

    </p>

    `;

}
