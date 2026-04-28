"use client"

type ToastProps = {
  title?: string
  description?: string
  variant?: "default" | "destructive"
}

export function toast(props: ToastProps) {
  console.log("Toast:", props)
}

export function useToast() {
  return {
    toast,
    dismiss: () => {},
    toasts: [],
  }
}