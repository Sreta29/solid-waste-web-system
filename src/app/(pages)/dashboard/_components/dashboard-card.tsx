import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface DashboardCardProps {
  title: string;
  subtitle: string | JSX.Element;
  body: string | JSX.Element;
  charts?: JSX.Element;
}

export default function DashboardCard({
  title,
  subtitle,
  body,
  charts,
}: DashboardCardProps) {
  return (
    <Card className="w-fit">
      <CardHeader>
        <CardTitle className="w-48">{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex">
        <div>{body}</div>
        {charts && charts}
      </CardContent>
    </Card>
  );
}
