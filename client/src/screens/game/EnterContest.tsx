import React from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../app/hooks'
import { AppDispatch } from '../../app/store'
import { rollContestResultAsync, selectContestId } from '../../slices/contestSlice'
import { selectGameId } from '../../slices/gameSlice'
import { selectPlayers } from '../../slices/playerSlice'
import { EditContestant } from './EditContestant'
import { ReadySummary } from './ReadySummary'

const rollResultsHandler = (dispatch: AppDispatch, gameId: string, contestId: string) => () => {
    dispatch(rollContestResultAsync({ gameId, contestId }))
}

export const EnterContest = () => {
    const dispatch = useAppDispatch()
    const gameId = useSelector(selectGameId)
    const contestId = useSelector(selectContestId)
    const players = useSelector(selectPlayers)

    if (gameId === undefined || contestId === undefined) {
        return <></>
    }

    return (
        <div>
            <h2>Enter the Contest</h2>
            {players.map((playa) => (
                <EditContestant key={`enter-contest-player-${playa.id}`} player={playa} />
            ))}
            <ReadySummary />
            <button onClick={rollResultsHandler(dispatch, gameId, contestId)}>Roll Player Results</button>
        </div>
    )
}
