import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { submitRecommendationRequest } from "../services/recommendationService";
import RecommendationHeader from "../components/recommendation/RecommendationHeader";
import RecommendationWelcome from "../components/recommendation/RecommendationWelcome";
import StepOneAcademicForm from "../components/recommendation/StepOneAcademicForm";
import StepTwoInterestsStrengths from "../components/recommendation/StepTwoInterestsStrengths";
import StepThreeCareerForm from "../components/recommendation/StepThreeCareerForm";
import RecommendationLoading from "../components/recommendation/RecommendationLoading";
import RecommendationResults from "../components/recommendation/RecommendationResults";
import RecommendationActions from "../components/recommendation/RecommendationActions";

const scoreFields = [
  { key: "math", label: "Mathematics" },
  { key: "english", label: "English" },
  { key: "chemistry", label: "Chemistry" },
  { key: "physics", label: "Physics" },
  { key: "biology", label: "Biology" },
  { key: "khmerLiterature", label: "Khmer Literature" },
];

export default function Recommendation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState({});
  const [interests, setInterests] = useState([]);
  const [strengths, setStrengths] = useState([]);
  const [careerField, setCareerField] = useState("");
  const [careerValues, setCareerValues] = useState("");
  const [workEnvironment, setWorkEnvironment] = useState("");
  const [locationPreference, setLocationPreference] = useState("");
  const [additionalPreferences, setAdditionalPreferences] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loadingMessages, setLoadingMessages] = useState([]);
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const progressPercentage = useMemo(() => Math.round((step / 3) * 100), [step]);

  const validateScores = () => {
    const invalid = scoreFields.find(({ key }) => {
      const value = Number(scores[key] ?? "");
      return Number.isNaN(value) || value < 0 || value > 100;
    });

    return !invalid;
  };

  const handleScoreChange = (key, value) => {
    setScores((current) => ({ ...current, [key]: value }));
  };

  const toggleSelection = (list, value, setter) => {
    setter((current) =>
      current.includes(value) ? current.filter((item) => item !== value) : [...current, value],
    );
  };

  const handleStart = () => {
    setErrorMessage("");
    setStep(1);
  };

  const handleNext = () => {
    if (step === 1 && !validateScores()) {
      setErrorMessage("Please enter valid scores between 0 and 100 for every subject.");
      return;
    }

    setErrorMessage("");
    setStep((current) => current + 1);
  };

  const handleBack = () => {
    setErrorMessage("");
    if (step === 1) {
      setStep(0);
      return;
    }
    setStep((current) => Math.max(1, current - 1));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setErrorMessage("");
    setLoadingMessages([
      "Analyzing your academic profile",
      "Matching your interests",
      "Evaluating career preferences",
      "Checking job market trends",
    ]);

    try {
      const response = await submitRecommendationRequest({
        scores,
        interests,
        strengths,
        careerField,
        careerValues,
        workEnvironment,
        locationPreference,
        additionalPreferences,
      });

      if (response?.success) {
        setResult(response.data);
        setStep(4);
      } else {
        setErrorMessage(response?.message || "We could not generate your recommendations yet.");
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Unable to connect to the recommendation service right now.");
    } finally {
      setIsSubmitting(false);
      setLoadingMessages([]);
    }
  };

  const resetAssessment = () => {
    setStep(0);
    setScores({});
    setInterests([]);
    setStrengths([]);
    setCareerField("");
    setCareerValues("");
    setWorkEnvironment("");
    setLocationPreference("");
    setAdditionalPreferences("");
    setResult(null);
    setErrorMessage("");
  };

  const goHome = () => {
    navigate(location.state?.from?.pathname || "/");
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <RecommendationHeader step={step} progressPercentage={progressPercentage} />

        {errorMessage && (
          <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {errorMessage}
          </div>
        )}

        {step === 0 && <RecommendationWelcome onStart={handleStart} />}
        {step === 1 && <StepOneAcademicForm scores={scores} onScoreChange={handleScoreChange} />}
        {step === 2 && (
          <StepTwoInterestsStrengths
            interests={interests}
            strengths={strengths}
            onToggleInterest={(value) => toggleSelection(interests, value, setInterests)}
            onToggleStrength={(value) => toggleSelection(strengths, value, setStrengths)}
          />
        )}
        {step === 3 && (
          <StepThreeCareerForm
            careerField={careerField}
            careerValues={careerValues}
            workEnvironment={workEnvironment}
            locationPreference={locationPreference}
            additionalPreferences={additionalPreferences}
            onCareerFieldChange={setCareerField}
            onCareerValuesChange={setCareerValues}
            onWorkEnvironmentChange={setWorkEnvironment}
            onLocationPreferenceChange={setLocationPreference}
            onAdditionalPreferencesChange={setAdditionalPreferences}
          />
        )}
        {step === 4 && (
          <div className="space-y-6">
            {isSubmitting ? (
              <RecommendationLoading loadingMessages={loadingMessages} />
            ) : result ? (
              <RecommendationResults result={result} onRestart={resetAssessment} />
            ) : null}
          </div>
        )}

        <RecommendationActions
          step={step}
          onBack={step === 0 ? goHome : handleBack}
          onContinue={handleNext}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      </div>
    </div>
  );
}
