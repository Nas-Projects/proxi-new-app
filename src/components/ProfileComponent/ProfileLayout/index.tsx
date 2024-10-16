'use client';

import { useState, ReactNode } from 'react';
import Sidebar from './sidebar';
import Directory from './directory';
// import { ResultProps } from '../../../app/api/apiHelper';
import Toast from '@/components/alerts/toast';
import Meta, { MetaProps } from './meta';
// import { useRouter } from 'next/navigation';
// import LoadingDots from '@/components/LoadingDots';
import ClusterProvisioning from './cluster-provisioning';

export default function Layout({
  meta,
  results,
  totalUsers,
  username,
  clusterStillProvisioning,
  children
}: {
  meta: MetaProps;
  results: []; // Ensure this matches the expected type
  totalUsers: number;
  username?: string;
  clusterStillProvisioning?: boolean;
  children: ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // You should remove this once your MongoDB Cluster is fully provisioned
  if (clusterStillProvisioning) {
    return <ClusterProvisioning />;
  }

  return (
    <div className="w-full mx-auto h-screen flex overflow-hidden bg-black">
      <Meta props={meta} />
      <Toast username={username} />
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        results={results} // Ensure correct prop passing here
        totalUsers={totalUsers}
      />

      <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
        <div className="flex-1 relative z-0 flex overflow-hidden">
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
            {children}
          </main>
          <div className="hidden md:order-first h-screen md:flex md:flex-col">
            <Directory results={results} totalUsers={totalUsers} />
          </div>
        </div>
      </div>
    </div>
  );
}
