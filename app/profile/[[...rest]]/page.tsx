// programmer: rethabile eric siase
// github.com/rethabile2004

// this component allows the user to modify their information, including resetting passwords, changing names/ email and more
import { UserProfile } from "@clerk/nextjs";

export default function  ProfilePage() {
  return (
    <div className="min-h-screen bg-background py-12 px-2 -mt-20">
      <div className="max-w-4xl mx-auto">
          <UserProfile 
            appearance={{
              elements: {
                card: "shadow-none border-0",
                pageScrollBox: "p-0",
              },
            }}
          />
      </div>
    </div>
  );
}