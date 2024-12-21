import React from 'react'
import { members } from '../test/constant';
import { useParams } from 'react-router-dom';

export default function MemberDetail() {
    const { id } = useParams();
    const member = members.find((item) => item.id === parseInt(id));
  return (
    <div>{member.name}</div>
  )
}
