import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { Dragon } from "../../../../server/models/Dragon.interface";
import { setSelectedDragon, setSelectedComputerDragon } from "../../reducers/dragons.actions";
import { DragonNameTag, DragonName, DragonSection, ListTitle } from "./DragonsList.styled";

type DragonsListProps = {
    dragons: Dragon[]
}

const DragonsList: React.FC<DragonsListProps> = ({ dragons }) => {
    const dispatch = useAppDispatch();

    const [firstSelectedDragonId, setSelectedDragonId] = useState<string | null>(null);
    const [secondSelectedDragonId, setSecondSelectedDragonId] = useState<string | null>(null);

    const handleFirstDragonSelect = async (dragon: Dragon) => {
        const value = firstSelectedDragonId === dragon.id ? null : dragon.id;
        setSelectedDragonId(value);
        dispatch(setSelectedDragon(!value ? null : dragon));

    }

    const handleSecondDragonSelect = async (dragon: Dragon) => {
        setSecondSelectedDragonId(dragon.id);
        
        dispatch(setSelectedComputerDragon(dragon));
    }

    return (
        <div>
            <ListTitle>{dragons.length > 0 ? 'Select your dragon' : 'No dragons available'}</ListTitle>

            <DragonSection data-testid="dragons-list-section">
                {dragons.map(dragons => (
                    <DragonNameTag
                        key={dragons.id}
                        onClick={() => handleFirstDragonSelect(dragons)}
                        selected={dragons.id === firstSelectedDragonId}
                        data-testid={dragons.id}
                    >
                        <DragonName>
                            {dragons.name}
                        </DragonName>
                    </DragonNameTag>
                ))}
            </DragonSection>
            {firstSelectedDragonId && <DragonSection data-testid="dragons-list-section">
                {dragons.map(dragons => (
                    firstSelectedDragonId !== dragons.id && <DragonNameTag
                        key={dragons.id}
                        onClick={() => handleSecondDragonSelect(dragons)}
                        selected={dragons.id === secondSelectedDragonId}
                        data-testid={dragons.id}
                    >
                        <DragonName>
                            {dragons.name}
                        </DragonName>
                    </DragonNameTag>
                ))}
            </DragonSection>}
        </div>
    )
}

export { DragonsList }