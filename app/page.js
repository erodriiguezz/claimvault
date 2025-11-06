import Image from "next/image";
import logo from "../public/logo.png";
import { UserIcon, ExclamationTriangleIcon, DocumentPlusIcon, CameraIcon, PhoneIcon, InformationCircleIcon } from "@heroicons/react/20/solid";

export default function Home() {
  const actions = [
    {
      icon: DocumentPlusIcon,
      backgroundColor: "#FEE2E2",
      color: "#DC2626",
      heading: "Report Accident",
      subheading: "Start guided process",
    },
    {
      icon: CameraIcon,
      backgroundColor: "#DBEAFE",
      color: "#2563EB",
      heading: "Take Photos",
      subheading: "Document evidence",
    },
    {
      icon: PhoneIcon,
      backgroundColor: "#DCFCE7",
      color: "#16A34A",
      heading: "Call Insurance",
      subheading: "Quick Contact",
    },
    {
      icon: InformationCircleIcon,
      backgroundColor: "#F3E8FF",
      color: "#9333EA",
      heading: "Medical Info",
      subheading: "Access records",
    },
  ];

  return (
    <div className="font-sans bg-zinc-50 text-[#111827] dark:bg-gray-950 dark:text-white min-h-screen">
      <main className="">
        {/*  */}
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src={logo} alt="logo" width={32} />
            <p className="font-semibold">ClaimVault</p>
          </div>

          <div className="rounded-full bg-[#2563EB] p-1">
            <UserIcon className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* emergency banner */}
        <div className="bg-red-500 text-white px-6 py-4 flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="h-full bg-white/20 inline-block rounded-full p-2">
              <ExclamationTriangleIcon className="h-6 w-6 text-white" />
            </div>

            <div>
              <p className="text-sm font-semibold">Emergency Assistance</p>
              <p className="text-sm">Call 911 if anyone is injured</p>
            </div>
          </div>

          <button className="bg-white rounded-full text-red-500 px-4 py-1 text-sm font-medium">Call Now</button>
        </div>

        {/* quick actions */}
        <div className="p-6">
          <h2 className="font-bold text-lg">Quick Actions</h2>

          <div className="mt-4 grid grid-cols-2 gap-4">
            {actions.map((action, key) => {
              let Icon = action.icon;

              return (
                <div key={key} className="bg-white dark:bg-gray-900 shadow-sm rounded-xl px-2 py-6 leading-none text-center">
                  <div className="inline-block m-auto p-2 rounded-xl" style={{ backgroundColor: action.backgroundColor }}>
                    <Icon className="h-8 w-8" style={{ color: action.color }} />
                  </div>

                  <div className="mt-2">
                    <p className="text-base font-semibold">{action.heading}</p>
                    <p className="text-xs font-normal text-[#6B7280]">{action.subheading}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* guides */}
        <div className="p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-lg">Step-by-Step Guide</h2>

            <div className="text-sm text-blue-600 bg-blue-200 px-4 py-2 rounded-full leading-none">2/7 Completed</div>
          </div>
        </div>

        {/* menu */}
        <div></div>
      </main>
    </div>
  );
}
