
const API_TOKEN = "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";

export const updateIssue = async (issue_number, state) =>
    fetch(`https://api.github.com/repos/Borschez/practice-9-1/issues/${issue_number}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Basic ${btoa(`Borschez: ${API_TOKEN}`)}`
        },
        body: JSON.stringify({
            "owner": 'Borschez',
            "repo": 'practice-9-1',
            "issue_number": issue_number,
            "state": state
        })
    }).then((response) => response.json());

export const getIssues = (state) =>
    fetch(`https://api.github.com/repos/Borschez/practice-9-1/issues?state=${state}`)
        .then(response => response.json())        
