"use client"

import { AnimatePresence, motion } from "framer-motion"
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Code,
  Globe,
  Loader2,
  RefreshCw,
  ShoppingCart,
  Sparkles,
  Zap,
} from "lucide-react"
import { useTranslations } from "next-intl"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

interface ContactDialogProps {
  children: React.ReactNode
}

const projectTypes = [
  { key: "website", icon: Globe },
  { key: "ecommerce", icon: ShoppingCart },
  { key: "webapp", icon: Code },
  { key: "automation", icon: Zap },
  { key: "redesign", icon: RefreshCw },
  { key: "other", icon: Sparkles },
] as const

const budgetOptions = ["small", "medium", "large", "enterprise", "unknown"] as const
const timelineOptions = ["urgent", "normal", "flexible", "unknown"] as const

type FormData = {
  projectType: string
  budget: string
  timeline: string
  name: string
  email: string
  phone: string
  company: string
  website: string
  message: string
}

export function ContactDialog({ children }: ContactDialogProps) {
  const t = useTranslations("cta.form")
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [formData, setFormData] = useState<FormData>({
    projectType: "",
    budget: "",
    timeline: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    message: "",
  })

  const totalSteps = 4
  const steps = ["project", "budget", "contact", "details"] as const

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const canGoNext = () => {
    switch (currentStep) {
      case 1:
        return formData.projectType !== ""
      case 2:
        return formData.budget !== "" && formData.timeline !== ""
      case 3:
        return formData.name !== "" && formData.email !== ""
      case 4:
        return formData.message !== ""
      default:
        return false
    }
  }

  const handleNext = () => {
    if (currentStep < totalSteps && canGoNext()) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const handleSubmit = async () => {
    if (!canGoNext()) return

    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("https://formsubmit.co/ajax/gregoryrag@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `Novo projeto: ${formData.projectType}`,
          nome: formData.name,
          email: formData.email,
          telefone: formData.phone || "Não informado",
          empresa: formData.company || "Não informado",
          tipo_projeto: formData.projectType,
          orcamento: formData.budget,
          prazo: formData.timeline,
          site_atual: formData.website || "Não informado",
          mensagem: formData.message,
        }),
      })

      const data = await response.json()

      if (data.success === "true" || data.success === true) {
        setIsSuccess(true)
      } else {
        throw new Error("Form submission failed")
      }
    } catch {
      setError(t("error"))
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
    if (!open) {
      setTimeout(() => {
        setCurrentStep(1)
        setIsSuccess(false)
        setError(null)
        setFormData({
          projectType: "",
          budget: "",
          timeline: "",
          name: "",
          email: "",
          phone: "",
          company: "",
          website: "",
          message: "",
        })
      }, 300)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-bg-primary border-white/10 text-white sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        {isSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-12 text-center"
          >
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent/20">
              <Check className="h-10 w-10 text-accent" />
            </div>
            <h3 className="mb-2 text-2xl font-semibold">{t("success.title")}</h3>
            <p className="text-gray-400 max-w-sm">{t("success.message")}</p>
            <button
              type="button"
              onClick={() => handleOpenChange(false)}
              className="mt-8 px-6 py-2 rounded-full border border-white/20 text-white hover:bg-white/5 transition-colors"
            >
              {t("success.close")}
            </button>
          </motion.div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold text-white">{t("title")}</DialogTitle>
              <DialogDescription className="text-gray-400">{t("subtitle")}</DialogDescription>
            </DialogHeader>

            {/* Progress Bar - Modern Design */}
            <div className="mt-6 mb-8">
              {/* Step indicators with connecting line */}
              <div className="relative">
                {/* Background line - behind circles */}
                <div className="absolute top-4 left-4 right-4 h-0.5 bg-white/10 -translate-y-1/2" />
                {/* Progress line - behind circles */}
                <div
                  className="absolute top-4 left-4 h-0.5 bg-accent transition-all duration-500 -translate-y-1/2"
                  style={{ width: `calc(${((currentStep - 1) / (totalSteps - 1)) * 100}% - 2rem)` }}
                />

                <div className="relative z-10 flex justify-between">
                  {steps.map((step, index) => {
                    const isCompleted = index + 1 < currentStep
                    const isActive = index + 1 === currentStep
                    const isPending = index + 1 > currentStep

                    return (
                      <div key={step} className="flex flex-col items-center">
                        <div
                          className={cn(
                            "flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold transition-all duration-300",
                            isCompleted && "bg-accent text-bg-primary shadow-lg shadow-accent/30",
                            isActive && "bg-bg-primary text-accent ring-2 ring-accent",
                            isPending && "bg-bg-primary border-2 border-white/20 text-gray-500",
                          )}
                        >
                          {isCompleted ? <Check className="w-4 h-4" /> : index + 1}
                        </div>
                        <span
                          className={cn(
                            "mt-2 text-xs font-medium transition-colors",
                            isActive ? "text-accent" : isCompleted ? "text-white" : "text-gray-500",
                          )}
                        >
                          {t(`steps.${step}`)}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Step Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="min-h-[280px]"
              >
                {/* Step 1: Project Type */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">{t("step1.title")}</h3>
                      <p className="text-sm text-gray-400">{t("step1.subtitle")}</p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {projectTypes.map(({ key, icon: Icon }) => (
                        <button
                          key={key}
                          type="button"
                          onClick={() => updateFormData("projectType", key)}
                          className={cn(
                            "flex flex-col items-center gap-2 p-4 rounded-xl border transition-all",
                            formData.projectType === key
                              ? "border-accent bg-accent/10 text-accent ring-2 ring-accent/20"
                              : "border-white/10 bg-white/5 text-gray-300 hover:border-white/20 hover:bg-white/10",
                          )}
                        >
                          <Icon className="w-6 h-6" />
                          <span className="text-sm font-medium text-center">
                            {t(`step1.options.${key}`)}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Budget & Timeline */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">{t("step2.title")}</h3>
                      <p className="text-sm text-gray-400">{t("step2.subtitle")}</p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label className="text-white mb-2 block">{t("step2.budget")}</Label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {budgetOptions.map((option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() => updateFormData("budget", option)}
                              className={cn(
                                "px-3 py-2 rounded-lg border text-sm font-medium transition-all",
                                formData.budget === option
                                  ? "border-accent bg-accent/10 text-white"
                                  : "border-white/10 text-gray-400 hover:border-white/20",
                              )}
                            >
                              {t(`step2.budgetOptions.${option}`)}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <Label className="text-white mb-2 block">{t("step2.timeline")}</Label>
                        <div className="grid grid-cols-2 gap-2">
                          {timelineOptions.map((option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() => updateFormData("timeline", option)}
                              className={cn(
                                "px-3 py-2 rounded-lg border text-sm font-medium transition-all",
                                formData.timeline === option
                                  ? "border-accent bg-accent/10 text-white"
                                  : "border-white/10 text-gray-400 hover:border-white/20",
                              )}
                            >
                              {t(`step2.timelineOptions.${option}`)}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Contact Info */}
                {currentStep === 3 && (
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">{t("step3.title")}</h3>
                      <p className="text-sm text-gray-400">{t("step3.subtitle")}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white">
                          {t("step3.name")} <span className="text-accent">*</span>
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => updateFormData("name", e.target.value)}
                          placeholder={t("step3.namePlaceholder")}
                          className="border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus-visible:border-accent focus-visible:ring-accent/20"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white">
                          {t("step3.email")} <span className="text-accent">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => updateFormData("email", e.target.value)}
                          placeholder={t("step3.emailPlaceholder")}
                          className="border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus-visible:border-accent focus-visible:ring-accent/20"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-400">
                          {t("step3.phone")}{" "}
                          <span className="text-gray-500">({t("step3.phoneOptional")})</span>
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => updateFormData("phone", e.target.value)}
                          placeholder={t("step3.phonePlaceholder")}
                          className="border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus-visible:border-accent focus-visible:ring-accent/20"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-gray-400">
                          {t("step3.company")}{" "}
                          <span className="text-gray-500">({t("step3.companyOptional")})</span>
                        </Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => updateFormData("company", e.target.value)}
                          placeholder={t("step3.companyPlaceholder")}
                          className="border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus-visible:border-accent focus-visible:ring-accent/20"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Project Details */}
                {currentStep === 4 && (
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">{t("step4.title")}</h3>
                      <p className="text-sm text-gray-400">{t("step4.subtitle")}</p>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="website" className="text-gray-400">
                          {t("step4.website")}{" "}
                          <span className="text-gray-500">({t("step4.websiteOptional")})</span>
                        </Label>
                        <Input
                          id="website"
                          type="url"
                          value={formData.website}
                          onChange={(e) => updateFormData("website", e.target.value)}
                          placeholder={t("step4.websitePlaceholder")}
                          className="border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus-visible:border-accent focus-visible:ring-accent/20"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-white">
                          {t("step4.message")} <span className="text-accent">*</span>
                        </Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => updateFormData("message", e.target.value)}
                          placeholder={t("step4.messagePlaceholder")}
                          rows={4}
                          className="border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus-visible:border-accent focus-visible:ring-accent/20 resize-none"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {error && <p className="text-sm text-red-400 mt-2">{error}</p>}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={handleBack}
                disabled={currentStep === 1}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all",
                  currentStep === 1
                    ? "opacity-0 pointer-events-none"
                    : "text-gray-400 hover:text-white hover:bg-white/5",
                )}
              >
                <ArrowLeft className="w-4 h-4" />
                {t("navigation.back")}
              </button>

              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!canGoNext()}
                  className={cn(
                    "flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all",
                    canGoNext()
                      ? "bg-accent text-bg-primary hover:bg-accent-hover"
                      : "bg-white/10 text-gray-500 cursor-not-allowed",
                  )}
                >
                  {t("navigation.next")}
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!canGoNext() || isSubmitting}
                  className={cn(
                    "flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all",
                    canGoNext() && !isSubmitting
                      ? "bg-accent text-bg-primary hover:bg-accent-hover"
                      : "bg-white/10 text-gray-500 cursor-not-allowed",
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      {t("submitting")}
                    </>
                  ) : (
                    <>
                      {t("navigation.submit")}
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
