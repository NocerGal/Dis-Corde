import { auth } from '../../lib/auth';
import { LoginButton } from './LoginButton';
import { LogoutButton } from './LogoutButton';

export type AuthProps = {};

export const Auth = async () => {
  const session = await auth();

  if (!session) {
    return (
      <div className="flex h-full w-full">
        <LoginButton className="flex bg-purple-500 m-auto" />
      </div>
    );
  }

  return <LogoutButton />;
};
