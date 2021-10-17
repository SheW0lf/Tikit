import React from 'react'
import Ticket from './Ticket'
import { useGitApi } from '../hooks/useGitApi'
import { gitApiResponse } from '../hooks/gitApiResponseType'
import { parseISOString } from '../utils/dateFormatter'

export function Board() {
  const { response, error, loading } = useGitApi()
  type Props = {
    title: string
    content?: JSX.Element[]
  }

  const TicketInfo = response.map((element: gitApiResponse) => {
    if (error) {
      return <p>{error}</p>
    }
    if (loading) {
      return <p>Loading</p>
    }
    return (
      <Ticket
        description={element.body}
        key={element.id}
        title={element.title}
        tags={element.labels.map((labelsObject: any) => {
          return labelsObject.name
        })}
        //converts from ISO-8601 date format
        date={parseISOString(element.created_at)}
      />
    )
  })

  const Column = ({ title, content }: Props) => {
    return (
      <div className="bg-dark-blue min-h-full">
        <h3 className="text-green text-center p-2 text-2xl">{title}</h3>
        {content}
      </div>
    )
  }
  return (
    <div className="grid grid-cols-4 bg-blue gap-6 m-10 p-6 min-h-screen">
      <Column title="To Do" content={TicketInfo} />
      <Column title="In Progress" />
      <Column title="Needs Review" />
      <Column title="Done" />
    </div>
  )
}
