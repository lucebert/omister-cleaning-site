export default function PaymentLogos() {
  return (
    <div
      className="pay-logos"
      aria-label="Moyens de paiement acceptés : Carte Bancaire, Visa, Mastercard, Apple Pay"
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
      <span className="pay-logo" title="Apple Pay">
        <svg viewBox="0 0 38 24" role="img" aria-label="Apple Pay">
          <rect x="3" y="3" width="32" height="18" rx="4" fill="#000" />
          <g fill="#fff">
            <path
              transform="translate(7.6, 6.4) scale(0.46)"
              d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08ZM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25Z"
            />
            <text
              x="19"
              y="15.6"
              fontFamily="-apple-system, 'Helvetica Neue', Arial, sans-serif"
              fontWeight="500"
              fontSize="9.5"
            >
              Pay
            </text>
          </g>
        </svg>
      </span>
    </div>
  );
}
