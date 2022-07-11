import React from 'react'

const ErrorMessage = () => {
  return (
    <div
        style={{
            width: "100%",
            padding: 10,
            marginBottom: 10,
            borderRadius: 4,
            backgroundColor: "transparent",
            textAlign: "center",
            color :"red",
            textTransform :"capitalize"
        }}
    >
      Please Fill all the feilds
        {/* {children} */}
    </div>
  )
}

export default ErrorMessage;