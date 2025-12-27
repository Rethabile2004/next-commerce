import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ThemeTestPage() {
  return (
    <div className="min-h-screen bg-background p-10">
      <h1 className="text-4xl font-bold text-foreground mb-8">shadcn/ui Theme Test</h1>
      <h1 className="text-4xl font-bold mb-8 text-muted" >shadcn/ui Theme Test</h1>

      <div className="grid gap-8 max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Card Component</CardTitle>
            <CardDescription>This should have your custom background and text colors</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="input">Input Field</Label>
              <Input id="input" placeholder="Type something..." />
            </div>

            <div className="flex gap-4">
              <Button>Primary Button</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <div className="w-32 h-32 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-semibold">
            Primary
          </div>
          <div className="w-32 h-32 rounded-lg bg-secondary flex items-center justify-center text-secondary-foreground font-semibold">
            Secondary
          </div>
          <div className="w-32 h-32 rounded-lg bg-muted flex items-center justify-center text-muted-foreground font-semibold">
            Muted
          </div>
        </div>
      </div>
    </div>
  );
}