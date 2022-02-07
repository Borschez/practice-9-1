const AuthSecret = "Qm9yc2NoZXo6Z2hwX2hmSHFhMVFudjVMWFVYYUtOR1JlTjdxR0xzOUlwMzJLYjNOWQ=="

export const updateIssue = async (issue_number, state) =>
    fetch(`https://api.github.com/repos/Borschez/practice-9-1/issues/${issue_number}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Basic ${AuthSecret}`
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
