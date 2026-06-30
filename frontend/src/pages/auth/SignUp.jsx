import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BookOpenCheck, GraduationCap, Sparkles } from "lucide-react";
import useAuth from "../../hooks/useAuth";
import AuthPageShell from "../../components/auth/AuthPageShell";
import AuthField from "../../components/auth/AuthField";
import AuthFeatureList from "../../components/auth/AuthFeatureList";

export default function SignUp() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const features = [
    {
      title: "Create a student profile",
      description:
        "Store your basic details so recommendations can be more relevant.",
    },
    {
      title: "Unlock smart suggestions",
      description:
        "Use your profile to get more useful university and scholarship matches.",
    },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);

    try {
      await register({
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      navigate("/");
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message ||
          "Unable to create your account right now. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthPageShell
      eyebrow="Join NextStep"
      title="Create your student account"
      description="Set up a personal profile to search universities, discover scholarships, and get recommendations built around your goals."
      features={[
        {
          icon: GraduationCap,
          title: "Personalized profile",
          description:
            "Add your basic details once and use them across the platform.",
          color: "#1D4ED8",
          bg: "#EFF6FF",
        },
        {
          icon: Sparkles,
          title: "Better recommendations",
          description:
            "Help NextStep suggest more relevant study opportunities for you.",
          color: "#0F766E",
          bg: "#ECFDF5",
        },
        {
          icon: BookOpenCheck,
          title: "All-in-one exploration",
          description:
            "Search universities, majors, and scholarships from a single account.",
          color: "#B45309",
          bg: "#FFFBEB",
        },
      ]}
      footerText="Already have an account?"
      footerLinkText="Sign in"
      footerLinkTo="/login"
    >
      <div>
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">
            Sign up
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-950">
            Start with your profile
          </h2>
          <p className="mt-3 text-sm leading-7 text-gray-600">
            Create your account in a few steps and begin exploring educational
            opportunities with more clarity.
          </p>
        </div>

        {errorMessage && (
          <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {errorMessage}
          </div>
        )}

        <form className="space-y-5" onSubmit={handleSubmit}>
          <AuthField
            label="Username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Your username"
            autoComplete="username"
          />
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
            placeholder="Create a password"
            autoComplete="new-password"
          />
          <AuthField
            label="Confirm password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            autoComplete="new-password"
          />

          <p className="text-xs leading-6 text-gray-500">
            By creating an account, you agree to use NextStep to explore
            educational opportunities responsibly.
          </p>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition-colors hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Creating account..." : "Create account"}
          </button>
        </form>

        <AuthFeatureList items={features} />
      </div>
    </AuthPageShell>
  );
}
