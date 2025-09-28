// It reuses the same state shape, handlers, and submission flow as your working code.

"use client"

import type React from "react"

import { useRef, useState } from "react"
import { QRCodeSVG } from "qrcode.react"
import { Download } from "lucide-react"
import { v4 as uuidv4 } from "uuid"
import Link from "next/link"

type PaymentData = {
  network: string
  token: string
  orgName: string
  amount: string
  walletAddress: string
  frequency: string
  duration: string
  description: string
}

// Frequency options updated to include minutes (requested) plus hours/weeks
const frequencyOptions = [
  { value: "1min", label: "Every 1 minute" },
  { value: "2min", label: "Every 2 minutes" },
  { value: "3min", label: "Every 3 minutes" },
  { value: "10min", label: "Every 10 minutes" },
  { value: "1hr", label: "Every 1 hour" },
  { value: "3hrs", label: "Every 3 hours" },
  { value: "6hrs", label: "Every 6 hours" },
  { value: "12hrs", label: "Every 12 hours" },
  { value: "1week", label: "Every 1 week" },
  { value: "2weeks", label: "Every 2 weeks" },
]

const durationOptions = [
  { value: "1day", label: "1 day" },
  { value: "1week", label: "1 week" },
  { value: "2weeks", label: "2 weeks" },
  { value: "1month", label: "1 month" },
  { value: "3months", label: "3 months" },
  { value: "6months", label: "6 months" },
  { value: "1year", label: "1 year" },
  { value: "indefinite", label: "Indefinite" },
]

export default function AnimatedAutoReceiveForm() {
  // Keep the same data shape and defaults (ETH/PYUSD fixed)
  const [formData, setFormData] = useState<PaymentData>({
    network: "ETH",
    token: "PYUSD",
    orgName: "",
    amount: "",
    walletAddress: "",
    frequency: "1min",
    duration: "1week",
    description: "",
  })

  // Preserve submit + QR behavior
  const [qrId, setQrId] = useState<string | null>(null)
  const qrRef = useRef<HTMLDivElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    if (!formData.orgName || !formData.amount || !formData.walletAddress) {
      alert("Please fill in all required fields")
      return
    }

    const id = uuidv4()

    try {
      const response = await fetch("/api/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, ...formData }),
      })

      if (response.ok) {
        setQrId(id)
      } else {
        alert("Failed to generate QR code. Please try again.")
      }
    } catch (error) {
      console.error("Error storing payment data:", error)
      alert("Failed to generate QR code. Please try again.")
    }
  }

  const downloadQR = () => {
    if (!qrRef.current) return
    const svg = qrRef.current.querySelector("svg")
    if (!svg) return

    const svgData = new XMLSerializer().serializeToString(svg)
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    const img = new Image()
    img.onload = () => {
      canvas.width = img.width
      canvas.height = img.height
      ctx?.drawImage(img, 0, 0)

      const pngFile = canvas.toDataURL("image/png")
      const downloadLink = document.createElement("a")
      downloadLink.download = `payment-qr-${qrId}.png`
      downloadLink.href = pngFile
      downloadLink.click()
    }
    // Local SVG → canvas; crossOrigin not needed
    img.src = "data:image/svg+xml;base64," + btoa(svgData)
  }

  // Simple validation check
  const isAllRequiredDone = !!(formData.orgName && formData.amount && formData.walletAddress && formData.frequency && formData.duration)

  // Reusable helpers
  const fieldBase =
    "w-full rounded-lg border bg-[#0c0c0c]/50 backdrop-blur-sm text-white transition-all outline-none focus:ring-2 focus:ring-green-500 p-3 placeholder:text-gray-400"
  const fieldComplete = "border-gray-600 bg-[#0c0c0c]/50"
  const fieldIncomplete = "border-gray-600"

  return (
    <div className="max-h-130 overflow-y-auto scrollbar-hide mx-auto w-full max-w-2xl text-white">
      {/* Simple Form Container */}
      <div className="bg-[#0c0c0c]/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
        
        {/* Recipient Details Section */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-white mb-4">Recipient Details</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-white">Organization/Person Name *</label>
              <input
                name="orgName"
                placeholder="Enter name"
                className={`${fieldBase} ${formData.orgName ? fieldComplete : fieldIncomplete}`}
                value={formData.orgName}
                onChange={handleChange}
                aria-required="true"
                aria-invalid={!formData.orgName}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-white">Amount *</label>
              <input
                type="number"
                step="0.01"
                name="amount"
                placeholder="0.00"
                className={`${fieldBase} ${formData.amount ? fieldComplete : fieldIncomplete}`}
                value={formData.amount}
                onChange={handleChange}
                aria-required="true"
                aria-invalid={!formData.amount}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-white">Your ETH Address *</label>
              <input
                name="walletAddress"
                placeholder="0x..."
                className={`${fieldBase} ${formData.walletAddress ? fieldComplete : fieldIncomplete}`}
                value={formData.walletAddress}
                onChange={handleChange}
                aria-required="true"
                aria-invalid={!formData.walletAddress}
              />
            </div>
          </div>
        </div>

        {/* Schedule Section */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-white mb-4">Payment Schedule</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-white">Payment Frequency *</label>
              <select
                name="frequency"
                className={`${fieldBase} ${formData.frequency ? fieldComplete : fieldIncomplete}`}
                value={formData.frequency}
                onChange={handleChange}
                aria-required="true"
              >
                {frequencyOptions.map((o) => (
                  <option key={o.value} value={o.value} className="bg-[#0c0c0c] text-white">
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-white">Duration *</label>
              <select
                name="duration"
                className={`${fieldBase} ${formData.duration ? fieldComplete : fieldIncomplete}`}
                value={formData.duration}
                onChange={handleChange}
                aria-required="true"
              >
                {durationOptions.map((o) => (
                  <option key={o.value} value={o.value} className="bg-[#0c0c0c] text-white">
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-white mb-4">Additional Information</h2>
          <div>
            <label className="mb-2 block text-sm font-medium text-white">Description (optional)</label>
            <textarea
              name="description"
              rows={3}
              placeholder="Payment description or notes..."
              className={`${fieldBase} ${formData.description ? fieldComplete : fieldIncomplete} resize-none`}
              value={formData.description}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Fixed fields shown read-only, per your spec */}
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-white">Network</label>
            <input
              name="network"
              value="ETH"
              disabled
              className="w-full cursor-not-allowed rounded-lg border border-gray-600 bg-[#0c0c0c]/30 p-3 text-gray-400"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-white">Token</label>
            <input
              name="token"
              value="PYUSD"
              disabled
              className="w-full cursor-not-allowed rounded-lg border border-gray-600 bg-[#0c0c0c]/30 p-3 text-gray-400"
            />
          </div>
        </div>

        {/* Submission */}
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            disabled={!isAllRequiredDone}
            className="mt-7 py-1 w-[40%] rounded-2xl text-black bg-white text-[16px] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            aria-disabled={!isAllRequiredDone}
          >
            Generate Auto Pay QR
          </button>
        </div>

        {/* QR Preview & actions */}
        {qrId && (
          <div className="mt-8 text-center">
            <div ref={qrRef} className="inline-block rounded-lg border border-green-300/20 bg-white p-4 shadow-lg">
              <QRCodeSVG value={`${window.location.origin}/info/${qrId}`} size={200} level="M" />
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-sm text-gray-300">Scan this QR code to view payment details</p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={downloadQR}
                  className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 px-4 py-2 font-medium text-white transition-colors hover:from-green-600 hover:to-blue-600 shadow-lg"
                >
                  <Download size={16} />
                  Download QR
                </button>
                <Link
                  href={`/info/${qrId}`}
                  className="flex items-center gap-2 rounded-lg bg-[#0c0c0c]/50 border border-green-300/20 px-4 py-2 font-medium text-white transition-colors hover:bg-[#0c0c0c]/70 hover:border-green-300/40"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
