import React from "react"

export default (props) => {

    // Accessing the id from the URL
    const { id } = props.match.params
    // Using .find() to return the correct object from the data set
    const profile_found = props.profiles.find( (profile_candidate) => profile_candidate.id === parseInt(id))

    return(
      <>
        <h1>TinderShow</h1>
        <br/>
        <div>
            <h2>{   profile_found.name        }</h2>
            <h4>{   profile_found.shape       }</h4>
            <h5>{   profile_found.material    }</h5>
            <p>{    profile_found.description }</p>
        </div>
      </>
    )
}