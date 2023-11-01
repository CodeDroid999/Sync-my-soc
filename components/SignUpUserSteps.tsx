import Link from 'next/link'
import Step from './Step'
import Code from '@/components/Code'
import Step2 from './Step2Card'
import Step1 from './Step1Card'
import Step3 from './Step3Card'

const create = `
create table notes (
  id uuid default gen_random_uuid() primary key,
  title text
);

insert into notes(title)
values('Today I connected Next.js to Supabase. It was awesome!');
`.trim()

const server = `
import { createClient } from '@/utils/supabase/server'

export const dynamic = 'force-dynamic'

export default async function Page() {
  const supabase = createClient()
  const { data: notes } = await supabase.from('notes').select()

  return <pre>{JSON.stringify(notes, null, 2)}</pre>
}
`.trim()

const client = `
'use client'

import { createClient } from '@/utils/supabase/client'
import { useEffect, useState } from 'react'

export default function Page() {
  const [notes, setNotes] = useState<any[] | null>(null)
  const supabase = createClient()

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from('notes').select()
      setNotes(data)
    }
    getData()
  }, [])

  return <pre>{JSON.stringify(notes, null, 2)}</pre>
}
`.trim()

export default function SignUpUserSteps() {
  return (
    <ol className="flex flex-col gap-6">
       <p>Head t0 the <a href="/login">Sign up page</a>to register for a free account</p>
      <Step title="Sign up for free!">
        <Step1/>
      </Step>

      <Step title="Link your social media Accounts">
        <p>Add your social media accounts to monitor your online presence influence. </p>
        <Step2/>
      </Step>

      <Step title="Monitor your socials all from one place">
        <p>Monitor your socials all from one place  🚀</p>
        <Step3/>
      </Step>
    </ol>
  )
}
