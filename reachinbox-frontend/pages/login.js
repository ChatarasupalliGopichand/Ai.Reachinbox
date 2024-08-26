import { signIn } from 'next-auth/react';
import Image from 'next/image';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full dark:bg-gray-800">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Sign in to ReachInbox</h2>
        <button
          onClick={() => signIn('google')}
          className="w-full flex items-center justify-center p-4 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
        >
          <Image src="/google-logo.png" alt="Google Logo" width={20} height={20} className="mr-2" />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
