import { colorTokens } from "@/tokens/colors";
import { Typography } from "@/components/atoms/Typography/Typography";

export function ColorTokens() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Object.entries(colorTokens).map(([group, shades]) => {
        if (typeof shades === "string") {
          return (
            <div key={group} className="space-y-2">
              <Typography variant="label" className="capitalize">
                {group}
              </Typography>
              <div
                className="h-16 rounded-lg border border-neutral-200"
                style={{ backgroundColor: shades }}
              />
              <Typography variant="caption" color="muted">
                {shades}
              </Typography>
            </div>
          );
        }

        return (
          <div key={group} className="space-y-3">
            <Typography variant="label" className="capitalize">
              {group}
            </Typography>
            <div className="space-y-2">
              {Object.entries(shades).map(([shade, value]) => (
                <div key={shade} className="flex items-center gap-3">
                  <div
                    className="h-10 w-10 shrink-0 rounded-md border border-neutral-200"
                    style={{ backgroundColor: value }}
                  />
                  <div>
                    <Typography variant="caption">{`${group}-${shade}`}</Typography>
                    <Typography variant="caption" color="muted">
                      {value}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
