import { LoginForm } from "@/components/forms/login-form";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 px-4 py-8 sm:py-12">
      <div className="w-full max-w-md">
        <div className="mb-6 text-center sm:mb-8">
          <h1 className="text-3xl font-light text-textPrimary sm:text-4xl">
            Welcome{" "}
            <span className="italic text-primary-600">
              Back
            </span>
          </h1>
          <p className="mt-2 text-sm text-textSecondary sm:text-base">
            Sign in to continue your beauty journey
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-background p-6 shadow-lg sm:p-8">
          <LoginForm />

          <div className="mt-6 text-center text-sm">
            <span className="text-textMuted">
              Don't have an account?{" "}
            </span>
            <Link
              href="/register"
              className="font-medium text-primary-600 hover:text-primary-700"
            >
              Sign up
            </Link>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-textMuted">
          By continuing, you agree to our{" "}
          <Link href="/terms" className="underline hover:text-textSecondary">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="underline hover:text-textSecondary">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
}