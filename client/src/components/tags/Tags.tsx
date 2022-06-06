import React from 'react'
import { HarmTagType } from '../../api/strife'
import { H4 } from '../H4'
import { Tag } from './Tag'

export interface TagsProps {
    tags: HarmTagType[]
}

export const Tags = ({ tags }: TagsProps) => {
    if (tags.length === 0) {
        return <></>
    }
    return (
        <>
            <H4>Harms</H4>
            {tags.map((tag, idx) => (
                <Tag key={`tags-${idx}`} tag={tag} />
            ))}
        </>
    )
}
