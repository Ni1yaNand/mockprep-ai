import { Button } from "@/components/ui/button";
import Header from "./dashboard/_components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="text-center py-12 px-6 max-w-3xl mx-auto">
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to MockPrep AI</h1>
          <p className="text-lg text-gray-700">
            Prepare for real interviews with the power of AI. MockPrep AI is your personal mock interview platform, designed to help you practice answering questions and receive constructive feedback from an AI interviewer. Gain confidence and polish your responses before stepping into any interview.
          </p>
        </section>

        <section className="my-12">
          <h2 className="text-2xl font-semibold mb-4">How MockPrep AI Works</h2>
          <div className="text-left text-gray-700 space-y-4">
            <p>
              <strong>Step 1:</strong> Start by selecting a mock interview tailored to the role or industry you’re targeting. MockPrep AI provides a range of interview scenarios to help you prepare for any opportunity.
            </p>
            <p>
              <strong>Step 2:</strong> During the interview, AI-generated questions will simulate the challenges of a real interview. Respond verbally, and MockPrep AI will transcribe your answers in real-time.
            </p>
            <p>
              <strong>Step 3:</strong> Receive detailed feedback on your responses. MockPrep AI analyzes each answer to provide a rating and personalized feedback, highlighting areas for improvement to help you succeed in your real interview.
            </p>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-2xl font-semibold mb-4">Get Started Today</h2>
          <p className="text-gray-700 mb-6">
            Ready to start practicing? Join now and let MockPrep AI guide you toward a confident and successful interview experience.
          </p>
          <Link href="/dashboard">
            <Button className="text-lg px-6 py-3">Start Your Mock Interview</Button>
          </Link>
        </section>
      </main>
    </div>
  );
}
