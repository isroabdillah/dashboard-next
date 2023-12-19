import LayoutAdmin from '@/components/Layouts/layoutAdmin'
import { Widget1 } from '@/components/widget/widget1'
import { Widget2 } from '@/components/widget/widget2'
import { Widget3 } from '@/components/widget/widget3'
import React from 'react'

export default function Widget() {
  return (
    <LayoutAdmin>
      <div className="flex lg:flex-row lg:space-y-0 space-y-4 flex-col gap-x-4 mx-4">
        <Widget1/>
        <Widget2/>
        <Widget3/>
      </div>
    </LayoutAdmin>
  )
}
