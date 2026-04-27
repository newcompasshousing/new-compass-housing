import { cn } from "@/lib/utils"

interface BrandNameProps {
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  showHousing?: boolean
  lightMode?: boolean
}

export function BrandName({ 
  size = "md", 
  className,
  showHousing = true,
  lightMode = false
}: BrandNameProps) {
  const sizes = {
    sm: {
      new: "text-lg",
      compass: "text-lg",
      housing: "text-[10px]"
    },
    md: {
      new: "text-xl",
      compass: "text-xl", 
      housing: "text-xs"
    },
    lg: {
      new: "text-3xl md:text-4xl",
      compass: "text-3xl md:text-4xl",
      housing: "text-sm md:text-base"
    },
    xl: {
      new: "text-4xl md:text-5xl lg:text-6xl",
      compass: "text-4xl md:text-5xl lg:text-6xl",
      housing: "text-lg md:text-xl"
    }
  }

  const s = sizes[size]

  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex items-baseline gap-2">
        <span 
          className={cn(
            "font-playfair font-bold tracking-tight",
            s.new,
            lightMode ? "text-[#6B9B37]" : "text-[#6B9B37]"
          )}
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          NEW
        </span>
        <span 
          className={cn(
            "font-playfair font-bold tracking-tight",
            s.compass,
            lightMode ? "text-[#1e3a5f]" : "text-primary"
          )}
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          COMPASS
        </span>
      </div>
      {showHousing && (
        <div className="flex items-center gap-2">
          <span className={cn(
            "h-px flex-1",
            lightMode ? "bg-[#1e3a5f]/40" : "bg-primary/40"
          )} />
          <span 
            className={cn(
              "font-playfair tracking-[0.3em]",
              s.housing,
              lightMode ? "text-[#1e3a5f]" : "text-primary"
            )}
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            HOUSING
          </span>
          <span className={cn(
            "h-px flex-1",
            lightMode ? "bg-[#1e3a5f]/40" : "bg-primary/40"
          )} />
        </div>
      )}
    </div>
  )
}
