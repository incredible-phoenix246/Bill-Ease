import { GOOGLE_SIGN_IN } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
const LoginWithGoggle = () => {
  const handleLogin = async () => {
    await GOOGLE_SIGN_IN("/dashboard");
  };
  return (
    <form action={handleLogin}>
      <Button
        type="submit"
        className="rounded-full w-full h-[56px] font-medium font-worksans flex space-x-2 text-[16px] bg-background dark:bg-dark-background dark:text-dark-copy hover:bg-foreground hover:dark:bg-dark-foreground text-copy"
      >
        <FcGoogle />
        <span>Login with Google</span>
      </Button>
    </form>
  );
};

export { LoginWithGoggle };
