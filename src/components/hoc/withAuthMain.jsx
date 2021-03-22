import React from "react"

export const withAuthMain = Component => {
  return props => {
    return (
      <>
        <header className="sumra-header">
          <div className="logotype"></div>
        </header>
        <main className="sumra-main">
          <Component {...props} className={"authentification-form"} />
        </main>
      </>
    )
  }
}
