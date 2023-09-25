import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container } from "../util/container";
import { useTheme } from ".";
import { tinaField } from "tinacms/dist/react";
import { GlobalHeader } from "../../tina/__generated__/types";

export const Masthead = ({ data }: { data: GlobalHeader }) => {
  const router = useRouter();
  const theme = useTheme();

  const [isClient, setIsClient] = React.useState(false);
  React.useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div
      className={`relative overflow-hidden bg-wvu-blue`}
    >
      <Container size="custom" className="py-2 relative z-10">
        <div className="flex items-center justify-between gap-6">
          <div className="select-none text-lg font-bold tracking-tight my-4 transition duration-150 ease-out transform">
            <Link
              href="/"
              className="flex gap-1 items-center whitespace-nowrap tracking-[.002em]"
            >
              <span className="wvu-logo-lockup"><span data-tina-field={tinaField(data, "name")}>{data.name}</span></span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
