import Salutation from "../salutation"
import "./index.css"

export function SalutationCmd() {
  return (
    <>
      <div style={{ fontSize: "130%" }}>
        <strong>Bem vindo!</strong>.
      </div>
      <Salutation />
      <div style={{ fontSize: "120%" }}>
        Para mais informações digite{" "}
        <span style={{ color: "green" }}>
          <strong>help</strong>
        </span>{" "}
        e aperte enter.
      </div>
    </>
  )
}
