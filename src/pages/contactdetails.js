import ContactDetailsForm from '@/components/ContactDetailsForm'
import Layout from '@/components/Layout'
import Link from 'next/link'

export default function ContactDetails() {
  return (
    <Layout nav={true}>
        <section className='bg-gray-50'>
                <div className="w-full h-full mx-auto">
                    <div className="">
                        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 flex items-center">
                          <Link href='/' className='mr-8 bg-slate-100 p-2 rounded-md hover:bg-slate-900 hover:text-white hover:cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                            </svg>
                          </Link>
                          <h1 className="text-xl font-semibold tracking-tight text-slate-800">
                            Update Contact Details
                          </h1>
                        </div>
                    </div>
                    <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-8'>
                        <ContactDetailsForm />
                    </div>
                </div>
            </section>
    </Layout>
  )
}
