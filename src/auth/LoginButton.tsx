'use client';
import { Button } from '@/components/ui/button';
import { Loader2, LogIn } from 'lucide-react';
import { useMutation } from '@tanstack/react-query';
import { signIn } from 'next-auth/react';
import { PropsWithoutRef } from 'react';

export type LoginButtonProps = {
  className: string;
};

export const LoginButton = (props: PropsWithoutRef<LoginButtonProps>) => {
  const mutation = useMutation({ mutationFn: async () => signIn() });

  return (
    <Button {...props} onClick={() => mutation.mutate()}>
      {mutation.isPending ? (
        <Loader2 size={16} className="mr-2 animate-spin" />
      ) : (
        <LogIn
          onClick={async () => mutation.mutate()}
          size={16}
          className="mr-2"
        />
      )}
      Login
    </Button>
  );
};
