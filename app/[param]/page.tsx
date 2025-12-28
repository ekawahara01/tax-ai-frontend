import { generateStaticParams, VARIABLES } from './utils';
import Calculator from '../../components/Calculator';
import { notFound } from 'next/navigation';

export { generateStaticParams };

export default async function DynamicPage({ params }: { params: Promise<{ param: string }> }) {
  const resolvedParams = await params;
  const title = resolvedParams.param.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  if (!VARIABLES.includes(resolvedParams.param)) return notFound();

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-4 text-sm text-blue-600 uppercase tracking-wide">Localized for {title}</div>
      <h1 className="text-4xl font-bold mb-6">{title} Calculator</h1>

      <div className="bg-white p-8 rounded-2xl shadow-xl mb-8 border-t-4 border-blue-600">
        <Calculator initialLabel="{title}" />
      </div>

      <div className="prose max-w-none bg-white p-8 rounded-xl">
        <h2>Specifics for {title}</h2>
        <p>
          When dealing with tax in {title}, it is crucial to understand the local regulations.
          Use the calculator above to get an estimate tailored to {title}.
        </p>
      </div>
    </div>
  );
}
