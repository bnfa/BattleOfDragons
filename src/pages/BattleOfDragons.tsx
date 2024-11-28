import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useAppDispatch } from "../app/hooks"
import { Title } from "../components/title/Title"
import { DragonsList } from "../components/DragonList/DragonsList"
import { DragonCard } from "../components/DragonCard/DragonCard"
import { selectDragons, selectSelectedDragons, selectedComputerDragons, battleResult } from "../reducers/dragons.selectors"
import { BattleSection, StartBattleButton, BattleResult } from "./BattleOfDragons.styled"
import { fetchBattleResult, fetchDragonsData } from "../reducers/dragons.actions"

const BattleOfDragons = () => {
    const dispatch = useAppDispatch();

    const dragons = useSelector(selectDragons);
    const selectedDragon = useSelector(selectSelectedDragons);
    const selectComputerDragon = useSelector(selectedComputerDragons);
    const result = useSelector(battleResult);

    useEffect(() => {
        dispatch(fetchDragonsData())
    }, []);

    const handleStartBattleClick = () => {
        
        dispatch(fetchBattleResult({ playerDragon: selectedDragon, computerDragon: selectComputerDragon }))
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '35px',
            maxWidth: '820px',
            margin: '0 auto'
        }}>
            <Title>Battle of Dragons</Title>
            <DragonsList dragons={dragons} />
            {result && selectedDragon &&
                <BattleResult>
                    {result?.winner.name} wins!
                </BattleResult>
            }
            <BattleSection>
                <DragonCard title={selectedDragon?.name || "Player"} dragon={selectedDragon} />
                <StartBattleButton data-testid="start-battle-button" disabled={selectedDragon === null} onClick={handleStartBattleClick}>Let them fight</StartBattleButton>
                <DragonCard title={selectComputerDragon?.name || "Computer"} dragon={selectComputerDragon} />
            </BattleSection>
        </div>
    )
}

export { BattleOfDragons }