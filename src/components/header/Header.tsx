import { AvatarProvider } from "@/context/AvatarContext";
import { useSession } from "@/context/SessionContext";
import { ModeToggle } from "../theme/ModeToggle";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/types/Routes";

export const Header = () => {
  const { session } = useSession();

  const navigate = useNavigate();

  return (
    <AvatarProvider>
      <header className="flex flex-col items-center gap-1 mb-7.5 md:flex-row md:justify-between">
        {session ? (
          <div
            className="flex gap-1.5 "
            onClick={() => navigate(ROUTES.HOME)}
            style={{ cursor: "pointer" }}
          >
            <img
              src="/favicon.svg"
              alt="Consumptions logo"
              className="h-7"
            />
            <h3 className="scroll-m-20 text-2xl font-extrabold tracking-tight">
              Consumptions
            </h3>
          </div>
        ) : (
          <div className="flex gap-1.5 "></div>
        )}
        <div className="flex flex-col-reverse items-center justify-center gap-1.5 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:flex-row md:gap-2">
            <div className="flex flex-row gap-2">
              <ModeToggle />
            </div>
          </div>
        </div>
      </header>
    </AvatarProvider>
  );
};
