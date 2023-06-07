import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js</h1>
      <Link href="/login">
        <a>Login</a>
      </Link>
    </div>
  );
}