import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Login() {
  return (
    <main>
      <h1 className="text-2xl font-bold">login</h1>
      <div className="flex gap-2">
        <p>New here?</p>
        <Link
          className={buttonVariants({ size: "none", variant: "link" })}
          href="signup"
        >
          create your account
        </Link>
        <Input />
      </div>
    </main>
  );
}
