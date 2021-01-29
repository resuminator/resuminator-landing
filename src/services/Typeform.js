import * as typeformEmbed from "@typeform/embed"
import React, { useEffect, useState } from "react"
import ActionButton from "../components/common/ActionButtons"
import { EARLY_ACCESS_TYPEFORM } from "../components/Constants"

const Typeform = ({ className, disabled }) => {
  const [openForm, setOpenForm] = useState(false)

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const typeForm = typeformEmbed.makePopup(EARLY_ACCESS_TYPEFORM, {
        mode: "drawer_right",
        hideFooter: true,
        hideHeaders: true,
        opacity: 0,
        onSubmit: () => {
          typeForm.close()
          setOpenForm(false)
        },
        onClose: () => setOpenForm(false),
      })

      if (openForm) {
        typeForm.open()
      }
    }
  }, [openForm])

  return (
    <ActionButton
      className={className}
      text="Beta waitlist full!"
      onClick={() => setOpenForm(true)}
      disabled={disabled}
    />
  )
}

export default Typeform
