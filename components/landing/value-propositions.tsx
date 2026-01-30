import {
  BuildingIcon,
  LightbulbIcon,
  DollarIcon,
  MusicIcon,
} from "@/public/svg/svg";

const valuePropositions = [
  {
    title: "Built for Crypto in Nigeria",
    description:
      "Designed specifically for Nigerian businesses looking to leverage blockchain technology for global payments.",
    icon: <BuildingIcon color="white" />,
  },
  {
    title: "Designed for Unique Flexibility",
    description:
      "Customizable payment flows that adapt to your business needs with powerful automation and scheduling tools.",
    icon: <LightbulbIcon color="white" />,
  },
  {
    title: "Real-time alerts & reports",
    description:
      "Stay informed with instant notifications and comprehensive analytics for every transaction in your dashboard.",
    icon: <DollarIcon color="white" />,
  },
  {
    title: "Support for businesses",
    description:
      "Dedicated 24/7 customer support with multilingual assistance to help you navigate the crypto payment landscape.",
    icon: <MusicIcon color="white" />,
  },
];

export default function ValuePropositions() {
  return (
    <section className="relative bg-white dark:bg-[#040404] py-16 px-4 text-black dark:text-white">
      <div className="max-w-[1095px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-xs font-bold text-[#52525B] dark:text-[#A0A0A0] px-4 py-1.5 rounded-full border border-[#E5E5E5] dark:border-[#333333] font-general">
              Value Propositions
            </span>
          </div>
          <h2 className="text-center font-inter font-bold text-3xl md:text-6xl  tracking-[0.26px] text-[#09090B] dark:text-white">
            Why businesses choose
            <br />
            <span className="bg-gradient-to-b from-[#83A7FF] to-[#8B5CF6] bg-clip-text text-transparent">
              StelloPay
            </span>
          </h2>
        </div>

        {/* Cards Grid*/}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {valuePropositions.map((proposition, index) => (
            <div key={index}>
              <div
                className="bg-white dark:bg-[#18181B] rounded-[16px] p-8 md:min-h-[548px]"
                style={{
                  border: "1px solid #83A7FF",
                  borderLeftWidth: "4px",
                }}
              >
                <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-[12px] bg-gradient-to-b from-[#6B9AFF] to-[#8B5CF6]">
                  {proposition.icon}
                </div>
                <h3 className="text-[24px] font-inter font-bold leading-[32px] tracking-[0.07px] mb-4 text-[#09090B] dark:text-white">
                  {proposition.title}
                </h3>
                <p className="text-[18px] text-[#52525B] dark:text-[#A3A3A3] font-inter font-normal leading-[29.25px] tracking-[-0.44px]">
                  {proposition.description}
                </p>
              </div>

              <div
                className="hidden md:block mt-6 h-1 w-full rounded-full"
                style={{
                  background: "#83A7FF",
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
