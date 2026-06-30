import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BookOpenCheck, GraduationCap, Sparkles } from "lucide-react";
import useAuth from "../../hooks/useAuth";
import AuthPageShell from "../../components/auth/AuthPageShell";
import AuthField from "../../components/auth/AuthField";
import AuthFeatureList from "../../components/auth/AuthFeatureList";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const features = [
    {
      title: "Personalized access",
      description:
        "Continue your journey with recommendations tailored to your profile.",
    },
    {
      title: "Fast discovery",
      description:
        "Return to search, filtering, and saved education opportunities instantly.",
    },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      await login(formData);
      navigate("/");
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message ||
          "Unable to log in right now. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthPageShell
      eyebrow="Welcome back"
      title="Sign in to continue your NextStep journey"
      description="Access your personalized profile, saved universities, and scholarship discovery tools from one secure place."
      features={[
        {
          icon: GraduationCap,
          title: "Your student profile",
          description:
            "Resume where you left off and keep your recommendations aligned.",
          color: "#1D4ED8",
          bg: "#EFF6FF",
        },
        {
          icon: Sparkles,
          title: "Guided recommendations",
          description:
            "See smarter suggestions based on your interests and academic goals.",
          color: "#0F766E",
          bg: "#ECFDF5",
        },
        {
          icon: BookOpenCheck,
          title: "Centralized access",
          description:
            "Move between universities, majors, and scholarships without searching again.",
          color: "#B45309",
          bg: "#FFFBEB",
        },
      ]}
      footerText="Need an account?"
      footerLinkText="Create one here"
      footerLinkTo="/sign-up"
    >
      <div>
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">
            Login
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-950">
            Access your account
          </h2>
          <p className="mt-3 text-sm leading-7 text-gray-600">
            Use your email and password to return to your personalized education
            dashboard.
          </p>
        </div>

        {errorMessage && (
          <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {errorMessage}
          </div>
        )}

        <form className="space-y-5" onSubmit={handleSubmit}>
          <AuthField
            label="Email address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            autoComplete="email"
          />
          <AuthField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            autoComplete="current-password"
          />

          <div className="flex items-center justify-between gap-4 text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500"
              />
              Remember me
            </label>
            <span className="cursor-not-allowed text-gray-400">
              Forgot password?
            </span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition-colors hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <AuthFeatureList items={features} />
      </div>
    </AuthPageShell>
  );
}
