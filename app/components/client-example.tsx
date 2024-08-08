'use client'

type User = { user: { name: string } }

export default function ClientExample({ user }: User) {
  return <p>Client example user name: {user?.name || 'no user'}</p>
}