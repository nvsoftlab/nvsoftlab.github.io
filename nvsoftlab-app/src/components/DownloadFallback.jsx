import { useEffect } from "react";
import { AppStoreButton, PlayStoreButton } from "./StoreButtons";
import QRCode from "./QRCode";
import { getAppStoreLink, getPlayStoreLink } from "../utils/storeUrl";
import { trackEvent } from "../utils/analytics";

export default function DownloadFallback({ app, search = "" }) {
  const appStoreUrl = getAppStoreLink(app, search);
  const playStoreUrl = getPlayStoreLink(app, search);

  useEffect(() => {
    document.title = `${app.name} - Download for iOS & Android`;
  }, [app.name]);

  return (
    <div
      className="min-h-screen text-white px-4 py-12 sm:py-20 flex items-center"
      style={{
        background:
          "radial-gradient(ellipse at top, #2d1060 0%, #0f0a1e 70%)",
      }}
    >
      <div className="max-w-3xl mx-auto w-full">
        <div className="text-center mb-10">
          <div
            className={`inline-block bg-gradient-to-r ${app.accent} bg-clip-text text-transparent`}
          >
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
              {app.name}
            </h1>
          </div>
          <p className="text-purple-200 text-lg sm:text-xl font-semibold mt-3">
            {app.tagline}
          </p>
          <p className="text-purple-300/80 text-sm sm:text-base mt-4 max-w-xl mx-auto leading-relaxed">
            {app.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <DownloadCard
            title="iPhone & iPad"
            storeName="App Store"
            storeHref={appStoreUrl}
            qrValue={appStoreUrl}
            kind="ios"
            available={app.available}
            app={app}
          />
          <DownloadCard
            title="Android"
            storeName="Google Play"
            storeHref={playStoreUrl}
            qrValue={playStoreUrl}
            kind="android"
            available={app.available}
            app={app}
          />
        </div>

        {!app.available && (
          <p className="text-center text-purple-400/70 text-xs mt-8">
            Coming soon. Links above will activate at launch.
          </p>
        )}

        <p className="text-center text-purple-400/60 text-xs mt-8">
          Scan the QR code with your phone camera, or open this page on your
          phone, to install directly.
        </p>
      </div>
    </div>
  );
}

function DownloadCard({
  title,
  storeName,
  storeHref,
  qrValue,
  kind,
  available,
  app,
}) {
  const handleClick = () => {
    trackEvent("app_store_click", {
      app: app.key,
      app_name: app.name,
      platform: kind,
      store: kind === "ios" ? "app_store" : "play_store",
      destination: storeHref,
      surface: "fallback_button",
    });
  };

  return (
    <div className="bg-[#1a0f3a]/70 border border-white/10 rounded-3xl p-6 sm:p-7 flex flex-col items-center text-center">
      <p className="text-purple-300 text-xs uppercase tracking-widest font-bold mb-1">
        {title}
      </p>
      <p className="text-white font-extrabold text-lg mb-5">{storeName}</p>

      <div className="mb-5">
        <QRCode value={qrValue} size={180} alt={`${storeName} QR code`} />
      </div>

      {available ? (
        kind === "ios" ? (
          <AppStoreButton href={storeHref} onClick={handleClick} />
        ) : (
          <PlayStoreButton href={storeHref} onClick={handleClick} />
        )
      ) : (
        <span className="inline-flex items-center bg-white/10 text-white/70 rounded-xl px-5 py-3 text-sm font-semibold border border-white/10">
          Coming soon
        </span>
      )}
    </div>
  );
}
