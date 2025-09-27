"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import QRCode from "qrcode";
import QrScanner from "qr-scanner";
import jsQR from "jsqr";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function AutoSendPage() {
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [scannedData, setScannedData] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [logs, setLogs] = useState<Array<{id: string, message: string, timestamp: string, type: 'success' | 'error' | 'info'}>>([
    { id: '1', message: 'QR scanner initialized', timestamp: '2024-01-15 10:30:25', type: 'success' },
    { id: '2', message: 'Ready to scan QR codes', timestamp: '2024-01-15 10:28:15', type: 'info' },
    { id: '3', message: 'System online', timestamp: '2024-01-15 10:25:10', type: 'success' },
  ]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const qrScannerRef = useRef<QrScanner | null>(null);

  // Initialize QR Scanner and start scanning automatically
  useEffect(() => {
    // Auto-start scanning when component mounts
    startCameraScanning();
    
    return () => {
      // Cleanup scanner on unmount
      if (qrScannerRef.current) {
        qrScannerRef.current.stop();
        qrScannerRef.current.destroy();
      }
    };
  }, []);

  // Start camera scanning
  const startCameraScanning = async () => {
    try {
      setIsScanning(true);
      
      if (videoRef.current) {
        qrScannerRef.current = new QrScanner(
          videoRef.current,
          (result) => {
            setScannedData(result.data);
            setIsScanning(false);
            qrScannerRef.current?.stop();
            
            const newLog = {
              id: Date.now().toString(),
              message: `QR scanned: ${result.data}`,
              timestamp: new Date().toLocaleString(),
              type: 'success' as const
            };
            setLogs(prev => [newLog, ...prev]);
          },
          {
            highlightScanRegion: true,
            highlightCodeOutline: true,
          }
        );
        
        await qrScannerRef.current.start();
        
        const newLog = {
          id: Date.now().toString(),
          message: 'Camera scanning started',
          timestamp: new Date().toLocaleString(),
          type: 'info' as const
        };
        setLogs(prev => [newLog, ...prev]);
      }
    } catch (error) {
      setIsScanning(false);
      const errorLog = {
        id: Date.now().toString(),
        message: 'Failed to start camera scanning',
        timestamp: new Date().toLocaleString(),
        type: 'error' as const
      };
      setLogs(prev => [errorLog, ...prev]);
    }
  };

  // Stop camera scanning
  const stopCameraScanning = () => {
    if (qrScannerRef.current) {
      qrScannerRef.current.stop();
      setIsScanning(false);
      
      const newLog = {
        id: Date.now().toString(),
        message: 'Camera scanning stopped',
        timestamp: new Date().toLocaleString(),
        type: 'info' as const
      };
      setLogs(prev => [newLog, ...prev]);
    }
  };
  const generateQR = async (data?: string) => {
    try {
      const qrData = data || `signularity://send?amount=100&address=${Date.now()}`;
      const qrCodeDataURL = await QRCode.toDataURL(qrData, {
        width: 200,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      });
      setQrCode(qrCodeDataURL);
      
      // Add log entry
      const newLog = {
        id: Date.now().toString(),
        message: data ? `QR generated from link: ${data}` : 'New payment QR code generated',
        timestamp: new Date().toLocaleString(),
        type: 'success' as const
      };
      setLogs(prev => [newLog, ...prev]);
    } catch (error) {
      const errorLog = {
        id: Date.now().toString(),
        message: 'Failed to generate QR code',
        timestamp: new Date().toLocaleString(),
        type: 'error' as const
      };
      setLogs(prev => [errorLog, ...prev]);
    }
  };

  const handleGenerateQR = async () => {
    await generateQR();
  };

  const handleUploadQR = () => {
    fileInputRef.current?.click();
  };

  const handleUploadLink = async () => {
    const link = prompt("Enter a link to generate QR code:");
    if (link) {
      await generateQR(link);
    }
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        // Create image element to process the uploaded file
        const img = new Image();
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        img.onload = () => {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx?.drawImage(img, 0, 0);
          
          const imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height);
          if (imageData) {
            const code = jsQR(imageData.data, imageData.width, imageData.height);
            if (code) {
              setScannedData(code.data);
              const newLog = {
                id: Date.now().toString(),
                message: `QR extracted from image: ${code.data}`,
                timestamp: new Date().toLocaleString(),
                type: 'success' as const
              };
              setLogs(prev => [newLog, ...prev]);
            } else {
              const errorLog = {
                id: Date.now().toString(),
                message: 'No QR code found in uploaded image',
                timestamp: new Date().toLocaleString(),
                type: 'error' as const
              };
              setLogs(prev => [errorLog, ...prev]);
            }
          }
        };
        
        img.src = URL.createObjectURL(file);
      } catch (error) {
        const errorLog = {
          id: Date.now().toString(),
          message: 'Failed to process uploaded image',
          timestamp: new Date().toLocaleString(),
          type: 'error' as const
        };
        setLogs(prev => [errorLog, ...prev]);
      }
    }
  };

  return (
    <div className="h-full flex gap-6">
      {/* Left Side - QR Section */}
      <div className="flex-1 flex flex-col">
        
        {/* Camera Video Element */}
        <div className="my-4">
          <video
            ref={videoRef}
            className={`w-full h-64 rounded-lg ${isScanning ? 'block' : 'hidden'}`}
            playsInline
          />
        </div>

        {/* Scanned Data Display */}
        {scannedData && (
          <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">Scanned Data:</h3>
            <p className="text-green-700 break-all">{scannedData}</p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex cursor-pointer flex-col justify-center gap-4 max-w-xs mx-auto">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleUploadQR}
            className="flex-1 text-brand font-sans italic underline font-medium transition-colors"
          >
            📁 Upload QR Image
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleUploadLink}
            className="flex-1 text-brand underline italic font-medium transition-colors"
          >
            🔗 Upload a Link
          </motion.button>

          <Link href="/auto-send/create">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                "inline-block bg-black text-white"
              )}
            >
              <Plus className="inline-block mr-2" />
              Create a AutoPay
            </motion.button>
          </Link>
        </div>

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
    </div>
  );
}