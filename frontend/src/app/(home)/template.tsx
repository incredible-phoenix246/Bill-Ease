import { UnAuthenticatedHeader } from "@/components/navs";
import { CTA } from "@/modules/home";

export default function GeneralTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <UnAuthenticatedHeader />
      {children}
      <CTA />
    </>
  );
}
