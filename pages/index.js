import dynamic from 'next/dynamic'
const Site = dynamic(()=>import('../src/components/IT_OPE_003_Site'),{ssr:false})
export default function Home(){return <Site/>}
