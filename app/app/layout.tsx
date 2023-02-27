import '../../styles/globals.css'
import Sidebar from '../../components/sidebar'
import SessionProvider from "../../components/session-provider"
import { getServerSession } from "next-auth"
import { authOptions } from "../../pages/api/auth/[...nextauth]"
import { useSelectedLayoutSegments } from 'next/navigation';

type Props = {
  children: React.ReactNode
}

export default async function Layout({
  children
}: Props) {
  const session = await getServerSession(authOptions);

  return (
    <SessionProvider session={session}>
      <div className="flex flex-row gap-3">
        <Sidebar></Sidebar>

        <div className="flex flex-col flex-1 px-3">
          {children}
        </div>

      </div>
    </SessionProvider>
  )
}
