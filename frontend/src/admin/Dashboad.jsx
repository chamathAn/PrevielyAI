import React from 'react'
import { useUser } from "@clerk/clerk-react";

export default function Dashboad() {
    const { user, isLoaded } = useUser();
  return (
    <div >
      Admin
      {
        user?.publicMetadata?.role !== "admin" ? (
          <>fdfdf</>
        ) : (
          <>user</>
        )
      }
    </div>
  )
}
