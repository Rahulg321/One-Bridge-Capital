import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface EngagementModel {
  id: string;
  title: string;
  description: string;
  suitableFor: string;
  highlights: string[];
}

interface EngagementModelsProps {
  models: EngagementModel[];
  title?: string;
  subtitle?: string;
  className?: string;
  cardClassName?: string;
}

export default function EngagementModels({
  models,
  title = "How to Engage With Us",
  subtitle = "We understand that each client is unique and hence, we are open to different engagement models. Below are the three most frequently employed engagement models by our clients.",
  className,
  cardClassName,
}: EngagementModelsProps) {
  return (
    <div className={cn("w-full max-w-6xl mx-auto px-4 py-8", className)}>
      {title && <h2 className="md:text-center mb-2 text-[#1e2a4a]">{title}</h2>}
      {subtitle && (
        <p className="md:text-center mb-8 max-w-3xl mx-auto text-muted-foreground">
          {subtitle}
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        {models.map((model) => (
          <Card
            key={model.id}
            className={cn("h-full shadow-lg", cardClassName)}
          >
            <CardContent className="">
              <h4 className="mb-4 text-[#1e2a4a]">{model.title}</h4>
              <div className="mb-4">
                <h5 className="">Description:</h5>
                <p className="text-muted-foreground">{model.description}</p>
              </div>
              <div className="mb-4">
                <h4 className="font-medium text-sm">Suitable for:</h4>
                <p className="text-muted-foreground">{model.suitableFor}</p>
              </div>
              <div>
                <h4 className="font-medium text-sm mb-2">Highlight:</h4>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                  {model.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
