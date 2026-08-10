export default function PaymentLogos() {
  return (
    <div
      className="pay-logos"
      aria-label="Moyens de paiement acceptés : Carte Bancaire, Visa, Mastercard"
    >
      <span className="pay-logo" title="Carte Bancaire">
        <svg viewBox="0 0 38 24" role="img" aria-label="Carte Bancaire">
          <defs>
            <linearGradient id="cb-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#1a4f9c" />
              <stop offset="1" stopColor="#00a94f" />
            </linearGradient>
          </defs>
          <rect x="3" y="3" width="32" height="18" rx="4" fill="url(#cb-grad)" />
          <text
            x="19"
            y="16"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
            fontWeight="700"
            fontSize="10"
            fill="#fff"
          >
            CB
          </text>
        </svg>
      </span>
      <span className="pay-logo" title="Visa">
        <svg viewBox="0 0 38 24" role="img" aria-label="Visa">
          <text
            x="19"
            y="16.5"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
            fontStyle="italic"
            fontWeight="800"
            fontSize="11"
            fill="#1A1F71"
          >
            VISA
          </text>
        </svg>
      </span>
      <span className="pay-logo" title="Mastercard">
        <svg viewBox="0 0 38 24" role="img" aria-label="Mastercard">
          <circle cx="15" cy="12" r="7" fill="#EB001B" />
          <circle cx="23" cy="12" r="7" fill="#F79E1B" />
          <path
            d="M19 6.26 A7 7 0 0 1 19 17.74 A7 7 0 0 1 19 6.26"
            fill="#FF5F00"
          />
        </svg>
      </span>
    </div>
  );
}
