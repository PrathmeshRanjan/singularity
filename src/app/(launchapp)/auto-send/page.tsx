"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import QRCode from "qrcode";
import QrScanner from "qr-scanner";
import jsQR from "jsqr";
import { cn } from "@/lib/utils";
import { Link } from "lucide-react";
import { Folder } from "lucide-react";
import { Plus } from "lucide-react";

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
    <div className="h-full flex flex-col justify-center items-center">
      {/* Camera Video Element - Centered */}
      <div className="flex justify-center mt-7 items-center flex-1">
        <div className="relative">
          <video
            ref={videoRef}
            className={`w-80 h-80 rounded-2xl object-cover ${isScanning ? 'block' : 'hidden'}`}
            playsInline
            style={{
              filter: 'none'
            }}
          />
          
          {/* Scanner Animation Overlay */}
          {isScanning && (
            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
              {/* Scanning Line Animation */}
              <motion.div
                className="absolute left-0 right-0 h-0.5 bg-green-500 shadow-lg"
                animate={{
                  y: [0, 320, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  boxShadow: '0 0 10px rgba(59, 130, 246, 0.8)'
                }}
              />
            </div>
          )}
        </div>
      </div>

      {/* Scanned Data Display */}
      {scannedData && (
        <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg max-w-md w-full">
          <h3 className="font-semibold text-green-800 mb-2">Scanned Data:</h3>
          <p className="text-green-700 break-all">{scannedData}</p>
        </div>
      )}

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Bottom Navigation Bar - Fixed at bottom */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md px-4 py-3 mb-4 rounded-2xl shadow-lg">
        <div className="flex justify-center items-center gap-8">
         <motion.button
            initial={{ width: 56 }}
            whileHover={{ width: 168 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="group relative flex items-center overflow-hidden h-12 rounded-full px-3 cursor-pointer"
            onClick={() => { handleUploadQR() }}
            aria-label="Upload QR"
          >
            {/* pill inner styling */}
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full">
                <span className="text-xl"><Folder /></span>
              </div>

              {/* label */}
              <span className="ml-1 text-sm text-gray-200 font-medium max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 group-hover:max-w-[9rem]">
                Upload QR
              </span>
            </div>
          </motion.button>
          
          <motion.button
            initial={{ width: 56 }}
            whileHover={{ width: 168 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="group relative flex items-center overflow-hidden h-12 rounded-full px-3 cursor-pointer"
            onClick={() => { handleUploadLink() }}
            aria-label="Upload Link"
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10">
                <span className="text-xl"><Link /></span>
              </div>
              <span className="ml-1 text-sm text-gray-200 font-medium max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 group-hover:max-w-[9rem]">
                Upload Link
              </span>
            </div>
          </motion.button>

          <motion.button
            initial={{ width: 56 }}
            whileHover={{ width: 168 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="group relative flex items-center overflow-hidden h-12 rounded-full px-3 cursor-pointer"
            onClick={() => { /* handleUploadLink() */ }}
            aria-label="Create Auto pay"
          >
            <Link href="/auto-send/create"/>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10">
                <span className="text-xl"><Plus/></span>
              </div>
              <span className="ml-1 text-sm text-gray-200 font-medium max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 group-hover:max-w-[9rem]">
                Create Auto pay
              </span>
            </div>
          </motion.button>
        </div>
      </div>
    </div>
  );
}