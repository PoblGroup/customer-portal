import Banner from '@/components/Banner'
import Layout from '@/components/Layout'
import Home from '@/components/MyHome/Home'

export default function MyHome() {
  return (
    <Layout nav={true}>
        <Banner 
          message="Don't have a direct set up? Create one today!" 
          subject='Direct Debits' 
          buttonText='Set up now' 
        />

        <section className='bg-gray-50'>
                <div className="w-full h-full mx-auto">
                  <Home />
                </div>
            </section>
    </Layout>
  )
}
