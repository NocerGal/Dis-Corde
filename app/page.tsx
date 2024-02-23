import { Auth } from '@/src/auth/Auth';
import { ExistingServerSideBar } from './(ExistingServerSideBar)/ExistingServerSideBar';
import { ServerContents } from './(ServerContents)/ServerContents';
import { auth } from '@/src/lib/auth';

export default async function Home() {
  const session = await auth();

  console.log(session);

  if (!session) {
    return <Auth />;
  }
  return (
    <div className="h-full w-full">
      <ExistingServerSideBar />
      {/* <ServerContents /> */}
    </div>
  );
}
