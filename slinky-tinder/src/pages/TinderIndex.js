import React from "react"

export default (props) => {
    return(
      <>
        <h1>TinderIndex</h1>
        <br/>

        { props.profiles.map( (profile_one, keyNum) => 
            <div key={keyNum}>
                <h2>{profile_one.name}</h2>
                <h4>{profile_one.shape}</h4>
                <h5>{profile_one.material}</h5>
                <p>{profile_one.description}</p>
            </div>) 
        }
      </>
    )
}