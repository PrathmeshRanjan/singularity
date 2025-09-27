// It reuses the same state shape, handlers, and submission flow as your working code.

"use client"

import type React from "react"

import { useRef, useState, useMemo } from "react"
import { QRCodeSVG } from "qrcode.react"
import { Download, Check, ChevronRight } from "lucide-react"
import { v4 as uuidv4 } from "uuid"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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

  // Completion checks for visual cues and progressive steps
  const isRecipientComplete = !!(formData.orgName && formData.amount && formData.walletAddress)
  const isScheduleComplete = !!(formData.frequency && formData.duration)
  const isAllRequiredDone = isRecipientComplete && isScheduleComplete

  // Section descriptors (used to mimic the “list entries” when expanded)
  const sections = useMemo(
    () => [
      {
        id: "recipient",
        title: "Recipient details",
        subtitle: "Name, amount, and ETH address",
        complete: isRecipientComplete,
      },
      {
        id: "schedule",
        title: "Schedule",
        subtitle: "Frequency and duration",
        complete: isScheduleComplete,
      },
      {
        id: "notes",
        title: "Description",
        subtitle: "Optional notes",
        complete: !!formData.description,
      },
    ],
    [formData, isRecipientComplete, isScheduleComplete],
  )

  // Reusable helpers
  const fieldBase =
    "w-full rounded-lg border bg-white text-black transition-all outline-none focus:ring-2 focus:ring-gray-300 p-3"
  const fieldComplete = "border-gray-400 ring-2 ring-gray-200"
  const fieldIncomplete = "border-gray-200"

  return (
    <div className="mx-auto w-full text-black">

      {/* Expandable content with smooth animation and list-like entries */}
      <div className="mt-3 rounded-2xl p-2 md:p-3 space-y-3">
        <Accordion type="single" collapsible className="w-full" defaultValue="recipient">
          {/* Entry list (Recipient) */}
          <AccordionItem value="recipient" className="border-0">
            <AccordionTrigger className="rounded-lg px-4 py-3 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 data-[state=open]:border-gray-300 data-[state=open]:bg-gray-50 hover:no-underline transition-all">
              <div className="flex w-full items-center justify-between">
                <div className="flex flex-col text-left">
                  <span className="text-base font-medium">{sections[0].title}</span>
                  <span className="text-sm text-gray-600">{sections[0].subtitle}</span>
                </div>
                {sections[0].complete ? (
                  <Check className="h-5 w-5 text-black" aria-label="Completed" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-gray-400" aria-hidden />
                )}
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-1 pt-2 md:px-2">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium">Organization/Person Name</label>
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
                  <label className="mb-2 block text-sm font-medium">Amount</label>
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
                  <label className="mb-2 block text-sm font-medium">Your ETH Address</label>
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
              <p className="mt-3 text-xs text-gray-600">
                {"All three fields are required. You can edit them later anytime."}
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* Entry list (Schedule) */}
          <AccordionItem value="schedule" className="border-0">
            <AccordionTrigger className="rounded-lg px-4 py-3 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 data-[state=open]:border-gray-300 data-[state=open]:bg-gray-50 hover:no-underline transition-all">
              <div className="flex w-full items-center justify-between">
                <div className="flex flex-col text-left">
                  <span className="text-base font-medium">{sections[1].title}</span>
                  <span className="text-sm text-gray-600">{sections[1].subtitle}</span>
                </div>
                {sections[1].complete ? (
                  <Check className="h-5 w-5 text-black" aria-label="Completed" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-gray-400" aria-hidden />
                )}
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-1 pt-2 md:px-2">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">Payment Frequency</label>
                  <select
                    name="frequency"
                    className={`${fieldBase} ${formData.frequency ? fieldComplete : fieldIncomplete}`}
                    value={formData.frequency}
                    onChange={handleChange}
                    aria-required="true"
                  >
                    {frequencyOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Duration</label>
                  <select
                    name="duration"
                    className={`${fieldBase} ${formData.duration ? fieldComplete : fieldIncomplete}`}
                    value={formData.duration}
                    onChange={handleChange}
                    aria-required="true"
                  >
                    {durationOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <p className="mt-3 text-xs text-gray-600">
                {"Choose how often payments repeat and for how long."}
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* Entry list (Description - optional) */}
          <AccordionItem value="notes" className="border-0">
            <AccordionTrigger className="rounded-lg px-4 py-3 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 data-[state=open]:border-gray-300 data-[state=open]:bg-gray-50 hover:no-underline transition-all">
              <div className="flex w-full items-center justify-between">
                <div className="flex flex-col text-left">
                  <span className="text-base font-medium">{sections[2].title}</span>
                  <span className="text-sm text-gray-600">{sections[2].subtitle}</span>
                </div>
                {sections[2].complete ? (
                  <Check className="h-5 w-5 text-black" aria-label="Completed" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-gray-400" aria-hidden />
                )}
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-1 pt-2 md:px-2">
              <label className="mb-2 block text-sm font-medium">Description (optional)</label>
              <textarea
                name="description"
                rows={3}
                placeholder="Payment description or notes..."
                className={`${fieldBase} ${formData.description ? fieldComplete : fieldIncomplete} resize-none`}
                value={formData.description}
                onChange={handleChange}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Fixed fields shown read-only, per your spec */}
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium">Network</label>
            <input
              name="network"
              value="ETH"
              disabled
              className="w-full cursor-not-allowed rounded-lg border border-gray-200 bg-gray-50 p-3 text-gray-600"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium">Token</label>
            <input
              name="token"
              value="PYUSD"
              disabled
              className="w-full cursor-not-allowed rounded-lg border border-gray-200 bg-gray-50 p-3 text-gray-600"
            />
          </div>
        </div>

        {/* Submission */}
        <button
          onClick={handleSubmit}
          disabled={!isAllRequiredDone}
          className="mt-5 w-full rounded-lg bg-black px-4 py-3 font-medium text-white transition-all enabled:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-disabled={!isAllRequiredDone}
        >
          Generate Payment QR Code
        </button>

        {/* QR Preview & actions */}
        {qrId && (
          <div className="mt-8 text-center">
            <div ref={qrRef} className="inline-block rounded-lg border border-gray-200 bg-white p-4">
              <QRCodeSVG value={`${window.location.origin}/info/${qrId}`} size={200} level="M" />
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-sm text-gray-600">Scan this QR code to view payment details</p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={downloadQR}
                  className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 font-medium text-white transition-colors hover:bg-gray-800"
                >
                  <Download size={16} />
                  Download QR
                </button>
                <Link
                  href={`/info/${qrId}`}
                  className="flex items-center gap-2 rounded-lg bg-white border border-gray-300 px-4 py-2 font-medium text-black transition-colors hover:bg-gray-50"
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
