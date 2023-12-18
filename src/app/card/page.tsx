import { Card } from '@/components/Cards';
import { Feature } from '@/components/Cards/feature';
import { Quote } from '@/components/Cards/quote';
import LayoutAdmin from '@/components/Layouts/layoutAdmin'
import React from 'react'

export default function page() {
  return (
    <LayoutAdmin>
      <div className="flex gap-3 m-4">
        <Card/>
        <Quote/>
        <Feature/>
      </div>
    </LayoutAdmin>
  );
}
