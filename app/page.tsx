import Form from '@/app/components/form';
import Table from '@/app/components/table';
import { fetchProviders } from './lib/data';

export default async function Home() {
  const providers = await fetchProviders() || [];

  return (
    <main className="flex min-h-screen flex-col items-center p-10 gap-5">
      <Form providers={providers}/>

      <Table/>
    </main>
  )
}
