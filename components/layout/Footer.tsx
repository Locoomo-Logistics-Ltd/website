import Link from "next/link";
import { getStartedLink } from "@/lib/config";
import MainLogo from "@/components/ui/MainLogo";
import CTA from "@/components/sections/CTA";

// ============================
// ============= Global footer
// ============================
export default function Footer() {
  return (
    <div className="w-full">
      <CTA />

      <footer className="text-fontcolor max-w-6xl px-6 pt-20 pb-8 lg:px-4 w-full mx-auto">
        <div className="py-10">
          <div className="mx-auto max-w-screen-2xl">
            <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-3 lg:grid-cols-5 lg:gap-8">
              <div className="col-span-full lg:col-span-2">
                {/* Locoomo logo */}
                <div className="mb-4 lg:-mt-2">
                  <Link
                    href="/"
                    aria-label="locoomo logo"
                    className="flex items-center"
                    prefetch={false}
                  >
                    <MainLogo />
                  </Link>
                </div>

                <p className="text-xl">Peace as a service.</p>
              </div>

              {/* Footer navigation */}
              <div>
                <div className="mb-4 font-bold uppercase tracking-widest">
                  Navigation
                </div>

                <nav className="flex flex-col gap-3 sm:gap-4 text-gray-600">
                  <div>
                    <Link
                      href="/"
                      className="transition duration-100 hover:text-primary active:text-primary"
                    >
                      Home
                    </Link>
                  </div>

                  <div>
                    <Link
                      href="/about"
                      className="transition duration-100 hover:text-primary active:text-primary"
                    >
                      About us
                    </Link>
                  </div>
                </nav>
              </div>

              {/* Legal links */}
              <div>
                <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
                  Legal
                </div>

                <nav className="flex flex-col gap-3 sm:gap-4 text-gray-600">
                  <div>
                    <Link
                      href="#"
                      className="transition duration-100 hover:text-primary active:text-primary"
                    >
                      Privacy policy
                    </Link>
                  </div>

                  <div>
                    <Link
                      href="#"
                      className="transition duration-100 hover:text-primary active:text-primary"
                    >
                      Terms of service
                    </Link>
                  </div>
                </nav>
              </div>

              {/* Contact */}
              <div>
                <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
                  Contact us
                </div>

                <nav className="flex flex-col gap-3 sm:gap-4 text-gray-600">
                  <div>
                    <Link
                      href={getStartedLink}
                      className="transition duration-100 hover:text-primary active:text-primary"
                    >
                      +234 814 1657 882
                    </Link>
                  </div>

                  <div>
                    <Link
                      href="mailto:locoomo@gmail.com"
                      className="transition duration-100 hover:text-primary active:text-primary"
                    >
                      locoomo@gmail.com
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-8 sm:gap-4 py-3 sm:py-6">
            <p className="text-sm text-gray-400">
              {" "}
              © {new Date().getFullYear()} - Locoomo.&nbsp;&nbsp;
              <span>All rights reserved.</span>
            </p>

            {/* Social links */}
            <div className="flex gap-14 sm:gap-10">
              <Link
                href="mailto:locoomo@gmail.com"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="26"
                  viewBox="0 0 28 26"
                  fill="none"
                >
                  <path
                    d="M1.36505 0.602051H25.9359C26.6898 0.602051 27.3009 1.21321 27.3009 1.9671V23.8078C27.3009 24.5618 26.6898 25.1729 25.9359 25.1729H1.36505C0.611159 25.1729 0 24.5618 0 23.8078V1.9671C0 1.21321 0.611159 0.602051 1.36505 0.602051ZM13.7332 12.4546L4.97863 5.02166L3.21165 7.10281L13.7503 16.0504L24.0991 7.09443L22.3125 5.03004L13.7332 12.4546Z"
                    fill="#085AB2"
                  />
                </svg>
              </Link>

              <Link
                href="https://wa.me/2348141657882"
                target="_blank"
                aria-label="Send a WhatsApp DM"
                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M13.9979 0.237305C21.5368 0.237305 27.6484 6.34882 27.6484 13.8878C27.6484 21.4267 21.5368 27.5382 13.9979 27.5382C11.4945 27.5382 9.14859 26.8645 7.13153 25.6882L0.353118 27.5382L2.19861 20.756C1.02169 18.7386 0.347412 16.392 0.347412 13.8878C0.347412 6.34882 6.45893 0.237305 13.9979 0.237305ZM9.07189 7.48342C8.89527 7.49583 8.7221 7.53897 8.56443 7.61963C8.44615 7.68014 8.33635 7.7676 8.16382 7.93052C8.0009 8.08434 7.90648 8.21869 7.807 8.34822C7.30234 9.00527 7.0311 9.81181 7.03614 10.6403C7.03889 11.31 7.21285 11.9609 7.48758 12.5686C8.04469 13.801 8.96345 15.1038 10.1771 16.312C10.4686 16.6022 10.7542 16.8955 11.0622 17.1666C12.5684 18.4929 14.3635 19.4492 16.3044 19.9598C16.3044 19.9598 17.0689 20.0772 17.08 20.0779C17.3333 20.0915 17.5861 20.0732 17.8396 20.0602C18.2372 20.0398 18.6254 19.9322 18.9768 19.7451C19.2027 19.6248 19.3096 19.565 19.4992 19.4454C19.4992 19.4454 19.5573 19.4061 19.6695 19.3226C19.8538 19.1852 19.9677 19.0886 20.121 18.9294C20.234 18.812 20.3312 18.6734 20.4063 18.5171C20.513 18.2943 20.6204 17.8691 20.6632 17.5159C20.6958 17.2462 20.686 17.0988 20.6824 17.0075C20.6765 16.8606 20.5552 16.7095 20.4222 16.6453L19.6285 16.2885C19.6285 16.2885 18.4415 15.7719 17.7156 15.4408C17.64 15.4062 17.5573 15.3903 17.4741 15.3852C17.292 15.374 17.088 15.4215 16.9581 15.5583C16.9513 15.5556 16.861 15.6337 15.8733 16.8301C15.8189 16.8952 15.6912 17.0368 15.4705 17.0236C15.4372 17.0212 15.404 17.0165 15.3717 17.008C15.2823 16.9844 15.1952 16.9533 15.11 16.9172C14.9412 16.8456 14.8819 16.8184 14.7666 16.7687C13.9785 16.4244 13.2553 15.9639 12.6161 15.4002C12.4446 15.2493 12.2852 15.0867 12.1208 14.9274C11.5472 14.3714 11.0776 13.7801 10.7283 13.1968C10.7092 13.165 10.6798 13.119 10.6482 13.0675C10.591 12.9746 10.528 12.864 10.5082 12.7881C10.4575 12.5873 10.5921 12.4259 10.5921 12.4259C10.5921 12.4259 10.9244 12.0627 11.0787 11.8652C11.2272 11.675 11.3554 11.4891 11.4371 11.3566C11.5979 11.0981 11.6488 10.8309 11.5643 10.6248C11.1813 9.69114 10.7862 8.76251 10.379 7.83917C10.2986 7.65695 10.0595 7.52455 9.84214 7.49945C9.76851 7.49094 9.69494 7.4824 9.62101 7.47754C9.43801 7.46861 9.25464 7.47058 9.07189 7.48342Z"
                    fill="#085AB2"
                  />
                </svg>
              </Link>

              <Link
                href="https://www.instagram.com/locoomo_haul"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M15.7476 0.237793C17.2838 0.240332 18.0623 0.248468 18.735 0.268493L19 0.277147C19.306 0.288027 19.608 0.301677 19.972 0.31874C21.4246 0.38586 22.4154 0.615638 23.2857 0.953487C24.1854 1.30044 24.9453 1.7691 25.704 2.52785C26.4616 3.28658 26.9303 4.04873 27.2784 4.94625C27.615 5.81533 27.8449 6.80727 27.9132 8.2599C27.9294 8.62392 27.9425 8.92586 27.9533 9.23196L27.9619 9.4969C27.9818 10.1695 27.991 10.9481 27.9938 12.4844L27.9949 13.5022C27.9951 13.6265 27.9951 13.7549 27.9951 13.8873L27.9949 14.2723L27.9941 15.2903C27.9915 16.8265 27.9835 17.6051 27.9634 18.2777L27.9547 18.5426C27.9439 18.8488 27.9302 19.1507 27.9132 19.5147C27.846 20.9673 27.615 21.9581 27.2784 22.8283C26.9314 23.7282 26.4616 24.4881 25.704 25.2468C24.9453 26.0044 24.182 26.473 23.2857 26.8211C22.4154 27.1578 21.4246 27.3876 19.972 27.4558C19.608 27.4721 19.306 27.4853 19 27.496L18.735 27.5046C18.0623 27.5246 17.2838 27.5336 15.7476 27.5366L14.7297 27.5377C14.6053 27.5377 14.477 27.5377 14.3446 27.5377H13.9595L12.9416 27.5368C11.4054 27.5343 10.6268 27.5261 9.95417 27.5061L9.68924 27.4975C9.38313 27.4865 9.08118 27.4729 8.71718 27.4558C7.26453 27.3888 6.27487 27.1578 5.40352 26.8211C4.50486 26.4742 3.74385 26.0044 2.98511 25.2468C2.22638 24.4881 1.75885 23.7247 1.41076 22.8283C1.07291 21.9581 0.844268 20.9673 0.776016 19.5147C0.759799 19.1507 0.746572 18.8488 0.735856 18.5426L0.72727 18.2777C0.707299 17.6051 0.698195 16.8265 0.695246 15.2903L0.695068 12.4844C0.697607 10.9481 0.705729 10.1695 0.725755 9.4969L0.734423 9.23196C0.745302 8.92586 0.758953 8.62392 0.776016 8.2599C0.843122 6.80612 1.07291 5.81647 1.41076 4.94625C1.7577 4.0476 2.22638 3.28658 2.98511 2.52785C3.74385 1.7691 4.50601 1.30157 5.40352 0.953487C6.27374 0.615638 7.2634 0.386992 8.71718 0.31874C9.08118 0.302537 9.38313 0.28931 9.68924 0.278594L9.95417 0.270008C10.6268 0.250024 11.4054 0.240919 12.9416 0.23797L15.7476 0.237793ZM14.3446 7.06207C10.5731 7.06207 7.51935 10.1191 7.51935 13.8873C7.51935 17.6587 10.5764 20.7125 14.3446 20.7125C18.1161 20.7125 21.1698 17.6555 21.1698 13.8873C21.1698 10.1158 18.1127 7.06207 14.3446 7.06207ZM14.3446 9.79216C16.6064 9.79216 18.4397 11.625 18.4397 13.8873C18.4397 16.149 16.6069 17.9824 14.3446 17.9824C12.0829 17.9824 10.2494 16.1497 10.2494 13.8873C10.2494 11.6255 12.0822 9.79216 14.3446 9.79216ZM21.5111 5.0145C20.5702 5.0145 19.8048 5.7788 19.8048 6.71965C19.8048 7.66051 20.5691 8.42598 21.5111 8.42598C22.4519 8.42598 23.2174 7.66169 23.2174 6.71965C23.2174 5.7788 22.4507 5.01333 21.5111 5.0145Z"
                    fill="#085AB2"
                  />
                </svg>
              </Link>

              <Link
                href="#"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="26"
                  viewBox="0 0 27 26"
                  fill="none"
                >
                  <path
                    d="M5.50176 3.33289C5.50125 4.44446 4.82688 5.44474 3.79662 5.86205C2.76637 6.27937 1.58597 6.03039 0.812032 5.23252C0.0380912 4.43464 -0.174829 3.2472 0.273657 2.23013C0.722157 1.21306 1.7425 0.569451 2.85357 0.602799C4.32928 0.647095 5.50243 1.85651 5.50176 3.33289ZM5.58366 8.08326H0.123475V25.1736H5.58366V8.08326ZM14.2108 8.08326H8.77787V25.1736H14.1562V16.2052C14.1562 11.2092 20.6675 10.7451 20.6675 16.2052V25.1736H26.0594V14.3488C26.0594 5.92648 16.4222 6.24044 14.1562 10.3765L14.2108 8.08326Z"
                    fill="#085AB2"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
