import { RegisterForm } from "@/components/forms/register-form";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 px-4 py-8 sm:py-12">
      <div className="w-full max-w-md">
        <div className="mb-6 text-center sm:mb-8">
          <h1 className="text-3xl font-light text-textPrimary sm:text-4xl">
            Start Your{" "}
            <span className="italic text-secondary-600">
              Journey
            </span>
          </h1>
          <p className="mt-2 text-sm text-textSecondary sm:text-base">
            Create your account to unlock AI-powered beauty insights
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-background p-6 shadow-lg sm:p-8">
          <RegisterForm />

          <div className="mt-6 text-center text-sm">
            <span className="text-textMuted">
              Already have an account?{" "}
            </span>
            <Link
              href="/login"
              className="font-medium text-primary-600 hover:text-primary-700"
            >
              Sign in
            </Link>
          </div>
        </div>

        <div className="mt-6 space-y-2 text-center text-xs text-textMuted">
          <p>
            By creating an account, you agree to our{" "}
            <Link href="/terms" className="underline hover:text-textSecondary">
              Terms of Service
            </Link>
          </p>
          <p>
            Read our{" "}
            <Link href="/privacy" className="underline hover:text-textSecondary">
              Privacy Policy
            </Link>{" "}
            to learn how we protect your data
          </p>
        </div>
      </div>
    </div>
  );
}