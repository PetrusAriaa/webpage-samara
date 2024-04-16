import { NextUIProvider } from "@nextui-org/system";

export default function Providers({children}) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  );
}