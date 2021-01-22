import React, { useEffect, useState } from "react"
import * as typeformEmbed from "@typeform/embed"
import ActionButton from "../components/common/ActionButtons"
import { EARLY_ACCESS_TYPEFORM } from "../components/Constants"

const Typeform = ({ className }) => {
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
      text="Join the Beta waitlist"
      onClick={() => setOpenForm(true)}
    />
  )
}

export default Typeform
