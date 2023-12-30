"use client"

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web"

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("9961f889-f50d-46b9-91fe-d5914b7964a9")
  }, [])

    return null
}