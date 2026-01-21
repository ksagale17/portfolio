export default function Footer() {
  return (
    <footer className="py-6 bg-transparent relative">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8">

        {/* Animated Golden Line
        <div className="w-full flex justify-center mb-4">
          <div className="golden-line"></div>
        </div> */}

        {/* Footer Text */}
        <div className="text-center flex justify-center items-center gap-1">
          <p className="text-xs text-black font-sans">
            Designed and Developed by
          </p>
          <p className="text-xs text-black font-sans font-semibold">
            SYNTIARO
          </p>
        </div>
      </div>

      <style>
        {`
          .golden-line {
            width: 160px;
            height: 2px;
            background-color: #C7A24B;
            transform-origin: center;
            transform: scaleX(0);
            animation: goldenLineAnim 2s ease-in-out infinite;
          }

          @keyframes goldenLineAnim {
            0%   { transform: scaleX(0); opacity: 0; }
            40%  { transform: scaleX(1); opacity: 1; }
            60%  { transform: scaleX(1); opacity: 1; }
            100% { transform: scaleX(0); opacity: 0; }
          }
        `}
      </style>
    </footer>
  );
}
