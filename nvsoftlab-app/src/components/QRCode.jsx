import { useEffect, useState } from "react";
import QRCodeLib from "qrcode";

export default function QRCode({ value, size = 200, alt = "QR code" }) {
  const [dataUrl, setDataUrl] = useState(null);

  useEffect(() => {
    if (!value) {
      setDataUrl(null);
      return;
    }
    let cancelled = false;
    QRCodeLib.toDataURL(value, {
      width: size,
      margin: 2,
      color: { dark: "#000000", light: "#ffffff" },
      errorCorrectionLevel: "M",
    })
      .then((url) => {
        if (!cancelled) setDataUrl(url);
      })
      .catch(() => {
        if (!cancelled) setDataUrl(null);
      });
    return () => {
      cancelled = true;
    };
  }, [value, size]);

  if (!dataUrl) {
    return (
      <div
        style={{ width: size, height: size }}
        className="bg-white/90 rounded-xl"
        aria-label={alt}
        role="img"
      />
    );
  }

  return (
    <img
      src={dataUrl}
      alt={alt}
      width={size}
      height={size}
      className="block bg-white rounded-xl"
    />
  );
}
