import { ReactNode, Suspense } from "react"
import Image from "next/image"
import { Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"

interface AuthLayoutProps {
  children: ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#F8F8F8] p-4 md:p-6 lg:p-8">
      <div
        className={cn(
          "bg-white overflow-hidden rounded-lg shadow-md min-h-[550px] w-full max-w-md lg:max-w-5xl grid grid-cols-2"
        )}
      >
        <div className="relative hidden lg:flex bg-[#18181B]">
          {/* Background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute -top-20 -left-28">
              <Image
                src="/images/Login/D_1.svg"
                width={302}
                height={356}
                alt="Background shape 1"
                priority
              />
            </div>

            <div className="absolute -top-56 -left-20">
              <Image
                src="/images/Login/D_2.svg"
                width={422}
                height={495}
                alt="Background shape 2"
                priority
              />
            </div>
          </div>

          <div className="absolute bottom-10 right-10 z-10 flex flex-col items-start">
            <div className="mb-4">
              <Image
                src="/images/Login/logo.svg"
                width={48}
                height={48}
                alt="Liang Yi logo"
                priority
              />
            </div>
            <h2 className="text-[28px] font-semibold text-white">Liang Yi</h2>
          </div>
        </div>

        {/* Form elements */}
        <div className="w-full h-full p-8 md:px-16 md:py-10 flex flex-col items-center justify-center mx-auto col-span-2 lg:col-span-1">
          <Suspense
            fallback={
              <div className="h-full w-full flex items-center justify-center">
                <Loader2 className="h-12 w-12 animate-spin" />
              </div>
            }
          >
            {children}
          </Suspense>
        </div>
      </div>
    </div>
  )
}
