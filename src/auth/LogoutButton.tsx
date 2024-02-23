'use client';

import { Button } from '@/components/ui/button';
import { Loader2, LogOut } from 'lucide-react';
import { useMutation } from '@tanstack/react-query';
import { signOut } from 'next-auth/react';

export type LoginButtonProps = {};

export const LoginButton = (props: LoginButtonProps) => {
  const mutation = useMutation({ mutationFn: async () => signOut() });

  return (
    <Button>
      {mutation.isPending ? (
        <Loader2 size={16} className="mr-2 animate-spin" />
      ) : (
        <LogOut
          onClick={async () => mutation.mutate()}
          size={16}
          className="mr-2"
        />
      )}
      Logout
    </Button>
  );
};
