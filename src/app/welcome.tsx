"use client";
interface WelcomeProps {
  show: boolean;
  onNext: () => void;
}
export default function Welcome({ show, onNext }: WelcomeProps) {
  return show ? (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="max-w-4xl w-full flex flex-col lg:flex-row items-center lg:items-start gap-12">
        <div className=" lg:w-1/2 text-center lg:text-left">
          <div className="text-2xl lg:text-5xl font-light mb-4 leading-tight">Welcome to the</div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Activity Quiz!</h1>
          <div className="mt-5">
            <button
              onClick={onNext}
              className="text-lg bg-gradient-to-r from-purple-600 to-blue-600  px-10 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg"
            >
              Find an Activity
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
